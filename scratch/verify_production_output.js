const fs = require('fs');
const path = require('path');

// Let's inspect the compiled static HTML files in .next/server/app
const appDir = path.join(__dirname, '..', '.next', 'server', 'app');

function inspectHtml(filePath, name) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`\n=== Analyzing ${name} ===`);
  
  // Find all wa.me links
  const waRegex = /https:\/\/wa\.me\/[^"' >]+/g;
  const matches = content.match(waRegex) || [];
  console.log(`Found ${matches.length} WhatsApp links.`);
  let hasError = false;
  matches.forEach((url, i) => {
    // Check if phone part contains spaces or + or non-digits
    const urlObj = new URL(url);
    const phonePart = urlObj.pathname.replace(/^\//, '');
    if (!/^\d+$/.test(phonePart)) {
      console.error(`[ERROR] Link ${i + 1} has invalid phone characters: "${phonePart}" in URL: ${url}`);
      hasError = true;
    } else {
      console.log(`[OK] Link ${i + 1}: wa.me/${phonePart} (Length: ${url.length})`);
    }
  });

  // Check OpenGraph
  const ogImageMatch = content.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
  if (ogImageMatch) {
    console.log(`[OK] og:image is: ${ogImageMatch[1]}`);
  }

  // Check Viewport
  const viewportMatch = content.match(/<meta\s+name="viewport"\s+content="([^"]+)"/);
  if (viewportMatch) {
    console.log(`[OK] viewport is: ${viewportMatch[1]}`);
  }
  
  if (!hasError && matches.length > 0) {
    console.log(`>>> ${name} PASSED all WhatsApp link checks!`);
  }
}

inspectHtml(path.join(appDir, 'index.html'), 'Home Page (index.html)');
inspectHtml(path.join(appDir, 'politicas-de-cancelacion.html'), 'Politicas de Cancelacion (politicas-de-cancelacion.html)');
