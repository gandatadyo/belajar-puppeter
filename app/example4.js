// basic. puppeter membuka halaman web dengan ukuran 800×600px, dan mescreenshoot gambar example.png
/**
  const browser = await puppeteer.launch({ headless: false }); // default is true
  untuk menjalankan puppeter melalui default webbrowser dan tidak berjalan di background
**/
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // default is true
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
