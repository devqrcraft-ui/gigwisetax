'use client'

import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const PLATFORMS_DATA: Record<string, { name: string; emoji: string; description: string; tip: string }> = {
  'doordash':    { name: 'DoorDash',    emoji: '🚗', description: 'DoorDash delivery drivers', tip: 'DoorDash sends 1099-NEC if you earned $600+. Deduct mileage at $0.67/mile (2024 IRS rate).' },
  'uber':        { name: 'Uber',        emoji: '🚕', description: 'Uber drivers & Uber Eats',  tip: 'Uber sends 1099-K and/or 1099-NEC. Track every mile — it adds up fast.' },
  'etsy':        { name: 'Etsy',        emoji: '🛍️', description: 'Etsy sellers',              tip: 'Etsy reports on 1099-K if you exceed $600. Deduct materials, shipping, and fees.' },
  'onlyfans':    { name: 'OnlyFans',    emoji: '⭐', description: 'OnlyFans creators',          tip: 'OnlyFans income is self-employment income. Deduct equipment, subscriptions, home office.' },
  'instacart':   { name: 'Instacart',   emoji: '🛒', description: 'Instacart shoppers',        tip: 'Instacart shoppers can deduct mileage and insulated bags as business expenses.' },
  'airbnb':      { name: 'Airbnb',      emoji: '🏠', description: 'Airbnb hosts',              tip: 'Airbnb sends 1099-K. Deduct mortgage interest, utilities, cleaning pro-rated by rental days.' },
  'amazon-flex': { name: 'Amazon Flex', emoji: '📦', description: 'Amazon Flex drivers',       tip: 'Amazon Flex pays as independent contractor. Mileage deduction is your biggest tax saver.' },
  'lyft':        { name: 'Lyft',        emoji: '🚖', description: 'Lyft drivers',              tip: 'Lyft sends 1099-NEC and 1099-K. Keep your Lyft earnings summary for accurate reporting.' },
}

const ALL_STATES = [
  { code: 'CA', slug: 'california',     name: 'California',      rate: 0.093  },
  { code: 'NY', slug: 'new-york',       name: 'New York',        rate: 0.0685 },
  { code: 'TX', slug: 'texas',          name: 'Texas',           rate: 0      },
  { code: 'FL', slug: 'florida',        name: 'Florida',         rate: 0      },
  { code: 'IL', slug: 'illinois',       name: 'Illinois',        rate: 0.0495 },
  { code: 'WA', slug: 'washington',     name: 'Washington',      rate: 0      },
  { code: 'NV', slug: 'nevada',         name: 'Nevada',          rate: 0      },
  { code: 'GA', slug: 'georgia',        name: 'Georgia',         rate: 0.055  },
  { code: 'NC', slug: 'north-carolina', name: 'North Carolina',  rate: 0.0525 },
  { code: 'OH', slug: 'ohio',           name: 'Ohio',            rate: 0.04   },
  { code: 'AZ', slug: 'arizona',        name: 'Arizona',         rate: 0.025  },
  { code: 'CO', slug: 'colorado',       name: 'Colorado',        rate: 0.044  },
  { code: 'PA', slug: 'pennsylvania',   name: 'Pennsylvania',    rate: 0.0307 },
  { code: 'MI', slug: 'michigan',       name: 'Michigan',        rate: 0.0425 },
  { code: 'MN', slug: 'minnesota',      name: 'Minnesota',       rate: 0.0985 },
  { code: 'NJ', slug: 'new-jersey',     name: 'New Jersey',      rate: 0.1075 },
  { code: 'OR', slug: 'oregon',         name: 'Oregon',          rate: 0.099  },
  { code: 'VA', slug: 'virginia',       name: 'Virginia',        rate: 0.0575 },
  { code: 'MA', slug: 'massachusetts',  name: 'Massachusetts',   rate: 0.05   },
]

const DEADLINES = [
  { q: 'Q1 2026', due: 'April 15, 2026', now: true  },
  { q: 'Q2 2026', due: 'June 16, 2026',  now: false },
  { q: 'Q3 2026', due: 'Sept 15, 2026',  now: false },
  { q: 'Q4 2026', due: 'Jan 15, 2027',   now: false },
]

export default function PlatformClient({ platform: platformSlug }: { platform: string }) {
  const platform = PLATFORMS_DATA[platformSlug]
  if (!platform) notFound()

  const [income, setIncome]       = useState('')
  const [stateCode, setStateCode] = useState('CA')
  const [filing, setFiling]       = useState('single')
  const [result, setResult]       = useState<any>(null)

  const fmt = (n: number) => '$' + Math.round(n || 0).toLocaleString('en-US')

  const calculate = () => {
    const net = parseFloat(income) || 0
    if (!net) return
    const st      = ALL_STATES.find(s => s.code === stateCode)
    const seBase  = net * 0.9235
    const seTax   = seBase * 0.153
    const taxable = net - seTax * 0.5
    const fedRate = filing === 'single' ? 0.22 : 0.12
    const federal = taxable * fedRate
    const stateTax = taxable * (st?.rate ?? 0.05)
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
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.35)', marginBottom: 10 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.35)', textDecoration: 'none' }}>Home</Link>{' › '}
            <span style={{ color: 'rgba(255,255,255,.6)' }}>{platform.name} Tax Calculator</span>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
            <div style={{ width: 4, height: 34, background: '#B22234', borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
            <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.5px', margin: 0 }}>
              {platform.emoji} {platform.name} Tax Calculator — 2026
            </h1>
          </div>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, paddingLeft: 16, maxWidth: 780, marginBottom: 18 }}>
            Free self-employment tax estimator for {platform.description}. Includes 15.3% SE tax, federal income tax, and all 50 state rates. No signup required.
          </p>
          <div style={{ background: 'rgba(232,184,75,.08)', border: '1px solid rgba(232,184,75,.2)', borderRadius: 6, padding: '10px 16px', maxWidth: 700 }}>
            <span style={{ fontSize: 12, color: '#e8b84b', fontWeight: 700 }}>💡 Pro Tip: </span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.55)' }}>{platform.tip}</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px 48px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }} className="main-grid">
        <div>
          <div style={card}>
            <div style={cardHd}>
              <div style={accent}/>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>📊 {platform.name} Tax Estimator 2026</span>
              <span style={{ marginLeft: 'auto', background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.45)', fontSize: 11, padding: '3px 9px', borderRadius: 3 }}>IRS Schedule SE</span>
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }} className="form-grid">
                <div>
                  <label style={label}>🗺️ State of Residence</label>
                  <select style={inp} value={stateCode} onChange={e => setStateCode(e.target.value)}>
                    {ALL_STATES.map(s => (
                      <option key={s.code} value={s.code}>{s.name} {s.rate === 0 ? '(No State Tax)' : `(${(s.rate*100).toFixed(2)}%)`}</option>
                    ))}
                  </select>
                </div>
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
              <div style={btnDark} onClick={calculate}>📊 Calculate My {platform.name} Tax</div>
            </div>
          </div>

          {result && (
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>📈 Your {platform.name} Tax Estimate</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid #e2e5e9' }} className="results-row">
                {[
                  { label: 'SE Tax (15.3%)', val: fmt(result.seTax),    sub: 'Schedule SE' },
                  { label: 'Federal Tax',    val: fmt(result.federal),  sub: 'Estimated'   },
                  { label: `${stateCode} State`, val: fmt(result.stateTax), sub: 'Estimated' },
                  { label: 'Total Annual',   val: fmt(result.total),    sub: `${result.rate}% effective`, hi: true },
                ].map((r: any, i) => (
                  <div key={r.label} style={{ padding: '16px 14px', borderRight: i < 3 ? '1px solid #e2e5e9' : 'none', background: r.hi ? '#fff5f5' : '#f8fafc', borderLeft: r.hi ? '4px solid #B22234' : 'none' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase' as const, letterSpacing: '0.7px', marginBottom: 8 }}>{r.label}</div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: r.hi ? '#B22234' : '#1a1a2e', marginBottom: 4 }}>{r.val}</div>
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

          <div style={card}>
            <div style={cardHd}>
              <div style={accent}/>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>🗺️ {platform.name} Tax by State</span>
            </div>
            <div style={{ padding: 16, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }} className="states-grid">
              {ALL_STATES.map(s => (
                <Link key={s.slug} href={`/${platformSlug}/${s.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ border: '1px solid #e2e5e9', borderRadius: 6, padding: '12px 14px', background: '#fff', cursor: 'pointer' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e' }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: s.rate === 0 ? '#059669' : '#B22234', fontWeight: 600, marginTop: 2 }}>
                      {s.rate === 0 ? 'No State Tax ✓' : `${(s.rate*100).toFixed(2)}% state`}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

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
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>📌 Other Platforms</span>
            </div>
            {Object.entries(PLATFORMS_DATA).filter(([slug]) => slug !== platformSlug).map(([slug, p]) => (
              <Link key={slug} href={`/${slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid #f0f1f3', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', color: '#374151' }}>
                  <span style={{ fontSize: 18 }}>{p.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{p.name} Tax Calculator</span>
                </div>
              </Link>
            ))}
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
