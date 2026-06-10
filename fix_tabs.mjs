import { readFileSync, writeFileSync } from 'fs';
let c = readFileSync('app/home-client.tsx', 'utf8');
c = c.replace(
  '                {t.label}',
  '                {t.label}{tab !== t.id ? <span style={{marginLeft:6,fontSize:12,opacity:0.75}}>\u2192</span> : <span style={{marginLeft:5,fontSize:11}}>\u25bc</span>}'
);
writeFileSync('app/home-client.tsx', c);
console.log('Done');
