/**
 * AI VISION CITY - Tactical Web Audio Synthesizer
 * Generates crisp, military-grade sound effects entirely procedurally via Web Audio API.
 * 100% offline, zero latency, zero download failures, and authentic tactical punch.
 */

export class TacticalAudio {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.45, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
      this.initialized = true;
    } catch (e) {
      console.warn('Web Audio not supported:', e);
    }
  }

  ensureContext() {
    if (!this.initialized) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Tactical Assault Rifle Gunshot (Transient click + White noise burst + 75Hz sub punch)
  playGunfire() {
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // 1. High frequency snap / muzzle blast (Bandpassed noise burst)
    const bufferSize = this.ctx.sampleRate * 0.18;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.18));
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1400, t);
    noiseFilter.Q.setValueAtTime(1.8, t);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.9, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    whiteNoise.start(t);
    whiteNoise.stop(t + 0.18);

    // 2. Low-frequency punch / kickback (75Hz -> 25Hz pitch drop)
    const kickOsc = this.ctx.createOscillator();
    kickOsc.type = 'triangle';
    kickOsc.frequency.setValueAtTime(140, t);
    kickOsc.frequency.exponentialRampToValueAtTime(32, t + 0.14);

    const kickGain = this.ctx.createGain();
    kickGain.gain.setValueAtTime(1.0, t);
    kickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);

    kickOsc.connect(kickGain);
    kickGain.connect(this.masterGain);

    kickOsc.start(t);
    kickOsc.stop(t + 0.16);
  }

  // Hit Marker Confirmation Chime (High tactical 1.8kHz ping)
  playHitMarker(isCritical = false) {
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const freq = isCritical ? 2400 : 1600;
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.7, t + 0.08);

    gain.gain.setValueAtTime(0.55, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.08);
  }

  // Weapon Reload (Three-stage mechanical click and magazine latch)
  playReload() {
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // Stage 1: Mag release click
    this.triggerMechanicalClick(t, 600, 0.04);
    // Stage 2: Mag insertion
    this.triggerMechanicalClick(t + 0.35, 950, 0.06);
    // Stage 3: Bolt rack forward
    this.triggerMechanicalClick(t + 0.70, 1400, 0.08);
  }

  triggerMechanicalClick(time, freq, duration) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, time);
    osc.frequency.exponentialRampToValueAtTime(120, time + duration);

    gain.gain.setValueAtTime(0.35, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  // Empty magazine dry click
  playDryFire() {
    this.ensureContext();
    if (!this.ctx) return;
    this.triggerMechanicalClick(this.ctx.currentTime, 850, 0.035);
  }

  // Tactical Scanner Pulse (Sci-Fi frequency modulation sonar sweep)
  playScanPulse() {
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(1200, t + 0.32);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, t);
    filter.frequency.exponentialRampToValueAtTime(3200, t + 0.32);

    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.40, t + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.55);
  }

  // Enemy Mech / Drone attack discharge
  playEnemyFire() {
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(480, t);
    osc.frequency.exponentialRampToValueAtTime(90, t + 0.22);

    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.22);
  }

  // Enemy Neutralized / Destroyed explosion
  playEnemyDestroyed() {
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(110, t);
    osc.frequency.exponentialRampToValueAtTime(20, t + 0.5);

    gain.gain.setValueAtTime(0.8, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.6);
  }

  // Player Shield Damage alarm
  playPlayerHurt() {
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.linearRampToValueAtTime(80, t + 0.2);

    gain.gain.setValueAtTime(0.5, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + 0.2);
  }
}
