const fs = require('fs');

const html = fs.readFileSync('C:/Users/maili/Downloads/auditoria_final_copy_cro_adaroviajes.html', 'utf8');
const bodyIndex = html.indexOf('<body');
const body = html.slice(bodyIndex);

// Let's preserve some structure: headings, lists, table rows, paragraphs
let text = body
  .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '')
  .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '\n\n# $1\n')
  .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n\n## $1\n')
  .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n\n### $1\n')
  .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '\n\n#### $1\n')
  .replace(/<li[^>]*>(.*?)<\/li>/gi, '\n- $1')
  .replace(/<tr[^>]*>(.*?)<\/tr>/gi, '\n$1 |')
  .replace(/<td[^>]*>(.*?)<\/td>/gi, ' $1 |')
  .replace(/<th[^>]*>(.*?)<\/th>/gi, ' **$1** |')
  .replace(/<p[^>]*>(.*?)<\/p>/gi, '\n\n$1\n')
  .replace(/<br\s*[\/]?>/gi, '\n')
  .replace(/<\/?[^>]+(>|$)/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"');

// clean repeated spaces
text = text.replace(/[ \t]+/g, ' ').replace(/\n\s+\n/g, '\n\n').replace(/\n{3,}/g, '\n\n');

fs.writeFileSync('C:/Users/maili/Documents/PROYECTS/2026/jujuy-diario/scratch/audit_extracted.md', text.trim());
console.log('Saved markdown, total length:', text.length);
