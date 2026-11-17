/**
 * AI VISION CITY - Smooth Third-Person Cinematic Camera
 * Provides silky-smooth target following, mouse rotation damping,
 * natural centered framing, and building collision detection.
 */
import * as THREE from 'three';

export class ThirdPersonCamera {
  constructor(camera, targetObject, domElement, collisionObjects = []) {
    this.camera = camera;
    this.target = targetObject;
    this.domElement = domElement;
    this.collisionObjects = collisionObjects;

    // Cinematic exploration framing
    this.idealDistance = 4.8;
    this.idealHeight = 1.95;
    this.camera.fov = 65;

    this.currentPosition = new THREE.Vector3();
    this.currentLookAt = new THREE.Vector3();
    this.currentDistance = this.idealDistance;

    // Smooth rotational damping
    this.targetYaw = 0.0;
    this.targetPitch = 0.20;
    this.yaw = 0.0;
    this.pitch = 0.20;

    this.minPitch = -0.32; // Looking up at high-rises
    this.maxPitch = 1.15;  // Looking down at streets

    this.mouseSensitivity = 0.0022;
    this.isMouseDown = false;
    this.raycaster = new THREE.Raycaster();

    this.initInput();
  }

  initInput() {
    // Click on canvas to lock pointer for seamless free-look
    this.domElement.addEventListener('click', () => {
      if (document.pointerLockElement !== this.domElement) {
        this.domElement.requestPointerLock?.();
      }
    });

    this.domElement.addEventListener('mousedown', (e) => {
      this.isMouseDown = true;
    });

    window.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });

    window.addEventListener('mousemove', (e) => {
      // Rotate camera if pointer is locked OR mouse is dragged
      if (document.pointerLockElement === this.domElement || this.isMouseDown) {
        const movementX = e.movementX || 0;
        const movementY = e.movementY || 0;

        this.targetYaw -= movementX * this.mouseSensitivity;
        this.targetPitch += movementY * this.mouseSensitivity;
        this.targetPitch = Math.max(this.minPitch, Math.min(this.maxPitch, this.targetPitch));
      }
    });

    this.domElement.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  setCollisionObjects(objects) {
    this.collisionObjects = objects;
  }

  update(delta) {
    if (!this.target) return;

    // 1. Silky-smooth rotational damping
    const rotSmoothing = 1.0 - Math.exp(-24.0 * delta);
    this.yaw += (this.targetYaw - this.yaw) * rotSmoothing;
    this.pitch += (this.targetPitch - this.pitch) * rotSmoothing;

    // 2. Pivot point centered at player torso/head
    const targetPos = this.target.position;
    const pivot = new THREE.Vector3(targetPos.x, targetPos.y + this.idealHeight, targetPos.z);

    // 3. Spherical orbit calculation
    const cosPitch = Math.cos(this.pitch);
    const sinPitch = Math.sin(this.pitch);
    const sinYaw = Math.sin(this.yaw);
    const cosYaw = Math.cos(this.yaw);

    const orbitOffset = new THREE.Vector3(
      sinYaw * cosPitch,
      sinPitch,
      cosYaw * cosPitch
    ).multiplyScalar(this.idealDistance);

    const desiredCameraPos = pivot.clone().add(orbitOffset);

    // 4. Camera Collision Detection against buildings
    const rayDir = desiredCameraPos.clone().sub(pivot).normalize();
    this.raycaster.set(pivot, rayDir);
    this.raycaster.far = this.idealDistance;

    let targetDistance = this.idealDistance;
    if (this.collisionObjects && this.collisionObjects.length > 0) {
      const validObjects = this.collisionObjects.filter((o) => o && o.layers);
      if (validObjects.length > 0) {
        const intersects = this.raycaster.intersectObjects(validObjects, true);
        if (intersects.length > 0 && intersects[0].distance < this.idealDistance) {
          targetDistance = Math.max(1.0, intersects[0].distance - 0.3);
        }
      }
    }

    // Smooth collision distance pull
    const distSmoothing = 1.0 - Math.exp(-18.0 * delta);
    this.currentDistance += (targetDistance - this.currentDistance) * distSmoothing;

    const actualOffset = new THREE.Vector3(
      sinYaw * cosPitch,
      sinPitch,
      cosYaw * cosPitch
    ).multiplyScalar(this.currentDistance);

    const finalPos = pivot.clone().add(actualOffset);

    // 5. Look-at target: Smooth forward projection
    const lookAtTarget = pivot.clone().add(this.getForwardVector().multiplyScalar(20));

    // Smooth frame-rate independent position damping
    const posSmoothing = 1.0 - Math.exp(-14.0 * delta);
    this.currentPosition.lerp(finalPos, posSmoothing);
    this.currentLookAt.lerp(lookAtTarget, posSmoothing);

    this.camera.position.copy(this.currentPosition);
    this.camera.lookAt(this.currentLookAt);
  }

  getForwardVector() {
    const dir = new THREE.Vector3(0, 0, -1);
    dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    dir.y = 0;
    return dir.normalize();
  }

  getRightVector() {
    const dir = new THREE.Vector3(1, 0, 0);
    dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    dir.y = 0;
    return dir.normalize();
  }
}
