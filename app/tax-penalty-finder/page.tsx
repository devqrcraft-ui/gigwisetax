'use client'
export const dynamic = 'force-dynamic'

import { useState } from 'react'
import Link from 'next/link'

const PLATFORMS = [
  { name: 'DoorDash',     emoji: '🚗', mileage: true  },
  { name: 'Uber',         emoji: '🚕', mileage: true  },
  { name: 'Lyft',         emoji: '🚖', mileage: true  },
  { name: 'Instacart',    emoji: '🛒', mileage: true  },
  { name: 'Etsy',         emoji: '🛍️', mileage: false },
  { name: 'Airbnb',       emoji: '🏠', mileage: false },
  { name: 'OnlyFans',     emoji: '⭐', mileage: false },
  { name: 'Amazon Flex',  emoji: '📦', mileage: true  },
  { name: 'Grubhub',      emoji: '🍔', mileage: true  },
  { name: 'Walmart Spark',emoji: '⚡', mileage: true  },
]

type Step = 0|1|2|3|4|5|6|7
type Result = {
  overpaying: number
  missedDeductions: number
  sCorpSavings: number
  quarterlyOwed: number
  nextDeadline: string
  tips: string[]
}

export default function TaxPenaltyFinder() {
  const [step, setStep]         = useState<Step>(0)
  const [platform, setPlatform] = useState('')
  const [income, setIncome]     = useState('')
  const [miles, setMiles]       = useState('')
  const [homeOffice, setHomeOffice] = useState<boolean|null>(null)
  const [phone, setPhone]       = useState<boolean|null>(null)
  const [quarterly, setQuarterly] = useState<boolean|null>(null)
  const [entity, setEntity]     = useState('')
  const [result, setResult]     = useState<Result|null>(null)

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US')
  const hasMileage = PLATFORMS.find(p => p.name === platform)?.mileage ?? false

  const calculate = () => {
    const inc = parseFloat(income) || 0
    const mi  = parseFloat(miles)  || 0

    // Missed deductions calc
    const mileageDeduction   = hasMileage ? mi * 0.70 : 0
    const homeOfficeDed      = homeOffice ? 1200 : 0
    const phoneDed           = phone ? inc * 0.04 : 0
    const totalMissed        = mileageDeduction + homeOfficeDed + phoneDed + 800 // avg misc
    const taxSavedOnMissed   = totalMissed * 0.28

    // Quarterly penalty
    const annualTax    = inc * 0.9235 * 0.153 + inc * 0.22
    const quarterlyAmt = annualTax / 4
    const penaltyEst   = quarterly === false ? quarterlyAmt * 0.08 : 0

    // S-Corp savings
    const sCorpSavings = inc > 60000 && entity !== 's-corp'
      ? Math.round((inc - 40000) * 0.153 * 0.5)
      : 0

    const overpaying = Math.round(taxSavedOnMissed + penaltyEst)

    const tips: string[] = []
    if (hasMileage && mi > 0)  tips.push(`Track ${Math.round(mi).toLocaleString()} miles → save ${fmt(mileageDeduction * 0.28)}/yr`)
    if (homeOffice)             tips.push(`Home office deduction → save up to ${fmt(homeOfficeDed * 0.28)}/yr`)
    if (phone)                  tips.push(`Phone/internet deduction → save ${fmt(phoneDed * 0.28)}/yr`)
    if (quarterly === false)    tips.push(`Start quarterly payments → avoid ${fmt(penaltyEst)} IRS penalty`)
    if (sCorpSavings > 0)       tips.push(`Switch to S-Corp → save ${fmt(sCorpSavings)}/yr on SE tax`)
    tips.push(`SEP-IRA contribution → save up to ${fmt(inc * 0.25 * 0.28)}/yr in taxes`)

    setResult({
      overpaying,
      missedDeductions: Math.round(totalMissed),
      sCorpSavings,
      quarterlyOwed: Math.round(quarterlyAmt),
      nextDeadline: 'April 15, 2026',
      tips,
    })
    setStep(8 as any)
  }

  // ── styles ──
  const bg      = { minHeight: '100vh', background: '#0d1117', padding: '40px 20px' }
  const wrap    = { maxWidth: 640, margin: '0 auto' }
  const card    = { background: '#fff', borderRadius: 8, overflow: 'hidden' as const, boxShadow: '0 4px 24px rgba(0,0,0,.3)', marginBottom: 24 }
  const hdr     = { background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', padding: '20px 24px', borderBottom: '3px solid #B22234' }
  const body    = { padding: '24px' }
  const btnRed  = { background: '#B22234', color: '#fff', border: 'none', borderRadius: 6, padding: '14px 32px', fontSize: 16, fontWeight: 800, cursor: 'pointer', width: '100%', marginTop: 16 }
  const btnGray = { background: '#f3f4f6', color: '#374151', border: '1px solid #d1d5db', borderRadius: 6, padding: '12px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer', width: '100%', marginTop: 8 }
  const optBtn  = (active: boolean) => ({
    background: active ? '#1e2d5a' : '#f9fafb',
    color: active ? '#fff' : '#374151',
    border: active ? '2px solid #B22234' : '2px solid #e5e7eb',
    borderRadius: 8, padding: '14px 16px', fontSize: 14, fontWeight: 700,
    cursor: 'pointer', flex: 1, textAlign: 'center' as const,
  })
  const inp = { width: '100%', border: '2px solid #e5e7eb', borderRadius: 6, padding: '12px 14px', fontSize: 16, boxSizing: 'border-box' as const, marginTop: 8 }
  const prog = (s: number) => ({ height: 4, background: '#e5e7eb', borderRadius: 4, marginBottom: 24, overflow: 'hidden' as const,
    position: 'relative' as const })
  const progFill = (s: number) => ({ height: '100%', width: `${Math.min((s/7)*100,100)}%`, background: '#B22234', borderRadius: 4, transition: 'width .3s' })

  const STEPS = 7

  if (result) return (
    <div style={bg}>
      <div style={wrap}>
        {/* RESULT CARD */}
        <div style={card}>
          <div style={hdr}>
            <div style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 6 }}>GIGWISETAX — FREE ANALYSIS</div>
            <div style={{ color: '#fff', fontSize: 22, fontWeight: 800 }}>Your Tax Penalty Report</div>
            <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 13, marginTop: 4 }}>{platform} • ${parseFloat(income).toLocaleString()} income</div>
          </div>
          <div style={body}>

            {/* BIG NUMBER */}
            <div style={{ background: '#fff5f5', border: '2px solid #B22234', borderRadius: 8, padding: '20px', textAlign: 'center', marginBottom: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#B22234', letterSpacing: 1, marginBottom: 4 }}>YOU ARE CURRENTLY OVERPAYING THE IRS</div>
              <div style={{ fontSize: 52, fontWeight: 900, color: '#B22234', lineHeight: 1 }}>{fmt(result.overpaying)}</div>
              <div style={{ fontSize: 13, color: '#6b7280', marginTop: 6 }}>per year in avoidable taxes & penalties</div>
            </div>

            {/* 3 BOXES */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
              <div style={{ background: '#fef9e7', border: '1px solid #f39c12', borderRadius: 8, padding: 16, textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#f39c12', letterSpacing: 1 }}>MISSED DEDUCTIONS</div>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#1a1a2e', margin: '6px 0' }}>{fmt(result.missedDeductions)}</div>
                <div style={{ fontSize: 11, color: '#6b7280' }}>you could deduct</div>
              </div>
              {result.sCorpSavings > 0 ? (
                <div style={{ background: '#f0fdf4', border: '1px solid #22c55e', borderRadius: 8, padding: 16, textAlign: 'center' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#16a34a', letterSpacing: 1 }}>S-CORP SAVINGS</div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: '#1a1a2e', margin: '6px 0' }}>{fmt(result.sCorpSavings)}</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>per year if you switch</div>
                </div>
              ) : (
                <div style={{ background: '#eff6ff', border: '1px solid #3b82f6', borderRadius: 8, padding: 16, textAlign: 'center' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#2563eb', letterSpacing: 1 }}>NEXT PAYMENT DUE</div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: '#1a1a2e', margin: '6px 0' }}>{result.nextDeadline}</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>{fmt(result.quarterlyOwed)} quarterly est.</div>
                </div>
              )}
            </div>

            {/* TIPS */}
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: 16, marginBottom: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#1a1a2e', marginBottom: 12 }}>💡 YOUR PERSONALIZED ACTION PLAN</div>
              {result.tips.map((tip, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: '#22c55e', fontWeight: 800, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 13, color: '#374151' }}>{tip}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ background: '#1e2d5a', borderRadius: 8, padding: 20, textAlign: 'center' }}>
              <div style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>READY TO STOP OVERPAYING?</div>
              <div style={{ color: '#fff', fontSize: 15, fontWeight: 600, marginBottom: 16 }}>File your taxes correctly with TurboTax Self-Employed</div>
              <a href="https://turbotax.intuit.com/personal-taxes/self-employed/?cid=affiliate" target="_blank" rel="noopener"
                style={{ display: 'block', background: '#B22234', color: '#fff', borderRadius: 6, padding: '14px', fontSize: 15, fontWeight: 800, textDecoration: 'none', marginBottom: 10 }}>
                File with TurboTax Self-Employed →
              </a>
              <a href="https://quickbooks.intuit.com/self-employed/?cid=affiliate" target="_blank" rel="noopener"
                style={{ display: 'block', background: '#fff', color: '#1a1a2e', borderRadius: 6, padding: '12px', fontSize: 14, fontWeight: 700, textDecoration: 'none', border: '1px solid #e5e7eb' }}>
                Track expenses with QuickBooks SE →
              </a>
            </div>

            <button onClick={() => { setResult(null); setStep(0) }} style={{ ...btnGray, marginTop: 16 }}>
              ← Start Over
            </button>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, textDecoration: 'none' }}>← Back to GigWiseTax Home</Link>
        </div>
      </div>
    </div>
  )

  return (
    <div style={bg}>
      <div style={wrap}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ display: 'inline-block', background: '#B22234', color: '#fff', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, padding: '5px 14px', borderRadius: 20, marginBottom: 14 }}>
            FREE TAX ANALYSIS
          </div>
          <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 900, margin: '0 0 10px', lineHeight: 1.2 }}>
            How Much Are You Overpaying the IRS?
          </h1>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 15, margin: 0 }}>
            Answer 7 quick questions — get your personalized penalty report in 60 seconds
          </p>
        </div>

        <div style={card}>
          <div style={hdr}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>
                {step === 0 ? 'START' : `STEP ${step} OF ${STEPS}`}
              </div>
              <div style={{ color: 'rgba(255,255,255,.5)', fontSize: 12 }}>GigWiseTax</div>
            </div>
            {step > 0 && <div style={prog(step)}><div style={progFill(step)} /></div>}
          </div>

          <div style={body}>

            {/* STEP 0 — START */}
            {step === 0 && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1a1a2e', margin: '0 0 10px' }}>
                  Find Your Tax Overpayment
                </h2>
                <p style={{ color: '#6b7280', fontSize: 14, margin: '0 0 24px', lineHeight: 1.6 }}>
                  Most gig workers overpay $2,000–$6,000/year in taxes due to missed deductions and IRS penalties.
                  This free tool shows you exactly where your money is going.
                </p>
                <div style={{ background: '#f8fafc', borderRadius: 8, padding: 16, marginBottom: 24, textAlign: 'left' }}>
                  {['Takes only 60 seconds', 'Personalized to your platform', 'Shows exact dollar savings', '100% free — no signup needed'].map((t,i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: 14, color: '#374151' }}>
                      <span style={{ color: '#22c55e', fontWeight: 800 }}>✓</span> {t}
                    </div>
                  ))}
                </div>
                <button onClick={() => setStep(1)} style={btnRed}>Find My Tax Savings →</button>
              </div>
            )}

            {/* STEP 1 — Platform */}
            {step === 1 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1a1a2e', margin: '0 0 6px' }}>Which platform do you work on?</h2>
                <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 20px' }}>Select your primary income source</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {PLATFORMS.map(pl => (
                    <button key={pl.name} onClick={() => setPlatform(pl.name)}
                      style={{ ...optBtn(platform === pl.name), padding: '12px 10px' }}>
                      {pl.emoji} {pl.name}
                    </button>
                  ))}
                </div>
                <button onClick={() => platform && setStep(2)} style={{ ...btnRed, opacity: platform ? 1 : 0.5 }}>
                  Next →
                </button>
              </div>
            )}

            {/* STEP 2 — Income */}
            {step === 2 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1a1a2e', margin: '0 0 6px' }}>
                  What's your annual {platform} income?
                </h2>
                <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 20px' }}>Enter your gross earnings before expenses</p>
                <div style={{ position: 'relative' as const }}>
                  <span style={{ position: 'absolute' as const, left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 18, color: '#6b7280', fontWeight: 700, marginTop: 4 }}>$</span>
                  <input type="number" value={income} onChange={e => setIncome(e.target.value)}
                    placeholder="e.g. 45000" style={{ ...inp, paddingLeft: 28 }} />
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' as const }}>
                  {['15000','25000','45000','65000','85000'].map(v => (
                    <button key={v} onClick={() => setIncome(v)}
                      style={{ background: income===v?'#1e2d5a':'#f3f4f6', color: income===v?'#fff':'#374151',
                        border: income===v?'2px solid #B22234':'2px solid #e5e7eb',
                        borderRadius: 6, padding: '7px 12px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                      ${parseInt(v).toLocaleString()}
                    </button>
                  ))}
                </div>
                <button onClick={() => income && setStep(hasMileage ? 3 : 4)} style={{ ...btnRed, opacity: income ? 1 : 0.5 }}>Next →</button>
                <button onClick={() => setStep(1)} style={btnGray}>← Back</button>
              </div>
            )}

            {/* STEP 3 — Mileage (only for delivery platforms) */}
            {step === 3 && hasMileage && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1a1a2e', margin: '0 0 6px' }}>
                  How many miles do you drive for {platform} per year?
                </h2>
                <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 6px' }}>IRS rate: <strong>$0.70/mile in 2025</strong> — this is your biggest deduction</p>
                <input type="number" value={miles} onChange={e => setMiles(e.target.value)}
                  placeholder="e.g. 15000" style={inp} />
                <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' as const }}>
                  {['5000','10000','15000','20000','30000'].map(v => (
                    <button key={v} onClick={() => setMiles(v)}
                      style={{ background: miles===v?'#1e2d5a':'#f3f4f6', color: miles===v?'#fff':'#374151',
                        border: miles===v?'2px solid #B22234':'2px solid #e5e7eb',
                        borderRadius: 6, padding: '7px 12px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                      {parseInt(v).toLocaleString()} mi
                    </button>
                  ))}
                </div>
                {miles && (
                  <div style={{ background: '#f0fdf4', border: '1px solid #22c55e', borderRadius: 6, padding: 12, marginTop: 12, fontSize: 13, color: '#16a34a', fontWeight: 600 }}>
                    💰 Potential mileage deduction: {fmt(parseFloat(miles) * 0.70)} → saves ~{fmt(parseFloat(miles) * 0.70 * 0.28)} in taxes
                  </div>
                )}
                <button onClick={() => setStep(4)} style={btnRed}>Next →</button>
                <button onClick={() => setStep(2)} style={btnGray}>← Back</button>
              </div>
            )}

            {/* STEP 4 — Home Office */}
            {step === 4 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1a1a2e', margin: '0 0 6px' }}>Do you have a dedicated home office?</h2>
                <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 20px' }}>A room or space used exclusively for work qualifies for up to $1,500/yr deduction</p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setHomeOffice(true)}  style={optBtn(homeOffice === true)}>✅ Yes, I do</button>
                  <button onClick={() => setHomeOffice(false)} style={optBtn(homeOffice === false)}>❌ No</button>
                </div>
                <button onClick={() => homeOffice !== null && setStep(5)} style={{ ...btnRed, opacity: homeOffice !== null ? 1 : 0.5 }}>Next →</button>
                <button onClick={() => setStep(hasMileage ? 3 : 2)} style={btnGray}>← Back</button>
              </div>
            )}

            {/* STEP 5 — Phone */}
            {step === 5 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1a1a2e', margin: '0 0 6px' }}>Do you use your phone/internet for work?</h2>
                <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 20px' }}>50–80% of your phone & internet bill is deductible if used for work</p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setPhone(true)}  style={optBtn(phone === true)}>✅ Yes</button>
                  <button onClick={() => setPhone(false)} style={optBtn(phone === false)}>❌ No</button>
                </div>
                <button onClick={() => phone !== null && setStep(6)} style={{ ...btnRed, opacity: phone !== null ? 1 : 0.5 }}>Next →</button>
                <button onClick={() => setStep(4)} style={btnGray}>← Back</button>
              </div>
            )}

            {/* STEP 6 — Quarterly */}
            {step === 6 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1a1a2e', margin: '0 0 6px' }}>Are you paying quarterly estimated taxes?</h2>
                <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 20px' }}>Gig workers must pay taxes 4x/year. Missing payments = IRS penalty up to 8% of owed amount</p>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button onClick={() => setQuarterly(true)}  style={optBtn(quarterly === true)}>✅ Yes, I pay quarterly</button>
                  <button onClick={() => setQuarterly(false)} style={optBtn(quarterly === false)}>❌ No / Not sure</button>
                </div>
                <button onClick={() => quarterly !== null && setStep(7)} style={{ ...btnRed, opacity: quarterly !== null ? 1 : 0.5 }}>Next →</button>
                <button onClick={() => setStep(5)} style={btnGray}>← Back</button>
              </div>
            )}

            {/* STEP 7 — Entity */}
            {step === 7 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1a1a2e', margin: '0 0 6px' }}>What's your business structure?</h2>
                <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 20px' }}>This determines how much self-employment tax you pay</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {[
                    { val: 'sole-prop', label: 'Sole Proprietor', sub: 'Most common' },
                    { val: 'llc',       label: 'LLC',            sub: 'Single-member' },
                    { val: 's-corp',    label: 'S-Corporation',  sub: 'Already optimized' },
                    { val: 'unsure',    label: "I'm not sure",   sub: 'We\'ll explain' },
                  ].map(opt => (
                    <button key={opt.val} onClick={() => setEntity(opt.val)}
                      style={{ ...optBtn(entity === opt.val), padding: '14px 10px' }}>
                      <div style={{ fontWeight: 800 }}>{opt.label}</div>
                      <div style={{ fontSize: 11, opacity: 0.7, marginTop: 3 }}>{opt.sub}</div>
                    </button>
                  ))}
                </div>
                <button onClick={() => entity && calculate()} style={{ ...btnRed, opacity: entity ? 1 : 0.5 }}>
                  🔍 Calculate My Savings →
                </button>
                <button onClick={() => setStep(6)} style={btnGray}>← Back</button>
              </div>
            )}

          </div>
        </div>

        <p style={{ color: 'rgba(255,255,255,.3)', fontSize: 11, textAlign: 'center' }}>
          For informational purposes only. Consult a CPA for personalized advice. GigWiseTax.com
        </p>
      </div>
    </div>
  )
}
