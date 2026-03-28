'use client'

import { useState } from 'react'
import Link from 'next/link'

const PLATFORMS = [
  { name: 'DoorDash',     emoji: '', mileage: true  },
  { name: 'Uber',         emoji: '', mileage: true  },
  { name: 'Lyft',         emoji: '', mileage: true  },
  { name: 'Instacart',    emoji: '', mileage: true  },
  { name: 'Etsy',         emoji: '', mileage: false },
  { name: 'Airbnb',       emoji: '', mileage: false },
  { name: 'OnlyFans',     emoji: '', mileage: false },
  { name: 'Amazon Flex',  emoji: '', mileage: true  },
  { name: 'Grubhub',      emoji: '', mileage: true  },
  { name: 'Walmart Spark',emoji: '', mileage: true  },
]

export default function TaxPenaltyFinder() {
  const [step, setStep]           = useState(0)
  const [platform, setPlatform]   = useState('')
  const [income, setIncome]       = useState('')
  const [miles, setMiles]         = useState('')
  const [homeOffice, setHomeOffice] = useState<boolean|null>(null)
  const [phone, setPhone]         = useState<boolean|null>(null)
  const [quarterly, setQuarterly] = useState<boolean|null>(null)
  const [entity, setEntity]       = useState('')
  const [result, setResult]       = useState<any>(null)

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US')
  const hasMileage = PLATFORMS.find(p => p.name === platform)?.mileage ?? false

  const calculate = () => {
    const inc = parseFloat(income) || 0
    const mi  = parseFloat(miles)  || 0
    const mileageDed   = hasMileage ? mi * 0.725 : 0
    const homeOfficeDed = homeOffice ? 1200 : 0
    const phoneDed     = phone ? inc * 0.04 : 0
    const totalMissed  = mileageDed + homeOfficeDed + phoneDed + 800
    const taxSaved     = totalMissed * 0.28
    const annualTax    = inc * 0.9235 * 0.153 + inc * 0.22
    const penalty      = quarterly === false ? annualTax / 4 * 0.08 : 0
    const sCorpSavings = inc > 60000 && entity !== 's-corp' ? Math.round((inc - 40000) * 0.153 * 0.5) : 0
    const overpaying   = Math.round(taxSaved + penalty)
    const tips: string[] = []
    if (hasMileage && mi > 0) tips.push(`Track ${Math.round(mi).toLocaleString()} miles → save ${fmt(mileageDed * 0.28)}/yr`)
    if (homeOffice) tips.push(`Home office deduction → save up to ${fmt(homeOfficeDed * 0.28)}/yr`)
    if (phone) tips.push(`Phone/internet deduction → save ${fmt(phoneDed * 0.28)}/yr`)
    if (quarterly === false) tips.push(`Start quarterly payments → avoid ${fmt(penalty)} IRS penalty`)
    if (sCorpSavings > 0) tips.push(`Switch to S-Corp → save ${fmt(sCorpSavings)}/yr on SE tax`)
    tips.push(`SEP-IRA contribution → save up to ${fmt(inc * 0.25 * 0.28)}/yr in taxes`)
    setResult({ overpaying, missedDeductions: Math.round(totalMissed), sCorpSavings, quarterlyOwed: Math.round(annualTax / 4), tips })
  }

  const bg   = { minHeight: '100vh', background: '#0d1117', padding: '40px 20px' }
  const wrap = { maxWidth: 640, margin: '0 auto' }
  const card = { background: '#fff', borderRadius: 8, overflow: 'hidden' as const, boxShadow: '0 4px 24px rgba(0,0,0,.3)', marginBottom: 24 }
  const hdr  = { background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', padding: '20px 24px', borderBottom: '3px solid #B22234' }
  const body = { padding: '24px' }
  const btnR = { background: '#B22234', color: '#fff', border: 'none', borderRadius: 6, padding: '14px 32px', fontSize: 16, fontWeight: 800, cursor: 'pointer', width: '100%', marginTop: 16 } as const
  const btnG = { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6, padding: '12px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer', width: '100%', marginTop: 8 } as const
  const opt  = (a: boolean) => ({ background: a?'#1e2d5a':'rgba(255,255,255,0.06)', color: a?'#fff':'rgba(255,255,255,0.75)', border: a?'2px solid #B22234':'2px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: '14px 16px', fontSize: 14, fontWeight: 700, cursor: 'pointer', flex: 1, textAlign: 'center' as const })
  const inp  = { width: '100%', border: '2px solid rgba(255,255,255,0.15)', borderRadius: 6, padding: '12px 14px', fontSize: 16, boxSizing: 'border-box' as const, marginTop: 8 }

  if (result) return (
    <div style={bg}><div style={wrap}>
      <div style={card}>
        <div style={hdr}>
          <div style={{ color:'#e8b84b', fontSize:12, fontWeight:700, letterSpacing:1, marginBottom:6 }}>GIGWISETAX — FREE ANALYSIS</div>
          <div style={{ color:'#fff', fontSize:22, fontWeight:800 }}>Your Tax Penalty Report</div>
          <div style={{ color:'rgba(255,255,255,.6)', fontSize:13, marginTop:4 }}>{platform} • ${parseFloat(income).toLocaleString()} income</div>
        </div>
        <div style={body}>
          <div style={{ background:'rgba(178,34,52,0.12)', border:'2px solid #B22234', borderRadius:8, padding:'20px', textAlign:'center', marginBottom:20 }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#B22234', letterSpacing:1, marginBottom:4 }}>YOU ARE CURRENTLY OVERPAYING THE IRS</div>
            <div style={{ fontSize:52, fontWeight:900, color:'#B22234', lineHeight:1 }}>{fmt(result.overpaying)}</div>
            <div style={{ fontSize:13, color:'rgba(255,255,255,0.5)', marginTop:6 }}>per year in avoidable taxes & penalties</div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:20 }}>
            <div style={{ background:'#fef9e7', border:'1px solid #f39c12', borderRadius:8, padding:16, textAlign:'center' }}>
              <div style={{ fontSize:11, fontWeight:700, color:'#f39c12', letterSpacing:1 }}>MISSED DEDUCTIONS</div>
              <div style={{ fontSize:28, fontWeight:900, color: 'rgba(255,255,255,0.9)', margin:'6px 0' }}>{fmt(result.missedDeductions)}</div>
              <div style={{ fontSize:11, color:'rgba(255,255,255,0.5)' }}>you could deduct</div>
            </div>
            {result.sCorpSavings > 0 ? (
              <div style={{ background: 'rgba(5,150,105,0.12)', border:'1px solid #22c55e', borderRadius:8, padding:16, textAlign:'center' }}>
                <div style={{ fontSize:11, fontWeight:700, color:'#16a34a', letterSpacing:1 }}>S-CORP SAVINGS</div>
                <div style={{ fontSize:28, fontWeight:900, color: 'rgba(255,255,255,0.9)', margin:'6px 0' }}>{fmt(result.sCorpSavings)}</div>
                <div style={{ fontSize:11, color:'rgba(255,255,255,0.5)' }}>per year if you switch</div>
              </div>
            ) : (
              <div style={{ background:'#eff6ff', border:'1px solid #3b82f6', borderRadius:8, padding:16, textAlign:'center' }}>
                <div style={{ fontSize:11, fontWeight:700, color:'#2563eb', letterSpacing:1 }}>QUARTERLY PAYMENT</div>
                <div style={{ fontSize:20, fontWeight:900, color: 'rgba(255,255,255,0.9)', margin:'6px 0' }}>{fmt(result.quarterlyOwed)}</div>
                <div style={{ fontSize:11, color:'rgba(255,255,255,0.5)' }}>due Apr 15, 2026</div>
              </div>
            )}
          </div>
          <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid #e2e8f0', borderRadius:8, padding:16, marginBottom:20 }}>
            <div style={{ fontSize:13, fontWeight:800, color: 'rgba(255,255,255,0.9)', marginBottom:12 }}> YOUR PERSONALIZED ACTION PLAN</div>
            {result.tips.map((tip: string, i: number) => (
              <div key={i} style={{ display:'flex', gap:10, marginBottom:8 }}>
                <span style={{ color:'#22c55e', fontWeight:800 }}>✓</span>
                <span style={{ fontSize:13, color: 'rgba(255,255,255,0.85)' }}>{tip}</span>
              </div>
            ))}
          </div>
          <div style={{ background:'#1e2d5a', borderRadius:8, padding:20, textAlign:'center' }}>
            <div style={{ color:'#e8b84b', fontSize:12, fontWeight:700, letterSpacing:1, marginBottom:8 }}>READY TO STOP OVERPAYING?</div>
            <a href="https://1099deductions.com" target="_blank" rel="noopener"
              style={{ display:'block', background:'#B22234', color:'#fff', borderRadius:6, padding:'14px', fontSize:15, fontWeight:800, textDecoration:'none', marginBottom:10 }}>
              File with TurboTax Self-Employed →
            </a>
            <a href="https://privatepaycheck.com" target="_blank" rel="noopener"
              style={{ display:'block', background:'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.9)', borderRadius:6, padding:'12px', fontSize:14, fontWeight:700, textDecoration:'none', border:'1px solid rgba(255,255,255,0.12)' }}>
              Track expenses with QuickBooks SE →
            </a>
          </div>
          <button onClick={() => { setResult(null); setStep(0) }} style={{ ...btnG, marginTop:16 }}>← Start Over</button>
        </div>
      </div>
      <div style={{ textAlign:'center' }}>
        <Link href="/" style={{ color:'rgba(255,255,255,.5)', fontSize:13, textDecoration:'none' }}>← Back to GigWiseTax Home</Link>
      </div>
    </div></div>
  )

  return (
    <div style={bg}><div style={wrap}>
      <div style={{ textAlign:'center', marginBottom:32 }}>
        <div style={{ display:'inline-block', background:'#B22234', color:'#fff', fontSize:11, fontWeight:800, letterSpacing:1.5, padding:'5px 14px', borderRadius:20, marginBottom:14 }}>FREE TAX ANALYSIS</div>
        <h1 style={{ color:'#fff', fontSize:28, fontWeight:900, margin:'0 0 10px', lineHeight:1.2 }}>How Much Are You Overpaying the IRS?</h1>
        <p style={{ color:'rgba(255,255,255,.6)', fontSize:15, margin:0 }}>Answer 7 quick questions — get your personalized penalty report in 60 seconds</p>
      </div>
      <div style={card}>
        <div style={hdr}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div style={{ color:'#e8b84b', fontSize:12, fontWeight:700, letterSpacing:1 }}>{step === 0 ? 'START' : `STEP ${step} OF 7`}</div>
            <div style={{ color:'rgba(255,255,255,.5)', fontSize:12 }}>GigWiseTax</div>
          </div>
          {step > 0 && <div style={{ height:4, background:'rgba(255,255,255,0.12)', borderRadius:4, marginTop:12 }}><div style={{ height:'100%', width:`${(step/7)*100}%`, background:'#B22234', borderRadius:4, transition:'width .3s' }}/></div>}
        </div>
        <div style={body}>
          {step === 0 && (
            <div style={{ textAlign:'center' }}>
              <div style={{ fontSize:48, marginBottom:16 }}></div>
              <h2 style={{ fontSize:20, fontWeight:800, color: 'rgba(255,255,255,0.9)', margin:'0 0 10px' }}>Find Your Tax Overpayment</h2>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:14, margin:'0 0 24px', lineHeight:1.6 }}>Most gig workers overpay $2,000–$6,000/year. This free tool shows you exactly where your money is going.</p>
              <div style={{ background:'rgba(255,255,255,0.05)', borderRadius:8, padding:16, marginBottom:24, textAlign:'left' }}>
                {['Takes only 60 seconds','Personalized to your platform','Shows exact dollar savings','100% free — no signup needed'].map((t,i) => (
                  <div key={i} style={{ display:'flex', gap:8, marginBottom:6, fontSize:14, color: 'rgba(255,255,255,0.85)' }}><span style={{ color:'#22c55e', fontWeight:800 }}>✓</span>{t}</div>
                ))}
              </div>
              <button onClick={() => setStep(1)} style={btnR}>Find My Tax Savings →</button>
            </div>
          )}
          {step === 1 && (
            <div>
              <h2 style={{ fontSize:18, fontWeight:800, color: 'rgba(255,255,255,0.9)', margin:'0 0 20px' }}>Which platform do you work on?</h2>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                {PLATFORMS.map(pl => (
                  <button key={pl.name} onClick={() => setPlatform(pl.name)} style={{ ...opt(platform===pl.name), padding:'12px 10px' }}>{pl.emoji} {pl.name}</button>
                ))}
              </div>
              <button onClick={() => platform && setStep(2)} style={{ ...btnR, opacity: platform ? 1 : 0.5 }}>Next →</button>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 style={{ fontSize:18, fontWeight:800, color: 'rgba(255,255,255,0.9)', margin:'0 0 6px' }}>What's your annual {platform} income?</h2>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:13, margin:'0 0 20px' }}>Enter your gross earnings before expenses</p>
              <input type="text" inputMode="numeric" value={income} onChange={e => setIncome(e.target.value)} placeholder="e.g. 45000" style={{...inp, color:"#ffffff", background:"#fff"}}/>
              <div style={{ display:'flex', gap:8, marginTop:12, flexWrap:'wrap' as const }}>
                {['15000','25000','45000','65000','85000'].map(v => (
                  <button key={v} onClick={() => setIncome(v)} style={{ background:income===v?'#1e2d5a':'rgba(255,255,255,0.08)', color:income===v?'#fff':'rgba(255,255,255,0.75)', border:income===v?'2px solid #B22234':'2px solid rgba(255,255,255,0.15)', borderRadius:6, padding:'7px 12px', fontSize:13, fontWeight:600, cursor:'pointer' }}>${parseInt(v)/1000}k</button>
                ))}
              </div>
              <button onClick={() => income && setStep(hasMileage ? 3 : 4)} style={{ ...btnR, opacity: income ? 1 : 0.5 }}>Next →</button>
              <button onClick={() => setStep(1)} style={btnG}>← Back</button>
            </div>
          )}
          {step === 3 && hasMileage && (
            <div>
              <h2 style={{ fontSize:18, fontWeight:800, color: 'rgba(255,255,255,0.9)', margin:'0 0 6px' }}>How many miles do you drive per year?</h2>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:13, margin:'0 0 6px' }}>IRS rate: <strong>$0.725/mile in 2025</strong> — your biggest deduction</p>
              <input type="text" inputMode="numeric" value={miles} onChange={e => setMiles(e.target.value)} placeholder="e.g. 15000" style={{...inp, color:"#ffffff", background:"#fff"}}/>
              {miles && <div style={{ background: 'rgba(5,150,105,0.12)', border:'1px solid #22c55e', borderRadius:6, padding:12, marginTop:12, fontSize:13, color:'#16a34a', fontWeight:600 }}>
                 Potential deduction: ${(parseFloat(miles)*0.70).toLocaleString()} → saves ~${Math.round(parseFloat(miles)*0.70*0.28).toLocaleString()} in taxes
              </div>}
              <button onClick={() => setStep(4)} style={btnR}>Next →</button>
              <button onClick={() => setStep(2)} style={btnG}>← Back</button>
            </div>
          )}
          {step === 4 && (
            <div>
              <h2 style={{ fontSize:18, fontWeight:800, color: 'rgba(255,255,255,0.9)', margin:'0 0 6px' }}>Do you have a dedicated home office?</h2>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:13, margin:'0 0 20px' }}>A room used exclusively for work = up to $1,500/yr deduction</p>
              <div style={{ display:'flex', gap:12 }}>
                <button onClick={() => setHomeOffice(true)} style={opt(homeOffice===true)}> Yes, I do</button>
                <button onClick={() => setHomeOffice(false)} style={opt(homeOffice===false)}> No</button>
              </div>
              <button onClick={() => homeOffice !== null && setStep(5)} style={{ ...btnR, opacity: homeOffice !== null ? 1 : 0.5 }}>Next →</button>
              <button onClick={() => setStep(hasMileage ? 3 : 2)} style={btnG}>← Back</button>
            </div>
          )}
          {step === 5 && (
            <div>
              <h2 style={{ fontSize:18, fontWeight:800, color: 'rgba(255,255,255,0.9)', margin:'0 0 6px' }}>Do you use your phone/internet for work?</h2>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:13, margin:'0 0 20px' }}>50–80% of your bill is deductible if used for work</p>
              <div style={{ display:'flex', gap:12 }}>
                <button onClick={() => setPhone(true)} style={opt(phone===true)}> Yes</button>
                <button onClick={() => setPhone(false)} style={opt(phone===false)}> No</button>
              </div>
              <button onClick={() => phone !== null && setStep(6)} style={{ ...btnR, opacity: phone !== null ? 1 : 0.5 }}>Next →</button>
              <button onClick={() => setStep(4)} style={btnG}>← Back</button>
            </div>
          )}
          {step === 6 && (
            <div>
              <h2 style={{ fontSize:18, fontWeight:800, color: 'rgba(255,255,255,0.9)', margin:'0 0 6px' }}>Are you paying quarterly estimated taxes?</h2>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:13, margin:'0 0 20px' }}>Missing payments = IRS penalty up to 8% of owed amount</p>
              <div style={{ display:'flex', gap:12 }}>
                <button onClick={() => setQuarterly(true)} style={opt(quarterly===true)}> Yes, I pay quarterly</button>
                <button onClick={() => setQuarterly(false)} style={opt(quarterly===false)}> No / Not sure</button>
              </div>
              <button onClick={() => quarterly !== null && setStep(7)} style={{ ...btnR, opacity: quarterly !== null ? 1 : 0.5 }}>Next →</button>
              <button onClick={() => setStep(5)} style={btnG}>← Back</button>
            </div>
          )}
          {step === 7 && (
            <div>
              <h2 style={{ fontSize:18, fontWeight:800, color: 'rgba(255,255,255,0.9)', margin:'0 0 6px' }}>What's your business structure?</h2>
              <p style={{ color:'rgba(255,255,255,0.5)', fontSize:13, margin:'0 0 20px' }}>This determines how much self-employment tax you pay</p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                {[{val:'sole-prop',label:'Sole Proprietor',sub:'Most common'},{val:'llc',label:'LLC',sub:'Single-member'},{val:'s-corp',label:'S-Corporation',sub:'Already optimized'},{val:'unsure',label:"I'm not sure",sub:"We'll explain"}].map(o => (
                  <button key={o.val} onClick={() => setEntity(o.val)} style={{ ...opt(entity===o.val), padding:'14px 10px' }}>
                    <div style={{ fontWeight:800 }}>{o.label}</div>
                    <div style={{ fontSize:11, opacity:.7, marginTop:3 }}>{o.sub}</div>
                  </button>
                ))}
              </div>
              <button onClick={() => entity && calculate()} style={{ ...btnR, opacity: entity ? 1 : 0.5 }}> Calculate My Savings →</button>
              <button onClick={() => setStep(6)} style={btnG}>← Back</button>
            </div>
          )}
        </div>
      </div>
      <p style={{ color:'rgba(255,255,255,.3)', fontSize:11, textAlign:'center' }}>For informational purposes only. Consult a CPA for personalized advice. GigWiseTax.com</p>
    </div></div>
  )
}
