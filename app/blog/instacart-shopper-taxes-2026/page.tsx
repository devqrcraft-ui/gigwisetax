// Save as: app/blog/instacart-shopper-taxes-2026/page.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instacart Shopper Taxes 2026 — Gig Worker Tax Guide | GigWiseTax',
  description: 'How Instacart shoppers and delivery workers pay taxes in 2026. SE tax 15.3%, mileage deduction $0.725/mile, quarterly estimated taxes, Schedule C, and 1099-NEC filing guide.',
  keywords: 'Instacart taxes 2026, Instacart self employment tax, Instacart shopper 1099, Instacart mileage deduction 2026, Instacart quarterly taxes',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/instacart-shopper-taxes-2026' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much tax does an Instacart shopper pay?',
      acceptedAnswer: { '@type': 'Answer', text: 'Instacart shoppers pay 15.3% self-employment tax plus federal income tax (10-37%) plus any state income tax. On $40,000 net income, expect to owe approximately $14,000-$17,000 in total taxes before mileage and other deductions.' },
    },
    {
      '@type': 'Question',
      name: 'Does Instacart withhold taxes?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Instacart classifies shoppers as independent contractors and does not withhold any federal income tax, state income tax, Social Security, or Medicare taxes. You are responsible for calculating and paying your own taxes quarterly using IRS Form 1040-ES.' },
    },
    {
      '@type': 'Question',
      name: 'Can Instacart shoppers deduct mileage in 2026?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Instacart shoppers can deduct $0.725 per mile driven for business in 2026. This includes driving to the store, during shopping (parking lot counts), and delivering to customers. Track every mile using a mileage app. On 10,000 miles, this is a $6,700 deduction.' },
    },
  ],
}

export default function InstacartTaxGuide() {
  const prose = { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, textAlign: 'justify' as const, marginBottom: 16 }
  const h2 = { fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12, marginTop: 28 }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
      <div style={{ background: '#0d1117', minHeight: '100vh' }}>
        <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
            <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a> ›{' '}
              <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a> ›{' '}
              <span style={{ color: 'rgba(255,255,255,.7)' }}>Instacart Shopper Taxes 2026</span>
            </nav>
            <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
              <span style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)', fontSize: 11, padding: '3px 10px', borderRadius: 3 }}>February 5, 2026</span>
              <span style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)', fontSize: 11, padding: '3px 10px', borderRadius: 3 }}>7 min read</span>
            </div>
            <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: '0 0 14px' }}>
               Instacart Shopper Taxes 2026 — Complete Tax Guide
            </h1>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, textAlign: 'justify', maxWidth: 760, margin: 0 }}>
              How Instacart in-store shoppers and full-service shoppers pay taxes in 2026.
              Covers self-employment tax, the $0.725/mile mileage deduction, quarterly estimated payments,
              and every deduction available to Instacart workers.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 48px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 24 }} className="blog-grid">
          <div>
            <div style={{ background: '#0d1b3e', border: '1px solid #d8dce6', borderRadius: 6, padding: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>

              {/* CTA */}
              <div style={{ background: '#1a1a2e', borderRadius: 6, padding: 16, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' as const }}>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: 14 }}> Calculate Your Instacart Taxes Instantly</div>
                <a href="/instacart" style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#B22234', color: '#fff', padding: '9px 18px', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Open Calculator →</div>
                </a>
              </div>

              {/* KEY FACTS */}
              <div style={{ background: 'rgba(178,34,52,0.12)', border: '1px solid #fecaca', borderRadius: 6, padding: 16, marginBottom: 24 }}>
                <div style={{ fontWeight: 800, color: '#B22234', marginBottom: 10 }}> Key Facts: Instacart Taxes 2026</div>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 2 }}>
                  <li><strong>In-store shoppers</strong> are W-2 employees — taxes withheld automatically</li>
                  <li><strong>Full-service shoppers</strong> are 1099 contractors — you pay taxes yourself</li>
                  <li><strong>2026 mileage rate: $0.725/mile</strong> for all delivery miles</li>
                  <li><strong>1099-NEC sent at $600+</strong> but all income is taxable regardless</li>
                  <li><strong>Set aside 25–30%</strong> of every Instacart payment for taxes</li>
                  <li><strong>NAICS Code 492000</strong> — Couriers and Messengers</li>
                </ul>
              </div>

              {/* IN-STORE VS FULL-SERVICE */}
              <div style={{ background: 'rgba(3,105,161,0.12)', border: '1px solid #bae6fd', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                <div style={{ fontWeight: 700, color: '#7dd3fc', marginBottom: 10 }}> Important: Two Types of Instacart Workers</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="form-grid">
                  <div style={{ background: '#0d1b3e', border: '1px solid #bae6fd', borderRadius: 4, padding: 12 }}>
                    <div style={{ fontWeight: 700, color: '#7dd3fc', marginBottom: 6, fontSize: 13 }}> In-Store Shoppers</div>
                    <ul style={{ margin: 0, paddingLeft: 14, fontSize: 12, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}>
                      <li>W-2 employee status</li>
                      <li>Taxes withheld by Instacart</li>
                      <li>No quarterly payments needed</li>
                      <li>No SE tax</li>
                    </ul>
                  </div>
                  <div style={{ background: '#0d1b3e', border: '1px solid #fecaca', borderRadius: 4, padding: 12 }}>
                    <div style={{ fontWeight: 700, color: '#B22234', marginBottom: 6, fontSize: 13 }}> Full-Service Shoppers</div>
                    <ul style={{ margin: 0, paddingLeft: 14, fontSize: 12, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}>
                      <li>1099 independent contractor</li>
                      <li>No tax withholding</li>
                      <li>Must pay quarterly</li>
                      <li>15.3% SE tax applies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 style={h2}>Instacart 2026 Mileage Deduction ($0.725/mile)</h2>
              <p style={prose}>
                The mileage deduction is the most valuable tax deduction for Instacart full-service shoppers.
                The 2026 IRS standard mileage rate is <strong>$0.725 per mile</strong> — the highest in recent years.
                You can deduct mileage driven from the moment you accept a batch until you complete the last delivery.
              </p>
              <p style={prose}>
                <strong>What counts as deductible mileage for Instacart:</strong> Driving to the store after accepting a batch,
                driving between stores if a batch requires multiple stores, and driving to the customer's delivery address.
                Driving from home to the first store without an active batch generally does not count.
              </p>

              <div style={{ background: 'rgba(3,105,161,0.12)', border: '1px solid #bae6fd', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                <div style={{ fontWeight: 700, color: '#7dd3fc', marginBottom: 10 }}> Mileage Deduction Examples (2026)</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                  {[
                    { miles: '8,000', deduction: '$5,800', saves: '~$1,276' },
                    { miles: '15,000', deduction: '$10,875', saves: '~$2,393' },
                    { miles: '25,000', deduction: '$16,750', saves: '~$3,988' },
                  ].map(r => (
                    <div key={r.miles} style={{ background: '#0d1b3e', border: '1px solid #bae6fd', borderRadius: 4, padding: 12, textAlign: 'center' as const }}>
                      <div style={{ fontSize: 11, color: '#6c757d', marginBottom: 4 }}>{r.miles} miles</div>
                      <div style={{ fontSize: 16, fontWeight: 900, color: '#7dd3fc' }}>{r.deduction}</div>
                      <div style={{ fontSize: 10, color: '#059669', fontWeight: 600 }}>saves {r.saves} in tax</div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 style={h2}>Top Deductions for Instacart Shoppers 2026</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }} className="form-grid">
                {[
                  { icon: '', name: 'Mileage ($0.725/mile)', detail: 'Most valuable deduction. Track every batch mile using Stride, MileIQ, or Everlance.' },
                  { icon: '', name: 'Phone Bill (business %)', detail: 'If you use your phone 70% for Instacart, deduct 70% of your monthly bill.' },
                  { icon: '', name: 'Insulated Bags & Coolers', detail: 'Grocery bags, insulated totes, cooler bags purchased specifically for Instacart deliveries.' },
                  { icon: '', name: 'Auto Insurance (business %)', detail: 'Deduct the business portion if using actual expense method (not mileage method).' },
                  { icon: '', name: 'Parking & Tolls', detail: 'Any parking fees or toll charges while on an active batch. Keep receipts.' },
                  { icon: '', name: 'Accounting Software', detail: 'QuickBooks Self-Employed, FreshBooks — deductible if used for your Instacart business.' },
                ].map(d => (
                  <div key={d.name} style={{ border: '1px solid #e2e5e9', borderRadius: 6, padding: 12 }}>
                    <div style={{ fontSize: 20, marginBottom: 5 }}>{d.icon}</div>
                    <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 3, fontSize: 13 }}>{d.name}</div>
                    <div style={{ fontSize: 12, color: '#6c757d', lineHeight: 1.5 }}>{d.detail}</div>
                  </div>
                ))}
              </div>

              <h2 style={h2}>Quarterly Tax Deadlines for Instacart Workers 2026</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse' as const, marginBottom: 20, fontSize: 13 }}>
                <thead>
                  <tr style={{ background: '#1a1a2e' }}>
                    {['Quarter', 'Due Date', 'Days Left'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', fontWeight: 700, color: 'rgba(255,255,255,.6)', textTransform: 'uppercase' as const, textAlign: 'left' as const, fontSize: 11 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { q: 'Q1 2026', due: 'April 15, 2026', d: 45, now: true },
                    { q: 'Q2 2026', due: 'June 16, 2026', d: 107, now: false },
                    { q: 'Q3 2026', due: 'Sept 15, 2026', d: 198, now: false },
                    { q: 'Q4 2026', due: 'Jan 15, 2027', d: 320, now: false },
                  ].map((d, i) => (
                    <tr key={d.q} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: i === 0 ? 'rgba(178,34,52,0.12)' : 'rgba(255,255,255,0.03)' }}>
                      <td style={{ padding: '11px 14px', fontWeight: 800, color: i === 0 ? '#B22234' : '#1a1a2e' }}>
                        {i === 0 && <span style={{ background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 4px', borderRadius: 2, marginRight: 5 }}>NOW</span>}
                        {d.q}
                      </td>
                      <td style={{ padding: '11px 14px', fontWeight: 700, color: i === 0 ? '#B22234' : '#1a1a2e' }}>{d.due}</td>
                      <td style={{ padding: '11px 14px' }}>
                        <span style={{ background: i === 0 ? 'rgba(178,34,52,0.2)' : 'rgba(255,255,255,0.08)', color: i === 0 ? '#B22234' : 'rgba(255,255,255,0.75)', padding: '3px 10px', borderRadius: 12, fontSize: 12, fontWeight: 700 }}>{d.d} days</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2 style={h2}>FAQ — Instacart Taxes 2026</h2>
              {[
                {
                  q: 'Does Instacart report my income to the IRS?',
                  a: 'Yes. If you earn $600 or more as a full-service shopper, Instacart sends you a 1099-NEC and also sends a copy directly to the IRS. Even if you earn less than $600, you are legally required to report and pay taxes on all self-employment income.',
                },
                {
                  q: 'Is Instacart income self-employment income?',
                  a: 'Yes — for full-service shoppers. You are classified as an independent contractor. Your Instacart earnings appear on Schedule C (Profit or Loss from Business). After deducting business expenses, the net profit is subject to 15.3% SE tax plus federal and state income tax.',
                },
                {
                  q: 'Should I track miles or use actual expenses for Instacart?',
                  a: "Most Instacart shoppers benefit more from the standard mileage method ($0.725/mile) because it's simpler and often yields a larger deduction than actual vehicle expenses. You cannot switch back to the actual expense method after using the standard mileage rate in the first year of vehicle use.",
                },
              ].map((item, i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 14, marginBottom: 14 }}>
                  <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontSize: 14, marginBottom: 6 }}>Q: {item.q}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, textAlign: 'justify' }}>{item.a}</div>
                </div>
              ))}

              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #e2e5e9', borderRadius: 4, padding: 14, fontSize: 12, color: '#6c757d', lineHeight: 1.6 }}>
                 <strong>Disclaimer:</strong> Informational purposes only. Not affiliated with Instacart or the IRS. Consult a CPA for your specific situation.
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            <a href="/instacart" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#1a1a2e', borderRadius: 6, padding: 20, textAlign: 'center' as const }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}></div>
                <div style={{ fontWeight: 800, color: '#fff', marginBottom: 6 }}>Instacart Tax Calculator</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>All 51 states · Instant results</div>
                <div style={{ background: '#B22234', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Calculate Now →</div>
              </div>
            </a>
            <div style={{ background: '#0d1b3e', border: '2px dashed #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderBottom: '1px solid #e2e5e9', fontSize: 10, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' as const }}>Sponsored — 300×250</div>
              <div style={{ padding: 16 }}>
                <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 4, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic' }}>Ad image here</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 6 }}>QuickBooks Self-Employed</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', marginBottom: 14, lineHeight: 1.6 }}>Auto-tracks Instacart mileage and separates business from personal expenses.</div>
                <div style={{ background: '#0d7a40', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const }}>Try Free 30 Days →</div>
                <div style={{ fontSize: 10, color: '#c4c9d4', marginTop: 5, textAlign: 'center' as const }}>Affiliate link</div>
              </div>
            </div>
            <div style={{ background: '#0d1b3e', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const }}> Related Guides</span>
              </div>
              {[
                { label: ' DoorDash Tax Guide', href: '/blog/doordash-taxes-2026' },
                { label: ' Uber Tax Guide', href: '/blog/uber-tax-guide-2026' },
                { label: ' Quarterly Deadlines', href: '/blog/quarterly-taxes-gig-workers' },
              ].map(l => (
                <a key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{l.label}</div>
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
