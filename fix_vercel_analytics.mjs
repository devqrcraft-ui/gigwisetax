import { readFileSync, writeFileSync } from 'fs';
let c = readFileSync('app/layout.tsx', 'utf8');
c = c.replace(`import { Analytics } from '@vercel/analytics/react'\n`, '');
c = c.replace('<Analytics />', '');
c = c.replace('<Analytics/>', '');
writeFileSync('app/layout.tsx', c);
console.log('Done');
