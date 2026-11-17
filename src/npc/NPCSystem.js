/**
 * AI VISION CITY - Pedestrian & Hostile Combat NPC Simulation System
 * Manages walking civilians, diverse human pedestrians, animated skeletal walking mixers,
 * hostile combat enemies (Titan Mechs, Bipedal Gun Mechs, Aerial Hunter Drones, Cyber Infiltrators),
 * combat health, hit flinches, death states, and tactical computer vision segmentation registration.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { SEMANTIC_CLASSES } from '../segmentation/SegmentationPipeline.js';

export class NPCSystem {
  constructor(scene, segmentationPipeline) {
    this.scene = scene;
    this.segmentationPipeline = segmentationPipeline;
    this.loader = new GLTFLoader();

    this.pedestrians = [];
    this.enemies = [];
    this.mixers = [];
    this.nextInstanceId = 50; // Reserve 50-99 for NPCs and enemies

    this.spawnPedestrians();
    this.spawnEnemies();
  }

  spawnPedestrians() {
    // Roster of civilian pedestrians along sidewalks, all powered by authentic skeletal walk cycles
    const pedestrianConfigs = [
      {
        model: '/assets/characters/xbot.glb',
        name: 'Civilian Tech Walker',
        tintColor: 0x2980b9, // Tech Blue
        scale: 1.05,
        x: 9.5,
        z: 14,
        speed: 1.45,
        minZ: 10,
        maxZ: 50,
        dir: 1,
        axis: 'Z'
      },
      {
        model: '/assets/characters/xbot.glb',
        name: 'Downtown Resident',
        tintColor: 0xc0392b, // Crimson Red
        scale: 1.02,
        x: -9.5,
        z: 40,
        speed: 1.5,
        minZ: 8,
        maxZ: 55,
        dir: -1,
        axis: 'Z'
      },
      {
        model: '/assets/npc/pedestrian_walk.glb',
        name: 'Urban Pedestrian',
        scale: 1.12,
        x: 10.5,
        z: -20,
        speed: 1.35,
        minZ: -50,
        maxZ: -12,
        dir: 1,
        axis: 'Z'
      },
      {
        model: '/assets/characters/xbot.glb',
        name: 'Citizen Commuter',
        tintColor: 0x27ae60, // Emerald Green
        scale: 1.08,
        x: -10.5,
        z: -35,
        speed: 1.55,
        minZ: -52,
        maxZ: -10,
        dir: 1,
        axis: 'Z'
      },
      {
        model: '/assets/characters/xbot.glb',
        name: 'Avenue Resident',
        tintColor: 0xd35400, // Amber Ochre
        scale: 1.04,
        x: 25,
        z: 9.0,
        speed: 1.4,
        minX: 12,
        maxX: 48,
        dir: 1,
        axis: 'X'
      },
      {
        model: '/assets/npc/pedestrian_walk.glb',
        name: 'Metro Walker',
        scale: 1.12,
        x: -25,
        z: -9.0,
        speed: 1.3,
        minX: -50,
        maxX: -12,
        dir: -1,
        axis: 'X'
      },
      {
        model: '/assets/characters/xbot.glb',
        name: 'Downtown Explorer',
        tintColor: 0x8e44ad, // Royal Violet
        scale: 1.06,
        x: -28,
        z: 9.0,
        speed: 1.45,
        minX: -48,
        maxX: -12,
        dir: 1,
        axis: 'X'
      },
      {
        model: '/assets/characters/xbot.glb',
        name: 'Cross-street Citizen',
        tintColor: 0x34495e, // Dark Slate
        scale: 1.03,
        x: 28,
        z: -9.0,
        speed: 1.4,
        minX: 12,
        maxX: 48,
        dir: -1,
        axis: 'X'
      }
    ];

    pedestrianConfigs.forEach((cfg) => {
      this.loader.load(
        cfg.model,
        (gltf) => {
          const model = gltf.scene;
          model.position.set(cfg.x, 0.18, cfg.z);
          model.scale.set(cfg.scale, cfg.scale, cfg.scale);

          model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              if (child.material) {
                // Clone material so each pedestrian gets distinct civilian clothing color
                child.material = child.material.clone();
                if (cfg.tintColor && (child.name.includes('Mesh') || (child.material.name && (child.material.name.includes('Limbs') || child.material.name.includes('MAT'))))) {
                  child.material.color.setHex(cfg.tintColor);
                }
                child.material.roughness = 0.65;
              }
            }
          });

          this.scene.add(model);

          let mixer = null;
          if (gltf.animations && gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            const walkClip = gltf.animations.find((c) => c && c.name && /walk/i.test(c.name)) || gltf.animations[0];
            if (walkClip) {
              const action = mixer.clipAction(walkClip);
              action.play();
              // Offset time so all pedestrians have independent leg/arm swing rhythms
              action.time = Math.random() * (walkClip.duration || 1.5);
              // Match animation cadence to walking velocity
              action.timeScale = cfg.speed / 1.4;
              this.mixers.push(mixer);
            }
          }

          const instanceId = this.nextInstanceId++;
          this.segmentationPipeline.registerObject(model, {
            semanticClass: SEMANTIC_CLASSES.PEDESTRIAN,
            instanceId,
            categoryName: 'Non-Combatant Civilian',
            label: `${cfg.name} [ID:${instanceId}] // SAFE`
          });

          this.pedestrians.push({
            model,
            mixer,
            name: cfg.name,
            speed: cfg.speed,
            dir: cfg.dir,
            minZ: cfg.minZ,
            maxZ: cfg.maxZ,
            minX: cfg.minX,
            maxX: cfg.maxX,
            axis: cfg.axis || 'Z'
          });
        },
        undefined,
        (err) => console.warn(`Failed loading pedestrian ${cfg.model}:`, err)
      );
    });
  }

  spawnEnemies() {
    // High-graphic armed combatants, mechs, and drones placed tactically
    const enemyConfigs = [
      {
        model: '/assets/enemies/enemy_heavy_mech.glb',
        name: 'Heavy Titan Assault Mech',
        combatClass: 'HEAVY TITAN MECH',
        threatLevel: 'CRITICAL',
        health: 350,
        x: 18,
        z: 32,
        scale: 1.35,
        rotY: -Math.PI / 4,
        patrol: true,
        minZ: 24,
        maxZ: 44,
        speed: 1.8
      },
      {
        model: '/assets/enemies/enemy_mech_gun.glb',
        name: 'Bipedal Cyber Combat Walker',
        combatClass: 'CYBER ASSAULT MECH',
        threatLevel: 'HIGH',
        health: 220,
        x: -22,
        z: 18,
        scale: 1.25,
        rotY: Math.PI / 3,
        patrol: true,
        minX: -32,
        maxX: -14,
        speed: 2.1,
        axis: 'X'
      },
      {
        model: '/assets/enemies/enemy_drone_gun.glb',
        name: 'Aerial Hunter Attack Drone',
        combatClass: 'AERIAL RECON DRONE',
        threatLevel: 'MODERATE',
        health: 130,
        x: 32,
        z: -26,
        y: 3.2, // Hovering in air
        scale: 1.3,
        rotY: -Math.PI * 0.75,
        hover: true
      },
      {
        model: '/assets/enemies/enemy_spider.glb',
        name: 'Cyber Arachnid Infiltrator',
        combatClass: 'ARACHNID MECH',
        threatLevel: 'HIGH',
        health: 150,
        x: -32,
        z: -32,
        scale: 1.15,
        rotY: Math.PI / 2,
        patrol: true,
        minZ: -42,
        maxZ: -22,
        speed: 2.0
      },
      {
        model: '/assets/enemies/enemy_heavy_mech.glb',
        name: 'Rogue Enforcer Mech',
        combatClass: 'HEAVY TITAN MECH',
        threatLevel: 'CRITICAL',
        health: 320,
        x: 0,
        z: -42,
        scale: 1.3,
        rotY: Math.PI,
        patrol: true,
        minX: -16,
        maxX: 16,
        speed: 1.6,
        axis: 'X'
      }
    ];

    enemyConfigs.forEach((cfg) => {
      this.loader.load(
        cfg.model,
        (gltf) => {
          const model = gltf.scene;
          const initialY = cfg.y || 0.18;
          model.position.set(cfg.x, initialY, cfg.z);
          model.scale.set(cfg.scale, cfg.scale, cfg.scale);
          model.rotation.y = cfg.rotY || 0;

          model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              if (child.material) {
                child.material.roughness = 0.55;
                child.material.metalness = 0.45;
              }
            }
          });

          this.scene.add(model);

          let mixer = null;
          const actions = {};
          if (gltf.animations && gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            gltf.animations.forEach((clip) => {
              if (clip && clip.name) {
                actions[clip.name] = mixer.clipAction(clip);
              }
            });

            // Start with Walk, Run, or Idle
            const defaultClip =
              gltf.animations.find((c) => c && c.name && /walk|run|idle/i.test(c.name)) || gltf.animations[0];
            if (defaultClip) {
              const action = mixer.clipAction(defaultClip);
              action.play();
              this.mixers.push(mixer);
            }
          }

          const instanceId = this.nextInstanceId++;
          this.segmentationPipeline.registerObject(model, {
            semanticClass: SEMANTIC_CLASSES.ENEMY,
            instanceId,
            isEnemy: true,
            categoryName: 'Hostile Combatant',
            label: `${cfg.name} [ID:${instanceId}] // THREAT: ${cfg.threatLevel}`
          });

          this.enemies.push({
            model,
            mixer,
            actions,
            name: cfg.name,
            combatClass: cfg.combatClass,
            threatLevel: cfg.threatLevel,
            instanceId,
            health: cfg.health,
            maxHealth: cfg.health,
            isAlive: true,
            isAlerted: false,
            speed: cfg.speed || 1.5,
            dir: 1,
            minZ: cfg.minZ,
            maxZ: cfg.maxZ,
            minX: cfg.minX,
            maxX: cfg.maxX,
            axis: cfg.axis || 'Z',
            patrol: !!cfg.patrol,
            hover: !!cfg.hover,
            baseY: initialY,
            distanceToPlayer: 0
          });
        },
        undefined,
        (err) => console.warn(`Failed loading enemy ${cfg.model}:`, err)
      );
    });
  }

  update(delta, elapsedTime, playerPosition) {
    // Update skeletal animation mixers
    for (let i = 0; i < this.mixers.length; i++) {
      this.mixers[i].update(delta);
    }

    // Update civilian pedestrians along sidewalks
    for (let i = 0; i < this.pedestrians.length; i++) {
      const p = this.pedestrians[i];

      if (p.axis === 'Z') {
        p.model.position.z += p.speed * p.dir * delta;
        p.model.rotation.y = p.dir > 0 ? 0 : Math.PI;

        if (p.model.position.z > p.maxZ) p.dir = -1;
        else if (p.model.position.z < p.minZ) p.dir = 1;
      } else if (p.axis === 'X') {
        p.model.position.x += p.speed * p.dir * delta;
        p.model.rotation.y = p.dir > 0 ? Math.PI / 2 : -Math.PI / 2;

        if (p.model.position.x > p.maxX) p.dir = -1;
        else if (p.model.position.x < p.minX) p.dir = 1;
      }
    }

    // Update enemy behaviors and calculate distance to player
    for (let i = 0; i < this.enemies.length; i++) {
      const e = this.enemies[i];
      if (e.isAlive === false) continue; // Neutralized enemies remain on ground

      // Calculate distance to player
      if (playerPosition) {
        e.distanceToPlayer = e.model.position.distanceTo(playerPosition);
        // Alert enemy if player is nearby (< 26m)
        if (e.distanceToPlayer < 26) {
          e.isAlerted = true;
        }
      }

      if (e.hover) {
        // Drone aerial bobbing
        e.model.position.y = e.baseY + Math.sin(elapsedTime * 3.2 + i) * 0.42;
        if (!e.isAlerted) {
          e.model.rotation.y += delta * 0.9;
        }
      } else if (e.patrol && !e.isAlerted) {
        // Patrol path when unalerted
        if (e.axis === 'Z') {
          e.model.position.z += e.speed * e.dir * delta;
          e.model.rotation.y = e.dir > 0 ? 0 : Math.PI;
          if (e.model.position.z > e.maxZ) e.dir = -1;
          else if (e.model.position.z < e.minZ) e.dir = 1;
        } else if (e.axis === 'X') {
          e.model.position.x += e.speed * e.dir * delta;
          e.model.rotation.y = e.dir > 0 ? Math.PI / 2 : -Math.PI / 2;
          if (e.model.position.x > e.maxX) e.dir = -1;
          else if (e.model.position.x < e.minX) e.dir = 1;
        }
      }
    }
  }

  getEnemyList() {
    return this.enemies;
  }

  getPedestrianList() {
    return this.pedestrians;
  }
}
