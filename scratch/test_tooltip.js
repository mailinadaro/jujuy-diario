const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const pinLocator = page.locator('.hidden.lg\\:block div[aria-label*="Alto Comedero"]');
  const count = await pinLocator.count();
  console.log('Count of desktop Alto Comedero pin:', count);

  if (count > 0) {
    await pinLocator.scrollIntoViewIfNeeded();
    const box = await pinLocator.boundingBox();
    console.log('Bounding box:', box);

    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.waitForTimeout(500);

    const tooltipInfo = await page.evaluate(() => {
      const tooltips = Array.from(document.querySelectorAll('.hidden.lg\\:block .pointer-events-none'));
      return tooltips.map(t => ({
        html: t.outerHTML,
        rect: t.getBoundingClientRect()
      }));
    });
    console.log('Tooltips found:', JSON.stringify(tooltipInfo, null, 2));

    await page.screenshot({ path: 'scratch/tooltip_active.png' });
  }

  await browser.close();
})();
