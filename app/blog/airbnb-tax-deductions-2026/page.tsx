// ================================================================
// BLOG: Airbnb Tax Deductions 2026
// Save as: app/blog/airbnb-tax-deductions-2026/page.tsx
// ================================================================

export const metadata = {
  title: 'Airbnb Tax Deductions 2026: Complete Host Checklist + Calculator',
  description: 'Every Airbnb tax deduction for 2026: cleaning, supplies, mortgage interest, depreciation, utilities. Free calculator — see exactly how much you owe. All 50 states.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/airbnb-tax-deductions-2026' },
  openGraph: {
    title: 'Airbnb Tax Deductions 2026: Complete Host Checklist + Calculator',
    description: 'Every Airbnb tax deduction for 2026: cleaning, supplies, mortgage interest, depreciation, utilities. Free calculator — see exactly how much you owe. All 50 states.',
    type: 'article',
    url: 'https://www.gigwisetax.com/blog/airbnb-tax-deductions-2026',
  },
}

export default function AirbnbTaxDeductions2026() {
  const prose = { fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, textAlign: 'justify' as const, marginBottom: 16 }
  const h2 = { fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12, marginTop: 28 }
  const tableStyle = { width: '100%', borderCollapse: 'collapse' as const, fontSize: 14, marginBottom: 20 }
  const th = { background: 'rgba(255,255,255,0.08)', color: '#e8b84b', padding: '10px 12px', textAlign: 'left' as const, fontWeight: 700 }
  const td = { padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.85)' }

  return (
    <div style={{ background: '#07111F', minHeight: '100vh' }}>
      <style>{`
        .blog-grid{display:grid;grid-template-columns:1fr 280px;gap:24px}
        @media(max-width:700px){
          .blog-grid{grid-template-columns:1fr!important}
          .blog-sidebar{order:2;margin-top:0}
        }
        .form-grid{grid-template-columns:1fr!important}
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What can Airbnb hosts deduct on taxes in 2026?",
            "acceptedAnswer": { "@type": "Answer", "text": "Airbnb hosts can deduct: cleaning and maintenance, supplies and toiletries, mortgage interest (proportional to rental use), property depreciation, utilities, insurance, platform fees (3%), advertising, and home office expenses. The 14-day rule applies — if you rent fewer than 15 days per year, income is tax-free and no deductions apply." }
          },
          {
            "@type": "Question",
            "name": "Do Airbnb hosts pay self-employment tax in 2026?",
            "acceptedAnswer": { "@type": "Answer", "text": "It depends. If you provide hotel-like services (daily cleaning, meals, concierge), the IRS may classify income as Schedule C self-employment income subject to 15.3% SE tax. Most casual hosts report on Schedule E (rental income), which is not subject to SE tax. Consult a CPA if you are unsure." }
          },
          {
            "@type": "Question",
            "name": "What is the Airbnb 14-day rule for 2026?",
            "acceptedAnswer": { "@type": "Answer", "text": "Under IRS rules, if you rent your home for fewer than 15 days in 2026, the rental income is completely tax-free and does not need to be reported. You also cannot deduct rental expenses in this case. This rule applies per property." }
          },
          {
            "@type": "Question",
            "name": "How much tax will I owe on $30,000 Airbnb income in 2026?",
            "acceptedAnswer": { "@type": "Answer", "text": "On $30,000 gross Airbnb rental income (Schedule E), after typical deductions of $8,000-$12,000 (depreciation, mortgage interest, cleaning, supplies), net taxable income is $18,000-$22,000. Federal income tax at 12-22% bracket = approximately $2,200-$4,800. Use our free Airbnb tax calculator for your exact estimate." }
          }
        ]
      })}} />

      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>{' '}›{' '}
            <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a>{' '}›{' '}
            <span style={{ color: 'rgba(255,255,255,.7)' }}>Airbnb Tax Deductions 2026</span>
          </nav>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: '0 0 14px' }}>
            Airbnb Tax Deductions 2026: Complete Host Checklist + Free Calculator
          </h1>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, textAlign: 'justify', maxWidth: 760, margin: 0 }}>
            Every deduction Airbnb hosts can legally claim in 2026 — cleaning, depreciation, mortgage interest, utilities, supplies, and more.
            Free tax calculator included. <span style={{fontSize:12,color:'rgba(255,255,255,.4)',display:'block',marginTop:8}}>Last updated April 2026 — reflects IRS 2026 rates.</span>
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 48px' }} className="blog-grid">
        <div>
          <div style={{ background: '#0d1b3e', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>

            {/* CTA BOX */}
            <div style={{ background: 'rgba(232,184,75,0.08)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 6, padding: 18, marginBottom: 28, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' as const }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, color: '#e8b84b', fontSize: 15, marginBottom: 4 }}>Free Airbnb Tax Calculator 2026</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Enter your rental income → see exact taxes owed in your state. No signup.</div>
              </div>
              <a href="/airbnb" style={{ textDecoration: 'none', background: '#e8b84b', color: '#07111F', padding: '10px 20px', borderRadius: 4, fontWeight: 800, fontSize: 14, whiteSpace: 'nowrap' as const }}>Calculate Now →</a>
            </div>

            <h2 style={h2}>Complete Airbnb Tax Deduction Checklist for 2026</h2>
            <p style={prose}>
              Airbnb hosts who rent their property for 15 or more days per year must report rental income to the IRS.
              The good news: you can offset that income with a long list of legitimate deductions.
              Below is every deduction the IRS allows for short-term rental hosts in 2026.
            </p>

            {/* DEDUCTION TABLE */}
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Deduction</th>
                  <th style={th}>Notes</th>
                  <th style={th}>Typical Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cleaning & Turnover', 'Professional cleaning between guests', '$800–$3,000/yr'],
                  ['Supplies & Toiletries', 'Soap, towels, coffee, paper goods', '$300–$1,200/yr'],
                  ['Platform Fees (3%)', 'Airbnb host service fee is deductible', '3% of gross income'],
                  ['Mortgage Interest', 'Proportional to % of home rented', 'Varies'],
                  ['Property Depreciation', '27.5 year schedule (residential)', 'Often $3,000–$8,000/yr'],
                  ['Utilities', 'Electric, gas, water — rental % only', '$500–$2,000/yr'],
                  ['Internet & Cable', 'Business portion only', '$200–$600/yr'],
                  ['Insurance', 'Homeowner + short-term rental rider', '$400–$1,500/yr'],
                  ['Repairs & Maintenance', 'Must be repairs, not improvements', '$200–$2,000/yr'],
                  ['Furniture & Appliances', 'Section 179 or bonus depreciation', 'Full cost in year 1'],
                  ['Photography & Listing', 'Professional photos, listing upgrades', '$100–$500/yr'],
                  ['Property Management', 'If you use a co-host or manager', '10–30% of revenue'],
                  ['HOA Fees', 'Rental proportion only', 'Varies'],
                  ['Smart Home Devices', 'Locks, thermostats, cameras', 'Full cost'],
                ].map(([d, n, v]) => (
                  <tr key={d}>
                    <td style={{ ...td, fontWeight: 600, color: '#e8b84b' }}>{d}</td>
                    <td style={td}>{n}</td>
                    <td style={{ ...td, color: 'rgba(255,255,255,0.6)' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 style={h2}>The 14-Day Rule — When Airbnb Income Is Tax-Free</h2>
            <p style={prose}>
              If you rent your home for <strong>fewer than 15 days</strong> in 2026, the IRS does not require you to report that income at all.
              This is one of the most valuable tax breaks available to occasional hosts.
              However, if you use the 14-day rule, you cannot deduct any rental expenses either.
            </p>
            <p style={prose}>
              The rule applies per property. If you have two Airbnb properties, the 14-day limit applies to each separately.
            </p>

            <h2 style={h2}>Schedule E vs Schedule C: Which One Do You File?</h2>
            <p style={prose}>
              Most Airbnb hosts file <strong>Schedule E</strong> (Supplemental Income and Loss). Schedule E rental income is <em>not</em> subject to self-employment tax (15.3%) — only federal and state income tax applies.
            </p>
            <p style={prose}>
              You must use <strong>Schedule C</strong> if you provide substantial services to guests — daily maid service, meals, concierge, or other hotel-like amenities. Schedule C income is subject to SE tax. Most casual hosts qualify for Schedule E.
            </p>

            <h2 style={h2}>Depreciation — The Biggest Airbnb Deduction</h2>
            <p style={prose}>
              Property depreciation is often the largest single deduction for Airbnb hosts.
              The IRS allows residential rental property to be depreciated over 27.5 years.
              On a $300,000 home where 40% is used for Airbnb, the annual depreciation deduction is approximately <strong>$4,364/year</strong>.
            </p>
            <p style={prose}>
              Furniture, appliances, and equipment can be fully deducted in year one using <strong>Section 179 or 100% bonus depreciation</strong> (check current bonus depreciation phase-down rules for 2026).
            </p>

            <h2 style={h2}>Quarterly Estimated Taxes for Airbnb Hosts</h2>
            <p style={prose}>
              If you expect to owe $1,000 or more in federal taxes in 2026, you must make quarterly estimated payments to avoid IRS penalties.
            </p>
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
                    <td style={{ ...td, fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2 style={h2}>FAQ — Airbnb Taxes 2026</h2>
            {[
              { q: 'Does Airbnb report my income to the IRS?', a: 'Yes. Airbnb sends a 1099-K to the IRS if you process more than $600 in payments in 2026 (the new threshold under IRS rules). Even if you do not receive a 1099-K, you are still required to report rental income.' },
              { q: 'Can I deduct a home office as an Airbnb host?', a: 'Only if you have a dedicated space used exclusively and regularly for managing your Airbnb business (recordkeeping, guest communication, etc.). The space cannot be a guest bedroom. The deduction is calculated based on square footage percentage.' },
              { q: 'What records should Airbnb hosts keep in 2026?', a: 'Keep receipts for all expenses, mileage logs if you drive to the property, bank statements showing rental deposits, Airbnb payout statements, and records of days rented vs. personal use. Keep records for at least 3 years (7 years for depreciation claims).' },
            ].map((item, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 14, marginBottom: 14 }}>
                <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontSize: 14, marginBottom: 6 }}>Q: {item.q}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>{item.a}</div>
              </div>
            ))}

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: 14, fontSize: 12, color: '#8fa8c8', lineHeight: 1.6 }}>
              <strong>Disclaimer:</strong> Informational purposes only. Consult a licensed CPA for your specific situation. Not affiliated with Airbnb or the IRS.
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="blog-sidebar" style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
          <a href="/airbnb" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 6, padding: 20, textAlign: 'center' as const }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🏠</div>
              <div style={{ fontWeight: 800, color: '#fff', marginBottom: 6 }}>Airbnb Tax Calculator</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>All 50 states · Schedule E</div>
              <div style={{ background: '#e8b84b', color: '#07111F', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 800 }}>Calculate Now →</div>
            </div>
          </a>
          <div style={{ background: '#0d1b3e', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, overflow: 'hidden' as const }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', padding: '10px 16px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const }}>Related Guides</span>
            </div>
            {[
              { label: '🏠 Airbnb Tax Calculator', href: '/airbnb' },
              { label: '🚗 DoorDash Tax Guide 2026', href: '/blog/doordash-taxes-2026' },
              { label: '🛒 Instacart Tax Guide 2026', href: '/blog/instacart-shopper-taxes-2026' },
              { label: '📋 1099 Tax Calculator', href: '/1099-tax-calculator' },
              { label: '📅 Quarterly Tax Deadlines', href: '/blog/quarterly-taxes-gig-workers' },
              { label: '🚗 Turo Host Tax Guide', href: '/turo' },
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
