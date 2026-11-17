/**
 * AI VISION CITY - Master Game Application
 * Orchestrates Three.js WebGL scene, PBR lighting, physics, tactical third-person shooter combat,
 * realistic animated humanoid player with assault rifle, hostile combat mechs & drones,
 * segmentation post-processing, floating glass UI, and education presentation suite.
 */
import * as THREE from 'three';
import { SegmentationPipeline, SEGMENTATION_MODES } from '../segmentation/SegmentationPipeline.js';
import { CityWorld } from '../world/CityWorld.js';
import { Player } from '../player/Player.js';
import { ThirdPersonCamera } from '../camera/ThirdPersonCamera.js';
import { CombatSystem } from '../combat/CombatSystem.js';
import { TrafficSystem } from '../vehicles/TrafficSystem.js';
import { NPCSystem } from '../npc/NPCSystem.js';
import { ScannerUI } from '../scanner/ScannerUI.js';
import { EducationSuite } from '../education/EducationSuite.js';
import { GameUI } from '../ui/GameUI.js';

export class GameApp {
  constructor() {
    this.container = document.getElementById('app');
    this.clock = new THREE.Clock();

    this.initThree();
    this.initSystems();
    this.bindEvents();
    this.animate();
  }

  initThree() {
    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xd6e4f0);

    // 2. Camera
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(65, aspect, 0.1, 450);
    this.camera.position.set(0, 3, 15);

    // 3. WebGL Renderer with High-End Cinematic Configuration
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(1.0); // 1.0 for guaranteed silky-smooth 60 FPS performance
    
    // Shadows & Tonemapping
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;

    this.container.appendChild(this.renderer.domElement);
  }

  initSystems() {
    // 1. Segmentation Pipeline (Beauty & GPU Mask ID buffers, Depth, Shaders)
    this.segmentationPipeline = new SegmentationPipeline(
      this.renderer,
      this.scene,
      this.camera
    );

    // 2. City World (Roads, Intersections, Elevated Sidewalks, Multi-story Buildings, Streetlights, Park)
    this.cityWorld = new CityWorld(this.scene, this.segmentationPipeline);

    // 3. Player Character (Mixamo Soldier humanoid with Idle, Walk, Run skeletal animations)
    const cameraDummy = {
      getForwardVector: () => new THREE.Vector3(0, 0, -1),
      getRightVector: () => new THREE.Vector3(1, 0, 0),
      yaw: 0.0
    };
    this.player = new Player(this.scene, cameraDummy, this.segmentationPipeline);

    // 4. Third-Person Follow Camera with Tactical Shoulder ADS Zoom
    this.cameraController = new ThirdPersonCamera(
      this.camera,
      this.player.root,
      this.renderer.domElement,
      []
    );
    this.player.cameraController = this.cameraController;

    // Link building collision boxes to player and building meshes to camera
    const collisionBoxes = this.cityWorld.getCollisionBoxes();
    this.player.setCollisionBoxes(collisionBoxes);
    this.cameraController.setCollisionObjects(this.cityWorld.getBuildingMeshes());

    // 5. Tactical Combat & Ballistics System (Assault Rifle, Tracers, Raycasts, Damage FX)
    this.combatSystem = new CombatSystem(this.scene, this.camera, this.segmentationPipeline);
    this.player.setCombatSystem(this.combatSystem);

    // 6. Traffic System (Moving vehicles, wheel rotations, lanes, parked cars)
    this.trafficSystem = new TrafficSystem(this.scene, this.segmentationPipeline);

    // 7. NPC System (Civilians, Titan Mechs, Cyber Walkers, Hunter Drones)
    this.npcSystem = new NPCSystem(this.scene, this.segmentationPipeline);

    // 8. Academic Deep Learning Presentation Suite (U-Net, Comparisons, IoU & Dice, Failure Modes)
    this.educationSuite = new EducationSuite();

    // 9. Floating Glass AI Vision Scanner UI (Right side of screen)
    this.scannerUI = new ScannerUI(this.segmentationPipeline, () => {
      this.educationSuite.open();
    });
    this.scannerUI.setCameraAndEnemies(this.camera, this.npcSystem.getEnemyList());

    // 10. Game HUD & Minimap Radar
    this.gameUI = new GameUI(this.renderer, this.cityWorld, () => {
      this.educationSuite.open();
    });

    // Hide initial loading screen
    const loaderEl = document.getElementById('initial-loader');
    if (loaderEl) {
      setTimeout(() => {
        loaderEl.classList.add('fade-out');
        setTimeout(() => loaderEl.remove(), 600);
      }, 800);
    }
  }

  bindEvents() {
    window.addEventListener('resize', this.onResize.bind(this));

    // Keyboard Shortcuts for Tactical Scanner & Combat Mode Switching
    window.addEventListener('keydown', (e) => {
      // Avoid hotkeys when typing in input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      switch (e.code) {
        // Quick Tactical Scan Pulse / Toggle (E or Q)
        case 'KeyE':
        case 'KeyQ':
          if (this.scannerUI) {
            const nextMode =
              this.segmentationPipeline.currentMode === SEGMENTATION_MODES.ENEMY_SCAN
                ? SEGMENTATION_MODES.NORMAL
                : SEGMENTATION_MODES.ENEMY_SCAN;
            this.segmentationPipeline.setMode(nextMode);
            this.scannerUI.currentMode = nextMode;
            this.scannerUI.updateActiveButton(nextMode);
            this.scannerUI.updateEducationalCard(nextMode);
            this.scannerUI.triggerScanPulse();
            if (this.combatSystem) this.combatSystem.audio.playScanPulse();
          }
          break;

        // Number Keys 1-7 for direct filter switching
        case 'Digit1':
          this.switchFilterMode(SEGMENTATION_MODES.NORMAL);
          break;
        case 'Digit2':
          this.switchFilterMode(SEGMENTATION_MODES.SEMANTIC);
          break;
        case 'Digit3':
          this.switchFilterMode(SEGMENTATION_MODES.INSTANCE);
          break;
        case 'Digit4':
          this.switchFilterMode(SEGMENTATION_MODES.PANOPTIC);
          break;
        case 'Digit5':
          this.switchFilterMode(SEGMENTATION_MODES.ENEMY_SCAN);
          break;
        case 'Digit6':
          this.switchFilterMode(SEGMENTATION_MODES.EDGE_DETECTION);
          break;
        case 'Digit7':
          this.switchFilterMode(SEGMENTATION_MODES.DEPTH_VIEW);
          break;
      }
    });
  }

  switchFilterMode(mode) {
    if (this.segmentationPipeline && this.scannerUI) {
      this.segmentationPipeline.setMode(mode);
      this.scannerUI.currentMode = mode;
      this.scannerUI.updateActiveButton(mode);
      this.scannerUI.updateEducationalCard(mode);
    }
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const delta = Math.min(this.clock.getDelta(), 0.1);
    const elapsedTime = this.clock.getElapsedTime();

    const enemiesList = this.npcSystem ? this.npcSystem.getEnemyList() : [];
    const playerPos = this.player ? this.player.getPosition() : null;

    // 1. Update Player Locomotion, Aiming, and Weapon Firing
    if (this.player) {
      this.player.update(delta, elapsedTime, enemiesList);
    }

    // 2. Update Tactical Combat System (Tracers, Particles, Enemy AI return fire, Damage numbers)
    if (this.combatSystem) {
      this.combatSystem.update(delta, elapsedTime, enemiesList, playerPos);
    }

    // 3. Update Third-Person Follow Camera (Over-the-shoulder ADS)
    if (this.cameraController) {
      this.cameraController.update(delta);
    }

    // 4. Update City Traffic Signals
    if (this.cityWorld) {
      this.cityWorld.update(delta);
    }

    // 5. Update Moving Vehicles & Wheels
    if (this.trafficSystem) {
      this.trafficSystem.update(delta);
    }

    // 6. Update Walking Civilians & Hostile Combat Enemies
    if (this.npcSystem) {
      this.npcSystem.update(delta, elapsedTime, playerPos);
    }

    // 7. Update Scanner HUD Telemetry & Tactical Brackets
    if (this.scannerUI) {
      const stats = this.segmentationPipeline.getLiveStatistics();
      this.scannerUI.update(stats);
    }

    // 8. Update Minimap Radar & Performance Metrics
    if (this.gameUI) {
      this.gameUI.update(this.player, this.trafficSystem, this.npcSystem);
    }

    // 9. Render via Segmentation Pipeline (Beauty Pass + Mask ID Pass + Post-Process Shader)
    this.segmentationPipeline.render(delta, elapsedTime);
  }
}
