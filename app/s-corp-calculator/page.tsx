export const dynamic = "force-static"

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SCorpCalculator() {
  const [income, setIncome] = useState('')
  const [salary, setSalary] = useState('')
  const [result, setResult] = useState<any>(null)

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

  const calculate = () => {
    const inc = parseFloat(income) || 0
    const sal = parseFloat(salary) || Math.min(inc * 0.5, 80000)

    // Sole Prop
    const soleSE    = inc * 0.9235 * 0.153
    const soleFed   = (inc - soleSE * 0.5) * 0.22
    const soleTotal = soleSE + soleFed

    // S-Corp
    const scorpPayroll = sal * 0.153
    const scorpFed     = (inc - sal * 0.5) * 0.22
    const scorpTotal   = scorpPayroll + scorpFed
    const scorpCost    = 2500 // compliance cost estimate

    const savings = soleTotal - scorpTotal - scorpCost

    setResult({ inc, sal, soleSE, soleFed, soleTotal, scorpPayroll, scorpFed, scorpTotal, scorpCost, savings })
  }

  const bg    = { minHeight: '100vh', background: '#0d1117', padding: '40px 20px' }
  const wrap  = { maxWidth: 680, margin: '0 auto' }
  const card  = { background: '#fff', borderRadius: 8, overflow: 'hidden' as const, boxShadow: '0 4px 24px rgba(0,0,0,.3)', marginBottom: 24 }
  const hdr   = { background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', padding: '20px 24px', borderBottom: '3px solid #B22234' }
  const body  = { padding: '24px' }
  const inp   = { width: '100%', border: '2px solid #e5e7eb', borderRadius: 6, padding: '12px 14px', fontSize: 16, boxSizing: 'border-box' as const, marginTop: 8 }
  const btnR  = { background: '#B22234', color: '#fff', border: 'none', borderRadius: 6, padding: '14px', fontSize: 16, fontWeight: 800, cursor: 'pointer', width: '100%', marginTop: 16 }
  const label = { fontSize: 13, fontWeight: 700, color: '#374151', display: 'block', marginTop: 16 }

  const Row = ({ l, v, bold }: { l: string; v: string; bold?: boolean }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid #f3f4f6' }}>
      <span style={{ fontSize: 14, color: bold ? '#1a1a2e' : '#6b7280', fontWeight: bold ? 700 : 400 }}>{l}</span>
      <span style={{ fontSize: 14, fontWeight: bold ? 800 : 600, color: bold ? '#1a1a2e' : '#374151' }}>{v}</span>
    </div>
  )

  return (
    <div style={bg}>
      <div style={wrap}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#B22234', color: '#fff', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, padding: '5px 14px', borderRadius: 20, marginBottom: 14 }}>
            FREE CALCULATOR
          </div>
          <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 900, margin: '0 0 10px', lineHeight: 1.2 }}>
            S-Corp vs Sole Proprietor
          </h1>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 15, margin: 0 }}>
            See exactly how much you could save by switching to an S-Corporation
          </p>
        </div>

        {/* INFO BANNER */}
        <div style={{ background: 'rgba(232,184,75,.1)', border: '1px solid rgba(232,184,75,.3)', borderRadius: 8, padding: '14px 18px', marginBottom: 24, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <span style={{ fontSize: 20 }}>💡</span>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.7)', lineHeight: 1.6 }}>
            <strong style={{ color: '#e8b84b' }}>Did you know?</strong> Gig workers earning $60k+ can save $3,000–$12,000/year in self-employment taxes by electing S-Corp status. Most don't know about this.
          </div>
        </div>

        <div style={card}>
          <div style={hdr}>
            <div style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>GIGWISETAX — S-CORP CALCULATOR</div>
            <div style={{ color: '#fff', fontSize: 18, fontWeight: 800 }}>Enter Your Numbers</div>
          </div>
          <div style={body}>
            <label style={label}>Annual Net Profit (after expenses)</label>
            <div style={{ position: 'relative' as const }}>
              <span style={{ position: 'absolute' as const, left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 16, color: '#9ca3af', fontWeight: 700, marginTop: 4 }}>$</span>
              <input type="number" value={income} onChange={e => setIncome(e.target.value)}
                placeholder="e.g. 80000" style={{ ...inp, paddingLeft: 28 }} />
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' as const }}>
              {['40000','60000','80000','100000','120000','150000'].map(v => (
                <button key={v} onClick={() => setIncome(v)}
                  style={{ background: income===v?'#1e2d5a':'#f3f4f6', color: income===v?'#fff':'#374151',
                    border: income===v?'2px solid #B22234':'2px solid #e5e7eb',
                    borderRadius: 6, padding: '7px 12px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                  ${parseInt(v)/1000}k
                </button>
              ))}
            </div>

            <label style={label}>Your Reasonable Salary as S-Corp Owner <span style={{ color: '#9ca3af', fontWeight: 400 }}>(optional — we'll estimate if blank)</span></label>
            <div style={{ position: 'relative' as const }}>
              <span style={{ position: 'absolute' as const, left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 16, color: '#9ca3af', fontWeight: 700, marginTop: 4 }}>$</span>
              <input type="number" value={salary} onChange={e => setSalary(e.target.value)}
                placeholder="e.g. 50000 (IRS requires reasonable salary)" style={{ ...inp, paddingLeft: 28 }} />
            </div>
            <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 6 }}>
              IRS requires S-Corp owners to pay themselves a "reasonable salary" — typically 40–60% of profit. The rest comes as distributions (not subject to SE tax).
            </p>

            <button onClick={() => income && calculate()} style={{ ...btnR, opacity: income ? 1 : 0.5 }}>
              Calculate My S-Corp Savings →
            </button>
          </div>
        </div>

        {/* RESULTS */}
        {result && (
          <>
            {/* SAVINGS BANNER */}
            <div style={{ ...card, border: result.savings > 0 ? '2px solid #22c55e' : '2px solid #e5e7eb' }}>
              <div style={{ background: result.savings > 0 ? '#f0fdf4' : '#f9fafb', padding: '24px', textAlign: 'center' }}>
                {result.savings > 0 ? (
                  <>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#16a34a', letterSpacing: 1, marginBottom: 6 }}>🎉 ESTIMATED ANNUAL SAVINGS WITH S-CORP</div>
                    <div style={{ fontSize: 56, fontWeight: 900, color: '#16a34a', lineHeight: 1 }}>{fmt(result.savings)}</div>
                    <div style={{ fontSize: 14, color: '#6b7280', marginTop: 8 }}>per year (after ~$2,500 compliance costs)</div>
                    <div style={{ fontSize: 13, color: '#374151', marginTop: 12, fontWeight: 600 }}>
                      Over 5 years: <span style={{ color: '#16a34a', fontWeight: 800 }}>{fmt(result.savings * 5)}</span> in tax savings
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#6b7280', letterSpacing: 1, marginBottom: 6 }}>S-CORP MAY NOT BE WORTH IT YET</div>
                    <div style={{ fontSize: 24, fontWeight: 800, color: '#374151' }}>Stick with Sole Prop for now</div>
                    <div style={{ fontSize: 14, color: '#6b7280', marginTop: 8 }}>S-Corp makes sense when annual profit exceeds $60,000</div>
                  </>
                )}
              </div>
            </div>

            {/* COMPARISON TABLE */}
            <div style={card}>
              <div style={hdr}>
                <div style={{ color: '#fff', fontSize: 16, fontWeight: 800 }}>Side-by-Side Comparison</div>
                <div style={{ color: 'rgba(255,255,255,.5)', fontSize: 12, marginTop: 4 }}>Based on {fmt(result.inc)} annual profit</div>
              </div>
              <div style={body}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                  {/* Sole Prop */}
                  <div style={{ background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: 8, padding: 16 }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: '#B22234', marginBottom: 12, textAlign: 'center' }}>SOLE PROPRIETOR</div>
                    <Row l="SE Tax (15.3%)" v={fmt(result.soleSE)} />
                    <Row l="Federal Income Tax" v={fmt(result.soleFed)} />
                    <Row l="Compliance Cost" v="$0" />
                    <Row l="TOTAL TAX" v={fmt(result.soleTotal)} bold />
                  </div>
                  {/* S-Corp */}
                  <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 8, padding: 16 }}>
                    <div style={{ fontSize: 13, fontWeight: 800, color: '#16a34a', marginBottom: 12, textAlign: 'center' }}>S-CORPORATION</div>
                    <Row l={`Payroll Tax on ${fmt(result.sal)} salary`} v={fmt(result.scorpPayroll)} />
                    <Row l="Federal Income Tax" v={fmt(result.scorpFed)} />
                    <Row l="Est. Compliance Cost" v={fmt(result.scorpCost)} />
                    <Row l="TOTAL TAX" v={fmt(result.scorpTotal + result.scorpCost)} bold />
                  </div>
                </div>

                {result.savings > 0 && (
                  <div style={{ background: '#1e2d5a', borderRadius: 8, padding: 16, marginBottom: 16 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#e8b84b', marginBottom: 8 }}>📋 HOW TO ELECT S-CORP STATUS</div>
                    {[
                      'Form an LLC (if not already) — ~$100-500 depending on state',
                      'File IRS Form 2553 (Election by a Small Business Corporation)',
                      'Set up payroll for your salary (use Gusto or ADP)',
                      'File Form 1120-S annually (use a CPA — ~$1,500-2,500/yr)',
                      'Distribute remaining profit as dividends — no SE tax!',
                    ].map((s, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 7, alignItems: 'flex-start' }}>
                        <span style={{ background: '#B22234', color: '#fff', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>{i+1}</span>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,.8)' }}>{s}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTAs */}
                <a href="https://turbotax.intuit.com/small-business-taxes/?cid=affiliate" target="_blank" rel="noopener"
                  style={{ display: 'block', background: '#B22234', color: '#fff', borderRadius: 6, padding: '14px', fontSize: 15, fontWeight: 800, textDecoration: 'none', textAlign: 'center', marginBottom: 10 }}>
                  File S-Corp Taxes with TurboTax Business →
                </a>
                <a href="/tax-penalty-finder"
                  style={{ display: 'block', background: '#f3f4f6', color: '#1a1a2e', borderRadius: 6, padding: '12px', fontSize: 14, fontWeight: 700, textDecoration: 'none', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                  🔍 Get My Full Tax Penalty Report →
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div style={card}>
              <div style={{ ...hdr, borderBottom: '1px solid rgba(255,255,255,.1)' }}>
                <div style={{ color: '#fff', fontSize: 16, fontWeight: 800 }}>Common Questions</div>
              </div>
              <div style={body}>
                {[
                  { q: 'When does S-Corp make sense?', a: 'Generally when your net profit consistently exceeds $60,000/year. Below that, compliance costs outweigh the savings.' },
                  { q: 'What is a "reasonable salary"?', a: 'The IRS requires you to pay yourself a fair market wage for the work you do. Typically 40-60% of profit. Too low triggers IRS audits.' },
                  { q: 'Can I switch from Sole Prop to S-Corp mid-year?', a: 'Yes, but it\'s cleanest to switch at the start of a tax year. File Form 2553 within 75 days of the start of the tax year.' },
                  { q: 'Do I need a CPA for S-Corp?', a: 'Yes — S-Corp requires Form 1120-S, payroll filings, and W-2 for yourself. A CPA typically costs $1,500-2,500/year but saves far more.' },
                ].map((faq, i) => (
                  <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < 3 ? '1px solid #f3f4f6' : 'none' }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', marginBottom: 5 }}>Q: {faq.q}</div>
                    <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => { setResult(null); setIncome(''); setSalary('') }}
              style={{ background: 'rgba(255,255,255,.1)', color: '#fff', border: '1px solid rgba(255,255,255,.2)', borderRadius: 6, padding: '12px', fontSize: 14, fontWeight: 600, cursor: 'pointer', width: '100%', marginBottom: 16 }}>
              ← Recalculate
            </button>
          </>
        )}

        <div style={{ textAlign: 'center' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,.4)', fontSize: 13, textDecoration: 'none' }}>← Back to GigWiseTax Home</Link>
          <span style={{ color: 'rgba(255,255,255,.2)', margin: '0 12px' }}>|</span>
          <Link href="/tax-penalty-finder" style={{ color: 'rgba(255,255,255,.4)', fontSize: 13, textDecoration: 'none' }}>Tax Penalty Finder →</Link>
        </div>

        <p style={{ color: 'rgba(255,255,255,.2)', fontSize: 11, textAlign: 'center', marginTop: 16 }}>
          For informational purposes only. Consult a licensed CPA before making entity decisions. GigWiseTax.com
        </p>
      </div>
    </div>
  )
}
