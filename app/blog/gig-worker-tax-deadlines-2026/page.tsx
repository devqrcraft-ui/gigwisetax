import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gig Worker Tax Deadlines 2026 — Quarterly Payment Dates | GigWiseTax',
  description: 'All four IRS estimated tax deadlines for gig workers in 2026: April 15, June 16, September 15, January 15 2027. Miss one and pay a 7% penalty.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/gig-worker-tax-deadlines-2026' },
}

const DEADLINES = [
  { q: 'Q1 2026', period: 'January – March 2026',   due: 'April 15, 2026',    form: 'Form 1040-ES' },
  { q: 'Q2 2026', period: 'April – May 2026',        due: 'June 16, 2026',     form: 'Form 1040-ES' },
  { q: 'Q3 2026', period: 'June – August 2026',      due: 'September 15, 2026',form: 'Form 1040-ES' },
  { q: 'Q4 2026', period: 'September – December 2026',due: 'January 15, 2027', form: 'Form 1040-ES' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'When are gig worker quarterly tax payments due in 2026?',
            acceptedAnswer: { '@type': 'Answer', text: 'Q1: April 15 · Q2: June 16 · Q3: September 15 · Q4: January 15, 2027.' },
          },
          {
            '@type': 'Question',
            name: 'What happens if I miss a quarterly estimated tax deadline?',
            acceptedAnswer: { '@type': 'Answer', text: 'The IRS charges an underpayment penalty of approximately 7% annually on the amount owed for each quarter missed.' },
          },
          {
            '@type': 'Question',
            name: 'How do I calculate how much to pay each quarter?',
            acceptedAnswer: { '@type': 'Answer', text: 'Estimate your annual net gig income, multiply by 0.9235 for the SE base, apply 15.3% SE tax, add federal income tax, then divide by 4. Use the GigWiseTax calculator for an instant result.' },
          },
        ],
      })}} />

      <article style={{ maxWidth: 760, margin: '0 auto', padding: '48px 20px 64px', fontFamily: 'system-ui,sans-serif', color: 'rgba(255,255,255,0.9)' }}>

        <div style={{ marginBottom: 8 }}>
          <Link href="/blog" style={{ fontSize: 13, color: '#B22234', textDecoration: 'none', fontWeight: 600 }}>← Blog</Link>
        </div>

        <h1 style={{ fontSize: 32, fontWeight: 900, lineHeight: 1.2, marginBottom: 12 }}>
          Gig Worker Tax Deadlines 2026 — Quarterly Payment Dates
        </h1>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 32 }}>
          Updated January 2026 · 4 min read
        </p>

        <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 24 }}>
          As a gig worker — whether you drive for DoorDash, deliver for Amazon Flex, rent on Airbnb, or sell on Etsy — the IRS expects you to pay taxes <strong>four times per year</strong>, not just in April. Missing a deadline triggers an underpayment penalty (currently ~7% annually). Here are every date you need for 2026.
        </p>

        {/* TABLE */}
        <div style={{ overflowX: 'auto', marginBottom: 32 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.9)' }}>
                {['Quarter','Income Period','IRS Due Date','Form'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700, fontSize: 13 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DEADLINES.map((d, i) => (
                <tr key={d.q} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.05)' : '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 800 }}>{d.q}</td>
                  <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.85)' }}>{d.period}</td>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: '#B22234' }}>{d.due}</td>
                  <td style={{ padding: '14px 16px', color: 'rgba(255,255,255,0.55)' }}>{d.form}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Why Gig Workers Must Pay Quarterly</h2>
        <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 24 }}>
          Unlike W-2 employees whose employer withholds taxes every paycheck, gig workers receive gross pay with <strong>zero withholding</strong>. The IRS requires anyone who expects to owe $1,000 or more in taxes to make estimated payments using <strong>Form 1040-ES</strong>. Failing to pay enough by each deadline results in a penalty calculated on the underpaid amount for that period.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>How Much to Pay Each Quarter</h2>
        <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
          A simple formula: <strong>Net income × 0.9235 × 15.3% (SE tax)</strong> + estimated federal income tax, divided by 4. Most gig workers in the 22% federal bracket should set aside <strong>25–30%</strong> of every payment.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
          The fastest way: use our free calculator below — it handles SE tax, all 51 state rates, and shows your exact quarterly payment.
        </p>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderRadius: 10, padding: '28px 24px', marginBottom: 40, textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 14, marginBottom: 8 }}>Free · No signup · All 51 states</p>
          <Link href="/" style={{ display: 'inline-block', background: '#B22234', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 800, fontSize: 17, textDecoration: 'none' }}>
            Calculate My 2026 Quarterly Taxes →
          </Link>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>FAQ</h2>
        {[
          ['When are gig worker quarterly tax payments due in 2026?', 'Q1: April 15 · Q2: June 16 · Q3: September 15 · Q4: January 15, 2027.'],
          ['What happens if I miss a quarterly estimated tax deadline?', 'The IRS charges an underpayment penalty of approximately 7% annually on the amount owed for each quarter missed.'],
          ['How do I calculate how much to pay each quarter?', 'Estimate your annual net gig income, multiply by 0.9235 for the SE base, apply 15.3% SE tax, add your federal income tax estimate, then divide by 4. Our calculator does this instantly for all 51 states.'],
        ].map(([q, a]) => (
          <details key={q as string} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: '14px 18px', marginBottom: 10 }}>
            <summary style={{ fontWeight: 700, fontSize: 15, cursor: 'pointer', color: 'rgba(255,255,255,0.9)' }}>{q as string}</summary>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginTop: 10, marginBottom: 0 }}>{a as string}</p>
          </details>
        ))}

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 13, color: '#7a9abf' }}>
           Estimates only. Consult a licensed CPA or visit <a href="https://irs.gov" style={{ color: 'rgba(255,255,255,0.55)' }}>IRS.gov</a> for official guidance.
        </div>
      </article>
    </>
  )
}
