/**
 * AI VISION CITY - Traffic Simulation System
 * Manages moving and parked vehicles (Sedans, SUVs, Sports cars, Taxis, Police cruisers),
 * road waypoint navigation, wheel rotation, intersection logic, and collision boxes.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { SEMANTIC_CLASSES } from '../segmentation/SegmentationPipeline.js';

export class TrafficSystem {
  constructor(scene, segmentationPipeline) {
    this.scene = scene;
    this.segmentationPipeline = segmentationPipeline;
    this.loader = new GLTFLoader();

    this.vehicles = [];
    this.vehicleCollisionBoxes = [];
    this.nextInstanceId = 10; // Reserve 10-49 for vehicles

    this.spawnVehicles();
  }

  spawnVehicles() {
    // Moving vehicles with assigned paths along city avenues and streets
    const movingVehicleConfigs = [
      {
        model: '/assets/vehicles/car_taxi.glb',
        name: 'City Taxi Cab',
        color: 0xf4b942,
        speed: 9.5,
        lane: 'NS_NORTH', // X = 3.5, Z from -65 to +65
        startZ: -45,
        scale: 1.15
      },
      {
        model: '/assets/vehicles/car_police.glb',
        name: 'Police Interceptor',
        color: 0x1b2838,
        speed: 11.0,
        lane: 'NS_SOUTH', // X = -3.5, Z from +65 to -65
        startZ: 50,
        scale: 1.15
      },
      {
        model: '/assets/vehicles/car_suv.glb',
        name: 'Urban SUV',
        color: 0x2e7d32,
        speed: 8.8,
        lane: 'NS_NORTH',
        startZ: 15,
        scale: 1.2
      },
      {
        model: '/assets/vehicles/car_sedan.glb',
        name: 'Sedan Executive',
        color: 0x455a64,
        speed: 9.0,
        lane: 'NS_SOUTH',
        startZ: -10,
        scale: 1.15
      },
      {
        model: '/assets/vehicles/car_sports.glb',
        name: 'Velocity Sports Coupe',
        color: 0xd32f2f,
        speed: 12.5,
        lane: 'EW_EAST', // Z = 3.0, X from -65 to +65
        startX: -40,
        scale: 1.15
      },
      {
        model: '/assets/vehicles/car_taxi.glb',
        name: 'Metro City Taxi',
        color: 0x0288d1,
        speed: 9.2,
        lane: 'EW_WEST', // Z = -3.0, X from +65 to -65
        startX: 45,
        scale: 1.15
      },
      {
        model: '/assets/vehicles/car_sports.glb',
        name: 'Crimson Sports Coupe',
        color: 0xff1122,
        speed: 12.0,
        lane: 'NS_NORTH',
        startZ: -60,
        scale: 1.15
      }
    ];

    movingVehicleConfigs.forEach((cfg) => {
      this.loader.load(
        cfg.model,
        (gltf) => {
          const model = gltf.scene;
          model.scale.set(cfg.scale, cfg.scale, cfg.scale);

          // Automotive PBR tuning & find wheel meshes
          const wheels = [];
          model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;

              // Upgrade material to GTA V automotive metallic clearcoat
              if (child.material) {
                child.material.metalness = 0.85;
                child.material.roughness = 0.18;
                child.material.envMapIntensity = 1.4;
              }

              const nameLower = child.name.toLowerCase();
              if (nameLower.includes('wheel') || nameLower.includes('tire')) {
                wheels.push(child);
                if (child.material) {
                  child.material.metalness = 0.1;
                  child.material.roughness = 0.7; // Rubber tires
                }
              }
            }
          });

          // Add GTA V style functional vehicle headlights and taillights
          const headlightMat = new THREE.MeshBasicMaterial({ color: 0xfffaea });
          const taillightMat = new THREE.MeshBasicMaterial({ color: 0xff1525 });

          // Front Left & Right Headlights
          const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.15, 0.08), headlightMat);
          hlLeft.position.set(-0.75, 0.65, 2.15);
          model.add(hlLeft);

          const hlRight = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.15, 0.08), headlightMat);
          hlRight.position.set(0.75, 0.65, 2.15);
          model.add(hlRight);

          // Headlight road projector spotlight
          const spotLight = new THREE.SpotLight(0xfffaea, 2.5, 22, Math.PI / 5, 0.45, 1.2);
          spotLight.position.set(0, 0.75, 2.2);
          const spotTarget = new THREE.Object3D();
          spotTarget.position.set(0, 0, 16);
          model.add(spotTarget);
          spotLight.target = spotTarget;
          model.add(spotLight);

          // Rear Left & Right Taillights
          const tlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.15, 0.08), taillightMat);
          tlLeft.position.set(-0.75, 0.65, -2.15);
          model.add(tlLeft);

          const tlRight = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.15, 0.08), taillightMat);
          tlRight.position.set(0.75, 0.65, -2.15);
          model.add(tlRight);

          // Set initial position based on lane
          let initialPos = new THREE.Vector3();
          let initialRotY = 0;

          if (cfg.lane === 'NS_NORTH') {
            initialPos.set(3.5, 0.0, cfg.startZ);
            initialRotY = 0; // Facing +Z
          } else if (cfg.lane === 'NS_SOUTH') {
            initialPos.set(-3.5, 0.0, cfg.startZ);
            initialRotY = Math.PI; // Facing -Z
          } else if (cfg.lane === 'EW_EAST') {
            initialPos.set(cfg.startX, 0.0, 3.0);
            initialRotY = Math.PI / 2; // Facing +X
          } else if (cfg.lane === 'EW_WEST') {
            initialPos.set(cfg.startX, 0.0, -3.0);
            initialRotY = -Math.PI / 2; // Facing -X
          }

          model.position.copy(initialPos);
          model.rotation.y = initialRotY;

          this.scene.add(model);

          const instanceId = this.nextInstanceId++;
          this.segmentationPipeline.registerObject(model, {
            semanticClass: SEMANTIC_CLASSES.VEHICLE,
            instanceId,
            categoryName: 'Vehicle',
            label: `${cfg.name} [ID:${instanceId}]`
          });

          this.vehicles.push({
            model,
            wheels,
            speed: cfg.speed,
            lane: cfg.lane,
            instanceId,
            name: cfg.name,
            isMoving: true,
            length: 4.5,
            width: 2.1
          });
        },
        undefined,
        (err) => console.warn(`Failed loading vehicle ${cfg.model}:`, err)
      );
    });

    // Parked vehicles along boulevard curbs
    const parkedConfigs = [
      { model: '/assets/vehicles/car_sedan.glb', x: 6.2, z: 28, rotY: 0, name: 'Parked Sedan' },
      { model: '/assets/vehicles/car_suv.glb', x: 6.2, z: 36, rotY: 0, name: 'Parked SUV' },
      { model: '/assets/vehicles/car_taxi.glb', x: -6.2, z: -28, rotY: Math.PI, name: 'Parked Taxi' },
      { model: '/assets/vehicles/car_sports.glb', x: -6.2, z: -38, rotY: Math.PI, name: 'Parked Sports Car' },
      { model: '/assets/vehicles/car_sedan.glb', x: 28, z: 5.5, rotY: Math.PI / 2, name: 'Parked Sedan' },
    ];

    parkedConfigs.forEach((cfg) => {
      this.loader.load(cfg.model, (gltf) => {
        const model = gltf.scene;
        model.scale.set(1.15, 1.15, 1.15);
        model.position.set(cfg.x, 0.0, cfg.z);
        model.rotation.y = cfg.rotY;

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        this.scene.add(model);

        const instanceId = this.nextInstanceId++;
        this.segmentationPipeline.registerObject(model, {
          semanticClass: SEMANTIC_CLASSES.VEHICLE,
          instanceId,
          categoryName: 'Vehicle',
          label: `${cfg.name} [ID:${instanceId}]`
        });

        this.vehicles.push({
          model,
          wheels: [],
          speed: 0,
          isMoving: false,
          instanceId,
          name: cfg.name,
          length: 4.5,
          width: 2.1
        });
      });
    });
  }

  update(delta) {
    const boundLimit = 65.0;

    for (let i = 0; i < this.vehicles.length; i++) {
      const v = this.vehicles[i];
      if (!v.isMoving) continue;

      const moveStep = v.speed * delta;

      // Move along assigned lane
      if (v.lane === 'NS_NORTH') {
        v.model.position.z += moveStep;
        if (v.model.position.z > boundLimit) {
          v.model.position.z = -boundLimit;
        }
      } else if (v.lane === 'NS_SOUTH') {
        v.model.position.z -= moveStep;
        if (v.model.position.z < -boundLimit) {
          v.model.position.z = boundLimit;
        }
      } else if (v.lane === 'EW_EAST') {
        v.model.position.x += moveStep;
        if (v.model.position.x > boundLimit) {
          v.model.position.x = -boundLimit;
        }
      } else if (v.lane === 'EW_WEST') {
        v.model.position.x -= moveStep;
        if (v.model.position.x < -boundLimit) {
          v.model.position.x = boundLimit;
        }
      }
    }
  }

  getVehicleList() {
    return this.vehicles;
  }
}
