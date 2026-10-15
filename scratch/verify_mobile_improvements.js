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

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // 1. Verify Hero CTA
  const heroBtnText = await page.locator('section:first-of-type a[href*="wa.me"] span').first().textContent();
  console.log('Hero CTA Button text:', heroBtnText.trim());

  // 2. Verify Mobile Navigation Drawer with Backdrop
  const menuBtn = page.locator('header button[aria-label*="menú"], header button[aria-label*="menu"]');
  await menuBtn.click();
  await page.waitForTimeout(400);

  const navPath = path.join(__dirname, 'verified_nav_drawer.png');
  await page.screenshot({ path: navPath });
  console.log('Nav drawer screenshot saved to:', navPath);

  // Close nav
  await menuBtn.click();
  await page.waitForTimeout(300);

  // 3. Verify Founder Section on Mobile
  const founder = page.locator('#quien-te-lleva');
  await founder.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  const founderPath = path.join(__dirname, 'verified_founder_mobile.png');
  await founder.screenshot({ path: founderPath });
  console.log('Founder mobile screenshot saved to:', founderPath);

  // 4. Verify Zones with Weekly Rate Equivalence
  const zones = page.locator('#zonas-cobertura');
  await zones.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  const zonesPath = path.join(__dirname, 'verified_zones_equivalence.png');
  await zones.screenshot({ path: zonesPath });
  console.log('Zones mobile screenshot saved to:', zonesPath);

  await browser.close();
})();
