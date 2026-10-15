const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  
  // 1. Desktop Context
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 }
  });

  console.log('Navigating to http://localhost:3002 ...');
  await page.goto('http://localhost:3002', { waitUntil: 'networkidle' });

  // Screenshot Hero
  const heroEl = await page.$('section:has-text("Tu día laboral")');
  if (heroEl) {
    await heroEl.screenshot({ path: 'scratch/verified_hero_desktop.png' });
    console.log('Saved scratch/verified_hero_desktop.png');
  }

  // Screenshot Zones
  const zonesEl = await page.$('#zonas-cobertura');
  if (zonesEl) {
    await zonesEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await zonesEl.screenshot({ path: 'scratch/verified_zones_desktop.png' });
    console.log('Saved scratch/verified_zones_desktop.png');
  }

  // Screenshot Founder
  const founderEl = await page.$('#quien-te-lleva');
  if (founderEl) {
    await founderEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await founderEl.screenshot({ path: 'scratch/verified_founder_desktop.png' });
    console.log('Saved scratch/verified_founder_desktop.png');
  }

  // Screenshot CTA
  const ctaEl = await page.$('section:has-text("Empezá por consultar tu recorrido")');
  if (ctaEl) {
    await ctaEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await ctaEl.screenshot({ path: 'scratch/verified_cta_desktop.png' });
    console.log('Saved scratch/verified_cta_desktop.png');
  }

  // Screenshot FAQs
  const faqEl = await page.$('#faq');
  if (faqEl) {
    await faqEl.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await faqEl.screenshot({ path: 'scratch/verified_faq_desktop.png' });
    console.log('Saved scratch/verified_faq_desktop.png');
  }

  // Navigate to Políticas de Cancelación
  console.log('Navigating to http://localhost:3002/politicas-de-cancelacion ...');
  await page.goto('http://localhost:3002/politicas-de-cancelacion', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'scratch/verified_politicas_desktop.png', fullPage: true });
  console.log('Saved scratch/verified_politicas_desktop.png');

  // Mobile Context
  const mobilePage = await browser.newPage({
    viewport: { width: 390, height: 844 }, // iPhone 14
    isMobile: true
  });
  await mobilePage.goto('http://localhost:3002', { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ path: 'scratch/verified_home_mobile.png' });
  console.log('Saved scratch/verified_home_mobile.png');

  await browser.close();
  console.log('All visual verification captures complete!');
})();
