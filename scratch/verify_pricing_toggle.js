const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2
  });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const zones = page.locator('#zonas-cobertura');
  await zones.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  // 1. Capture default 2-trips state
  const img2Trips = path.join(__dirname, 'verified_toggle_2trips.png');
  await zones.screenshot({ path: img2Trips });
  console.log('2 trips screenshot saved to:', img2Trips);

  // 2. Click on "Plan 4 viajes / día"
  console.log('Clicking Plan 4 viajes...');
  await page.locator('button:has-text("Plan 4 viajes")').first().click();
  await page.waitForTimeout(400);

  const img4Trips = path.join(__dirname, 'verified_toggle_4trips.png');
  await zones.screenshot({ path: img4Trips });
  console.log('4 trips screenshot saved to:', img4Trips);

  // 3. Click on Zona 2
  console.log('Clicking Zona 2 tab...');
  await page.locator('button:has-text("Zona 2")').first().click();
  await page.waitForTimeout(400);

  const imgZona2 = path.join(__dirname, 'verified_toggle_zona2.png');
  await zones.screenshot({ path: imgZona2 });
  console.log('Zona 2 screenshot saved to:', imgZona2);

  await browser.close();
  console.log('Verification completed successfully!');
})();
