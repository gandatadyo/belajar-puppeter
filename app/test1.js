const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://alumnea.com/');


  // ===> mengabil judul
  const navbar_brand = await page.evaluate(() => {
    // return document.querySelector('.navbar-brand').innerHTML
    return document.querySelector('a[class="navbar-brand"]').innerHTML
  });
  console.log(`Judul Website ${navbar_brand}`);


  // ===> menggunakan pencarian , kata baju
  await page.type('#edtSearchNavbar', 'baju');
  // await page.click('div[class="input-group"] button[class="btn btn-primary"]');
  await page.evaluate(() => {
    document.querySelector('div[class="input-group"] button[class="btn btn-primary"]').click();
  });

  await page.waitForSelector('div[class="card myhover"]');

  // await page.click('div[class="card myhover"]');
  await page.evaluate(() => {
    document.querySelector('div[class="card myhover"]').click();
  });


  // ===> menggunakan pencarian , kata baju
  // await page.type('#edtSearchNavbar', 'kalku');
  // await page.click('div[class="input-group"] button[class="btn btn-primary"]');
  // await page.waitForSelector('div[class="card myhover"]');
  // await page.click('div[class="card myhover"]');

  // await browser.close();
})();