import { readFileSync, writeFileSync } from 'fs';

const files = [
  'app/grubhub/page.tsx',
  'app/turo/page.tsx',
  'app/walmart-spark/page.tsx',
];

for (const f of files) {
  let c = readFileSync(f, 'utf8');
  const before = c;
  c = c.replace(/onChange={e=>setIncome\(e\.target\.value\)}/g,
    'onChange={e=>setIncome(String(Math.max(0,parseFloat(e.target.value)||0)))} min="0"');
  c = c.replace(/onChange={e=>setMiles\(e\.target\.value\)}/g,
    'onChange={e=>setMiles(String(Math.max(0,parseFloat(e.target.value)||0)))} min="0"');
  c = c.replace(/onChange={e=>setRentalDays\(e\.target\.value\)}/g,
    'onChange={e=>setRentalDays(String(Math.max(0,parseFloat(e.target.value)||0)))} min="0"');
  if (c !== before) { writeFileSync(f, c); console.log('Fixed:', f); }
  else console.log('No change:', f);
}
