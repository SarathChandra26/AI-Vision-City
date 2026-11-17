import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Relative asset paths for 100% offline desktop file:// loading
  server: {
    port: 3000,
    open: false,
    host: '127.0.0.1'
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  }
});
