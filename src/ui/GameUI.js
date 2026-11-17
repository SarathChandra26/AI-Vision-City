/**
 * AI VISION CITY - Game UI, Controls HUD, Minimap Radar & Graphics Presets
 * Provides real-time FPS counter, graphic quality scalability (LOW / MED / HIGH)
 * for integrated graphics compatibility, radar minimap, and keyboard guide.
 */

export class GameUI {
  constructor(renderer, cityWorld, onOpenEducation) {
    this.renderer = renderer;
    this.cityWorld = cityWorld;
    this.onOpenEducation = onOpenEducation;

    this.qualityPreset = 'MEDIUM'; // Default to buttery smooth 60 FPS
    this.fps = 60;
    this.frameCount = 0;
    this.lastTime = performance.now();

    this.createDom();
    this.initMinimap();
    this.bindEvents();
    this.setQualityPreset('MEDIUM');
  }

  createDom() {
    this.hud = document.createElement('div');
    this.hud.id = 'game-hud-layer';
    this.hud.className = 'game-hud-layer';

    this.hud.innerHTML = `
      <!-- Top Status & Preset Bar -->
      <div class="hud-top-bar">
        <div class="hud-brand">
          <span class="hud-city-icon">&#9670;</span>
          <span class="hud-title">AI VISION CITY</span>
          <span class="hud-ver">AI SEGMENTATION</span>
        </div>

        <div class="hud-center-tools">
          <div class="preset-selector">
            <span class="preset-label">GFX:</span>
            <button class="preset-btn" data-preset="LOW">LOW</button>
            <button class="preset-btn active" data-preset="MEDIUM">MED (60 FPS)</button>
            <button class="preset-btn" data-preset="HIGH">HIGH</button>
          </div>
          <button id="btn-top-edu" class="btn-top-glass">
            <span class="btn-pip-dot"></span>
            <span>U-NET LAB</span>
          </button>
        </div>

        <div class="hud-performance">
          <span id="fps-display" class="fps-val">60 FPS</span>
          <span class="fps-sub">GPU 16ms</span>
        </div>
      </div>

      <!-- Bottom-Left Tactical Radar Only (Clean, No Clutter) -->
      <div class="hud-bottom-left">
        <div class="minimap-wrapper">
          <div class="minimap-header">RADAR</div>
          <canvas id="minimap-canvas" width="130" height="130" class="minimap-canvas"></canvas>
          <div class="minimap-legend">
            <span><span class="m-dot player"></span>YOU</span>
            <span><span class="m-dot veh"></span>CAR</span>
            <span><span class="m-dot ped"></span>CIV</span>
            <span><span class="m-dot foe"></span>FOE</span>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.hud);
    this.minimapCanvas = document.getElementById('minimap-canvas');
    this.minimapCtx = this.minimapCanvas.getContext('2d');
  }

  initMinimap() {
    this.minimapScale = 1.1; // meters to canvas pixels
  }

  bindEvents() {
    // Quality preset buttons
    const presetBtns = this.hud.querySelectorAll('.preset-btn');
    presetBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const preset = btn.getAttribute('data-preset');
        this.setQualityPreset(preset);
        presetBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Top education button
    const eduBtn = this.hud.querySelector('#btn-top-edu');
    eduBtn.addEventListener('click', () => {
      if (this.onOpenEducation) this.onOpenEducation();
    });
  }

  setQualityPreset(preset) {
    this.qualityPreset = preset;
    console.log(`Switching Graphics Quality Preset to: ${preset}`);

    if (preset === 'LOW') {
      // Maximum FPS mode (disables heavy shadows and downscales render target)
      this.renderer.shadowMap.enabled = false;
      this.renderer.setPixelRatio(0.85);
      if (this.cityWorld.sunLight) this.cityWorld.sunLight.castShadow = false;
    } else if (preset === 'MEDIUM') {
      // Optimal 60 FPS mode (crisp 1:1 pixel ratio, optimized 1024 shadows)
      this.renderer.shadowMap.enabled = true;
      this.renderer.setPixelRatio(1.0);
      if (this.cityWorld.sunLight) {
        this.cityWorld.sunLight.castShadow = true;
        this.cityWorld.sunLight.shadow.mapSize.width = 1024;
        this.cityWorld.sunLight.shadow.mapSize.height = 1024;
      }
    } else if (preset === 'HIGH') {
      // High detail mode
      this.renderer.shadowMap.enabled = true;
      this.renderer.setPixelRatio(1.0);
      if (this.cityWorld.sunLight) {
        this.cityWorld.sunLight.castShadow = true;
        this.cityWorld.sunLight.shadow.mapSize.width = 1024;
        this.cityWorld.sunLight.shadow.mapSize.height = 1024;
      }
    }
  }

  update(player, trafficSystem, npcSystem) {
    // 1. FPS Calculation
    this.frameCount++;
    const now = performance.now();
    if (now - this.lastTime >= 500) {
      this.fps = Math.round((this.frameCount * 1000) / (now - this.lastTime));
      this.frameCount = 0;
      this.lastTime = now;

      const fpsEl = document.getElementById('fps-display');
      if (fpsEl) fpsEl.innerText = `${this.fps} FPS`;
    }

    // 2. Render Minimap Radar
    if (!this.minimapCtx || !player) return;
    const ctx = this.minimapCtx;
    const w = this.minimapCanvas.width;
    const h = this.minimapCanvas.height;
    const cx = w * 0.5;
    const cy = h * 0.5;

    ctx.clearRect(0, 0, w, h);

    // Radar background with circular grid
    ctx.fillStyle = 'rgba(10, 15, 24, 0.85)';
    ctx.beginPath();
    ctx.arc(cx, cy, cx - 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.3)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Radar rings
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.12)';
    ctx.beginPath();
    ctx.arc(cx, cy, cx * 0.4, 0, Math.PI * 2);
    ctx.arc(cx, cy, cx * 0.75, 0, Math.PI * 2);
    ctx.stroke();

    const pPos = player.getPosition();

    // World to Radar transform
    const toRadar = (worldX, worldZ) => {
      const rx = cx + (worldX - pPos.x) * this.minimapScale;
      const ry = cy + (worldZ - pPos.z) * this.minimapScale;
      return { x: rx, y: ry };
    };

    // Draw vehicles
    if (trafficSystem) {
      const vehicles = trafficSystem.getVehicleList();
      ctx.fillStyle = '#f1b82d'; // Yellow
      for (let i = 0; i < vehicles.length; i++) {
        const vPos = vehicles[i].model.position;
        const pt = toRadar(vPos.x, vPos.z);
        if (Math.hypot(pt.x - cx, pt.y - cy) < cx - 5) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Draw pedestrians
    if (npcSystem) {
      const peds = npcSystem.getPedestrianList();
      ctx.fillStyle = '#00ff88'; // Green
      for (let i = 0; i < peds.length; i++) {
        const pedPos = peds[i].model.position;
        const pt = toRadar(pedPos.x, pedPos.z);
        if (Math.hypot(pt.x - cx, pt.y - cy) < cx - 5) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2.0, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw enemies (pulsing red)
      const enemies = npcSystem.getEnemyList();
      ctx.fillStyle = '#ff1144'; // Red
      for (let i = 0; i < enemies.length; i++) {
        const ePos = enemies[i].model.position;
        const pt = toRadar(ePos.x, ePos.z);
        if (Math.hypot(pt.x - cx, pt.y - cy) < cx - 5) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Draw player in center (Cyan triangle)
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(player.root.rotation.y + Math.PI);
    ctx.fillStyle = '#00f0ff';
    ctx.beginPath();
    ctx.moveTo(0, -6);
    ctx.lineTo(4, 5);
    ctx.lineTo(-4, 5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}
