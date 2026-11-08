import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer-core';

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

async function run() {
  await new Promise((resolve) => server.listen(4321, resolve));
  console.log('Server started on port 4321');

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const viewports = [
    { name: 'screenshot_375.png', width: 375, height: 812 },
    { name: 'screenshot_768.png', width: 768, height: 1024 },
    { name: 'screenshot_1440.png', width: 1440, height: 900 },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:4321', { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Viewport screenshot
    const outPath = path.join(screenshotsDir, vp.name);
    await page.screenshot({ path: outPath });
    console.log(`Captured ${vp.name} (${fs.statSync(outPath).size} bytes)`);

    // Full page screenshot
    const fullOutPath = path.join(screenshotsDir, `full_${vp.name}`);
    await page.screenshot({ path: fullOutPath, fullPage: true });
    console.log(`Captured full_${vp.name} (${fs.statSync(fullOutPath).size} bytes)`);

    await page.close();
  }

  await browser.close();
  await new Promise((resolve) => server.close(resolve));
  console.log('Capture completed successfully!');
}

run().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
