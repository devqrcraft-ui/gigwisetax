import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '1099 Tax Deadlines 2026 — Complete Calendar for Gig Workers | GigWiseTax',
  description: 'Every 1099 and quarterly tax deadline for gig workers in 2025. IRS filing dates, state deadlines, penalty amounts. Free reminder signup included.',
  keywords: '1099 tax deadlines 2025, quarterly tax deadlines 2025, gig worker tax calendar, IRS 1040-ES deadlines',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/1099-deadlines-2025' },
}

export default function DeadlinesBlog() {
  const s  = { maxWidth: 780, margin: '0 auto', padding: '40px 20px' }
  const h2 = { fontSize: 22, fontWeight: 800, color: 'rgba(255,255,255,0.9)', margin: '32px 0 12px' }
  const p  = { fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, margin: '0 0 16px' }
  const warn = { background: 'rgba(178,34,52,0.12)', border: '1px solid rgba(178,34,52,0.5)', borderRadius: 6, padding: '14px 18px', margin: '20px 0', fontSize: 14, color: '#7f1d1d', lineHeight: 1.7 }

  const deadlines = [
    { date: 'January 15, 2025',    event: 'Q4 2024 Estimated Tax Payment Due',     urgent: false },
    { date: 'January 31, 2025',    event: 'Platforms must send 1099-NEC to workers', urgent: false },
    { date: 'February 28, 2025',   event: 'Platforms file 1099s with IRS (paper)',  urgent: false },
    { date: 'March 31, 2025',      event: 'Platforms file 1099s with IRS (e-file)', urgent: false },
    { date: 'April 15, 2025',      event: 'Q1 2025 Estimated Tax Payment + Tax Return Due', urgent: true },
    { date: 'June 16, 2025',       event: 'Q2 2025 Estimated Tax Payment Due',      urgent: false },
    { date: 'September 15, 2025',  event: 'Q3 2025 Estimated Tax Payment Due',      urgent: false },
    { date: 'January 15, 2026',    event: 'Q4 2025 Estimated Tax Payment Due',      urgent: false },
  ]

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"When is the 1099 filing deadline for 2026?","acceptedAnswer":{"@type":"Answer","text":"1099-NEC forms must be filed with the IRS and sent to recipients by January 31, 2027 for 2026 earnings. 1099-K forms have the same January 31 deadline. Late filing penalties start at $60 per form."}},{"@type":"Question","name":"What happens if I miss the 1099 deadline?","acceptedAnswer":{"@type":"Answer","text":"Missing the 1099-NEC deadline results in IRS penalties of $60-$310 per form depending on how late it is filed. If the IRS finds intentional disregard, penalties can reach $630 per form with no maximum."}},{"@type":"Question","name":"Do I need to file a 1099 if I paid a contractor less than $600?","acceptedAnswer":{"@type":"Answer","text":"No. The 1099-NEC threshold is $600. If you paid a contractor less than $600 in a tax year, you are not required to issue a 1099. The contractor must still report all income regardless of amount."}}]}' }} />
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '3px solid #B22234', padding: '40px 20px 32px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 16 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,.7)' }}>1099 Deadlines 2025</span>
          </nav>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' as const }}>
            {['1099','Tax Deadlines','Quarterly Taxes','2025'].map(t => (
              <span key={t} style={{ background: '#0d2340', border: '1px solid #2a6496', borderRadius: 3, padding: '3px 10px', fontSize: 11, color: 'rgba(255,255,255,.55)' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', margin: '0 0 14px', lineHeight: 1.2 }}>
            1099 Tax Deadlines 2025: Complete Gig Worker Calendar
          </h1>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, margin: 0 }}>Updated January 2025 · 7 min read · GigWiseTax.com</p>
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)' }}>
        <div style={s}>
          <div style={{ background: 'rgba(232,184,75,0.1)', border: '1px solid #fde68a', borderRadius: 6, padding: '14px 18px', marginBottom: 24, fontSize: 14, color: '#fcd34d' }}>
            <strong>Quick Summary:</strong> Gig workers have 4 quarterly tax payment deadlines per year plus an annual filing deadline. Missing any quarterly payment triggers IRS underpayment penalties. Here's the complete 2025 tax calendar.
          </div>

          <p style={p}>Unlike W-2 employees who have taxes withheld automatically, gig workers must track and pay their own taxes throughout the year. The IRS requires quarterly estimated payments if you expect to owe $1,000 or more in taxes for the year.</p>

          <h2 style={h2}>Complete 2025 Tax Deadline Calendar</h2>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, overflow: 'hidden', marginBottom: 24 }}>
            {deadlines.map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '14px 18px', borderBottom: i < deadlines.length-1 ? '1px solid rgba(255,255,255,0.07)' : 'none', background: d.urgent ? 'rgba(178,34,52,0.12)' : i%2===0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.01)', alignItems: 'flex-start' }}>
                <div style={{ minWidth: 160, fontSize: 13, fontWeight: 700, color: d.urgent ? '#B22234' : 'rgba(255,255,255,0.75)', flexShrink: 0 }}>
                  {d.urgent && <span style={{ display: 'block', background: '#B22234', color: '#fff', fontSize: 9, fontWeight: 800, padding: '1px 5px', borderRadius: 2, marginBottom: 3, width: 'fit-content' }}>UPCOMING</span>}
                  {d.date}
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{d.event}</div>
              </div>
            ))}
          </div>

          <h2 style={h2}>What Happens If You Miss a Deadline?</h2>
          <div style={warn}>
            <strong>IRS Underpayment Penalty:</strong> Currently 8% annually (2% per quarter) on the underpaid amount. On a $3,000 quarterly payment, missing one deadline costs $60 in penalty — plus interest. Missing all 4 quarters on $12,000 owed = ~$960 in penalties.
          </div>
          <p style={p}>The penalty applies even if you pay in full when you file your annual return. The IRS calculates underpayment penalties based on when you should have paid, not whether you eventually paid.</p>

          <h2 style={h2}>How to Calculate Your Quarterly Payment</h2>
          <p style={p}>Use our free tax calculator to get your exact quarterly payment amount. As a rough estimate, multiply your quarterly net income by 25-30% and pay that amount each quarter using IRS Form 1040-ES or pay online at IRS.gov/payments.</p>

          <div style={{ background: '#1e2d5a', borderRadius: 8, padding: 24, margin: '32px 0', textAlign: 'center' as const }}>
            <div style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>NEVER MISS A DEADLINE AGAIN</div>
            <p style={{ color: '#fff', fontSize: 15, margin: '0 0 16px' }}>Get free email reminders 14 days before every quarterly deadline</p>
            <Link href="/quarterly-reminder" style={{ display: 'block', background: '#B22234', color: '#fff', borderRadius: 6, padding: '13px', fontSize: 15, fontWeight: 800, textDecoration: 'none', marginBottom: 10 }}>
               Sign Up for Free Reminders →
            </Link>
            <Link href="/tax-penalty-finder" style={{ display: 'block', background: '#0d2340', color: '#fff', borderRadius: 6, padding: '12px', fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid #2a6496' }}>
               Calculate My Quarterly Payment →
            </Link>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: 14, fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
             <strong>Disclaimer:</strong> Deadlines subject to change by the IRS. Always verify at IRS.gov. GigWiseTax.com is not affiliated with the IRS.
          </div>
        </div>
      </div>
    </div>
  )
}
