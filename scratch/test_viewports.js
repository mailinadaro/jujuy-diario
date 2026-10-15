const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const widths = [375, 640, 768, 850, 1023, 1024, 1280, 1440];
  for (const w of widths) {
    const page = await browser.newPage({ viewport: { width: w, height: 800 } });
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
    const res = await page.evaluate(() => {
      const parents = Array.from(document.querySelectorAll('.aspect-16\\/10'));
      return parents.map(p => {
        const r = p.getBoundingClientRect();
        return {
          w: r.width,
          h: r.height,
          display: window.getComputedStyle(p).display
        };
      });
    });
    console.log('Width ' + w + 'px:', JSON.stringify(res));
    await page.close();
  }
  await browser.close();
})();
