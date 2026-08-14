// fix-webapplication-duplicate.mjs
// Run from repo root: node fix-webapplication-duplicate.mjs
//
// Problem: app/layout.tsx renders ONE sitewide WebApplication schema on every page.
// 37 platform/[state] pages ALSO render their OWN WebApplication schema (with a more
// specific name/url), producing 2 WebApplication blocks in the final HTML on those pages.
// Google sees two "WebApplication" entities describing the same page — ambiguous.
//
// Fix: on those 37 pages, change the type from WebApplication -> WebPage. The page then
// correctly describes itself as a WebPage (which it is), while layout.tsx's WebApplication
// remains the single sitewide entity for the whole tool. Page-specific name/url/description
// fields are all KEPT — nothing is deleted, just the @type token changes. Some files also
// have a dead, unused `schemaJson` object with the same string (e.g. doordash/[state]) —
// changing that too is harmless since it's never rendered, and keeps the file internally
// consistent.
//
// This targets ONLY the narrow, unambiguous pattern of a schema @type declaration —
// not the word "WebApplication" anywhere else (it isn't used as anything else in these
// files, verified against a full file sample before running this broadly).

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const files = execSync(
  `grep -rl "'@type': 'WebApplication'\\|\\"@type\\":\\"WebApplication\\"\\|\\"@type\\": \\"WebApplication\\"" app --include="page.tsx"`,
  { encoding: 'utf8' }
).trim().split('\n').filter(Boolean);

console.log(`Found ${files.length} files with a page-level WebApplication schema.\n`);

const patterns = [
  [/'@type':\s*'WebApplication'/g, `'@type': 'WebPage'`],
  [/"@type":"WebApplication"/g, `"@type":"WebPage"`],
  [/"@type":\s*"WebApplication"/g, `"@type": "WebPage"`],
];

let totalFiles = 0, totalReplacements = 0;

for (const file of files) {
  let text = readFileSync(file, 'utf8');
  const before = text;
  let fileCount = 0;
  for (const [pattern, replacement] of patterns) {
    const matches = text.match(pattern);
    if (matches) fileCount += matches.length;
    text = text.replace(pattern, replacement);
  }
  if (text !== before) {
    writeFileSync(file, text, 'utf8');
    totalFiles++;
    totalReplacements += fileCount;
    console.log(`✓ ${file} — ${fileCount} replacement(s)`);
  } else {
    console.log(`? ${file} — matched by grep but no replacement applied (pattern mismatch, check manually)`);
  }
}

console.log(`\n${totalFiles} files changed, ${totalReplacements} total replacements.`);
console.log('\nVerification — should be ZERO page-level WebApplication left (layout.tsx keeps its one, untouched):');
try {
  const remaining = execSync(
    `grep -rl "'@type': 'WebApplication'\\|\\"@type\\":\\"WebApplication\\"" app --include="page.tsx"`,
    { encoding: 'utf8' }
  ).trim();
  console.log(remaining || '(none — clean)');
} catch {
  console.log('(none — clean, grep found no matches)');
}

console.log('\nNext steps:');
console.log('  git diff --stat');
console.log('  git diff app/doordash/page.tsx   # spot-check one file fully');
console.log('  npm run dev, then check /doordash and /doordash/california render correctly');
console.log('  Live schema check after deploy:');
console.log(`  node -e "(async()=>{const html=await(await fetch('https://www.gigwisetax.com/doordash')).text();const blocks=[...html.matchAll(/<script type=\\"application\\/ld\\+json\\"[^>]*>([\\s\\S]*?)<\\/script>/g)].map(m=>m[1]);const types=blocks.map(b=>{try{return JSON.parse(b)['@type']}catch{return 'PARSE_ERROR'}});console.log(types.join(', '));console.log('WebApplication count:', types.filter(t=>t==='WebApplication').length)})()"`);
