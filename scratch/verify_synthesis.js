const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });

  // 1. Desktop Test
  const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const section = desktopPage.locator('#zonas-cobertura');
  await section.scrollIntoViewIfNeeded();
  await desktopPage.waitForTimeout(400);

  const desktopPath = path.join(__dirname, 'synthesis_desktop.png');
  await section.screenshot({ path: desktopPath });
  console.log('Desktop screenshot saved to:', desktopPath);

  // Click on Zona 2
  const zona2Tab = desktopPage.locator('button:has-text("Zona 2")');
  await zona2Tab.click();
  await desktopPage.waitForTimeout(300);

  const zona2Path = path.join(__dirname, 'synthesis_desktop_zona2.png');
  await section.screenshot({ path: zona2Path });
  console.log('Zona 2 screenshot saved to:', zona2Path);

  // Check CTA button text
  const ctaText = await desktopPage.locator('#zonas-cobertura a[href*="wa.me"]').textContent();
  console.log('CTA Button text for Zona 2:', ctaText.trim());

  await desktopPage.close();

  // 2. Mobile Test
  const mobilePage = await browser.newPage({ viewport: { width: 375, height: 812 }, isMobile: true });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const mobileSection = mobilePage.locator('#zonas-cobertura');
  await mobileSection.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(400);

  const mobilePath = path.join(__dirname, 'synthesis_mobile.png');
  await mobileSection.screenshot({ path: mobilePath });
  console.log('Mobile screenshot saved to:', mobilePath);

  await mobilePage.close();
  await browser.close();
})();
