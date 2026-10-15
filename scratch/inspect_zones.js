const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const consoleLogs = [];
  const networkRequests = [];
  const failedRequests = [];

  page.on('console', msg => {
    consoleLogs.push({ type: msg.type(), text: msg.text() });
  });

  page.on('pageerror', err => {
    consoleLogs.push({ type: 'pageerror', text: err.message });
  });

  page.on('requestfailed', req => {
    failedRequests.push({ url: req.url(), failure: req.failure() });
  });

  page.on('response', res => {
    if (res.status() >= 400) {
      failedRequests.push({ url: res.url(), status: res.status() });
    }
  });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Scroll to #zonas-cobertura
  const zonesSection = page.locator('#zonas-cobertura');
  const count = await zonesSection.count();
  console.log('Found #zonas-cobertura count:', count);

  if (count > 0) {
    await zonesSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000); // allow animations
  }

  // Inspect map image and container
  const mapInfo = await page.evaluate(() => {
    const section = document.querySelector('#zonas-cobertura');
    if (!section) return { error: 'Section #zonas-cobertura not found' };

    const images = Array.from(section.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
      clientWidth: img.clientWidth,
      clientHeight: img.clientHeight,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      complete: img.complete,
      currentSrc: img.currentSrc,
      style: img.getAttribute('style'),
      className: img.className,
      computedDisplay: window.getComputedStyle(img).display,
      computedVisibility: window.getComputedStyle(img).visibility,
      computedOpacity: window.getComputedStyle(img).opacity,
      offsetParent: !!img.offsetParent,
      rect: img.getBoundingClientRect()
    }));

    // Check containers
    const containers = Array.from(section.querySelectorAll('.relative')).map(el => ({
      className: el.className,
      rect: el.getBoundingClientRect(),
      clientWidth: el.clientWidth,
      clientHeight: el.clientHeight,
      computedDisplay: window.getComputedStyle(el).display,
      computedVisibility: window.getComputedStyle(el).visibility,
      computedHeight: window.getComputedStyle(el).height,
      computedWidth: window.getComputedStyle(el).width
    }));

    return {
      images,
      containers: containers.slice(0, 10),
      htmlSnippet: section.innerHTML.slice(0, 1500)
    };
  });

  console.log('=== MAP INFO ===');
  console.log(JSON.stringify(mapInfo, null, 2));

  console.log('=== FAILED REQUESTS ===');
  console.log(JSON.stringify(failedRequests, null, 2));

  console.log('=== CONSOLE LOGS ===');
  console.log(JSON.stringify(consoleLogs.filter(l => l.type === 'error' || l.type === 'warning' || l.type === 'pageerror'), null, 2));

  // Take screenshot
  const screenshotPath = path.join(__dirname, 'zones_screenshot.png');
  await zonesSection.screenshot({ path: screenshotPath });
  console.log('Screenshot saved to:', screenshotPath);

  await browser.close();
})();
