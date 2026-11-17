/**
 * AI VISION CITY - Floating Glass AI Vision Scanner
 * Premium holographic tactical AI scanner interface on the right side of the screen.
 * Includes glassmorphism styling, live telemetry, interactive filters, tactical target brackets,
 * and educational explanation cards.
 */
import * as THREE from 'three';
import { SEGMENTATION_MODES } from '../segmentation/SegmentationPipeline.js';

export const FILTER_METADATA = [
  {
    mode: SEGMENTATION_MODES.NORMAL,
    title: 'NORMAL VISION',
    tag: 'RAW OPTICAL RGB',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    definition: 'Raw natural camera sight without neural network processing. Daylight, materials, and textures as perceived by human eyes.',
    gameExample: 'Direct 3D view of our city: daylight sunshine, asphalt roads, pedestrian sidewalks, brick buildings, and vehicle metallic clearcoat.',
    realWorldUse: '• Ground truth baseline for computer vision\n• Standard human driving & surveillance feeds\n• Raw training input fed into segmentation neural networks'
  },
  {
    mode: SEGMENTATION_MODES.SEMANTIC,
    title: 'SEMANTIC SEGMENTATION',
    tag: 'PIXEL-LEVEL CATEGORY LABELS',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    definition: 'Assigns every pixel a class category. All objects of the same kind share one color (all cars = Yellow, all people = Green, road = Grey). Does NOT separate individual cars.',
    gameExample: 'Paints all drivable asphalt in dark grey, buildings in blue, and all vehicles in uniform yellow (cannot tell our Taxi apart from the Police car).',
    realWorldUse: '• Autonomous Cars (Tesla / Waymo): Delineating drivable road surface from sidewalks & curbs\n• Medical Imaging: Segmenting organ tissue (liver, lungs) in CT / MRI scans\n• Satellite Analysis: Tracking forest loss, agriculture, and urban growth from orbit'
  },
  {
    mode: SEGMENTATION_MODES.INSTANCE,
    title: 'INSTANCE SEGMENTATION',
    tag: 'INDIVIDUAL OBJECT IDENTITIES',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/></svg>`,
    definition: 'Detects and assigns a unique color mask to each separate object instance. Car #1 is Blue, Car #2 is Orange, Pedestrian #1 is Pink, Pedestrian #2 is Cyan.',
    gameExample: 'Isolates every vehicle and person separately: Yellow Taxi = Car [ID:10] (Blue), Police Cruiser = Car [ID:11] (Orange), each walking civilian has their own unique ID!',
    realWorldUse: '• Warehouse Robotics: Amazon robotic arms isolating and picking up specific parcels from crowded bins\n• Traffic Analytics: Counting exact vehicles and measuring individual lane speeds\n• Crowd Safety: Tracking individual movement trajectories in stadiums and stations'
  },
  {
    mode: SEGMENTATION_MODES.PANOPTIC,
    title: 'PANOPTIC SEGMENTATION',
    tag: 'UNIFIED STUFF + THINGS',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    definition: 'The ultimate computer vision task. Combines Semantic (continuous background "stuff": road, sky, buildings) with Instance (countable "things": individual cars and people).',
    gameExample: 'Complete unified scene: continuous road & buildings as background "stuff" + every individual car & pedestrian as countable "things"!',
    realWorldUse: '• Full Self-Driving: Simultaneous road boundary mapping AND individual pedestrian obstacle tracking\n• Augmented Reality (Apple Vision / Meta Quest): Seamlessly placing virtual objects behind real people & furniture\n• City AI: Complete holistic urban environmental awareness'
  },
  {
    mode: SEGMENTATION_MODES.ENEMY_SCAN,
    title: 'TACTICAL THREAT SCAN',
    tag: 'ANOMALY & THREAT SILHOUETTES',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>`,
    definition: 'Isolates priority objects from neutral surroundings. Highlights target silhouettes in glowing infrared crimson while desaturating passive background pixels.',
    gameExample: 'Highlights our Heavy Titan Mech, Bipedal Walker, and Aerial Drone in pulsing red thermal silhouettes while dimming civilian roads and buildings!',
    realWorldUse: '• Defense & Security: Thermal FLIR cameras detecting intruders, drones, and military vehicles\n• Pathology AI: Spotlighting cancerous tumors or lesions against healthy tissue cells\n• Defect Inspection: Scanning manufactured microchips to instantly flag hairline flaws'
  },
  {
    mode: SEGMENTATION_MODES.EDGE_DETECTION,
    title: 'EDGE DETECTION',
    tag: 'SPATIAL CONTOUR BOUNDARIES',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4l16 16"/><path d="M4 20L20 4"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
    definition: 'Extracts sharp geometric outlines where color, depth, or class identity abruptly changes (Sobel / Laplacian convolution gradients).',
    gameExample: 'Extracts sharp geometric contours of pedestrian zebra crossing stripes, building facades, and thin metal streetlight poles.',
    realWorldUse: '• Lane Keeping Assist (ADAS): Detecting painted highway lanes and asphalt edge boundaries\n• Precision Robotics: Guiding automated laser cutting and seam welding along metal edges\n• Structural Inspection: Detecting cracks in concrete bridges, dams, and aircraft fuselages'
  },
  {
    mode: SEGMENTATION_MODES.DEPTH_VIEW,
    title: 'DEPTH ESTIMATION',
    tag: 'METRIC 3D DISTANCE MAP',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/></svg>`,
    definition: 'Measures how far every surface is from the camera lens using a false-color distance map (Cyan/Green = Close, Yellow = Mid-range, Purple = Distant).',
    gameExample: 'Measures metric 3D distance from player camera: Cyan/Green = nearby curbs & vehicles, Yellow = mid-range buildings, Purple = distant skyline.',
    realWorldUse: '• Automatic Emergency Braking (AEB): Stopping vehicles when obstacles appear within critical distance\n• Robot Vacuum Cleaners: Mapping room layouts and avoiding furniture legs and drop-offs\n• Smartphone Portrait Mode: Creating computational background blur (bokeh) behind faces'
  }
];

export class ScannerUI {
  constructor(segmentationPipeline, onOpenEducation) {
    this.pipeline = segmentationPipeline;
    this.onOpenEducation = onOpenEducation;
    this.currentMode = SEGMENTATION_MODES.ENEMY_SCAN; // Default directly to Tactical Enemy Scan
    this.isCollapsed = true; // Default collapsed for clean, uncluttered combat screen
    this.enemies = [];
    this.camera = null;
    this.scanPulseTimer = 0;

    this.createDom();
    this.bindEvents();
    this.selectMode(this.currentMode);
  }

  setCameraAndEnemies(camera, enemies) {
    this.camera = camera;
    this.enemies = enemies;
  }

  createDom() {
    // 1. Right-side Floating Smoked-Glass Container (starts collapsed)
    this.container = document.createElement('div');
    this.container.id = 'ai-vision-scanner';
    this.container.className = 'scanner-glass-panel collapsed';

    this.container.innerHTML = `
      <!-- Holographic Hex & Grid Decorative Overlay -->
      <div class="scanner-grid-bg"></div>
      
      <!-- Top Tactical Header -->
      <div class="scanner-header">
        <div class="header-main">
          <div class="scanner-status-indicator">
            <span class="status-pulse-dot"></span>
            <span class="status-label">SYS_ONLINE // V-4.8</span>
          </div>
          <button id="btn-collapse-scanner" class="btn-icon-glass" title="Toggle Scanner Panel">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        <div class="header-title-row">
          <h2 class="scanner-title">AI VISION SCANNER</h2>
          <span class="scanner-sub">NEURAL SEGMENTATION ENGINE</span>
        </div>
      </div>

      <!-- Radar / Signal Frequency Animation -->
      <div class="scanner-radar-strip">
        <div class="radar-scanline"></div>
        <div class="radar-spectrum">
          <div class="spec-bar"></div><div class="spec-bar"></div><div class="spec-bar"></div>
          <div class="spec-bar"></div><div class="spec-bar"></div><div class="spec-bar"></div>
          <div class="spec-bar"></div><div class="spec-bar"></div><div class="spec-bar"></div>
        </div>
        <span class="radar-text">INFERENCE: 60.0 FPS // ACTIVE</span>
      </div>

      <!-- Filter Selection Controls -->
      <div class="scanner-filter-section">
        <div class="section-label">SELECT SEGMENTATION MODE</div>
        <div class="filter-button-group">
          ${FILTER_METADATA.map((f, i) => `
            <button class="glass-filter-btn" data-mode="${f.mode}" data-index="${i}">
              <div class="btn-glow-border"></div>
              <div class="btn-icon-wrap">${f.icon}</div>
              <div class="btn-text-wrap">
                <span class="btn-title">${f.title}</span>
                <span class="btn-tag">${f.tag}</span>
              </div>
              <div class="btn-active-pip"></div>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Floating Educational Card (Bottom-Mid or within panel) -->
      <div class="scanner-card-wrap">
        <div class="card-glass-body">
          <div class="card-header">
            <span class="card-icon-pip">&#9670;</span>
            <span id="card-mode-title" class="card-title">NORMAL VISION</span>
          </div>
          <div class="card-field-group">
            <span class="card-label-badge">WHAT IT IS (DEFINITION):</span>
            <p id="card-mode-desc" class="card-desc"></p>
          </div>
          <div class="card-field-group">
            <span class="card-label-badge" style="color: var(--primary-cyan);">🎮 IN OUR GAME WORLD:</span>
            <p id="card-mode-game" class="card-desc" style="color: #e6edf3;"></p>
          </div>
          <div class="card-field-group">
            <span class="card-label-badge">REAL-WORLD APPLICATION & USE:</span>
            <div id="card-mode-tech" class="card-tech"></div>
          </div>
        </div>
      </div>

      <!-- Live Telemetry / Object Counter -->
      <div class="scanner-telemetry-section">
        <div class="telemetry-grid">
          <div class="telem-item">
            <span class="telem-val" id="telem-vehicles">0</span>
            <span class="telem-lbl">VEHICLES</span>
          </div>
          <div class="telem-item">
            <span class="telem-val" id="telem-pedestrians">0</span>
            <span class="telem-lbl">PEDESTRIANS</span>
          </div>
          <div class="telem-item highlight-threat">
            <span class="telem-val" id="telem-enemies">0</span>
            <span class="telem-lbl">THREATS</span>
          </div>
          <div class="telem-item">
            <span class="telem-val" id="telem-instances">0</span>
            <span class="telem-lbl">TOTAL IDS</span>
          </div>
        </div>
      </div>

      <!-- Action Button: Open Comprehensive Deep Learning Architecture Suite -->
      <div class="scanner-actions">
        <button id="btn-open-education" class="btn-education-pulse">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          <span>DEEP LEARNING / U-NET LAB</span>
        </button>
      </div>
    `;

    document.body.appendChild(this.container);

    // 2. Mini Floating Toggle Button when collapsed
    this.expandButton = document.createElement('button');
    this.expandButton.id = 'btn-expand-scanner';
    this.expandButton.className = 'btn-scanner-expand-tab';
    this.expandButton.innerHTML = `
      <div class="expand-pulse-pip"></div>
      <span>FILTERS [TAB]</span>
    `;
    this.expandButton.style.display = 'flex'; // Visible since panel starts collapsed
    document.body.appendChild(this.expandButton);
  }

  bindEvents() {
    // Mode button clicks
    const buttons = this.container.querySelectorAll('.glass-filter-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const mode = parseInt(btn.getAttribute('data-mode'), 10);
        this.selectMode(mode);
      });
    });

    // Collapse toggle
    const collapseBtn = this.container.querySelector('#btn-collapse-scanner');
    collapseBtn.addEventListener('click', () => {
      this.toggleCollapse();
    });

    this.expandButton.addEventListener('click', () => {
      this.toggleCollapse();
    });

    // Key 'Tab' toggles scanner panel open/closed without interrupting combat
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Tab') {
        e.preventDefault();
        this.toggleCollapse();
      }
    });

    // Education suite button
    const eduBtn = this.container.querySelector('#btn-open-education');
    eduBtn.addEventListener('click', () => {
      if (this.onOpenEducation) this.onOpenEducation();
    });
  }

  selectMode(mode) {
    this.currentMode = mode;
    this.pipeline.setMode(mode);
    this.updateActiveButton(mode);
    this.updateEducationalCard(mode);
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.container.classList.add('collapsed');
      this.expandButton.style.display = 'flex';
    } else {
      this.container.classList.remove('collapsed');
      this.expandButton.style.display = 'none';
    }
  }

  updateActiveButton(mode) {
    const buttons = this.container.querySelectorAll('.glass-filter-btn');
    buttons.forEach((btn) => {
      const btnMode = parseInt(btn.getAttribute('data-mode'), 10);
      if (btnMode === mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  updateEducationalCard(mode) {
    const meta = FILTER_METADATA.find((m) => m.mode === mode) || FILTER_METADATA[0];
    const titleEl = document.getElementById('card-mode-title');
    const descEl = document.getElementById('card-mode-desc');
    const gameEl = document.getElementById('card-mode-game');
    const techEl = document.getElementById('card-mode-tech');

    if (titleEl) titleEl.innerText = meta.title;
    if (descEl) descEl.innerText = meta.definition;
    if (gameEl) gameEl.innerText = meta.gameExample || '';
    if (techEl) {
      techEl.innerHTML = meta.realWorldUse
        .split('\n')
        .map((l) => `<div class="card-use-line">${l}</div>`)
        .join('');
    }
  }

  update(stats) {
    // Update live object counter
    if (stats) {
      const vEl = document.getElementById('telem-vehicles');
      const pEl = document.getElementById('telem-pedestrians');
      const eEl = document.getElementById('telem-enemies');
      const iEl = document.getElementById('telem-instances');

      if (vEl) vEl.innerText = stats.vehicles;
      if (pEl) pEl.innerText = stats.pedestrians;
      if (eEl) eEl.innerText = stats.enemies;
      if (iEl) iEl.innerText = stats.totalInstances;
    }

    if (this.scanPulseTimer > 0) {
      this.scanPulseTimer -= 0.016;
    }
  }

  triggerScanPulse() {
    this.scanPulseTimer = 6.0;
  }
}
