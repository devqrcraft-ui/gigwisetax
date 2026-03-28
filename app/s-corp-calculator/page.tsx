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
    const soleSE    = inc * 0.9235 * 0.153
    const soleFed   = (inc - soleSE * 0.5) * 0.22
    const soleTotal = soleSE + soleFed
    const scorpPayroll = sal * 0.153
    const scorpFed     = (inc - sal * 0.5) * 0.22
    const scorpTotal   = scorpPayroll + scorpFed
    const scorpCost    = 2500
    const savings = soleTotal - scorpTotal - scorpCost
    setResult({ inc, sal, soleSE, soleFed, soleTotal, scorpPayroll, scorpFed, scorpTotal, scorpCost, savings })
  }

  const bg   = { minHeight: '100vh', background: '#0d1117', padding: '40px 20px' }
  const wrap = { maxWidth: 680, margin: '0 auto' }
  const card = { background: '#0d1b3e', borderRadius: 8, overflow: 'hidden' as const, boxShadow: '0 4px 24px rgba(0,0,0,.3)', marginBottom: 24 }
  const hdr  = { background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', padding: '20px 24px', borderBottom: '3px solid #B22234' }
  const body = { padding: '24px' }
  const inp  = { width: '100%', border: '2px solid #d1d5db', borderRadius: 6, padding: '13px 16px', fontSize: 18, fontWeight: 700, color: '#ffffff', background: '#ffffff', boxSizing: 'border-box' as const, marginTop: 8, outline: 'none' }
  const btnR = { background: '#B22234', color: '#fff', border: 'none', borderRadius: 6, padding: '15px', fontSize: 16, fontWeight: 800, cursor: 'pointer', width: '100%', marginTop: 16 } as const
  const lbl  = { fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: 20 } as const

  const Row = ({ l, v, b }: { l: string; v: string; b?: boolean }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <span style={{ fontSize: 14, color: b ? '#ffffff' : 'rgba(255,255,255,0.5)', fontWeight: b ? 700 : 400 }}>{l}</span>
      <span style={{ fontSize: 14, fontWeight: b ? 800 : 600, color: b ? '#ffffff' : 'rgba(255,255,255,0.75)' }}>{v}</span>
    </div>
  )

  return (
    <div style={bg}><div style={wrap}>

      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div style={{ display: 'inline-block', background: '#B22234', color: '#fff', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, padding: '5px 14px', borderRadius: 20, marginBottom: 14 }}>FREE CALCULATOR</div>
        <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 900, margin: '0 0 10px' }}>S-Corp vs Sole Proprietor</h1>
        <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 15, margin: 0 }}>See exactly how much you could save by switching to an S-Corporation</p>
      </div>

      <div style={{ background: 'rgba(232,184,75,.1)', border: '1px solid rgba(232,184,75,.4)', borderRadius: 8, padding: '16px 20px', marginBottom: 24, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <span style={{ fontSize: 22, flexShrink: 0 }}></span>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,.8)', lineHeight: 1.6, margin: 0 }}>
          <strong style={{ color: '#e8b84b' }}>Did you know?</strong> Gig workers earning $60k+ can save $3,000–$12,000/year in self-employment taxes by electing S-Corp status. Most don't know about this strategy.
        </p>
      </div>

      <div style={card}>
        <div style={hdr}>
          <div style={{ color: '#e8b84b', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, marginBottom: 6 }}>GIGWISETAX — S-CORP CALCULATOR</div>
          <div style={{ color: '#fff', fontSize: 20, fontWeight: 800 }}>Enter Your Numbers</div>
        </div>
        <div style={body}>

          <label style={lbl}>Annual Net Profit (after all expenses)</label>
          <input
            type="number"
            value={income}
            onChange={e => setIncome(e.target.value)}
            placeholder="e.g. 80000"
            style={inp}
          />
          <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' as const }}>
            {['40000','60000','80000','100000','120000','150000'].map(v => (
              <button key={v} onClick={() => setIncome(v)}
                style={{ background: income === v ? '#1e2d5a' : 'rgba(255,255,255,0.08)', color: income === v ? '#fff' : 'rgba(255,255,255,0.75)', border: income === v ? '2px solid #B22234' : '2px solid rgba(255,255,255,0.15)', borderRadius: 6, padding: '8px 14px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
                ${parseInt(v)/1000}k
              </button>
            ))}
          </div>

          <label style={lbl}>Your Reasonable Salary as S-Corp Owner <span style={{ color: '#9ca3af', fontWeight: 400 }}>(optional — we'll estimate if blank)</span></label>
          <input
            type="number"
            value={salary}
            onChange={e => setSalary(e.target.value)}
            placeholder="e.g. 50000"
            style={inp}
          />
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 8, lineHeight: 1.6 }}>
            IRS requires S-Corp owners to pay themselves a "reasonable salary" — typically 40–60% of profit. The rest is taken as distributions (not subject to 15.3% SE tax).
          </p>

          {income && (
            <div style={{ background: 'rgba(5,150,105,0.12)', border: '1px solid #86efac', borderRadius: 6, padding: '12px 16px', marginTop: 12 }}>
              <span style={{ fontSize: 13, color: '#16a34a', fontWeight: 600 }}>
                 Estimated S-Corp salary: {fmt(Math.min(parseFloat(income) * 0.5, 80000))} — distributions: {fmt(Math.max(parseFloat(income) - Math.min(parseFloat(income) * 0.5, 80000), 0))}
              </span>
            </div>
          )}

          <button onClick={() => income && calculate()} style={{ ...btnR, opacity: income ? 1 : 0.5 }}>
            Calculate My S-Corp Savings →
          </button>
        </div>
      </div>

      {result && (<>
        {/* SAVINGS BANNER */}
        <div style={{ ...card, border: result.savings > 0 ? '3px solid #22c55e' : '1px solid rgba(255,255,255,0.12)' }}>
          <div style={{ background: result.savings > 0 ? 'linear-gradient(135deg,#16a34a,#15803d)' : 'rgba(255,255,255,0.06)', padding: '28px 24px', textAlign: 'center' }}>
            {result.savings > 0 ? (<>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,.8)', letterSpacing: 1, marginBottom: 8 }}> ESTIMATED ANNUAL SAVINGS WITH S-CORP</div>
              <div style={{ fontSize: 60, fontWeight: 900, color: '#fff', lineHeight: 1 }}>{fmt(result.savings)}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,.8)', marginTop: 8 }}>per year (after ~$2,500 compliance costs)</div>
              <div style={{ fontSize: 15, color: '#fff', marginTop: 14, fontWeight: 700 }}>
                Over 5 years: <span style={{ background: 'rgba(255,255,255,.2)', padding: '2px 10px', borderRadius: 4 }}>{fmt(result.savings * 5)}</span> in tax savings
              </div>
            </>) : (<>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: 1, marginBottom: 8 }}>S-CORP MAY NOT BE WORTH IT YET</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: 'rgba(255,255,255,0.85)' }}>Stick with Sole Prop for now</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 8 }}>S-Corp makes financial sense when annual profit consistently exceeds $60,000</div>
            </>)}
          </div>
        </div>

        {/* COMPARISON */}
        <div style={card}>
          <div style={hdr}>
            <div style={{ color: '#fff', fontSize: 16, fontWeight: 800 }}>Side-by-Side Tax Comparison</div>
            <div style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, marginTop: 4 }}>Based on {fmt(result.inc)} annual profit</div>
          </div>
          <div style={body}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
              <div style={{ background: 'rgba(178,34,52,0.12)', border: '2px solid #fca5a5', borderRadius: 8, padding: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#B22234', marginBottom: 12, textAlign: 'center' as const }}>SOLE PROPRIETOR</div>
                <Row l="SE Tax (15.3%)" v={fmt(result.soleSE)} />
                <Row l="Federal Income Tax" v={fmt(result.soleFed)} />
                <Row l="Compliance Cost" v="$0" />
                <Row l="TOTAL TAX" v={fmt(result.soleTotal)} b />
              </div>
              <div style={{ background: 'rgba(5,150,105,0.12)', border: '2px solid #86efac', borderRadius: 8, padding: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#16a34a', marginBottom: 12, textAlign: 'center' as const }}>S-CORPORATION</div>
                <Row l={`Payroll Tax on ${fmt(result.sal)}`} v={fmt(result.scorpPayroll)} />
                <Row l="Federal Income Tax" v={fmt(result.scorpFed)} />
                <Row l="Est. Compliance" v={fmt(result.scorpCost)} />
                <Row l="TOTAL TAX" v={fmt(result.scorpTotal + result.scorpCost)} b />
              </div>
            </div>

            {result.savings > 0 && (
              <div style={{ background: '#1e2d5a', borderRadius: 8, padding: 18, marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#e8b84b', marginBottom: 10 }}> HOW TO ELECT S-CORP STATUS — 5 STEPS</div>
                {[
                  'Form an LLC (if not already) — ~$100-500 depending on state',
                  'File IRS Form 2553 within 75 days of tax year start',
                  'Set up payroll for your salary (Gusto or ADP — ~$50/mo)',
                  'File Form 1120-S annually with a CPA (~$1,500-2,500/yr)',
                  'Take remaining profit as distributions — no 15.3% SE tax!',
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 8, alignItems: 'flex-start' }}>
                    <span style={{ background: '#B22234', color: '#fff', borderRadius: '50%', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>{i+1}</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,.85)', lineHeight: 1.5 }}>{s}</span>
                  </div>
                ))}
              </div>
            )}

            <a href="https://1099deductions.com" target="_blank" rel="noopener"
              style={{ display: 'block', background: '#B22234', color: '#fff', borderRadius: 6, padding: '14px', fontSize: 15, fontWeight: 800, textDecoration: 'none', textAlign: 'center' as const, marginBottom: 10 }}>
              File S-Corp Taxes with TurboTax Business →
            </a>
            <a href="/tax-penalty-finder"
              style={{ display: 'block', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.9)', borderRadius: 6, padding: '12px', fontSize: 14, fontWeight: 700, textDecoration: 'none', textAlign: 'center' as const, border: '1px solid rgba(255,255,255,0.12)' }}>
               Get My Full Tax Penalty Report →
            </a>

            <button onClick={() => { setResult(null); setIncome(''); setSalary('') }}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '11px', fontSize: 14, fontWeight: 600, cursor: 'pointer', width: '100%', marginTop: 10 }}>
              ← Recalculate
            </button>
          </div>
        </div>
      </>)}

      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,.4)', fontSize: 13, textDecoration: 'none' }}>← Back to GigWiseTax Home</Link>
        <span style={{ color: 'rgba(255,255,255,.2)', margin: '0 12px' }}>|</span>
        <Link href="/deductions" style={{ color: 'rgba(255,255,255,.4)', fontSize: 13, textDecoration: 'none' }}>Deductions Checklist →</Link>
      </div>
      <p style={{ color: 'rgba(255,255,255,.2)', fontSize: 11, textAlign: 'center', marginTop: 8 }}>
        For informational purposes only. Consult a licensed CPA before making entity decisions. GigWiseTax.com
      </p>
    </div></div>
  )
}
