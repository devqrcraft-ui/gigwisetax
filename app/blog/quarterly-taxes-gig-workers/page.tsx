import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quarterly Taxes for Gig Workers 2026 — Complete Guide | GigWiseTax',
  description: 'How to pay quarterly estimated taxes as a gig worker in 2026. Deadlines, amounts, and step-by-step instructions for DoorDash, Uber, Etsy, and more.',
  keywords: 'quarterly taxes gig workers, estimated tax payments 2026, 1040-ES, self-employment quarterly taxes',
  openGraph: {
    title: 'Quarterly Taxes for Gig Workers 2026 — Complete Guide',
    description: 'Pay the right amount every quarter. No penalties. Free guide for all gig platforms.',
    type: 'article',
  },
}

export default function QuarterlyTaxesGuide() {
  return (
    <div style={{ background: "#0d1117", minHeight: "100vh" }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"When are quarterly estimated taxes due in 2026?","acceptedAnswer":{"@type":"Answer","text":"2026 estimated tax due dates: Q1 — April 15, Q2 — June 16, Q3 — September 15, Q4 — January 15, 2027. If you expect to owe $1,000 or more for the year, you must make these payments to avoid penalties."}},{"@type":"Question","name":"How much should gig workers pay in quarterly taxes?","acceptedAnswer":{"@type":"Answer","text":"Pay either 90% of your 2026 tax liability or 100% of your 2025 tax (110% if 2025 AGI was over $150,000). The safe harbor method using last year\'s tax is the easiest for most gig workers."}},{"@type":"Question","name":"How do I pay quarterly estimated taxes as a gig worker?","acceptedAnswer":{"@type":"Answer","text":"Pay online at IRS Direct Pay (free) or through the IRS2Go app. Use Form 1040-ES to calculate the amount. Most gig workers set aside 25-30% of each paycheck into a dedicated tax savings account."}}]}' }} />
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <nav style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a> › <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a> › Quarterly Taxes Guide
      </nav>

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: '32px', marginBottom: 32, border: '1px solid rgba(165,180,252,.2)' }}>
        <div style={{ fontSize: 13, color: '#a5b4fc', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Complete Guide · Updated 2026</div>
        <h1 style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginBottom: 16 }}>Quarterly Taxes for Gig Workers 2026</h1>
        <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, fontSize: 17 }}>
          If you earn $400+ per year from gig work, the IRS requires you to pay taxes quarterly — not once a year. Miss a deadline and you'll owe penalties. This guide shows you exactly how much to pay and when.
        </p>
      </div>

      <div style={{ background: '#ff4444', color: '#fff', borderRadius: 8, padding: '16px 20px', marginBottom: 32, fontWeight: 700 }}>
         Q1 2026 DEADLINE: April 15, 2026 — Don't miss it or face a 7% IRS underpayment penalty
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>The 4 Quarterly Deadlines for 2026</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead>
          <tr style={{ background: 'rgba(165,180,252,.1)' }}>
            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>Quarter</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>Income Period</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Q1', 'Jan 1 – Mar 31', 'April 15, 2026'],
            ['Q2', 'Apr 1 – May 31', 'June 16, 2026'],
            ['Q3', 'Jun 1 – Aug 31', 'September 15, 2026'],
            ['Q4', 'Sep 1 – Dec 31', 'January 15, 2027'],
          ].map(([q, period, due], i) => (
            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
              <td style={{ padding: '12px 16px', fontWeight: 700, color: i === 0 ? '#ff4444' : '#fff' }}>{q}</td>
              <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>{period}</td>
              <td style={{ padding: '12px 16px', fontWeight: 600, color: i === 0 ? '#ff4444' : '#e8b84b' }}>{due}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>How Much to Pay Each Quarter</h2>
      <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, marginBottom: 16 }}>
        The simplest method: pay <strong style={{ color: '#fff' }}>25–30% of your net gig income</strong> each quarter. Net income = gross earnings minus deductible expenses (mileage, phone, equipment).
      </p>
      <div style={{ background: 'rgba(165,180,252,.08)', border: '1px solid rgba(165,180,252,.2)', borderRadius: 8, padding: 20, marginBottom: 32 }}>
        <div style={{ fontWeight: 700, marginBottom: 8, color: '#a5b4fc' }}>Example: DoorDash driver earning $2,000/quarter</div>
        <div style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, fontSize: 14 }}>
          • Gross earnings: $2,000<br/>
          • Mileage deduction (500 miles × $0.67): −$363<br/>
          • Net income: $1,637<br/>
          • SE tax (15.3%): $250<br/>
          • Federal income tax (~12%): $197<br/>
          • <strong style={{ color: '#e8b84b' }}>Quarterly payment: ~$447</strong>
        </div>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>How to Actually Pay</h2>
      <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, marginBottom: 12 }}>
        Pay online at <strong style={{ color: '#fff' }}>IRS Direct Pay</strong> (free, no account needed) at irs.gov/payments. Select "Estimated Tax" and tax year 2026.
      </p>
      <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, marginBottom: 32 }}>
        Also file <strong style={{ color: '#fff' }}>Form 1040-ES</strong> if mailing a check, or use EFTPS for automatic scheduling.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>Top Deductions to Reduce Your Quarterly Payment</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
        {[
          [' Mileage', '$0.67/mile in 2026'],
          [' Phone', '50–100% business use'],
          [' Home Office', 'Dedicated space only'],
          ['🧳 Equipment', 'Camera, insulated bags'],
          [' Supplies', 'Platform-specific items'],
          ['💻 Software', 'Accounting, delivery apps'],
        ].map(([name, desc]) => (
          <div key={name} style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>{name}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>{desc}</div>
          </div>
        ))}
      </div>

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: 24, border: '1px solid rgba(165,180,252,.2)', textAlign: 'center' }}>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Calculate Your Exact Quarterly Payment</div>
        <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: 16 }}>Free calculator — no signup, no data stored</p>
        <a href="/" style={{ background: '#B22234', color: '#fff', padding: '12px 28px', borderRadius: 6, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>Calculate Now →</a>
      </div>
    </main>
    </div>
  )
}
