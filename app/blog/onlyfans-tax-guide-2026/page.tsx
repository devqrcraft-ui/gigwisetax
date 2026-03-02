// ================================================================
// BLOG POST TEMPLATE — shared layout
// All posts use this same structure with unique content
// ================================================================

// ----------------------------------------------------------------
// FILE: app/blog/onlyfans-tax-guide-2026/page.tsx  ← USA #1 niche
// ----------------------------------------------------------------

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OnlyFans Tax Guide 2026 — How to File as a Creator (USA) | GigWiseTax',
  description: 'Complete OnlyFans tax guide for USA creators in 2026. How to file 1099-NEC, calculate SE tax (15.3%), claim deductions for equipment and home office, and pay quarterly taxes. Free calculator included.',
  keywords: 'OnlyFans taxes 2026, OnlyFans tax guide USA, OnlyFans 1099 how to file, OnlyFans self employment tax, OnlyFans quarterly taxes',
  alternates: { canonical: 'https://gigwisetax.com/blog/onlyfans-tax-guide-2026' },
  openGraph: {
    title: 'OnlyFans Tax Guide 2026 — USA Creator Tax Filing Guide',
    description: 'How OnlyFans creators pay taxes in 2026. SE tax, deductions, quarterly payments, and how to file Schedule C.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much tax do OnlyFans creators pay?', acceptedAnswer: { '@type': 'Answer', text: 'OnlyFans creators pay 15.3% self-employment tax plus federal income tax (10-37%) plus any applicable state income tax. On $50,000 net profit, expect to owe approximately $18,000-$22,000 in total taxes. Set aside 25-35% of every payment.' } },
    { '@type': 'Question', name: 'Does OnlyFans withhold taxes?', acceptedAnswer: { '@type': 'Answer', text: 'No. OnlyFans does not withhold any taxes. Creators are classified as independent contractors (1099). You must calculate and pay your own federal, state, Social Security, and Medicare taxes. Pay quarterly using IRS Form 1040-ES.' } },
    { '@type': 'Question', name: 'What can OnlyFans creators deduct on taxes?', acceptedAnswer: { '@type': 'Answer', text: 'OnlyFans creators can deduct: camera and filming equipment, home office (dedicated space), phone and internet (business %), costumes and props used for content, editing software subscriptions, marketing and advertising, platform fees, and health insurance premiums.' } },
    { '@type': 'Question', name: 'When are OnlyFans quarterly taxes due in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Q1: April 15, 2026. Q2: June 16, 2026. Q3: September 15, 2026. Q4: January 15, 2027. Pay using IRS Form 1040-ES online at IRS.gov.' } },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'OnlyFans Tax Guide 2026 — How to File as a Creator (USA)',
  datePublished: '2026-01-22',
  dateModified: '2026-01-22',
  author: { '@type': 'Organization', name: 'GigWiseTax' },
  publisher: { '@type': 'Organization', name: 'GigWiseTax', url: 'https://gigwisetax.com' },
}

export default function OnlyFansTaxGuide() {
  const prose = { fontSize: 14, color: '#374151', lineHeight: 1.8, textAlign: 'justify' as const, marginBottom: 16 }
  const h2 = { fontSize: 20, fontWeight: 800, color: '#1a1a2e', marginBottom: 12, marginTop: 28 }
  const h3 = { fontSize: 17, fontWeight: 700, color: '#1a1a2e', marginBottom: 10, marginTop: 20 }
  const card = { background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const, boxShadow: '0 1px 6px rgba(0,0,0,.05)' }
  const cardHd = { background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}/>

      <div style={{ background: '#eef0f4', minHeight: '100vh' }}>
        {/* HERO */}
        <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
            <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
              <span style={{ margin: '0 8px' }}>›</span>
              <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a>
              <span style={{ margin: '0 8px' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,.7)' }}>OnlyFans Tax Guide 2026</span>
            </nav>
            <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
              <span style={{ background: '#B22234', color: '#fff', fontSize: 11, padding: '3px 10px', borderRadius: 3, fontWeight: 700 }}>USA #1</span>
              <span style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)', fontSize: 11, padding: '3px 10px', borderRadius: 3 }}>January 22, 2026</span>
              <span style={{ background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.5)', fontSize: 11, padding: '3px 10px', borderRadius: 3 }}>9 min read</span>
            </div>
            <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.5px', margin: '0 0 14px' }}>
              ⭐ OnlyFans Tax Guide 2026 — How to File as a Creator (USA)
            </h1>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, textAlign: 'justify', maxWidth: 760, margin: 0 }}>
              The complete guide for OnlyFans creators in the USA. How to file your 1099-NEC, calculate self-employment tax,
              claim every deduction available to content creators, and pay your quarterly estimated taxes in 2026.
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 48px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 24 }} className="blog-grid">
          <div>
            {/* CTA BOX */}
            <div style={{ background: '#1a1a2e', borderRadius: 6, padding: 20, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' as const }}>
              <div>
                <div style={{ fontWeight: 700, color: '#fff', marginBottom: 4 }}>⭐ Calculate Your OnlyFans Taxes Instantly</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Free calculator — SE tax + federal + state + quarterly schedule</div>
              </div>
              <a href="/onlyfans" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#B22234', color: '#fff', padding: '10px 20px', borderRadius: 4, fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>Open Calculator →</div>
              </a>
            </div>

            <div style={{ ...card, padding: 0 }}>
              <div style={{ padding: 28 }}>

                {/* KEY FACTS */}
                <div style={{ background: '#fff5f5', border: '1px solid #fecaca', borderRadius: 6, padding: 16, marginBottom: 24 }}>
                  <div style={{ fontWeight: 800, color: '#B22234', marginBottom: 10, fontSize: 15 }}>📌 Key Facts: OnlyFans Taxes 2026</div>
                  <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: '#374151', lineHeight: 2 }}>
                    <li><strong>OnlyFans does NOT withhold taxes</strong> — you pay them yourself</li>
                    <li><strong>Self-employment tax: 15.3%</strong> on net earnings (12.4% SS + 2.9% Medicare)</li>
                    <li><strong>1099-NEC issued at $600+</strong> — but all income is taxable regardless</li>
                    <li><strong>Set aside 25–35%</strong> of every payment for taxes</li>
                    <li><strong>Quarterly payments required</strong> if you expect to owe $1,000+ in taxes</li>
                    <li><strong>Schedule C</strong> reports your income and deductions to the IRS</li>
                  </ul>
                </div>

                <h2 style={h2}>How OnlyFans Taxes Work in 2026</h2>
                <p style={prose}>
                  OnlyFans classifies all creators as <strong>independent contractors</strong>, not employees.
                  This means the platform does not withhold any federal income tax, state income tax,
                  Social Security taxes, or Medicare taxes from your earnings.
                  Every dollar you earn — from subscriptions, tips, pay-per-view content, and any other creator income —
                  is <strong>self-employment income</strong> that you must report and pay taxes on yourself.
                </p>
                <p style={prose}>
                  As a self-employed creator, you pay <strong>two types of federal taxes</strong>:
                  the self-employment tax (15.3% of net earnings) and federal income tax (10–37% depending on your total income).
                  Additionally, if you live in a state with state income tax, you also owe state taxes.
                  In total, most OnlyFans creators with $30,000–$100,000 in net income should expect to pay 30–40% of net earnings in combined taxes.
                </p>

                <h2 style={h2}>What Is Self-Employment Tax? (15.3%)</h2>
                <p style={prose}>
                  The self-employment (SE) tax is 15.3% and covers your <strong>Social Security and Medicare contributions</strong>.
                  Traditional employees split these costs with their employer — each paying 7.65%.
                  As a self-employed creator, you pay the full 15.3% yourself.
                </p>
                <p style={prose}>
                  However, the IRS allows you to <strong>deduct 50% of your SE tax</strong> when calculating your adjusted gross income.
                  This reduces your federal income tax bill. The SE tax applies to 92.35% of your net earnings
                  (net = gross OnlyFans income minus business deductions).
                </p>

                <div style={{ background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                  <div style={{ fontWeight: 700, color: '#0369a1', marginBottom: 8 }}>💡 OnlyFans Tax Example (2026)</div>
                  <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.8 }}>
                    <strong>Net OnlyFans income:</strong> $60,000<br/>
                    <strong>SE tax base:</strong> $60,000 × 92.35% = $55,410<br/>
                    <strong>SE tax (15.3%):</strong> $8,478<br/>
                    <strong>SE deduction (50%):</strong> -$4,239<br/>
                    <strong>Federal taxable income:</strong> $60,000 - $4,239 = $55,761<br/>
                    <strong>Federal income tax (22%):</strong> $12,267<br/>
                    <strong>Total federal taxes:</strong> $8,478 + $12,267 = <strong style={{ color: '#B22234' }}>$20,745</strong><br/>
                    <em style={{ fontSize: 11, color: '#6c757d' }}>+ state income tax if applicable</em>
                  </div>
                </div>

                <h2 style={h2}>2026 Quarterly Tax Deadlines for OnlyFans Creators</h2>
                <p style={prose}>
                  If you expect to owe $1,000 or more in taxes for 2026, you must make quarterly estimated tax payments using <strong>IRS Form 1040-ES</strong>.
                  Missing these deadlines results in IRS underpayment penalties — typically 7–8% annualized on the underpaid amount.
                </p>
                <table style={{ width: '100%', borderCollapse: 'collapse' as const, marginBottom: 20, fontSize: 13 }}>
                  <thead>
                    <tr style={{ background: '#1a1a2e' }}>
                      {['Quarter','Income Period','Due Date','Days Left'].map(h => (
                        <th key={h} style={{ padding: '10px 14px', fontWeight: 700, color: 'rgba(255,255,255,.6)', textTransform: 'uppercase' as const, textAlign: 'left' as const, fontSize: 11 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { q: 'Q1 2026', p: 'Jan 1 – Mar 31', due: 'April 15, 2026', d: 45, now: true },
                      { q: 'Q2 2026', p: 'Apr 1 – May 31', due: 'June 16, 2026', d: 107, now: false },
                      { q: 'Q3 2026', p: 'Jun 1 – Aug 31', due: 'Sept 15, 2026', d: 198, now: false },
                      { q: 'Q4 2026', p: 'Sep 1 – Dec 31', due: 'Jan 15, 2027', d: 320, now: false },
                    ].map((d, i) => (
                      <tr key={d.q} style={{ borderBottom: '1px solid #f0f1f3', background: i === 0 ? '#fff9f9' : '#fff' }}>
                        <td style={{ padding: '11px 14px', fontWeight: 800, color: i === 0 ? '#B22234' : '#1a1a2e' }}>
                          {i === 0 && <span style={{ background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 4px', borderRadius: 2, marginRight: 5 }}>NOW</span>}
                          {d.q}
                        </td>
                        <td style={{ padding: '11px 14px', color: '#374151' }}>{d.p}</td>
                        <td style={{ padding: '11px 14px', fontWeight: 700, color: i === 0 ? '#B22234' : '#1a1a2e' }}>{d.due}</td>
                        <td style={{ padding: '11px 14px' }}>
                          <span style={{ background: i === 0 ? '#fee2e2' : '#f0f4f8', color: i === 0 ? '#B22234' : '#374151', padding: '3px 10px', borderRadius: 12, fontSize: 12, fontWeight: 700 }}>{d.d} days</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h2 style={h2}>Top Tax Deductions for OnlyFans Creators in 2026</h2>
                <p style={prose}>
                  Deductions are the most powerful tool to reduce your OnlyFans tax bill.
                  The IRS allows you to deduct any <strong>ordinary and necessary business expense</strong>.
                  For content creators, this includes a wide range of expenses — but they must be legitimately for business purposes.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }} className="form-grid">
                  {[
                    { icon: '💻', name: 'Camera & Equipment', detail: '100% deductible. Ring lights, cameras, tripods, microphones, gimbal stabilizers.' },
                    { icon: '🏠', name: 'Home Office Deduction', detail: 'Dedicated workspace only. $5/sq ft (up to 300 sq ft) or actual expense method.' },
                    { icon: '📱', name: 'Phone & Internet', detail: 'Business use percentage. If you use phone 70% for OnlyFans, deduct 70% of the bill.' },
                    { icon: '🎬', name: 'Editing Software', detail: 'Adobe Premiere, Final Cut Pro, Canva Pro, CapCut subscription. 100% deductible.' },
                    { icon: '💄', name: 'Costumes & Props', detail: 'Outfits, lingerie, wigs, makeup used exclusively for content creation. Keep receipts.' },
                    { icon: '📣', name: 'Marketing & Ads', detail: 'Social media ads, Instagram promotions, OnlyFans PPV promotions, Linktree paid.' },
                    { icon: '🏥', name: 'Health Insurance', detail: '100% deductible on Schedule 1 if not eligible for employer coverage.' },
                    { icon: '🏦', name: 'Platform Fees', detail: "OnlyFans takes 20% fee. You can deduct these fees as business expenses." },
                  ].map(d => (
                    <div key={d.name} style={{ border: '1px solid #e2e5e9', borderRadius: 6, padding: 14 }}>
                      <div style={{ fontSize: 20, marginBottom: 6 }}>{d.icon}</div>
                      <div style={{ fontWeight: 700, color: '#1a1a2e', marginBottom: 4, fontSize: 13 }}>{d.name}</div>
                      <div style={{ fontSize: 12, color: '#6c757d', lineHeight: 1.5 }}>{d.detail}</div>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                  <div style={{ fontWeight: 700, color: '#b45309', marginBottom: 8 }}>⚠️ What You CANNOT Deduct</div>
                  <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: '#374151', lineHeight: 1.9 }}>
                    <li>Everyday personal clothing (even if you wear it in content)</li>
                    <li>General grooming, hair, nails (unless exclusively for specific content)</li>
                    <li>Meals (unless a direct business meeting with a collaborator)</li>
                    <li>Gym membership (unless you specifically teach fitness content)</li>
                    <li>Personal travel (unless combined with documented business purpose)</li>
                  </ul>
                </div>

                <h2 style={h2}>How to File Your OnlyFans Taxes Step-by-Step</h2>
                {[
                  { step: '1', title: 'Get Your 1099-NEC from OnlyFans', text: 'If you earned $600 or more, OnlyFans will issue a 1099-NEC by January 31. Log in to your OnlyFans dashboard and download it from the banking section. Even if you earn less than $600, you must still report all income.' },
                  { step: '2', title: 'Calculate Your Net Profit on Schedule C', text: 'Complete IRS Schedule C (Form 1040) to report your OnlyFans income and deduct all eligible business expenses. Net profit = Total income minus all deductions. This is the amount subject to SE tax and income tax.' },
                  { step: '3', title: 'Calculate SE Tax on Schedule SE', text: 'Use Schedule SE to calculate your 15.3% self-employment tax on net earnings. You may deduct 50% of this SE tax from your gross income when calculating federal income tax.' },
                  { step: '4', title: 'File Form 1040 and Pay by April 15', text: 'Complete your Form 1040 federal return. Report Schedule C income, SE tax, and any deductions (health insurance, retirement contributions). File by April 15, 2026 or request an extension (Form 4868).' },
                  { step: '5', title: 'Make Quarterly Payments Going Forward', text: 'To avoid penalties, pay estimated taxes quarterly using IRS Form 1040-ES. Due dates: April 15, June 16, September 15, 2026, and January 15, 2027. Pay online at IRS.gov Direct Pay — free and instant.' },
                ].map(s => (
                  <div key={s.step} style={{ display: 'flex', gap: 16, marginBottom: 16, padding: 16, border: '1px solid #e2e5e9', borderRadius: 6, background: '#f8fafc' }}>
                    <div style={{ width: 32, height: 32, background: '#1a1a2e', color: '#e8b84b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 15, flexShrink: 0 }}>{s.step}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#1a1a2e', marginBottom: 6 }}>{s.title}</div>
                      <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7 }}>{s.text}</div>
                    </div>
                  </div>
                ))}

                <h2 style={h2}>FAQ — OnlyFans Taxes 2026</h2>
                {[
                  { q: 'How much tax do OnlyFans creators pay in 2026?', a: 'Most OnlyFans creators pay 30–40% of net income in combined taxes. This includes 15.3% SE tax, federal income tax (10–37% depending on income), and any state income tax. On $50,000 net profit, expect approximately $18,000–$22,000 in total federal taxes before deductions.' },
                  { q: 'Can OnlyFans see my taxes or report me to the IRS?', a: 'OnlyFans sends your 1099-NEC directly to the IRS with your Social Security Number. The IRS can match your filing against what was reported. Not reporting your OnlyFans income is illegal and will result in IRS penalties, interest, and potential audit.' },
                  { q: 'Do I need to form an LLC for OnlyFans taxes?', a: 'An LLC alone does not reduce your taxes — it only provides liability protection. However, if your OnlyFans net profit exceeds $60,000–$80,000, electing S-Corp status can save significant SE taxes by allowing you to take some income as distributions (not subject to SE tax).' },
                  { q: 'Is OnlyFans income taxable if I live in Texas or Florida?', a: 'Yes — you still pay federal income tax and 15.3% SE tax. Texas and Florida have no state income tax, so you save on that portion. Use our OnlyFans Texas or OnlyFans Florida calculator for the exact estimate.' },
                  { q: 'What if I only made a few hundred dollars on OnlyFans?', a: 'Any self-employment income over $400 must be reported on Schedule C. Even if you earn $500 and OnlyFans does not send you a 1099, the IRS expects you to report and pay taxes on that income. SE tax (15.3%) begins at $400 in net self-employment income.' },
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #f0f1f3', paddingBottom: 16, marginBottom: 16 }}>
                    <div style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 14, marginBottom: 8 }}>Q: {item.q}</div>
                    <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, textAlign: 'justify' }}>{item.a}</div>
                  </div>
                ))}

                <div style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: 14, fontSize: 12, color: '#6c757d', lineHeight: 1.6 }}>
                  ⚠️ <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute tax advice. Tax laws are subject to change. Consult a licensed CPA or tax professional for advice specific to your situation. Visit <a href="https://irs.gov" style={{ color: '#B22234' }}>IRS.gov</a> for official guidance.
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            <a href="/onlyfans" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#1a1a2e', borderRadius: 6, padding: 20, textAlign: 'center' as const }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>⭐</div>
                <div style={{ fontWeight: 800, color: '#fff', marginBottom: 6, fontSize: 15 }}>OnlyFans Tax Calculator</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>All 51 states · Quarterly schedule</div>
                <div style={{ background: '#B22234', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Calculate Now →</div>
              </div>
            </a>

            <div style={{ background: '#fff', border: '2px dashed #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: '#f8fafc', padding: '6px 14px', borderBottom: '1px solid #e2e5e9', fontSize: 10, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' as const }}>Sponsored</div>
              <div style={{ padding: 16 }}>
                <div style={{ background: '#f0f4f8', borderRadius: 4, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic' }}>Ad image here</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#1a1a2e', marginBottom: 6 }}>TurboTax Self-Employed</div>
                <div style={{ fontSize: 13, color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>Handles 1099-NEC and Schedule C. Finds every creator deduction automatically.</div>
                <div style={{ background: '#B22234', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const }}>Start Free →</div>
                <div style={{ fontSize: 10, color: '#c4c9d4', marginTop: 5, textAlign: 'center' as const }}>Affiliate link</div>
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>📌 Related Guides</span>
              </div>
              {[
                { label: '📅 2026 Quarterly Deadlines', href: '/blog/quarterly-taxes-gig-workers' },
                { label: '📋 W-2 vs 1099 Explained', href: '/blog/w2-vs-1099-guide-2026' },
                { label: '🚗 DoorDash Tax Guide', href: '/blog/doordash-taxes-2026' },
                { label: '🛍️ Etsy Seller Tax Guide', href: '/blog/etsy-seller-taxes-2026' },
                { label: '⭐ OnlyFans Calculator', href: '/onlyfans' },
              ].map(l => (
                <a key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '10px 16px', borderBottom: '1px solid #f0f1f3', fontSize: 13, color: '#374151', fontWeight: 500 }}>{l.label}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media(max-width:760px){.blog-grid{grid-template-columns:1fr!important}.form-grid{grid-template-columns:1fr!important}}
        `}</style>
      </div>
    </>
  )
}
