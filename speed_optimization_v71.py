import os

def fix_contrast_and_lcp():
    path = 'app/page.tsx'
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f: content = f.read()
    
    # 1. Виправляємо контрастність (збільшуємо яскравість тексту)
    content = content.replace('color: "#C8D8EC", opacity: 0.5', 'color: "rgba(200, 216, 236, 0.8)"')
    content = content.replace('color: "#C8D8EC", opacity: 0.55', 'color: "rgba(200, 216, 236, 0.85)"')
    
    # 2. Оптимізація LCP для H1 (додаємо fetchPriority="high" якщо це можливо через обгортку, 
    # або просто робимо стиль більш стабільним)
    content = content.replace('fontWeight: 900', 'fontWeight: 800, textRendering: "optimizeLegibility"')
    
    with open(path, 'w', encoding='utf-8') as f: f.write(content)
    print("Fixed contrast and optimized LCP in page.tsx")

def fix_gtm_loading():
    path = 'app/layout.tsx'
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f: content = f.read()
    
    # Додаємо пріоритет для шрифтів та оптимізуємо скрипти
    if 'rel="preconnect"' not in content:
        content = content.replace('<head>', '<head>\n        <link rel="preconnect" href="https://www.googletagmanager.com" />' )
    
    with open(path, 'w', encoding='utf-8') as f: f.write(content)
    print("Optimized GTM loading in layout.tsx")

fix_contrast_and_lcp()
fix_gtm_loading()
