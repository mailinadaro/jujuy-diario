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

  const sectionIds = [
    { name: '01_problem', sel: '#problema' },
    { name: '02_benefits', sel: '#beneficios' },
    { name: '03_how_it_works', sel: '#como-funciona' },
    { name: '04_founder', sel: '#quien-te-lleva' },
    { name: '05_pricing', sel: '#tarifas' },
    { name: '06_coverage_old', sel: '#cobertura' },
    { name: '07_zones', sel: '#zonas-cobertura' },
    { name: '08_faq', sel: '#faq' },
    { name: '09_cta_footer', sel: 'footer, section:last-of-type' }
  ];

  for (const s of sectionIds) {
    const el = page.locator(s.sel);
    if (await el.count() > 0) {
      await el.first().scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      const out = path.join(__dirname, `section_${s.name}.png`);
      await el.first().screenshot({ path: out });
      console.log(`Saved ${s.name} to:`, out);
    }
  }

  await browser.close();
})();
