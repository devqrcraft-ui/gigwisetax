import { readFileSync, writeFileSync } from 'fs';
let c = readFileSync('app/home-client.tsx', 'utf8');
c = c.replace(
  `onClick={()=>window.location.href='/'+p.slug}`,
  `onClick={()=>window.location.href=p.href}`
);
writeFileSync('app/home-client.tsx', c);
console.log('Done');
