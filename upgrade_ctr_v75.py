import os
path = 'app/layout.tsx'
with open(path, 'r', encoding='utf-8') as f: content = f.read()

# 1. Title & Meta з професійними символами
content = content.replace('title: \'Gig Worker Tax Calculator 2026', 'title: \'Gig Worker Tax Calculator 2026 ★')
content = content.replace('Free gig worker tax calculator 2026', 'Free gig worker tax calculator 2026 ✓ 100% Private ★ 4.9/5 Rating')

# 2. Додаємо перелінковку у футер
if 'Related Tools' not in content:
    links = """<div>
              <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.75)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:12 }}> Sister Tools ➔</div>
              {[
                ['https://www.privatepaycheck.com','PrivatePaycheck ➔'],
                ['https://www.compressto20kb.com','Image Compressor ➔'],
                ['https://www.1099deductions.com','1099 Deductions ➔'],
                ['https://www.ukgigtax.com','UK Gig Tax ➔']
              ].map(([h,l] ) => (
                <a key={h} href={h} className="gwt-footer-link" style={{ textDecoration:'none', display:'block', fontSize:15, color:'#e8b84b', marginBottom:12, minHeight:'24px', fontWeight:600 }}>{l}</a>
              ))}
            </div>"""
    content = content.replace('<div>\n              <div style={{ fontSize:13, fontWeight:700, color:\'rgba(255,255,255,.75)\'', links)

with open(path, 'w', encoding='utf-8') as f: f.write(content)
