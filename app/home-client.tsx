'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const PLATFORMS = [
  { name: 'DoorDash',    emoji: '▸', searches: '400K/mo', href: '/doordash'     },
  { name: 'Uber',        emoji: '▸', searches: '300K/mo', href: '/uber'         },
  { name: 'Etsy',        emoji: '▸', searches: '200K/mo', href: '/etsy'         },
  { name: 'OnlyFans',    emoji: '▸', searches: '150K/mo', href: '/onlyfans' },
  { name: 'Instacart',   emoji: '▸', searches: '150K/mo', href: '/instacart'    },
  { name: 'Airbnb',      emoji: '▸', searches: '120K/mo', href: '/airbnb'       },
  { name: 'Amazon Flex', emoji: '▸', searches: '80K/mo',  href: '/amazon-flex'  },
  { name: 'Lyft',        emoji: '▸', searches: '70K/mo',  href: '/lyft'         },
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

const QUICK_EXAMPLES = [
  { label: 'Uber driver',          platform: 'Uber',     income: '30000', state: 'CA', filing: 'single',  tag: '$30k · California' },
  { label: 'DoorDash + Instacart', platform: 'DoorDash', income: '40000', state: 'TX', filing: 'single',  tag: '$40k · Texas'      },
  { label: 'OnlyFans creator',     platform: 'OnlyFans', income: '60000', state: 'NY', filing: 'single',  tag: '$60k · New York'   },
  { label: 'Airbnb host',          platform: 'Airbnb',   income: '45000', state: 'FL', filing: 'married', tag: '$45k · Florida'    },
]

export default function HomeClient() {
  const [tab, setTab]         = useState<'calc'|'deadlines'|'platforms'>('calc')
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  const [platform, setPlatform] = useState('DoorDash')
  const [income, setIncome]   = useState('')
  const [stateCode, setStateCode] = useState('CA')
  const [filing, setFiling]   = useState('single')
  const [result, setResult]   = useState<any>(null)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const fmt = (n: number) => {
    if (!isFinite(n) || isNaN(n)) return '$0';
    return '$' + Math.round(n).toLocaleString('en-US');
  }
  const loadExample = (ex: typeof QUICK_EXAMPLES[0]) => {
    setPlatform(ex.platform)
    setIncome(ex.income)
    setStateCode(ex.state)
    setFiling(ex.filing)
    setResult(null)
    setTimeout(() => {
      const net = parseFloat(ex.income) || 0
      const st = STATES.find(s => s.code === ex.state)
      const seBase  = net * 0.9235
      const seTax   = seBase * 0.153
      const taxable = net - seTax * 0.5
      const fedRate = ex.filing === 'single' ? 0.22 : 0.12
      const federal = taxable * fedRate
      const stateTax = taxable * (st?.rate ?? 0.05)
      const total   = federal + seTax + stateTax
      setResult({ seTax, federal, stateTax, total, quarterly: total / 4, rate: ((total / net) * 100).toFixed(1) })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 50)
  }

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
    setResult({ seTax, federal, stateTax, total, quarterly: total / 4, rate: net > 0 ? ((total / net) * 100).toFixed(1) : '0.0' })
  }

  /* ── shared style tokens ── */
  const card     = { background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const, marginBottom: 20, boxShadow: '0 1px 6px rgba(0,0,0,.05)' }
  const cardHd   = { background: '#1a1a2e', padding: '13px 12px', display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden' as const }
  const accent   = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }
  const label    = { display: 'block', fontSize: 14, fontWeight: 700, color: '#374151', textTransform: 'uppercase' as const, letterSpacing: '0.5px', marginBottom: 10 }
  const inp      = { width: '100%', border: '1px solid #d1d5db', borderRadius: 8, padding: '14px 16px', fontSize: 17, color: '#1a1a2e', background: '#fff', boxSizing: 'border-box' as const }
  const btnDark  = { background: '#1a1a2e', color: '#fff', padding: '18px 0', borderRadius: 8, fontSize: 19, fontWeight: 800, cursor: 'pointer', textAlign: 'center' as const, width: '100%', letterSpacing: '0.3px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }
  const formGrid = { display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 20 : 14, marginBottom: 20 }
  const btnRed   = (extra: any = {}) => ({ background: '#B22234', color: '#fff', padding: '13px 0', borderRadius: 6, fontSize: 15, fontWeight: 700, cursor: 'pointer', textAlign: 'center' as const, width: '100%', boxShadow: '0 3px 8px rgba(178,34,52,0.35)', ...extra })

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh', overflowX: 'hidden' as const, maxWidth: '100vw' }}>

      {/* ━━ HERO STRIP ━━ */}
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '14px 16px 10px' : '28px 20px 22px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 10, overflow: 'hidden', minWidth: 0 }}>
            <div style={{ width: 4, minWidth: 4, height: isMobile ? 28 : 34, background: '#B22234', borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
            <h1 style={{ fontSize: isMobile ? 21 : 27, fontWeight: 900, color: '#fff', lineHeight: 1.25, letterSpacing: '-0.3px', margin: 0, wordBreak: 'break-word' as const, overflowWrap: 'break-word' as const, maxWidth: '100%' }}>
              Free Gig Worker Tax Calculator 2026 — All Platforms, All 51 States
            </h1>
          </div>
          {/* 3 promise bullets — visible on all screens */}
          <div style={{ paddingLeft: 16, display: 'flex', flexDirection: 'column' as const, gap: 5, marginBottom: 10 }}>
            {[
              ' Self-employment tax 15.3% + federal + state (all 51 states)',
              ' Built for DoorDash, Uber, OnlyFans, Airbnb, Etsy, Instacart & more',
              ' Free, no signup, no app — results in seconds',
            ].map(b => (
              <span key={b} style={{ fontSize: isMobile ? 14 : 14, color: 'rgba(255,255,255,.85)', fontWeight: 500, display: 'block', wordBreak: 'break-word' as const, overflowWrap: 'break-word' as const, maxWidth: '100%' }}>{b}</span>
            ))}
          </div>
          {/* sub-H1 tagline */}
          <p style={{ paddingLeft: 16, fontSize: isMobile ? 13 : 14, color: 'rgba(255,255,255,.75)', fontWeight: 400, marginBottom: 8, lineHeight: 1.55, maxWidth: 680 }}>
            Estimate SE tax 15.3%, federal and state income tax for DoorDash, Uber, Etsy, OnlyFans, Instacart, Airbnb and more — no signup, no data stored.
          </p>
          {/* gov-style disclaimer */}
          <div style={{ paddingLeft: 16, fontSize: 11, color: 'rgba(255,255,255,.35)', lineHeight: 1.5 }}>
            Based on IRS Schedule SE and 2026 tax brackets. Not affiliated with the IRS or any government agency. Estimates only — not tax advice.
          </div>
        </div>
      </div>



      {/* STICKY RESULT BAR mobile */}
      {result && isMobile && (
        <div style={{ position: 'sticky', top: 60, zIndex: 90, background: '#1a1a2e', borderBottom: '2px solid #B22234', padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', fontWeight: 500 }}>Estimated total tax</span>
          <span style={{ fontSize: 16, fontWeight: 900, color: '#B22234' }}>
            {Math.round(result.total).toLocaleString('en-US')} <span style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', fontWeight: 400 }}>({result.rate}%)</span>
          </span>
        </div>
      )}

      {/* ━━ MAIN GRID ━━ */}
      <div className="main-grid-outer" style={{ maxWidth: 1200, margin: '0 auto', padding: isMobile ? '10px 12px 32px' : '24px 16px 48px', display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>

        {/* ── LEFT ── */}
        <div>

          {/* TABS */}
          <div style={{ display: 'flex', borderBottom: '2px solid #d8dce6', marginBottom: 20, gap: 6, padding: '4px 4px 0' }}>
            {([
              { id: 'calc',      label: 'Tax Calculator'  },
              { id: 'deadlines', label: '2026 Deadlines'  },
              { id: 'platforms', label: 'All Platforms'   },
            ] as const).map(t => (
              <div key={t.id} onClick={() => setTab(t.id)} style={{
                padding: isMobile ? '6px 6px' : '8px 12px', fontSize: isMobile ? 11 : 13, fontWeight: 600, cursor: 'pointer', borderRadius: '6px 6px 0 0',
                color: tab === t.id ? '#fff' : '#4b5563', background: tab === t.id ? '#B22234' : '#f0f4f8',
                borderBottom: tab === t.id ? '2px solid #B22234' : '2px solid transparent', border: tab === t.id ? '1px solid #B22234' : '1px solid #d8dce6',
                marginBottom: -2, transition: 'all .15s', whiteSpace: 'normal', flex: 1, textAlign: 'center' as const, wordBreak: 'break-word',
              }}>
                {t.label}
              </div>
            ))}
          </div>

          {/* ═══ CALCULATOR ═══ */}
          {tab === 'calc' && (
            <>
              {/* QUICK EXAMPLES */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 12 }}>
                   Quick Examples — tap to load
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4,1fr)', gap: 10 }}>
                  {QUICK_EXAMPLES.map(ex => (
                    <div
                      key={ex.label}
                      onClick={() => loadExample(ex)}
                      style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.09)', borderRadius: 8, padding: isMobile ? '16px 14px' : '12px 10px', cursor: 'pointer', transition: 'all .15s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(232,184,75,.5)'; (e.currentTarget as HTMLElement).style.background = 'rgba(232,184,75,.07)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.09)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,.04)' }}
                    >
                      <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 8 }}>{ex.label}</div>
                      <div style={{ fontSize: 16, color: 'rgba(255,255,255,.55)', marginBottom: 10 }}>{ex.tag}</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: '#e8b84b' }}>→ Load into calculator</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FORM CARD */}
              <div style={card}>
                <div style={cardHd}>
                  <div style={accent}/>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}> Self-Employment Tax Estimator</span>
                  {!isMobile && <span style={{ marginLeft: 'auto', background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.45)', fontSize: 10, padding: '2px 6px', borderRadius: 3, whiteSpace: 'nowrap' as const, flexShrink: 0 }}>IRS SE</span>}
                </div>
                <div style={{ padding: 24 }}>

                  {/* Section 1 */}
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #e5e7eb' }}>
                    1. Your Gig Income
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }} className="form-grid">
                    <div>
                      <label style={label}>▸ Gig Platform</label>
                      <select style={inp} value={platform} onChange={e => setPlatform(e.target.value)}>
                        {PLATFORMS.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={label}> Annual Gig Revenue (USD)</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#6b7280', fontWeight: 700 }}>$</span>
                        <input style={{ ...inp, paddingLeft: 24 }} type="number" value={income} onChange={e => setIncome(e.target.value)} placeholder="45,000"/>
                      </div>

          {/* INCOME PRESETS */}
          <div style={{display:'flex',flexWrap:'wrap',gap:'6px',marginTop:'8px',marginBottom:'4px'}}>
            {['20000','50000','100000','250000','500000'].map(v=>(
              <button key={v} onClick={()=>setIncome(v)} style={{padding:'4px 10px',borderRadius:'20px',border:'1px solid rgba(232,184,75,0.4)',background:income===v?'#e8b84b':'rgba(30,45,70,0.8)',color:income===v?'#07111f':'rgba(255,255,255,0.85)',fontSize:'12px',fontWeight:600,cursor:'pointer'}}>
                {v==='20000'?'$20k':v==='50000'?'$50k':v==='100000'?'$100k':v==='250000'?'$250k':'$500k'}
              </button>
            ))}
          </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #e5e7eb' }}>
                    2. Business Expenses <span style={{ fontWeight: 400, fontSize: 10, color: '#9ca3af' }}>(optional)</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }} className="form-grid">
                    <div>
                      <label style={label}>▸ Business Miles Driven</label>
                      <input style={inp} type="number" placeholder="e.g. 10,000 miles"/>
                      <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 4 }}>$0.725/mile (IRS 2026 rate)</div>
                    </div>
                    <div>
                      <label style={label}> Other Business Expenses</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#6b7280', fontWeight: 700 }}>$</span>
                        <input style={{ ...inp, paddingLeft: 24 }} type="number" placeholder="e.g. 2,000"/>
                      </div>
                      <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 4 }}>Phone, supplies, equipment…</div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #e5e7eb' }}>
                    3. Where You Live &amp; File
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }} className="form-grid">
                    <div>
                      <label style={label}> State of Residence</label>
                      <select style={inp} value={stateCode} onChange={e => setStateCode(e.target.value)}>
                        {STATES.map(s => <option key={s.code} value={s.code}>{s.name} {s.rate === 0 ? '(No State Tax)' : `(${(s.rate*100).toFixed(1)}%)`}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={label}> Filing Status</label>
                      <select style={inp} value={filing} onChange={e => setFiling(e.target.value)}>
                        <option value="single">Single</option>
                        <option value="married">Married Filing Jointly</option>
                        <option value="hoh">Head of Household</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ ...btnDark, fontSize: 15 }} onClick={calculate}> Calculate My Gig Taxes →</div>
                </div>
              </div>

              {/* RESULTS */}
              {result && (
                <div style={card}>
                  <div style={cardHd}>
                    <div style={accent}/>
                    <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}> Your Tax Estimate</span>
                  </div>

                  {/* 4 boxes */}
                  <div style={{ overflowX: 'auto' as const }}><div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', borderBottom: '1px solid #e2e5e9', minWidth: 0 }} className="results-row">
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
                  </div></div>

                  {/* 4 quarterly boxes */}
                  <div style={{ padding: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap' as const, gap: 8 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e' }}> Quarterly Payment Schedule</span>
                      <div style={{ ...btnRed(), width: 'auto', padding: '7px 14px', fontSize: 12 }}>+ Add All to Google Calendar</div>
                    </div>

                    <div style={{ overflowX: 'auto' as const }}><div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: 10, minWidth: 0 }} className="q-grid">
                      {DEADLINES.map((d, i) => (
                        <div key={d.q} style={{ border: i === 0 ? '2px solid #B22234' : '1px solid #e2e5e9', borderRadius: 6, padding: 14, background: i === 0 ? '#fff5f5' : '#fff', position: 'relative' as const }}>
                          {i === 0 && <div style={{ position: 'absolute', top: -10, left: 8, background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 6px', borderRadius: 3, fontWeight: 800 }}> NEXT</div>}
                          <div style={{ fontSize: 12, fontWeight: 800, color: '#1a1a2e', marginBottom: 3 }}>{d.q}</div>
                          <div style={{ fontSize: 11, color: '#9ca3af', marginBottom: 8 }}>{d.due}</div>
                          <div style={{ fontSize: 20, fontWeight: 900, color: i === 0 ? '#B22234' : '#1a1a2e', marginBottom: 10 }}>{fmt(result.quarterly)}</div>
                          <div style={btnRed({ fontSize: 11, padding: '6px 0' })}>+ Calendar</div>
                        </div>
                      ))}
                    </div></div>
                    <button onClick={()=>{const t=[DEADLINES.map(d=>d.q+' — due '+d.due+': '+fmt(result.quarterly)).join('\n')].join('');navigator.clipboard.writeText(t).then(()=>alert('Quarterly schedule copied!'));}} style={{marginTop:'10px',padding:'8px 18px',borderRadius:'8px',border:'1px solid rgba(232,184,75,0.4)',background:'rgba(232,184,75,0.08)',color:'#e8b84b',fontSize:'13px',fontWeight:700,cursor:'pointer',width:'100%'}}> Copy Quarterly Schedule</button>

                    <div style={{ marginTop: 14, background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 4, padding: '10px 14px', fontSize: 12, color: '#92400e', textAlign: 'justify' as const, lineHeight: 1.6 }}>
                       <strong>Disclaimer:</strong> Estimates for planning purposes only. Consult a licensed CPA or visit IRS.gov for official guidance. Not tax advice.
                    </div>
                    <div style={{ marginTop: 10, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 4, padding: '10px 14px', fontSize: 12, color: '#166534', lineHeight: 1.6 }}>
                       <strong>Worried about penalties?</strong> Check if you are on track for 2026 quarterly payments.{' '}
                      <a href="/tax-penalty-finder" style={{ color: '#166534', fontWeight: 700 }}>→ Open Penalty Finder</a>
                    </div>
                  </div>
                </div>
              )}

              {/* HOW THIS CALCULATOR WORKS */}
              <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const, marginTop: 20 }}>
                <div style={{ background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }}/>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>How This Calculator Works</span>
                </div>
                <div style={{ padding: '16px 20px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: 14 }} className="form-grid">
                  {[
                    { label: 'Self-employment tax', detail: '92.35% of net earnings × 15.3% (12.4% Social Security + 2.9% Medicare). You deduct 50% of SE tax from taxable income.' },
                    { label: 'Federal income tax', detail: '2026 IRS tax brackets with standard deduction ($15,000 single / $30,000 married). Rates from 10% to 37%.' },
                    { label: 'State income tax', detail: '2026 state rates for all 51 jurisdictions — from 0% (TX, FL, NV, WA) to 13.3% (CA). Updated each tax year.' },
                  ].map(item => (
                    <div key={item.label} style={{ borderLeft: '3px solid #B22234', paddingLeft: 12 }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: '#1a1a2e', marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6 }}>{item.detail}</div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '0 20px 14px' }}>
                  <a href="/how-we-calculate-gig-taxes" style={{ fontSize: 12, color: '#B22234', fontWeight: 700, textDecoration: 'none' }}>See full methodology: how we calculate 2026 gig taxes →</a>
                </div>
              </div>

              {/* HIGH INCOME BLOCK */}
              {result && parseFloat(income) >= 150000 && (
                <div style={{ background: 'linear-gradient(135deg,#1a0a2e,#2d1454)', border: '1px solid rgba(168,85,247,0.4)', borderRadius: 8, padding: '18px 20px', marginBottom: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#c084fc', letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: 10 }}> High-Income Gig Worker (over $150k)</div>
                  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: '#c084fc', fontSize: 16, marginTop: 1 }}>▸</span>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}><strong style={{ color: '#fff' }}>Additional Medicare Surtax (0.9%)</strong> — applies to net self-employment income above $200,000 (single) or $250,000 (married). This calculator includes standard SE tax; consult a CPA for the surtax.</div>
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: '#c084fc', fontSize: 16, marginTop: 1 }}>▸</span>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}><strong style={{ color: '#fff' }}>State Top Brackets</strong> — California (13.3%), New York (10.9%), New Jersey (10.75%) apply at high incomes and significantly increase your effective rate.</div>
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: '#c084fc', fontSize: 16, marginTop: 1 }}>▸</span>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}><strong style={{ color: '#fff' }}>Quarterly Precision is Critical</strong> — at this income level, underpayment penalties can exceed $2,000/year. Consider paying monthly instead of quarterly.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* PLATFORM GRID */}
              <div style={card}>
                <div style={cardHd}>
                  <div style={accent}/>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}> Select Your Platform</span>
                  <span style={{ marginLeft: 'auto', fontSize: 12, color: 'rgba(255,255,255,.35)' }}>51-state tax included</span>
                </div>
                <div style={{ padding: 16, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }} className="p-grid">
                  {PLATFORMS.map(p => (
                    <Link key={p.name} href={p.href} style={{ textDecoration: 'none' }}>
                      <div className={platform === p.name ? 'plat-card plat-card--active' : 'plat-card'} style={{ borderRadius: 6, padding: '14px 8px', textAlign: 'center' as const, cursor: 'pointer', transition: 'all .18s', position: 'relative' as const }}>
                        
                        <div style={{ fontSize: 22, marginBottom: 4 }}></div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#1a1a2e', marginBottom: 2 }}>{p.name}</div>
                        <div style={{ fontSize: 10, color: '#B22234', fontWeight: 600, marginBottom: 8 }}>{p.searches}</div>
                        <div className="plat-btn" style={{background:'#B22234',color:'#fff',fontSize:11,fontWeight:700,padding:'5px 10px',borderRadius:4,marginTop:4}}>Open Calculator</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* COMPARE TABLE */}
              <div style={card}>
                <div style={{ padding: '13px 20px', borderBottom: '1px solid #e2e5e9', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={accent}/>
                  <span style={{ fontWeight: 700, fontSize: 15 }}> How We Compare to Competitors</span>
                </div>
                <div style={{ overflowX: 'auto' as const }}>
                  <div style={{overflowX:'auto',WebkitOverflowScrolling:'touch'}}><div style={{overflowX:'auto',WebkitOverflowScrolling:'touch',width:'100%'}}><table style={{ width: '100%', minWidth: 300, borderCollapse: 'collapse' as const }}>
                    <thead>
                      <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e5e9' }}>
                        {['Feature','GigWiseTax ✓','FlyFin','Everlance','TurboTax Blog'].map((h,i) => (
                          <th key={h} style={{ padding: '8px 6px', fontWeight: 700, fontSize: 11, color: i===1 ? '#1a1a2e' : '#6c757d', textAlign: i===0 ? 'left' as const : 'center' as const, background: i===1 ? '#fff5f5' : 'transparent', borderBottom: i===1 ? '3px solid #B22234' : 'none' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        [' Free to use',               true,  false, false, true ],
                        [' No registration required',  true,  false, false, true ],
                        [' All 51 states included',    true,  false, false, false],
                        ['▸ OnlyFans tax calculator',    true,  false, false, false],
                        [' Google Calendar export',    true,  false, false, false],
                        [' Interactive tool',          true,  false, false, false],
                        [' No app required',           true,  false, false, true ],
                        [' 100% private, no data stored', true, false, false, false],
                      ].map(([feat,...vals]) => (
                        <tr key={feat as string} style={{ borderBottom: '1px solid #f0f1f3' }}>
                          <td style={{ padding: '8px 6px', fontSize: 12, color: '#374151', fontWeight: 500 }}>{feat as string}</td>
                          {(vals as boolean[]).map((v,i) => (
                            <td key={i} style={{ padding: '8px 6px', textAlign: 'center' as const, background: i===0 ? '#fff9f9' : 'transparent' }}>
                              <span style={{ fontSize: 15, fontWeight: 800, color: v ? '#059669' : '#d1d5db' }}>{v ? '✓' : '✗'}</span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table></div></div>
                </div>
              </div>
            </>
          )}

          {/* ═══ DEADLINES ═══ */}
          {tab === 'deadlines' && (
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}> 2026 IRS Estimated Tax Deadlines</span>
              </div>
              <div style={{ overflowX: 'auto' as const }}>
                <div style={{overflowX:'auto',WebkitOverflowScrolling:'touch'}}><table style={{ width: '100%', borderCollapse: 'collapse' as const }}>
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
                          <div style={btnRed({ fontSize: 12, padding: '7px 0' })}> + Calendar</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table></div>
              </div>
            </div>
          )}

          {/* ═══ PLATFORMS ═══ */}
          {tab === 'platforms' && (
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}> All Supported Platforms</span>
              </div>
              <div style={{ overflowX: 'auto' as const }}>
                <div style={{overflowX:'auto',WebkitOverflowScrolling:'touch'}}><table style={{ width: '100%', borderCollapse: 'collapse' as const }}>
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
                          <span style={{ fontSize: 18, marginRight: 10 }}></span>{p.name}
                          
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
                </table></div>
              </div>
            </div>
          )}

        </div>

        {/* ── SIDEBAR ── */}
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>


          {/* QUICK LINKS */}
          <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
            <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> Popular Calculators</span>
            </div>
            {PLATFORMS.map(p => (
              <Link key={p.name} href={p.href} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid #f0f1f3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: '#374151' }}>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{p.name} Tax Calculator</span>
                  <span style={{ fontSize: 11, color: '#B22234', fontWeight: 700 }}>{p.searches}</span>
                </div>
              </Link>
            ))}
          </div>


          {/* TRUST */}
          <div style={{ background: '#f8fafc', border: '1px solid #d8dce6', borderRadius: 6, padding: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 10 }}> About This Tool</div>
            <div style={{ fontSize: 12, color: '#374151', lineHeight: 1.7, textAlign: 'justify' as const }}>
              GigWiseTax.com is an independent, free estimation tool. Not affiliated with the IRS or any government agency. No personal data is stored. Results are estimates only — not tax advice.
            </div>
            <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
              {['Privacy','Terms','Contact'].map(l => (
                <span key={l} style={{ fontSize: 11, color: '#6c757d', cursor: 'pointer', textDecoration: 'underline' }}>{l}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ══ GIG WORKER TAX HUB ══ */}
      <div style={{maxWidth:1200,margin:'0 auto',padding:'48px 16px 0',overflowX:'hidden',boxSizing:'border-box'}}>

        {/* PLATFORM HUB */}
        <div style={{marginBottom:48}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <div style={{width:3,height:20,background:'#B22234',borderRadius:2}}/>
            <span style={{fontSize:11,fontWeight:800,color:'#e8b84b',letterSpacing:'1.5px',textTransform:'uppercase'}}>Gig Worker Tax Center 2026</span>
          </div>
          <h2 style={{fontSize:22,fontWeight:900,color:'#fff',marginBottom:6,marginLeft:13}}>Tax Calculators by Platform</h2>
          <p style={{fontSize:13,color:'rgba(255,255,255,0.45)',marginBottom:20,marginLeft:13,maxWidth:640}}>Each calculator includes SE tax (15.3%), federal brackets, state tax for all 51 jurisdictions, and quarterly payment schedule.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr',gap:12}}>
            {[
              { name:'DoorDash',desc:'Mileage + SE tax + deductions',href:'/doordash',ex:'$40k → ~$29k after tax'},
              { name:'Uber / Lyft',desc:'Rideshare SE tax calculator',href:'/uber',ex:'$50k → ~$35k after tax'},
              { name:'Etsy',desc:'Seller income + Schedule C',href:'/etsy',ex:'$30k → ~$22k after tax'},
              { name:'OnlyFans',desc:'Creator 1099 tax estimator',href:'/onlyfans',ex:'$60k → ~$41k after tax'},
              { name:'Instacart',desc:'Shopper quarterly taxes',href:'/instacart',ex:'$35k → ~$25k after tax'},
              { name:'Airbnb',desc:'Host Schedule E + SE tax',href:'/airbnb',ex:'$45k → ~$32k after tax'},
              { name:'Amazon Flex',desc:'Driver deductions + quarterly',href:'/amazon-flex',ex:'$38k → ~$27k after tax'},
              { name:'Lyft',desc:'Driver SE tax + state',href:'/lyft',ex:'$42k → ~$30k after tax'},
            ].map((p,i)=>(
              <a key={i} href={p.href} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.09)',borderRadius:8,padding:'20px',textDecoration:'none',display:'flex',alignItems:'center',gap:16,transition:'all .2s'}}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(232,184,75,0.5)';(e.currentTarget as HTMLElement).style.background='rgba(232,184,75,0.07)';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(255,255,255,0.09)';(e.currentTarget as HTMLElement).style.background='rgba(255,255,255,0.04)';}}>
                
                <div style={{flex:1}}>
                  <div style={{fontSize:17,fontWeight:800,color:'#fff',marginBottom:4}}>{p.name} Tax Calculator</div>
                  <div style={{fontSize:13,color:'rgba(255,255,255,0.5)',marginBottom:6}}>{p.desc}</div>
                  <div style={{fontSize:15,fontWeight:700,color:'#4ade80'}}>{p.ex}</div>
                </div>
                <div style={{flexShrink:0,background:'#B22234',color:'#fff',fontSize:12,fontWeight:700,padding:'8px 16px',borderRadius:6,whiteSpace:'nowrap'}}>Open Calculator</div>
              </a>
            ))}
          </div>
        </div>

        {/* LONG-TAIL EXAMPLES */}
        <div style={{marginBottom:48}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <div style={{width:3,height:20,background:'#B22234',borderRadius:2}}/>
            <span style={{fontSize:11,fontWeight:800,color:'#e8b84b',letterSpacing:'1.5px',textTransform:'uppercase'}}>Real Tax Examples</span>
          </div>
          <h2 style={{fontSize:22,fontWeight:900,color:'#fff',marginBottom:6,marginLeft:13}}>What Gig Workers Actually Pay</h2>
          <p style={{fontSize:13,color:'rgba(255,255,255,0.45)',marginBottom:20,marginLeft:13}}>Based on 2026 IRS brackets. SE tax 15.3% + federal + state included.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr',gap:12}}>
            {[
              {label:'DoorDash $40,000 — California',se:'$5,651',fed:'$4,200',state:'$2,800',net:'~$27,350',href:'/doordash/california'},
              {label:'Uber $50,000 — Texas',se:'$7,065',fed:'$5,500',state:'$0',net:'~$37,435',href:'/uber/texas'},
              {label:'OnlyFans $60,000 — Florida',se:'$8,478',fed:'$7,200',state:'$0',net:'~$44,322',href:'/onlyfans/florida'},
              {label:'Etsy $30,000 — New York',se:'$4,239',fed:'$2,800',state:'$1,800',net:'~$21,161',href:'/etsy/new-york'},
              {label:'Instacart $35,000 — Illinois',se:'$4,946',fed:'$3,400',state:'$1,500',net:'~$25,154',href:'/instacart/illinois'},
              {label:'Airbnb $55,000 — Washington',se:'$7,771',fed:'$6,300',state:'$0',net:'~$40,929',href:'/airbnb/washington'},
            ].map((ex,i)=>(
              <a key={i} href={ex.href} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:6,padding:'20px',textDecoration:'none',display:'block'}}>
                <div style={{fontSize:18,fontWeight:800,color:'#e8b84b',marginBottom:14}}>{ex.label}</div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px 16px',marginBottom:14}}>
                  <div style={{fontSize:16,color:'rgba(255,255,255,0.6)'}}>SE Tax</div><div style={{fontSize:16,color:'#f87171',fontWeight:700}}>{ex.se}</div>
                  <div style={{fontSize:16,color:'rgba(255,255,255,0.6)'}}>Federal</div><div style={{fontSize:16,color:'#f87171',fontWeight:700}}>{ex.fed}</div>
                  <div style={{fontSize:16,color:'rgba(255,255,255,0.6)'}}>State</div><div style={{fontSize:16,color:'#f87171',fontWeight:700}}>{ex.state}</div>
                </div>
                <div style={{borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:12,fontSize:18,fontWeight:900,color:'#4ade80'}}>Take-home {ex.net}</div>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{marginBottom:48,maxWidth:800}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <div style={{width:3,height:20,background:'#B22234',borderRadius:2}}/>
            <span style={{fontSize:11,fontWeight:800,color:'#e8b84b',letterSpacing:'1.5px',textTransform:'uppercase'}}>FAQ</span>
          </div>
          <h2 style={{fontSize:22,fontWeight:900,color:'#fff',marginBottom:20,marginLeft:13}}>Gig Worker Tax Questions 2026</h2>
          <div style={{display:'flex',flexDirection:'column' as const,gap:8}}>
            {[
              ['How much tax do gig workers pay?','Gig workers pay SE tax (15.3%) on net earnings plus federal income tax (10–22% for most) plus state tax. Total effective rate is typically 25–35%. A DoorDash driver earning $40,000 in California pays roughly $12,000–$14,000 in total taxes.'],
              ['What is the quarterly tax deadline for 2026?','Q1: April 15 · Q2: June 16 · Q3: September 15 · Q4: January 15, 2027. Miss a deadline and the IRS charges a 7% underpayment penalty on the amount owed.'],
              ['Can I deduct mileage as a DoorDash or Uber driver?','Yes — the 2026 IRS standard mileage rate is $0.725 per mile. A driver logging 15,000 business miles saves $10,500 in deductible expenses, which reduces SE tax and income tax.'],
              ['Do OnlyFans creators pay self-employment tax?','Yes. OnlyFans sends a 1099-NEC for earnings over $600. Creators pay 15.3% SE tax on net profit plus income tax. The platform fee (20%) is deductible, as are equipment, internet, and home office expenses.'],
              ['How do I calculate quarterly estimated taxes?','Take your expected annual net income, multiply by 0.9235 for the SE base, apply 15.3% for SE tax, add federal income tax estimate, divide total by 4. Our calculator does this automatically for all 51 states.'],
              ['Is gig work income taxed differently than W-2?','Yes. W-2 employees split FICA 50/50 with their employer. Gig workers pay both halves (15.3%) but can deduct 50% of SE tax on Form 1040. This makes accurate quarterly payments critical to avoid underpayment penalties.'],
            ].map(([q,a],i)=>(
              <details key={i} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:6,padding:'14px 18px'}}>
                <summary style={{fontSize:14,fontWeight:700,color:'#e8b84b',cursor:'pointer',listStyle:'none'}}>{q}</summary>
                <p style={{fontSize:13,color:'rgba(255,255,255,0.6)',lineHeight:1.75,marginTop:10,marginBottom:0}}>{a}</p>
              </details>
            ))}
          </div>
        </div>


      {/* ── PARTNER BANNERS ── */}
      <div className="partner-banners" style={{maxWidth:1200,margin:'0 auto',padding:'0 20px 48px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <a href="https://privatepaycheck.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',display:'flex',flexDirection:'column' as const,gap:12,background:'linear-gradient(135deg,#091526,#102040)',border:'1px solid rgba(245,200,66,0.35)',borderRadius:12,padding:'24px 20px'}}>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'#F5C842',fontFamily:'monospace'}}>W-2 Paycheck Tool</div>
          <div style={{fontSize:22,fontWeight:900,color:'#fff',lineHeight:1.1}}>PrivatePaycheck<span style={{color:'#F5C842'}}>.com</span></div>
          <div style={{fontSize:13,color:'#7A96B8',lineHeight:1.6}}>Free paycheck calculator for W-2 employees. All 50 states, 2026 IRS brackets. No signup.</div>
          <div style={{display:'flex',gap:6,flexWrap:'wrap' as const}}>
            {(['Salary & Hourly','All 50 States','100% Free'] as string[]).map((t:string)=><span key={t} style={{fontSize:11,background:'rgba(245,200,66,0.1)',border:'1px solid rgba(245,200,66,0.25)',color:'#F5C842',padding:'3px 8px',borderRadius:4}}>{t}</span>)}
          </div>
          <div style={{background:'#F5C842',color:'#091526',fontSize:14,fontWeight:800,padding:'12px 0',borderRadius:8,textAlign:'center' as const}}>Calculate My Paycheck →</div>
        </a>
        <a href="https://1099deductions.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',display:'flex',flexDirection:'column' as const,gap:12,background:'linear-gradient(135deg,#0E2240,#07111F)',border:'1px solid rgba(184,146,74,0.35)',borderRadius:12,padding:'24px 20px'}}>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase' as const,color:'#D4AA66',fontFamily:'monospace'}}>1099 Deductions Tool</div>
          <div style={{fontSize:22,fontWeight:900,color:'#fff',lineHeight:1.1}}>1099Deductions<span style={{color:'#D4AA66'}}>.com</span></div>
          <div style={{fontSize:13,color:'#7A96B8',lineHeight:1.6}}>Free tax write-off finder. DoorDash, Uber, Airbnb, Etsy, OnlyFans. IRS Schedule C compliant.</div>
          <div style={{display:'flex',gap:6,flexWrap:'wrap' as const}}>
            {(['Schedule C','All Gig Jobs','100% Free'] as string[]).map((t:string)=><span key={t} style={{fontSize:11,background:'rgba(184,146,74,0.1)',border:'1px solid rgba(184,146,74,0.25)',color:'#D4AA66',padding:'3px 8px',borderRadius:4}}>{t}</span>)}
          </div>
          <div style={{background:'#B8924A',color:'#07111F',fontSize:14,fontWeight:800,padding:'12px 0',borderRadius:8,textAlign:'center' as const}}>Find My Deductions →</div>
        </a>
      </div>

      </div>

      <style>{`
        @media(max-width:960px){.main-grid{grid-template-columns:1fr!important;}
          .main-grid{grid-template-columns:1fr!important}
          .form-grid{grid-template-columns:1fr!important}
          .results-row{grid-template-columns:1fr 1fr!important}
          .q-grid{grid-template-columns:1fr 1fr!important}
          .p-grid{grid-template-columns:repeat(2,1fr)!important}
        }
        @media(max-width:540px){.main-grid{grid-template-columns:1fr!important;padding:16px 12px!important;}
          .partner-banners{grid-template-columns:1fr!important;padding:0 12px 32px!important;}
          .results-row{grid-template-columns:1fr!important}
          .q-grid{grid-template-columns:1fr 1fr!important}
          .p-grid{grid-template-columns:repeat(2,1fr)!important}
        }
      `}</style>
    </div>
  )
}
