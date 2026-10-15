const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });

  // Check immediately before any scroll
  const initialStyles = await page.evaluate(() => {
    const section = document.querySelector('#zonas-cobertura');
    if (!section) return 'no section';
    const imgs = section.querySelectorAll('img');
    const scrollRevealDivs = section.querySelectorAll('.lg\\:col-span-6 > div');
    return {
      images: Array.from(imgs).map(img => ({
        src: img.src,
        naturalWidth: img.naturalWidth,
        complete: img.complete,
        opacity: window.getComputedStyle(img).opacity,
        rect: img.getBoundingClientRect()
      })),
      scrollDivs: Array.from(scrollRevealDivs).map(d => ({
        style: d.getAttribute('style'),
        opacity: window.getComputedStyle(d).opacity,
        rect: d.getBoundingClientRect()
      }))
    };
  });
  console.log('INITIAL AT TOP OF PAGE:', JSON.stringify(initialStyles, null, 2));

  // Scroll down smoothly
  await page.evaluate(() => window.scrollTo({ top: 1200, behavior: 'instant' }));
  await page.waitForTimeout(500);

  const afterScroll1200 = await page.evaluate(() => {
    const section = document.querySelector('#zonas-cobertura');
    const imgs = section.querySelectorAll('img');
    return Array.from(imgs).map(img => ({
      src: img.src,
      naturalWidth: img.naturalWidth,
      complete: img.complete,
      opacity: window.getComputedStyle(img).opacity,
      rect: img.getBoundingClientRect()
    }));
  });
  console.log('AFTER SCROLL TO 1200px:', JSON.stringify(afterScroll1200, null, 2));

  // Scroll directly into section
  await page.evaluate(() => {
    document.querySelector('#zonas-cobertura').scrollIntoView();
  });
  await page.waitForTimeout(500);

  const afterSectionScroll = await page.evaluate(() => {
    const section = document.querySelector('#zonas-cobertura');
    const imgs = section.querySelectorAll('img');
    return Array.from(imgs).map(img => ({
      src: img.src,
      naturalWidth: img.naturalWidth,
      complete: img.complete,
      opacity: window.getComputedStyle(img).opacity,
      rect: img.getBoundingClientRect()
    }));
  });
  console.log('AFTER SCROLL DIRECTLY TO SECTION:', JSON.stringify(afterSectionScroll, null, 2));

  await browser.close();
})();
