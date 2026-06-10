import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const result = execSync('grep -rl "" C:/Users/RUSLAN/Desktop/gigwisetax/app/ --include="page.tsx"', { encoding: 'utf8' });
const files = result.trim().split('\n').filter(f => f.includes('[state]') || f.includes('[platform]'));

let fixed = 0, skipped = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf8');
  if (content.includes('export const runtime =')) { skipped++; continue; }
  content = 'export const runtime = "edge";\n' + content;
  writeFileSync(file, content, 'utf8');
  fixed++;
}

console.log(`Done: ${fixed} fixed, ${skipped} already had edge runtime`);
