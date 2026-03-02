// Save as: app/blog/quarterly-taxes-gig-workers/page.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '2026 Quarterly Tax Guide for Gig Workers — All Deadlines | GigWiseTax',
  description: 'Complete 2026 quarterly estimated tax guide for gig workers. Q1–Q4 deadlines, how to calculate payments, IRS Form 1040-ES, and how to avoid underpayment penalties. All 50 states.',
  keywords: '2026 quarterly tax deadlines gig workers, quarterly estimated taxes 2026, 1040-ES 2026 deadlines, self employed quarterly taxes',
  alternates: { canonical: 'https://gigwisetax.com/blog/quarterly-taxes-gig-workers' },
}

export default function QuarterlyTaxGuide() {
  const prose: React.CSSProperties = { fontSize: 14, color: '#374151', lineHeight: 1.8, textAlign: 'justify', marginBottom: 16 }
  const h2: React.CSSProperties = { fontSize: 20, fontWeight: 800, color: '#1a1a2e', marginBottom: 12, marginTop: 28 }

  return (
    <div style={{ background: '#eef0f4', minHeight: '100vh' }}>
      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
            {' › '}
            <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a>
            {' › '}
            <span style={{ color: 'rgba(255,255,255,.7)' }}>Quarterly Tax Guide 2026</span>
          </nav>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
            <span style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)', fontSize: 11, padding: '3px 10px', borderRadius: 3 }}>January 10, 2026</span>
            <span style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)', fontSize: 11, padding: '3px 10px', borderRadius: 3 }}>6 min read</span>
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: '0 0 14px' }}>
            📅 2026 Quarterly Tax Guide for Gig Workers — All Deadlines
          </h1>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, textAlign: 'justify', maxWidth: 760, margin: 0 }}>
            Complete guide to quarterly estimated tax payments for gig workers in 2026. Covers Q1–Q4 deadlines,
            how to calculate exactly what you owe, and how to avoid costly IRS underpayment penalties.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 48px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 24 }} className="blog-grid">
        <div>
          <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, padding: 28, boxShadow: '0 1px 6px rgba(0,0,0,.05)' }}>

            {/* DEADLINES SUMMARY */}
            <div style={{ background: '#1a1a2e', borderRadius: 6, padding: 20, marginBottom: 24 }}>
              <div style={{ fontWeight: 800, color: '#e8b84b', marginBottom: 14, fontSize: 15 }}>📅 2026 IRS Quarterly Tax Deadlines</div>
              {[
                { q: 'Q1 2026', due: 'April 15, 2026', now: true },
                { q: 'Q2 2026', due: 'June 16, 2026', now: false },
                { q: 'Q3 2026', due: 'September 15, 2026', now: false },
                { q: 'Q4 2026', due: 'January 15, 2027', now: false },
              ].map((d, i) => (
                <div key={d.q} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
                  <span style={{ color: 'rgba(255,255,255,.7)', fontWeight: 600, fontSize: 14 }}>
                    {d.now && <span style={{ background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 5px', borderRadius: 2, marginRight: 8, fontWeight: 800 }}>NOW</span>}
                    {d.q}
                  </span>
                  <span style={{ color: d.now ? '#e8b84b' : 'rgba(255,255,255,.5)', fontWeight: d.now ? 800 : 500, fontSize: 14 }}>{d.due}</span>
                </div>
              ))}
            </div>

            <h2 style={h2}>What Are Quarterly Estimated Taxes?</h2>
            <p style={prose}>
              If you work as an independent contractor — for DoorDash, Uber, Etsy, OnlyFans, Instacart, or any gig platform —
              the IRS requires you to pay taxes throughout the year rather than all at once in April.
              These are called <strong>quarterly estimated tax payments</strong>.
            </p>
            <p style={prose}>
              The rule is simple: if you expect to owe <strong>$1,000 or more in federal taxes</strong> for the year,
              you must make four estimated payments using <strong>IRS Form 1040-ES</strong>.
              Missing or underpaying results in an underpayment penalty — currently approximately 7–8% annualized on the underpaid amount.
            </p>

            <div style={{ background: '#fff5f5', border: '1px solid #fecaca', borderRadius: 6, padding: 16, marginBottom: 20 }}>
              <div style={{ fontWeight: 700, color: '#B22234', marginBottom: 8 }}>⚠️ Safe Harbor Rule for 2026</div>
              <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                You can avoid the underpayment penalty by paying at least <strong>100% of your 2025 tax liability</strong>
                (or <strong>110%</strong> if your 2025 adjusted gross income exceeded $150,000).
                This is called the safe harbor rule — even if you end up owing more in April, no penalty applies.
              </p>
            </div>

            <h2 style={h2}>How to Calculate Your Quarterly Payment</h2>
            {[
              { step: '1', title: 'Estimate Annual Net Income', text: 'Add up all expected gig income for the year. Subtract estimated business expenses (mileage, equipment, phone) to get net profit.' },
              { step: '2', title: 'Calculate SE Tax', text: 'Multiply net profit × 92.35% = SE tax base. Then × 15.3% = SE tax. Divide by 2 to find your deductible half.' },
              { step: '3', title: 'Calculate Federal Income Tax', text: 'Subtract half of SE tax from net profit = taxable income. Apply your bracket (10–37%). Add SE tax = total federal tax.' },
              { step: '4', title: 'Divide by 4', text: 'Divide total estimated annual tax by 4. This is your quarterly payment. Adjust each quarter if income changes.' },
            ].map(s => (
              <div key={s.step} style={{ display: 'flex', gap: 14, marginBottom: 14, padding: 14, border: '1px solid #e2e5e9', borderRadius: 6, background: '#f8fafc' }}>
                <div style={{ width: 28, height: 28, background: '#1a1a2e', color: '#e8b84b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 13, flexShrink: 0 }}>{s.step}</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#1a1a2e', marginBottom: 5, fontSize: 13 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{s.text}</div>
                </div>
              </div>
            ))}

            <h2 style={h2}>How to Pay Quarterly Taxes</h2>
            <p style={prose}>
              The easiest way is <strong>IRS Direct Pay</strong> (directpay.irs.gov) — free, instant, no registration required.
              You can also use the IRS2Go app or EFTPS. Select "1040-ES Estimated Tax" as the payment type.
            </p>

            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 6, padding: 16, marginBottom: 20 }}>
              <div style={{ fontWeight: 700, color: '#166534', marginBottom: 8 }}>💡 Pro Tip: Separate Tax Savings Account</div>
              <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                Open a separate savings account just for taxes. Every time you receive a gig payment,
                automatically transfer 25–30% to this account. When quarterly taxes are due, the money is already there.
              </p>
            </div>

            <h2 style={h2}>State Quarterly Tax Deadlines 2026</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 20, fontSize: 13 }}>
              <thead>
                <tr style={{ background: '#1a1a2e' }}>
                  {['State', 'Tax Rate', 'Quarterly Required', 'Portal'].map(h => (
                    <th key={h} style={{ padding: '10px 14px', fontWeight: 700, color: 'rgba(255,255,255,.6)', textTransform: 'uppercase', textAlign: 'left', fontSize: 11 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { state: 'California', rate: '9.3%', req: 'Yes — FTB Form 540-ES', portal: 'ftb.ca.gov' },
                  { state: 'New York', rate: '6.85%', req: 'Yes — IT-2105', portal: 'tax.ny.gov' },
                  { state: 'Texas', rate: 'None', req: 'No state tax', portal: 'N/A' },
                  { state: 'Florida', rate: 'None', req: 'No state tax', portal: 'N/A' },
                  { state: 'Illinois', rate: '4.95%', req: 'Yes — IL-1040-ES', portal: 'mytax.illinois.gov' },
                  { state: 'Washington', rate: 'None', req: 'No income tax', portal: 'N/A' },
                ].map((r, i) => (
                  <tr key={r.state} style={{ borderBottom: '1px solid #f0f1f3', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                    <td style={{ padding: '11px 14px', fontWeight: 600 }}>{r.state}</td>
                    <td style={{ padding: '11px 14px', color: r.rate === 'None' ? '#059669' : '#B22234', fontWeight: 700 }}>{r.rate}</td>
                    <td style={{ padding: '11px 14px', color: '#374151' }}>{r.req}</td>
                    <td style={{ padding: '11px 14px', color: '#6c757d', fontSize: 12 }}>{r.portal}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: 14, fontSize: 12, color: '#6c757d', lineHeight: 1.6 }}>
              ⚠️ <strong>Disclaimer:</strong> Informational purposes only. Visit IRS.gov and your state&apos;s revenue department for official guidance.
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#1a1a2e', borderRadius: 6, padding: 20, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🧮</div>
              <div style={{ fontWeight: 800, color: '#fff', marginBottom: 6 }}>Tax Calculator</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>Get your quarterly schedule instantly</div>
              <div style={{ background: '#B22234', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Calculate Now →</div>
            </div>
          </a>
          <div style={{ background: '#fff', border: '2px dashed #d8dce6', borderRadius: 6, overflow: 'hidden' }}>
            <div style={{ background: '#f8fafc', padding: '6px 14px', borderBottom: '1px solid #e2e5e9', fontSize: 10, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' }}>Sponsored</div>
            <div style={{ padding: 16 }}>
              <div style={{ background: '#f0f4f8', borderRadius: 4, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic' }}>Ad image here</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#1a1a2e', marginBottom: 6 }}>QuickBooks Self-Employed</div>
              <div style={{ fontSize: 13, color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>Automatically sets aside estimated taxes. Never miss a deadline.</div>
              <div style={{ background: '#0d7a40', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' }}>Try Free 30 Days →</div>
              <div style={{ fontSize: 10, color: '#c4c9d4', marginTop: 5, textAlign: 'center' }}>Affiliate link</div>
            </div>
          </div>
          <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' }}>
            <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase', letterSpacing: '1px' }}>📌 Platform Calculators</span>
            </div>
            {[
              { label: '🚗 DoorDash Tax Calculator', href: '/doordash' },
              { label: '🚕 Uber Tax Calculator', href: '/uber' },
              { label: '⭐ OnlyFans Tax Calculator', href: '/onlyfans' },
              { label: '🛍️ Etsy Tax Calculator', href: '/etsy' },
              { label: '🛒 Instacart Tax Calculator', href: '/instacart' },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid #f0f1f3', fontSize: 13, color: '#374151', fontWeight: 500 }}>{l.label}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:760px){.blog-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}
