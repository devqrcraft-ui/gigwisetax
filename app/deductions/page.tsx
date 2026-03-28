'use client'

import { useState } from 'react'
import Link from 'next/link'

const DEDUCTIONS = [
  { id: 1, category: ' Vehicle', title: 'Mileage Deduction', desc: '$0.725 per business mile (2026 IRS rate)', savings: 'Avg $3,500/yr', checked: false },
  { id: 2, category: ' Vehicle', title: 'Car Insurance (business %)', desc: 'Deduct the % of time used for work', savings: 'Avg $400/yr', checked: false },
  { id: 3, category: ' Home', title: 'Home Office', desc: '$5 per sq ft, up to 300 sq ft = $1,500 max', savings: 'Up to $1,500/yr', checked: false },
  { id: 4, category: ' Home', title: 'Internet Bill (business %)', desc: 'Deduct 50-80% if used for work', savings: 'Avg $600/yr', checked: false },
  { id: 5, category: ' Tech', title: 'Phone Bill (business %)', desc: 'Deduct 50-80% of monthly bill', savings: 'Avg $720/yr', checked: false },
  { id: 6, category: ' Tech', title: 'Equipment & Gear', desc: 'Laptop, camera, phone — 100% deductible (Section 179)', savings: 'Avg $800/yr', checked: false },
  { id: 7, category: ' Tech', title: 'Apps & Software', desc: 'Mileage tracker, accounting software, subscriptions', savings: 'Avg $300/yr', checked: false },
  { id: 8, category: ' Business', title: 'Business Bank Fees', desc: 'Monthly fees, wire transfers, payment processing', savings: 'Avg $200/yr', checked: false },
  { id: 9, category: ' Business', title: 'Professional Services', desc: 'CPA, lawyer, tax prep fees', savings: 'Avg $500/yr', checked: false },
  { id: 10, category: ' Business', title: 'Business Meals (50%)', desc: 'Client meetings, business discussions', savings: 'Avg $400/yr', checked: false },
  { id: 11, category: ' Business', title: 'Marketing & Advertising', desc: 'Website, ads, business cards', savings: 'Avg $600/yr', checked: false },
  { id: 12, category: ' Health', title: 'Health Insurance Premium', desc: '100% deductible if self-employed and not eligible for employer plan', savings: 'Avg $3,000/yr', checked: false },
  { id: 13, category: ' Health', title: 'HSA Contributions', desc: 'Up to $4,150 single / $8,300 family (2025)', savings: 'Up to $4,150/yr', checked: false },
  { id: 14, category: ' Retirement', title: 'SEP-IRA Contributions', desc: 'Up to 25% of net income, max $69,000 (2025)', savings: 'Up to $69,000/yr', checked: false },
  { id: 15, category: ' Retirement', title: 'Solo 401(k)', desc: 'Up to $69,000 total contributions (2025)', savings: 'Up to $69,000/yr', checked: false },
  { id: 16, category: ' Education', title: 'Business Education', desc: 'Courses, books, webinars related to your work', savings: 'Avg $300/yr', checked: false },
  { id: 17, category: ' Education', title: 'Industry Memberships', desc: 'Professional associations, trade publications', savings: 'Avg $200/yr', checked: false },
  { id: 18, category: ' Tax', title: 'SE Tax Deduction (50%)', desc: 'Deduct half of self-employment tax from income — automatic', savings: 'Avg $2,000/yr', checked: false },
  { id: 19, category: ' Tax', title: 'QBI Deduction (20%)', desc: 'Qualified Business Income — up to 20% of net income', savings: 'Avg $3,000/yr', checked: false },
  { id: 20, category: ' Tax', title: 'State & Local Taxes (SALT)', desc: 'Up to $40,000 deduction (2025 rule)', savings: 'Up to $40,000/yr', checked: false },
]

const CATEGORIES = ['All', ' Vehicle', ' Home', ' Tech', ' Business', ' Health', ' Retirement', ' Education', ' Tax']

export default function DeductionsChecklist() {
  const [checked, setChecked]   = useState<Set<number>>(new Set())
  const [category, setCategory] = useState('All')
  const [income, setIncome]     = useState('')

  const toggle = (id: number) => {
    const next = new Set(checked)
    next.has(id) ? next.delete(id) : next.add(id)
    setChecked(next)
  }

  const filtered = category === 'All' ? DEDUCTIONS : DEDUCTIONS.filter(d => d.category === category)
  const checkedCount = checked.size
  const inc = parseFloat(income) || 50000
  const estimatedSavings = Math.round(checkedCount * inc * 0.018)

  const bg   = { minHeight: '100vh', background: '#0d1117', padding: '40px 20px' }
  const wrap = { maxWidth: 780, margin: '0 auto' }
  const card = { background: '#0d1b3e', borderRadius: 8, overflow: 'hidden' as const, boxShadow: '0 4px 24px rgba(0,0,0,.3)', marginBottom: 20 }
  const hdr  = { background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', padding: '20px 24px', borderBottom: '3px solid #B22234' }

  return (
    <div style={bg}><div style={wrap}>

      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div style={{ display: 'inline-block', background: '#B22234', color: '#fff', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, padding: '5px 14px', borderRadius: 20, marginBottom: 14 }}>
          FREE CHECKLIST
        </div>
        <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 900, margin: '0 0 10px', lineHeight: 1.2 }}>
          Gig Worker Tax Deductions 2025
        </h1>
        <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 15, margin: 0 }}>
          Check every deduction you qualify for — see your estimated tax savings instantly
        </p>
      </div>

      {/* INCOME INPUT */}
      <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '16px 20px', marginBottom: 20, display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' as const }}>
        <span style={{ color: 'rgba(255,255,255,.7)', fontSize: 14, fontWeight: 600 }}>Your annual income:</span>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
          {['20000','35000','50000','75000','100000'].map(v => (
            <button key={v} onClick={() => setIncome(v)}
              style={{ background: income===v?'#B22234':'rgba(255,255,255,.1)', color: '#fff', border: income===v?'2px solid #B22234':'2px solid rgba(255,255,255,.2)', borderRadius: 6, padding: '6px 12px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              ${parseInt(v)/1000}k
            </button>
          ))}
        </div>
      </div>

      {/* SAVINGS COUNTER */}
      <div style={{ background: checkedCount > 0 ? 'linear-gradient(135deg,#16a34a,#15803d)' : 'rgba(255,255,255,.05)', border: checkedCount > 0 ? 'none' : '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '20px 24px', marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' as const, gap: 12, transition: 'all .3s' }}>
        <div>
          <div style={{ color: checkedCount > 0 ? 'rgba(255,255,255,.8)' : 'rgba(255,255,255,.4)', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>
            {checkedCount > 0 ? `${checkedCount} DEDUCTIONS SELECTED` : 'CHECK DEDUCTIONS BELOW'}
          </div>
          <div style={{ color: '#fff', fontSize: 28, fontWeight: 900 }}>
            {checkedCount > 0 ? `~$${estimatedSavings.toLocaleString()} estimated savings` : 'Start checking deductions →'}
          </div>
        </div>
        {checkedCount > 0 && (
          <a href="https://1099deductions.com" target="_blank" rel="noopener"
            style={{ background: '#0d1b3e', color: '#B8924A', borderRadius: 6, padding: '12px 20px', fontSize: 14, fontWeight: 800, textDecoration: 'none', whiteSpace: 'nowrap' as const }}>
            Find All Deductions →
          </a>
        )}
      </div>

      {/* CATEGORY FILTER */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginBottom: 20 }}>
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)}
            style={{ background: category===cat?'#B22234':'rgba(255,255,255,.08)', color: '#fff', border: category===cat?'2px solid #B22234':'2px solid rgba(255,255,255,.15)', borderRadius: 20, padding: '6px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
            {cat}
          </button>
        ))}
      </div>

      {/* DEDUCTIONS LIST */}
      <div style={card}>
        <div style={hdr}>
          <div style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>GIGWISETAX — DEDUCTIONS CHECKLIST 2025</div>
          <div style={{ color: '#fff', fontSize: 16, fontWeight: 800 }}>
            {category === 'All' ? `All ${DEDUCTIONS.length} Deductions` : category} — check what applies to you
          </div>
        </div>
        <div>
          {filtered.map((d, i) => (
            <div key={d.id} onClick={() => toggle(d.id)}
              style={{ display: 'flex', gap: 16, padding: '16px 20px', borderBottom: i < filtered.length-1 ? '1px solid rgba(255,255,255,0.07)' : 'none', cursor: 'pointer', background: checked.has(d.id) ? 'rgba(5,150,105,0.12)' : 'transparent', transition: 'background .2s', alignItems: 'flex-start' }}>
              {/* CHECKBOX */}
              <div style={{ width: 24, height: 24, borderRadius: 6, border: checked.has(d.id) ? '2px solid #16a34a' : '2px solid #d1d5db', background: checked.has(d.id) ? '#16a34a' : '#fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2, transition: 'all .2s' }}>
                {checked.has(d.id) && <span style={{ color: '#fff', fontSize: 14, fontWeight: 900 }}>✓</span>}
              </div>
              {/* CONTENT */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' as const, gap: 4 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: checked.has(d.id) ? '#16a34a' : '#1a1a2e' }}>{d.title}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#16a34a', background: 'rgba(5,150,105,0.12)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 4, padding: '2px 8px', whiteSpace: 'nowrap' as const }}>{d.savings}</div>
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 3 }}>{d.desc}</div>
                <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 4 }}>{d.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#1e2d5a', borderRadius: 8, padding: 24, textAlign: 'center', marginBottom: 24 }}>
        <div style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>DON'T MISS THESE DEDUCTIONS WHEN FILING</div>
        <div style={{ color: '#fff', fontSize: 16, fontWeight: 600, marginBottom: 16 }}>TurboTax Self-Employed finds every deduction automatically</div>
        <a href="https://1099deductions.com" target="_blank" rel="noopener"
          style={{ display: 'block', background: '#B22234', color: '#fff', borderRadius: 6, padding: '14px', fontSize: 15, fontWeight: 800, textDecoration: 'none', marginBottom: 10 }}>
          File with TurboTax Self-Employed →
        </a>
        <a href="/tax-penalty-finder"
          style={{ display: 'block', background: 'rgba(255,255,255,.1)', color: '#fff', borderRadius: 6, padding: '12px', fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,.2)' }}>
           Get My Full Tax Penalty Report →
        </a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,.4)', fontSize: 13, textDecoration: 'none' }}>← Back to GigWiseTax Home</Link>
        <span style={{ color: 'rgba(255,255,255,.2)', margin: '0 12px' }}>|</span>
        <Link href="/s-corp-calculator" style={{ color: 'rgba(255,255,255,.4)', fontSize: 13, textDecoration: 'none' }}>S-Corp Calculator →</Link>
      </div>

      <p style={{ color: 'rgba(255,255,255,.2)', fontSize: 11, textAlign: 'center', marginTop: 16 }}>
        For informational purposes only. Consult a licensed CPA. GigWiseTax.com
      </p>
    </div></div>
  )
}
