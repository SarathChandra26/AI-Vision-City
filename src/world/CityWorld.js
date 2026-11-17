/**
 * AI VISION CITY - Open-World Urban Environment
 * Detailed city district with 4-way intersection, multi-lane roads, elevated sidewalks,
 * multi-story buildings, storefronts, animated traffic lights, streetlights, and parks.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TextureGenerator } from './TextureGenerator.js';
import { SEMANTIC_CLASSES } from '../segmentation/SegmentationPipeline.js';

export class CityWorld {
  constructor(scene, segmentationPipeline) {
    this.scene = scene;
    this.segmentationPipeline = segmentationPipeline;
    this.loader = new GLTFLoader();

    this.collisionBoxes = [];
    this.buildingMeshes = [];
    this.trafficLights = [];
    this.streetlights = [];
    this.trafficSignalState = 'GREEN_NS'; // Cycles: GREEN_NS -> YELLOW_NS -> GREEN_EW -> YELLOW_EW
    this.trafficTimer = 0.0;

    this.initAtmosphereAndLighting();
    this.createRoadsAndSidewalks();
    this.createCityBlocksAndBuildings();
    this.createPropsAndSignals();
    this.createPark();
    this.createNeonSignage();
    this.createUrbanStreetProps();
  }

  initAtmosphereAndLighting() {
    // 1. Natural daylight sky gradient dome
    const vertexShader = `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    const fragmentShader = `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + offset).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
      }
    `;
    const uniforms = {
      topColor: { value: new THREE.Color(0x3a7bd5) },      // Sky blue
      bottomColor: { value: new THREE.Color(0xd6e4f0) },   // Warm horizon haze
      offset: { value: 33 },
      exponent: { value: 0.6 }
    };
    const skyGeo = new THREE.SphereGeometry(300, 32, 15);
    const skyMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.BackSide,
      depthWrite: false
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(sky);

    // Tag Sky in Segmentation Pipeline
    this.segmentationPipeline.registerObject(sky, {
      semanticClass: SEMANTIC_CLASSES.SKY,
      categoryName: 'Sky',
      label: 'Atmospheric Sky'
    });

    // 2. Realistic Environmental Fog
    this.scene.fog = new THREE.FogExp2(0xd6e4f0, 0.0075);

    // 3. Hemisphere Ambient Skylight
    const hemiLight = new THREE.HemisphereLight(0xfff6ec, 0x3d4b5c, 1.1);
    hemiLight.position.set(0, 50, 0);
    this.scene.add(hemiLight);

    // 4. Directional Sunlight with Cascaded Soft Shadows
    this.sunLight = new THREE.DirectionalLight(0xfff4e0, 2.2);
    this.sunLight.position.set(45, 65, 35);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 1024;
    this.sunLight.shadow.mapSize.height = 1024;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 160;
    
    const d = 55;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0004;
    this.sunLight.shadow.radius = 2.0; // Soft shadow edges
    this.scene.add(this.sunLight);
  }

  createRoadsAndSidewalks() {
    const roadTex = TextureGenerator.createRoadTexture();
    const crosswalkTex = TextureGenerator.createCrosswalkTexture();
    const sidewalkTex = TextureGenerator.createSidewalkTexture();

    roadTex.repeat.set(1, 10);
    // GTA V wet asphalt shader parameters (specular sheen, reflective highlights)
    const roadMat = new THREE.MeshStandardMaterial({
      map: roadTex,
      roughness: 0.38,
      metalness: 0.22,
      envMapIntensity: 1.2
    });

    // 1. North-South Main Avenue (Z-axis, width 14m, length 140m)
    const nsRoadGeo = new THREE.PlaneGeometry(14, 140);
    const nsRoad = new THREE.Mesh(nsRoadGeo, roadMat);
    nsRoad.rotation.x = -Math.PI / 2;
    nsRoad.position.set(0, 0.01, 0);
    nsRoad.receiveShadow = true;
    this.scene.add(nsRoad);
    this.segmentationPipeline.registerObject(nsRoad, {
      semanticClass: SEMANTIC_CLASSES.ROAD,
      categoryName: 'Road',
      label: 'Main Avenue (North-South)'
    });

    // 2. East-West Cross Street (X-axis, width 12m, length 140m)
    const ewRoadTex = TextureGenerator.createRoadTexture();
    ewRoadTex.repeat.set(1, 10);
    const ewRoadMat = new THREE.MeshStandardMaterial({
      map: ewRoadTex,
      roughness: 0.38,
      metalness: 0.22,
      envMapIntensity: 1.2
    });
    const ewRoadGeo = new THREE.PlaneGeometry(12, 140);
    const ewRoad = new THREE.Mesh(ewRoadGeo, ewRoadMat);
    ewRoad.rotation.x = -Math.PI / 2;
    ewRoad.rotation.z = Math.PI / 2;
    ewRoad.position.set(0, 0.015, 0);
    ewRoad.receiveShadow = true;
    this.scene.add(ewRoad);
    this.segmentationPipeline.registerObject(ewRoad, {
      semanticClass: SEMANTIC_CLASSES.ROAD,
      categoryName: 'Road',
      label: 'Cross Street (East-West)'
    });

    // 3. Central Intersection Square
    const intGeo = new THREE.PlaneGeometry(14, 14);
    const intMat = new THREE.MeshStandardMaterial({
      color: 0x22252a,
      roughness: 0.90,
      metalness: 0.05
    });
    const intMesh = new THREE.Mesh(intGeo, intMat);
    intMesh.rotation.x = -Math.PI / 2;
    intMesh.position.set(0, 0.02, 0);
    intMesh.receiveShadow = true;
    this.scene.add(intMesh);
    this.segmentationPipeline.registerObject(intMesh, {
      semanticClass: SEMANTIC_CLASSES.ROAD,
      categoryName: 'Road',
      label: 'Central Intersection'
    });

    // 4. Pedestrian Crosswalk Zebra Stripes
    const crosswalkMat = new THREE.MeshStandardMaterial({
      map: crosswalkTex,
      roughness: 0.75,
      metalness: 0.05,
      transparent: true
    });

    const crosswalkConfigs = [
      { x: 0, z: 9.5, rotY: 0, w: 14, l: 3.5, label: 'Crosswalk North' },
      { x: 0, z: -9.5, rotY: 0, w: 14, l: 3.5, label: 'Crosswalk South' },
      { x: 8.5, z: 0, rotY: Math.PI / 2, w: 12, l: 3.5, label: 'Crosswalk East' },
      { x: -8.5, z: 0, rotY: Math.PI / 2, w: 12, l: 3.5, label: 'Crosswalk West' },
    ];

    crosswalkConfigs.forEach((cfg) => {
      const cwGeo = new THREE.PlaneGeometry(cfg.w, cfg.l);
      const cw = new THREE.Mesh(cwGeo, crosswalkMat);
      cw.rotation.x = -Math.PI / 2;
      cw.rotation.z = cfg.rotY;
      cw.position.set(cfg.x, 0.025, cfg.z);
      cw.receiveShadow = true;
      this.scene.add(cw);
      this.segmentationPipeline.registerObject(cw, {
        semanticClass: SEMANTIC_CLASSES.ROAD,
        categoryName: 'Road',
        label: cfg.label
      });
    });

    // 5. Elevated Sidewalk Curbs (Height: 0.18m, concrete pavers)
    const sidewalkMat = new THREE.MeshStandardMaterial({
      map: sidewalkTex,
      roughness: 0.82,
      metalness: 0.10
    });

    // 4 Quadrants for sidewalks: NE, NW, SE, SW
    const blockConfigs = [
      { x: 38, z: 38, w: 60, l: 60, name: 'North-East Block Sidewalk' },
      { x: -38, z: 38, w: 60, l: 60, name: 'North-West Block Sidewalk' },
      { x: 38, z: -38, w: 60, l: 60, name: 'South-East Block Sidewalk' },
      { x: -38, z: -38, w: 60, l: 60, name: 'South-West Block Sidewalk' },
    ];

    blockConfigs.forEach((block) => {
      const sidewalkBox = new THREE.BoxGeometry(block.w, 0.18, block.l);
      const sidewalk = new THREE.Mesh(sidewalkBox, sidewalkMat);
      sidewalk.position.set(block.x, 0.09, block.z);
      sidewalk.receiveShadow = true;
      sidewalk.castShadow = true;
      this.scene.add(sidewalk);
      this.segmentationPipeline.registerObject(sidewalk, {
        semanticClass: SEMANTIC_CLASSES.SIDEWALK,
        categoryName: 'Sidewalk',
        label: block.name
      });
    });
  }

  createCityBlocksAndBuildings() {
    // Array of real 3D building models to place in urban districts
    const buildingPlacements = [
      // North-East Urban District
      { model: '/assets/buildings/building_large1.glb', x: 22, z: 24, scale: 2.2, rotY: 0, w: 16, l: 16, label: 'Vertex Corporate Tower' },
      { model: '/assets/buildings/building_4story.glb', x: 44, z: 22, scale: 2.4, rotY: -Math.PI / 2, w: 14, l: 14, label: 'Metro Center Plaza' },
      { model: '/assets/buildings/building_store.glb', x: 20, z: 46, scale: 2.2, rotY: 0, w: 12, l: 12, label: 'City Galleria Retail' },
      { model: '/assets/buildings/building_2story.glb', x: 42, z: 46, scale: 2.4, rotY: Math.PI, w: 14, l: 14, label: 'Grandview Apartments' },

      // North-West Commercial & Office District
      { model: '/assets/buildings/building_large2.glb', x: -22, z: 24, scale: 2.2, rotY: Math.PI / 2, w: 16, l: 16, label: 'Nexus Financial Tower' },
      { model: '/assets/buildings/building_big3.glb', x: -44, z: 22, scale: 2.2, rotY: 0, w: 16, l: 16, label: 'Apex Tech Headquarters' },
      { model: '/assets/buildings/building_4story.glb', x: -22, z: 46, scale: 2.4, rotY: Math.PI, w: 14, l: 14, label: 'Horizon Suites' },
      { model: '/assets/buildings/building_store.glb', x: -42, z: 46, scale: 2.2, rotY: -Math.PI / 2, w: 12, l: 12, label: 'Cyber Cafe & Deli' },

      // South-East Residential & Shops
      { model: '/assets/buildings/building_big3.glb', x: 24, z: -24, scale: 2.2, rotY: -Math.PI / 2, w: 16, l: 16, label: 'Elysium Highrise' },
      { model: '/assets/buildings/building_large1.glb', x: 48, z: -24, scale: 2.1, rotY: Math.PI, w: 16, l: 16, label: 'Skyline Business Center' },
      { model: '/assets/buildings/building_2story.glb', x: 22, z: -48, scale: 2.4, rotY: 0, w: 14, l: 14, label: 'Parkside Lofts' },
      { model: '/assets/buildings/building_store.glb', x: 44, z: -48, scale: 2.2, rotY: Math.PI / 2, w: 12, l: 12, label: 'Boutique Emporium' },

      // South-West Civic & Medical District
      { model: '/assets/buildings/building_large2.glb', x: -24, z: -24, scale: 2.2, rotY: 0, w: 16, l: 16, label: 'Municipal Medical Tower' },
      { model: '/assets/buildings/building_4story.glb', x: -48, z: -24, scale: 2.4, rotY: Math.PI / 2, w: 14, l: 14, label: 'Civic Research Institute' },
    ];

    buildingPlacements.forEach((bldg, index) => {
      this.loader.load(
        bldg.model,
        (gltf) => {
          const model = gltf.scene;
          model.position.set(bldg.x, 0.18, bldg.z);
          model.scale.set(bldg.scale, bldg.scale, bldg.scale);
          model.rotation.y = bldg.rotY;

          model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          this.scene.add(model);
          this.buildingMeshes.push(model);

          // Register in Segmentation Pipeline as Class BUILDING with unique instance ID
          const instanceId = 100 + index;
          this.segmentationPipeline.registerObject(model, {
            semanticClass: SEMANTIC_CLASSES.BUILDING,
            instanceId,
            categoryName: 'Building Architecture',
            label: bldg.label
          });

          // Add to player and camera collision boxes
          this.collisionBoxes.push({
            min: new THREE.Vector3(bldg.x - bldg.w * 0.5, 0, bldg.z - bldg.l * 0.5),
            max: new THREE.Vector3(bldg.x + bldg.w * 0.5, 50, bldg.z + bldg.l * 0.5)
          });
        },
        undefined,
        (err) => console.warn(`Error loading building model ${bldg.model}:`, err)
      );
    });
  }

  createPropsAndSignals() {
    // 1. Streetlights along Main Avenue and Cross Street
    const streetlightPositions = [
      { x: 8.5, z: 20, rotY: Math.PI / 2 },
      { x: -8.5, z: 20, rotY: -Math.PI / 2 },
      { x: 8.5, z: 42, rotY: Math.PI / 2 },
      { x: -8.5, z: 42, rotY: -Math.PI / 2 },
      { x: 8.5, z: -20, rotY: Math.PI / 2 },
      { x: -8.5, z: -20, rotY: -Math.PI / 2 },
      { x: 8.5, z: -42, rotY: Math.PI / 2 },
      { x: -8.5, z: -42, rotY: -Math.PI / 2 },
      { x: 22, z: 7.5, rotY: Math.PI },
      { x: -22, z: 7.5, rotY: Math.PI },
      { x: 22, z: -7.5, rotY: 0 },
      { x: -22, z: -7.5, rotY: 0 },
    ];

    streetlightPositions.forEach((pos, i) => {
      this.loader.load('/assets/environment/streetlight.glb', (gltf) => {
        const lightProp = gltf.scene;
        lightProp.position.set(pos.x, 0.18, pos.z);
        lightProp.scale.set(1.4, 1.4, 1.4);
        lightProp.rotation.y = pos.rotY;

        lightProp.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        this.scene.add(lightProp);

        this.segmentationPipeline.registerObject(lightProp, {
          semanticClass: SEMANTIC_CLASSES.PROP,
          instanceId: 200 + i,
          categoryName: 'Streetlight',
          label: `Streetlight_${i + 1}`
        });

        // Add soft warm point light to streetlight head
        const lampLight = new THREE.PointLight(0xfff0cc, 0.9, 14, 1.5);
        lampLight.position.set(pos.x, 4.2, pos.z);
        this.scene.add(lampLight);
        this.streetlights.push(lampLight);
      });
    });

    // 2. Traffic Signals at the 4 intersection corners with active colored signal lights
    const trafficSignalConfigs = [
      { x: 8.5, z: 8.5, rotY: -Math.PI * 0.75, id: 1 },
      { x: -8.5, z: 8.5, rotY: -Math.PI * 0.25, id: 2 },
      { x: 8.5, z: -8.5, rotY: Math.PI * 0.75, id: 3 },
      { x: -8.5, z: -8.5, rotY: Math.PI * 0.25, id: 4 },
    ];

    trafficSignalConfigs.forEach((cfg) => {
      this.loader.load('/assets/environment/traffic_light.glb', (gltf) => {
        const signal = gltf.scene;
        signal.position.set(cfg.x, 0.18, cfg.z);
        signal.scale.set(1.4, 1.4, 1.4);
        signal.rotation.y = cfg.rotY;

        signal.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
          }
        });

        this.scene.add(signal);

        // Signal glow sphere (simulates illuminated traffic bulb)
        const bulbGeo = new THREE.SphereGeometry(0.18, 16, 16);
        const bulbMat = new THREE.MeshBasicMaterial({ color: 0x00ff44 });
        const bulb = new THREE.Mesh(bulbGeo, bulbMat);
        bulb.position.set(cfg.x, 3.6, cfg.z);
        this.scene.add(bulb);

        this.trafficLights.push({
          mesh: signal,
          bulb: bulb,
          id: cfg.id
        });

        this.segmentationPipeline.registerObject(signal, {
          semanticClass: SEMANTIC_CLASSES.PROP,
          instanceId: 300 + cfg.id,
          categoryName: 'Traffic Signal',
          label: `Traffic Signal #${cfg.id}`
        });
      });
    });

    // 3. Stop Signs & No Parking Signs
    const signs = [
      { model: '/assets/environment/sign_stop.glb', x: 8.2, z: 12, rotY: 0, label: 'Stop Sign (North)' },
      { model: '/assets/environment/sign_stop.glb', x: -8.2, z: -12, rotY: Math.PI, label: 'Stop Sign (South)' },
      { model: '/assets/environment/sign_noparking.glb', x: 8.2, z: 30, rotY: Math.PI / 2, label: 'No Parking Sign' },
      { model: '/assets/environment/sign_noparking.glb', x: -8.2, z: -30, rotY: -Math.PI / 2, label: 'No Parking Sign' },
    ];

    signs.forEach((s, idx) => {
      this.loader.load(s.model, (gltf) => {
        const sign = gltf.scene;
        sign.position.set(s.x, 0.18, s.z);
        sign.scale.set(1.3, 1.3, 1.3);
        sign.rotation.y = s.rotY;
        this.scene.add(sign);

        this.segmentationPipeline.registerObject(sign, {
          semanticClass: SEMANTIC_CLASSES.PROP,
          instanceId: 400 + idx,
          categoryName: 'Road Sign',
          label: s.label
        });
      });
    });
  }

  createPark() {
    // Small park located in South-West block (X: -26 to -56, Z: -36 to -66)
    const grassTex = TextureGenerator.createGrassTexture();
    const grassMat = new THREE.MeshStandardMaterial({
      map: grassTex,
      roughness: 0.95,
      metalness: 0.02
    });

    const parkGeo = new THREE.BoxGeometry(32, 0.22, 32);
    const park = new THREE.Mesh(parkGeo, grassMat);
    park.position.set(-36, 0.11, -44);
    park.receiveShadow = true;
    this.scene.add(park);

    this.segmentationPipeline.registerObject(park, {
      semanticClass: SEMANTIC_CLASSES.TREE,
      categoryName: 'Urban Park',
      label: 'Central Green District'
    });

    // Trees inside park and along pedestrian boulevards
    const treePlacements = [
      { model: '/assets/environment/tree_birch1.glb', x: -28, z: -36, scale: 2.2, label: 'Birch Tree 1' },
      { model: '/assets/environment/tree_birch2.glb', x: -44, z: -36, scale: 2.5, label: 'Birch Tree 2' },
      { model: '/assets/environment/tree_birch3.glb', x: -36, z: -52, scale: 2.3, label: 'Birch Tree 3' },
      { model: '/assets/environment/tree_birch1.glb', x: -26, z: -50, scale: 2.4, label: 'Birch Tree 4' },
      { model: '/assets/environment/tree_birch2.glb', x: -46, z: -50, scale: 2.1, label: 'Birch Tree 5' },
      // Trees on North-East sidewalk
      { model: '/assets/environment/tree_birch3.glb', x: 10, z: 32, scale: 1.8, label: 'Boulevard Tree (NE 1)' },
      { model: '/assets/environment/tree_birch1.glb', x: 10, z: 54, scale: 1.8, label: 'Boulevard Tree (NE 2)' },
      // Trees on North-West sidewalk
      { model: '/assets/environment/tree_birch2.glb', x: -10, z: 32, scale: 1.8, label: 'Boulevard Tree (NW 1)' },
      { model: '/assets/environment/tree_birch3.glb', x: -10, z: 54, scale: 1.8, label: 'Boulevard Tree (NW 2)' },
    ];

    treePlacements.forEach((tree, idx) => {
      this.loader.load(tree.model, (gltf) => {
        const treeMesh = gltf.scene;
        treeMesh.position.set(tree.x, 0.18, tree.z);
        treeMesh.scale.set(tree.scale, tree.scale, tree.scale);
        treeMesh.rotation.y = Math.random() * Math.PI * 2;

        treeMesh.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        this.scene.add(treeMesh);

        this.segmentationPipeline.registerObject(treeMesh, {
          semanticClass: SEMANTIC_CLASSES.TREE,
          instanceId: 500 + idx,
          categoryName: 'Tree',
          label: tree.label
        });
      });
    });
  }

  createNeonSignage() {
    // Helper to generate high-resolution emissive neon billboard textures
    const createNeonTexture = (title, subtitle, mainColor, glowColor) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');

      // Dark smoked glass backing
      ctx.fillStyle = '#0a0d14';
      ctx.fillRect(0, 0, 512, 256);

      // Outer neon border
      ctx.strokeStyle = glowColor;
      ctx.lineWidth = 8;
      ctx.strokeRect(16, 16, 480, 224);

      // Inner thin neon border
      ctx.strokeStyle = mainColor;
      ctx.lineWidth = 4;
      ctx.strokeRect(22, 22, 468, 212);

      // Title
      ctx.font = 'bold 44px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = mainColor;
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 18;
      ctx.fillText(title, 256, 115);

      // Subtitle
      ctx.font = '600 22px sans-serif';
      ctx.fillStyle = glowColor;
      ctx.shadowBlur = 12;
      ctx.fillText(subtitle, 256, 165);

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const neonConfigs = [
      {
        title: 'VICE NIGHTS',
        subtitle: 'LOUNGE & CLUB',
        color: '#ff007f',
        glow: '#ff55aa',
        x: 14, y: 5.5, z: 46,
        rotY: -Math.PI / 2,
        lightColor: 0xff007f,
        label: 'Neon Sign (Vice Nights)'
      },
      {
        title: 'CYBER DELI',
        subtitle: '24/7 ROAST & BREW',
        color: '#ffaa00',
        glow: '#ffd566',
        x: -36, y: 5.2, z: 46,
        rotY: 0,
        lightColor: 0xffaa00,
        label: 'Neon Sign (Cyber Deli)'
      },
      {
        title: 'NEXUS TOWER',
        subtitle: 'FINANCIAL HEADQUARTERS',
        color: '#00f0ff',
        glow: '#80f8ff',
        x: -14, y: 9.0, z: 24,
        rotY: Math.PI / 2,
        lightColor: 0x00f0ff,
        label: 'Neon Sign (Nexus Tower)'
      },
      {
        title: 'METRO APEX',
        subtitle: 'LUXURY SUITES & DINING',
        color: '#00ff88',
        glow: '#80ffcc',
        x: 38, y: 8.5, z: 22,
        rotY: 0,
        lightColor: 0x00ff88,
        label: 'Neon Sign (Metro Apex)'
      }
    ];

    neonConfigs.forEach((cfg, idx) => {
      const tex = createNeonTexture(cfg.title, cfg.subtitle, cfg.color, cfg.glow);
      const signMat = new THREE.MeshStandardMaterial({
        map: tex,
        emissive: new THREE.Color(cfg.lightColor),
        emissiveMap: tex,
        emissiveIntensity: 1.6,
        roughness: 0.2,
        metalness: 0.8
      });

      const signGeo = new THREE.BoxGeometry(7.5, 3.8, 0.4);
      const signMesh = new THREE.Mesh(signGeo, signMat);
      signMesh.position.set(cfg.x, cfg.y, cfg.z);
      signMesh.rotation.y = cfg.rotY;
      signMesh.castShadow = true;
      this.scene.add(signMesh);

      // Real-time colored neon point light illuminating the sidewalk and walls
      const neonLight = new THREE.PointLight(cfg.lightColor, 1.8, 16, 1.8);
      neonLight.position.set(cfg.x, cfg.y - 1.2, cfg.z);
      this.scene.add(neonLight);

      this.segmentationPipeline.registerObject(signMesh, {
        semanticClass: SEMANTIC_CLASSES.PROP,
        instanceId: 600 + idx,
        categoryName: 'Neon Sign',
        label: cfg.label
      });
    });
  }

  createUrbanStreetProps() {
    // 1. Fire Hydrants at key street corners
    const hydrantConfigs = [
      { x: 7.8, z: 12 },
      { x: -7.8, z: 12 },
      { x: 7.8, z: -12 },
      { x: -7.8, z: -12 },
    ];

    const hydrantMat = new THREE.MeshStandardMaterial({
      color: 0xdd2222,
      roughness: 0.35,
      metalness: 0.7
    });
    const yellowCapMat = new THREE.MeshStandardMaterial({
      color: 0xe6b800,
      roughness: 0.4,
      metalness: 0.5
    });

    hydrantConfigs.forEach((pos, idx) => {
      const hydrantGroup = new THREE.Group();
      // Body
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.22, 0.75, 12), hydrantMat);
      body.position.y = 0.38;
      body.castShadow = true;
      hydrantGroup.add(body);
      // Top Cap
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.21, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), yellowCapMat);
      cap.position.y = 0.75;
      hydrantGroup.add(cap);
      // Side Outlets
      const sideOut = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.55, 8), yellowCapMat);
      sideOut.rotation.z = Math.PI / 2;
      sideOut.position.y = 0.5;
      hydrantGroup.add(sideOut);

      hydrantGroup.position.set(pos.x, 0.18, pos.z);
      this.scene.add(hydrantGroup);

      this.segmentationPipeline.registerObject(hydrantGroup, {
        semanticClass: SEMANTIC_CLASSES.PROP,
        instanceId: 700 + idx,
        categoryName: 'Fire Hydrant',
        label: `Fire Hydrant #${idx + 1}`
      });
    });
  }

  update(delta) {
    // Traffic light cycling animation: Green (10s) -> Yellow (3s) -> Red (10s)
    this.trafficTimer += delta;
    if (this.trafficTimer > 18.0) {
      this.trafficTimer = 0.0;
    }

    let currentColor = 0x00ff44; // Green
    if (this.trafficTimer > 15.0) {
      currentColor = 0xffaa00; // Amber / Yellow
    } else if (this.trafficTimer > 8.0) {
      currentColor = 0xff2222; // Red
    }

    for (let i = 0; i < this.trafficLights.length; i++) {
      if (this.trafficLights[i].bulb) {
        this.trafficLights[i].bulb.material.color.setHex(currentColor);
      }
    }
  }

  getCollisionBoxes() {
    return this.collisionBoxes;
  }

  getBuildingMeshes() {
    return this.buildingMeshes;
  }
}
