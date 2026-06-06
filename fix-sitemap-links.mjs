import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const BASE = 'C:/Users/RUSLAN/Desktop/gigwisetax';

// ============================================================
// КРОК 1: sitemap.ts — видалити -2026 calculator URLs що редіректять
// ============================================================
console.log('\n=== КРОК 1: sitemap.ts cleanup ===');
const sitemapPath = `${BASE}/app/sitemap.ts`;
let sitemap = readFileSync(sitemapPath, 'utf8');

// Рядки що треба видалити (URL з permanent redirect в next.config)
const redirectingUrls = [
  'airbnb-tax-calculator-2026',
  'amazon-flex-tax-calculator-2026',
  'doordash-tax-calculator-2026',
  'etsy-tax-calculator-2026',
  'instacart-tax-calculator-2026',
  'lyft-tax-calculator-2026',
  'onlyfans-tax-calculator-2026',
  'uber-tax-calculator-2026',
  '1099-tax-calculator-2026',  // редіректить на blog
];

const sitemapBefore = sitemap.split('\n').length;
for (const slug of redirectingUrls) {
  // Видаляємо весь рядок що містить цей URL
  sitemap = sitemap.replace(new RegExp(`    \\{ url: [^\n]*${slug}[^\n]*\\},?\n`, 'g'), '');
}
const sitemapAfter = sitemap.split('\n').length;
writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`sitemap.ts: ${sitemapBefore} → ${sitemapAfter} рядків (видалено ${sitemapBefore - sitemapAfter})`);

// Перевірка: залишкові -2026 calculator URLs
const remaining = sitemap.split('\n').filter(l =>
  redirectingUrls.some(s => l.includes(s))
);
console.log(`Залишкові проблемні рядки: ${remaining.length}`);
if (remaining.length > 0) remaining.forEach(l => console.log(' ', l.trim()));

// ============================================================
// КРОК 2: blog pages — замінити /1099-tax-calculator → /1099-tax-calculator-2026
// ============================================================
console.log('\n=== КРОК 2: blog /1099-tax-calculator links ===');

// Знайти всі blog files що мають /1099-tax-calculator (без -2026)
let result;
try {
  result = execSync(
    `grep -rl "/1099-tax-calculator\\"\\|/1099-tax-calculator'" ${BASE}/app/blog --include="*.tsx"`,
    { encoding: 'utf8' }
  ).trim();
} catch(e) {
  result = '';
}

// Альтернативний підхід — пройтись по відомих файлах
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

function findTsxFiles(dir) {
  const files = [];
  try {
    for (const f of readdirSync(dir)) {
      const full = join(dir, f);
      if (statSync(full).isDirectory()) files.push(...findTsxFiles(full));
      else if (f.endsWith('.tsx') || f.endsWith('.ts')) files.push(full);
    }
  } catch(e) {}
  return files;
}

const blogDir = `${BASE}/app/blog`;
const allFiles = findTsxFiles(blogDir);
let fixedCount = 0;
let fixedFiles = [];

for (const file of allFiles) {
  const content = readFileSync(file, 'utf8');
  // Замінити href="/1099-tax-calculator" але НЕ /1099-tax-calculator-2026
  if (content.includes('"/1099-tax-calculator"') || content.includes("'/1099-tax-calculator'")) {
    const fixed = content
      .replace(/("\/1099-tax-calculator")(?!-2026)/g, '"/1099-tax-calculator-2026"')
      .replace(/(\'\/1099-tax-calculator\')(?!-2026)/g, "'/1099-tax-calculator-2026'");
    if (fixed !== content) {
      writeFileSync(file, fixed, 'utf8');
      fixedCount++;
      fixedFiles.push(file.replace(BASE + '/', '').replace(/\\/g, '/'));
    }
  }
}

console.log(`Виправлено файлів: ${fixedCount}`);
fixedFiles.forEach(f => console.log(' ', f));

// ============================================================
// КРОК 3: перевірка — залишки /1099-tax-calculator без -2026
// ============================================================
console.log('\n=== КРОК 3: перевірка залишків ===');
let remaining1099 = 0;
for (const file of allFiles) {
  const content = readFileSync(file, 'utf8');
  const matches = content.match(/["']\/1099-tax-calculator["']/g);
  if (matches) {
    remaining1099 += matches.length;
    console.log(`  ЗАЛИШОК: ${file.replace(BASE + '/', '')} — ${matches.length}x`);
  }
}
console.log(`Загалом залишків: ${remaining1099}`);

// ============================================================
// РЕЗУЛЬТАТ
// ============================================================
console.log('\n=== ПІДСУМОК ===');
console.log(`✓ sitemap.ts: видалено ${sitemapBefore - sitemapAfter} redirect-рядки`);
console.log(`✓ blog files: виправлено ${fixedCount} файлів (/1099-tax-calculator → /1099-tax-calculator-2026)`);
console.log(`⚠ shipt 404: потребує окремої діагностики generateStaticParams`);
console.log('\nНаступні кроки:');
console.log('1. npx tsc --noEmit');
console.log('2. grep -c "1099-tax-calculator\\"" app/blog/*/page.tsx — має бути 0');
console.log('3. grep -n "tax-calculator-2026" app/sitemap.ts — мають зникнути redirect URLs');
