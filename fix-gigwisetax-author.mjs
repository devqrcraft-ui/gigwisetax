import fs from 'fs';
import path from 'path';

const ROOT = 'C:/Users/RUSLAN/Desktop/gigwisetax/app';

// ============================
// КРОК 1: AuthorBox.tsx
// ============================
console.log('=== КРОК 1: AuthorBox.tsx ===');
const abPath = path.join(ROOT, 'components/AuthorBox.tsx').replace(/\\/g, '/');
let ab = fs.readFileSync(abPath, 'utf8').replace(/\r\n/g, '\n');
const abBefore = ab;

ab = ab.split('Tax Compliance Specialist \xb7 Since 2017').join('Tax Compliance Specialist');
ab = ab.split('Tax Compliance Specialist · Since 2017').join('Tax Compliance Specialist');

const OLD_BIO = "Helped 5,000+ freelancers navigate IRS rules. Specializes in gig economy and 1099 taxation.";
const NEW_BIO = "Writes about self-employment tax, gig economy income, and 1099 deductions for US freelancers and independent contractors.";
ab = ab.split(OLD_BIO).join(NEW_BIO);

if (ab !== abBefore) {
  fs.writeFileSync(abPath, ab, 'utf8');
  console.log('FIXED: AuthorBox.tsx');
} else {
  console.log('SKIP: точні рядки не знайдено — перевірте вручну');
}

// ============================
// КРОК 2: page.tsx (головна)
// ============================
console.log('\n=== КРОК 2: page.tsx (головна) ===');
const homePath = path.join(ROOT, 'page.tsx').replace(/\\/g, '/');
let home = fs.readFileSync(homePath, 'utf8').replace(/\r\n/g, '\n');
const homeBefore = home;

const OLD_PERSON = '"@context":"https://schema.org","@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","description":"Tax compliance specialist since 2017. Helped 5,000+ freelancers navigate IRS rules.","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center","https://www.gov.uk/self-assessment-tax-returns"]';
const NEW_PERSON = '"@context":"https://schema.org","@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"';

if (home.includes(OLD_PERSON)) {
  home = home.split(OLD_PERSON).join(NEW_PERSON);
  fs.writeFileSync(homePath, home, 'utf8');
  console.log('FIXED: page.tsx — Person-схема очищена');
} else {
  console.log('SKIP: точний рядок не знайдено — перевірте вручну');
}

// ============================
// КРОК 3: сканування всіх tsx файлів
// ============================
console.log('\n=== КРОК 3: перевірка інших файлів ===');
let extra = 0;
function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) { scanDir(full); continue; }
    if (!f.endsWith('.tsx') && !f.endsWith('.ts')) continue;
    const txt = fs.readFileSync(full, 'utf8');
    if (txt.includes('Helped 5,000') || (txt.includes('Since 2017') && txt.includes('Tax Compliance'))) {
      console.log('ЗНАЙДЕНО:', full.replace(ROOT, ''));
      extra++;
    }
  }
}
scanDir(ROOT);
if (extra === 0) console.log('Інших файлів не знайдено ✓');

// ============================
// ФІНАЛЬНА ПЕРЕВІРКА
// ============================
console.log('\n=== ФІНАЛЬНА ПЕРЕВІРКА ===');
let remaining = 0;
for (const f of [abPath, homePath]) {
  const txt = fs.readFileSync(f, 'utf8');
  if (txt.includes('Helped 5,000')) { remaining++; console.log('ЗАЛИШИВСЯ "Helped 5,000":', f); }
  if (txt.includes('Since 2017')) { remaining++; console.log('ЗАЛИШИВСЯ "Since 2017":', f); }
  if (txt.includes('irs.gov/businesses') && txt.includes('sameAs')) { remaining++; console.log('ЗАЛИШИВСЯ IRS sameAs:', f); }
}
console.log('\nПроблем залишилось:', remaining, remaining === 0 ? '✓ ЧИСТО' : '!!! ПЕРЕВІРТЕ');
console.log('\nГотово. Запустіть:');
console.log('npm run build && git add -A && git commit -m "fix: remove fabricated author stats from AuthorBox and home schema" && git push');
