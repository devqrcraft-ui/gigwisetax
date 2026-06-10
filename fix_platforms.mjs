import { readFileSync, writeFileSync } from 'fs';
let c = readFileSync('app/home-client.tsx', 'utf8');
c = c.replace(
  `<tr key={p.name} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: i%2===0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.01)' }}>`,
  `<tr key={p.name} onClick={()=>window.location.href='/'+p.slug} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: i%2===0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.01)', cursor:'pointer', transition:'background .15s' }} onMouseEnter={e=>(e.currentTarget.style.background='rgba(232,184,75,0.08)')} onMouseLeave={e=>(e.currentTarget.style.background=i%2===0?'rgba(255,255,255,0.04)':'rgba(255,255,255,0.01)')}>`,
);
c = c.replace(
  `<td style={{ padding: '12px 16px', fontWeight: 700, fontSize: 14, color: 'rgba(255,255,255,0.9)' }}>
                          <span style={{ fontSize: 18, marginRight: 10 }}></span>{p.name}
                        </td>`,
  `<td style={{ padding: '12px 16px', fontWeight: 700, fontSize: 14, color: '#e8b84b' }}>
                          <span style={{ fontSize: 18, marginRight: 10 }}></span>{p.name} <span style={{fontSize:12,opacity:0.7}}>→</span>
                        </td>`,
);
writeFileSync('app/home-client.tsx', c);
console.log('Done');
