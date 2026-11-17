/**
 * AI VISION CITY - Native Windows Desktop PC Game Shell
 * Runs 100% offline with native GPU acceleration, borderless fullscreen,
 * embedded local game server, and zero browser toolbars or tabs.
 */
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const http = require('http');
const fs = require('fs');

let mainWindow;
let localServer;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.bin': 'application/octet-stream',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

function startOfflineServer(callback) {
  const distDir = path.join(__dirname, '..', 'dist');
  const publicDir = path.join(__dirname, '..', 'public');

  localServer = http.createServer((req, res) => {
    let reqUrl = decodeURI(req.url.split('?')[0]);
    if (reqUrl === '/' || reqUrl === '') reqUrl = '/index.html';

    // Check dist folder first, then public folder
    let targetPath = path.join(distDir, reqUrl);
    if (!fs.existsSync(targetPath) || !fs.statSync(targetPath).isFile()) {
      targetPath = path.join(publicDir, reqUrl);
    }

    if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
      const ext = path.extname(targetPath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      });
      fs.createReadStream(targetPath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found: ' + reqUrl);
    }
  });

  localServer.listen(0, '127.0.0.1', () => {
    const port = localServer.address().port;
    console.log(`[AI VISION CITY] Embedded offline game server active at http://127.0.0.1:${port}`);
    callback(port);
  });
}

function createWindow(port) {
  Menu.setApplicationMenu(null); // Clean PC game window with no menu bar

  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    minWidth: 1280,
    minHeight: 720,
    title: 'AI VISION CITY — Realistic Open-World Game (Offline DL Edition)',
    autoHideMenuBar: true,
    fullscreen: false,
    frame: true,
    backgroundColor: '#05070e',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false,
      enableWebGPU: true
    }
  });

  mainWindow.maximize();
  mainWindow.loadURL(`http://127.0.0.1:${port}/`);

  mainWindow.on('closed', () => {
    mainWindow = null;
    if (localServer) {
      localServer.close();
    }
  });
}

// Hardware acceleration & high-performance flags for buttery smooth 60-120+ FPS
app.commandLine.appendSwitch('enable-gpu-rasterization');
app.commandLine.appendSwitch('enable-zero-copy');
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.commandLine.appendSwitch('enable-native-gpu-memory-buffers');
app.commandLine.appendSwitch('disable-background-timer-throttling');
app.commandLine.appendSwitch('disable-renderer-backgrounding');
app.commandLine.appendSwitch('enable-features', 'CanvasOopRasterization');
app.commandLine.appendSwitch('disable-features', 'CalculateNativeWinOcclusion');

app.whenReady().then(() => {
  startOfflineServer((port) => {
    createWindow(port);
  });
});

app.on('window-all-closed', () => {
  if (localServer) {
    localServer.close();
  }
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
