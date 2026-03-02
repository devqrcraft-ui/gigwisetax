// Save as: app/blog/airbnb-host-taxes-2026/page.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Airbnb Host Tax Guide 2026 — What Hosts Need to Know | GigWiseTax',
  description: 'How Airbnb hosts pay taxes in 2026. Covers the 14-day rule, Schedule E vs Schedule C, deductible expenses, depreciation, state occupancy taxes, and quarterly estimated payments. Free calculator.',
  keywords: 'Airbnb host taxes 2026, Airbnb tax guide, Airbnb 14 day rule, Airbnb Schedule E, Airbnb rental income tax USA',
  alternates: { canonical: 'https://gigwisetax.com/blog/airbnb-host-taxes-2026' },
  openGraph: {
    title: 'Airbnb Host Tax Guide 2026 — Complete USA Guide',
    description: 'How Airbnb hosts pay taxes in 2026. 14-day rule, Schedule E vs C, deductions, state taxes.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do Airbnb hosts pay self-employment tax?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most Airbnb hosts who provide only basic lodging (no significant services) report income on Schedule E and do NOT pay self-employment tax. However, if you provide hotel-like services (daily cleaning, meals, concierge), the IRS may classify your income as self-employment income subject to 15.3% SE tax on Schedule C.' },
    },
    {
      '@type': 'Question',
      name: 'What is the Airbnb 14-day tax rule?',
      acceptedAnswer: { '@type': 'Answer', text: 'Under IRS Section 280A, if you rent your property for 14 days or fewer per year, the rental income is completely tax-free and does not need to be reported. You also cannot deduct any rental expenses. Above 14 rental days, you must report income but can deduct a proportional share of expenses.' },
    },
    {
      '@type': 'Question',
      name: 'What can Airbnb hosts deduct on taxes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Airbnb hosts can deduct: mortgage interest (rental %), property taxes (rental %), utilities (rental %), insurance (rental %), cleaning and maintenance, depreciation of the property, furniture and appliances, Airbnb service fees, photography costs, and home office if applicable.' },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Airbnb Host Tax Guide 2026 — What Hosts Need to Know',
  datePublished: '2026-02-01',
  dateModified: '2026-02-01',
  author: { '@type': 'Organization', name: 'GigWiseTax' },
  publisher: { '@type': 'Organization', name: 'GigWiseTax', url: 'https://gigwisetax.com' },
}

export default function AirbnbTaxGuide() {
  const prose = { fontSize: 14, color: '#374151', lineHeight: 1.8, textAlign: 'justify' as const, marginBottom: 16 }
  const h2 = { fontSize: 20, fontWeight: 800, color: '#1a1a2e', marginBottom: 12, marginTop: 28 }
  const h3 = { fontSize: 16, fontWeight: 700, color: '#1a1a2e', marginBottom: 10, marginTop: 20 }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}/>

      <div style={{ background: '#eef0f4', minHeight: '100vh' }}>
        <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
            <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a> ›{' '}
              <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a> ›{' '}
              <span style={{ color: 'rgba(255,255,255,.7)' }}>Airbnb Host Tax Guide 2026</span>
            </nav>
            <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
              <span style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)', fontSize: 11, padding: '3px 10px', borderRadius: 3 }}>February 1, 2026</span>
              <span style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)', fontSize: 11, padding: '3px 10px', borderRadius: 3 }}>9 min read</span>
            </div>
            <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: '0 0 14px' }}>
              🏠 Airbnb Host Tax Guide 2026 — What Every Host Needs to Know
            </h1>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, textAlign: 'justify', maxWidth: 760, margin: 0 }}>
              Complete tax guide for Airbnb hosts in the USA for 2026. Covers the 14-day rule, Schedule E vs Schedule C,
              how to calculate deductible expenses, depreciation, state occupancy taxes, and quarterly estimated payments.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 48px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 24 }} className="blog-grid">
          <div>
            <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, padding: 28, boxShadow: '0 1px 6px rgba(0,0,0,.05)' }}>

              {/* CTA */}
              <div style={{ background: '#1a1a2e', borderRadius: 6, padding: 16, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' as const }}>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: 14 }}>🏠 Calculate Your Airbnb Tax Estimate</div>
                <a href="/airbnb" style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#B22234', color: '#fff', padding: '9px 18px', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Open Calculator →</div>
                </a>
              </div>

              {/* KEY FACTS */}
              <div style={{ background: '#fff5f5', border: '1px solid #fecaca', borderRadius: 6, padding: 16, marginBottom: 24 }}>
                <div style={{ fontWeight: 800, color: '#B22234', marginBottom: 10 }}>📌 Key Facts: Airbnb Taxes 2026</div>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: '#374151', lineHeight: 2 }}>
                  <li><strong>14-day rule:</strong> Rent ≤14 days/year = tax-free income</li>
                  <li><strong>Schedule E</strong> (passive) for basic lodging — no SE tax (15.3%)</li>
                  <li><strong>Schedule C</strong> (active) if you provide hotel-like services</li>
                  <li><strong>1099-K from Airbnb</strong> if gross payments exceed $600 in 2026</li>
                  <li><strong>Depreciation</strong> is your biggest deduction (27.5-year straight-line)</li>
                  <li><strong>State occupancy taxes</strong> — Airbnb collects in most states automatically</li>
                </ul>
              </div>

              <h2 style={h2}>The Airbnb 14-Day Tax Rule Explained</h2>
              <p style={prose}>
                The most important tax rule for Airbnb hosts is <strong>IRS Section 280A — the 14-day rule</strong>.
                If you rent your property (or a room in your home) for <strong>14 days or fewer per year</strong>,
                the rental income is completely <strong>tax-free</strong> and does not need to be reported on your tax return.
                This is known as the "Master's Tournament Rule" — named after Augusta homeowners who rent out
                their homes during the Masters golf tournament each April.
              </p>
              <p style={prose}>
                However, if you rent for more than 14 days per year, you must report all rental income.
                The good news: you can then deduct a proportional share of your housing expenses against that income.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }} className="form-grid">
                {[
                  { title: '≤14 Days Rented Per Year', items: ['✓ Rental income is tax-free', '✓ No reporting required', '✗ Cannot deduct expenses', '✓ Simplest tax situation'], color: '#059669', bg: '#f0fdf4', border: '#bbf7d0' },
                  { title: '>14 Days Rented Per Year', items: ['⚠️ All income must be reported', '✓ Can deduct proportional expenses', '✓ Depreciation deduction allowed', '✓ Mortgage interest deductible'], color: '#B22234', bg: '#fff5f5', border: '#fecaca' },
                ].map(box => (
                  <div key={box.title} style={{ background: box.bg, border: `1px solid ${box.border}`, borderRadius: 6, padding: 16 }}>
                    <div style={{ fontWeight: 800, color: box.color, marginBottom: 10, fontSize: 13 }}>{box.title}</div>
                    {box.items.map(item => (
                      <div key={item} style={{ fontSize: 13, color: '#374151', marginBottom: 6, lineHeight: 1.5 }}>{item}</div>
                    ))}
                  </div>
                ))}
              </div>

              <h2 style={h2}>Schedule E vs Schedule C for Airbnb Hosts</h2>
              <p style={prose}>
                How you report Airbnb income determines whether you pay self-employment tax (15.3%) or not.
                This is one of the most important decisions for Airbnb hosts.
              </p>
              <div style={{ border: '1px solid #e2e5e9', borderRadius: 6, overflow: 'hidden', marginBottom: 20 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
                  <thead>
                    <tr style={{ background: '#1a1a2e' }}>
                      {['', 'Schedule E (Passive)', 'Schedule C (Business)'].map(h => (
                        <th key={h} style={{ padding: '11px 16px', fontWeight: 700, color: 'rgba(255,255,255,.7)', textAlign: 'left' as const, fontSize: 12 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Use when', 'Basic lodging only', 'Hotel-like services (meals, daily cleaning, concierge)'],
                      ['SE Tax (15.3%)', '✗ None — saves money', '✓ Required on net profit'],
                      ['Self-employment deductions', 'Limited', 'Full business deductions'],
                      ['QBI deduction (20%)', '✓ May qualify', '✓ May qualify'],
                      ['Most common for', 'Most Airbnb hosts', 'Bed & Breakfast, vacation rental businesses'],
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #f0f1f3', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                        <td style={{ padding: '11px 16px', fontWeight: 700, color: '#374151' }}>{row[0]}</td>
                        <td style={{ padding: '11px 16px', color: '#059669' }}>{row[1]}</td>
                        <td style={{ padding: '11px 16px', color: '#374151' }}>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 style={h2}>Top Tax Deductions for Airbnb Hosts 2026</h2>
              <p style={prose}>
                If you rent more than 14 days per year, you can deduct a <strong>proportional share</strong> of home expenses.
                The rental percentage = rental days ÷ total days used.
                For example, if you rent 120 days out of 365, the rental percentage is 32.9%.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }} className="form-grid">
                {[
                  { icon: '🏠', name: 'Mortgage Interest', detail: 'Deduct rental% of annual mortgage interest. One of the largest deductions for most hosts.' },
                  { icon: '💰', name: 'Property Taxes', detail: 'Deduct rental% of annual property tax. Must allocate between personal and rental use.' },
                  { icon: '📡', name: 'Utilities & Internet', detail: 'Electric, gas, water, internet — deduct the rental percentage used by guests.' },
                  { icon: '🔧', name: 'Repairs & Maintenance', detail: 'Repairs made for rental purposes are 100% deductible. General home repairs use rental %.' },
                  { icon: '🧹', name: 'Cleaning Services', detail: '100% deductible if cleaning is done for guest turnovers. Keep all invoices and receipts.' },
                  { icon: '🛋️', name: 'Furniture & Appliances', detail: 'Deductible via Section 179 (immediate) or depreciation over several years.' },
                  { icon: '📸', name: 'Photography & Listing', detail: 'Professional photos, Airbnb listing upgrades, smart lock installation — all deductible.' },
                  { icon: '📉', name: 'Depreciation (27.5 years)', detail: 'Biggest long-term deduction. Deduct rental% of building cost over 27.5 years straight-line.' },
                ].map(d => (
                  <div key={d.name} style={{ border: '1px solid #e2e5e9', borderRadius: 6, padding: 12 }}>
                    <div style={{ fontSize: 20, marginBottom: 5 }}>{d.icon}</div>
                    <div style={{ fontWeight: 700, color: '#1a1a2e', marginBottom: 3, fontSize: 13 }}>{d.name}</div>
                    <div style={{ fontSize: 12, color: '#6c757d', lineHeight: 1.5 }}>{d.detail}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                <div style={{ fontWeight: 700, color: '#b45309', marginBottom: 8 }}>⚠️ Depreciation Recapture Warning</div>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                  When you sell your property, the IRS requires you to pay <strong>depreciation recapture tax (25%)</strong>
                  on all the depreciation you claimed during the rental years — even if you never actually claimed it.
                  Consult a CPA before deciding how to handle depreciation on your Airbnb property.
                </p>
              </div>

              <h2 style={h2}>State Occupancy Taxes for Airbnb Hosts</h2>
              <p style={prose}>
                In addition to income taxes, many states and cities charge <strong>occupancy taxes</strong> (also called lodging taxes,
                hotel taxes, or short-term rental taxes) on Airbnb income.
                The good news: Airbnb automatically collects and remits occupancy taxes in most major markets in the USA.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse' as const, marginBottom: 20, fontSize: 13 }}>
                <thead>
                  <tr style={{ background: '#1a1a2e' }}>
                    {['State', 'Airbnb Collects?', 'Host Responsibility', 'Approx. Rate'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', fontWeight: 700, color: 'rgba(255,255,255,.6)', textTransform: 'uppercase' as const, textAlign: 'left' as const, fontSize: 11 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { state: 'California', auto: true, host: 'Verify local rules', rate: '8–15%' },
                    { state: 'New York', auto: true, host: 'NYC — verify separately', rate: '14.75% (NYC)' },
                    { state: 'Texas', auto: true, host: 'Mostly handled', rate: '6–15%' },
                    { state: 'Florida', auto: true, host: 'Some counties manual', rate: '6–13%' },
                    { state: 'Colorado', auto: false, host: 'Host responsible', rate: '3.9% + local' },
                    { state: 'All others', auto: false, host: 'Check Airbnb Help Center', rate: 'Varies' },
                  ].map((r, i) => (
                    <tr key={r.state} style={{ borderBottom: '1px solid #f0f1f3', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                      <td style={{ padding: '11px 14px', fontWeight: 600 }}>{r.state}</td>
                      <td style={{ padding: '11px 14px', color: r.auto ? '#059669' : '#B22234', fontWeight: 700 }}>{r.auto ? '✓ Yes' : '✗ No'}</td>
                      <td style={{ padding: '11px 14px', color: '#374151' }}>{r.host}</td>
                      <td style={{ padding: '11px 14px', color: '#374151', fontWeight: 600 }}>{r.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2 style={h2}>FAQ — Airbnb Taxes 2026</h2>
              {[
                {
                  q: 'Does Airbnb report my income to the IRS?',
                  a: 'Yes. For 2026, Airbnb will issue a 1099-K to any host who receives more than $600 in gross payments. This form is also sent directly to the IRS. The IRS will match it against your tax return. Always report your Airbnb income accurately.',
                },
                {
                  q: 'Do I pay self-employment tax as an Airbnb host?',
                  a: 'Usually not. Most Airbnb hosts who provide basic lodging (no meals, no daily service) report income on Schedule E and do not owe self-employment tax. This is a major tax advantage over gig delivery or rideshare workers. However, if you provide substantial services to guests, the IRS may require Schedule C with SE tax.',
                },
                {
                  q: 'Can I deduct the Airbnb service fee as a host?',
                  a: "Yes. Airbnb's host service fee (typically 3%) is a deductible business expense on Schedule E or Schedule C. Since your 1099-K shows gross payments before Airbnb's fee, you should deduct the fee separately to avoid overpaying taxes.",
                },
                {
                  q: 'What if I only rent out a room in my primary residence?',
                  a: 'Renting a room follows the same rules. Income is taxable (unless 14 days or fewer). You can deduct a proportional share of home expenses based on the square footage of the rented room relative to your total home. For example, if the room is 15% of your home, you can deduct 15% of rent-proportional expenses.',
                },
              ].map((item, i) => (
                <div key={i} style={{ borderBottom: '1px solid #f0f1f3', paddingBottom: 14, marginBottom: 14 }}>
                  <div style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 14, marginBottom: 6 }}>Q: {item.q}</div>
                  <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, textAlign: 'justify' }}>{item.a}</div>
                </div>
              ))}

              <div style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: 14, fontSize: 12, color: '#6c757d', lineHeight: 1.6 }}>
                ⚠️ <strong>Disclaimer:</strong> This guide is for informational purposes only. Short-term rental tax rules vary by state and locality. Consult a licensed CPA familiar with real estate taxation. Visit <a href="https://irs.gov" style={{ color: '#B22234' }}>IRS.gov</a> for official guidance on rental income.
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            <a href="/airbnb" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#1a1a2e', borderRadius: 6, padding: 20, textAlign: 'center' as const }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>🏠</div>
                <div style={{ fontWeight: 800, color: '#fff', marginBottom: 6 }}>Airbnb Tax Calculator</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>All 51 states · Schedule E</div>
                <div style={{ background: '#B22234', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Calculate Now →</div>
              </div>
            </a>
            <div style={{ background: '#fff', border: '2px dashed #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: '#f8fafc', padding: '6px 14px', borderBottom: '1px solid #e2e5e9', fontSize: 10, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' as const }}>Sponsored — 300×250</div>
              <div style={{ padding: 16 }}>
                <div style={{ background: '#f0f4f8', borderRadius: 4, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic' }}>Ad image here</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#1a1a2e', marginBottom: 6 }}>TurboTax Premier</div>
                <div style={{ fontSize: 13, color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>Handles rental income (Schedule E), depreciation, and occupancy tax deductions automatically.</div>
                <div style={{ background: '#B22234', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const }}>Start Free →</div>
                <div style={{ fontSize: 10, color: '#c4c9d4', marginTop: 5, textAlign: 'center' as const }}>Affiliate link</div>
              </div>
            </div>
            <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const }}>📌 Related Guides</span>
              </div>
              {[
                { label: '📅 2026 Quarterly Deadlines', href: '/blog/quarterly-taxes-gig-workers' },
                { label: '📋 W-2 vs 1099 Guide', href: '/blog/w2-vs-1099-guide-2026' },
                { label: '🏠 Airbnb by State', href: '/airbnb' },
                { label: '🚗 DoorDash Tax Guide', href: '/blog/doordash-taxes-2026' },
              ].map(l => (
                <a key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '10px 16px', borderBottom: '1px solid #f0f1f3', fontSize: 13, color: '#374151', fontWeight: 500 }}>{l.label}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:760px){.blog-grid{grid-template-columns:1fr!important}.form-grid{grid-template-columns:1fr!important}}`}</style>
      </div>
    </>
  )
}
