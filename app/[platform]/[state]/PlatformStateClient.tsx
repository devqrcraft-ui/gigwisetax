'use client'

import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const PLATFORMS_DATA: Record<string, { name: string; emoji: string; tip: string }> = {
  'doordash':    { name: 'DoorDash',    emoji: '🚗', tip: 'Deduct mileage at $0.67/mile (2024 IRS rate).' },
  'uber':        { name: 'Uber',        emoji: '🚕', tip: 'Track every mile — it adds up fast.' },
  'etsy':        { name: 'Etsy',        emoji: '🛍️', tip: 'Deduct materials, shipping costs, and Etsy fees.' },
  'onlyfans':    { name: 'OnlyFans',    emoji: '⭐', tip: 'Deduct equipment, subscriptions, and home office.' },
  'instacart':   { name: 'Instacart',   emoji: '🛒', tip: 'Deduct mileage and insulated bags.' },
  'airbnb':      { name: 'Airbnb',      emoji: '🏠', tip: 'Deduct mortgage interest, utilities, cleaning pro-rated by rental days.' },
  'amazon-flex': { name: 'Amazon Flex', emoji: '📦', tip: 'Mileage deduction is your biggest tax saver.' },
  'lyft':        { name: 'Lyft',        emoji: '🚖', tip: 'Keep your Lyft earnings summary for accurate reporting.' },
}

const STATES_DATA: Record<string, { name: string; code: string; rate: number; flag: string; note: string }> = {
  'california':     { name: 'California',    code: 'CA', rate: 0.093,  flag: '🌴', note: 'California has one of the highest state income tax rates in the US (up to 13.3%).' },
  'new-york':       { name: 'New York',       code: 'NY', rate: 0.0685, flag: '🗽', note: 'New York City residents pay an additional city income tax on top of state taxes.' },
  'texas':          { name: 'Texas',          code: 'TX', rate: 0,      flag: '⭐', note: 'Texas has no state income tax — a significant advantage for gig workers.' },
  'florida':        { name: 'Florida',        code: 'FL', rate: 0,      flag: '🌊', note: 'Florida has no state income tax, making it one of the best states for gig workers.' },
  'illinois':       { name: 'Illinois',       code: 'IL', rate: 0.0495, flag: '🏙️', note: 'Illinois has a flat 4.95% income tax rate.' },
  'washington':     { name: 'Washington',     code: 'WA', rate: 0,      flag: '🌲', note: 'Washington has no state income tax.' },
  'nevada':         { name: 'Nevada',         code: 'NV', rate: 0,      flag: '🎰', note: 'Nevada has no state income tax.' },
  'georgia':        { name: 'Georgia',        code: 'GA', rate: 0.055,  flag: '🍑', note: 'Georgia has a flat 5.49% income tax rate as of 2024.' },
  'north-carolina': { name: 'North Carolina', code: 'NC', rate: 0.0525, flag: '🌿', note: 'North Carolina has a flat 5.25% income tax rate.' },
  'ohio':           { name: 'Ohio',           code: 'OH', rate: 0.04,   flag: '🏈', note: 'Ohio has graduated income tax with rates up to 4%.' },
  'arizona':        { name: 'Arizona',        code: 'AZ', rate: 0.025,  flag: '🌵', note: 'Arizona reduced its income tax to a flat 2.5% in 2023.' },
  'colorado':       { name: 'Colorado',       code: 'CO', rate: 0.044,  flag: '⛰️', note: 'Colorado has a flat 4.4% income tax rate.' },
  'pennsylvania':   { name: 'Pennsylvania',   code: 'PA', rate: 0.0307, flag: '🔔', note: 'Pennsylvania has a flat 3.07% income tax rate.' },
  'michigan':       { name: 'Michigan',       code: 'MI', rate: 0.0425, flag: '🚗', note: 'Michigan has a flat 4.25% income tax rate.' },
  'minnesota':      { name: 'Minnesota',      code: 'MN', rate: 0.0985, flag: '🏒', note: 'Minnesota has graduated rates up to 9.85%.' },
  'new-jersey':     { name: 'New Jersey',     code: 'NJ', rate: 0.1075, flag: '🌃', note: 'New Jersey has graduated rates up to 10.75%.' },
  'oregon':         { name: 'Oregon',         code: 'OR', rate: 0.099,  flag: '🌲', note: 'Oregon has graduated rates up to 9.9%.' },
  'virginia':       { name: 'Virginia',       code: 'VA', rate: 0.0575, flag: '🏛️', note: 'Virginia has graduated rates up to 5.75%.' },
  'massachusetts':  { name: 'Massachusetts',  code: 'MA', rate: 0.05,   flag: '🦞', note: 'Massachusetts has a flat 5% income tax rate.' },
}

const DEADLINES = [
  { q: 'Q1 2026', due: 'April 15, 2026', now: true  },
  { q: 'Q2 2026', due: 'June 16, 2026',  now: false },
  { q: 'Q3 2026', due: 'Sept 15, 2026',  now: false },
  { q: 'Q4 2026', due: 'Jan 15, 2027',   now: false },
]

export default function PlatformStateClient({ platform: platformSlug, state: stateSlug }: { platform: string; state: string }) {
  const platform = PLATFORMS_DATA[platformSlug]
  const state    = STATES_DATA[stateSlug]
  if (!platform || !state) notFound()

  const [income, setIncome] = useState('')
  const [filing, setFiling] = useState('single')
  const [result, setResult] = useState<any>(null)

  const fmt = (n: number) => '$' + Math.round(n || 0).toLocaleString('en-US')

  const calculate = () => {
    const net     = parseFloat(income) || 0
    if (!net) return
    const seBase  = net * 0.9235
    const seTax   = seBase * 0.153
    const taxable = net - seTax * 0.5
    const fedRate = filing === 'single' ? 0.22 : 0.12
    const federal = taxable * fedRate
    const stateTax = taxable * state.rate
    const total   = federal + seTax + stateTax
    setResult({ seTax, federal, stateTax, total, quarterly: total / 4, rate: ((total / net) * 100).toFixed(1) })
  }

  const card   = { background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const, marginBottom: 20, boxShadow: '0 1px 6px rgba(0,0,0,.05)' }
  const cardHd = { background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }
  const label  = { display: 'block', fontSize: 11, fontWeight: 700, color: '#374151', textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 6 }
  const inp    = { width: '100%', border: '1px solid #d1d5db', borderRadius: 4, padding: '10px 12px', fontSize: 14, color: '#1a1a2e', background: '#fff', boxSizing: 'border-box' as const }
  const btnDark = { background: '#1a1a2e', color: '#fff', padding: '13px 0', borderRadius: 4, fontSize: 14, fontWeight: 800, cursor: 'pointer', textAlign: 'center' as const, width: '100%' }
  const btnRed  = (extra = {}) => ({ background: '#B22234', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: 'pointer', textAlign: 'center' as const, width: '100%', ...extra })

  return (
    <div style={{ background: '#eef0f4', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.35)', marginBottom: 12 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.35)', textDecoration: 'none' }}>Home</Link>{' › '}
            <Link href={`/${platformSlug}`} style={{ color: 'rgba(255,255,255,.35)', textDecoration: 'none' }}>{platform.name}</Link>{' › '}
            <span style={{ color: 'rgba(255,255,255,.6)' }}>{state.name}</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
            <div style={{ width: 4, height: 34, background: '#B22234', borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
            <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.5px', margin: 0 }}>
              {platform.emoji} {platform.name} Tax Calculator — {state.flag} {state.name} 2026
            </h1>
          </div>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, paddingLeft: 16, maxWidth: 780, marginBottom: 14 }}>
            Estimate your {platform.name} self-employment taxes in {state.name}. Includes 15.3% SE tax
            {state.rate > 0
              ? `, federal income tax, and ${state.name}'s ${(state.rate * 100).toFixed(2)}% state income tax.`
              : `. ${state.name} has no state income tax — a big advantage!`
            }{' '}No signup required.
          </p>
          <div style={{ background: 'rgba(232,184,75,.08)', border: '1px solid rgba(232,184,75,.2)', borderRadius: 6, padding: '10px 16px', maxWidth: 700 }}>
            <span style={{ fontSize: 12, color: '#e8b84b', fontWeight: 700 }}>{state.flag} {state.name}: </span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.55)' }}>{state.note}</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px 48px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }} className="main-grid">
        <div>
          {/* TAX RATE SUMMARY */}
          <div style={{ ...card, marginBottom: 20 }}>
            <div style={cardHd}>
              <div style={accent}/>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>📋 {state.name} Tax Rates for {platform.name} Workers</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
              {[
                { label: 'SE Tax Rate',        val: '15.3%',                                                   sub: 'Federal — all workers',    color: '#1a1a2e' },
                { label: 'Federal Income Tax', val: '22%',                                                     sub: 'Typical bracket (single)', color: '#1a1a2e' },
                { label: `${state.code} State Tax`, val: state.rate === 0 ? 'NONE ✓' : `${(state.rate*100).toFixed(2)}%`, sub: state.rate === 0 ? 'No state income tax!' : `${state.name} rate`, color: state.rate === 0 ? '#059669' : '#B22234' },
              ].map((r, i) => (
                <div key={r.label} style={{ padding: '18px 16px', borderRight: i < 2 ? '1px solid #e2e5e9' : 'none', background: i === 2 && state.rate === 0 ? '#f0fdf4' : '#f8fafc' }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase' as const, letterSpacing: '0.7px', marginBottom: 8 }}>{r.label}</div>
                  <div style={{ fontSize: 26, fontWeight: 900, color: r.color, marginBottom: 4 }}>{r.val}</div>
                  <div style={{ fontSize: 11, color: '#9ca3af' }}>{r.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CALCULATOR */}
          <div style={card}>
            <div style={cardHd}>
              <div style={accent}/>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>📊 {platform.name} + {state.name} Tax Calculator</span>
              <span style={{ marginLeft: 'auto', background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.45)', fontSize: 11, padding: '3px 9px', borderRadius: 3 }}>IRS Schedule SE</span>
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }} className="form-grid">
                <div>
                  <label style={label}>💵 Annual Net Income (USD)</label>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#6b7280', fontWeight: 700 }}>$</span>
                    <input style={{ ...inp, paddingLeft: 24 }} type="number" value={income} onChange={e => setIncome(e.target.value)} placeholder="45,000"/>
                  </div>
                </div>
                <div>
                  <label style={label}>📋 Filing Status</label>
                  <select style={inp} value={filing} onChange={e => setFiling(e.target.value)}>
                    <option value="single">Single</option>
                    <option value="married">Married Filing Jointly</option>
                    <option value="hoh">Head of Household</option>
                  </select>
                </div>
              </div>
              <div style={btnDark} onClick={calculate}>📊 Calculate {platform.name} Tax in {state.name}</div>
            </div>
          </div>

          {/* RESULTS */}
          {result && (
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>📈 Your Tax Estimate — {state.name}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid #e2e5e9' }} className="results-row">
                {[
                  { label: 'SE Tax (15.3%)',      val: fmt(result.seTax),    sub: 'Schedule SE',            hi: false, green: false },
                  { label: 'Federal Tax',          val: fmt(result.federal),  sub: 'Estimated',              hi: false, green: false },
                  { label: `${state.code} State`,  val: state.rate === 0 ? '$0 ✓' : fmt(result.stateTax), sub: state.rate === 0 ? 'No state tax!' : 'Estimated', hi: false, green: state.rate === 0 },
                  { label: 'Total Annual',         val: fmt(result.total),    sub: `${result.rate}% effective`, hi: true, green: false },
                ].map((r, i) => (
                  <div key={r.label} style={{ padding: '16px 14px', borderRight: i < 3 ? '1px solid #e2e5e9' : 'none', background: r.hi ? '#fff5f5' : r.green ? '#f0fdf4' : '#f8fafc', borderLeft: r.hi ? '4px solid #B22234' : 'none' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase' as const, letterSpacing: '0.7px', marginBottom: 8 }}>{r.label}</div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: r.hi ? '#B22234' : r.green ? '#059669' : '#1a1a2e', marginBottom: 4 }}>{r.val}</div>
                    <div style={{ fontSize: 11, color: '#9ca3af' }}>{r.sub}</div>
                  </div>
                ))}
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap' as const, gap: 8 }}>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>📆 Quarterly Payment Schedule</span>
                  <div style={{ ...btnRed(), width: 'auto', padding: '7px 14px', fontSize: 12 }}>+ Add All to Google Calendar</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }} className="q-grid">
                  {DEADLINES.map((d, i) => (
                    <div key={d.q} style={{ border: i === 0 ? '2px solid #B22234' : '1px solid #e2e5e9', borderRadius: 6, padding: 14, background: i === 0 ? '#fff5f5' : '#fff', position: 'relative' as const }}>
                      {i === 0 && <div style={{ position: 'absolute', top: -10, left: 8, background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 6px', borderRadius: 3, fontWeight: 800 }}>⚠️ NEXT</div>}
                      <div style={{ fontSize: 12, fontWeight: 800, color: '#1a1a2e', marginBottom: 3 }}>{d.q}</div>
                      <div style={{ fontSize: 11, color: '#9ca3af', marginBottom: 8 }}>{d.due}</div>
                      <div style={{ fontSize: 20, fontWeight: 900, color: i === 0 ? '#B22234' : '#1a1a2e', marginBottom: 10 }}>{fmt(result.quarterly)}</div>
                      <div style={btnRed({ fontSize: 11, padding: '6px 0' })}>+ Calendar</div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 14, background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 4, padding: '10px 14px', fontSize: 12, color: '#92400e', lineHeight: 1.6 }}>
                  ⚠️ <strong>Disclaimer:</strong> Estimates for planning purposes only. Consult a licensed CPA or visit IRS.gov.
                </div>
              </div>
            </div>
          )}

          {/* OTHER STATES */}
          <div style={card}>
            <div style={cardHd}>
              <div style={accent}/>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>🗺️ {platform.name} Tax in Other States</span>
            </div>
            <div style={{ padding: 16, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }} className="states-grid">
              {Object.entries(STATES_DATA).filter(([slug]) => slug !== stateSlug).map(([slug, s]) => (
                <Link key={slug} href={`/${platformSlug}/${slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ border: '1px solid #e2e5e9', borderRadius: 6, padding: '12px 14px', background: '#fff', cursor: 'pointer' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e' }}>{s.flag} {s.name}</div>
                    <div style={{ fontSize: 12, color: s.rate === 0 ? '#059669' : '#B22234', fontWeight: 600, marginTop: 2 }}>
                      {s.rate === 0 ? 'No State Tax ✓' : `${(s.rate*100).toFixed(2)}% state`}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
          <div style={{ background: '#fff', border: '2px dashed #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
            <div style={{ background: '#f8fafc', padding: '6px 14px', borderBottom: '1px solid #e2e5e9', fontSize: 10, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Sponsored — 300×250</div>
            <div style={{ padding: 16 }}>
              <div style={{ background: '#f0f4f8', borderRadius: 4, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic' }}>Ad image / logo here</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#1a1a2e', marginBottom: 6 }}>📊 QuickBooks Self-Employed</div>
              <div style={{ fontSize: 13, color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>Track mileage, expenses, and quarterly taxes. Built for gig workers.</div>
              <a href="https://quickbooks.intuit.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#0d7a40', color: '#fff', padding: '11px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const, cursor: 'pointer' }}>✓ Try Free for 30 Days</div>
              </a>
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
            <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>📌 Other Platforms — {state.name}</span>
            </div>
            {Object.entries(PLATFORMS_DATA).filter(([slug]) => slug !== platformSlug).map(([slug, p]) => (
              <Link key={slug} href={`/${slug}/${stateSlug}`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid #f0f1f3', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', color: '#374151' }}>
                  <span style={{ fontSize: 18 }}>{p.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{p.name} in {state.name}</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #d8dce6', borderRadius: 6, padding: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 10 }}>💡 {platform.name} Tip</div>
            <div style={{ fontSize: 12, color: '#374151', lineHeight: 1.7 }}>{platform.tip}</div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:960px){
          .main-grid{grid-template-columns:1fr!important}
          .form-grid{grid-template-columns:1fr!important}
          .results-row{grid-template-columns:1fr 1fr!important}
          .q-grid{grid-template-columns:1fr 1fr!important}
          .states-grid{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:540px){
          .results-row{grid-template-columns:1fr!important}
          .states-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  )
}
