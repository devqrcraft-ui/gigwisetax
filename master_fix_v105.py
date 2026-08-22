import os
# 1. Caching & Security
with open('vercel.json', 'w') as f:
    f.write('{"headers":[{"source":"/(.*)","headers":[{"key":"X-Content-Type-Options","value":"nosniff"}]},{"source":"/_next/static/(.*)","headers":[{"key":"Cache-Control","value":"public, max-age=31536000, immutable"}]}]}')
# 2. UI & Interlinking
path = 'app/layout.tsx'
if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f: c = f.read()
    if 'Professional Tax Network' not in c:
        footer = '<div style={{padding:20,background:"rgba(232,184,75,0.05)",borderTop:"1px solid rgba(255,255,255,0.1)"}}><div style={{maxWidth:1200,margin:"0 auto"}}><div style={{fontSize:12,fontWeight:800,color:"#e8b84b",marginBottom:10}}>★ TAX ECOSYSTEM</div><a href="https://www.privatepaycheck.com" style={{color:"#fff",marginRight:20,textDecoration:"none"}}>PrivatePaycheck ➔</a><a href="https://www.ukgigtax.com" style={{color:"#fff",textDecoration:"none"}}>UKGigTax ➔</a></div></div>'
        c = c.replace('</footer>', footer + '</footer>' )
        with open(path, 'w', encoding='utf-8') as f: f.write(c)
