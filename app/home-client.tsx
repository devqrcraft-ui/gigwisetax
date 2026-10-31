'use client'

import { useState, useEffect } from 'react'
import BehindOnTaxes from '@/app/components/BehindOnTaxes'
import { estimateTaxRaw, TAX_RULES_2026 } from '@/lib/tax-rules'
import { STATES as ALL_STATES } from '@/lib/data'
import Link from 'next/link'

const PLATFORMS = [
  { name: 'DoorDash',    searches: 'Free', href: '/doordash'     },
  { name: 'Uber',        searches: 'Free', href: '/uber'         },
  { name: 'Etsy',        searches: 'Free', href: '/etsy'         },
  { name: 'OnlyFans',    searches: 'Free', href: '/onlyfans'     },
  { name: 'Instacart',   searches: 'Free', href: '/instacart'    },
  { name: 'Airbnb',      searches: 'Free', href: '/airbnb'       },
  { name: 'Amazon Flex', searches: 'Free',  href: '/amazon-flex'  },
  { name: 'Lyft',        searches: 'Free',  href: '/lyft'         },
  { name: 'Grubhub',     searches: 'Free',  href: '/grubhub'      },
  { name: 'Walmart Spark',searches: 'Free', href: '/walmart-spark' },
]

// Єдина таблиця штатів (50 + DC) з lib/data.ts: однакові ставки в калькуляторі та estimator.
const STATES = ALL_STATES.map(s => ({ code: s.abbr, name: s.name, rate: s.rate }))

const DEADLINES = [
  { q: 'Q1 2026', period: 'Jan – Mar', due: 'April 15, 2026' },
  { q: 'Q2 2026', period: 'Apr – May', due: 'June 15, 2026' },
  { q: 'Q3 2026', period: 'Jun – Aug', due: 'Sept 15, 2026' },
  { q: 'Q4 2026', period: 'Sep – Dec', due: 'Jan 15, 2027' },
]

// Реальні дедлайни від поточної дати (рахується в браузері, не захардкожено)
function dueDate(due: string): Date {
  return new Date(due.replace('Sept ', 'September ') + ' 23:59:59')
}
function nextDeadlineIdx(): number {
  const now = Date.now()
  return DEADLINES.findIndex(d => dueDate(d.due).getTime() >= now)
}
function dueLabel(due: string): string {
  const diff = Math.ceil((dueDate(due).getTime() - Date.now()) / 86400000)
  return diff < 0 ? 'Passed' : diff === 0 ? 'Due today' : diff + ' days left'
}

const QUICK_EXAMPLES = [
  { label: 'Uber driver',          platform: 'Uber',     income: '30000', state: 'CA', filing: 'single',  tag: '$30k · California', href: '/uber' },
  { label: 'DoorDash + Instacart', platform: 'DoorDash', income: '40000', state: 'TX', filing: 'single',  tag: '$40k · Texas',      href: '/doordash' },
  { label: 'OnlyFans creator',     platform: 'OnlyFans', income: '60000', state: 'NY', filing: 'single',  tag: '$60k · New York',   href: '/onlyfans' },
  { label: 'Airbnb host',          platform: 'Airbnb',   income: '45000', state: 'FL', filing: 'married', tag: '$45k · Florida',    href: '/airbnb' },
]

function QuarterlyEstimator() {
  const [weekly, setWeekly] = useState('');
  const [qState, setQState] = useState('No state tax');
  const [qFiling, setQFiling] = useState<'single' | 'married' | 'hoh'>('single');

  const STATE_RATES: Record<string, number> = { 'No state tax': 0, ...Object.fromEntries(ALL_STATES.map(s => [s.name, s.rate * 100])) };

  const w = parseFloat(weekly) || 0;
  const annual = w * 52;
  const stateRate = (STATE_RATES[qState] ?? 5) / 100;
  const estimate = estimateTaxRaw(annual, stateRate, qFiling);
  const { se: seTax, federal: fed, state, total, quarterly } = estimate;
  const hasResult = w > 0;

  const DATES = [
    {q:'Q1 2026',due:'April 15, 2026'},
    {q:'Q2 2026',due:'June 15, 2026'},
    {q:'Q3 2026',due:'September 15, 2026'},
    {q:'Q4 2026',due:'January 15, 2027'},
  ];

  const inp2 = {
    background:'#07111F', border:'2px solid #1a2d45', borderRadius:10,
    color:'#C8D8EC', fontSize:16, minHeight:48, padding:'10px 14px',
    width:'100%', boxSizing:'border-box' as const, outline:'none',
  };

  return (
    <div style={{background:'#0d1e35',border:'1px solid #1a2d45',borderRadius:16,padding:'clamp(20px,4vw,32px)'}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,marginBottom:20}}>
        <div>
          <label htmlFor="qe-weekly" style={{color:'#C8D8EC',fontSize:14,fontWeight:600,display:'block',marginBottom:6,opacity:.85}}>Weekly Gig Earnings ($)</label>
          <div style={{position:'relative'}}>
            <span style={{position:'absolute',left:14,top:'50%',transform:'translateY(-50%)',color:'#e8b84b',fontWeight:700}}>$</span>
            <input id="qe-weekly" type="number" min={0} placeholder="0" value={weekly}
              onChange={e=>setWeekly(e.target.value.replace(/[^0-9.]/g,''))}
              style={{...inp2,paddingLeft:28}} />
          </div>
          {w>0 && <p style={{color:'#C8D8EC',fontSize:12,margin:'6px 0 0',opacity:.6}}>Annual: ${Math.round(annual).toLocaleString('en-US')}</p>}
        </div>
        <div>
          <label htmlFor="qe-state" style={{color:'#C8D8EC',fontSize:14,fontWeight:600,display:'block',marginBottom:6,opacity:.85}}>State</label>
          <select id="qe-state" value={qState} onChange={e=>setQState(e.target.value)} style={inp2}>
            {Object.keys(STATE_RATES).map(s=><option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="qe-filing" style={{color:'#C8D8EC',fontSize:14,fontWeight:600,display:'block',marginBottom:6,opacity:.85}}>Filing Status</label>
          <select id="qe-filing" value={qFiling} onChange={e=>setQFiling(e.target.value as 'single' | 'married' | 'hoh')} style={inp2}>
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
            <option value="hoh">Head of Household</option>
          </select>
        </div>
      </div>

      {hasResult ? (
        <>
          <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.3)',borderRadius:12,padding:'16px 20px',marginBottom:16}}>
            <p style={{color:'#C8D8EC',fontSize:13,margin:'0 0 4px',opacity:.7}}>Estimated quarterly payment</p>
            <p style={{color:'#e8b84b',fontSize:32,fontWeight:900,margin:'0 0 4px'}}>${Math.round(quarterly).toLocaleString('en-US')}</p>
            <p style={{color:'#C8D8EC',fontSize:12,margin:0,opacity:.6}}>Annual tax: ~${Math.round(total).toLocaleString('en-US')} (SE: ${Math.round(seTax).toLocaleString('en-US')} + Fed: ${Math.round(fed).toLocaleString('en-US')} + State: ${Math.round(state).toLocaleString('en-US')})</p>
            {total < 1000 && <p style={{color:'#4ade80',fontSize:12,margin:'8px 0 0',fontWeight:600}}>Under $1,000 — quarterly payments likely not required.</p>}
            {total >= 1000 && <p style={{color:'#e8b84b',fontSize:12,margin:'8px 0 0',fontWeight:600}}>IRS requires quarterly payments when you expect to owe $1,000+.</p>}
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:10,marginBottom:16}}>
            {DATES.map((d,i)=>(
              <div key={d.q} style={{background:'#07111F',border: i === nextDeadlineIdx() ? '2px solid #e8b84b' : '1px solid #1a2d45',borderRadius:10,padding:'12px',textAlign:'center',position:'relative'}}>
                {i === nextDeadlineIdx() && <div style={{position:'absolute',top:-10,left:'50%',transform:'translateX(-50%)',background:'#e8b84b',color:'#07111F',fontSize:10,fontWeight:800,padding:'2px 8px',borderRadius:4,whiteSpace:'nowrap'}}>NEXT DUE</div>}
                <p style={{color:'#e8b84b',fontSize:11,fontWeight:700,margin:'0 0 4px'}}>{d.q}</p>
                <p style={{color:'#C8D8EC',fontSize:18,fontWeight:900,margin:'0 0 4px'}}>${Math.round(quarterly).toLocaleString('en-US')}</p>
                <p style={{color:'#C8D8EC',fontSize:10,margin:0,opacity:.6}}>Due {d.due}</p>
              </div>
            ))}
          </div>
          <a href="/multi-platform-gig-tax-calculator-2026" style={{display:'block',background:'#e8b84b',borderRadius:10,color:'#07111F',fontSize:15,fontWeight:700,minHeight:48,padding:'13px 20px',textAlign:'center',textDecoration:'none'}}>
            Full breakdown — Multi-App Tax Calculator 2026 &rarr;
          </a>
        </>
      ) : (
        <div style={{textAlign:'center',padding:'24px 0',color:'#C8D8EC',opacity:.8,fontSize:14}}>
          Enter your weekly earnings above to see your quarterly schedule.
        </div>
      )}
      <p style={{color:'#C8D8EC',fontSize:12,margin:'14px 0 0',opacity:.8,lineHeight:1.6}}>
        Estimates only. Based on 2026 IRS brackets, standard deduction, and simplified state rate. Not tax advice.
      </p>
    </div>
  );
}

export default function HomeClient() {
  const [tab, setTab]         = useState<'calc'|'deadlines'|'platforms'>('calc')
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  const [platform, setPlatform] = useState('DoorDash')
  const [income, setIncome]   = useState('')
  const [milesH1, setMilesH1] = useState('')
  const [milesH2, setMilesH2] = useState('')
  const [expenses, setExpenses] = useState('')
  const [stateCode, setStateCode] = useState('CA')
  const [filing, setFiling]   = useState('single')
  const [result, setResult]   = useState<any>(null)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [copiedSched, setCopiedSched] = useState(false)

  const fmt = (n: number) => {
    if (!isFinite(n) || isNaN(n)) return '$0';
    return '$' + Math.round(n).toLocaleString('en-US');
  }
  const loadExample = (ex: typeof QUICK_EXAMPLES[0]) => {
    setTab('calc')
    setPlatform(ex.platform)
    setIncome(ex.income)
    setStateCode(ex.state)
    setFiling(ex.filing)
    const gross = parseFloat(ex.income) || 0
    const state = STATES.find(s => s.code === ex.state)
    const estimate = estimateTaxRaw(gross, state?.rate ?? 0.05, ex.filing as 'single' | 'married' | 'hoh')
    setResult({
      seTax: estimate.se, federal: estimate.federal, stateTax: estimate.state,
      total: estimate.total, quarterly: estimate.quarterly,
      rate: ((estimate.total / gross) * 100).toFixed(1),
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const calculate = () => {
    const net = parseFloat(income) || 0
    if (!net) return
    const deductions = (parseFloat(milesH1) || 0) * TAX_RULES_2026.mileage.h1 + (parseFloat(milesH2) || 0) * TAX_RULES_2026.mileage.h2 + (parseFloat(expenses) || 0)
    const st = STATES.find(s => s.code === stateCode)
    // Єдине джерело правил: lib/tax-rules.ts (відрахування, прогресивні брекети, стеля SS). HOH = single, як у platform-калькуляторах.
    const r = estimateTaxRaw(net, st?.rate ?? 0.05, filing === 'married' ? 'married' : filing === 'hoh' ? 'hoh' : 'single', deductions)
    setResult({ seTax: r.se, federal: r.federal, stateTax: r.state, total: r.total, quarterly: r.quarterly, rate: ((r.total / net) * 100).toFixed(1) })
  }

  /* ── shared style tokens ── */
  const card     = { background: '#0d1f3c', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, overflow: 'hidden' as const, marginBottom: 12, boxShadow: '0 2px 12px rgba(0,0,0,.2)' }
  const cardHd   = { background: 'rgba(255,255,255,0.07)', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden' as const }
  const accent   = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }
  const label    = { display: 'block', fontSize: 14, fontWeight: 700, color: '#a8b8d0', textTransform: 'uppercase' as const, letterSpacing: '0.5px', marginBottom: 10 }
  const inp      = { width: '100%', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: '14px 16px', fontSize: 17, color: '#e8eef8', background: '#0a1f3d', boxSizing: 'border-box' as const }
  const btnDark  = { background: '#e8b84b', color: '#07111F', padding: '18px 0', borderRadius: 8, fontSize: 19, fontWeight: 800, cursor: 'pointer', textAlign: 'center' as const, width: '100%', letterSpacing: '0.3px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }
  const formGrid = { display: 'grid', gridTemplateColumns: '1fr', gap: 14, marginBottom: 14 }
  const btnRed   = (extra: any = {}) => ({ background:'#e8b84b',color:'#1a1a2e', padding: '13px 0', borderRadius: 6, fontSize: 16, fontWeight: 700, cursor: 'pointer', textAlign: 'center' as const, width: '100%', boxShadow: '0 3px 8px rgba(232,184,75,0.35)', ...extra })

  return (
    <div style={{ background: '#07111F', minHeight: '100vh', overflowX: 'hidden' as const, maxWidth: '100vw' }}>

      {/* ━━ HERO STRIP ━━ */}
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#07111F)', borderBottom: '1px solid rgba(255,255,255,.07)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(10px,2vw,18px) 16px clamp(8px,1.5vw,14px)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 10, overflow: 'hidden', minWidth: 0 }}>
            <div style={{ width: 4, minWidth: 4, height: 28, background: '#e8b84b', borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
            <h1 style={{ fontSize: 'clamp(24px,5vw,32px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.3px', margin: 0, wordBreak: 'break-word' as const, overflowWrap: 'break-word' as const, maxWidth: '100%' }}>
              Free Gig Worker Tax Calculator 2026 — All Platforms, All 50 States + DC
            </h1>
          </div>
          {/* 3 promise bullets — visible on all screens */}
          <div style={{ padding: '0 0 0 16px', display: 'flex', flexDirection: 'column' as const, gap: 6, marginBottom: 10 }}>
            {[
              '✓ SE tax 15.3% + federal + state (50 states + DC)',
              '✓ DoorDash, Uber, OnlyFans, Airbnb, Etsy, Instacart & more',
              '✓ Free, no signup — results in seconds',
            ].map(b => (
              <span key={b} style={{ fontSize: 15, color: 'rgba(255,255,255,.9)', fontWeight: 600, display: 'block', wordBreak: 'break-word' as const, overflowWrap: 'break-word' as const, maxWidth: '100%' }}>{b}</span>
            ))}
          </div>
          {/* gov-style disclaimer */}
          <div style={{ padding: '0 0 0 16px', fontSize: 13, color:'rgba(255,255,255,.72)', lineHeight: 1.5 }}>
            2026 IRS brackets. Estimates only, not tax advice. Not affiliated with the IRS.
          </div>
        </div>
      </div>



      {/* STICKY RESULT BAR mobile */}
      {result && isMobile && (
        <div style={{ position: 'sticky', top: 60, zIndex: 90, background: 'rgba(7,17,31,0.95)', borderBottom: '2px solid #e8b84b', padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#C8D8EC', fontWeight: 500 }}>Estimated total tax</span>
          <span style={{ fontSize: 16, fontWeight: 900, color: '#e8b84b' }}>
            {Math.round(result.total).toLocaleString('en-US')} <span style={{ fontSize: 13, color:'rgba(255,255,255,.75)', fontWeight:400 }}>({result.rate}%)</span>
          </span>
        </div>
      )}

      {/* ━━ MAIN GRID ━━ */}
      <div className="main-grid-outer" style={{ maxWidth: 1200, margin: '0 auto', padding: '8px 12px 20px', display: 'grid', gridTemplateColumns: '1fr', gap: 14 }}>

        {/* ── LEFT ── */}
        <div>

          {/* TABS */}
          <div style={{ display: 'flex', borderBottom: '2px solid #d8dce6', marginBottom: 12, gap: 6, padding: '4px 4px 0' }}>
            {([
              { id: 'calc',      label: 'Tax Calculator'  },
              { id: 'deadlines', label: '2026 Deadlines'  },
              { id: 'platforms', label: 'All Platforms'   },
            ] as const).map(t => (
              <div key={t.id} onClick={() => setTab(t.id)} style={{
                padding: '6px 6px', fontSize: 13, fontWeight: 600, cursor: 'pointer', borderRadius: '6px 6px 0 0',
                color: tab === t.id ? '#1a1a2e' : '#c8d8ec', background: tab === t.id ? '#e8b84b' : '#1a2a4a',
                borderBottom: tab === t.id ? '2px solid #e8b84b' : '2px solid transparent', border: tab === t.id ? '1px solid #e8b84b' : '1px solid #d8dce6',
                marginBottom: -2, transition: 'all .15s', whiteSpace: 'normal', flex: 1, textAlign: 'center' as const, wordBreak: 'break-word',
              }}>
                {t.label}{tab !== t.id ? <span style={{marginLeft:8,fontSize:16,opacity:0.9,fontWeight:700}}>→</span> : <span style={{marginLeft:6,fontSize:14,fontWeight:700}}>▼</span>}
              </div>
            ))}
          </div>

          {/* ═══ CALCULATOR ═══ */}
          {tab === 'calc' && (
            <>
              {/* QUICK EXAMPLES */}
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 800, color:'rgba(255,255,255,.75)', textTransform:'uppercase' as const, letterSpacing: '1px', marginBottom: 8 }}>
                   Try These Real Examples
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }} className="examples-grid">
                  {/* 2-col desktop, 1-col mobile via inline media */}
                  {QUICK_EXAMPLES.map(ex => (
                    <a
                      key={ex.label}
                      href={ex.href} onClick={e => { e.preventDefault(); loadExample(ex) }}
                      style={{ background: '#102e52', border: '1px solid #2a6496', borderRadius: 10, padding: '12px 8px', cursor: 'pointer', transition: 'all .15s', textAlign: 'center' as const, textDecoration: 'none', display: 'block' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e8b84b'; (e.currentTarget as HTMLElement).style.background = '#1a3f6a' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2a6496'; (e.currentTarget as HTMLElement).style.background = '#102e52' }}
                    >
                      <div style={{ fontSize: 'clamp(16px,3.5vw,18px)', fontWeight: 800, color: '#ffffff', marginBottom: 6, textAlign: 'center', textShadow: '0 1px 3px rgba(0,0,0,.4)' }}>{ex.label}</div>
                      <div style={{ fontSize: 'clamp(13px,3vw,14px)', color: '#c3daf0', marginBottom: 6, textAlign: 'center' }}>{ex.tag}</div>
                      <div style={{ fontSize: 'clamp(14px,3vw,15px)', fontWeight: 700, color: '#f0c050', textAlign: 'center', letterSpacing: '.01em' }}>{'Open →'}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* FORM CARD */}
              <div style={card}>
                <div style={cardHd}>
                  <div style={accent}/>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}> Self-Employment Tax Estimator</span>
                  <span style={{ marginLeft: 'auto', background: 'rgba(255,255,255,.08)', color:'rgba(255,255,255,.8)', fontSize: 12, padding: '2px 6px', borderRadius: 3, whiteSpace: 'nowrap' as const, flexShrink: 0 }}>IRS SE</span>
                </div>
                <div style={{ padding: 16 }}>

                  {/* Section 1 */}
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#8fa8c8', textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 8, paddingBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    1. Your Gig Income
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 12 }} className="form-grid">
                    <div>
                      <label style={label} htmlFor="gig-platform-0">▸ Gig Platform</label>
                      <select style={inp}  id="gig-platform-0" value={platform} onChange={e => setPlatform(e.target.value)}>
                        {PLATFORMS.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={label} htmlFor="annual-gig-revenue-usd-setinco-1"> Annual Gig Revenue (USD)</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#8fa8c8', fontWeight: 700 }}>$</span>
                        <input id="annual-gig-revenue-usd-setinco-1" style={{ ...inp, paddingLeft: 24 }} type="number" min="0" value={income} onChange={e => setIncome(e.target.value)} placeholder="45,000"/>
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
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#8fa8c8', textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 8, paddingBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    2. Business Expenses <span style={{ fontWeight: 400, fontSize: 12, color: '#7a9abf' }}>(optional)</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 12 }} className="form-grid">
                    <div>
                      <label style={label}>▸ Business Miles Driven</label><input style={inp} type="number" min="0" placeholder="Jan–Jun miles (72.5¢)" aria-label="Business miles driven January to June" value={milesH1} onChange={e => setMilesH1(e.target.value)}/><input style={{ ...inp, marginTop: 8 }} type="number" min="0" placeholder="Jul–Dec miles (76¢)" aria-label="Business miles driven July to December" value={milesH2} onChange={e => setMilesH2(e.target.value)}/>
                      <div style={{ fontSize: 13, color: '#7a9abf', marginTop: 4 }}>72.5¢/mile Jan–Jun, 76¢/mile Jul–Dec (IRS 2026 rates)</div>
                    </div>
                    <div>
                      <label style={label}> Other Business Expenses</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#8fa8c8', fontWeight: 700 }}>$</span>
                        <input style={{ ...inp, paddingLeft: 24 }} type="number" min="0" placeholder="e.g. 2,000" aria-label="Other business expenses" value={expenses} onChange={e => setExpenses(e.target.value)}/>
                      </div>
                      <div style={{ fontSize: 13, color: '#7a9abf', marginTop: 4 }}>Phone, supplies, equipment…</div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#8fa8c8', textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 8, paddingBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    3. Where You Live &amp; File
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 12 }} className="form-grid">
                    <div>
                      <label style={label} htmlFor="gtx-state-home"> State of Residence</label>
                      <select style={inp}  id="gtx-state-home" value={stateCode} onChange={e => setStateCode(e.target.value)}>
                        {STATES.map(s => <option key={s.code} value={s.code}>{s.name} {s.rate === 0 ? '(No State Tax)' : `(${(s.rate*100).toFixed(1)}%)`}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={label} htmlFor="filing-status-2"> Filing Status</label>
                      <select style={inp}  id="filing-status-2" value={filing} onChange={e => setFiling(e.target.value)}>
                        <option value="single">Single</option>
                        <option value="married">Married Filing Jointly</option>
                        <option value="hoh">Head of Household</option>
                      </select>
                    </div>
                  </div>

                  <button type="button" style={{ ...btnDark, fontSize: 16, background: income ? "#4CAF50" : "#e8b84b", transition: "background 0.2s", border: "none", fontFamily: "inherit" }} onClick={calculate}> <span className="btn-arrow">Calculate My Gig Taxes <span className="arr">→</span></span></button>
                </div>
              </div>

              {/* RESULTS */}
              {result && (
                <div style={card}>
                  <div style={cardHd}>
                    <div style={accent}/>
                    <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}> Your Tax Estimate</span>
                  </div>

                  {/* 4 boxes */}
                  <div style={{ overflowX: 'auto' as const }}><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.1)', minWidth: 0 }} className="results-row">
                    {[
                      { label: 'SE Tax (15.3%)',    val: fmt(result.seTax),    sub: 'Schedule SE' },
                      { label: 'Federal Tax',       val: fmt(result.federal),  sub: 'Estimated'   },
                      { label: `${stateCode} State`,val: fmt(result.stateTax), sub: 'Estimated'   },
                      { label: 'Total Annual Tax',  val: fmt(result.total),    sub: `${result.rate}% effective`, hi: true },
                    ].map((r, i) => (
                      <div key={r.label} style={{ padding: '16px 14px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', background: r.hi ? 'rgba(232,184,75,0.15)' : 'rgba(13,27,62,0.6)', borderLeft: r.hi ? '4px solid #e8b84b' : 'none' }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#8fa8c8', textTransform: 'uppercase' as const, letterSpacing: '0.7px', marginBottom: 8, lineHeight: 1.4 }}>{r.label}</div>
                        <div style={{ fontSize: 18, fontWeight: 900, color: r.hi ? '#ff6b6b' : '#e8eef8', marginBottom: 3 }}>{r.val}</div>
                        <div style={{ fontSize: 13, color: '#7a9abf' }}>{r.sub}</div>
                      </div>
                    ))}
                  </div></div>

                  {/* 4 quarterly boxes */}
                  <div style={{ padding: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap' as const, gap: 8 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: 'rgba(255,255,255,0.9)' }}> Quarterly Payment Schedule</span>
                      <div style={{ ...btnRed(), width: 'auto', padding: '7px 14px', fontSize: 12 }}>+ Add All to Google Calendar</div>
                    </div>

                    <div style={{ overflowX: 'auto' as const }}><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, minWidth: 0 }} className="q-grid">
                      {DEADLINES.map((d, i) => (
                        <div key={d.q} style={{ border: i === nextDeadlineIdx() ? '2px solid #e8b84b' : '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 10, background: i === nextDeadlineIdx() ? 'rgba(232,184,75,0.12)' : 'rgba(255,255,255,0.04)', position: 'relative' as const }}>
                          {i === nextDeadlineIdx() && <div style={{ position: 'absolute', top: -10, left: 8, background:'#e8b84b',color:'#1a1a2e', fontSize: 13, padding: '2px 6px', borderRadius: 3, fontWeight: 800 }}> NEXT</div>}
                          <div style={{ fontSize: 12, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 3 }}>{d.q}</div>
                          <div style={{ fontSize: 13, color: '#7a9abf', marginBottom: 8 }}>{d.due}</div>
                          <div style={{ fontSize: 20, fontWeight: 900, color: i === nextDeadlineIdx() ? '#e8b84b' : 'rgba(255,255,255,0.75)', marginBottom: 10 }}>{fmt(result.quarterly)}</div>
                          <div style={{...btnRed({ fontSize: 13, padding: '6px 0' }), cursor:'pointer'}} onClick={()=>{ const urls = {'Q1 2026':'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Q1%202026%20IRS%20Estimated%20Tax%20Payment%20Due&dates=20260415/20260416&details=IRS%20quarterly%20estimated%20tax%20payment%20due.%20Pay%20at%3A%20https%3A%2F%2Fwww.irs.gov%2Fpayments&sf=true&output=xml','Q2 2026':'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Q2%202026%20IRS%20Estimated%20Tax%20Payment%20Due&dates=20260615/20260617&details=IRS%20quarterly%20estimated%20tax%20payment%20due.%20Pay%20at%3A%20https%3A%2F%2Fwww.irs.gov%2Fpayments&sf=true&output=xml','Q3 2026':'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Q3%202026%20IRS%20Estimated%20Tax%20Payment%20Due&dates=20260915/20260916&details=IRS%20quarterly%20estimated%20tax%20payment%20due.%20Pay%20at%3A%20https%3A%2F%2Fwww.irs.gov%2Fpayments&sf=true&output=xml','Q4 2026':'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Q4%202026%20IRS%20Estimated%20Tax%20Payment%20Due&dates=20270115/20270116&details=IRS%20quarterly%20estimated%20tax%20payment%20due.%20Pay%20at%3A%20https%3A%2F%2Fwww.irs.gov%2Fpayments&sf=true&output=xml'}; window.open(urls[d.q],'_blank'); }}>+ Calendar</div>
                        </div>
                      ))}
                    </div></div>
                    <button onClick={()=>{const t=[DEADLINES.map(d=>d.q+' — due '+d.due+': '+fmt(result.quarterly)).join('\n')].join('');navigator.clipboard.writeText(t).then(()=>{setCopiedSched(true);setTimeout(()=>setCopiedSched(false),2000)});}} style={{marginTop:'10px',padding:'8px 18px',borderRadius:'8px',border:'1px solid rgba(232,184,75,0.4)',background:'rgba(232,184,75,0.08)',color:'#e8b84b',fontSize:'13px',fontWeight:700,cursor:'pointer',width:'100%'}}>{copiedSched ? "✓ Copied!" : " Copy Quarterly Schedule"}</button>

                    <div style={{ marginTop: 10, background: 'rgba(232,184,75,0.1)', border: '1px solid #fde68a', borderRadius: 4, padding: '10px 14px', fontSize: 12, color: '#fcd34d', textAlign: 'left' as const, lineHeight: 1.6 }}>
                       <strong>Disclaimer:</strong> Estimates for planning purposes only. Consult a licensed CPA or visit IRS.gov for official guidance. Not tax advice.
                    </div>
                    <div style={{ marginTop: 10, background: 'rgba(5,150,105,0.12)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 4, padding: '10px 14px', fontSize: 12, color: '#4ade80', lineHeight: 1.6 }}>
                       <strong>Worried about penalties?</strong> Check if you are on track for 2026 quarterly payments.{' '}
                      <a href="/tax-penalty-finder" style={{ color: '#4ade80', fontWeight: 700 }}>→ Open Penalty Finder</a>
                    </div>
                    <BehindOnTaxes page="home" />
                  </div>
                </div>
              )}

              {/* HOW THIS CALCULATOR WORKS */}
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, overflow: 'hidden' as const, marginTop: 12 }}>
                <div style={{ background: 'rgba(255,255,255,0.07)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }}/>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>How This Calculator Works</span>
                </div>
                <div style={{ padding: '12px 16px', display: 'grid', gridTemplateColumns: '1fr', gap: 14 }} className="form-grid">
                  {[
                    { label: 'Self-employment tax', detail: '92.35% of net earnings × 15.3% (12.4% Social Security + 2.9% Medicare). You deduct 50% of SE tax from taxable income.' },
                    { label: 'Federal income tax', detail: '2026 IRS tax brackets with standard deduction ($16,100 single / $32,200 married). Rates from 10% to 37%.' },
                    { label: 'State income tax', detail: '2026 state rates for all 50 states + DC — from 0% (TX, FL, NV, WA) to 13.3% (CA). Updated each tax year.' },
                  ].map(item => (
                    <div key={item.label} style={{ borderLeft: '3px solid #e8b84b', paddingLeft: 12 }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 12, color: '#8fa8c8', lineHeight: 1.6 }}>{item.detail}</div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '0 16px 10px' }}>
                  <a href="/how-we-calculate-gig-taxes" style={{ fontSize: 12, color: '#e8b84b', fontWeight: 700, textDecoration: 'none' }}>See full methodology: how we calculate 2026 gig taxes →</a>
                </div>
              </div>

              {/* HIGH INCOME BLOCK */}
              {result && parseFloat(income) >= 150000 && (
                <div className="high-income-note" style={{ background: 'rgba(16,46,82,0.72)', border: '1px solid rgba(232,184,75,0.32)', borderLeft: '3px solid #e8b84b', borderRadius: 6, padding: '14px 16px', marginBottom: 10 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#e8b84b', letterSpacing: '0.5px', textTransform: 'uppercase' as const, marginBottom: 10 }}> High-Income Gig Worker (over $150k)</div>
                  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: '#e8b84b', fontSize: 16, marginTop: 1 }}>▸</span>
                      <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)', lineHeight: 1.65 }}><strong style={{ color: '#fff' }}>Additional Medicare Tax (0.9%)</strong> — the estimate applies a simplified threshold to self-employment income only. It does not combine W-2 wages or other Medicare wages, so high-income results may differ from Form 8959.</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: '#e8b84b', fontSize: 16, marginTop: 1 }}>▸</span>
                      <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)', lineHeight: 1.65 }}><strong style={{ color: '#fff' }}>State estimate</strong> — the calculator uses a simplified flat state percentage, not progressive brackets, local taxes, or state-specific deductions. Treat this part as a rough planning estimate.</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: '#e8b84b', fontSize: 16, marginTop: 1 }}>▸</span>
                      <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)', lineHeight: 1.65 }}><strong style={{ color: '#fff' }}>Estimated tax timing</strong> — equal quarterly payments are a simplification. With uneven income, IRS annualized-income rules may affect when estimated payments are due.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* PLATFORM GRID */}
              <div style={card}>
                <div style={cardHd}>
                  <div style={accent}/>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}> Select Your Platform</span>
                  <span style={{ marginLeft: 'auto', fontSize: 12, color:'rgba(255,255,255,.8)' }}>51-state tax included</span>
                </div>
                <div style={{ padding: 16, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8 }} className="p-grid">
                  {PLATFORMS.map(p => (
                    <Link key={p.name} href={p.href} style={{ textDecoration: 'none' }}>
                      <div className={platform === p.name ? 'plat-card plat-card--active' : 'plat-card'} style={{ cursor: 'pointer', position: 'relative' as const }}>
                        
                        <div style={{ fontSize: 15, fontWeight: 700, color: '#e8eef8', marginBottom: 4 }}>{p.name}</div>
                        <div style={{ fontSize: 12, color: '#e8b84b', fontWeight: 600, marginBottom: 8 }}>{p.searches}</div>
                        <div className="plat-btn" style={{background:'#e8b84b',color:'#1a1a2e',fontSize:13,fontWeight:700,padding:'8px 12px',borderRadius:4,marginTop:4}}>Open Calculator</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </>
          )}

          {/* ═══ DEADLINES ═══ */}
          {tab === 'deadlines' && (
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}> 2026 IRS Estimated Tax Deadlines</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '4px 0' }}>
                {DEADLINES.map((d,i) => (
                  <div key={d.q} style={{ background: i === nextDeadlineIdx() ? 'rgba(232,184,75,0.12)' : 'rgba(255,255,255,0.03)', border: i === nextDeadlineIdx() ? '1px solid rgba(232,184,75,0.35)' : '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '14px 16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <span style={{ fontWeight: 800, fontSize: 15, color: 'rgba(255,255,255,0.95)' }}>
                        {i === nextDeadlineIdx() && <span style={{ background:'#e8b84b', color:'#1a1a2e', fontSize: 9, padding: '2px 6px', borderRadius: 2, marginRight: 8, fontWeight: 800 }}>NEXT</span>}
                        {d.q}
                      </span>
                      <span style={{ color: '#8fa8c8', fontSize: 13 }}>{d.period}</span>
                    </div>
                    <div style={{ textAlign: 'center', margin: '8px 0' }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: i === nextDeadlineIdx() ? '#e8b84b' : 'rgba(255,255,255,0.85)' }}>{d.due}</div>
                      <div style={{ marginTop: 4 }}>
                        <span style={{ background: i === nextDeadlineIdx() ? 'rgba(232,184,75,0.2)' : 'rgba(255,255,255,0.08)', color: i === nextDeadlineIdx() ? '#ff8080' : '#c8d8ec', padding: '3px 12px', borderRadius: 12, fontSize: 12, fontWeight: 700 }}>{dueLabel(d.due)}</span>
                      </div>
                    </div>
                    <div style={{...btnRed({ fontSize: 13, padding: '9px 0' }), cursor:'pointer'}} onClick={()=>{ const urls = {'Q1 2026':'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Q1%202026%20IRS%20Estimated%20Tax%20Payment%20Due&dates=20260415/20260416&details=IRS%20quarterly%20estimated%20tax%20payment%20due.%20Pay%20at%3A%20https%3A%2F%2Fwww.irs.gov%2Fpayments&sf=true&output=xml','Q2 2026':'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Q2%202026%20IRS%20Estimated%20Tax%20Payment%20Due&dates=20260615/20260617&details=IRS%20quarterly%20estimated%20tax%20payment%20due.%20Pay%20at%3A%20https%3A%2F%2Fwww.irs.gov%2Fpayments&sf=true&output=xml','Q3 2026':'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Q3%202026%20IRS%20Estimated%20Tax%20Payment%20Due&dates=20260915/20260916&details=IRS%20quarterly%20estimated%20tax%20payment%20due.%20Pay%20at%3A%20https%3A%2F%2Fwww.irs.gov%2Fpayments&sf=true&output=xml','Q4 2026':'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Q4%202026%20IRS%20Estimated%20Tax%20Payment%20Due&dates=20270115/20270116&details=IRS%20quarterly%20estimated%20tax%20payment%20due.%20Pay%20at%3A%20https%3A%2F%2Fwww.irs.gov%2Fpayments&sf=true&output=xml'}; window.open(urls[d.q],'_blank'); }}>+ Calendar</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══ PLATFORMS ═══ */}
          {tab === 'platforms' && (
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}> All Supported Platforms</span>
              </div>
              <div style={{ overflowX: 'auto' as const }}>
                <div style={{overflowX:'auto',WebkitOverflowScrolling:'touch'}}><table className="plat-table" style={{ width: '100%', borderCollapse: 'collapse' as const }}>
                  <thead>
                    <tr style={{ background: '#0d1f3c', borderBottom: '2px solid rgba(255,255,255,0.15)' }}>
                      {['Platform','Cost','SE Tax Rate','State Tax','Competition'].map(h => (
                        <th key={h} style={{ padding: '11px 16px', fontSize: 13, fontWeight: 700, color: '#8fa8c8', textTransform: 'uppercase' as const, letterSpacing: '0.8px', textAlign: 'left' as const }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PLATFORMS.map((p,i) => (
                      <tr key={p.name} onClick={()=>window.location.href=p.href} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: i%2===0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.01)', cursor:'pointer', transition:'background .15s' }} onMouseEnter={e=>(e.currentTarget.style.background='rgba(232,184,75,0.08)')} onMouseLeave={e=>(e.currentTarget.style.background=i%2===0?'rgba(255,255,255,0.04)':'rgba(255,255,255,0.01)')}>
                        <td style={{ padding: '12px 16px', fontWeight: 700, fontSize: 14, color: 'rgba(255,255,255,0.9)' }}>
                          <span style={{ fontSize: 18, marginRight: 10 }}></span>{p.name}
                          
                        </td>
                        <td style={{ padding: '12px 16px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{p.searches}</td>
                        <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>15.3%</td>
                        <td style={{ padding: '12px 16px', color: '#059669', fontWeight: 600 }}>Included ✓</td>
                        <td style={{ padding: '12px 16px' }}>
                          <span style={{ background: 'rgba(5,150,105,0.2)', color: '#4ade80', padding: '3px 10px', borderRadius: 12, fontSize: 13, fontWeight: 700, border: '1px solid rgba(74,222,128,0.3)' }}>Low ✓</span>
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


          {/* TRUST */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#8fa8c8', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 10 }}> About This Tool</div>
            <div style={{ fontSize: 12, color: '#c8d8ec', lineHeight: 1.7, textAlign: 'left' as const }}>
              GigWiseTax.com is an independent, free estimation tool. Not affiliated with the IRS or any government agency. No personal data is stored. Results are estimates only — not tax advice.
            </div>
            <div style={{ marginTop: 12, display: 'flex', gap: 16 }}>
              {[['Privacy','/privacy'],['Terms','/terms'],['Contact','/contact']].map(([l, h]) => (
                <a key={l} href={h} style={{ fontSize: 14, color: '#c3daf0', textDecoration: 'underline', minHeight: 36, display: 'inline-flex', alignItems: 'center' }}>{l}</a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ══ GIG WORKER TAX HUB ══ */}
      <div className="home-lower" style={{maxWidth:1200,margin:'0 auto',padding:'32px 16px 0',overflowX:'hidden',boxSizing:'border-box'}}>

        {/* QUARTERLY ESTIMATOR */}
        <div className="home-lower-section" style={{marginBottom:48}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <div style={{width:3,height:20,background:'#e8b84b',borderRadius:2}}/>
            <span style={{fontSize:11,fontWeight:800,color:'#e8b84b',letterSpacing:'1.5px',textTransform:'uppercase'}}>Quick Quarterly Estimator</span>
          </div>
          <h2 style={{fontSize:22,fontWeight:900,color:'#C8D8EC',marginBottom:6,marginLeft:13}}>How Much Should You Pay Each Quarter?</h2>
          <p style={{fontSize:13,color:'rgba(200,216,236,0.85)',marginBottom:20,marginLeft:13,maxWidth:640}}>If you expect to owe $1,000 or more, the IRS requires quarterly estimated payments. Enter your weekly earnings to see your schedule.</p>
          <QuarterlyEstimator />
        </div>
        {/* LONG-TAIL EXAMPLES */}
        <div className="home-lower-section" style={{marginBottom:48}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:8}}>
            <div style={{width:3,height:20,background:'#e8b84b',borderRadius:2}}/>
            <span style={{fontSize:11,fontWeight:800,color:'#e8b84b',letterSpacing:'1.5px',textTransform:'uppercase'}}>Illustrative Examples</span>
          </div>
          <h2 style={{fontSize:22,fontWeight:900,color:'#fff',marginBottom:6,marginLeft:13}}>What Gig Workers May Pay: Example Calculations</h2>
          <p style={{fontSize:13,color:'rgba(255,255,255,0.45)',marginBottom:20,marginLeft:13}}>Illustrative single-filer examples using 2026 IRS brackets and the standard deduction, with no other income, credits or withholding. SE tax + federal + state included.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr',gap:0,border:'1px solid rgba(255,255,255,0.08)',borderRadius:10,overflow:'hidden'}}>
            {[
              {label:'DoorDash $40,000 — California',se:'$5,652',fed:'$2,281',state:'$1,960',net:'~$30,107',href:'/doordash/california'},
              {label:'Uber $50,000 — Texas',se:'$7,065',fed:'$3,396',state:'$0',net:'~$39,539',href:'/uber/texas'},
              {label:'OnlyFans $60,000 — Florida',se:'$8,478',fed:'$4,511',state:'$0',net:'~$47,011',href:'/onlyfans/florida'},
              {label:'Etsy $30,000 — New York',se:'$4,239',fed:'$1,178',state:'$807',net:'~$23,776',href:'/etsy/new-york'},
              {label:'Instacart $35,000 — Illinois',se:'$4,945',fed:'$1,723',state:'$813',net:'~$27,518',href:'/instacart/illinois'},
              {label:'Airbnb $55,000 (Schedule C host) — Washington',se:'$7,771',fed:'$3,954',state:'$0',net:'~$43,275',href:'/airbnb/washington'},
            ].map((ex,i)=>(
              <a key={i} href={ex.href} style={{background: i%2===0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.01)',borderTop: i===0 ? 'none' : '2px solid rgba(232,184,75,0.25)',padding:'16px 16px',textDecoration:'none',display:'block'}}>
                <div style={{fontSize:17,fontWeight:800,color:'#e8b84b',marginBottom:14,textAlign:'center'}}>{ex.label}</div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'10px 8px',marginBottom:14,textAlign:'center'}}>
                  <div style={{fontSize:12,color:'rgba(255,255,255,0.55)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.5px'}}>SE Tax</div>
                  <div style={{fontSize:12,color:'rgba(255,255,255,0.55)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.5px'}}>Federal</div>
                  <div style={{fontSize:12,color:'rgba(255,255,255,0.55)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.5px'}}>State</div>
                  <div style={{fontSize:17,color:'#f87171',fontWeight:800}}>{ex.se}</div>
                  <div style={{fontSize:17,color:'#f87171',fontWeight:800}}>{ex.fed}</div>
                  <div style={{fontSize:17,color:'#f87171',fontWeight:800}}>{ex.state}</div>
                </div>
                <div style={{borderTop:'1px solid rgba(255,255,255,0.12)',paddingTop:10,marginTop:4,fontSize:22,fontWeight:900,color:'#4ade80',textAlign:'center'}}>Take-home {ex.net}</div>
              </a>
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
        .plat-card:hover{transform:translateY(-3px)!important;box-shadow:0 8px 24px rgba(0,0,0,0.35)!important;border-color:rgba(232,184,75,0.5)!important;}
        .plat-card--active{transform:translateY(-2px)!important;box-shadow:0 6px 20px rgba(232,184,75,0.2)!important;}
        @media(min-width:961px){.p-grid{grid-template-columns:repeat(4,1fr)!important;}}
        @media(min-width:961px){
          .form-grid{grid-template-columns:1fr 1fr!important;}
          .results-row{grid-template-columns:repeat(4,1fr)!important;}
          .q-grid{grid-template-columns:repeat(4,1fr)!important;}
          .p-grid{grid-template-columns:repeat(4,1fr)!important;}
        }
        @media(max-width:960px){.main-grid{grid-template-columns:1fr!important;}
          .main-grid{grid-template-columns:1fr!important}
          .form-grid{grid-template-columns:1fr!important}
          .results-row{grid-template-columns:1fr 1fr!important}
          .q-grid{grid-template-columns:1fr 1fr!important}
          .p-grid{grid-template-columns:repeat(2,1fr)!important}
        }
        @media(max-width:540px){.main-grid{grid-template-columns:1fr!important;padding:8px 8px!important;}
          .plat-row{flex-direction:column!important;align-items:stretch!important;text-align:center!important;}
          .plat-row>div:last-child{text-align:center!important;}
          .partner-banners{grid-template-columns:1fr!important;padding:0 8px 16px!important;}
          .internal-links-grid{grid-template-columns:1fr!important;gap:6px!important;}
          .results-row{grid-template-columns:1fr 1fr!important}
          .q-grid{grid-template-columns:1fr 1fr!important}
          .p-grid{grid-template-columns:1fr 1fr!important}
        }
      `}</style>
    </div>
  )
}
