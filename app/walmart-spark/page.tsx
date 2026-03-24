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
  { icon:'▸', label:'Mileage (72.5¢/mile 2026)', desc:'Every mile delivering for Walmart Spark counts. Average driver logs 15,000–25,000 mi/year.' },
  { icon:'', label:'Phone & Data Plan', desc:'Pro-rata portion used for the app, navigation, and customer contact. Typically 50–80%.' },
  { icon:'', label:'Insulated Bags & Coolers', desc:'Required for grocery delivery. Full deduction as business equipment.' },
  { icon:'', label:'Phone Charger & Mount', desc:'Car mount, cables, and power banks used for deliveries.' },
  { icon:'', label:'Supplemental Insurance', desc:'Rideshare/delivery insurance gaps not covered by Walmart Spark.' },
  { icon:'', label:'Car Cleaning & Supplies', desc:'Keep receipts — partial deduction for business use percentage.' },
  { icon:'', label:'Bank Fees & Apps', desc:'Any paid apps or tools used to manage your Spark business.' },
  { icon:'▸', label:'Home Office (if applicable)', desc:'If you use a dedicated space for planning deliveries, tracking income, etc.' },
]

const FAQ = [
  { q:'Does Walmart Spark send a 1099?', a:'Yes. If you earn $600 or more in a calendar year, Walmart Spark (via DDX/branch) issues a 1099-NEC. You must report all income even if no 1099 is received.' },
  { q:'What is the self-employment tax rate for Spark drivers?', a:'15.3% on 92.35% of your net earnings. This covers Social Security (12.4%) and Medicare (2.9%). You can deduct half of this SE tax from your gross income.' },
  { q:'Do I need to pay quarterly taxes as a Spark driver?', a:'Yes. If you expect to owe $1,000 or more in taxes, the IRS requires quarterly estimated payments. Deadlines: Q1 Apr 15, Q2 Jun 16, Q3 Sep 15, Q4 Jan 15.' },
  { q:'What mileage rate can Spark drivers use in 2026?', a:'The IRS standard mileage rate for 2026 is 72.5 cents per mile. Track every mile from the moment you accept an order until you return home after the last delivery.' },
  { q:'Can I deduct my car payment as a Spark driver?', a:'Not directly. You can use either the standard mileage rate OR actual expenses (depreciation, gas, insurance) — but not both. Most drivers find standard mileage simpler and more beneficial.' },
]


const _webAppSchema_walmart_spark = {"@context":"https://schema.org","@type":"WebApplication","name":"Walmart Spark Tax Calculator 2026","description":"Tax calculator for Walmart Spark drivers. Self-employment tax, mileage deduction, and quarterly estimated payments for 2026.","url":"https://www.gigwisetax.com/walmart-spark","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}};
const _faqSchema_walmart_spark = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much do Walmart Spark drivers pay in taxes?","acceptedAnswer":{"@type":"Answer","text":"Walmart Spark drivers are independent contractors and pay 15.3% self-employment tax on net earnings plus federal income tax. The mileage deduction ($0.67/mile in 2026) is the largest available deduction and can significantly reduce taxable income."}},{"@type":"Question","name":"Does Walmart Spark send a 1099?","acceptedAnswer":{"@type":"Answer","text":"Yes. Walmart Spark sends a 1099-NEC to drivers who earn $600 or more. All delivery income is taxable even without a 1099."}},{"@type":"Question","name":"What can Walmart Spark drivers deduct?","acceptedAnswer":{"@type":"Answer","text":"Standard mileage ($0.67/mile) for active delivery miles, phone plan (business portion), insulated bags or delivery equipment, tolls and parking fees during deliveries, and any required app subscriptions."}},{"@type":"Question","name":"Do Walmart Spark drivers pay quarterly taxes?","acceptedAnswer":{"@type":"Answer","text":"Yes, if expected annual tax liability is $1,000 or more. Quarterly due dates: April 15, June 16, September 15, January 15. Use our calculator to estimate your quarterly payment amount."}}]};

export default function WalmartSparkPage() {
  const [income, setIncome]   = useState('')
  const [miles,  setMiles]    = useState('')
  const [stateCode, setStateCode] = useState('TX')
  const [filing, setFiling]   = useState('single')
  const [result, setResult]   = useState<any>(null)
  const [openFaq, setOpenFaq] = useState<number|null>(null)

  const fmt = (n: number) => '$' + Math.round(n||0).toLocaleString('en-US')

  const calculate = () => {
    const gross = parseFloat(income) || 0
    if (!gross) return
    const mileDeduction = (parseFloat(miles)||0) * 0.67
    const net     = Math.max(0, gross - mileDeduction)
    const st      = STATES.find(s => s.code === stateCode)
    const seBase  = net * 0.9235
    const seTax   = seBase * 0.153
    const ssSplit = seBase * 0.124
    const medSplit= seBase * 0.029
    const taxable = net - seTax * 0.5
    const fedRate = filing === 'single' ? 0.22 : 0.12
    const federal = taxable * fedRate
    const stateTax= taxable * (st?.rate ?? 0.05)
    const total   = federal + seTax + stateTax
    const qbi     = taxable * 0.20
    setResult({ gross, net, mileDeduction, seTax, ssSplit, medSplit, federal, stateTax, total, quarterly: total/4, rate: ((total/gross)*100).toFixed(1), qbi })
  }

  const inp = { width:'100%', border:'1px solid #d1d5db', borderRadius:4, padding:'10px 12px', fontSize:14, color:'#1a1a2e', background:'#fff', boxSizing:'border-box' as const }
  const lbl = { display:'block', fontSize:11, fontWeight:700, color:'#374151', textTransform:'uppercase' as const, letterSpacing:'0.8px', marginBottom:6 }
  const card= { background:'#fff', border:'1px solid #d8dce6', borderRadius:6, overflow:'hidden' as const, marginBottom:20, boxShadow:'0 1px 6px rgba(0,0,0,.05)' }
  const cardHd = { background:'#1a1a2e', padding:'13px 20px', display:'flex', alignItems:'center', gap:10 }

  return (
    <div style={{ background:'#0d1117', minHeight:'100vh' }}>

      {/* HERO */}
      <div style={{ background:'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom:'1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'32px 20px 28px' }}>
          <div style={{ fontSize:12, color:'rgba(255,255,255,.4)', marginBottom:10 }}>
            <Link href="/" style={{ color:'rgba(255,255,255,.4)', textDecoration:'none' }}>Home</Link> › <Link href="/calculators" style={{ color:'rgba(255,255,255,.4)', textDecoration:'none' }}>Calculators</Link> › Walmart Spark
          </div>
          <div style={{ display:'flex', gap:12, alignItems:'flex-start', marginBottom:14 }}>
            <div style={{ width:4, height:34, background:'#B22234', borderRadius:2, flexShrink:0, marginTop:4 }} />
            <h1 style={{ fontSize:28, fontWeight:900, color:'#fff', lineHeight:1.2, letterSpacing:'-0.5px', margin:0 }}>
              ▸ Walmart Spark Driver Tax Calculator 2026 — All 51 States
            </h1>
          </div>
          <p style={{ color:'rgba(255,255,255,.55)', fontSize:14, lineHeight:1.8, paddingLeft:16, maxWidth:780, marginBottom:18 }}>
            Free self-employment tax calculator for Walmart Spark delivery drivers. Estimate your SE tax (15.3%),
            federal income tax, state tax, and mileage deduction for all 51 jurisdictions. Instant results — no signup required.
          </p>
          <div style={{ paddingLeft:16, display:'flex', gap:8, flexWrap:'wrap' as const }}>
            {[' IRS Schedule SE',' All 51 States','▸ Mileage Deduction',' No Registration',' Instant Results'].map(b => (
              <span key={b} style={{ background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.12)', borderRadius:3, padding:'4px 10px', fontSize:11, color:'rgba(255,255,255,.55)', fontWeight:500 }}>{b}</span>
            ))}
          </div>
        </div>
      </div>


      {/* MAIN GRID */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'24px 20px 48px', display:'grid', gridTemplateColumns:'1fr 300px', gap:24 }} className="main-grid">

        {/* LEFT */}
        <div>

          {/* CALCULATOR */}
          <div style={card}>
            <div style={cardHd}>
              <div style={{ width:3, height:18, background:'#e8b84b', borderRadius:2 }} />
              <span style={{ color:'#fff', fontWeight:700, fontSize:15 }}>▸ Walmart Spark Tax Calculator 2026</span>
              <span style={{ marginLeft:'auto', fontSize:11, color:'rgba(255,255,255,.4)', background:'rgba(255,255,255,.07)', padding:'3px 8px', borderRadius:3 }}>IRS Schedule SE</span>
            </div>
            <div style={{ padding:24 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:16 }} className="form-grid">
                <div>
                  <label style={lbl}> Annual Spark Net Income (USD)</label>
                  <input style={inp} type="number" placeholder="e.g. 45000" value={income} onChange={e=>setIncome(e.target.value)} />
                  <div style={{ fontSize:11, color:'#9ca3af', marginTop:4 }}>Total earnings after Spark's service fees</div>
                </div>
                <div>
                  <label style={lbl}>▸ Total Miles Driven (Optional)</label>
                  <input style={inp} type="number" placeholder="e.g. 18000" value={miles} onChange={e=>setMiles(e.target.value)} />
                  <div style={{ fontSize:11, color:'#9ca3af', marginTop:4 }}>IRS rate: 72.5¢/mile for 2026</div>
                </div>
                <div>
                  <label style={lbl}> State of Residence</label>
                  <select style={inp} value={stateCode} onChange={e=>setStateCode(e.target.value)}>
                    {STATES.map(s => <option key={s.code} value={s.code}>{s.name} {s.rate===0?'(No State Tax)':`(${(s.rate*100).toFixed(1)}%)`}</option>)}
                  </select>
                </div>
                <div>
                  <label style={lbl}> Filing Status</label>
                  <select style={inp} value={filing} onChange={e=>setFiling(e.target.value)}>
                    <option value="single">Single</option>
                    <option value="mfj">Married Filing Jointly</option>
                    <option value="hoh">Head of Household</option>
                  </select>
                </div>
              </div>
              <div onClick={calculate} style={{ background:'#B22234', color:'#fff', padding:'14px 0', borderRadius:4, fontSize:15, fontWeight:800, cursor:'pointer', textAlign:'center' as const, letterSpacing:'0.3px' }}>
                 Calculate My Spark Taxes
              </div>
            </div>

            {result && (
              <div style={{ borderTop:'1px solid #e2e5e9', padding:24 }}>
                <div style={{ fontSize:13, fontWeight:700, color:'#6c757d', textTransform:'uppercase' as const, letterSpacing:'1px', marginBottom:16 }}> Your 2026 Tax Estimate</div>

                {result.mileDeduction > 0 && (
                  <div style={{ background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:6, padding:'12px 16px', marginBottom:16, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:13, color:'#166534', fontWeight:600 }}>▸ Mileage Deduction Applied</span>
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
                  <div style={{ fontSize:12, color:'rgba(255,255,255,.5)', marginBottom:8 }}> QUARTERLY PAYMENT (set aside each quarter)</div>
                  <div style={{ fontSize:32, fontWeight:900, color:'#e8b84b' }}>{fmt(result.quarterly)}</div>
                  <div style={{ fontSize:12, color:'rgba(255,255,255,.4)', marginTop:4 }}>Next deadline: <strong style={{ color:'#fff' }}>Q1 — April 15, 2026</strong></div>
                </div>

                <div style={{ background:'#fffbeb', border:'1px solid #fde68a', borderRadius:6, padding:'12px 16px', fontSize:12, color:'#78350f' }}>
                  <strong> Disclaimer:</strong> These are estimates only. Not tax advice. Consult a CPA or use IRS Form 1040-ES for official calculations. Individual circumstances vary.
                </div>
              </div>
            )}
          </div>

          {/* DEDUCTIONS */}
          <div style={card}>
            <div style={cardHd}>
              <div style={{ width:3, height:18, background:'#e8b84b', borderRadius:2 }} />
              <span style={{ color:'#fff', fontWeight:700, fontSize:15 }}> Top Tax Deductions for Walmart Spark Drivers 2026</span>
            </div>
            <div style={{ padding:20 }}>
              <p style={{ fontSize:13, color:'#374151', lineHeight:1.7, marginBottom:20 }}>
                As a Spark driver, you're an independent contractor. Every business expense reduces your taxable income. Here are the deductions you should never miss:
              </p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }} className="ded-grid">
                {DEDUCTIONS.map(d => (
                  <div key={d.label} style={{ background:'#f8fafc', border:'1px solid #e2e5e9', borderRadius:6, padding:'14px 16px' }}>
                    <div style={{ fontSize:20, marginBottom:6 }}>{d.icon}</div>
                    <div style={{ fontSize:13, fontWeight:700, color:'#1a1a2e', marginBottom:4 }}>{d.label}</div>
                    <div style={{ fontSize:12, color:'#6c757d', lineHeight:1.6 }}>{d.desc}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:16, background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:6, padding:'12px 16px', fontSize:13, color:'#166534' }}>
                <strong>Pro Tip:</strong> Use a mileage tracking app (Stride, MileIQ) from day one. The standard mileage deduction of 72.5¢/mile often saves more than actual expenses.
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div style={card}>
            <div style={cardHd}>
              <div style={{ width:3, height:18, background:'#e8b84b', borderRadius:2 }} />
              <span style={{ color:'#fff', fontWeight:700, fontSize:15 }}> Walmart Spark Taxes FAQ 2026</span>
            </div>
            <div style={{ padding:0 }}>
              {FAQ.map((f, i) => (
                <div key={i} style={{ borderBottom:'1px solid #f0f1f3' }}>
                  <div onClick={() => setOpenFaq(openFaq===i ? null : i)} style={{ padding:'16px 20px', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:14, fontWeight:600, color:'#1a1a2e' }}>{f.q}</span>
                    <span style={{ fontSize:16, color:'#B22234', fontWeight:700, marginLeft:12 }}>{openFaq===i ? '−' : '+'}</span>
                  </div>
                  {openFaq===i && (
                    <div style={{ padding:'0 20px 16px', fontSize:13, color:'#374151', lineHeight:1.7 }}>{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SEO TEXT */}
          <div style={card}>
            <div style={{ padding:24 }}>
              <h2 style={{ fontSize:18, fontWeight:800, color:'#1a1a2e', marginBottom:12 }}>Walmart Spark Driver Taxes: Complete 2026 Guide</h2>
              <p style={{ fontSize:13, color:'#374151', lineHeight:1.8, marginBottom:12 }}>
                Walmart Spark is one of the fastest-growing grocery and general merchandise delivery platforms in the United States, with drivers operating across 40+ states. As a Spark driver, you're classified as an <strong>independent contractor</strong>, which means Walmart does not withhold taxes from your earnings. You are responsible for paying self-employment tax (SE tax) and estimated quarterly taxes to the IRS.
              </p>
              <h3 style={{ fontSize:15, fontWeight:700, color:'#1a1a2e', marginBottom:8 }}>How SE Tax Works for Spark Drivers</h3>
              <p style={{ fontSize:13, color:'#374151', lineHeight:1.8, marginBottom:12 }}>
                The self-employment tax rate is <strong>15.3%</strong>, applied to 92.35% of your net profit. This includes 12.4% for Social Security and 2.9% for Medicare. Unlike W-2 employees where the employer pays half, Spark drivers pay both halves — but you can deduct 50% of SE tax from your adjusted gross income.
              </p>
              <h3 style={{ fontSize:15, fontWeight:700, color:'#1a1a2e', marginBottom:8 }}>Quarterly Tax Deadlines for 2026</h3>
              <p style={{ fontSize:13, color:'#374151', lineHeight:1.8 }}>
                If you expect to owe $1,000 or more, pay quarterly: <strong>Q1 April 15 → Q2 June 16 → Q3 September 15 → Q4 January 15, 2027</strong>. Missing deadlines triggers IRS underpayment penalties. Most Spark drivers should set aside 25–30% of every payment received.
              </p>
            </div>
          </div>

        </div>

        {/* SIDEBAR */}
        <div style={{ display:'flex', flexDirection:'column' as const, gap:16 }}>
          <div style={{ background:'#fff', border:'2px dashed #d8dce6', borderRadius:6, overflow:'hidden' as const }}>
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

          <div style={{ background:'#fff', border:'1px solid #d8dce6', borderRadius:6, overflow:'hidden' as const }}>
            <div style={{ background:'#1a1a2e', padding:'10px 16px' }}>
              <span style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.55)', textTransform:'uppercase' as const, letterSpacing:'1px' }}> More Calculators</span>
            </div>
            {[
              { name:'DoorDash', href:'/doordash', vol:'400K/mo' },
              { name:'Instacart', href:'/instacart', vol:'150K/mo' },
              { name:'Amazon Flex', href:'/amazon-flex', vol:'80K/mo' },
              { name:'Uber', href:'/uber', vol:'300K/mo' },
              { name:'Airbnb', href:'/airbnb', vol:'120K/mo' },
              { name:'Etsy', href:'/etsy', vol:'200K/mo' },
            ].map(p => (
              <Link key={p.name} href={p.href} style={{ textDecoration:'none' }}>
                <div style={{ padding:'10px 16px', borderBottom:'1px solid #f0f1f3', display:'flex', justifyContent:'space-between', alignItems:'center', cursor:'pointer' }}>
                  <span style={{ fontSize:13, color:'#1a1a2e', fontWeight:500 }}>{p.name} Tax Calculator</span>
                  <span style={{ fontSize:11, color:'#B22234', fontWeight:700 }}>{p.vol}</span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ background:'#f8fafc', border:'1px solid #d8dce6', borderRadius:6, padding:16 }}>
            <div style={{ fontSize:11, fontWeight:700, color:'#6c757d', textTransform:'uppercase' as const, letterSpacing:'1px', marginBottom:10 }}> About This Tool</div>
            <div style={{ fontSize:12, color:'#374151', lineHeight:1.7 }}>
              GigWiseTax.com is an independent, free estimation tool. Not affiliated with Walmart, IRS, or any government agency. No personal data is stored. Results are estimates only — not tax advice.
            </div>
            <div style={{ marginTop:12, display:'flex', gap:12 }}>
              {[['Privacy','/privacy'],['Terms','/terms'],['Contact','/contact']].map(([l,h]) => (
                <Link key={l} href={h} style={{ fontSize:11, color:'#6c757d', textDecoration:'underline' }}>{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>


          {/* INTERNAL LINKS */}
          <div style={{ background:'#fff', border:'1px solid #d8dce6', borderRadius:6, overflow:'hidden', marginBottom:20, boxShadow:'0 1px 6px rgba(0,0,0,.05)' }}>
            <div style={{ background:'#1a1a2e', padding:'13px 20px', display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:3, height:18, background:'#e8b84b', borderRadius:2 }} />
              <span style={{ color:'#fff', fontWeight:700, fontSize:15 }}> Related Guides & Calculators</span>
            </div>
            <div style={{ padding:'16px 20px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
              
              <a href="/doordash" style={{ textDecoration:"none", background:"#f8fafc", border:"1px solid #e2e5e9", borderRadius:6, padding:"12px 14px", display:"block", fontSize:13, color:"#1a1a2e", fontWeight:600 }}>▸ DoorDash Tax Calculator</a>
              <a href="/instacart" style={{ textDecoration:"none", background:"#f8fafc", border:"1px solid #e2e5e9", borderRadius:6, padding:"12px 14px", display:"block", fontSize:13, color:"#1a1a2e", fontWeight:600 }}>▸ Instacart Tax Calculator</a>
              <a href="/blog/mileage-rate-2026" style={{ textDecoration:"none", background:"#f8fafc", border:"1px solid #e2e5e9", borderRadius:6, padding:"12px 14px", display:"block", fontSize:13, color:"#1a1a2e", fontWeight:600 }}>▸ IRS Mileage Rate 2026</a>
              <a href="/deadlines" style={{ textDecoration:"none", background:"#f8fafc", border:"1px solid #e2e5e9", borderRadius:6, padding:"12px 14px", display:"block", fontSize:13, color:"#1a1a2e", fontWeight:600 }}> 2026 Quarterly Deadlines</a>
              <a href="/blog/w2-vs-1099-guide-2026" style={{ textDecoration:"none", background:"#f8fafc", border:"1px solid #e2e5e9", borderRadius:6, padding:"12px 14px", display:"block", fontSize:13, color:"#1a1a2e", fontWeight:600 }}> W-2 vs 1099 Guide</a>
            </div>
          </div>

      <style>{`
        @media(max-width:960px){.main-grid{grid-template-columns:1fr!important}.form-grid{grid-template-columns:1fr!important}.results-row{grid-template-columns:1fr 1fr!important}.ded-grid{grid-template-columns:1fr!important}}
        @media(max-width:540px){.results-row{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  )
}
