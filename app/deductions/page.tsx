'use client'

import { useState } from 'react'
import TaxFreshness from '@/app/components/TaxFreshness'
import Link from 'next/link'
import AuthorBox from '@/app/components/AuthorBox'

const DEDUCTIONS = [
  { id: 1, category: ' Vehicle', title: 'Business Mileage', desc: '2026 standard-mileage rates: 72.5¢ per mile Jan–Jun and 76¢ Jul–Dec. Keep a contemporaneous log; eligibility depends on the trip.', checked: false },
  { id: 2, category: ' Vehicle', title: 'Vehicle Actual Expenses', desc: 'If eligible, the business-use share of actual vehicle costs may be deductible instead of standard mileage. Do not claim both methods for the same costs.', checked: false },
  { id: 3, category: ' Home', title: 'Home Office', desc: 'May qualify for the regular or simplified method if the space meets IRS exclusive-and-regular-use requirements.', checked: false },
  { id: 4, category: ' Home', title: 'Internet Bill (business use)', desc: 'Document and claim only the portion attributable to business use.', checked: false },
  { id: 5, category: ' Tech', title: 'Phone Bill (business use)', desc: 'Document and claim only the portion attributable to business use.', checked: false },
  { id: 6, category: ' Tech', title: 'Equipment & Gear', desc: 'Business-use costs may be deductible; depreciation or expensing depends on eligibility and current rules.', checked: false },
  { id: 7, category: ' Tech', title: 'Apps & Software', desc: 'Ordinary and necessary business subscriptions, such as accounting or mileage-tracking software, may qualify.', checked: false },
  { id: 8, category: ' Business', title: 'Business Bank Fees', desc: 'Fees directly related to business accounts or transactions may qualify.', checked: false },
  { id: 9, category: ' Business', title: 'Professional Services', desc: 'Eligible business accounting, legal, or tax-preparation fees may qualify.', checked: false },
  { id: 10, category: ' Business', title: 'Business Meals', desc: 'Some qualifying business meals are subject to limits and documentation requirements.', checked: false },
  { id: 11, category: ' Business', title: 'Marketing & Advertising', desc: 'Ordinary business promotion expenses may qualify; keep receipts and records.', checked: false },
  { id: 12, category: ' Health', title: 'Self-Employed Health Insurance', desc: 'May be deductible subject to eligibility, earned-income, and coverage rules.', checked: false },
  { id: 13, category: ' Health', title: 'HSA Contributions', desc: 'Contributions may be deductible if you meet HSA eligibility rules and annual limits.', checked: false },
  { id: 14, category: ' Retirement', title: 'SEP-IRA Contributions', desc: 'Contribution limits depend on compensation, plan rules, and the annual limit.', checked: false },
  { id: 15, category: ' Retirement', title: 'Solo 401(k)', desc: 'Contribution limits and eligibility depend on plan terms and annual rules.', checked: false },
  { id: 16, category: ' Education', title: 'Business Education', desc: 'Education that maintains or improves skills for your current business may qualify; restrictions apply.', checked: false },
  { id: 17, category: ' Education', title: 'Industry Memberships', desc: 'Business-related professional dues or publications may qualify when eligible.', checked: false },
  { id: 18, category: ' Tax', title: 'Deduction for Half of SE Tax', desc: 'Eligible self-employed taxpayers may deduct half of SE tax as an adjustment to income; it does not reduce SE tax itself.', checked: false },
  { id: 19, category: ' Tax', title: 'Qualified Business Income Deduction', desc: 'The QBI deduction may apply subject to income, business, and other statutory limits.', checked: false },
  { id: 20, category: ' Tax', title: 'State and Local Taxes', desc: 'The SALT deduction is generally subject to federal limits and itemization rules that vary by tax year.', checked: false },
]

const CATEGORIES = ['All', ' Vehicle', ' Home', ' Tech', ' Business', ' Health', ' Retirement', ' Education', ' Tax']
export default function DeductionsChecklist() {
  const [checked, setChecked]   = useState<Set<number>>(new Set())
  const [category, setCategory] = useState('All')

  const toggle = (id: number) => {
    const next = new Set(checked)
    next.has(id) ? next.delete(id) : next.add(id)
    setChecked(next)
  }

  const filtered = category === 'All' ? DEDUCTIONS : DEDUCTIONS.filter(d => d.category === category)
  const checkedCount = checked.size

  const bg   = { minHeight: '100vh', background: '#0d1117', padding: '40px 20px' }
  const wrap = { maxWidth: 780, margin: '0 auto' }
  const card = { background: '#07111F', borderRadius: 8, overflow: 'hidden' as const, boxShadow: '0 4px 24px rgba(0,0,0,.3)', marginBottom: 20 }
  const hdr  = { background: 'linear-gradient(135deg,#1e2d5a,#07111F)', padding: '20px 24px', borderBottom: '3px solid #B22234' }

  return (
    <div style={bg}><div style={wrap}>

      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div style={{ display: 'inline-block', background: '#B22234', color: '#fff', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, padding: '5px 14px', borderRadius: 20, marginBottom: 14 }}>
          FREE CHECKLIST
        </div>
        <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 900, margin: '0 0 10px', lineHeight: 1.2 }}>
          Gig Worker Tax Deductions 2026
        </h1>
        <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 15, margin: 0 }}>
          Review common deductions and keep track of items to discuss with a tax professional
        </p>
      </div>

      {/* ANSWER-FIRST */}
      <div style={{background:'rgba(232,184,75,0.07)',border:'1px solid rgba(232,184,75,0.2)',borderRadius:8,padding:'14px 18px',marginBottom:16,fontSize:14,color:'rgba(255,255,255,0.85)',lineHeight:1.8}}>
        Potential deductions depend on your work, records, and eligibility. The checklist is not a determination that an expense qualifies, and a deduction is not the same as tax savings. Vehicle expense methods cannot be double-counted.
      </div>
      <div style={{fontSize:12,color:'rgba(255,255,255,0.45)',marginBottom:16}}>
        2026 planning checklist · By the GigWiseTax Team
      </div>
      {/* KEY TAKEAWAYS */}
      <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:20}}>
        <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
        <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
          <li>IRS mileage rate is <strong>72.5¢–76¢/mile</strong> in 2026 — the single biggest deduction for delivery and rideshare drivers</li>
          <li>The deduction for half of SE tax may reduce federal income subject to tax, but does not reduce SE tax</li>
          <li>The QBI deduction has eligibility tests and limits; not every gig worker qualifies</li>
          <li>Health insurance and HSA deductions have separate eligibility requirements</li>
          <li>Keep records and verify current-year rules before claiming an expense</li>
        </ul>
      </div>
      {/* SELECTION COUNTER */}
      <div style={{ background: checkedCount > 0 ? 'linear-gradient(135deg,#16a34a,#15803d)' : '#0d2340', border: checkedCount > 0 ? 'none' : '1px solid #2a6496', borderRadius: 8, padding: '20px 24px', marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' as const, gap: 12, transition: 'all .3s' }}>
        <div>
          <div style={{ color: checkedCount > 0 ? 'rgba(255,255,255,.8)' : 'rgba(200,216,236,.7)', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>
            {checkedCount > 0 ? `${checkedCount} CHECKLIST ITEMS SELECTED` : 'SELECT ITEMS TO REVIEW'}
          </div>
          <div style={{ color: '#fff', fontSize: 28, fontWeight: 900 }}>
            {checkedCount > 0 ? `${checkedCount} selected — eligibility not confirmed` : 'Start checking items →'}
          </div>
        </div>
        {checkedCount > 0 && (
          <a href="https://1099deductions.com" target="_blank" rel="noopener"
            style={{ background: '#07111F', color: '#B8924A', borderRadius: 6, padding: '12px 20px', fontSize: 14, fontWeight: 800, textDecoration: 'none', whiteSpace: 'nowrap' as const }}>
            Find All Deductions →
          </a>
        )}
      </div>

      {/* CATEGORY FILTER */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginBottom: 20 }}>
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)}
            style={{ background: category===cat?'#B22234':'#0d2340', color: '#fff', border: category===cat?'2px solid #B22234':'2px solid rgba(255,255,255,.82)', borderRadius: 20, padding: '6px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
            {cat}
          </button>
        ))}
      </div>

      {/* DEDUCTIONS LIST */}
      <div style={card}>
        <div style={hdr}>
          <div style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>GIGWISETAX — DEDUCTIONS CHECKLIST 2026</div>
          <div style={{ color: '#fff', fontSize: 16, fontWeight: 800 }}>
            {category === 'All' ? `All ${DEDUCTIONS.length} Deductions` : category} — check what applies to you
          </div>
        </div>
        <div>
          {filtered.map((d, i) => (
            <div key={d.id} onClick={() => toggle(d.id)}
              style={{ display: 'flex', gap: 16, padding: '16px 20px', borderBottom: i < filtered.length-1 ? '1px solid rgba(255,255,255,0.07)' : 'none', cursor: 'pointer', background: checked.has(d.id) ? 'rgba(5,150,105,0.12)' : 'transparent', transition: 'background .2s', alignItems: 'flex-start' }}>
              {/* CHECKBOX */}
              <div style={{ width: 24, height: 24, borderRadius: 6, border: checked.has(d.id) ? '2px solid #16a34a' : '2px solid #3a6496db', background: checked.has(d.id) ? '#16a34a' : '#fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2, transition: 'all .2s' }}>
                {checked.has(d.id) && <span style={{ color: '#fff', fontSize: 14, fontWeight: 900 }}>✓</span>}
              </div>
              {/* CONTENT */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' as const, gap: 4 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: checked.has(d.id) ? '#16a34a' : 'rgba(255,255,255,0.85)' }}>{d.title}</div>
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 3 }}>{d.desc}</div>
                <div style={{ fontSize: 11, color: '#7a9abf', marginTop: 4 }}>{d.category}</div>
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
          style={{ display: 'block', background: '#0d2340', color: '#C8D8EC', borderRadius: 6, padding: '12px', fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid #2a6496' }}>
           Get My Full Tax Penalty Report →
        </a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,.4)', fontSize: 13, textDecoration: 'none' }}>← Back to GigWiseTax Home</Link>
        <span style={{ color: 'rgba(255,255,255,.82)', margin: '0 12px' }}>|</span>
        <Link href="/s-corp-calculator" style={{ color: 'rgba(255,255,255,.4)', fontSize: 13, textDecoration: 'none' }}>S-Corp Calculator →</Link>
      </div>

      <p style={{ color: 'rgba(255,255,255,.82)', fontSize: 11, textAlign: 'center', marginTop: 16 }}>
        For informational purposes only. Consult a licensed CPA. GigWiseTax.com
      </p>
      <TaxFreshness />
<AuthorBox />
    </div></div>
  )
}
