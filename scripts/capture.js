import http from 'http';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const screenshotsDir = path.join(rootDir, 'screenshots');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url === '/' ? '/index.html' : req.url;
  let filePath = path.join(distDir, reqPath.split('?')[0]);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(distDir, 'index.html');
  }
  const ext = path.extname(filePath);
  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(4321, () => {
  console.log('Server running at http://localhost:4321');
  const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  
  const sizes = [
    { name: 'screenshot_375.png', w: 375, h: 812 },
    { name: 'screenshot_768.png', w: 768, h: 1024 },
    { name: 'screenshot_1440.png', w: 1440, h: 900 },
  ];

  for (const s of sizes) {
    const out = path.join(screenshotsDir, s.name);
    console.log(`Capturing ${s.name} at ${s.w}x${s.h}...`);
    const cmd = `"${chrome}" --headless=new --disable-gpu --screenshot="${out}" --window-size=${s.w},${s.h} --hide-scrollbars http://localhost:4321`;
    try {
      execSync(cmd, { stdio: 'inherit' });
      console.log(`✓ Saved ${s.name} (${fs.statSync(out).size} bytes)`);
    } catch (err) {
      console.error(`Failed to capture ${s.name}:`, err);
    }
  }

  server.close(() => {
    console.log('Server closed. Capture complete.');
    process.exit(0);
  });
});
