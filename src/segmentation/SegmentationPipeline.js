/**
 * AI VISION CITY - Segmentation Pipeline
 * Manages dual render targets (Beauty Pass & GPU Mask ID Pass), depth buffers,
 * and the composite screen post-processing shader.
 */
import * as THREE from 'three';
import {
  ScreenQuadVertexShader,
  SegmentationCompositeFragmentShader,
  MaskIdVertexShader,
  MaskIdFragmentShader
} from '../shaders/segmentationShaders.js';

export const SEGMENTATION_MODES = {
  NORMAL: 0,
  SEMANTIC: 1,
  INSTANCE: 2,
  PANOPTIC: 3,
  ENEMY_SCAN: 4,
  EDGE_DETECTION: 5,
  DEPTH_VIEW: 6
};

export const SEMANTIC_CLASSES = {
  NONE: 0,
  ROAD: 1,
  BUILDING: 2,
  VEHICLE: 3,
  PEDESTRIAN: 4,
  TREE: 5,
  SKY: 6,
  SIDEWALK: 7,
  PROP: 8,
  ENEMY: 9
};

export class SegmentationPipeline {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    this.currentMode = SEGMENTATION_MODES.ENEMY_SCAN; // Default directly to Tactical Threat Scan mode
    this.targetInstanceId = 0;
    this.scanProgress = 1.0;
    this.isScanning = false;
    this.blendAmount = 1.0;

    // Cache registered segmentable objects
    this.registeredObjects = new Map(); // id -> metadata
    this.instanceCounters = {
      vehicles: 0,
      pedestrians: 0,
      enemies: 0,
      props: 0
    };
    this.taggedMeshes = [];

    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = 1.0; // Optimized 1.0 pixel ratio for guaranteed smooth 60 FPS on all laptops

    // 1. Beauty Render Target (Full lighting, shadows, PBR)
    this.beautyTarget = new THREE.WebGLRenderTarget(width * pixelRatio, height * pixelRatio, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.HalfFloatType
    });

    // 2. Depth Texture
    this.depthTexture = new THREE.DepthTexture(width * pixelRatio, height * pixelRatio);
    this.depthTexture.type = THREE.UnsignedIntType;

    // 3. Mask & Metadata Render Target
    this.maskTarget = new THREE.WebGLRenderTarget(width * pixelRatio, height * pixelRatio, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      depthTexture: this.depthTexture,
      depthBuffer: true
    });

    // Post-processing Quad Scene
    this.postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.postScene = new THREE.Scene();
    
    this.compositeMaterial = new THREE.ShaderMaterial({
      vertexShader: ScreenQuadVertexShader,
      fragmentShader: SegmentationCompositeFragmentShader,
      uniforms: {
        tDiffuse: { value: this.beautyTarget.texture },
        tMask: { value: this.maskTarget.texture },
        tDepth: { value: this.depthTexture },
        uMode: { value: this.currentMode },
        uTime: { value: 0.0 },
        uScanProgress: { value: 1.0 },
        uResolution: { value: new THREE.Vector2(width * pixelRatio, height * pixelRatio) },
        uCameraNear: { value: camera.near },
        uCameraFar: { value: camera.far },
        uTargetInstanceId: { value: 0.0 },
        uBlendAmount: { value: 1.0 }
      },
      depthWrite: false,
      depthTest: false
    });

    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.compositeMaterial);
    this.postScene.add(quad);

    // Material cache for Mask Pass
    this.maskMaterials = new Map();
    this.skinnedMaskMaterials = new Map();

    window.addEventListener('resize', this.onResize.bind(this));
  }

  // Register an object with semantic class, unique instance ID, and enemy status
  registerObject(object3D, options = {}) {
    const semanticClass = options.semanticClass || SEMANTIC_CLASSES.NONE;
    const instanceId = options.instanceId !== undefined ? options.instanceId : 0;
    const isEnemy = !!options.isEnemy;
    const categoryName = options.categoryName || 'Unknown';
    const label = options.label || `Object_${instanceId}`;

    object3D.traverse((child) => {
      if (child.isMesh) {
        child.userData.semanticClassId = semanticClass;
        child.userData.instanceId = instanceId;
        child.userData.isEnemy = isEnemy;
        child.userData.categoryName = categoryName;
        child.userData.label = label;
        child.userData.rootObject = object3D;

        // Assign dedicated mask materials
        const isSkinned = child.isSkinnedMesh;
        child.userData.maskMaterial = this.getOrCreateMaskMaterial(
          semanticClass,
          instanceId,
          isEnemy,
          isSkinned
        );

        if (!this.taggedMeshes.includes(child)) {
          this.taggedMeshes.push(child);
        }
      }
    });

    if (instanceId > 0) {
      this.registeredObjects.set(instanceId, {
        object: object3D,
        semanticClass,
        instanceId,
        isEnemy,
        categoryName,
        label
      });
    }

    return instanceId;
  }

  getOrCreateMaskMaterial(semanticClass, instanceId, isEnemy, isSkinned) {
    const key = `${semanticClass}_${instanceId}_${isEnemy ? 1 : 0}_${isSkinned ? 1 : 0}`;
    const cache = isSkinned ? this.skinnedMaskMaterials : this.maskMaterials;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const mat = new THREE.ShaderMaterial({
      vertexShader: MaskIdVertexShader,
      fragmentShader: MaskIdFragmentShader,
      uniforms: {
        uSemanticId: { value: semanticClass },
        uInstanceId: { value: instanceId },
        uIsEnemy: { value: isEnemy ? 1.0 : 0.0 }
      },
      skinning: isSkinned,
      side: THREE.DoubleSide
    });

    cache.set(key, mat);
    return mat;
  }

  setMode(mode) {
    if (this.currentMode === mode) return;
    this.currentMode = mode;
    this.compositeMaterial.uniforms.uMode.value = mode;

    // Trigger holographic scanner sweep transition
    this.scanProgress = 0.0;
    this.isScanning = true;
  }

  setTargetInstance(instanceId) {
    this.targetInstanceId = instanceId;
    this.compositeMaterial.uniforms.uTargetInstanceId.value = instanceId;
  }

  update(delta, elapsedTime) {
    this.compositeMaterial.uniforms.uTime.value = elapsedTime;

    // Holographic scanline animation sweep
    if (this.isScanning) {
      this.scanProgress += delta * 2.2;
      if (this.scanProgress >= 1.0) {
        this.scanProgress = 1.0;
        this.isScanning = false;
      }
      this.compositeMaterial.uniforms.uScanProgress.value = this.scanProgress;
    }
  }

  render(delta, elapsedTime) {
    this.update(delta, elapsedTime);

    // Step 1: Render Beauty Pass (Realistic City, Shadows, PBR, Sky)
    this.renderer.setRenderTarget(this.beautyTarget);
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);

    // Fast Optimization for Normal Vision: Skip Mask Pass if in Mode 0 (Normal Vision)
    if (this.currentMode === SEGMENTATION_MODES.NORMAL && !this.isScanning) {
      this.renderer.setRenderTarget(null);
      this.renderer.render(this.postScene, this.postCamera);
      return;
    }

    // Step 2: Render Mask & Metadata Pass (Semantic IDs, Instance IDs, Enemy Flags, Depth)
    const originalBackground = this.scene.background;
    this.scene.background = new THREE.Color(0x000000); // Black background for non-tagged elements

    const len = this.taggedMeshes.length;
    for (let i = 0; i < len; i++) {
      const mesh = this.taggedMeshes[i];
      if (mesh.userData.maskMaterial) {
        mesh.__origMat = mesh.material;
        mesh.material = mesh.userData.maskMaterial;
      }
    }

    this.renderer.setRenderTarget(this.maskTarget);
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);

    // Restore original materials instantly with zero GC overhead
    for (let i = 0; i < len; i++) {
      const mesh = this.taggedMeshes[i];
      if (mesh.__origMat) {
        mesh.material = mesh.__origMat;
      }
    }
    this.scene.background = originalBackground;

    // Step 3: Screen Composite Pass
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.postScene, this.postCamera);
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = 1.0; // Optimized 1.0 pixel ratio for guaranteed smooth 60 FPS on all laptops

    this.beautyTarget.setSize(width * pixelRatio, height * pixelRatio);
    this.maskTarget.setSize(width * pixelRatio, height * pixelRatio);
    this.compositeMaterial.uniforms.uResolution.value.set(width * pixelRatio, height * pixelRatio);
  }

  // Get active statistics for scanner HUD
  getLiveStatistics() {
    let vehicleCount = 0;
    let pedestrianCount = 0;
    let enemyCount = 0;
    let propCount = 0;

    for (const [id, meta] of this.registeredObjects) {
      if (meta.semanticClass === SEMANTIC_CLASSES.VEHICLE) vehicleCount++;
      else if (meta.semanticClass === SEMANTIC_CLASSES.PEDESTRIAN) pedestrianCount++;
      else if (meta.isEnemy || meta.semanticClass === SEMANTIC_CLASSES.ENEMY) enemyCount++;
      else if (meta.semanticClass === SEMANTIC_CLASSES.PROP) propCount++;
    }

    return {
      vehicles: vehicleCount,
      pedestrians: pedestrianCount,
      enemies: enemyCount,
      props: propCount,
      totalInstances: this.registeredObjects.size
    };
  }
}
