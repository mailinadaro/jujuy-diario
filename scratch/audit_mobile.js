const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, // iPhone 13/14/15 standard viewport
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2
  });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:3000 on mobile viewport (390x844)...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // 1. Audit Above-The-Fold
  const atfPath = path.join(__dirname, 'audit_mobile_atf.png');
  await page.screenshot({ path: atfPath });
  console.log('Above-the-fold screenshot:', atfPath);

  // 2. Audit Navigation Drawer
  const menuBtn = page.locator('header button[aria-label*="menú"], header button[aria-label*="menu"], header button:has(.fa-bars)');
  if (await menuBtn.count() > 0) {
    await menuBtn.first().click();
    await page.waitForTimeout(300);
    const navOpenPath = path.join(__dirname, 'audit_mobile_nav_open.png');
    await page.screenshot({ path: navOpenPath });
    console.log('Navigation drawer open screenshot:', navOpenPath);
    // close menu
    await menuBtn.first().click();
    await page.waitForTimeout(300);
  }

  // 3. Capture Full Page Screenshot
  const fullPagePath = path.join(__dirname, 'audit_mobile_fullpage.png');
  await page.screenshot({ path: fullPagePath, fullPage: true });
  console.log('Full page mobile screenshot:', fullPagePath);

  // 4. Run automated DOM & UX Metrics Audit
  const auditData = await page.evaluate(() => {
    const results = {
      sections: [],
      buttons: [],
      fontSizes: [],
      tapTargetsBelow48px: [],
      overlappingElements: [],
      contrastIssues: []
    };

    // Analyze all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(s => {
      const rect = s.getBoundingClientRect();
      const h2 = s.querySelector('h1, h2');
      results.sections.push({
        id: s.id || 'no-id',
        title: h2 ? h2.textContent.trim() : 'no heading',
        height: Math.round(rect.height),
        buttonsCount: s.querySelectorAll('a, button').length
      });
    });

    // Analyze all CTAs / clickable elements
    const clickables = document.querySelectorAll('a, button');
    clickables.forEach(el => {
      const rect = el.getBoundingClientRect();
      const text = el.textContent.trim().slice(0, 40);
      const isVisible = window.getComputedStyle(el).display !== 'none' && window.getComputedStyle(el).visibility !== 'hidden';
      if (isVisible && (rect.width > 0 || rect.height > 0)) {
        if (rect.width < 44 || rect.height < 44) {
          results.tapTargetsBelow48px.push({
            tag: el.tagName,
            text,
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            href: el.getAttribute('href')
          });
        }
        if (el.getAttribute('href')?.includes('wa.me')) {
          results.buttons.push({
            text,
            href: el.getAttribute('href'),
            rect: { w: Math.round(rect.width), h: Math.round(rect.height) }
          });
        }
      }
    });

    // Check floating WhatsApp button placement and z-index
    const floatingBtn = document.querySelector('.fixed.bottom-6.right-6, a[href*="wa.me"].fixed, button.fixed');
    if (floatingBtn) {
      results.floatingBtn = {
        outerHTML: floatingBtn.outerHTML,
        rect: floatingBtn.getBoundingClientRect(),
        zIndex: window.getComputedStyle(floatingBtn).zIndex
      };
    }

    return results;
  });

  console.log('Audit Summary Data:');
  console.log(JSON.stringify(auditData, null, 2));

  await browser.close();
})();
