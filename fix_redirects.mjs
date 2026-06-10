import { readFileSync, writeFileSync } from 'fs';
const content = readFileSync('next.config.ts', 'utf8');
const lines = content.split('\n');
const seen = new Set();
const result = [];
for (const line of lines) {
  const m = line.match(/source:\s*'([^']+)'/);
  if (m) {
    if (seen.has(m[1])) { continue; }
    seen.add(m[1]);
  }
  result.push(line);
}
writeFileSync('next.config.ts', result.join('\n'));
console.log('Before:', lines.length, 'lines | After:', result.length, 'lines | Removed:', lines.length - result.length);
