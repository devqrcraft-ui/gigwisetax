import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const files = execSync(
  'find C:/Users/RUSLAN/Desktop/gigwisetax/app -name "page.tsx" -path "*/\\[state\\]/*"',
  { encoding: 'utf8' }
).trim().split('\n').filter(Boolean);

let fixed = 0;
for (const f of files) {
  const src = readFileSync(f, 'utf8');
  if (!src.includes('generateStaticParams')) { console.log('SKIP:', f.split('/').pop()); continue; }
  const out = src.replace(
    /export async function generateStaticParams\(\) \{\r?\n  return STATES\.map\(s => \(\{ state: s\.slug \}\)\)\r?\n\}\r?\n/,
    ''
  );
  if (out === src) { console.log('NO MATCH:', f); continue; }
  writeFileSync(f, out);
  console.log('FIXED:', f.split('/').slice(-3).join('/'));
  fixed++;
}
console.log(`Done: ${fixed} fixed`);
