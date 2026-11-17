/**
 * AI VISION CITY - Deep Learning Architecture & Educational Presentation Suite
 * Interactive animated U-Net visualizer, skip connection flows, 3x3 convolution kernels,
 * downsampling dimension flow, modern architecture benchmarks (U-Net, Mask R-CNN, SegFormer, DeepLabV3+),
 * live IoU & Dice metric calculator, and boundary error failure modes analysis.
 * All explained with simple words and concrete examples from our 3D game world.
 */
import katex from 'katex';
import 'katex/dist/katex.min.css';

export class EducationSuite {
  constructor() {
    this.isOpen = false;
    this.activeTab = 'concepts';
    this.iouThreshold = 82; // Initial accuracy %

    this.createDom();
    this.bindEvents();
    this.updateMetricCalculation();
  }

  createDom() {
    this.modal = document.createElement('div');
    this.modal.id = 'education-modal-overlay';
    this.modal.className = 'edu-modal-overlay';
    this.modal.style.display = 'none';

    this.modal.innerHTML = `
      <div class="edu-glass-container">
        <!-- Header -->
        <div class="edu-header">
          <div class="edu-title-group">
            <span class="edu-badge">ACADEMIC DEEP LEARNING SUITE // UNIVERSITY PRESENTATION</span>
            <h1 class="edu-title">IMAGE SEGMENTATION ARCHITECTURES & MATHEMATICS</h1>
          </div>
          <button id="btn-close-edu" class="btn-close-glass" title="Close Panel">&times;</button>
        </div>

        <!-- Navigation Tabs -->
        <div class="edu-tabs-bar">
          <button class="edu-tab-btn active" data-tab="concepts">
            <span class="tab-num">01</span>
            <span>SEGMENTATION TYPES & USES</span>
          </button>
          <button class="edu-tab-btn" data-tab="unet">
            <span class="tab-num">02</span>
            <span>U-NET & PIPELINE</span>
          </button>
          <button class="edu-tab-btn" data-tab="compare">
            <span class="tab-num">03</span>
            <span>ARCHITECTURE BENCHMARK</span>
          </button>
          <button class="edu-tab-btn" data-tab="metrics">
            <span class="tab-num">04</span>
            <span>EVALUATION: IoU & DICE</span>
          </button>
          <button class="edu-tab-btn" data-tab="failures">
            <span class="tab-num">05</span>
            <span>FAILURE MODES & ERRORS</span>
          </button>
        </div>

        <!-- Tab Content Panes -->
        <div class="edu-content-area">
          
          <!-- TAB 1: SEGMENTATION TYPES & REAL-WORLD USES -->
          <div id="tab-concepts" class="edu-pane active">
            <div class="concepts-grid">
              
              <!-- Semantic Segmentation -->
              <div class="concept-card">
                <div class="concept-badge sem">CATEGORY 01</div>
                <h2 class="concept-title">SEMANTIC SEGMENTATION</h2>
                <div class="concept-question">"WHAT category is each pixel?"</div>
                <div class="concept-body">
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      Colors every pixel by its category. All objects of the same kind share one single color (all cars = Yellow, all people = Green, all road = Grey). It does <strong>not</strong> separate individual cars from each other.
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      When looking at our street intersection, the AI paints all drivable asphalt in dark grey, building walls in blue, and every vehicle on the road in uniform yellow. It sees our Yellow Taxi and Black Police Cruiser both as simply <em>"Vehicle pixels"</em> without distinguishing between them.
                    </div>
                  </div>
                  <div class="concept-section">
                    <span class="concept-hdr">REAL-WORLD USES:</span>
                    <ul>
                      <li><strong>Self-Driving Cars (Tesla / Waymo):</strong> Finding the exact drivable road asphalt vs. sidewalks and curbs.</li>
                      <li><strong>Medical Diagnosis:</strong> Isolating liver, heart, or lung tissue in CT and MRI scans.</li>
                      <li><strong>Satellite Earth Observation:</strong> Monitoring deforestation, flood zones, and urban sprawl.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Instance Segmentation -->
              <div class="concept-card">
                <div class="concept-badge inst">CATEGORY 02</div>
                <h2 class="concept-title">INSTANCE SEGMENTATION</h2>
                <div class="concept-question">"WHICH individual object is this?"</div>
                <div class="concept-body">
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      Detects and gives a <strong>unique color mask</strong> to every separate countable object. Car #1 is Blue, Car #2 is Orange, Pedestrian #1 is Pink, Pedestrian #2 is Cyan.
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      When the <strong>Yellow Taxi (<code>car_taxi.glb</code>)</strong> drives side-by-side with the <strong>Black Police Cruiser (<code>car_police.glb</code>)</strong>, Instance Segmentation gives each separate car its own unique color mask: Taxi = <code>Car [ID:10]</code> (Blue), Police Cruiser = <code>Car [ID:11]</code> (Orange), and each walking civilian gets their own unique person ID!
                    </div>
                  </div>
                  <div class="concept-section">
                    <span class="concept-hdr">REAL-WORLD USES:</span>
                    <ul>
                      <li><strong>Warehouse Automation:</strong> Amazon robots identifying and picking up a specific parcel from a crowded bin.</li>
                      <li><strong>Traffic Monitoring:</strong> Counting exact vehicle quantities and measuring individual lane speeds.</li>
                      <li><strong>Autonomous Overtaking:</strong> Tracking the exact distance and silhouette of a specific vehicle ahead.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Panoptic Segmentation -->
              <div class="concept-card">
                <div class="concept-badge pan">CATEGORY 03</div>
                <h2 class="concept-title">PANOPTIC SEGMENTATION</h2>
                <div class="concept-question">"The complete visual scene inventory"</div>
                <div class="concept-body">
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      Combines <strong>Semantic</strong> (continuous background "stuff") + <strong>Instance</strong> (countable "things") into one complete AI model. It paints roads and buildings while simultaneously tracking each separate car and pedestrian!
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      The complete master AI scan: it maps the continuous road asphalt and commercial buildings as background "stuff", while cleanly isolating each moving sports car, walking civilian, and hostile mech as distinct countable "things"!
                    </div>
                  </div>
                  <div class="concept-section">
                    <span class="concept-hdr">REAL-WORLD USES:</span>
                    <ul>
                      <li><strong>Full Autonomous Driving (FSD):</strong> Knowing where the continuous road is while tracking every separate pedestrian crossing.</li>
                      <li><strong>Augmented Reality (Apple Vision, Meta Quest):</strong> Placing virtual 3D objects correctly behind real furniture and humans.</li>
                      <li><strong>Smart Cities:</strong> Comprehensive real-time urban environmental awareness.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Tactical Threat Scan -->
              <div class="concept-card">
                <div class="concept-badge threat">CATEGORY 04</div>
                <h2 class="concept-title">TACTICAL THREAT SCAN</h2>
                <div class="concept-question">"Is there a high-priority hazard or anomaly?"</div>
                <div class="concept-body">
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      Isolates high-priority targets and anomalies from neutral surroundings, highlighting their silhouettes in vivid glowing infrared crimson while desaturating passive background pixels into dim monochrome.
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      Press <strong>Mode 5 [Tactical Threat Scan]</strong>: the AI instantly highlights the <strong>Heavy Titan Mech, Bipedal Combat Walker, and Aerial Drone</strong> in pulsing red thermal silhouettes, while rendering peaceful civilian pedestrians and road asphalt in neutral grey!
                    </div>
                  </div>
                  <div class="concept-section">
                    <span class="concept-hdr">REAL-WORLD USES:</span>
                    <ul>
                      <li><strong>Defense & Security:</strong> FLIR thermal cameras detecting intruders, drones, and moving military vehicles in pitch darkness.</li>
                      <li><strong>Oncology AI:</strong> Instantly highlighting cancerous tumors or lesions against healthy tissue cells in histology scans.</li>
                      <li><strong>Industrial Quality Control:</strong> Automatically spotting hairline microchip fractures on manufacturing lines.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- TAB 2: U-NET ARCHITECTURE, SKIP CONNECTIONS, 3x3 KERNELS & DOWNSAMPLING -->
          <div id="tab-unet" class="edu-pane">
            <div class="unet-presentation-layout">
              
              <!-- U-Net SVG Visual Pipeline -->
              <div class="unet-diagram-col">
                <div class="diagram-title-bar">
                  <span>U-NET MULTI-SCALE CONTRACTING & EXPANDING PIPELINE</span>
                  <span class="tensor-dims-tag">INPUT: 256 &times; 256 &times; 3 &rarr; OUTPUT: 256 &times; 256 &times; K</span>
                </div>
                
                <div class="unet-svg-wrapper">
                  <svg viewBox="0 0 860 380" class="unet-svg">
                    <defs>
                      <linearGradient id="encGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#00f0ff" />
                        <stop offset="100%" stop-color="#0066cc" />
                      </linearGradient>
                      <linearGradient id="decGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#00ff88" />
                        <stop offset="100%" stop-color="#009944" />
                      </linearGradient>
                      <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ff0077" />
                        <stop offset="100%" stop-color="#aa0044" />
                      </linearGradient>
                    </defs>

                    <!-- Skip Connections (Animated dashed lines with flowing particles) -->
                    <g class="skip-connections">
                      <path d="M 140 50 L 720 50" class="skip-line" />
                      <path d="M 200 110 L 660 110" class="skip-line" />
                      <path d="M 260 170 L 600 170" class="skip-line" />
                      <path d="M 320 230 L 540 230" class="skip-line" />
                      
                      <!-- Flowing particle markers -->
                      <circle cx="430" cy="50" r="4" class="skip-particle" />
                      <circle cx="430" cy="110" r="4" class="skip-particle" />
                      <circle cx="430" cy="170" r="4" class="skip-particle" />
                      <circle cx="430" cy="230" r="4" class="skip-particle" />
                    </g>

                    <!-- Encoder Stages (Downsampling) -->
                    <rect x="20" y="30" width="30" height="220" class="tensor-block" fill="#445566" />
                    <text x="35" y="270" class="svg-label">Input 256²</text>

                    <!-- Enc 1 (256x256, 64) -->
                    <rect x="80" y="35" width="40" height="200" class="tensor-block enc-block" fill="url(#encGrad)" />
                    <text x="100" y="255" class="svg-label">256² (64)</text>

                    <!-- Enc 2 (128x128, 128) -->
                    <rect x="150" y="75" width="40" height="150" class="tensor-block enc-block" fill="url(#encGrad)" />
                    <text x="170" y="245" class="svg-label">128² (128)</text>

                    <!-- Enc 3 (64x64, 256) -->
                    <rect x="220" y="115" width="40" height="100" class="tensor-block enc-block" fill="url(#encGrad)" />
                    <text x="240" y="235" class="svg-label">64² (256)</text>

                    <!-- Enc 4 (32x32, 512) -->
                    <rect x="290" y="155" width="40" height="60" class="tensor-block enc-block" fill="url(#encGrad)" />
                    <text x="310" y="235" class="svg-label">32² (512)</text>

                    <!-- Bottleneck (16x16, 1024) -->
                    <rect x="390" y="200" width="80" height="40" class="tensor-block bottle-block" fill="url(#bottleGrad)" />
                    <text x="430" y="260" class="svg-label font-bold">Bottleneck 8²-16² (1024)</text>

                    <!-- Decoder Stages (Upsampling) -->
                    <rect x="530" y="155" width="40" height="60" class="tensor-block dec-block" fill="url(#decGrad)" />
                    <text x="550" y="235" class="svg-label">32² (512)</text>

                    <rect x="600" y="115" width="40" height="100" class="tensor-block dec-block" fill="url(#decGrad)" />
                    <text x="620" y="235" class="svg-label">64² (256)</text>

                    <rect x="670" y="75" width="40" height="150" class="tensor-block dec-block" fill="url(#decGrad)" />
                    <text x="690" y="245" class="svg-label">128² (128)</text>

                    <rect x="740" y="35" width="40" height="200" class="tensor-block dec-block" fill="url(#decGrad)" />
                    <text x="760" y="255" class="svg-label">256² (64)</text>

                    <!-- Output Mask (256x256, K) -->
                    <rect x="810" y="30" width="30" height="220" class="tensor-block" fill="#f1b82d" />
                    <text x="825" y="270" class="svg-label">Mask 256²</text>

                    <!-- Downsample / Upsample Arrows -->
                    <path d="M 125 140 L 145 155" stroke="#00f0ff" stroke-width="2.5" />
                    <path d="M 195 160 L 215 175" stroke="#00f0ff" stroke-width="2.5" />
                    <path d="M 265 180 L 285 195" stroke="#00f0ff" stroke-width="2.5" />
                    <path d="M 335 200 L 385 220" stroke="#00f0ff" stroke-width="2.5" />

                    <path d="M 475 220 L 525 200" stroke="#00ff88" stroke-width="2.5" />
                    <path d="M 575 195 L 595 180" stroke="#00ff88" stroke-width="2.5" />
                    <path d="M 645 175 L 665 160" stroke="#00ff88" stroke-width="2.5" />
                    <path d="M 715 155 L 735 140" stroke="#00ff88" stroke-width="2.5" />
                  </svg>
                </div>

                <div class="legend-bar">
                  <span class="leg-item"><span class="leg-dot enc"></span>Encoder Conv + MaxPool (Downsample)</span>
                  <span class="leg-item"><span class="leg-dot dec"></span>Decoder Transposed Conv (Upsample)</span>
                  <span class="leg-item"><span class="leg-dot skip"></span>Skip Connection (Feature Concatenation)</span>
                  <span class="leg-item"><span class="leg-dot bottle"></span>Bottleneck (Dense Semantic Latent)</span>
                </div>
              </div>

              <!-- 4 In-Depth Educational Cards Covering the Core Mechanics -->
              <div class="pipeline-cards-grid">
                
                <!-- TOPIC 1: U-NET ARCHITECTURE -->
                <div class="edu-card">
                  <div class="arch-badge">CORE DEEP LEARNING ARCHITECTURE</div>
                  <h3 class="card-heading">1. U-NET ARCHITECTURE (ENCODER-DECODER CNN)</h3>
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      A U-shaped neural network with two symmetric arms:
                      <strong>1. Encoder (Left Arm):</strong> Compresses the screen to learn <em>"WHAT is in the scene"</em> (car, person, road).
                      <strong>2. Decoder (Right Arm):</strong> Expands the resolution back up to draw <em>"WHERE each object is down to the exact pixel"</em>.
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      When your player character walks across the crosswalk, U-Net takes the camera view and processes it through the U-curve. The bottleneck recognizes <em>"there is a pedestrian on the sidewalk and a sports car on the road"</em>, and the decoder paints the exact green pedestrian mask and yellow car mask in real time!
                    </div>
                  </div>
                  <ul class="bullet-list">
                    <li><strong>Contracting Path:</strong> 4 stages of repeated convolutions followed by $2 \times 2$ Max-Pooling.</li>
                    <li><strong>Expanding Path:</strong> 4 stages of transposed convolutions ("deconv") that reconstruct pixel boundaries.</li>
                  </ul>
                </div>

                <!-- TOPIC 2: SKIP CONNECTIONS -->
                <div class="edu-card">
                  <div class="arch-badge">BOUNDARY RECONSTRUCTION HIGHWAYS</div>
                  <h3 class="card-heading">2. SKIP CONNECTIONS (THE HIGH-RESOLUTION BRIDGES)</h3>
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      Direct horizontal "express bridges" that copy crisp, high-resolution feature maps from early encoder layers straight across to matching decoder layers, completely bypassing the bottleneck compression.
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      Look at our city's <strong>thin metal streetlight poles, traffic light posts, and your player's fingers</strong>. Without skip connections, downsampling squashes a 3-pixel-wide metal pole down to 0 pixels—making it disappear into a blurry smear. Skip connections copy the raw sharp edges straight across, keeping the streetlight thin and crisp!
                    </div>
                  </div>
                  <div class="math-box">
                    ${katex.renderToString('x_{\\text{dec}}^{(l)} = \\mathcal{F}\\Big(\\big[\\, \\mathcal{U}(x_{\\text{dec}}^{(l+1)}), \\; x_{\\text{enc}}^{(l)} \\,\\big]\\Big)', { displayMode: true, throwOnError: false })}
                  </div>
                  <ul class="bullet-list">
                    <li><strong>Feature Concatenation:</strong> Channels are concatenated directly along the depth dimension ($C_{\\text{in}} = C_{\\text{dec}} + C_{\\text{enc}}$).</li>
                    <li><strong>Gradient Highway:</strong> Protects against vanishing gradients during backpropagation.</li>
                  </ul>
                </div>

                <!-- TOPIC 3: 3x3 CONVOLUTION KERNEL -->
                <div class="edu-card">
                  <div class="arch-badge">FEATURE DETECTION BUILDING BLOCK</div>
                  <h3 class="card-heading">3. 3&times;3 CONVOLUTION KERNEL (THE SLIDING FILTER)</h3>
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      A tiny 3-by-3 pixel grid (9 numbers/weights) that slides across the image like a mini magnifying glass. At each position, it multiplies pixel values to detect local visual patterns: straight edges, sharp corners, colors, and textures.
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      As the 3&times;3 kernel slides across our city's asphalt road, it detects the sharp color contrast between the dark road asphalt and the bright white stripes of the <strong>pedestrian zebra crossing</strong>, instantly signaling to the AI: <em>"Crosswalk lane marking detected here!"</em>.
                    </div>
                  </div>
                  <ul class="bullet-list">
                    <li><strong>Receptive Field Efficiency:</strong> Two stacked 3 &times; 3 convolutions have the exact same 5 &times; 5 receptive field as a large 5 &times; 5 kernel, but use <strong>28% fewer parameters</strong> (2 &times; 3&sup2; = 18 weights vs 5&sup2; = 25 weights)!</li>
                    <li><strong>Non-Linearity:</strong> Inserting a ReLU activation between the two 3 &times; 3 kernels allows the network to learn much richer, more complex urban shapes.</li>
                  </ul>
                </div>

                <!-- TOPIC 4: DOWNSAMPLING & DIMENSION FLOW -->
                <div class="edu-card">
                  <div class="arch-badge">MULTI-SCALE RESOLUTION TRANSITION</div>
                  <h3 class="card-heading">4. DOWNSAMPLING & DIMENSION FLOW</h3>
                  <div class="simple-def-box">
                    <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                    <div class="simple-def-desc">
                      The step-by-step process of shrinking the spatial image size by half (using 2 &times; 2 Max-Pooling with stride 2), while simultaneously doubling the number of feature channels (from 3 RGB colors up to 1024 deep features).
                    </div>
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      <strong>&bull; Stage 1 (256 &times; 256):</strong> AI sees raw pixel grain: red sports car paint, asphalt texture, sidewalk curbs.<br>
                      <strong>&bull; Stage 3 (64 &times; 64):</strong> Pixels are grouped into parts: car wheels, windows, pedestrian legs.<br>
                      <strong>&bull; Bottleneck (16 &times; 16):</strong> Spatial size is tiny, but 1024 channels capture deep concepts: <em>"High-speed sports coupe heading north on the road"</em>.
                    </div>
                  </div>
                  <ul class="bullet-list">
                    <li><strong>Spatial Shrinkage:</strong> 256&sup2; &rarr; 128&sup2; &rarr; 64&sup2; &rarr; 32&sup2; &rarr; 16&sup2; (Compresses spatial noise).</li>
                    <li><strong>Channel Growth:</strong> 3 &rarr; 64 &rarr; 128 &rarr; 256 &rarr; 512 &rarr; 1024 (Builds abstract semantic understanding).</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <!-- TAB 3: ARCHITECTURE BENCHMARK (U-Net, Mask R-CNN, SegFormer, DeepLabV3+) -->
          <div id="tab-compare" class="edu-pane">
            <div class="compare-grid">
              
              <!-- U-Net -->
              <div class="arch-card">
                <div class="arch-badge">BASE CNN MODEL (2015)</div>
                <h3 class="arch-title">U-Net</h3>
                <p class="arch-origin">Ronneberger et al. (MICCAI)</p>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">Pure CNN symmetric contracting and expanding U-network connected by 1:1 direct identity skip bridges.</div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">A fast, lightweight baseline that efficiently segments general roads and buildings, but cannot separate two cars parked next to each other.</div>
                </div>
                <ul class="arch-features">
                  <li><strong>Core Mechanism:</strong> Pure CNN symmetric contracting/expanding U-path.</li>
                  <li><strong>Key Strength:</strong> Fast training, lightweight footprint, strong medical & small-dataset baselines.</li>
                  <li><strong>Limitation:</strong> Semantic gap between shallow encoder features and deep decoder features.</li>
                </ul>
              </div>

              <!-- TOPIC 6: MASK R-CNN -->
              <div class="arch-card highlight-border">
                <div class="arch-badge">INSTANCE SEGMENTATION BENCHMARK (2017)</div>
                <h3 class="arch-title">Mask R-CNN</h3>
                <p class="arch-origin">He et al. (Meta AI / FAIR - ICCV Best Paper)</p>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">
                    The undisputed king of <strong>Instance Segmentation</strong>. A two-stage AI: Stage 1 proposes bounding boxes around candidate objects (*"There is an object here"*). Stage 2 uses RoIAlign to classify the object and paint a precise binary pixel mask inside that box.
                  </div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">
                    When our <strong>Yellow City Taxi (car_taxi.glb)</strong> stops right beside our <strong>Black Police Cruiser (car_police.glb)</strong>, Semantic U-Net lumps them together as one big yellow blob. Mask R-CNN isolates Box #1: <code>Taxi Cab [ID:10]</code> (Blue) and Box #2: <code>Police Cruiser [ID:11]</code> (Orange), keeping their masks completely distinct even when their bumpers touch!
                  </div>
                </div>
                <ul class="arch-features">
                  <li><strong>Stage 1 (RPN):</strong> Scans Feature Pyramid Network (FPN) anchors to generate high-confidence bounding box proposals.</li>
                  <li><strong>Stage 2 (RoIAlign):</strong> Bilinear interpolation preserves exact sub-pixel spatial alignment, completely eliminating quantization error.</li>
                  <li><strong>Key Strength:</strong> SOTA accuracy on individual instances, counting objects, and complex overlapping scenes.</li>
                </ul>
              </div>

              <!-- TOPIC 5: SEGFORMER (TRANSFORMER) -->
              <div class="arch-card highlight-border">
                <div class="arch-badge">VISION TRANSFORMER (2021)</div>
                <h3 class="arch-title">SegFormer</h3>
                <p class="arch-origin">Xie et al. (NeurIPS / NVIDIA)</p>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">
                    A modern Vision Transformer that replaces CNN convolutions with <strong>Self-Attention blocks</strong> and an ultra-lightweight All-MLP decoder. Instead of only looking at local 3&times;3 neighbors, it calculates attention relationships across every single pixel in the entire image simultaneously from layer 1!
                  </div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">
                    When looking down our downtown avenue, a commercial building on the far-left has the same tinted glass windows as a skyscraper 200m away on the far-right. A standard CNN needs multiple downsampling steps before its receptive field connects them. <strong>SegFormer connects both buildings globally in layer 1</strong>, understanding they share the same building facade material regardless of where they are on screen!
                  </div>
                </div>
                <ul class="arch-features">
                  <li><strong>Positional-Free Attention:</strong> Uses Mix-FFN to encode position dynamically, handling arbitrary screen resolutions without interpolation artifacts.</li>
                  <li><strong>All-MLP Decoder:</strong> Aggregates multi-level attention tokens with zero heavy convolutions, yielding exceptional inference speed (60+ FPS).</li>
                  <li><strong>Key Strength:</strong> Global self-attention receptive field from layer 1; state-of-the-art accuracy/speed trade-off on Cityscapes.</li>
                </ul>
              </div>

              <!-- DeepLabV3+ -->
              <div class="arch-card">
                <div class="arch-badge">ATROUS / ASPP SOTA (2018)</div>
                <h3 class="arch-title">DeepLabV3+</h3>
                <p class="arch-origin">Chen et al. (Google Research / ECCV)</p>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">Uses <strong>Atrous (Dilated) Convolutions</strong> with multiple spacing rates ($r=6, 12, 18$) to expand the field of view without shrinking image resolution.</div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">Accurately captures huge multi-story buildings and small pedestrian walkers simultaneously without needing aggressive downsampling.</div>
                </div>
                <ul class="arch-features">
                  <li><strong>Core Mechanism:</strong> Atrous Spatial Pyramid Pooling (ASPP) samples multi-scale context in parallel.</li>
                  <li><strong>Key Strength:</strong> Gold standard for natural urban scenes (Cityscapes benchmark).</li>
                  <li><strong>Limitation:</strong> Heavy memory cost for high dilation kernels; potential gridding artifacts.</li>
                </ul>
              </div>

            </div>
          </div>

          <!-- TAB 4: EVALUATION METRICS (IoU & DICE) -->
          <div id="tab-metrics" class="edu-pane">
            <div class="metrics-interactive-layout">
              
              <!-- Left: Interactive Venn Diagram & Threshold Slider -->
              <div class="metrics-controls-panel">
                <div class="panel-header-title">PREDICTION OVERLAP & QUALITY SIMULATION</div>
                
                <div class="slider-group">
                  <div class="slider-header">
                    <span>Segmentation Accuracy / Confidence Threshold:</span>
                    <span id="slider-val-label" class="val-pill">82%</span>
                  </div>
                  <input type="range" id="iou-slider" min="20" max="98" value="82" class="cyber-slider" />
                </div>

                <!-- Live Venn Diagram -->
                <div class="venn-diagram-container">
                  <svg viewBox="0 0 380 220" class="venn-svg">
                    <circle cx="150" cy="110" r="75" fill="rgba(0, 240, 255, 0.35)" stroke="#00f0ff" stroke-width="2.5" />
                    <circle id="venn-circle-b" cx="225" cy="110" r="75" fill="rgba(255, 0, 120, 0.35)" stroke="#ff0078" stroke-width="2.5" />
                    
                    <text x="110" y="115" class="venn-label">Ground Truth (A)</text>
                    <text id="venn-label-b" x="250" y="115" class="venn-label">Prediction (B)</text>
                    <text id="venn-label-overlap" x="185" y="115" class="venn-overlap-label">A &cap; B</text>
                  </svg>
                </div>

                <div class="metrics-legend">
                  <span class="m-leg"><span class="m-box tp"></span>True Positive (${katex.renderToString('A \\cap B')})</span>
                  <span class="m-leg"><span class="m-box fp"></span>False Positive (${katex.renderToString('B \\setminus A')})</span>
                  <span class="m-leg"><span class="m-box fn"></span>False Negative (${katex.renderToString('A \\setminus B')})</span>
                </div>
              </div>

              <!-- Right: Mathematical Computations & Explanations -->
              <div class="metrics-calc-panel">
                
                <!-- IoU Card -->
                <div class="metric-score-card">
                  <div class="score-header">
                    <span class="score-name">INTERSECTION OVER UNION (IoU / JACCARD INDEX)</span>
                    <span id="score-val-iou" class="score-number">0.718</span>
                  </div>
                  <div class="math-box">
                    ${katex.renderToString('\\text{IoU} = \\frac{|A \\cap B|}{|A \\cup B|} = \\frac{TP}{TP + FP + FN}', { displayMode: true, throwOnError: false })}
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      If the AI predicts the mask for our <strong>Crimson Sports Coupe</strong>, IoU measures what percentage of the predicted pixels perfectly match the actual 3D car body geometry. An IoU &ge; 0.70 is considered strong in autonomous driving.
                    </div>
                  </div>
                  <p class="score-desc">
                    Penalizes false positives and false negatives equally. The standard benchmark metric for Cityscapes, PASCAL VOC, and COCO.
                  </p>
                </div>

                <!-- Dice Card -->
                <div class="metric-score-card">
                  <div class="score-header">
                    <span class="score-name">DICE COEFFICIENT (F1-SCORE / DSC)</span>
                    <span id="score-val-dice" class="score-number">0.836</span>
                  </div>
                  <div class="math-box">
                    ${katex.renderToString('\\text{Dice} = \\frac{2|A \\cap B|}{|A| + |B|} = \\frac{2 \\cdot TP}{2 \\cdot TP + FP + FN}', { displayMode: true, throwOnError: false })}
                  </div>
                  <div class="game-world-box">
                    <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                    <div class="game-world-desc">
                      Harmonic mean of precision and recall. Because Dice gives double weight to true positive overlap ($2 \\cdot TP$), it is mathematically always $\\ge \\text{IoU}$ and ideal for evaluating smaller targets like walking pedestrians.
                    </div>
                  </div>
                  <p class="score-desc">
                    Harmonic mean of precision and recall. Preferred in medical imaging and class-imbalanced datasets.
                  </p>
                </div>

                <div class="math-relationship-box">
                  <strong>Mathematical Conversion:</strong>
                  ${katex.renderToString('\\text{Dice} = \\frac{2 \\cdot \\text{IoU}}{1 + \\text{IoU}}, \\qquad \\text{IoU} = \\frac{\\text{Dice}}{2 - \\text{Dice}}', { displayMode: true, throwOnError: false })}
                </div>

              </div>

            </div>
          </div>

          <!-- TAB 5: TOPIC 7 - SEGMENTATION BOUNDARY ERRORS & FAILURE MODES ANALYSIS -->
          <div id="tab-failures" class="edu-pane">
            <div class="panel-header-title" style="margin-bottom: 16px; font-size: 0.95rem; color: #fff; letter-spacing: 0.1em;">
              SEGMENTATION BOUNDARY ERRORS & FAILURE MODES ANALYSIS
            </div>
            <div class="failures-grid">
              
              <!-- Failure 1: Boundary Bleeding -->
              <div class="failure-card">
                <div class="fail-badge">FAILURE MODE 01</div>
                <h3 class="fail-title">Boundary Bleeding & Edge Blurring</h3>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">
                    The segmentation mask leaks past the true edges of an object, rounding off sharp corners and bleeding into adjacent surfaces.
                  </div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">
                    The sharp crimson hood of our <strong>Velocity Sports Coupe</strong> bleeds 3 to 5 pixels into the dark asphalt road. The neural network rounds off the pointed front bumper into an unnatural oval shape because downsampling smoothed out the sharp corner.
                  </div>
                </div>
                <p class="fail-cause"><strong>Root Cause:</strong> Deep downsampling (1/16 or 1/32 of original resolution) discards sub-pixel spatial coordinates. Bilinear upsampling smooths out high-frequency boundary gradients.</p>
                <p class="fail-sol"><strong>Mitigation:</strong> Boundary Loss (L_boundary), PointRend iterative sub-pixel sampling, High-Resolution Skip Features.</p>
              </div>

              <!-- Failure 2: Small & Distant Objects -->
              <div class="failure-card">
                <div class="fail-badge">FAILURE MODE 02</div>
                <h3 class="fail-title">Small & Distant Object Disappearance</h3>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">
                    Small or distant objects occupy too few pixels on screen; downsampling shrinks them to zero and they completely vanish from the AI's mask.
                  </div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">
                    The <strong>Aerial Hunter Drone hovering in the sky or a civilian pedestrian 50m down the avenue</strong> occupies only a tiny 6 &times; 6 pixel cluster. Max-pooling downsamples it to less than 1 pixel by Stage 4, causing the drone to completely vanish from the AI scanner!
                  </div>
                </div>
                <p class="fail-cause"><strong>Root Cause:</strong> Four successive 2 &times; 2 pooling operations divide spatial resolution by 16. Pixel clusters smaller than 16 &times; 16 have their activations suppressed to zero.</p>
                <p class="fail-sol"><strong>Mitigation:</strong> Feature Pyramid Networks (FPN), multi-scale testing, high-resolution patch cropping.</p>
              </div>

              <!-- Failure 3: Occlusion & Broken Topology -->
              <div class="failure-card">
                <div class="fail-badge">FAILURE MODE 03</div>
                <h3 class="fail-title">Occlusion & Broken Object Topology</h3>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">
                    When a foreground object cuts in front of a background object, the AI splits the single background object into two disconnected pieces.
                  </div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">
                    A <strong>thin metal streetlight pole</strong> stands between your camera and a parked SUV. The pole cuts the SUV visually in half. The AI predicts the front half as <em>"Car #1"</em> and the rear half as <em>"Car #2"</em>, failing to understand it is one single connected vehicle!
                  </div>
                </div>
                <p class="fail-cause"><strong>Root Cause:</strong> Standard CNNs only evaluate local pixel neighborhoods; they lack higher-order spatial reasoning about object continuity behind occluders.</p>
                <p class="fail-sol"><strong>Mitigation:</strong> Non-local self-attention modules, graph convolutional reasoning, topological connectivity loss.</p>
              </div>

              <!-- Failure 4: Harsh Shadows & Reflections -->
              <div class="failure-card">
                <div class="fail-badge">FAILURE MODE 04</div>
                <h3 class="fail-title">Harsh Shadows & Specular Reflection Confusion</h3>
                <div class="simple-def-box">
                  <span class="simple-def-tag">💡 SIMPLE DEFINITION:</span>
                  <div class="simple-def-desc">
                    High-contrast dark shadows or bright specular reflections alter pixel colors so drastically that the AI misclassifies the surface.
                  </div>
                </div>
                <div class="game-world-box">
                  <span class="game-world-tag">🎮 IN OUR GAME WORLD:</span>
                  <div class="game-world-desc">
                    The tall <strong>4-story commercial building casts a dark diagonal shadow</strong> across the sunny asphalt road. Because the shadow is dark with a cool blue sky tint, the AI misclassifies the shadowed asphalt as <em>"Building Footprint"</em> or <em>"Water Puddle"</em>, creating a false hazard!
                  </div>
                </div>
                <p class="fail-cause"><strong>Root Cause:</strong> Convolutional filters rely heavily on RGB brightness gradients; sharp shadow edges mimic physical object contours.</p>
                <p class="fail-sol"><strong>Mitigation:</strong> Shadow-invariant chromaticity normalization, extensive shadow-injection data augmentation, thermal/LiDAR sensor fusion.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    `;

    document.body.appendChild(this.modal);
  }

  bindEvents() {
    // Close button
    const closeBtn = this.modal.querySelector('#btn-close-edu');
    closeBtn.addEventListener('click', () => {
      this.close();
    });

    // Tab buttons
    const tabBtns = this.modal.querySelectorAll('.edu-tab-btn');
    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Slider for IoU / Dice interactive calculation
    const slider = this.modal.querySelector('#iou-slider');
    slider.addEventListener('input', (e) => {
      this.iouThreshold = parseInt(e.target.value, 10);
      this.updateMetricCalculation();
    });

    // Esc closes modal
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  switchTab(tabName) {
    this.activeTab = tabName;
    const tabBtns = this.modal.querySelectorAll('.edu-tab-btn');
    const panes = this.modal.querySelectorAll('.edu-pane');

    tabBtns.forEach((btn) => {
      if (btn.getAttribute('data-tab') === tabName) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    panes.forEach((pane) => {
      if (pane.id === `tab-${tabName}`) pane.classList.add('active');
      else pane.classList.remove('active');
    });
  }

  updateMetricCalculation() {
    const label = this.modal.querySelector('#slider-val-label');
    const iouEl = this.modal.querySelector('#score-val-iou');
    const diceEl = this.modal.querySelector('#score-val-dice');
    const vennB = this.modal.querySelector('#venn-circle-b');

    if (!label || !iouEl || !diceEl) return;

    label.innerText = `${this.iouThreshold}%`;

    // Mathematical modeling of IoU and Dice based on threshold overlap
    const overlapRatio = this.iouThreshold / 100.0;
    
    // Simulate TP, FP, FN
    const groundTruthArea = 1000;
    const tp = groundTruthArea * overlapRatio;
    const fp = groundTruthArea * (1.0 - overlapRatio) * 0.45;
    const fn = groundTruthArea * (1.0 - overlapRatio);

    const iou = tp / (tp + fp + fn);
    const dice = (2.0 * tp) / (2.0 * tp + fp + fn);

    iouEl.innerText = iou.toFixed(3);
    diceEl.innerText = dice.toFixed(3);

    // Update Venn diagram circle B position based on overlap
    if (vennB) {
      const targetCx = 150 + (1.0 - overlapRatio) * 125;
      vennB.setAttribute('cx', targetCx.toFixed(1));
    }
  }

  open() {
    this.isOpen = true;
    this.modal.style.display = 'flex';
  }

  close() {
    this.isOpen = false;
    this.modal.style.display = 'none';
  }
}
