const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Hover over the Alto Comedero pin
  const pin = page.locator('.hidden.lg\\:block div[aria-label*="Alto Comedero"]');
  await pin.scrollIntoViewIfNeeded();
  await pin.hover();
  await page.waitForTimeout(300);

  const outPath = path.join(__dirname, 'zones_hover_verified.png');
  const section = page.locator('#zonas-cobertura');
  await section.screenshot({ path: outPath });
  console.log('Saved hover screenshot to:', outPath);

  await browser.close();
})();
