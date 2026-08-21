import os

def fix():
    # 1. layout.tsx (SEO)
    lp = 'app/layout.tsx'
    if os.path.exists(lp):
        with open(lp, 'r', encoding='utf-8') as f: c = f.read()
        c = c.replace('<meta name="viewport" content="width=device-width, initial-scale=1" />', '')
        c = c.replace('<meta charSet="UTF-8" />', '')
        if 'rel="canonical"' not in c:
            c = c.replace('<head>', '<head>\n        <link rel="canonical" href="https://www.gigwisetax.com" />' )
        with open(lp, 'w', encoding='utf-8') as f: f.write(c)
        print("Fixed layout.tsx")

    # 2. globals.css (Mobile UI)
    gp = 'app/globals.css'
    if os.path.exists(gp):
        with open(gp, 'a', encoding='utf-8') as f:
            f.write("\n@media (max-width: 768px) {\n  .mobile-no-border { border:none !important; padding:15px 10px !important; background:transparent !important; }\n  body { font-size: 16px !important; }\n  input, select, button { font-size: 16px !important; min-height: 48px !important; }\n}\n")
        print("Fixed globals.css")

    # 3. page.tsx (Remove Triple Borders)
    pp = 'app/page.tsx'
    if os.path.exists(pp):
        with open(pp, 'r', encoding='utf-8') as f: c = f.read()
        c = c.replace("padding:'40px 20px', marginBottom:32 }}", "padding:'40px 20px', marginBottom:32 }} className=\"mobile-no-border\"")
        with open(pp, 'w', encoding='utf-8') as f: f.write(c)
        print("Fixed page.tsx")

fix()
