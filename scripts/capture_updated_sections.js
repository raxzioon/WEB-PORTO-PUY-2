import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const distDir = path.join(process.cwd(), 'dist');
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
  if (!fs.existsSync(filePath)) filePath = path.join(distDir, 'index.html');
  const ext = path.extname(filePath);
  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

async function run() {
  await new Promise((r) => server.listen(4321, r));
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:4321', { waitUntil: 'networkidle0' });

  const orgEl = await page.$('#organisasi');
  if (orgEl) {
    await orgEl.screenshot({ path: 'screenshots/updated_org_1440.png' });
    console.log('Saved screenshots/updated_org_1440.png');
  }

  const panggungEl = await page.$('#panggung');
  if (panggungEl) {
    await panggungEl.screenshot({ path: 'screenshots/updated_panggung_1440.png' });
    console.log('Saved screenshots/updated_panggung_1440.png');
  }

  await browser.close();
  server.close();
}

run().catch(console.error);
