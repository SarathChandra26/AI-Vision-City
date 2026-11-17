/**
 * AI VISION CITY - Third-Person Player & Combat Controller
 * Realistic human character with skeletal animation blending (Idle, Walk, Run),
 * camera-relative WASD locomotion, sprint, jump physics, assault rifle weapon handling,
 * tactical Aim Down Sights (ADS), and procedural combat arm aiming.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { SEMANTIC_CLASSES } from '../segmentation/SegmentationPipeline.js';

export class Player {
  constructor(scene, cameraController, segmentationPipeline) {
    this.scene = scene;
    this.cameraController = cameraController;
    this.segmentationPipeline = segmentationPipeline;
    this.combatSystem = null; // Injected by GameApp

    // Root container
    this.root = new THREE.Group();
    this.root.position.set(0, 0, 8); // Start in central boulevard
    this.scene.add(this.root);

    // Physics & Movement parameters
    this.velocity = new THREE.Vector3();
    this.walkSpeed = 4.2;      // m/s
    this.runSpeed = 8.5;       // m/s
    this.aimStrafeSpeed = 3.2; // m/s
    this.acceleration = 18.0;
    this.friction = 12.0;
    this.rotationSpeed = 14.0;

    // Jump & Gravity
    this.verticalVelocity = 0.0;
    this.gravity = -24.0;
    this.jumpForce = 8.0;
    this.isGrounded = true;
    this.groundY = 0.0;

    // Input state
    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      sprint: false,
      jump: false
    };

    // Combat state
    this.isAiming = false;
    this.isFiring = false;

    // Animation state
    this.mixer = null;
    this.actions = {};
    this.activeAction = null;
    this.currentAnimName = 'Idle';
    this.modelLoaded = false;
    this.collisionBoxes = [];

    // Bones cache for procedural aiming
    this.bones = {};

    this.initInput();
    this.loadModel();
  }

  setCombatSystem(combatSystem) {
    this.combatSystem = combatSystem;
    if (this.model && this.combatSystem) {
      this.combatSystem.attachWeaponToPlayer(this.model);
    }
  }

  initInput() {
    window.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keys.forward = true;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.keys.backward = true;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keys.left = true;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.keys.right = true;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.keys.sprint = true;
          break;
        case 'Space':
          if (this.isGrounded) {
            this.verticalVelocity = this.jumpForce;
            this.isGrounded = false;
          }
          break;
        case 'KeyR':
          if (this.combatSystem) {
            this.combatSystem.reload();
          }
          break;
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keys.forward = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.keys.backward = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keys.left = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.keys.right = false;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.keys.sprint = false;
          break;
      }
    });
  }

  setCollisionBoxes(boxes) {
    this.collisionBoxes = boxes;
  }

  loadModel() {
    const loader = new GLTFLoader();
    loader.load(
      '/assets/characters/player.glb',
      (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(1.0, 1.0, 1.0);
        this.model.position.set(0, 0, 0);

        // Shadows & PBR Materials
        this.model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.roughness = 0.65;
              child.material.metalness = 0.15;
            }
          }
          // Cache humanoid bones for procedural aim
          if (child.isBone && child.name) {
            if (/RightArm/i.test(child.name)) this.bones.rightArm = child;
            if (/RightForeArm/i.test(child.name)) this.bones.rightForeArm = child;
            if (/LeftArm/i.test(child.name)) this.bones.leftArm = child;
            if (/LeftForeArm/i.test(child.name)) this.bones.leftForeArm = child;
            if (/Spine/i.test(child.name)) this.bones.spine = child;
          }
        });

        this.root.add(this.model);

        // Register in Segmentation Pipeline as Class PEDESTRIAN, Instance 1
        this.segmentationPipeline.registerObject(this.model, {
          semanticClass: SEMANTIC_CLASSES.PEDESTRIAN,
          instanceId: 1,
          categoryName: 'Playable Operative',
          label: 'Special Operative (You)'
        });

        // Setup skeletal animations
        this.mixer = new THREE.AnimationMixer(this.model);
        gltf.animations.forEach((clip) => {
          this.actions[clip.name] = this.mixer.clipAction(clip);
        });

        if (this.actions['Idle']) {
          this.activeAction = this.actions['Idle'];
          this.activeAction.play();
          this.currentAnimName = 'Idle';
        }

        // Attach weapon if combat system is ready
        if (this.combatSystem) {
          this.combatSystem.attachWeaponToPlayer(this.model);
        }

        this.modelLoaded = true;
        console.log('Player character model loaded successfully with animations:', Object.keys(this.actions));
      },
      undefined,
      (err) => console.error('Failed to load player character model:', err)
    );
  }

  setAnimation(name, duration = 0.22) {
    if (!this.actions[name] || this.currentAnimName === name) return;

    const prevAction = this.activeAction;
    const nextAction = this.actions[name];

    nextAction.reset();
    nextAction.time = 0.0;
    nextAction.enabled = true;
    nextAction.setEffectiveTimeScale(1.0);
    nextAction.setEffectiveWeight(1.0);

    if (prevAction) {
      prevAction.crossFadeTo(nextAction, duration, true);
    }
    nextAction.play();

    this.activeAction = nextAction;
    this.currentAnimName = name;
  }

  update(delta, now, enemiesList = []) {
    // 1. Update skeletal animation mixer
    if (this.mixer) {
      this.mixer.update(delta);
    }

    // 2. Movement vector relative to camera yaw
    const forward = this.cameraController.getForwardVector();
    const right = this.cameraController.getRightVector();

    const moveDir = new THREE.Vector3();
    if (this.keys.forward) moveDir.add(forward);
    if (this.keys.backward) moveDir.sub(forward);
    if (this.keys.right) moveDir.add(right);
    if (this.keys.left) moveDir.sub(right);

    const isMoving = moveDir.lengthSq() > 0.001;
    let targetSpeed = 0.0;

    if (isMoving) {
      moveDir.normalize();
      targetSpeed = this.keys.sprint ? this.runSpeed : this.walkSpeed;

      // Silky-smooth rotation towards movement direction (+ Math.PI aligns character facing with movement)
      const targetRotation = Math.atan2(moveDir.x, moveDir.z) + Math.PI;
      let angleDiff = targetRotation - this.root.rotation.y;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      const turnSmoothing = 1.0 - Math.exp(-18.0 * delta);
      this.root.rotation.y += angleDiff * turnSmoothing;

      // Smooth animation transitions
      if (this.keys.sprint) {
        this.setAnimation('Run', 0.22);
      } else {
        this.setAnimation('Walk', 0.22);
      }
    } else {
      this.setAnimation('Idle', 0.25);
    }

    // 3. Smooth velocity and acceleration (delta-independent exponential damping)
    const desiredVelocity = moveDir.clone().multiplyScalar(targetSpeed);
    const accelRate = isMoving ? 14.0 : 10.0;
    const accelSmoothing = 1.0 - Math.exp(-accelRate * delta);
    this.velocity.lerp(desiredVelocity, accelSmoothing);

    // 6. Jump and gravity
    if (!this.isGrounded) {
      this.verticalVelocity += this.gravity * delta;
      this.root.position.y += this.verticalVelocity * delta;

      if (this.root.position.y <= this.groundY) {
        this.root.position.y = this.groundY;
        this.verticalVelocity = 0.0;
        this.isGrounded = true;
      }
    }

    // 7. Proposed new position with building collision check
    const nextPos = this.root.position.clone().add(
      new THREE.Vector3(this.velocity.x * delta, 0, this.velocity.z * delta)
    );

    const playerRadius = 0.45;
    let collided = false;

    for (let i = 0; i < this.collisionBoxes.length; i++) {
      const box = this.collisionBoxes[i];
      if (
        nextPos.x >= box.min.x - playerRadius &&
        nextPos.x <= box.max.x + playerRadius &&
        nextPos.z >= box.min.z - playerRadius &&
        nextPos.z <= box.max.z + playerRadius
      ) {
        collided = true;
        break;
      }
    }

    if (!collided) {
      this.root.position.x = nextPos.x;
      this.root.position.z = nextPos.z;
    } else {
      // Slide along axes
      const nextX = this.root.position.clone();
      nextX.x += this.velocity.x * delta;
      let collX = false;
      for (const box of this.collisionBoxes) {
        if (
          nextX.x >= box.min.x - playerRadius &&
          nextX.x <= box.max.x + playerRadius &&
          nextX.z >= box.min.z - playerRadius &&
          nextX.z <= box.max.z + playerRadius
        ) {
          collX = true;
          break;
        }
      }
      if (!collX) this.root.position.x = nextX.x;

      const nextZ = this.root.position.clone();
      nextZ.z += this.velocity.z * delta;
      let collZ = false;
      for (const box of this.collisionBoxes) {
        if (
          nextZ.x >= box.min.x - playerRadius &&
          nextZ.x <= box.max.x + playerRadius &&
          nextZ.z >= box.min.z - playerRadius &&
          nextZ.z <= box.max.z + playerRadius
        ) {
          collZ = true;
          break;
        }
      }
      if (!collZ) this.root.position.z = nextZ.z;
    }

    // 8. Animation state machine
    const speed = this.velocity.length();
    if (!this.isGrounded) {
      // In air
    } else if (speed > 5.5) {
      this.setAnimation('Run', 0.18);
    } else if (speed > 0.4) {
      this.setAnimation('Walk', 0.22);
    } else {
      this.setAnimation('Idle', 0.25);
    }
  }

  getPosition() {
    return this.root.position;
  }
}
