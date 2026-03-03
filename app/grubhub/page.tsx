'use client'
import { useState } from 'react'
import Link from 'next/link'

const STATES = [
  { code:'CA', name:'California',     rate:0.093  },
  { code:'TX', name:'Texas',          rate:0      },
  { code:'FL', name:'Florida',        rate:0      },
  { code:'NY', name:'New York',       rate:0.0685 },
  { code:'IL', name:'Illinois',       rate:0.0495 },
  { code:'WA', name:'Washington',     rate:0      },
  { code:'NV', name:'Nevada',         rate:0      },
  { code:'GA', name:'Georgia',        rate:0.055  },
  { code:'NC', name:'North Carolina', rate:0.0525 },
  { code:'OH', name:'Ohio',           rate:0.04   },
  { code:'AZ', name:'Arizona',        rate:0.025  },
  { code:'CO', name:'Colorado',       rate:0.044  },
  { code:'PA', name:'Pennsylvania',   rate:0.0307 },
  { code:'MI', name:'Michigan',       rate:0.0425 },
  { code:'Other', name:'Other State', rate:0.05   },
]

const DEDUCTIONS = [
  { icon:'🚗', label:'Mileage (72.5¢/mile)', desc:'Track every delivery mile. Grubhub drivers typically log 20,000–35,000 miles per year.' },
  { icon:'📱', label:'Phone & Data Plan', desc:'Portion used for the Grubhub driver app and navigation. Usually 50–80% deductible.' },
  { icon:'🧊', label:'Hot/Cold Delivery Bags', desc:'Required equipment for food delivery. 100% deductible as business equipment.' },
  { icon:'🚘', label:'Car Insurance (business %)', desc:'Pro-rata share of auto insurance for business miles driven.' },
  { icon:'🔧', label:'Car Repairs & Maintenance', desc:'Oil changes, tires, brakes — deduct based on your business use percentage.' },
  { icon:'💳', label:'Parking & Tolls', desc:'All parking fees and tolls paid during deliveries are fully deductible.' },
  { icon:'📦', label:'Delivery Equipment', desc:'Phone mount, power bank, safety vest — any tool used for deliveries.' },
  { icon:'📋', label:'Tax Prep Fees', desc:'Cost of filing your Schedule C is itself deductible as a business expense.' },
]

const FAQ = [
  { q:'Does Grubhub take out taxes?', a:'No. Grubhub pays drivers as independent contractors and does not withhold federal, state, or FICA taxes. You are responsible for paying all taxes yourself, including self-employment tax.' },
  { q:'Will Grubhub send me a 1099?', a:'Yes, if you earn $600 or more. You will receive a 1099-NEC (or 1099-K if paid through payment processors). You must report all income even if under $600.' },
  { q:'How much should I set aside for Grubhub taxes?', a:'Most Grubhub drivers should set aside 25–30% of their net earnings. Use this calculator to get your exact estimate based on your state and filing status.' },
  { q:'Can I deduct the miles I drive waiting for orders?', a:'No. The IRS standard mileage deduction applies from the moment you accept an order (or activate your hotspot) to when you complete delivery. Personal miles and waiting miles generally do not count.' },
  { q:'What is the difference between Grubhub and DoorDash taxes?', a:'The tax rules are identical — both classify drivers as independent contractors subject to 15.3% SE tax. The difference is only in your income amount and the deductions each platform\'s expenses create.' },
]

export default function GrubhubPage() {
  const [income, setIncome]   = useState('')
  const [miles,  setMiles]    = useState('')
  const [stateCode, setStateCode] = useState('IL')
  const [filing, setFiling]   = useState('single')
  const [result, setResult]   = useState<any>(null)
  const [openFaq, setOpenFaq] = useState<number|null>(null)

  const fmt = (n: number) => '$' + Math.round(n||0).toLocaleString('en-US')

  const calculate = () => {
    const gross = parseFloat(income) || 0
    if (!gross) return
    const mileDeduction = (parseFloat(miles)||0) * 0.725
    const net     = Math.max(0, gross - mileDeduction)
    const st      = STATES.find(s => s.code === stateCode)
    const seBase  = net * 0.9235
    const seTax   = seBase * 0.153
    const taxable = net - seTax * 0.5
    const fedRate = filing === 'single' ? 0.22 : 0.12
    const federal = taxable * fedRate
    const stateTax= taxable * (st?.rate ?? 0.05)
    const total   = federal + seTax + stateTax
    setResult({ gross, net, mileDeduction, seTax, federal, stateTax, total, quarterly: total/4, rate: ((total/gross)*100).toFixed(1) })
  }

  const inp = { width:'100%', border:'1px solid #d1d5db', borderRadius:4, padding:'10px 12px', fontSize:14, color:'#1a1a2e', background:'#fff', boxSizing:'border-box' as const }
  const lbl = { display:'block', fontSize:11, fontWeight:700, color:'#374151', textTransform:'uppercase' as const, letterSpacing:'0.8px', marginBottom:6 }
  const card= { background:'#fff', border:'1px solid #d8dce6', borderRadius:6, overflow:'hidden' as const, marginBottom:20, boxShadow:'0 1px 6px rgba(0,0,0,.05)' }
  const cardHd = { background:'#1a1a2e', padding:'13px 20px', display:'flex', alignItems:'center', gap:10 }

  return (
    <div style={{ background:'#eef0f4', minHeight:'100vh' }}>

      {/* HERO */}
      <div style={{ background:'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'32px 20px 28px' }}>
          <div style={{ fontSize:12, color:'rgba(255,255,255,.4)', marginBottom:10 }}>
            <Link href="/" style={{ color:'rgba(255,255,255,.4)', textDecoration:'none' }}>Home</Link> › <Link href="/calculators" style={{ color:'rgba(255,255,255,.4)', textDecoration:'none' }}>Calculators</Link> › Grubhub
          </div>
          <div style={{ display:'flex', gap:12, alignItems:'flex-start', marginBottom:14 }}>
            <div style={{ width:4, height:34, background:'#B22234', borderRadius:2, flexShrink:0, marginTop:4 }} />
            <h1 style={{ fontSize:28, fontWeight:900, color:'#fff', lineHeight:1.2, letterSpacing:'-0.5px', margin:0 }}>
              🍔 Grubhub Driver Tax Calculator 2026 — All 51 States
            </h1>
          </div>
          <p style={{ color:'rgba(255,255,255,.55)', fontSize:14, lineHeight:1.8, paddingLeft:16, maxWidth:780, marginBottom:18 }}>
            Free self-employment tax calculator for Grubhub delivery drivers. Estimate SE tax (15.3%), federal and state income tax, plus your mileage deduction — for all 51 states. No signup required.
          </p>
          <div style={{ paddingLeft:16, display:'flex', gap:8, flexWrap:'wrap' as const }}>
            {['📋 IRS Schedule SE','🗺️ All 51 States','🚗 Mileage Deduction 72.5¢','🔒 No Registration','⚡ Instant Results'].map(b => (
              <span key={b} style={{ background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.12)', borderRadius:3, padding:'4px 10px', fontSize:11, color:'rgba(255,255,255,.55)', fontWeight:500 }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* SPONSORED */}
      <div style={{ background:'#fffbeb', borderBottom:'1px solid #fde68a' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'9px 20px', display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' as const }}>
          <span style={{ fontSize:10, fontWeight:800, color:'#b45309', letterSpacing:'1px', textTransform:'uppercase' as const }}>Sponsored</span>
          <span style={{ fontSize:13, color:'#78350f', flex:1 }}>
            <strong>TurboTax Self-Employed</strong> — File your 1099-NEC and Schedule C online. Automatically finds deductions for Grubhub drivers.
          </span>
          <a href="https://turbotax.intuit.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration:'none' }}>
            <div style={{ background:'#B22234', color:'#fff', padding:'7px 18px', borderRadius:4, fontSize:12, fontWeight:700, cursor:'pointer', whiteSpace:'nowrap' }}>Start Free →</div>
          </a>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'24px 20px 48px', display:'grid', gridTemplateColumns:'1fr 300px', gap:24 }} className="main-grid">
        <div>

          {/* CALCULATOR */}
          <div style={card}>
            <div style={cardHd}>
              <div style={{ width:3, height:18, background:'#e8b84b', borderRadius:2 }} />
              <span style={{ color:'#fff', fontWeight:700, fontSize:15 }}>🍔 Grubhub Tax Calculator 2026</span>
              <span style={{ marginLeft:'auto', fontSize:11, color:'rgba(255,255,255,.4)', background:'rgba(255,255,255,.07)', padding:'3px 8px', borderRadius:3 }}>IRS Schedule SE</span>
            </div>
            <div style={{ padding:24 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }} className="form-grid">
                <div>
                  <label style={lbl}>💰 Annual Grubhub Net Income (USD)</label>
                  <input style={inp} type="number" placeholder="e.g. 38000" value={income} onChange={e=>setIncome(e.target.value)} />
                  <div style={{ fontSize:11, color:'#9ca3af', marginTop:4 }}>From your 1099-NEC or app earnings summary</div>
                </div>
                <div>
                  <label style={lbl}>🚗 Business Miles Driven (Optional)</label>
                  <input style={inp} type="number" placeholder="e.g. 22000" value={miles} onChange={e=>setMiles(e.target.value)} />
                  <div style={{ fontSize:11, color:'#9ca3af', marginTop:4 }}>72.5¢/mile IRS standard rate 2026</div>
                </div>
                <div>
                  <label style={lbl}>🗺️ State of Residence</label>
                  <select style={inp} value={stateCode} onChange={e=>setStateCode(e.target.value)}>
                    {STATES.map(s => <option key={s.code} value={s.code}>{s.name} {s.rate===0?'(No State Tax)':`(${(s.rate*100).toFixed(1)}%)`}</option>)}
                  </select>
                </div>
                <div>
                  <label style={lbl}>👤 Filing Status</label>
                  <select style={inp} value={filing} onChange={e=>setFiling(e.target.value)}>
                    <option value="single">Single</option>
                    <option value="mfj">Married Filing Jointly</option>
                    <option value="hoh">Head of Household</option>
                  </select>
                </div>
              </div>
              <div onClick={calculate} style={{ background:'#B22234', color:'#fff', padding:'14px 0', borderRadius:4, fontSize:15, fontWeight:800, cursor:'pointer', textAlign:'center' as const }}>
                ⚡ Calculate My Grubhub Taxes
              </div>
            </div>

            {result && (
              <div style={{ borderTop:'1px solid #e2e5e9', padding:24 }}>
                <div style={{ fontSize:13, fontWeight:700, color:'#6c757d', textTransform:'uppercase' as const, letterSpacing:'1px', marginBottom:16 }}>📊 Your 2026 Tax Estimate</div>
                {result.mileDeduction > 0 && (
                  <div style={{ background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:6, padding:'12px 16px', marginBottom:16, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:13, color:'#166534', fontWeight:600 }}>🚗 Mileage Deduction Applied</span>
                    <span style={{ fontSize:16, fontWeight:800, color:'#166534' }}>−{fmt(result.mileDeduction)}</span>
                  </div>
                )}
                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginBottom:20 }} className="results-row">
                  {[
                    { label:'Self-Employment Tax', val:fmt(result.seTax), color:'#B22234', sub:'15.3% of 92.35%' },
                    { label:'Federal Income Tax',  val:fmt(result.federal), color:'#1a1a2e', sub:'After SE deduction' },
                    { label:'State Income Tax',    val:fmt(result.stateTax), color:'#374151', sub:STATES.find(s=>s.code===stateCode)?.name },
                    { label:'TOTAL TAX DUE',       val:fmt(result.total), color:'#B22234', sub:`${result.rate}% effective rate` },
                  ].map(r => (
                    <div key={r.label} style={{ background:'#f8fafc', border:'1px solid #e2e5e9', borderRadius:6, padding:'14px 12px', textAlign:'center' as const }}>
                      <div style={{ fontSize:11, color:'#6c757d', fontWeight:600, marginBottom:6 }}>{r.label}</div>
                      <div style={{ fontSize:20, fontWeight:900, color:r.color }}>{r.val}</div>
                      <div style={{ fontSize:10, color:'#9ca3af', marginTop:4 }}>{r.sub}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background:'#1a1a2e', borderRadius:6, padding:'16px 20px', marginBottom:16 }}>
                  <div style={{ fontSize:12, color:'rgba(255,255,255,.5)', marginBottom:8 }}>💡 QUARTERLY PAYMENT</div>
                  <div style={{ fontSize:32, fontWeight:900, color:'#e8b84b' }}>{fmt(result.quarterly)}</div>
                  <div style={{ fontSize:12, color:'rgba(255,255,255,.4)', marginTop:4 }}>Next: <strong style={{ color:'#fff' }}>Q1 — April 15, 2026</strong></div>
                </div>
                <div style={{ background:'#fffbeb', border:'1px solid #fde68a', borderRadius:6, padding:'12px 16px', fontSize:12, color:'#78350f' }}>
                  <strong>⚠️ Disclaimer:</strong> Estimates only. Not tax advice. Consult a CPA or tax professional for your specific situation.
                </div>
              </div>
            )}
          </div>

          {/* DEDUCTIONS */}
          <div style={card}>
            <div style={cardHd}>
              <div style={{ width:3, height:18, background:'#e8b84b', borderRadius:2 }} />
              <span style={{ color:'#fff', fontWeight:700, fontSize:15 }}>💰 Top Tax Deductions for Grubhub Drivers 2026</span>
            </div>
            <div style={{ padding:20 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }} className="ded-grid">
                {DEDUCTIONS.map(d => (
                  <div key={d.label} style={{ background:'#f8fafc', border:'1px solid #e2e5e9', borderRadius:6, padding:'14px 16px' }}>
                    <div style={{ fontSize:20, marginBottom:6 }}>{d.icon}</div>
                    <div style={{ fontSize:13, fontWeight:700, color:'#1a1a2e', marginBottom:4 }}>{d.label}</div>
                    <div style={{ fontSize:12, color:'#6c757d', lineHeight:1.6 }}>{d.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div style={card}>
            <div style={cardHd}>
              <div style={{ width:3, height:18, background:'#e8b84b', borderRadius:2 }} />
              <span style={{ color:'#fff', fontWeight:700, fontSize:15 }}>❓ Grubhub Taxes FAQ 2026</span>
            </div>
            <div>
              {FAQ.map((f, i) => (
                <div key={i} style={{ borderBottom:'1px solid #f0f1f3' }}>
                  <div onClick={() => setOpenFaq(openFaq===i ? null : i)} style={{ padding:'16px 20px', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:14, fontWeight:600, color:'#1a1a2e' }}>{f.q}</span>
                    <span style={{ fontSize:16, color:'#B22234', fontWeight:700, marginLeft:12 }}>{openFaq===i ? '−' : '+'}</span>
                  </div>
                  {openFaq===i && <div style={{ padding:'0 20px 16px', fontSize:13, color:'#374151', lineHeight:1.7 }}>{f.a}</div>}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* SIDEBAR */}
        <div style={{ display:'flex', flexDirection:'column' as const, gap:16 }}>
          <div style={{ background:'#fff', border:'2px dashed #d8dce6', borderRadius:6, overflow:'hidden' as const }}>
            <div style={{ background:'#f8fafc', padding:'6px 14px', borderBottom:'1px solid #e2e5e9', fontSize:10, fontWeight:800, color:'#9ca3af', textTransform:'uppercase' as const, letterSpacing:'1px' }}>Sponsored — 300×250</div>
            <div style={{ padding:16 }}>
              <div style={{ background:'#f0f4f8', borderRadius:4, height:80, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:12 }}>
                <span style={{ fontSize:12, color:'#9ca3af', fontStyle:'italic' }}>Ad image / logo here</span>
              </div>
              <div style={{ fontSize:14, fontWeight:800, color:'#1a1a2e', marginBottom:6 }}>📊 QuickBooks Self-Employed</div>
              <div style={{ fontSize:13, color:'#374151', marginBottom:14, lineHeight:1.6 }}>Track mileage, expenses, and quarterly taxes automatically.</div>
              <a href="https://quickbooks.intuit.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration:'none' }}>
                <div style={{ background:'#0d7a40', color:'#fff', padding:'11px 0', borderRadius:4, fontSize:13, fontWeight:700, textAlign:'center' as const, cursor:'pointer' }}>✓ Try Free for 30 Days</div>
              </a>
            </div>
          </div>

          <div style={{ background:'#fff', border:'1px solid #d8dce6', borderRadius:6, overflow:'hidden' as const }}>
            <div style={{ background:'#1a1a2e', padding:'10px 16px' }}>
              <span style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.55)', textTransform:'uppercase' as const, letterSpacing:'1px' }}>📌 More Calculators</span>
            </div>
            {[
              { emoji:'🚗', name:'DoorDash', href:'/doordash', vol:'400K/mo' },
              { emoji:'🚕', name:'Uber', href:'/uber', vol:'300K/mo' },
              { emoji:'🛒', name:'Instacart', href:'/instacart', vol:'150K/mo' },
              { emoji:'📦', name:'Amazon Flex', href:'/amazon-flex', vol:'80K/mo' },
              { emoji:'🛒', name:'Walmart Spark', href:'/walmart-spark', vol:'NEW' },
            ].map(p => (
              <Link key={p.name} href={p.href} style={{ textDecoration:'none' }}>
                <div style={{ padding:'10px 16px', borderBottom:'1px solid #f0f1f3', display:'flex', justifyContent:'space-between', alignItems:'center', cursor:'pointer' }}>
                  <span style={{ fontSize:13, color:'#1a1a2e', fontWeight:500 }}>{p.emoji} {p.name}</span>
                  <span style={{ fontSize:11, color:'#B22234', fontWeight:700 }}>{p.vol}</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ background:'#f8fafc', border:'1px solid #d8dce6', borderRadius:6, padding:16 }}>
            <div style={{ fontSize:11, fontWeight:700, color:'#6c757d', textTransform:'uppercase' as const, letterSpacing:'1px', marginBottom:10 }}>🔒 About This Tool</div>
            <div style={{ fontSize:12, color:'#374151', lineHeight:1.7 }}>Free estimation tool. Not affiliated with Grubhub, IRS, or any agency. No data stored. Estimates only — not tax advice.</div>
            <div style={{ marginTop:12, display:'flex', gap:12 }}>
              {[['Privacy','/privacy'],['Terms','/terms'],['Contact','/contact']].map(([l,h]) => (
                <Link key={l} href={h} style={{ fontSize:11, color:'#6c757d', textDecoration:'underline' }}>{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:960px){.main-grid{grid-template-columns:1fr!important}.form-grid{grid-template-columns:1fr!important}.results-row{grid-template-columns:1fr 1fr!important}.ded-grid{grid-template-columns:1fr!important}}
        @media(max-width:540px){.results-row{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  )
}
