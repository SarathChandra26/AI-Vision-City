/**
 * AI VISION CITY - GLSL Segmentation and Post-Processing Shaders
 * Pixel-accurate GPU mask synthesis, depth decoding, edge extraction, and holographic scanner effects.
 */

// Vertex shader for full-screen quad post-processing
export const ScreenQuadVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Fragment shader for post-processing segmentation pipeline
export const SegmentationCompositeFragmentShader = `
  uniform sampler2D tDiffuse;
  uniform sampler2D tMask;
  uniform sampler2D tDepth;
  
  uniform int uMode; // 0: Normal, 1: Semantic, 2: Instance, 3: Panoptic, 4: Enemy, 5: Edge, 6: Depth
  uniform float uTime;
  uniform float uScanProgress;
  uniform vec2 uResolution;
  uniform float uCameraNear;
  uniform float uCameraFar;
  uniform float uTargetInstanceId;
  uniform float uBlendAmount;
  
  varying vec2 vUv;

  // Linearize camera depth buffer
  float readDepth(sampler2D depthSampler, vec2 coord) {
    float fragCoordZ = texture2D(depthSampler, coord).x;
    #if defined(USE_LOGDEPTHBUF)
      return fragCoordZ;
    #else
      float viewZ = (uCameraNear * uCameraFar) / ((uCameraFar - uCameraNear) * fragCoordZ - uCameraFar);
      return (-viewZ - uCameraNear) / (uCameraFar - uCameraNear);
    #endif
  }

  // Stable pseudo-random color hash from unique instance ID
  vec3 hashColor(float id) {
    if (id <= 0.0) return vec3(0.15, 0.15, 0.18);
    float hue = fract(id * 0.618033988749895 + 0.12);
    float sat = 0.85 + 0.15 * fract(id * 1.345);
    float val = 0.90 + 0.10 * fract(id * 2.789);
    
    // HSV to RGB conversion
    vec3 c = vec3(hue * 6.0, sat, val);
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }

  // Get semantic class color based on prompt specifications:
  // 1: Road (Grey), 2: Buildings (Blue), 3: Vehicles (Yellow), 4: Pedestrians (Green),
  // 5: Trees/Foliage (Dark Green), 6: Sky (Light Blue), 7: Sidewalks (Orange), 8: Urban Props (Purple/Cyan), 9: Enemies (Crimson)
  vec3 getSemanticColor(float classId) {
    int id = int(classId + 0.5);
    if (id == 1) return vec3(0.42, 0.44, 0.48); // Road: Grey
    if (id == 2) return vec3(0.18, 0.42, 0.85); // Buildings: Blue
    if (id == 3) return vec3(0.96, 0.82, 0.12); // Vehicles: Yellow
    if (id == 4) return vec3(0.18, 0.82, 0.38); // Pedestrians: Green
    if (id == 5) return vec3(0.10, 0.52, 0.18); // Trees: Dark Green
    if (id == 6) return vec3(0.42, 0.72, 0.98); // Sky: Light Blue
    if (id == 7) return vec3(0.96, 0.54, 0.15); // Sidewalks: Orange
    if (id == 8) return vec3(0.25, 0.75, 0.75); // Props/Signs: Teal
    if (id == 9) return vec3(0.92, 0.15, 0.22); // Enemies: Crimson
    return vec3(0.20, 0.22, 0.25);              // Background/Default
  }

  // Fast, lightweight 4-tap edge filter across masks & depth
  float computeEdges(vec2 uv) {
    vec2 texel = 1.0 / uResolution;
    
    // Efficient 4-tap cross filter (4 reads instead of 12)
    float m0 = texture2D(tMask, uv - vec2(texel.x, 0.0)).r;
    float m1 = texture2D(tMask, uv + vec2(texel.x, 0.0)).r;
    float m2 = texture2D(tMask, uv - vec2(0.0, texel.y)).r;
    float m3 = texture2D(tMask, uv + vec2(0.0, texel.y)).r;
    float maskEdge = (abs(m1 - m0) + abs(m3 - m2)) * 6.0;

    // Fast depth difference for contour boundaries
    float d0 = readDepth(tDepth, uv - vec2(texel.x, 0.0));
    float d1 = readDepth(tDepth, uv + vec2(texel.x, 0.0));
    float d2 = readDepth(tDepth, uv - vec2(0.0, texel.y));
    float d3 = readDepth(tDepth, uv + vec2(0.0, texel.y));
    float depthEdge = (abs(d1 - d0) + abs(d3 - d2)) * 25.0;

    return clamp(max(maskEdge, depthEdge), 0.0, 1.0);
  }

  // Turbo / Scientific depth false-color colormap
  vec3 depthColormap(float t) {
    t = clamp(t, 0.0, 1.0);
    // Near = vibrant cyan/green, Mid = yellow/orange, Far = deep violet/magenta
    vec3 c1 = vec3(0.05, 0.85, 0.95);
    vec3 c2 = vec3(0.10, 0.90, 0.35);
    vec3 c3 = vec3(0.98, 0.82, 0.10);
    vec3 c4 = vec3(0.95, 0.20, 0.40);
    vec3 c5 = vec3(0.25, 0.05, 0.60);
    
    if (t < 0.25) return mix(c1, c2, t / 0.25);
    if (t < 0.50) return mix(c2, c3, (t - 0.25) / 0.25);
    if (t < 0.75) return mix(c3, c4, (t - 0.50) / 0.25);
    return mix(c4, c5, (t - 0.75) / 0.25);
  }

  void main() {
    vec4 beauty = texture2D(tDiffuse, vUv);
    vec4 maskSample = texture2D(tMask, vUv);
    
    // Decode mask metadata
    float semanticId = floor(maskSample.r * 255.0 + 0.5);
    float instanceLo = floor(maskSample.g * 255.0 + 0.5);
    float instanceHi = floor(maskSample.b * 255.0 + 0.5);
    float instanceId = instanceLo + instanceHi * 255.0;
    bool isEnemy = maskSample.a > 0.5;
    
    // Only compute depth/edges when necessary to maximize GPU performance (60+ FPS lock)
    float linDepth = 0.0;
    float edge = 0.0;
    if (uMode == 6) {
      linDepth = readDepth(tDepth, vUv);
      edge = computeEdges(vUv);
    } else if (uMode == 1 || uMode == 2 || uMode == 3 || uMode == 5) {
      edge = computeEdges(vUv);
    }

    // Subtle luminance of beauty pass to preserve realistic scene shading & occlusion
    float lum = dot(beauty.rgb, vec3(0.299, 0.587, 0.114));

    vec3 finalColor = beauty.rgb;

    // Mode 0: NORMAL VISION (GTA V / Cinematic AAA Color Grading, Bloom & Lens Vignette)
    if (uMode == 0) {
      // 1. Cinematic Lens Vignette
      vec2 uvOffset = (vUv - 0.5) * 2.0;
      float vignette = 1.0 - dot(uvOffset, uvOffset) * 0.22;
      vec3 color = beauty.rgb * vignette;

      // 2. Specular Bloom on neon signs, headlights & sun glints
      vec3 bloom = max(color - vec3(0.72), vec3(0.0)) * 0.55;

      // 3. ACES Filmic Tone Mapping Curve
      vec3 x = color + bloom;
      float a = 2.51;
      float b = 0.03;
      float c = 2.43;
      float d = 0.59;
      float e = 0.14;
      finalColor = clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
    }
    // Mode 1: SEMANTIC SEGMENTATION
    else if (uMode == 1) {
      vec3 semColor = getSemanticColor(semanticId);
      // Blend category color with subtle scene lighting for occlusion
      vec3 shadedSem = semColor * (0.45 + 0.55 * lum);
      // Clean overlay with thin boundary lines
      finalColor = mix(shadedSem, vec3(1.0), edge * 0.4);
    }
    // Mode 2: INSTANCE SEGMENTATION
    else if (uMode == 2) {
      if (instanceId > 0.0) {
        // Individual countable object has distinct instance color
        vec3 instColor = hashColor(instanceId);
        vec3 shadedInst = instColor * (0.50 + 0.50 * lum);
        // Highlight active targeted instance
        if (abs(instanceId - uTargetInstanceId) < 0.5 && uTargetInstanceId > 0.0) {
          float pulse = 0.5 + 0.5 * sin(uTime * 8.0);
          shadedInst = mix(shadedInst, vec3(1.0, 1.0, 1.0), pulse * 0.4);
        }
        finalColor = mix(shadedInst, vec3(1.0), edge * 0.6);
      } else {
        // Background stuff rendered in desaturated blueprint tone
        vec3 bg = mix(beauty.rgb, vec3(lum * 0.35 + 0.05, lum * 0.40 + 0.08, lum * 0.50 + 0.12), 0.75);
        finalColor = mix(bg, vec3(0.4, 0.6, 0.8), edge * 0.25);
      }
    }
    // Mode 3: PANOPTIC SEGMENTATION (Stuff = semantic category, Things = unique instance)
    else if (uMode == 3) {
      if (instanceId > 0.0) {
        // Countable things: unique instance color
        vec3 instColor = hashColor(instanceId);
        vec3 shadedInst = instColor * (0.50 + 0.50 * lum);
        finalColor = mix(shadedInst, vec3(1.0), edge * 0.6);
      } else {
        // Background stuff: semantic category color
        vec3 semColor = getSemanticColor(semanticId);
        vec3 shadedSem = semColor * (0.40 + 0.60 * lum);
        finalColor = mix(shadedSem, vec3(0.9), edge * 0.35);
      }
    }
    // Mode 4: ENEMY SCAN (Tactical vision: glowing infrared crimson enemies, tech world)
    else if (uMode == 4) {
      // World desaturated tactical night-vision / blueprint
      vec3 tacticalWorld = vec3(lum * 0.28, lum * 0.42, lum * 0.50);
      tacticalWorld += vec3(0.0, 0.04, 0.06); // Subtle cyber teal tint

      if (isEnemy) {
        // Enemy highlighted in pulsing tactical infrared crimson
        float pulse = 0.85 + 0.15 * sin(uTime * 6.0);
        vec3 enemyColor = vec3(1.0, 0.10, 0.15) * pulse;
        finalColor = mix(tacticalWorld, enemyColor, 0.92);
      } else if (instanceId > 0.0) {
        // Neutral civilian / vehicles in subtle tactical cyan
        vec3 neutralThing = vec3(0.12, 0.65, 0.85) * (0.4 + 0.6 * lum);
        finalColor = mix(tacticalWorld, neutralThing, 0.40);
      } else {
        finalColor = tacticalWorld;
      }
    }
    // Mode 5: EDGE DETECTION (Geometric & semantic boundary contours)
    else if (uMode == 5) {
      // Dark cyber background with neon cyan and amber boundary edges
      vec3 darkBg = vec3(0.04, 0.05, 0.07) + beauty.rgb * 0.08;
      vec3 edgeColor = mix(vec3(0.0, 0.85, 1.0), vec3(1.0, 0.70, 0.10), edge);
      finalColor = mix(darkBg, edgeColor, edge);
    }
    // Mode 6: DEPTH VIEW (Linear metric depth colormap)
    else if (uMode == 6) {
      // Exponential curve for depth perception clarity
      float curvedDepth = pow(clamp(linDepth * 3.5, 0.0, 1.0), 0.75);
      vec3 depthColor = depthColormap(curvedDepth);
      // Emphasize silhouettes with subtle contour lines
      finalColor = mix(depthColor, vec3(0.0), edge * 0.5);
    }

    // Holographic scanline sweep effect during transition
    if (uScanProgress < 0.999 && uScanProgress > 0.001) {
      float scanY = uScanProgress;
      float distToScan = abs(vUv.y - scanY);
      if (distToScan < 0.035) {
        float intensity = 1.0 - (distToScan / 0.035);
        finalColor += vec3(0.0, 0.9, 1.0) * intensity * 0.75;
      }
    }

    // Blend with original image if requested
    gl_FragColor = vec4(mix(beauty.rgb, finalColor, uBlendAmount), 1.0);
  }
`;

// Shader Material for the offscreen ID / Mask Render Pass
export const MaskIdVertexShader = `
  #include <skinning_pars_vertex>
  
  void main() {
    #include <skinbase_vertex>
    #include <begin_vertex>
    #include <skinning_vertex>
    #include <project_vertex>
  }
`;

export const MaskIdFragmentShader = `
  uniform float uSemanticId;
  uniform float uInstanceId;
  uniform float uIsEnemy;

  void main() {
    float semNorm = uSemanticId / 255.0;
    float instLo = fract(uInstanceId / 255.0);
    float instHi = floor(uInstanceId / 255.0) / 255.0;
    float enemyFlag = uIsEnemy > 0.5 ? 1.0 : 0.0;
    
    gl_FragColor = vec4(semNorm, instLo, instHi, enemyFlag);
  }
`;
