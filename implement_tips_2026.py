import os

def update_math():
    path = 'lib/math.ts'
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f: content = f.read()
    
    # Додаємо tips у вхідні параметри та логіку
    if 'tips: number' not in content:
        content = content.replace('income: number, expenses: number', 'income: number, expenses: number, tips: number = 0')
        # Логіка звільнення: федеральний податок рахується від (дохід + чайові - витрати - пільга)
        # Пільга на чайові = min(tips, 25000)
        content = content.replace('const taxableIncome = Math.max(0, income - expenses', 'const tipsExemption = Math.min(tips, 25000);\n  const taxableIncome = Math.max(0, income + tips - tipsExemption - expenses')
    
    with open(path, 'w', encoding='utf-8') as f: f.write(content)
    print("Updated lib/math.ts with Tips Exemption logic")

def update_ui():
    path = 'app/page.tsx'
    if not os.path.exists(path): return
    with open(path, 'r', encoding='utf-8') as f: content = f.read()
    
    # Додаємо стан для tips
    if 'const [tips, setTips] =' not in content:
        content = content.replace('const [income, setIncome] = useState(50000);', 'const [income, setIncome] = useState(50000);\n  const [tips, setTips] = useState(0);')
        
        # Додаємо поле вводу перед витратами
        input_html = """
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>
                Annual Tips (New 2026 Tax-Free)
              </label>
              <input
                type="number"
                value={tips || ''}
                onChange={(e) => setTips(Number(e.target.value))}
                style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '12px', color: '#fff', fontSize: 16 }}
                placeholder="e.g. 5000"
              />
            </div>"""
        content = content.replace('<div style={{ marginBottom: 20 }}>\n              <label style={{ display: \'block\', fontSize: 14', input_html + '\n            <div style={{ marginBottom: 20 }}>\n              <label style={{ display: \'block\', fontSize: 14')
        
        # Оновлюємо виклик функції calculateTaxes
        content = content.replace('calculateTaxes(income, expenses', 'calculateTaxes(income, expenses, tips')

    with open(path, 'w', encoding='utf-8') as f: f.write(content)
    print("Updated app/page.tsx with Tips Input UI")

update_math()
update_ui()
