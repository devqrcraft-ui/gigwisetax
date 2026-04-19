export const metadata = {
  title: 'Walmart Spark Driver Tax Guide 2026: Deductions + Free Calculator',
  description: 'Walmart Spark driver taxes 2026: SE tax 15.3%, mileage 72.5c/mi, every deduction. Free calculator — exact taxes by state. No signup required.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/walmart-spark-tax-guide-2026' },
  openGraph: {
    title: 'Walmart Spark Driver Tax Guide 2026: Deductions + Free Calculator',
    description: 'Walmart Spark driver taxes 2026: SE tax 15.3%, mileage 72.5c/mi, every deduction. Free calculator — exact taxes by state. No signup required.',
    type: 'article',
    url: 'https://www.gigwisetax.com/blog/walmart-spark-tax-guide-2026',
  },
}

export default function WalmartSparkTaxGuide2026() {
  const prose = { fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, textAlign: 'justify' as const, marginBottom: 16 }
  const h2 = { fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12, marginTop: 28 }
  const tableStyle = { width: '100%', borderCollapse: 'collapse' as const, fontSize: 14, marginBottom: 20 }
  const th = { background: 'rgba(255,255,255,0.08)', color: '#e8b84b', padding: '10px 12px', textAlign: 'left' as const, fontWeight: 700 }
  const td = { padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.85)' }

  return (
    <div style={{ background: '#07111F', minHeight: '100vh' }}>
      <style>{`
        .blog-grid{display:grid;grid-template-columns:1fr 280px;gap:24px}
        @media(max-width:700px){.blog-grid{grid-template-columns:1fr!important}.blog-sidebar{order:2}}
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much tax do Walmart Spark drivers pay in 2026?",
            "acceptedAnswer": { "@type": "Answer", "text": "Spark drivers pay self-employment tax of 15.3% on net profit plus federal and state income tax. On $35,000 gross with $8,000 in deductions (mainly mileage), net profit is $27,000. SE tax is approximately $3,815 and federal income tax is approximately $1,500-$3,000 depending on filing status and state." }
          },
          {
            "@type": "Question",
            "name": "What can Walmart Spark drivers deduct on taxes in 2026?",
            "acceptedAnswer": { "@type": "Answer", "text": "Spark drivers can deduct mileage at 72.5 cents per mile, phone and data plan (business %), insulated delivery bags, car washes, parking and tolls, and half of self-employment tax. Mileage is the largest deduction for most drivers." }
          },
          {
            "@type": "Question",
            "name": "Does Walmart Spark send a 1099 form in 2026?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Spark drivers who earn $600 or more receive a 1099-NEC from Walmart by January 31, 2027. The form is available through the Spark Driver app or DDI Technology portal. Even without a 1099-NEC, all income must be reported to the IRS." }
          }
        ]
      })}} />

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>{' '}›{' '}
            <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a>{' '}›{' '}
            <span style={{ color: 'rgba(255,255,255,.7)' }}>Walmart Spark Tax Guide 2026</span>
          </nav>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: '0 0 14px' }}>
            Walmart Spark Driver Tax Guide 2026: Deductions + Free Calculator
          </h1>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, textAlign: 'justify', maxWidth: 760, margin: 0 }}>
            Everything Spark drivers need to know about taxes in 2026 — SE tax, mileage deduction at 72.5c/mi, quarterly payments, and every deduction available.
            <span style={{fontSize:12,color:'rgba(255,255,255,.4)',display:'block',marginTop:8}}>Last updated April 2026 — reflects IRS 2026 rates.</span>
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 48px' }} className="blog-grid">
        <div>
          <div style={{ background: '#0d1b3e', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>

            <div style={{ background: 'rgba(232,184,75,0.08)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 6, padding: 18, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' as const }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, color: '#e8b84b', fontSize: 15, marginBottom: 4 }}>Free Walmart Spark Tax Calculator 2026</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Enter your earnings — see SE tax, income tax, and quarterly payments. All 50 states. No signup.</div>
              </div>
              <a href="/walmart-spark" style={{ textDecoration: 'none', background: '#e8b84b', color: '#07111F', padding: '10px 20px', borderRadius: 4, fontWeight: 800, fontSize: 14, whiteSpace: 'nowrap' as const }}>Calculate Now →</a>
            </div>

            <h2 style={h2}>Are Spark Drivers Independent Contractors?</h2>
            <p style={prose}>
              Yes. Walmart Spark drivers are classified as independent contractors, not employees.
              This means Spark does not withhold any federal or state taxes from your earnings.
              You are responsible for paying self-employment tax (15.3%) and income tax yourself,
              either through quarterly estimated payments or when you file your annual return.
            </p>

            <h2 style={h2}>Spark Driver Tax Deduction Checklist 2026</h2>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Deduction</th>
                  <th style={th}>Details</th>
                  <th style={th}>Typical Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mileage', '72.5c/mi — store to customer, between stops', '$4,350 per 6,000 miles'],
                  ['Phone & Data Plan', 'Business use percentage — most drivers claim 60-80%', '$360–$960/yr'],
                  ['Insulated Delivery Bags', 'Hot and cold bags for grocery deliveries', '$50–$200/yr'],
                  ['Parking & Tolls', 'During deliveries only', '$100–$500/yr'],
                  ['Car Washes', 'Business proportion only', '$50–$200/yr'],
                  ['Phone Mount & Charger', 'Car mount, cable, power bank', '$30–$120/yr'],
                  ['Half of SE Tax', 'IRS allows 50% SE tax deduction on Schedule 1', 'Auto-calculated'],
                  ['Health Insurance', 'Self-employed health insurance premium deduction', 'Full premium'],
                  ['Tax Preparation', 'CPA fees or tax software', '$50–$300/yr'],
                ].map(([d, n, v]) => (
                  <tr key={d}>
                    <td style={{ ...td, fontWeight: 600, color: '#e8b84b' }}>{d}</td>
                    <td style={td}>{n}</td>
                    <td style={{ ...td, color: 'rgba(255,255,255,0.6)' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 style={h2}>How Much Tax on $40,000 Spark Income in 2026?</h2>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Item</th>
                  <th style={th}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Gross Spark earnings', '$40,000'],
                  ['Mileage deduction (12,000 mi)', '- $8,700'],
                  ['Phone deduction (70%)', '- $560'],
                  ['Half of SE tax deduction', '- $2,180'],
                  ['Net taxable income', '~ $28,560'],
                  ['SE tax (15.3%)', '~ $4,360'],
                  ['Federal income tax (12% bracket, single)', '~ $1,800'],
                  ['Total federal tax owed', '~ $6,160'],
                  ['Quarterly payment (divide by 4)', '~ $1,540'],
                ].map(([item, amt]) => (
                  <tr key={item}>
                    <td style={td}>{item}</td>
                    <td style={{ ...td, fontWeight: 700, color: amt.startsWith('~') ? '#e8b84b' : 'rgba(255,255,255,0.85)' }}>{amt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>Estimates only. State income tax not included. Use the calculator above for your exact numbers.</p>

            <h2 style={h2}>Quarterly Estimated Tax Deadlines 2026</h2>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Quarter</th>
                  <th style={th}>Income Period</th>
                  <th style={th}>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Q1 2026', 'Jan 1 – Mar 31', 'April 15, 2026'],
                  ['Q2 2026', 'Apr 1 – May 31', 'June 16, 2026'],
                  ['Q3 2026', 'Jun 1 – Aug 31', 'September 15, 2026'],
                  ['Q4 2026', 'Sep 1 – Dec 31', 'January 15, 2027'],
                ].map(([q, p, d]) => (
                  <tr key={q}>
                    <td style={{ ...td, fontWeight: 700, color: '#e8b84b' }}>{q}</td>
                    <td style={td}>{p}</td>
                    <td style={{ ...td, fontWeight: 600 }}>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 style={h2}>FAQ — Spark Driver Taxes 2026</h2>
            {[
              { q: 'How do I track mileage for Spark deliveries?', a: 'Use a mileage tracking app like Stride, MileIQ, or Everlance. The IRS requires a contemporaneous mileage log with date, origin, destination, and business purpose. Apps automate this with GPS. You cannot reconstruct mileage from memory at tax time — start tracking from your first delivery.' },
              { q: 'Should I pay quarterly taxes as a Spark driver?', a: 'Yes, if you expect to owe $1,000 or more in federal taxes for the year. Missing quarterly payments results in an underpayment penalty. As a rule of thumb: if you earn more than $6,500 net from Spark in a year, you likely need to make quarterly payments.' },
              { q: 'Can I use the actual expense method instead of mileage?', a: 'Yes. Under the actual expense method you deduct the business percentage of all car costs: gas, insurance, repairs, depreciation, registration. You must choose one method per vehicle per year and cannot switch mid-year. Most Spark drivers find the standard mileage rate simpler and often larger.' },
            ].map((item, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 14, marginBottom: 14 }}>
                <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontSize: 14, marginBottom: 6 }}>Q: {item.q}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>{item.a}</div>
              </div>
            ))}

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: 14, fontSize: 12, color: '#8fa8c8', lineHeight: 1.6 }}>
              <strong>Disclaimer:</strong> Informational purposes only. Consult a licensed CPA for your specific situation. Not affiliated with Walmart, Spark, or the IRS.
            </div>
          </div>
        </div>

        <div className="blog-sidebar" style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
          <a href="/walmart-spark" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 6, padding: 20, textAlign: 'center' as const }}>
              <div style={{ fontWeight: 800, color: '#fff', marginBottom: 6 }}>Spark Driver Tax Calculator</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>All 50 states · Mileage included</div>
              <div style={{ background: '#e8b84b', color: '#07111F', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 800 }}>Calculate Now →</div>
            </div>
          </a>
          <div style={{ background: '#0d1b3e', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, overflow: 'hidden' as const }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', padding: '10px 16px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const }}>Related Guides</span>
            </div>
            {[
              { label: 'Spark Driver Tax Calculator', href: '/walmart-spark' },
              { label: 'DoorDash Tax Guide 2026', href: '/blog/doordash-taxes-2026' },
              { label: 'Instacart Tax Deductions 2026', href: '/blog/instacart-tax-deductions-2026' },
              { label: 'Amazon Flex Tax Guide', href: '/amazon-flex' },
              { label: '1099 Tax Calculator', href: '/1099-tax-calculator' },
              { label: 'Quarterly Tax Deadlines', href: '/blog/quarterly-taxes-gig-workers' },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{l.label}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
