# AI VISION CITY — Real-Time 3D Open-World Image Segmentation Game

[![Three.js](https://img.shields.io/badge/Three.js-r160-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![WebGL 2.0](https://img.shields.io/badge/WebGL-2.0%20%2F%20GLSL-990000?style=for-the-badge&logo=webgl&logoColor=white)](https://www.khronos.org/webgl/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Deep Learning](https://img.shields.io/badge/Deep%20Learning-Computer%20Vision-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)](https://pytorch.org/)
[![License](https://img.shields.io/badge/License-MIT%20%2F%20CC0-00C853?style=for-the-badge)](#license--credits)

> **AI VISION CITY** is a playable, high-performance 3D third-person open-world educational game designed for university Deep Learning and Computer Vision presentations. Players explore a vibrant city district featuring animated pedestrians, moving vehicle traffic, commercial architecture, and urban intersections, while dynamically switching between live deep learning image segmentation filters in real time without reloading or pausing the simulation.

---

## 🌟 Key Highlights

- **Real-Time Live Vision Filters:** Seamlessly toggle between 7 neural segmentation modes using custom multi-target WebGL shaders.
- **Holographic AI Scanner Interface:** Floating glassmorphism scanner HUD on the right side of the screen with live telemetry, instance counters, and plain-English educational cards.
- **Interactive Academic U-Net & DL Lab:** Comprehensive presentation modal featuring animated U-Net pipeline flows, interactive IoU & Dice metric calculators, architecture benchmarks, and failure mode case studies.
- **Living 3D City Simulation:**
  - Fully animated pedestrians powered by multi-track skeletal mocap walk cycles.
  - Multi-lane traffic system (Taxis, Police Cruisers, SUVs, Sedans, Sports Coupes) with realistic wheel alignments and functional headlights.
  - Multi-story commercial and residential buildings with collision boundaries.
  - Damped third-person follow camera and smooth humanoid player locomotion.
- **100% Offline PC Playable:** Includes dedicated 1-click Windows desktop launchers (standalone borderless app window and native Electron PC game shell).

---

## 🎮 In-Game Controls

| Input | Action | Description |
| :--- | :--- | :--- |
| **`W` / `A` / `S` / `D`** | **Locomotion** | Move character forward, backward, and strafe with smooth camera tracking |
| **`Shift`** | **Sprint** | Accelerates character speed from a natural walk to a fast run |
| **`Tab`** | **Toggle Scanner** | Expands or collapses the floating right-side AI Vision Scanner panel |
| **`1` – `7`** | **Vision Filters** | Instantly switches segmentation modes live on the GPU |
| **`U-NET LAB`** | **Academic Suite** | Opens the interactive Deep Learning Presentation Suite modal |
| **`Esc`** | **Close Modal** | Closes active presentation screens and resumes exploration |

---

## 🔬 Segmentation Modes Breakdown

| Key | Mode | Type | Plain-English Definition & In-Game Function |
| :---: | :--- | :--- | :--- |
| **`1`** | **Normal Vision** | Raw Optical RGB | Standard photorealistic PBR rendering without neural processing (baseline ground truth). |
| **`2`** | **Semantic Segmentation** | Category Masks | Classifies every pixel into a categorical class: Road (Grey), Buildings (Blue), Vehicles (Yellow), Pedestrians (Green). *Does not separate individual cars.* |
| **`3`** | **Instance Segmentation** | Individual IDs | Detects and colors every countable object with a unique identity mask: Yellow Taxi = `Car [ID:10]`, Police Cruiser = `Car [ID:11]`, civilians get distinct IDs. |
| **`4`** | **Panoptic Segmentation** | Unified Stuff + Things | Combines background continuous "stuff" (asphalt road, buildings, sky) with countable "things" (discrete vehicles and pedestrians). |
| **`5`** | **Tactical Threat Scan** | Priority Isolation | Highlights hostile Titan Mechs, Bipedal Walkers, and Hunter Drones in glowing infrared crimson silhouettes while desaturating civilian background pixels. |
| **`6`** | **Edge Detection** | Spatial Discontinuity | Uses a $3 \times 3$ Sobel convolution gradient to extract sharp boundaries along zebra crosswalks, building silhouettes, and streetlight poles. |
| **`7`** | **Depth Estimation** | Metric 3D Distance | Linearized camera-space distance mapped to a false-color spectrum: Cyan/Green = Close, Yellow = Mid-range, Purple = Distant skyline. |

---

## 🧠 Deep Learning Concepts Explained (With In-Game Examples)

### 1. U-Net Architecture (Encoder-Decoder CNN)
* **Simple Definition:** A U-shaped convolutional neural network with two symmetric paths:
  1. **Contracting Path (Encoder):** Successively downsamples the image to extract high-level semantic context (*"WHAT is in the scene?"*).
  2. **Expanding Path (Decoder):** Successively upsamples feature maps to recover spatial resolution (*"WHERE is each object down to the exact pixel?"*).
* **🎮 In Our Game World:** When you walk across the street intersection, U-Net processes the camera viewport. The bottleneck recognizes *"pedestrian on sidewalk, car on road"*, and the expanding decoder paints the exact green mask on the walking pedestrian and yellow mask on the road in real time!

### 2. Skip Connections
* **Simple Definition:** Direct horizontal shortcut bridges that copy high-resolution spatial feature maps from early encoder layers directly across to matching decoder layers, completely bypassing the bottleneck compression.
* **🎮 In Our Game World:** Look at our city's **thin metal streetlight poles, traffic light posts, and the player character's arms**. Without skip connections, downsampling squashes a 3-pixel-wide metal pole down to 0 pixels (turning it into a blurry disconnected smear). Skip connections copy the raw sharp edges straight across, keeping the streetlight thin and crisp!

$$\mathbf{x}_{\text{dec}}^{(l)} = \mathcal{F}\Big(\big[\, \mathcal{U}(\mathbf{x}_{\text{dec}}^{(l+1)}), \; \mathbf{x}_{\text{enc}}^{(l)} \,\big]\Big)$$

### 3. $3 \times 3$ Convolution Kernel
* **Simple Definition:** A tiny 3-by-3 pixel grid (9 learnable weights) that slides across the screen like a mini magnifying glass, multiplying pixel values to detect local visual patterns: edges, corners, colors, and textures.
* **🎮 In Our Game World:** As the $3 \times 3$ kernel slides across our city's road, it detects the sharp color contrast between the dark asphalt and the bright white stripes of the **pedestrian zebra crossing**, instantly signaling to the AI: *"Crosswalk lane marking detected here!"*.
* **⚡ Key Efficiency:** Two stacked $3 \times 3$ kernels cover the exact same $5 \times 5$ receptive field as a large $5 \times 5$ filter, but use **28% fewer parameters** (18 weights vs 25 weights)!

### 4. Downsampling & Dimension Flow
* **Simple Definition:** The step-by-step process of shrinking spatial height and width by half using $2 \times 2$ Max-Pooling, while simultaneously doubling the number of feature channels (from 3 RGB channels up to 1024 deep features).
* **🎮 In Our Game World:**
  * **Stage 1 ($256 \times 256 \times 64$):** AI sees raw pixel grain: red sports car paint, asphalt texture, sidewalk curbs.
  * **Stage 3 ($64 \times 64 \times 256$):** Pixels are grouped into parts: car wheels, windows, pedestrian legs.
  * **Bottleneck ($16 \times 16 \times 1024$):** Tiny spatial size, but 1024 channels understand deep concepts: *"High-speed sports coupe heading north on the road"*.
  * **Decoder Flow:** Transposed convolutions double the size back up ($16 \to 32 \to 64 \to 128 \to 256$) to output the final pixel-perfect mask!

### 5. SegFormer (Hierarchical Vision Transformer)
* **Simple Definition:** A modern Vision Transformer architecture that replaces CNN convolutions with **Self-Attention blocks** and a lightweight All-MLP decoder. It captures global relationships across the entire screen from the very first layer without needing positional encodings.
* **🎮 In Our Game World:** When looking down our downtown avenue, a commercial building on the far-left has the same tinted blue windows as a skyscraper 200m away on the far-right. A standard CNN needs multiple downsampling steps before its receptive field connects them. **SegFormer connects both buildings globally in layer 1**, recognizing they share the same building facade material regardless of where they are on screen!

### 6. Mask R-CNN (Two-Stage Instance Segmentation)
* **Simple Definition:** The benchmark model for **Instance Segmentation**. It operates in two stages:
  1. **Stage 1 (RPN):** Scans the image to propose bounding boxes around candidate objects (*"There is an object here"*).
  2. **Stage 2 (RoIAlign + FCN Head):** Classifies the object, refines the bounding box, and paints an individual pixel mask inside that specific box.
* **🎮 In Our Game World:** When our **Yellow City Taxi (`car_taxi.glb`)** stops right beside our **Black Police Cruiser (`car_police.glb`)**, Semantic U-Net lumps them together as one big yellow blob. Mask R-CNN isolates Box #1: `Taxi Cab [ID:10]` (Blue) and Box #2: `Police Cruiser [ID:11]` (Orange), keeping their masks completely distinct even when their bumpers touch!

### 7. Segmentation Boundary Errors & Failure Modes Analysis
* **Boundary Bleeding & Edge Blurring:** Downsampling discards sub-pixel spatial coordinates, causing the sharp crimson hood of our **Velocity Sports Coupe** to bleed 3–5 pixels into the dark asphalt road, rounding off pointed bumper contours into an oval shape.
* **Small & Distant Object Disappearance:** An **Aerial Hunter Drone hovering in the sky or a civilian 50m away** occupies only $6 \times 6$ pixels. By Stage 4 pooling, it shrinks to $< 1$ pixel and completely vanishes from the AI scanner!
* **Occlusion & Broken Topology:** A **thin metal streetlight pole** stands in front of a parked SUV. The pole cuts the SUV visually in half; the AI mistakenly predicts two separate broken half-cars.
* **Harsh Shadows & Reflections:** The tall **4-story brick building casts a dark diagonal shadow** across the sunny asphalt road. The AI misclassifies the shadowed asphalt as *"Building Footprint"* or *"Water Puddle"*, confusing autonomous driving pathfinders.

---

## 🏗️ Technical Architecture & Pipeline

```
                       ┌─────────────────────────┐
                       │   3D WebGL Game Scene   │
                       └────────────┬────────────┘
                                    │
             ┌──────────────────────┴──────────────────────┐
             ▼                                             ▼
 ┌─────────────────────────┐                   ┌─────────────────────────┐
 │       Beauty Pass       │                   │    GPU Mask / ID Pass   │
 │  - Directional Sunlight │                   │  - Semantic Class ID    │
 │  - Soft Shadows         │                   │  - Unique Instance ID   │
 │  - PBR Materials        │                   │  - Hostile / Threat Tag │
 │  - Atmospheric Fog      │                   │  - Linear Depth Texture │
 └───────────┬─────────────┘                   └───────────┬─────────────┘
             │                                             │
             └──────────────────────┬──────────────────────┘
                                    ▼
                     ┌─────────────────────────────┐
                     │   GLSL Composite Shader     │
                     │  - Mode 0: Raw Beauty Pass  │
                     │  - Mode 1: Semantic Palette │
                     │  - Mode 2: Instance Hash    │
                     │  - Mode 3: Stuff vs Things  │
                     │  - Mode 4: Tactical Threat  │
                     │  - Mode 5: Sobel Edges      │
                     │  - Mode 6: Metric Depth     │
                     └──────────────┬──────────────┘
                                    ▼
                             [ Canvas Display ]
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Quick Run (Windows)
Double-click either launcher script in the root directory:
* **`Play_In_App_Window.bat`** — Launches the game in a dedicated, borderless Chromium/Edge desktop app window with hardware GPU acceleration.
* **`Play_Offline_PC_Game.bat`** — Launches the game in a native Electron desktop PC window with full offline capabilities.

### Development Setup
```bash
# Clone the repository
git clone https://github.com/SarathChandra26/AI-Vision-City.git
cd AI-Vision-City

# Install dependencies
npm install

# Start local development server with hot-reload
npm run dev

# Build production bundle
npm run build
```

Open **`http://127.0.0.1:3000/`** in your browser.

---

## 📂 Project Directory Structure

```
AI-Vision-City/
├── dist/                     # Pre-compiled high-performance production build
├── electron/
│   └── main.cjs              # Native desktop PC game shell & embedded offline server
├── public/
│   └── assets/               # 3D models (GLB), textures, animations, environment props, audio
├── src/
│   ├── camera/               # Third-person spherical follow camera with collision
│   ├── combat/               # Tactical scan pulse and threat tagging
│   ├── education/            # Academic U-Net Lab presentation suite & KaTeX formulas
│   ├── environment/          # Urban layout, road textures, buildings, streetlights
│   ├── game/                 # Master game loop & orchestration
│   ├── npc/                  # Skeletally-animated pedestrians & hostile mechs
│   ├── player/               # Third-person character controller & animations
│   ├── scanner/              # Floating holographic AI Vision Scanner panel & cards
│   ├── segmentation/         # Dual-pass WebGL segmentation render pipeline
│   ├── shaders/              # Custom GLSL composite, edge, and depth shaders
│   ├── ui/                   # Radar minimap, telemetry, and glassmorphism styling
│   ├── vehicles/             # Traffic simulation, road waypoints, and vehicle models
│   └── main.js               # Application bootstrap
├── ASSET_CREDITS.md          # 3D asset licensing & attribution (CC0 / MIT)
├── index.html                # Vite HTML mount
├── package.json              # Project dependencies and npm scripts
├── Play_In_App_Window.bat    # 1-Click desktop app window launcher
├── Play_Offline_PC_Game.bat  # 1-Click Electron offline PC game launcher
├── README.md                 # Complete project documentation
├── server.cjs                # Zero-dependency local game server
└── vite.config.js            # Vite build configuration
```

---

## 📜 License & Credits

- Source code is released under the **MIT License**.
- 3D models and environmental assets are licensed under **CC0 (Public Domain)**, **MIT**, or permissive educational licenses from **Quaternius**, **Khronos Group**, and **Three.js Project**. Refer to [ASSET_CREDITS.md](ASSET_CREDITS.md) for full licensing details.
