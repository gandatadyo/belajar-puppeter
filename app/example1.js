// basic. puppeter membuka halaman web dengan ukuran 800×600px, dan mescreenshoot gambar example.png
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();
