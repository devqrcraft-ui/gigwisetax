// Save as: app/blog/uber-tax-guide-2026/page.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uber Driver Tax Guide 2026 — How to File Your 1099 | GigWiseTax',
  description: 'Complete Uber driver tax guide for 2026. SE tax 15.3%, mileage rate $0.725/mile, tip deduction up to $25,000, quarterly deadlines, and Schedule C filing. Free calculator included.',
  keywords: 'Uber driver taxes 2026, Uber 1099 how to file, Uber mileage deduction 2026, Uber quarterly taxes, rideshare self employment tax 2026',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/uber-tax-guide-2026' },
  openGraph: { title: 'Uber Driver Tax Guide 2026', description: 'How Uber drivers pay taxes in 2026. SE tax, mileage, tips deduction, and quarterly schedule.' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much tax does an Uber driver pay in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Uber drivers pay 15.3% self-employment tax plus federal income tax. On $45,000 net income after mileage deductions, expect to owe approximately $14,000-$17,000. Set aside 25-30% of each payment. The mileage deduction at $0.725/mile significantly reduces taxable income.' } },
    { '@type': 'Question', name: 'Can Uber drivers deduct tips in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! A new 2026 tax law allows rideshare drivers to deduct qualified tips up to $25,000 from their income. This is a major new deduction for Uber and Lyft drivers. You still report the tip income, then deduct it separately.' } },
    { '@type': 'Question', name: 'What is the 2026 mileage rate for Uber drivers?', acceptedAnswer: { '@type': 'Answer', text: 'The 2026 IRS standard mileage rate is $0.725 per mile (70 cents). On 15,000 business miles, that is a $10,875 tax deduction — significantly reducing your taxable income.' } },
  ],
}

export default function UberTaxGuide() {
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
              <span style={{ color: 'rgba(255,255,255,.7)' }}>Uber Tax Guide 2026</span>
            </nav>
            <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
              <span style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)', fontSize: 11, padding: '3px 10px', borderRadius: 3 }}>January 20, 2026</span>
              <span style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)', fontSize: 11, padding: '3px 10px', borderRadius: 3 }}>7 min read</span>
              <span style={{ background: '#059669', color: '#fff', fontSize: 11, padding: '3px 10px', borderRadius: 3, fontWeight: 700 }}>NEW 2026 Tips Deduction</span>
            </div>
            <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: '0 0 14px' }}>
               Uber Driver Tax Guide 2026 — How to File Your 1099
            </h1>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, textAlign: 'justify', maxWidth: 760, margin: 0 }}>
              Complete Uber driver tax guide for 2026. Includes the new $0.725/mile mileage rate, the new tips deduction (up to $25,000),
              SE tax calculation, quarterly deadlines, and every deduction Uber drivers can claim.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 48px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 24 }} className="blog-grid">
          <div>
            <div style={{ background: '#0d1b3e', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>

              <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 6, padding: 16, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' as const }}>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: 14 }}> Calculate Your Uber Taxes Instantly</div>
                <a href="/uber" style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#B22234', color: '#fff', padding: '9px 18px', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Open Calculator →</div>
                </a>
              </div>

              {/* NEW 2026 TIP DEDUCTION */}
              <div style={{ background: 'rgba(5,150,105,0.12)', border: '2px solid #059669', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                <div style={{ fontWeight: 800, color: '#059669', marginBottom: 8, fontSize: 15 }}> NEW 2026 LAW: Uber Drivers Can Deduct Tips Up to $25,000</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, margin: '0 0 10px' }}>
                  Starting in tax year 2026 (returns filed in 2027), a new federal tax law allows rideshare and delivery drivers
                  to deduct <strong>qualified tips up to $25,000</strong> from their taxable income.
                  You still report the tip income on Schedule C, then take a separate deduction on Schedule 1 to exempt it from tax.
                </p>
                <div style={{ fontSize: 13, color: '#4ade80', fontWeight: 600 }}>
                  Example: $8,000 in Uber tips + $25,000 cap = entire $8,000 is deductible. Saves approx. $2,400 in taxes.
                </div>
              </div>

              <div style={{ background: 'rgba(178,34,52,0.12)', border: '1px solid #fecaca', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                <div style={{ fontWeight: 800, color: '#B22234', marginBottom: 8 }}> Key Facts: Uber Taxes 2026</div>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 2 }}>
                  <li><strong>Uber does NOT withhold any taxes</strong> — you are an independent contractor</li>
                  <li><strong>2026 mileage rate: $0.725/mile</strong> — highest in years</li>
                  <li><strong>NEW: Tips deduction up to $25,000</strong> for 2026 tax year</li>
                  <li><strong>1099-K</strong> for ride earnings + <strong>1099-NEC</strong> for bonuses/referrals</li>
                  <li><strong>File Schedule C + Schedule SE</strong> with your Form 1040</li>
                  <li><strong>Set aside 25–30%</strong> of every Uber payment for taxes</li>
                </ul>
              </div>

              <h2 style={h2}>Uber's 1099 Forms Explained</h2>
              <p style={prose}>
                Uber issues two different 1099 forms. The <strong>1099-K</strong> reports your gross trip earnings
                (what riders/Uber Eats users paid — before Uber's service fee). The <strong>1099-NEC</strong>
                reports bonuses, referral payments, and other non-trip income over $600.
                Your actual taxable income is the 1099-K amount minus Uber's fees and commissions
                (shown in your Uber Tax Summary). The net amount is what you report on Schedule C.
              </p>

              <h2 style={h2}>2026 Mileage Deduction for Uber Drivers</h2>
              <div style={{ background: 'rgba(3,105,161,0.12)', border: '1px solid #bae6fd', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                <div style={{ fontWeight: 700, color: '#7dd3fc', marginBottom: 12 }}> $0.725 per mile in 2026</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                  {[['10,000 mi','$7,250'],['15,000 mi','$10,875'],['20,000 mi','$14,500']].map(([mi, d]) => (
                    <div key={mi} style={{ background: '#0d1b3e', border: '1px solid #bae6fd', borderRadius: 4, padding: 12, textAlign: 'center' as const }}>
                      <div style={{ fontSize: 11, color: '#6c757d', marginBottom: 3 }}>{mi}/year</div>
                      <div style={{ fontSize: 20, fontWeight: 900, color: '#7dd3fc' }}>{d}</div>
                      <div style={{ fontSize: 10, color: '#9ca3af' }}>deduction</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', marginTop: 10, marginBottom: 0 }}>
                  Uber provides your online miles in the Tax Summary. Track ALL miles — including driving to first pickup and between trips — using MileIQ, Stride, or Everlance apps.
                </p>
              </div>

              <h2 style={h2}>Top Deductions for Uber Drivers in 2026</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }} className="form-grid">
                {[
                  { icon: '', name: 'Mileage ($0.725/mile)', detail: 'Largest deduction. Track every trip mile. Use standard OR actual expense method — not both.' },
                  { icon: '', name: 'Tips Deduction (NEW)', detail: 'Up to $25,000 in qualified customer tips are deductible in 2026. Game-changer for top earners.' },
                  { icon: '', name: 'Phone (business %)', detail: 'Deduct business percentage of monthly plan. Most Uber drivers use phone 70–90% for business.' },
                  { icon: '', name: 'Car Washes', detail: 'Cost of keeping vehicle clean for passengers. 100% deductible as ordinary business expense.' },
                  { icon: '', name: 'Parking & Tolls', detail: 'All parking fees and road tolls while on active Uber trips. Keep all receipts.' },
                  { icon: '', name: 'Passenger Amenities', detail: 'Mints, water, phone chargers provided to passengers. 100% deductible. Keep grocery receipts.' },
                  { icon: '', name: 'Car Maintenance (actual method)', detail: 'Oil changes, tires, repairs — deductible if using actual expense method instead of mileage.' },
                  { icon: '', name: 'Accounting Software', detail: 'QuickBooks Self-Employed, Stride, or any tax/mileage app subscription. 100% deductible.' },
                ].map(d => (
                  <div key={d.name} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 12 }}>
                    <div style={{ fontSize: 20, marginBottom: 5 }}>{d.icon}</div>
                    <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 3, fontSize: 13 }}>{d.name}</div>
                    <div style={{ fontSize: 12, color: '#6c757d', lineHeight: 1.5 }}>{d.detail}</div>
                  </div>
                ))}
              </div>

              <h2 style={h2}>Standard Mileage vs Actual Expense Method</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse' as const, marginBottom: 20, fontSize: 13 }}>
                <thead><tr style={{ background: 'rgba(255,255,255,0.85)' }}>
                  {['Method','Best For','Pros','Cons'].map(h => <th key={h} style={{ padding: '10px 14px', color: 'rgba(255,255,255,.6)', textTransform: 'uppercase' as const, textAlign: 'left' as const, fontSize: 11, fontWeight: 700 }}>{h}</th>)}
                </tr></thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(5,150,105,0.12)' }}>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>Standard Mileage</td>
                    <td style={{ padding: '11px 14px' }}>Most drivers</td>
                    <td style={{ padding: '11px 14px', color: '#059669' }}>Simple, no receipts needed</td>
                    <td style={{ padding: '11px 14px', color: '#6c757d' }}>Must use from year 1</td>
                  </tr>
                  <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <td style={{ padding: '11px 14px', fontWeight: 700 }}>Actual Expenses</td>
                    <td style={{ padding: '11px 14px' }}>High-cost vehicles</td>
                    <td style={{ padding: '11px 14px', color: '#059669' }}>May yield larger deduction</td>
                    <td style={{ padding: '11px 14px', color: '#6c757d' }}>Requires all receipts</td>
                  </tr>
                </tbody>
              </table>

              <h2 style={h2}>2026 Quarterly Tax Deadlines for Uber Drivers</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse' as const, marginBottom: 20, fontSize: 13 }}>
                <thead><tr style={{ background: 'rgba(255,255,255,0.85)' }}>
                  {['Quarter','Due Date','Days Left'].map(h => <th key={h} style={{ padding: '10px 14px', color: 'rgba(255,255,255,.6)', textTransform: 'uppercase' as const, textAlign: 'left' as const, fontSize: 11, fontWeight: 700 }}>{h}</th>)}
                </tr></thead>
                <tbody>
                  {[['Q1 2026','April 15, 2026','45',true],['Q2 2026','June 16, 2026','107',false],['Q3 2026','Sept 15, 2026','198',false],['Q4 2026','Jan 15, 2027','320',false]].map(([q,due,d,now],i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: now ? 'rgba(178,34,52,0.12)' : 'rgba(255,255,255,0.03)' }}>
                      <td style={{ padding: '11px 14px', fontWeight: 800, color: now ? '#B22234' : 'rgba(255,255,255,0.85)' }}>
                        {now && <span style={{ background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 4px', borderRadius: 2, marginRight: 5 }}>NOW</span>}
                        {q}
                      </td>
                      <td style={{ padding: '11px 14px', fontWeight: 700, color: now ? '#B22234' : 'rgba(255,255,255,0.85)' }}>{due}</td>
                      <td style={{ padding: '11px 14px' }}>
                        <span style={{ background: now ? 'rgba(178,34,52,0.2)' : 'rgba(255,255,255,0.08)', color: now ? '#B22234' : 'rgba(255,255,255,0.75)', padding: '3px 10px', borderRadius: 12, fontSize: 12, fontWeight: 700 }}>{d} days</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h2 style={h2}>FAQ — Uber Taxes 2026</h2>
              {[
                { q: 'Does Uber report my income to the IRS?', a: 'Yes. Uber sends 1099-K and/or 1099-NEC forms directly to the IRS with your SSN. If you earn $600+ in bonuses, you get a 1099-NEC. For trips, you get a 1099-K. Even if you earn less than $600, you must still report all income on Schedule C.' },
                { q: 'How do I track mileage for Uber taxes?', a: 'Use a mileage tracking app like Stride (free), MileIQ ($7.50/month), or Everlance. Track all business miles including: driving to first pickup, trips between rides, driving back after last trip. Uber also provides an annual mileage summary in your Tax Summary document.' },
                { q: 'What if I drove for both Uber and DoorDash in 2026?', a: 'Report all income combined on one Schedule C (if same business activity) or on separate Schedule Cs. You can only claim mileage once per mile — not double. Track total business miles across all platforms and claim them once on Schedule C Part IV.' },
              ].map((item, i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 14, marginBottom: 14 }}>
                  <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontSize: 14, marginBottom: 6 }}>Q: {item.q}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>{item.a}</div>
                </div>
              ))}

              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #e2e5e9', borderRadius: 4, padding: 14, fontSize: 12, color: '#6c757d', lineHeight: 1.6 }}>
                 <strong>Disclaimer:</strong> Informational purposes only. Not affiliated with Uber or the IRS. Consult a licensed CPA for your specific situation.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            <a href="/uber" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 6, padding: 20, textAlign: 'center' as const }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}></div>
                <div style={{ fontWeight: 800, color: '#fff', marginBottom: 6 }}>Uber Tax Calculator</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>All 51 states · Quarterly schedule</div>
                <div style={{ background: '#B22234', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Calculate Now →</div>
              </div>
            </a>
            <div style={{ background: '#0d1b3e', border: '2px dashed #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderBottom: '1px solid #e2e5e9', fontSize: 10, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' as const }}>Sponsored</div>
              <div style={{ padding: 16 }}>
                <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 4, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic' }}>Ad image here</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 6 }}>TurboTax Self-Employed</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', marginBottom: 14, lineHeight: 1.6 }}>Handles 1099-K, 1099-NEC, mileage, and the new 2026 tips deduction automatically.</div>
                <div style={{ background: '#B22234', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const }}>Start Free →</div>
                <div style={{ fontSize: 10, color: '#c4c9d4', marginTop: 5, textAlign: 'center' as const }}>Affiliate link</div>
              </div>
            </div>
            <div style={{ background: '#0d1b3e', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: 'rgba(255,255,255,0.85)', padding: '10px 16px' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const }}> Related</span>
              </div>
              {[
                { label: ' DoorDash Tax Guide', href: '/blog/doordash-taxes-2026' },
                { label: ' Quarterly Deadlines', href: '/blog/quarterly-taxes-gig-workers' },
                { label: ' Lyft Tax Calculator', href: '/lyft' },
                { label: ' W-2 vs 1099', href: '/blog/w2-vs-1099-guide-2026' },
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
