import fs from 'fs';

const path = 'next.config.ts';
const lines = fs.readFileSync(path, 'utf8').split('\n');

const anchorIdx = lines.findIndex(l => l.includes("source: '/year'"));
if (anchorIdx === -1) {
  console.error('ANCHOR NOT FOUND');
  process.exit(1);
}

const newLine = "      { source: '/1099-tax-calculator', destination: '/1099-tax-calculator-2026', permanent: true },";

lines.splice(anchorIdx, 0, newLine);

fs.writeFileSync(path, lines.join('\n'), 'utf8');
console.log('OK: inserted at line', anchorIdx);
