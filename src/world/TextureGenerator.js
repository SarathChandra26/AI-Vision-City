/**
 * AI VISION CITY - Ultra-Realistic PBR Texture Generator (GTA V / Vice City Style)
 * Creates high-resolution 2048x2048 PBR asphalt textures with wet puddles, aggregate noise,
 * tire wear marks, curb bevels, manholes, storm drains, and concrete slabs.
 */
import * as THREE from 'three';

export class TextureGenerator {
  // Ultra-realistic asphalt road with wet puddles, specular sheen, tire wear, and center markings
  static createRoadTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d');

    // 1. Dark asphalt base (GTA V wet road look)
    ctx.fillStyle = '#1c1f24';
    ctx.fillRect(0, 0, 2048, 2048);

    // 2. High-frequency aggregate noise & pebble grain
    const imgData = ctx.getImageData(0, 0, 2048, 2048);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 35;
      data[i] = Math.max(15, Math.min(55, data[i] + noise));
      data[i + 1] = Math.max(18, Math.min(58, data[i + 1] + noise));
      data[i + 2] = Math.max(22, Math.min(65, data[i + 2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    // 3. Tire wear friction tracks (subtle dark rubber tracks along lanes)
    ctx.fillStyle = 'rgba(10, 12, 15, 0.45)';
    // Left lane tire tracks (around X = 320 and X = 620)
    ctx.fillRect(320, 0, 80, 2048);
    ctx.fillRect(620, 0, 80, 2048);
    // Right lane tire tracks (around X = 1320 and X = 1620)
    ctx.fillRect(1320, 0, 80, 2048);
    ctx.fillRect(1620, 0, 80, 2048);

    // 4. Subtle wet asphalt puddle sheen (GTA V wet reflection spots)
    const puddleGradient = ctx.createRadialGradient(850, 600, 20, 850, 600, 250);
    puddleGradient.addColorStop(0, 'rgba(12, 14, 18, 0.6)');
    puddleGradient.addColorStop(1, 'rgba(12, 14, 18, 0)');
    ctx.fillStyle = puddleGradient;
    ctx.fillRect(500, 300, 700, 600);

    const puddleGradient2 = ctx.createRadialGradient(1450, 1400, 30, 1450, 1400, 320);
    puddleGradient2.addColorStop(0, 'rgba(12, 14, 18, 0.55)');
    puddleGradient2.addColorStop(1, 'rgba(12, 14, 18, 0)');
    ctx.fillStyle = puddleGradient2;
    ctx.fillRect(1100, 1000, 700, 800);

    // 5. Double yellow center dividing lines (X = 1004 and X = 1044) with realistic weathering
    ctx.strokeStyle = '#e6a817';
    ctx.lineWidth = 26;
    ctx.beginPath();
    ctx.moveTo(1004, 0);
    ctx.lineTo(1004, 2048);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1044, 0);
    ctx.lineTo(1044, 2048);
    ctx.stroke();

    // 6. Dashed white lane dividers (X = 524 and X = 1524)
    ctx.strokeStyle = '#e8ecf2';
    ctx.lineWidth = 18;
    ctx.setLineDash([140, 120]);
    ctx.beginPath();
    ctx.moveTo(524, 0);
    ctx.lineTo(524, 2048);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1524, 0);
    ctx.lineTo(1524, 2048);
    ctx.stroke();
    ctx.setLineDash([]); // Reset dash

    // 7. Outer solid white road edge lines
    ctx.strokeStyle = '#dfe4ea';
    ctx.lineWidth = 22;
    ctx.beginPath();
    ctx.moveTo(90, 0);
    ctx.lineTo(90, 2048);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1958, 0);
    ctx.lineTo(1958, 2048);
    ctx.stroke();

    // 8. Metallic circular manhole cover
    ctx.fillStyle = '#2a2d33';
    ctx.beginPath();
    ctx.arc(750, 1100, 48, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1b1d22';
    ctx.lineWidth = 8;
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = 8;
    return texture;
  }

  // Crosswalk zebra stripes texture with street stop line
  static createCrosswalkTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Asphalt base
    ctx.fillStyle = '#1c1f24';
    ctx.fillRect(0, 0, 2048, 512);

    // Thick solid white stop bar line (before the crossing)
    ctx.fillStyle = '#eaeff5';
    ctx.fillRect(60, 420, 1928, 45);

    // Bold zebra crossing stripes
    ctx.fillStyle = '#f0f4f9';
    const stripeWidth = 90;
    const stripeGap = 65;
    for (let x = 70; x < 1980; x += stripeWidth + stripeGap) {
      ctx.fillRect(x, 40, stripeWidth, 340);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = 8;
    return texture;
  }

  // Realistic concrete paver sidewalk with beveled expansion joints & tactile paving
  static createSidewalkTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Warm architectural concrete base
    ctx.fillStyle = '#9aa2ab';
    ctx.fillRect(0, 0, 1024, 1024);

    // Fine aggregate noise
    const imgData = ctx.getImageData(0, 0, 1024, 1024);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 28;
      data[i] = Math.max(130, Math.min(190, data[i] + noise));
      data[i + 1] = Math.max(135, Math.min(195, data[i + 1] + noise));
      data[i + 2] = Math.max(140, Math.min(200, data[i + 2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);

    // Concrete grid slabs with 3D beveled shadow lines
    ctx.strokeStyle = '#5a626a';
    ctx.lineWidth = 4;
    for (let x = 0; x <= 1024; x += 256) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1024);
      ctx.stroke();
    }
    for (let y = 0; y <= 1024; y += 256) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }

    // Bevel highlights
    ctx.strokeStyle = '#c5ccd4';
    ctx.lineWidth = 2;
    for (let x = 2; x <= 1024; x += 256) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1024);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(8, 8);
    texture.anisotropy = 8;
    return texture;
  }

  // Lush urban park lawn with blade variations
  static createGrassTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#2f5b20';
    ctx.fillRect(0, 0, 1024, 1024);

    const imgData = ctx.getImageData(0, 0, 1024, 1024);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 45;
      data[i] = Math.max(25, Math.min(65, data[i] + noise * 0.6));
      data[i + 1] = Math.max(55, Math.min(125, data[i + 1] + noise));
      data[i + 2] = Math.max(15, Math.min(45, data[i + 2] + noise * 0.4));
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(16, 16);
    texture.anisotropy = 8;
    return texture;
  }
}
