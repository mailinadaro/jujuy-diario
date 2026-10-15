const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000');

  const filterTests = [
    { name: 'current', filter: 'brightness(1.15) contrast(1.25) saturate(1.25)' },
    { name: 'boosted_exposure', filter: 'brightness(2.2) contrast(1.3) drop-shadow(0 0 1px rgba(255,255,255,0.2))' },
    { name: 'high_contrast_dark', filter: 'brightness(2.8) contrast(1.5) invert(0.05)' },
    { name: 'inverted_light_map', filter: 'none', src: '/mapa-jujuy-capital.jpg' }
  ];

  for (const t of filterTests) {
    await page.evaluate((test) => {
      const img = document.querySelector('.hidden.lg\\:block .aspect-16\\/10 img');
      if (img) {
        if (test.src) img.src = test.src;
        img.style.filter = test.filter;
      }
    }, t);
    await page.waitForTimeout(300);

    const mapElement = page.locator('.hidden.lg\\:block .aspect-16\\/10');
    const outPath = path.join(__dirname, `test_${t.name}.png`);
    await mapElement.screenshot({ path: outPath });
    console.log(`Saved ${t.name} screenshot to: ${outPath}`);
  }

  await browser.close();
})();
