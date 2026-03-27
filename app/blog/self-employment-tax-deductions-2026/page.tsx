import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Self-Employment Tax Deductions 2026 — Complete List | GigWiseTax',
  description: 'Every tax deduction available to gig workers and self-employed in 2026. Mileage, home office, health insurance, QBI deduction, and more.',
  keywords: 'self employment tax deductions 2026, gig worker deductions, 1099 deductions, schedule C deductions',
  openGraph: {
    title: 'Self-Employment Tax Deductions 2026 — Complete List',
    description: "Don't overpay. Every deduction for DoorDash, Uber, Etsy, OnlyFans creators in 2026.",
    type: 'article',
  },
}

export default function DeductionsGuide() {
  const deductions = [
    { name: 'Standard Mileage Rate', amount: '$0.70 per mile', desc: 'Track every business mile. At 10,000 miles/year = $7,000 deduction. Use a mileage app or Google Maps logs.', tag: 'Most Popular' },
    { name: 'Home Office Deduction', amount: 'Up to $1,500/year', desc: 'Simplified: $5/sq ft (max 300 sq ft). Regular method: % of rent, utilities, internet. Must be used exclusively for business.', tag: '' },
    { name: 'Phone & Internet', amount: '50-100% of bill', desc: 'If your phone is used for gig work (DoorDash app, messaging, navigation), deduct the business-use percentage.', tag: '' },
    { name: 'Health Insurance Premiums', amount: '100% deductible', desc: "If you're self-employed and not eligible for employer coverage, deduct 100% of health, dental, and vision premiums paid for yourself and family.", tag: 'Big Savings' },
    { name: 'QBI Deduction (Section 199A)', amount: 'Up to 20% of net income', desc: 'Qualified Business Income deduction — reduces taxable income by up to 20% for most gig workers. Phase-outs apply above $197,300 single.', tag: 'Big Savings' },
    { name: 'SE Tax Deduction', amount: '50% of SE tax', desc: 'You can deduct half of your self-employment tax from gross income. This lowers your adjusted gross income automatically on Schedule 1.', tag: 'Automatic' },
    { name: 'Vehicle Expenses (Actual)', amount: 'Varies', desc: 'Instead of mileage rate, deduct actual costs: gas, insurance, repairs, depreciation. Use whichever gives you a larger deduction.', tag: '' },
    { name: 'Equipment & Tools', amount: 'Full cost (Section 179)', desc: 'Camera, delivery bags, insulated containers, laptop, microphone — fully deductible in the year purchased under Section 179.', tag: '' },
    { name: 'Platform Fees', amount: '100% deductible', desc: 'Etsy listing fees, OnlyFans platform fees, any fees charged by your gig platform reduce your taxable income directly.', tag: '' },
    { name: 'Retirement Contributions', amount: 'Up to $69,000/year', desc: 'SEP-IRA contributions up to 25% of net earnings (max $69,000 for 2026). Powerful way to reduce taxes AND build retirement savings.', tag: 'Big Savings' },
    { name: 'Education & Training', amount: '100% deductible', desc: 'Courses, books, subscriptions to improve your gig business skills. Must be related to current work.', tag: '' },
    { name: 'Banking & Payment Fees', amount: '100% deductible', desc: 'PayPal fees, Stripe fees, bank fees related to your business — all deductible on Schedule C.', tag: '' },
  ]

  return (
    <div style={{ background: "#0d1117", minHeight: "100vh" }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the top tax deductions for self-employed workers in 2026?","acceptedAnswer":{"@type":"Answer","text":"Top deductions: mileage (67 cents/mile), home office, health insurance premiums, half of SE tax, retirement contributions (up to $23,500 to a Solo 401k), business phone and internet, and equipment purchases under Section 179."}},{"@type":"Question","name":"How much can self-employed workers deduct for retirement in 2026?","acceptedAnswer":{"@type":"Answer","text":"Self-employed workers can contribute up to $23,500 to a Solo 401k ($31,000 if age 50+) or up to 20% of net self-employment income to a SEP-IRA (max $69,000). Both contributions reduce taxable income dollar for dollar."}},{"@type":"Question","name":"Can I deduct health insurance as a self-employed person?","acceptedAnswer":{"@type":"Answer","text":"Yes. Self-employed individuals can deduct 100% of health insurance premiums for themselves and their family as an above-the-line deduction — even if you do not itemize. This reduces both income tax and AGI."}}]}' }} />
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <nav style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>{' › '}
        <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a>{' › '}
        Deductions 2026
      </nav>

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: '32px', marginBottom: 32, border: '1px solid rgba(165,180,252,.2)' }}>
        <div style={{ fontSize: 13, color: '#a5b4fc', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Complete List · Updated 2026</div>
        <h1 style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginBottom: 16 }}>Self-Employment Tax Deductions 2026</h1>
        <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, fontSize: 17 }}>
          The average gig worker overpays $2,000 to $5,000 in taxes by missing deductions. This is the complete list for 2026 — every deduction available to 1099 workers, freelancers, and gig platform earners.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
        <span style={{ background: 'rgba(34,197,94,.15)', color: '#86efac', padding: '4px 12px', borderRadius: 20, fontSize: 13 }}>Updated for 2026 Tax Year</span>
        <span style={{ background: 'rgba(165,180,252,.15)', color: '#a5b4fc', padding: '4px 12px', borderRadius: 20, fontSize: 13 }}>All Gig Platforms</span>
        <span style={{ background: 'rgba(232,184,75,.15)', color: '#e8b84b', padding: '4px 12px', borderRadius: 20, fontSize: 13 }}>IRS Schedule C</span>
      </div>

      {deductions.map((d, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: '20px', marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
            <div style={{ fontWeight: 700, fontSize: 17 }}>{d.name}</div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {d.tag && <span style={{ background: '#e8b84b', color: '#0d1117', padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{d.tag}</span>}
              <span style={{ color: '#a5b4fc', fontWeight: 700, fontSize: 15 }}>{d.amount}</span>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
        </div>
      ))}

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: 24, border: '1px solid rgba(165,180,252,.2)', textAlign: 'center', marginTop: 32 }}>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Calculate Your Tax After Deductions</div>
        <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: 16 }}>Enter your income + expenses. See your real tax bill in seconds.</p>
        <a href="/" style={{ background: '#B22234', color: '#fff', padding: '12px 28px', borderRadius: 6, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>Free Calculator</a>
      </div>
    </main>
    </div>
  )
}
