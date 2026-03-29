'use client'

import { useState } from 'react'
import Link from 'next/link'

const DEADLINES = [
  { q: 'Q1 2026', period: 'Jan – Mar', due: 'April 15, 2026',   daysLeft: 42,  urgent: true  },
  { q: 'Q2 2026', period: 'Apr – May', due: 'June 16, 2026',    daysLeft: 104, urgent: false },
  { q: 'Q3 2026', period: 'Jun – Aug', due: 'Sept 15, 2026',    daysLeft: 195, urgent: false },
  { q: 'Q4 2026', period: 'Sep – Dec', due: 'Jan 15, 2027',     daysLeft: 317, urgent: false },
]

const PLATFORMS = ['DoorDash','Uber','Lyft','Etsy','Airbnb','OnlyFans','Instacart','Amazon Flex','Grubhub','Walmart Spark','Other']

export default function QuarterlyReminder() {
  const [step, setStep]         = useState<'form'|'success'>('form')
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [platform, setPlatform] = useState('')
  const [income, setIncome]     = useState('')

  const handleSubmit = () => {
    if (!email || !name) return
    setStep('success')
  }

  const bg   = { minHeight: '100vh', background: '#0d1117', padding: '40px 20px' }
  const wrap = { maxWidth: 680, margin: '0 auto' }
  const card = { background: '#0d1b3e', borderRadius: 8, overflow: 'hidden' as const, boxShadow: '0 4px 24px rgba(0,0,0,.3)', marginBottom: 24 }
  const hdr  = { background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', padding: '20px 24px', borderBottom: '3px solid #B22234' }
  const body = { padding: '24px' }
  const inp  = { width: '100%', border: '2px solid #d1d5db', borderRadius: 6, padding: '13px 16px', fontSize: 16, fontWeight: 600, color: '#ffffff', background: '#0d1b3e', boxSizing: 'border-box' as const, marginTop: 8 }
  const lbl  = { fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.85)', display: 'block', marginTop: 16 } as const
  const btnR = { background: '#B22234', color: '#fff', border: 'none', borderRadius: 6, padding: '15px', fontSize: 16, fontWeight: 800, cursor: 'pointer', width: '100%', marginTop: 20 } as const

  if (step === 'success') return (
    <div style={bg}><div style={wrap}>
      <div style={card}>
        <div style={{ background: 'linear-gradient(135deg,#16a34a,#15803d)', padding: '48px 24px', textAlign: 'center' }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}></div>
          <h1 style={{ color: '#fff', fontSize: 26, fontWeight: 900, margin: '0 0 10px' }}>You're All Set, {name}!</h1>
          <p style={{ color: 'rgba(255,255,255,.85)', fontSize: 15, margin: 0, lineHeight: 1.6 }}>
            We'll email you at <strong>{email}</strong> before each quarterly tax deadline.<br/>
            Never pay an IRS penalty again.
          </p>
        </div>
        <div style={body}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 14 }}> You'll receive reminders before:</div>
            {DEADLINES.map((d, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: d.urgent ? 'rgba(178,34,52,0.12)' : 'rgba(255,255,255,0.05)', borderRadius: 6, marginBottom: 8, border: d.urgent ? '1px solid rgba(178,34,52,0.5)' : '1px solid rgba(255,255,255,0.12)' }}>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: d.urgent ? '#B22234' : 'rgba(255,255,255,0.85)' }}>{d.q}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginLeft: 8 }}>{d.period}</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: d.urgent ? '#B22234' : 'rgba(255,255,255,0.75)' }}>{d.due}</span>
              </div>
            ))}
          </div>

          <div style={{ background: '#1e2d5a', borderRadius: 8, padding: 20, textAlign: 'center', marginBottom: 16 }}>
            <div style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>Q1 DEADLINE IS COMING — APRIL 15, 2026</div>
            <p style={{ color: 'rgba(255,255,255,.8)', fontSize: 14, margin: '0 0 16px', lineHeight: 1.6 }}>File your taxes now and avoid IRS penalties</p>
            <a href="https://1099deductions.com" target="_blank" rel="noopener"
              style={{ display: 'block', background: '#B22234', color: '#fff', borderRadius: 6, padding: '13px', fontSize: 15, fontWeight: 800, textDecoration: 'none' }}>
              File Now with TurboTax Self-Employed →
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <Link href="/tax-penalty-finder" style={{ display: 'block', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.9)', borderRadius: 6, padding: '12px', fontSize: 13, fontWeight: 700, textDecoration: 'none', textAlign: 'center', border: '1px solid rgba(255,255,255,0.12)' }}>
               Tax Penalty Finder
            </Link>
            <Link href="/deductions" style={{ display: 'block', background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.9)', borderRadius: 6, padding: '12px', fontSize: 13, fontWeight: 700, textDecoration: 'none', textAlign: 'center', border: '1px solid rgba(255,255,255,0.12)' }}>
               Deductions Checklist
            </Link>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,.4)', fontSize: 13, textDecoration: 'none' }}>← Back to GigWiseTax Home</Link>
      </div>
    </div></div>
  )

  return (
    <div style={bg}><div style={wrap}>

      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div style={{ display: 'inline-block', background: '#B22234', color: '#fff', fontSize: 11, fontWeight: 800, letterSpacing: 1.5, padding: '5px 14px', borderRadius: 20, marginBottom: 14 }}>FREE SERVICE</div>
        <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 900, margin: '0 0 10px', lineHeight: 1.2 }}>Never Miss a Tax Deadline Again</h1>
        <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 15, margin: 0 }}>Get free email reminders 14 days before every quarterly IRS deadline</p>
      </div>

      {/* URGENT BANNER */}
      <div style={{ background: 'linear-gradient(135deg,#B22234,#8b1a27)', borderRadius: 8, padding: '16px 20px', marginBottom: 24, display: 'flex', gap: 14, alignItems: 'center' }}>
        <span style={{ fontSize: 28, flexShrink: 0 }}></span>
        <div>
          <div style={{ color: '#fff', fontSize: 15, fontWeight: 800, marginBottom: 3 }}>Q1 2026 Deadline: April 15, 2026 — 42 days away</div>
          <div style={{ color: 'rgba(255,255,255,.8)', fontSize: 13 }}>Missing this payment = IRS underpayment penalty. Sign up now to get reminded.</div>
        </div>
      </div>

      {/* DEADLINES */}
      <div style={card}>
        <div style={hdr}>
          <div style={{ color: '#e8b84b', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, marginBottom: 6 }}>2026 QUARTERLY TAX CALENDAR</div>
          <div style={{ color: '#fff', fontSize: 18, fontWeight: 800 }}>All 4 IRS Payment Deadlines</div>
        </div>
        <div style={body}>
          {DEADLINES.map((d, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', background: d.urgent ? 'rgba(178,34,52,0.12)' : 'rgba(255,255,255,0.05)', borderRadius: 8, marginBottom: 10, border: d.urgent ? '2px solid #B22234' : '1px solid rgba(255,255,255,0.12)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                  {d.urgent && <span style={{ background: '#B22234', color: '#fff', fontSize: 9, fontWeight: 800, padding: '2px 6px', borderRadius: 3 }}>URGENT</span>}
                  <span style={{ fontSize: 15, fontWeight: 800, color: d.urgent ? '#B22234' : 'rgba(255,255,255,0.85)' }}>{d.q}</span>
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>Income period: {d.period}</div>
              </div>
              <div style={{ textAlign: 'right' as const }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: d.urgent ? '#B22234' : 'rgba(255,255,255,0.75)' }}>{d.due}</div>
                <div style={{ fontSize: 12, color: d.urgent ? '#B22234' : '#9ca3af', fontWeight: 600 }}>{d.daysLeft} days left</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SIGNUP FORM */}
      <div style={card}>
        <div style={hdr}>
          <div style={{ color: '#e8b84b', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, marginBottom: 6 }}>FREE EMAIL REMINDERS</div>
          <div style={{ color: '#fff', fontSize: 20, fontWeight: 800 }}>Get Reminded Before Every Deadline</div>
          <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 13, marginTop: 4 }}>14 days before each quarterly payment — completely free</div>
        </div>
        <div style={body}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={lbl}>Your First Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g. John" style={inp}/>
            </div>
            <div>
              <label style={lbl}>Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@gmail.com" style={inp}/>
            </div>
          </div>

          <label style={lbl}>Your Platform <span style={{ color: '#7a9abf', fontWeight: 400 }}>(optional)</span></label>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginTop: 8 }}>
            {PLATFORMS.map(p => (
              <button key={p} onClick={() => setPlatform(p)}
                style={{ background: platform===p?'#1e2d5a':'rgba(255,255,255,0.08)', color: platform===p?'#fff':'rgba(255,255,255,0.75)', border: platform===p?'2px solid #B22234':'2px solid rgba(255,255,255,0.15)', borderRadius: 6, padding: '7px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                {p}
              </button>
            ))}
          </div>

          <label style={lbl}>Estimated Annual Income <span style={{ color: '#7a9abf', fontWeight: 400 }}>(optional — helps us personalize reminders)</span></label>
          <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' as const }}>
            {['Under $20k','$20k–$50k','$50k–$100k','Over $100k'].map(v => (
              <button key={v} onClick={() => setIncome(v)}
                style={{ background: income===v?'#1e2d5a':'rgba(255,255,255,0.08)', color: income===v?'#fff':'rgba(255,255,255,0.75)', border: income===v?'2px solid #B22234':'2px solid rgba(255,255,255,0.15)', borderRadius: 6, padding: '8px 14px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                {v}
              </button>
            ))}
          </div>

          <button onClick={handleSubmit} style={{ ...btnR, opacity: name && email ? 1 : 0.5 }}>
             Send Me Free Tax Reminders →
          </button>

          <p style={{ fontSize: 11, color: '#7a9abf', textAlign: 'center' as const, marginTop: 12, lineHeight: 1.6 }}>
             No spam. Unsubscribe anytime. We send only 4 emails per year — one before each quarterly deadline.
          </p>
        </div>
      </div>

      {/* WHY */}
      <div style={card}>
        <div style={{ ...hdr, borderBottom: '1px solid rgba(255,255,255,.1)' }}>
          <div style={{ color: '#fff', fontSize: 16, fontWeight: 800 }}>Why Quarterly Taxes Matter</div>
        </div>
        <div style={body}>
          {[
            { icon: '', title: 'Avoid IRS Penalties', desc: 'Missing quarterly payments triggers underpayment penalties — up to 8% of the amount owed. On a $5,000 tax bill, that\'s $400 wasted.' },
            { icon: '', title: 'Required for Gig Workers', desc: 'If you earn $400+ in self-employment income, the IRS requires quarterly payments. DoorDash, Uber, Etsy — all platforms send 1099s, not W-2s.' },
            { icon: '', title: 'How Much to Pay', desc: 'Use our Tax Penalty Finder to calculate your exact quarterly amount. Generally, set aside 25-30% of net income each quarter.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 5 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}
          <Link href="/tax-penalty-finder"
            style={{ display: 'block', background: '#1e2d5a', color: '#fff', borderRadius: 6, padding: '13px', fontSize: 14, fontWeight: 700, textDecoration: 'none', textAlign: 'center' as const }}>
             Calculate My Quarterly Tax Amount →
          </Link>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,.4)', fontSize: 13, textDecoration: 'none' }}>← Back to GigWiseTax Home</Link>
      </div>
      <p style={{ color: 'rgba(255,255,255,.2)', fontSize: 11, textAlign: 'center', marginTop: 16 }}>
        GigWiseTax.com — Free tax tools for gig workers. Not affiliated with the IRS.
      </p>
    </div></div>
  )
}
