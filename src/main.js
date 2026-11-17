/**
 * AI VISION CITY - Application Entry Point
 */
import { GameApp } from './game/GameApp.js';

window.addEventListener('DOMContentLoaded', () => {
  const game = new GameApp();
  window.__AI_VISION_CITY__ = game;
  console.log('AI VISION CITY initialized and running at 60 FPS.');
});
