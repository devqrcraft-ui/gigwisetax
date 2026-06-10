import { readFileSync, writeFileSync } from 'fs';
let c = readFileSync('app/home-client.tsx', 'utf8');
c = c.replace(
  '{tab !== t.id ? <span style={{marginLeft:6,fontSize:12,opacity:0.75}}>\u2192</span> : <span style={{marginLeft:5,fontSize:11}}>\u25bc</span>}',
  '{tab !== t.id ? <span style={{marginLeft:8,fontSize:16,opacity:0.9,fontWeight:700}}>\u2192</span> : <span style={{marginLeft:6,fontSize:14,fontWeight:700}}>\u25bc</span>}'
);
writeFileSync('app/home-client.tsx', c);
console.log('Done');
