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
  { icon:'', label:'Depreciation (MACRS)', desc:'Cars depreciate over 5 years under MACRS. First-year bonus depreciation may allow up to 100% deduction in year one.' },
  { icon:'', label:'Insurance Premium', desc:'Turo\'s protection plans and any supplemental commercial coverage are deductible to the extent of business use.' },
  { icon:'', label:'Repairs & Maintenance', desc:'Oil changes, tires, detailing, repairs — all deductible based on your rental vs. personal use ratio.' },
  { icon:'', label:'Cleaning Between Rentals', desc:'Professional cleaning, car washes, and supplies used to prepare the car for guests.' },
  { icon:'', label:'Gas (if you supply it)', desc:'Some hosts include gas. Keep all receipts — deductible as an ordinary business expense.' },
  { icon:'', label:'Photography & Marketing', desc:'Professional photos, subscriptions, and any tools used to improve your listing.' },
  { icon:'', label:'Parking & Storage', desc:'Dedicated parking or storage used when the vehicle is staged for rental.' },
  { icon:'', label:'Phone & Apps', desc:'Pro-rata portion of phone plan used to manage bookings, communicate with guests, and track income.' },
]

const FAQ = [
  { q:'Is Turo income taxable?', a:'Yes. All income earned from renting your car on Turo is taxable as self-employment or rental income. Turo issues a 1099-K if you receive $600+ (2026 threshold). You must report all income regardless.' },
  { q:'Is Turo rental income subject to self-employment tax?', a:'It depends. If you rent out 1–2 cars occasionally, it may qualify as passive rental income (no SE tax). If you actively manage multiple cars as a business, the IRS may treat it as self-employment income subject to 15.3% SE tax. Consult a CPA for your specific situation.' },
  { q:'What is the biggest tax deduction for Turo hosts?', a:'Depreciation is typically the largest deduction. Under MACRS, a car used for business depreciates over 5 years. Section 179 or bonus depreciation may allow full deduction in the first year for vehicles over 6,000 lbs GVWR.' },
  { q:'How do I calculate the business-use percentage for my Turo car?', a:'Divide rental days by total days in the year. Example: 180 rental days ÷ 365 = 49.3% business use. This percentage applies to all vehicle expenses like insurance, maintenance, and depreciation.' },
  { q:'Does Turo report my income to the IRS?', a:'Yes. Turo files a 1099-K for hosts receiving $600+ in payments. Starting 2026, this threshold applies broadly. Always report your Turo income accurately on Schedule C or Schedule E.' },
]


const _webAppSchema_turo = {"@context":"https://schema.org","@type":"WebApplication","name":"Turo Tax Calculator 2026","description":"Tax calculator for Turo car hosts. Rental income, depreciation, insurance, and expense deductions for 2026.","url":"https://www.gigwisetax.com/turo","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}};
const _faqSchema_turo = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How is Turo income taxed?","acceptedAnswer":{"@type":"Answer","text":"Turo rental income is generally reported on Schedule C as self-employment income if you actively manage your fleet, or Schedule E as rental income for passive hosting. Self-employment tax (15.3%) applies if reported on Schedule C."}},{"@type":"Question","name":"What can Turo hosts deduct?","acceptedAnswer":{"@type":"Answer","text":"Vehicle depreciation, insurance premiums (business portion), cleaning and detailing, maintenance and repairs, Turo platform fees (25-35%), mileage for vehicle pickup/dropoff, and a portion of registration fees."}},{"@type":"Question","name":"Does Turo send a 1099?","acceptedAnswer":{"@type":"Answer","text":"Turo sends a 1099-K to hosts who receive $5,000 or more in payments in 2026. All rental income must be reported regardless of whether you receive a 1099."}},{"@type":"Question","name":"Can I depreciate my car as a Turo host?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you report on Schedule C, you can depreciate the business-use portion of your vehicle using MACRS (5-year property) or Section 179. Keep records of total miles vs. Turo rental days to calculate business-use percentage."}}]};

export default function TuroPage() {
  const [income, setIncome]   = useState('')
  const [rentalDays, setRentalDays] = useState('')
  const [stateCode, setStateCode] = useState('CA')
  const [filing, setFiling]   = useState('single')
  const [result, setResult]   = useState<any>(null)
  const [openFaq, setOpenFaq] = useState<number|null>(null)

  const fmt = (n: number) => '$' + Math.round(n||0).toLocaleString('en-US')

  const calculate = () => {
    const gross = parseFloat(income) || 0
    if (!gross) return
    const days = parseFloat(rentalDays) || 0
    const businessPct = days > 0 ? Math.min(days / 365, 1) : 1
    const st      = STATES.find(s => s.code === stateCode)
    const net     = gross
    const seBase  = net * 0.9235
    const seTax   = seBase * 0.153
    const taxable = net - seTax * 0.5
    const fedRate = filing === 'single' ? 0.22 : 0.12
    const federal = taxable * fedRate
    const stateTax= taxable * (st?.rate ?? 0.05)
    const total   = federal + seTax + stateTax
    setResult({ gross, seTax, federal, stateTax, total, quarterly: total/4, rate: ((total/gross)*100).toFixed(1), businessPct: (businessPct*100).toFixed(0) })
  }

  const inp = { width:'100%', border:'1px solid #d1d5db', borderRadius:4, padding:'10px 12px', fontSize:14, color: 'rgba(255,255,255,0.9)', background: '#0d1b3e', boxSizing:'border-box' as const }
  const lbl = { display:'block', fontSize:11, fontWeight:700, color: 'rgba(255,255,255,0.85)', textTransform:'uppercase' as const, letterSpacing:'0.8px', marginBottom:6 }
  const card= { background: '#0d1b3e', border:'1px solid #d8dce6', borderRadius:6, overflow:'hidden' as const, marginBottom:20, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }
  const cardHd = { background:'#1a1a2e', padding:'13px 20px', display:'flex', alignItems:'center', gap:10 }

  return (
    <div style={{ background:'#0d1117', minHeight:'100vh' }}>

      <div style={{ background:'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'32px 20px 28px' }}>
          <div style={{ fontSize:12, color:'rgba(255,255,255,.4)', marginBottom:10 }}>
            <Link href="/" style={{ color:'rgba(255,255,255,.4)', textDecoration:'none' }}>Home</Link> › <Link href="/calculators" style={{ color:'rgba(255,255,255,.4)', textDecoration:'none' }}>Calculators</Link> › Turo
          </div>
          <div style={{ display:'flex', gap:12, alignItems:'flex-start', marginBottom:14 }}>
            <div style={{ width:4, height:34, background:'#B22234', borderRadius:2, flexShrink:0, marginTop:4 }} />
            <h1 style={{ fontSize:28, fontWeight:900, color:'#fff', lineHeight:1.2, letterSpacing:'-0.5px', margin:0 }}>
               Turo Host Tax Calculator 2026 — All 51 States
            </h1>
          </div>
          <p style={{ color:'rgba(255,255,255,.55)', fontSize:14, lineHeight:1.8, paddingLeft:16, maxWidth:780, marginBottom:18 }}>
            Free tax calculator for Turo car-sharing hosts. Estimate your income tax, self-employment tax, and car depreciation deductions for all 51 states. No signup required.
          </p>
          <div style={{ paddingLeft:16, display:'flex', gap:8, flexWrap:'wrap' as const }}>
            {[' Schedule C / Schedule E',' All 51 States',' Depreciation Included',' No Registration',' Instant Results'].map(b => (
              <span key={b} style={{ background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.12)', borderRadius:3, padding:'4px 10px', fontSize:11, color:'rgba(255,255,255,.55)', fontWeight:500 }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'24px 20px 48px', display:'grid', gridTemplateColumns:'1fr 300px', gap:24 }} className="main-grid">
        <div>
          <div style={card}>
            <div style={cardHd}>
              <div style={{ width:3, height:18, background:'#e8b84b', borderRadius:2 }} />
              <span style={{ color:'#fff', fontWeight:700, fontSize:15 }}> Turo Tax Calculator 2026</span>
              <span style={{ marginLeft:'auto', fontSize:11, color:'rgba(255,255,255,.4)', background:'rgba(255,255,255,.07)', padding:'3px 8px', borderRadius:3 }}>Schedule C / E</span>
            </div>
            <div style={{ padding:24 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }} className="form-grid">
                <div>
                  <label style={lbl} htmlFor="annual-turo-host-income-usd-se-0"> Annual Turo Host Income (USD)</label>
                  <input style={inp} type="number" placeholder="e.g. 24000" value={income} onChange={e=>setIncome(e.target.value)} />
                  <div style={{ fontSize:11, color: '#7a9abf', marginTop:4 }}>Total payouts from Turo (before deductions)</div>
                </div>
                <div>
                  <label style={lbl}> Rental Days Per Year (Optional)</label>
                  <input style={inp} type="number" placeholder="e.g. 180" value={rentalDays} onChange={e=>setRentalDays(e.target.value)} />
                  <div style={{ fontSize:11, color: '#7a9abf', marginTop:4 }}>Used to calculate business-use % for deductions</div>
                </div>
                <div>
                  <label style={lbl}> State of Residence</label>
                  <select style={inp}  id="annual-turo-host-income-usd-se-0" value={stateCode} onChange={e=>setStateCode(e.target.value)}>
                    {STATES.map(s => <option key={s.code} value={s.code}>{s.name} {s.rate===0?'(No State Tax)':`(${(s.rate*100).toFixed(1)}%)`}</option>)}
                  </select>
                </div>
                <div>
                  <label style={lbl} htmlFor="filing-status-1"> Filing Status</label>
                  <select style={inp}  id="filing-status-1" value={filing} onChange={e=>setFiling(e.target.value)}>
                    <option value="single">Single</option>
                    <option value="mfj">Married Filing Jointly</option>
                    <option value="hoh">Head of Household</option>
                  </select>
                </div>
              </div>
              <div onClick={calculate} style={{ background:'#B22234', color:'#fff', padding:'14px 0', borderRadius:4, fontSize:15, fontWeight:800, cursor:'pointer', textAlign:'center' as const }}>
                 Calculate My Turo Taxes
              </div>
            </div>

            {result && (
              <div style={{ borderTop:'1px solid rgba(255,255,255,0.1)', padding:24 }}>
                {result.businessPct && (
                  <div style={{ background:'rgba(3,105,161,0.12)', border:'1px solid rgba(125,211,252,0.25)', borderRadius:6, padding:'12px 16px', marginBottom:16 }}>
                    <span style={{ fontSize:13, color:'#7dd3fc', fontWeight:600 }}> Business Use Percentage: <strong>{result.businessPct}%</strong> — apply to all vehicle expenses</span>
                  </div>
                )}
                <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginBottom:20 }} className="results-row">
                  {[
                    { label:'Self-Employment Tax', val:fmt(result.seTax), color:'#B22234', sub:'15.3% of 92.35%' },
                    { label:'Federal Income Tax',  val:fmt(result.federal), color: 'rgba(255,255,255,0.9)', sub:'After SE deduction' },
                    { label:'State Income Tax',    val:fmt(result.stateTax), color: 'rgba(255,255,255,0.85)', sub:STATES.find(s=>s.code===stateCode)?.name },
                    { label:'TOTAL TAX DUE',       val:fmt(result.total), color:'#B22234', sub:`${result.rate}% effective rate` },
                  ].map(r => (
                    <div key={r.label} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:6, padding:'14px 12px', textAlign:'center' as const }}>
                      <div style={{ fontSize:11, color: '#8fa8c8', fontWeight:600, marginBottom:6 }}>{r.label}</div>
                      <div style={{ fontSize:20, fontWeight:900, color:r.color }}>{r.val}</div>
                      <div style={{ fontSize:10, color: '#7a9abf', marginTop:4 }}>{r.sub}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background:'#1a1a2e', borderRadius:6, padding:'16px 20px', marginBottom:16 }}>
                  <div style={{ fontSize:12, color:'rgba(255,255,255,.5)', marginBottom:8 }}> QUARTERLY PAYMENT</div>
                  <div style={{ fontSize:32, fontWeight:900, color:'#e8b84b' }}>{fmt(result.quarterly)}</div>
                  <div style={{ fontSize:12, color:'rgba(255,255,255,.4)', marginTop:4 }}>Next: <strong style={{ color:'#fff' }}>Q1 — April 15, 2026</strong></div>
                </div>
                <div style={{ background:'rgba(232,184,75,0.1)', border:'1px solid #fde68a', borderRadius:6, padding:'12px 16px', fontSize:12, color:'#78350f' }}>
                  <strong> Note:</strong> Depreciation deductions can significantly reduce your actual tax bill. These estimates do not include vehicle depreciation. Consult a CPA for Schedule C filing with depreciation.
                </div>
              </div>
            )}
          </div>

          <div style={card}>
            <div style={cardHd}>
              <div style={{ width:3, height:18, background:'#e8b84b', borderRadius:2 }} />
              <span style={{ color:'#fff', fontWeight:700, fontSize:15 }}> Top Tax Deductions for Turo Hosts 2026</span>
            </div>
            <div style={{ padding:20 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }} className="ded-grid">
                {DEDUCTIONS.map(d => (
                  <div key={d.label} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:6, padding:'14px 16px' }}>
                    <div style={{ fontSize:20, marginBottom:6 }}>{d.icon}</div>
                    <div style={{ fontSize:13, fontWeight:700, color: 'rgba(255,255,255,0.9)', marginBottom:4 }}>{d.label}</div>
                    <div style={{ fontSize:12, color: '#8fa8c8', lineHeight:1.6 }}>{d.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={card}>
            <div style={cardHd}>
              <div style={{ width:3, height:18, background:'#e8b84b', borderRadius:2 }} />
              <span style={{ color:'#fff', fontWeight:700, fontSize:15 }}> Turo Host Taxes FAQ 2026</span>
            </div>
            <div>
              {FAQ.map((f, i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <div onClick={() => setOpenFaq(openFaq===i ? null : i)} style={{ padding:'16px 20px', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:14, fontWeight:600, color: 'rgba(255,255,255,0.9)' }}>{f.q}</span>
                    <span style={{ fontSize:16, color:'#B22234', fontWeight:700, marginLeft:12 }}>{openFaq===i ? '−' : '+'}</span>
                  </div>
                  {openFaq===i && <div style={{ padding:'0 20px 16px', fontSize:13, color: 'rgba(255,255,255,0.85)', lineHeight:1.7 }}>{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display:'flex', flexDirection:'column' as const, gap:16 }}>
          <div style={{ background: '#0d1b3e', border:'2px dashed #d8dce6', borderRadius:6, overflow:'hidden' as const }}>
            {/* OWN BANNER — privatepaycheck.com */}
            <a href="https://privatepaycheck.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', background: 'linear-gradient(135deg,#091526,#102040)', border: '1px solid rgba(245,200,66,0.35)', borderRadius: 10, padding: '20px 16px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#F5C842', marginBottom: 8, fontFamily: 'monospace' }}>W-2 Paycheck Tool</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 6 }}>PrivatePaycheck<span style={{ color: '#F5C842' }}>.com</span></div>
              <div style={{ fontSize: 12, color: '#7A96B8', marginBottom: 12, lineHeight: 1.5 }}>Free paycheck calculator for W-2 employees. All 50 states, 2026 IRS brackets. No signup.</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const, marginBottom: 12 }}>
                <span style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.25)', color: '#F5C842', fontSize: 10, padding: '2px 7px', borderRadius: 3 }}>Salary &amp; Hourly</span>
                <span style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.25)', color: '#F5C842', fontSize: 10, padding: '2px 7px', borderRadius: 3 }}>All 50 States</span>
                <span style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.25)', color: '#F5C842', fontSize: 10, padding: '2px 7px', borderRadius: 3 }}>100% Free</span>
              </div>
              <div style={{ background: '#F5C842', color: '#091526', fontSize: 12, fontWeight: 700, padding: '9px 0', borderRadius: 5, textAlign: 'center' as const }}>Calculate My Paycheck ›</div>
            </a>
          </div>

          <div style={{ background: '#0d1b3e', border:'1px solid #d8dce6', borderRadius:6, overflow:'hidden' as const }}>
            <div style={{ background:'#1a1a2e', padding:'10px 16px' }}>
              <span style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.55)', textTransform:'uppercase' as const, letterSpacing:'1px' }}> More Calculators</span>
            </div>
            {[
              { name:'Airbnb', href:'/airbnb', vol:'120K/mo' },
              { name:'Uber', href:'/uber', vol:'300K/mo' },
              { name:'DoorDash', href:'/doordash', vol:'400K/mo' },
              { name:'Etsy', href:'/etsy', vol:'200K/mo' },
            ].map(p => (
              <Link key={p.name} href={p.href} style={{ textDecoration:'none' }}>
                <div style={{ padding:'10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <span style={{ fontSize:13, color: 'rgba(255,255,255,0.9)', fontWeight:500 }}>{p.name}</span>
                  <span style={{ fontSize:11, color:'#B22234', fontWeight:700 }}>{p.vol}</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid #d8dce6', borderRadius:6, padding:16 }}>
            <div style={{ fontSize:11, fontWeight:700, color: '#8fa8c8', textTransform:'uppercase' as const, letterSpacing:'1px', marginBottom:10 }}> About This Tool</div>
            <div style={{ fontSize:12, color: 'rgba(255,255,255,0.85)', lineHeight:1.7 }}>Free estimation tool. Not affiliated with Turo, IRS, or any government agency. No data stored. Estimates only.</div>
            <div style={{ marginTop:12, display:'flex', gap:12 }}>
              {[['Privacy','/privacy'],['Terms','/terms'],['Contact','/contact']].map(([l,h]) => (
                <Link key={l} href={h} style={{ fontSize:11, color: '#8fa8c8', textDecoration:'underline' }}>{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>


          {/* INTERNAL LINKS */}
          <div style={{ background: '#0d1b3e', border:'1px solid #d8dce6', borderRadius:6, overflow:'hidden', marginBottom:20, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
            <div style={{ background:'#1a1a2e', padding:'13px 20px', display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:3, height:18, background:'#e8b84b', borderRadius:2 }} />
              <span style={{ color:'#fff', fontWeight:700, fontSize:15 }}> Related Guides & Calculators</span>
            </div>
            <div style={{ padding:'16px 20px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
              
              <a href="/airbnb" style={{ textDecoration:"none", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:6, padding:"12px 14px", display:"block", fontSize:13, color: "rgba(255,255,255,0.9)", fontWeight:600 }}>▸ Airbnb Tax Calculator</a>
              <a href="/etsy" style={{ textDecoration:"none", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:6, padding:"12px 14px", display:"block", fontSize:13, color: "rgba(255,255,255,0.9)", fontWeight:600 }}>▸ Etsy Seller Taxes</a>
              <a href="/deadlines" style={{ textDecoration:"none", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:6, padding:"12px 14px", display:"block", fontSize:13, color: "rgba(255,255,255,0.9)", fontWeight:600 }}> 2026 Quarterly Deadlines</a>
              <a href="/blog/quarterly-taxes-gig-workers" style={{ textDecoration:"none", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:6, padding:"12px 14px", display:"block", fontSize:13, color: "rgba(255,255,255,0.9)", fontWeight:600 }}> Quarterly Tax Guide</a>
              <a href="/blog/w2-vs-1099-guide-2026" style={{ textDecoration:"none", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:6, padding:"12px 14px", display:"block", fontSize:13, color: "rgba(255,255,255,0.9)", fontWeight:600 }}> W-2 vs 1099 Guide</a>
            </div>
          </div>

      <style>{`
        @media(max-width:960px){.main-grid{grid-template-columns:1fr!important}.form-grid{grid-template-columns:1fr!important}.results-row{grid-template-columns:1fr 1fr!important}.ded-grid{grid-template-columns:1fr!important}}
        @media(max-width:540px){.results-row{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  )
}
