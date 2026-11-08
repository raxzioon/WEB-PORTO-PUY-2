import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const screenshotsDir = path.join(rootDir, 'screenshots');

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
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:4321', { waitUntil: 'networkidle0' });

  const metrics = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const bodyWidth = document.body.scrollWidth;
    const windowWidth = window.innerWidth;
    const hasHorizontalOverflow = docWidth > windowWidth;

    const sections = Array.from(document.querySelectorAll('section, header, footer')).map((el) => {
      const rect = el.getBoundingClientRect();
      return {
        id: el.id || el.tagName.toLowerCase(),
        width: rect.width,
        height: rect.height,
        scrollWidth: el.scrollWidth,
        scrollHeight: el.scrollHeight,
      };
    });

    return { docWidth, bodyWidth, windowWidth, hasHorizontalOverflow, sections };
  });

  console.log('Mobile Metrics:', JSON.stringify(metrics, null, 2));

  // Let's capture each section individually!
  const sections = ['#tentang', '#telugig', '#organisasi', '#panggung', '#keahlian', '#sertifikasi', '#pendidikan', '#terbuka', '#kontak'];
  for (const sel of sections) {
    const el = await page.$(sel);
    if (el) {
      const secName = sel.replace('#', '');
      await el.screenshot({ path: path.join(screenshotsDir, `sec_375_${secName}.png`) });
      console.log(`Saved section screenshot for ${secName}`);
    }
  }

  await browser.close();
  server.close();
}

run().catch(console.error);
