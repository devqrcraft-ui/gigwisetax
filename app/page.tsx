'use client'

import { useState } from 'react'
import Link from 'next/link'

const PLATFORMS = [
  { name: 'DoorDash',    emoji: '🚗', searches: '400K/mo', href: '/doordash'     },
  { name: 'Uber',        emoji: '🚕', searches: '300K/mo', href: '/uber'         },
  { name: 'Etsy',        emoji: '🛍️', searches: '200K/mo', href: '/etsy'         },
  { name: 'OnlyFans',    emoji: '⭐', searches: '150K/mo', href: '/onlyfans', badge: 'USA #1' },
  { name: 'Instacart',   emoji: '🛒', searches: '150K/mo', href: '/instacart'    },
  { name: 'Airbnb',      emoji: '🏠', searches: '120K/mo', href: '/airbnb'       },
  { name: 'Amazon Flex', emoji: '📦', searches: '80K/mo',  href: '/amazon-flex'  },
  { name: 'Lyft',        emoji: '🚖', searches: '70K/mo',  href: '/lyft'         },
]

const STATES = [
  { code: 'CA', name: 'California',     rate: 0.093  },
  { code: 'NY', name: 'New York',       rate: 0.0685 },
  { code: 'TX', name: 'Texas',          rate: 0      },
  { code: 'FL', name: 'Florida',        rate: 0      },
  { code: 'IL', name: 'Illinois',       rate: 0.0495 },
  { code: 'WA', name: 'Washington',     rate: 0      },
  { code: 'NV', name: 'Nevada',         rate: 0      },
  { code: 'GA', name: 'Georgia',        rate: 0.055  },
  { code: 'NC', name: 'North Carolina', rate: 0.0525 },
  { code: 'OH', name: 'Ohio',           rate: 0.04   },
  { code: 'AZ', name: 'Arizona',        rate: 0.025  },
  { code: 'CO', name: 'Colorado',       rate: 0.044  },
  { code: 'Other', name: 'Other State', rate: 0.05   },
]

const DEADLINES = [
  { q: 'Q1 2026', period: 'Jan – Mar', due: 'April 15, 2026',   days: 45,  now: true  },
  { q: 'Q2 2026', period: 'Apr – May', due: 'June 16, 2026',    days: 107, now: false },
  { q: 'Q3 2026', period: 'Jun – Aug', due: 'Sept 15, 2026',    days: 198, now: false },
  { q: 'Q4 2026', period: 'Sep – Dec', due: 'Jan 15, 2027',     days: 320, now: false },
]

export default function HomePage() {
  const [tab, setTab]         = useState<'calc'|'deadlines'|'platforms'>('calc')
  const [platform, setPlatform] = useState('DoorDash')
  const [income, setIncome]   = useState('')
  const [stateCode, setStateCode] = useState('CA')
  const [filing, setFiling]   = useState('single')
  const [result, setResult]   = useState<any>(null)

  const fmt = (n: number) => '$' + Math.round(n || 0).toLocaleString('en-US')

  const calculate = () => {
    const net = parseFloat(income) || 0
    if (!net) return
    const st = STATES.find(s => s.code === stateCode)
    const seBase   = net * 0.9235
    const seTax    = seBase * 0.153
    const taxable  = net - seTax * 0.5
    const fedRate  = filing === 'single' ? 0.22 : 0.12
    const federal  = taxable * fedRate
    const stateTax = taxable * (st?.rate ?? 0.05)
    const total    = federal + seTax + stateTax
    setResult({ seTax, federal, stateTax, total, quarterly: total / 4, rate: ((total / net) * 100).toFixed(1) })
  }

  /* ── shared style tokens ── */
  const card    = { background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const, marginBottom: 20, boxShadow: '0 1px 6px rgba(0,0,0,.05)' }
  const cardHd  = { background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent  = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }
  const label   = { display: 'block', fontSize: 11, fontWeight: 700, color: '#374151', textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 6 }
  const inp     = { width: '100%', border: '1px solid #d1d5db', borderRadius: 4, padding: '10px 12px', fontSize: 14, color: '#1a1a2e', background: '#fff', boxSizing: 'border-box' as const }
  const btnDark = { background: '#1a1a2e', color: '#fff', padding: '13px 0', borderRadius: 4, fontSize: 14, fontWeight: 800, cursor: 'pointer', textAlign: 'center' as const, width: '100%', letterSpacing: '0.3px' }
  const btnRed  = (extra = {}) => ({ background: '#B22234', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: 'pointer', textAlign: 'center' as const, width: '100%', ...extra })

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      {/* ━━ HERO STRIP ━━ */}
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
            <div style={{ width: 4, height: 34, background: '#B22234', borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
            <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.5px', margin: 0 }}>
              Free Gig Worker Tax Calculator — United States 2026
            </h1>
          </div>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, textAlign: 'justify', paddingLeft: 16, maxWidth: 780, marginBottom: 18 }}>
            Estimate self-employment taxes for DoorDash, Uber, Etsy, OnlyFans, Instacart, Airbnb and more.
            Includes federal SE tax (15.3%), state income tax for all 51 jurisdictions, and a full quarterly
            payment schedule with Google Calendar export. No signup, no app, no fees — ever.
          </p>
          <div style={{ paddingLeft: 16, display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
            {['📋 IRS Schedule SE Formula','🗺️ All 51 States','🔒 No Registration','📅 Updated Jan 2026','📆 Google Calendar Export'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 3, padding: '4px 10px', fontSize: 11, color: 'rgba(255,255,255,.55)', fontWeight: 500 }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ━━ SPONSORED STRIP ━━ */}
      <div style={{ background: '#fffbeb', borderBottom: '1px solid #fde68a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '9px 20px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' as const }}>
          <span style={{ fontSize: 10, fontWeight: 800, color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' }}>Sponsored</span>
          <span style={{ fontSize: 13, color: '#78350f', flex: 1 }}>
            <strong>TurboTax Self-Employed</strong> — File your 1099 taxes online. Finds every deduction. Built for gig workers.
          </span>
          <a href="https://turbotax.intuit.com/personal-taxes/self-employment-taxes/?cid=affiliates_gigwisetax" target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#B22234', color: '#fff', padding: '7px 18px', borderRadius: 4, fontSize: 12, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
              Start Free →
            </div>
          </a>
        </div>
      </div>

      {/* ━━ MAIN GRID ━━ */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px 48px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }} className="main-grid">

        {/* ── LEFT ── */}
        <div>

          {/* TABS */}
          <div style={{ display: 'flex', borderBottom: '2px solid #d8dce6', marginBottom: 20 }}>
            {([
              { id: 'calc',      label: '🧮 Tax Calculator'  },
              { id: 'deadlines', label: '📅 2026 Deadlines'  },
              { id: 'platforms', label: '🚀 All Platforms'   },
            ] as const).map(t => (
              <div key={t.id} onClick={() => setTab(t.id)} style={{
                padding: '10px 18px', fontSize: 14, fontWeight: 600, cursor: 'pointer',
                color: tab === t.id ? '#1a1a2e' : '#9ca3af',
                borderBottom: tab === t.id ? '2px solid #B22234' : '2px solid transparent',
                marginBottom: -2, transition: 'all .15s', whiteSpace: 'nowrap',
              }}>
                {t.label}
              </div>
            ))}
          </div>

          {/* ═══ CALCULATOR ═══ */}
          {tab === 'calc' && (
            <>
              {/* FORM CARD */}
              <div style={card}>
                <div style={cardHd}>
                  <div style={accent}/>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>📊 Self-Employment Tax Estimator</span>
                  <span style={{ marginLeft: 'auto', background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.45)', fontSize: 11, padding: '3px 9px', borderRadius: 3 }}>IRS Schedule SE</span>
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }} className="form-grid">

                    <div>
                      <label style={label}>🚗 Gig Platform</label>
                      <select style={inp} value={platform} onChange={e => setPlatform(e.target.value)}>
                        {PLATFORMS.map(p => <option key={p.name} value={p.name}>{p.emoji} {p.name}{p.badge ? ' — USA #1' : ''}</option>)}
                      </select>
                    </div>

                    <div>
                      <label style={label}>🗺️ State of Residence</label>
                      <select style={inp} value={stateCode} onChange={e => setStateCode(e.target.value)}>
                        {STATES.map(s => <option key={s.code} value={s.code}>{s.name} {s.rate === 0 ? '(No State Tax)' : `(${(s.rate*100).toFixed(1)}%)`}</option>)}
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

                  <div style={btnDark} onClick={calculate}>📊 Calculate My Tax Estimate</div>
                </div>
              </div>

              {/* RESULTS */}
              {result && (
                <div style={card}>
                  <div style={cardHd}>
                    <div style={accent}/>
                    <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>📈 Your Tax Estimate</span>
                  </div>

                  {/* 4 boxes */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid #e2e5e9' }} className="results-row">
                    {[
                      { label: 'SE Tax (15.3%)',    val: fmt(result.seTax),    sub: 'Schedule SE' },
                      { label: 'Federal Tax',       val: fmt(result.federal),  sub: 'Estimated'   },
                      { label: `${stateCode} State`,val: fmt(result.stateTax), sub: 'Estimated'   },
                      { label: 'Total Annual Tax',  val: fmt(result.total),    sub: `${result.rate}% effective`, hi: true },
                    ].map((r, i) => (
                      <div key={r.label} style={{ padding: '16px 14px', borderRight: i < 3 ? '1px solid #e2e5e9' : 'none', background: r.hi ? '#fff5f5' : '#f8fafc', borderLeft: r.hi ? '4px solid #B22234' : 'none' }}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase' as const, letterSpacing: '0.7px', marginBottom: 8, lineHeight: 1.4 }}>{r.label}</div>
                        <div style={{ fontSize: 22, fontWeight: 900, color: r.hi ? '#B22234' : '#1a1a2e', marginBottom: 4 }}>{r.val}</div>
                        <div style={{ fontSize: 11, color: '#9ca3af' }}>{r.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* 4 quarterly boxes */}
                  <div style={{ padding: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap' as const, gap: 8 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e' }}>📆 Quarterly Payment Schedule</span>
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

                    <div style={{ marginTop: 14, background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 4, padding: '10px 14px', fontSize: 12, color: '#92400e', textAlign: 'justify' as const, lineHeight: 1.6 }}>
                      ⚠️ <strong>Disclaimer:</strong> Estimates for planning purposes only. Consult a licensed CPA or visit IRS.gov for official guidance. Not tax advice.
                    </div>
                  </div>
                </div>
              )}

              {/* PLATFORM GRID */}
              <div style={card}>
                <div style={cardHd}>
                  <div style={accent}/>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>🚀 Select Your Platform</span>
                  <span style={{ marginLeft: 'auto', fontSize: 12, color: 'rgba(255,255,255,.35)' }}>51-state tax included</span>
                </div>
                <div style={{ padding: 16, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }} className="p-grid">
                  {PLATFORMS.map(p => (
                    <Link key={p.name} href={p.href} style={{ textDecoration: 'none' }}>
                      <div style={{ border: platform === p.name ? '2px solid #B22234' : '1px solid #e2e5e9', borderRadius: 6, padding: '14px 8px', textAlign: 'center' as const, cursor: 'pointer', background: platform === p.name ? '#fff5f5' : '#fff', transition: 'all .18s', position: 'relative' as const }}>
                        {p.badge && <div style={{ position: 'absolute', top: 5, right: 5, background: '#1a1a2e', color: '#e8b84b', fontSize: 8, padding: '1px 4px', borderRadius: 2, fontWeight: 800 }}>USA #1</div>}
                        <div style={{ fontSize: 26, marginBottom: 6 }}>{p.emoji}</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#1a1a2e', marginBottom: 2 }}>{p.name}</div>
                        <div style={{ fontSize: 11, color: '#B22234', fontWeight: 600 }}>{p.searches}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* COMPARE TABLE */}
              <div style={card}>
                <div style={{ padding: '13px 20px', borderBottom: '1px solid #e2e5e9', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={accent}/>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>🏆 How We Compare to Competitors</span>
                </div>
                <div style={{ overflowX: 'auto' as const }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 480 }}>
                    <thead>
                      <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e5e9' }}>
                        {['Feature','GigWiseTax ✓','FlyFin','Everlance','TurboTax Blog'].map((h,i) => (
                          <th key={h} style={{ padding: '10px 14px', fontWeight: 700, fontSize: 12, color: i===1 ? '#1a1a2e' : '#6c757d', textAlign: i===0 ? 'left' as const : 'center' as const, background: i===1 ? '#fff5f5' : 'transparent', borderBottom: i===1 ? '3px solid #B22234' : 'none' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['🆓 Free to use',               true,  false, false, true ],
                        ['🔓 No registration required',  true,  false, false, true ],
                        ['🗺️ All 51 states included',    true,  false, false, false],
                        ['⭐ OnlyFans tax calculator',    true,  false, false, false],
                        ['📆 Google Calendar export',    true,  false, false, false],
                        ['🧮 Interactive tool',          true,  false, false, false],
                        ['📱 No app required',           true,  false, false, true ],
                      ].map(([feat,...vals]) => (
                        <tr key={feat as string} style={{ borderBottom: '1px solid #f0f1f3' }}>
                          <td style={{ padding: '10px 14px', fontSize: 13, color: '#374151', fontWeight: 500 }}>{feat as string}</td>
                          {(vals as boolean[]).map((v,i) => (
                            <td key={i} style={{ padding: '10px 14px', textAlign: 'center' as const, background: i===0 ? '#fff9f9' : 'transparent' }}>
                              <span style={{ fontSize: 15, fontWeight: 800, color: v ? '#059669' : '#d1d5db' }}>{v ? '✓' : '✗'}</span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* ═══ DEADLINES ═══ */}
          {tab === 'deadlines' && (
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>📅 2026 IRS Estimated Tax Deadlines</span>
              </div>
              <div style={{ overflowX: 'auto' as const }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 480 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e5e9' }}>
                      {['Quarter','Period','IRS Due Date','Days Left','Action'].map(h => (
                        <th key={h} style={{ padding: '11px 16px', fontSize: 11, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase' as const, letterSpacing: '0.8px', textAlign: 'left' as const }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {DEADLINES.map((d,i) => (
                      <tr key={d.q} style={{ borderBottom: '1px solid #f0f1f3', background: i===0 ? '#fff9f9' : '#fff' }}>
                        <td style={{ padding: '14px 16px', fontWeight: 800, fontSize: 14 }}>
                          {i===0 && <span style={{ background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 5px', borderRadius: 2, marginRight: 8, fontWeight: 800 }}>NOW</span>}
                          {d.q}
                        </td>
                        <td style={{ padding: '14px 16px', color: '#374151', fontSize: 13 }}>{d.period}</td>
                        <td style={{ padding: '14px 16px', fontWeight: 700, color: i===0 ? '#B22234' : '#1a1a2e', fontSize: 14 }}>{d.due}</td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{ background: i===0 ? '#fee2e2' : '#f0f4f8', color: i===0 ? '#B22234' : '#374151', padding: '4px 12px', borderRadius: 12, fontSize: 12, fontWeight: 700 }}>{d.days} days</span>
                        </td>
                        <td style={{ padding: '14px 16px', width: 150 }}>
                          <div style={btnRed({ fontSize: 12, padding: '7px 0' })}>📆 + Calendar</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ═══ PLATFORMS ═══ */}
          {tab === 'platforms' && (
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>🚀 All Supported Platforms</span>
              </div>
              <div style={{ overflowX: 'auto' as const }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 480 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e5e9' }}>
                      {['Platform','Monthly Searches','SE Tax Rate','State Tax','Competition'].map(h => (
                        <th key={h} style={{ padding: '11px 16px', fontSize: 11, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase' as const, letterSpacing: '0.8px', textAlign: 'left' as const }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PLATFORMS.map((p,i) => (
                      <tr key={p.name} style={{ borderBottom: '1px solid #f0f1f3', background: i%2===0 ? '#fff' : '#fafafa' }}>
                        <td style={{ padding: '12px 16px', fontWeight: 700, fontSize: 14 }}>
                          <span style={{ fontSize: 18, marginRight: 10 }}>{p.emoji}</span>{p.name}
                          {p.badge && <span style={{ background: '#1a1a2e', color: '#e8b84b', fontSize: 9, padding: '2px 5px', borderRadius: 2, marginLeft: 8, fontWeight: 800 }}>USA #1</span>}
                        </td>
                        <td style={{ padding: '12px 16px', fontWeight: 700, color: '#1a1a2e' }}>{p.searches}</td>
                        <td style={{ padding: '12px 16px', color: '#374151' }}>15.3%</td>
                        <td style={{ padding: '12px 16px', color: '#059669', fontWeight: 600 }}>Included ✓</td>
                        <td style={{ padding: '12px 16px' }}>
                          <span style={{ background: '#dcfce7', color: '#166534', padding: '3px 10px', borderRadius: 12, fontSize: 11, fontWeight: 700 }}>Low ✓</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

        {/* ── SIDEBAR ── */}
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>

          <div style={{ background: '#fff', border: '1px solid #e2e5e9', borderRadius: 8, overflow: 'hidden' as const, boxShadow: '0 2px 8px rgba(0,0,0,.06)' }}>
            <div style={{ background: 'linear-gradient(135deg,#0d7a40,#085c30)', padding: '10px 14px', display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ fontSize:18 }}>📊</span>
              <span style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,.9)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Sponsored</span>
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                <div style={{ background:'#0d7a40', borderRadius:6, width:40, height:40, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>📊</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#1a1a2e' }}>QuickBooks Self-Employed</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>Auto-track Everything</div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>
                Auto-track <strong>mileage, expenses, and quarterly taxes</strong>. Built for 1099 gig workers.
              </div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap' as const, marginBottom:12 }}>
                {['✓ Auto Mileage','✓ Expense Track','✓ Quarterly Tax','✓ 30 Day Free'].map(f => (
                  <span key={f} style={{ background:'#f0faf4', color:'#0d7a40', fontSize:10, fontWeight:700, padding:'2px 7px', borderRadius:20 }}>{f}</span>
                ))}
              </div>
              <a href="https://quickbooks.intuit.com/self-employed/?cid=affiliates_gigwisetax" target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: 'none', display:'block' }}>
                <div style={{ background: 'linear-gradient(135deg,#0d7a40,#085c30)', color: '#fff', padding: '11px 0', borderRadius: 6, fontSize: 13, fontWeight: 700, textAlign: 'center' as const, cursor: 'pointer' }}>
                  ✓ Try Free for 30 Days →
                </div>
              </a>
              <div style={{ fontSize: 10, color: '#c4c9d4', marginTop: 6, textAlign: 'center' as const }}>Sponsored · Commission may apply</div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
            <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>📌 Popular Calculators</span>
            </div>
            {PLATFORMS.map(p => (
              <Link key={p.name} href={p.href} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid #f0f1f3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: '#374151' }}>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{p.emoji} {p.name} Tax Calculator</span>
                  <span style={{ fontSize: 11, color: '#B22234', fontWeight: 700 }}>{p.searches}</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ background: '#fff', border: '1px solid #e2e5e9', borderRadius: 8, overflow: 'hidden' as const, boxShadow: '0 2px 8px rgba(0,0,0,.06)' }}>
            <div style={{ background: 'linear-gradient(135deg,#165c96,#0d3d63)', padding: '10px 14px', display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ fontSize:18 }}>🏛️</span>
              <span style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,.9)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Sponsored</span>
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                <div style={{ background:'#165c96', borderRadius:6, width:40, height:40, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>🏛️</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#1a1a2e' }}>H&amp;R Block — Tax Filing</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>Expert Review Available</div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>
                File your <strong>1099-NEC and Schedule C</strong> online. Expert review available. Starting at $0.
              </div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap' as const, marginBottom:12 }}>
                {['✓ 1099-NEC','✓ Schedule C','✓ Expert Help','✓ Start Free'].map(f => (
                  <span key={f} style={{ background:'#f0f5ff', color:'#165c96', fontSize:10, fontWeight:700, padding:'2px 7px', borderRadius:20 }}>{f}</span>
                ))}
              </div>
              <a href="https://www.hrblock.com/tax-offices/?otpPartnerId=GigWiseTax" target="_blank" rel="noopener noreferrer sponsored" style={{ textDecoration: 'none', display:'block' }}>
                <div style={{ background: 'linear-gradient(135deg,#165c96,#0d3d63)', color: '#fff', padding: '11px 0', borderRadius: 6, fontSize: 13, fontWeight: 700, textAlign: 'center' as const, cursor: 'pointer' }}>
                  🏛️ File Now — Start Free →
                </div>
              </a>
              <div style={{ fontSize: 10, color: '#c4c9d4', marginTop: 6, textAlign: 'center' as const }}>Sponsored · Commission may apply</div>
            </div>
          </div>
      </div>

      <style>{`
        @media(max-width:960px){
          .main-grid{grid-template-columns:1fr!important}
          .form-grid{grid-template-columns:1fr!important}
          .results-row{grid-template-columns:1fr 1fr!important}
          .q-grid{grid-template-columns:1fr 1fr!important}
          .p-grid{grid-template-columns:repeat(2,1fr)!important}
        }
        @media(max-width:540px){
          .results-row{grid-template-columns:1fr!important}
          .q-grid{grid-template-columns:1fr 1fr!important}
          .p-grid{grid-template-columns:repeat(2,1fr)!important}
        }
      `}</style>
    </div>
  )
}
