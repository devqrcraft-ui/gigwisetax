import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const result = execSync('grep -rl "generateStaticParams" C:/Users/RUSLAN/Desktop/gigwisetax/app/ --include="page.tsx"', { encoding: 'utf8' });
const files = result.trim().split('\n').filter(Boolean);

let fixed = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf8');

  // Remove the generateStaticParams export function entirely
  // It looks like: export async function generateStaticParams() { ... }
  // or: export function generateStaticParams() { ... }
  content = content.replace(/export\s+(?:async\s+)?function\s+generateStaticParams\s*\(\s*\)\s*\{[^}]*\}/gs, '');

  // Also remove any blank lines left behind
  content = content.replace(/\n{3,}/g, '\n\n');

  writeFileSync(file, content, 'utf8');
  fixed++;
}

console.log(`Done: removed generateStaticParams from ${fixed} files`);
