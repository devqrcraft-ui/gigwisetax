import type { Metadata } from 'next'
import TaxFreshness from '@/app/components/TaxFreshness'
import AuthorBox from '@/app/components/AuthorBox'
import DoorDashInlineCalc from './DoorDashInlineCalc'
import { estimateTax, TAX_RULES_2026 } from '@/lib/tax-rules'

const baseline40 = estimateTax(40000, 0, 'single')
const milesForTable = [5000, 10000, 15000, 20000, 25000]
const mileageH1 = (miles: number) => Math.round(miles * TAX_RULES_2026.mileage.h1)
const mileageH2 = (miles: number) => Math.round(miles * TAX_RULES_2026.mileage.h2)
const money = (amount: number) => '$' + amount.toLocaleString('en-US')

export const metadata: Metadata = {
  title: 'DoorDash Taxes 2026: 1099, Mileage & Quarterly Tax Guide',
  description: 'Learn how DoorDash 1099 taxes work in 2026, including self-employment tax, business mileage, quarterly payments, and filing basics. Includes a free calculator.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/doordash-taxes-2026' },
  openGraph: {
    title: 'DoorDash Taxes 2026: 1099, Mileage & Quarterly Tax Guide',
    description: 'Learn how DoorDash 1099 taxes work in 2026, including self-employment tax, business mileage, quarterly payments, and filing basics. Includes a free calculator.',
    url: 'https://www.gigwisetax.com/blog/doordash-taxes-2026',
    siteName: 'GigWiseTax',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DoorDash Taxes 2026: 1099, Mileage & Quarterly Tax Guide',
    description: 'Learn how DoorDash 1099 taxes work in 2026, including self-employment tax, business mileage, quarterly payments, and filing basics. Includes a free calculator.',
    images: ['/og-image.png'],
  },
}


const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"DoorDash Taxes 2026","item":"https://www.gigwisetax.com/blog/doordash-taxes-2026"}]}'

const articleSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: metadata.title,
  description: metadata.description,
  dateModified: '2026-11-01',
  author: { '@type': 'Organization', name: 'the GigWiseTax Team', url: 'https://www.gigwisetax.com' },
  publisher: { '@type': 'Organization', name: 'GigWiseTax', url: 'https://www.gigwisetax.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.gigwisetax.com/blog/doordash-taxes-2026' },
})

export default function DoorDashTaxGuide() {
  return (
    <>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema }} />

      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        style={{ maxWidth: 780, margin: '0 auto', padding: 'clamp(14px,4vw,28px)', background: '#07111F', color: '#C8D8EC', minHeight: '100vh' }}
      >
        <header>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a>
            <span> › </span>
            <a href="/blog" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Blog</a>
            <span> › </span>
            <span style={{ color: '#C8D8EC' }}>DoorDash Taxes 2026</span>
          </nav>

          <h1
            itemProp="headline"
            style={{ fontSize: 'clamp(22px,5vw,24px)', fontWeight: 900, lineHeight: 1.3, color: '#C8D8EC', margin: '0 0 16px' }}
          >
            DoorDash Taxes 2026: How Much Do You Owe?
          </h1>

          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <span>Last updated: November 1, 2026</span>
            <span>·</span>
            <span>By the GigWiseTax Team</span>
            <span>·</span>
            <span>{'~9 min read · 2,200 words'}</span>
          </div>
        </header>

        {/* ANSWER-FIRST */}
        <section id="answer">
          <div style={{ background: 'rgba(232,184,75,0.07)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 10, padding: '18px 22px', marginBottom: 28 }}>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#C8D8EC' }}>
              A federal-only planning baseline: with $40,000 net profit, Single filing, no mileage or other deductions, and no state tax, the central estimator returns {money(baseline40.se)} SE + {money(baseline40.federal)} federal income tax = <strong>{money(baseline40.total)}</strong> total, or {money(baseline40.quarterly)} per quarter. State tax, mileage, credits, and other income are excluded.
            </p>
          </div>
        </section>

        {/* KEY TAKEAWAYS */}
        <section id="key-takeaways">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8b84b', margin: '0 0 14px' }}>
            Key Takeaways
          </h2>
          <ul style={{ margin: '0 0 32px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: '#C8D8EC' }}>
            <li>{`Federal-only $40,000 Single baseline, before mileage and state tax: ${money(baseline40.total)}.`}</li>
            <li>{`Mileage rate: ${TAX_RULES_2026.mileage.h1 * 100}¢/mile Jan–Jun and ${TAX_RULES_2026.mileage.h2 * 100}¢/mile Jul–Dec; the deduction depends on when miles were driven.`}</li>
            <li>Potential tip or QBI deductions depend on current eligibility rules and are not included in this calculator.</li>
            <li>{`The general 2026 1099-NEC threshold is ${money(TAX_RULES_2026.form1099Threshold.year2026)}; all taxable income remains reportable.`}</li>
            <li>Estimated payments depend on withholding, credits, and safe-harbor rules; no universal set-aside percentage applies.</li>
          </ul>
        </section>

        {/* TOC */}
        <section id="toc">
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '18px 22px', marginBottom: 32 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#C8D8EC', marginBottom: 12 }}>Table of Contents</div>
            <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 13 }}>
              <li><a href="#se-tax" style={{ color: '#e8b84b', textDecoration: 'none' }}>DoorDash Self-Employment Tax in 2026</a></li>
              <li><a href="#mileage-rate" style={{ color: '#e8b84b', textDecoration: 'none' }}>2026 IRS Mileage Rate for DoorDash Drivers</a></li>
              <li><a href="#top-deductions" style={{ color: '#e8b84b', textDecoration: 'none' }}>Top Deductions for DoorDash Drivers</a></li>
              <li><a href="#quarterly-deadlines" style={{ color: '#e8b84b', textDecoration: 'none' }}>2026 Quarterly Tax Deadlines</a></li>
              <li><a href="#new-tax-laws" style={{ color: '#e8b84b', textDecoration: 'none' }}>2026 New Tax Laws — OBBBA</a></li>
              <li><a href="#calculator" style={{ color: '#e8b84b', textDecoration: 'none' }}>DoorDash Tax Calculator</a></li>
              <li><a href="#faq" style={{ color: '#e8b84b', textDecoration: 'none' }}>Frequently Asked Questions</a></li>
            </ol>
          </div>
        </section>

        {/* SECTION 1 */}
        <section id="se-tax">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            How Much Self-Employment Tax Do DoorDash Drivers Pay in 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'DoorDash classifies all Dashers as independent contractors. You receive a 1099-NEC, not a W-2. That means you pay the full 15.3% self-employment tax on net earnings — 12.4% Social Security plus 2.9% Medicare. A W-2 employee pays only 7.65% because their employer covers the other half.'}
          </p>

          <blockquote style={{ borderLeft: '3px solid #e8b84b', margin: '0 0 24px', padding: '12px 18px', background: 'rgba(232,184,75,0.05)', borderRadius: '0 8px 8px 0' }}>
            <p style={{ margin: 0, fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
              {'Federal estimated payments may be required when expected tax due after withholding and refundable credits reaches the IRS threshold; withholding and prior-year safe-harbor rules can change the result.'}
            </p>
            <p style={{ margin: '8px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
              {'— '}
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color: '#e8b84b', textDecoration: 'none' }}>
                IRS.gov — Self-Employed Tax Center
              </a>
            </p>
          </blockquote>

          <ul style={{ margin: '0 0 28px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'DoorDash does NOT withhold taxes — you are fully responsible'}</li>
            <li>{'SE tax applies once net earnings from self-employment reach $400 per year, and then to all of it'}</li>
            <li>{'You can deduct 50% of SE tax on Schedule 1, reducing taxable income'}</li>
            <li>{'NAICS Code 492000 — Couriers and Messengers for Schedule C'}</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section id="mileage-rate">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            What Is the 2026 IRS Mileage Rate for DoorDash Drivers?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {`The 2026 IRS standard mileage rates are ${TAX_RULES_2026.mileage.h1 * 100} cents per mile for January–June and ${TAX_RULES_2026.mileage.h2 * 100} cents from July 1 for qualifying business miles. Keep a contemporaneous log and record when each mile was driven.`}
          </p>

          <div style={{ overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 400 }}>
              <thead>
                <tr style={{ background: 'rgba(232,184,75,0.12)', borderBottom: '2px solid rgba(232,184,75,0.3)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Miles Driven</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>Deduction if H1</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>Deduction if H2</th>
                </tr>
              </thead>
              <tbody>
                {milesForTable.map((miles, i) => (
                  <tr key={miles} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', ...(i === milesForTable.length - 1 ? { background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' } : {}) }}>
                    <td style={{ padding: '10px 14px', color: i === milesForTable.length - 1 ? '#e8b84b' : 'rgba(255,255,255,0.85)', fontWeight: i === milesForTable.length - 1 ? 700 : 400 }}>{miles.toLocaleString('en-US')}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'right', color: i === milesForTable.length - 1 ? '#e8b84b' : 'rgba(255,255,255,0.85)', fontWeight: i === milesForTable.length - 1 ? 700 : 400 }}>{money(mileageH1(miles))}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'right', color: i === milesForTable.length - 1 ? '#e8b84b' : 'rgba(255,255,255,0.85)', fontWeight: i === milesForTable.length - 1 ? 700 : 400 }}>{money(mileageH2(miles))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="top-deductions">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            What Can DoorDash Drivers Deduct in 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'These are the most valuable deductions for Dashers. Track every expense with receipts or a mileage app throughout the year — not at tax time.'}
          </p>

          <ol style={{ margin: '0 0 20px', paddingLeft: 20, lineHeight: 1.95, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li><strong style={{ color: '#C8D8EC' }}>{`Mileage (${TAX_RULES_2026.mileage.h1 * 100}¢/mile Jan–Jun; ${TAX_RULES_2026.mileage.h2 * 100}¢/mile Jul–Dec)`}</strong>{' — Record qualifying business miles and use the applicable rate for the date driven.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Phone bill (business use)'}</strong>{' — Deduct only the documented business-use portion; keep records.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Insulated bags and equipment'}</strong>{' — Hot bags, drink carriers, any gear purchased specifically for DoorDash deliveries. 100% deductible under OBBBA bonus depreciation.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Parking and tolls'}</strong>{' — Any fees incurred while on delivery. Keep all receipts or use an expense tracking app.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Health insurance premiums'}</strong>{' — 100% deductible on Schedule 1 if not eligible for employer coverage.'}</li>
          </ol>

          <ul style={{ margin: '0 0 28px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'Use the standard mileage method OR actual expense method — not both'}</li>
            <li>{'If you switch from standard mileage to actual expenses in year 2+, depreciation rules apply'}</li>
            <li>{'Solo 401(k) contributions up to $23,500 reduce taxable income dollar-for-dollar'}</li>
          </ul>
        </section>

        {/* SECTION 4 */}
        <section id="quarterly-deadlines">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            When Are the 2026 Quarterly Tax Deadlines for Dashers?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'Estimated-payment requirements depend on expected tax after withholding, credits, and prior-year safe-harbor rules. The IRS underpayment interest rate is ' + (TAX_RULES_2026.underpaymentRateQ4_2026 * 100) + '% annualized for Q4 2026, but this is not a flat penalty on every missed payment; the actual charge depends on timing and amount. See IRS Direct Pay and the '}
            <a href={TAX_RULES_2026.sources.underpaymentRate} target="_blank" rel="nofollow noopener noreferrer" style={{ color: '#e8b84b', textDecoration: 'none' }}>IRS quarterly rate notice</a>.
          </p>

          <div style={{ overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 360 }}>
              <thead>
                <tr style={{ background: 'rgba(232,184,75,0.12)', borderBottom: '2px solid rgba(232,184,75,0.3)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Quarter</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Period</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Q1 2026', 'Jan – Mar', 'April 15, 2026'],
                  ['Q2 2026', 'Apr – May', 'June 15, 2026'],
                  ['Q3 2026', 'Jun – Aug', 'September 15, 2026'],
                ].map(([q, period, due], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{q}</td>
                    <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>{period}</td>
                    <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>{due}</td>
                  </tr>
                ))}
                <tr style={{ background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }}>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>Q4 2026</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>Sep – Dec</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>January 15, 2027</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 28px', color: 'rgba(255,255,255,0.85)' }}>
            {'See the full guide: '}
            <a href="/blog/quarterly-taxes-gig-workers" style={{ color: '#e8b84b', textDecoration: 'none' }}>Quarterly Taxes for Gig Workers — Step-by-Step 2026</a>
            {'.'}
          </p>
        </section>

        {/* SECTION 5 */}
        <section id="new-tax-laws">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            Tax Rules This Calculator Does Not Model
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'Federal tax laws include deductions and elections that can depend on eligibility, income limits, and filing details. The calculator below does not model every deduction, credit, state schedule, or election; verify current IRS instructions before claiming an item.'}
          </p>

          <ul style={{ margin: '0 0 28px', paddingLeft: 20, lineHeight: 1.95, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li><strong style={{ color: '#C8D8EC' }}>{'Tip and QBI deductions'}</strong>{' — Eligibility, limits, and interactions depend on current IRS rules. This calculator does not model these deductions; review official instructions before claiming them.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'1099-NEC reporting threshold'}</strong>{` — The general 2026 threshold is ${money(TAX_RULES_2026.form1099Threshold.year2026)}; all taxable income remains reportable regardless of receiving a form.`}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Equipment deductions'}</strong>{' — Business-use, depreciation, and expensing rules depend on eligibility and elections; this calculator does not model them.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Mileage rates'}</strong>{` — ${TAX_RULES_2026.mileage.h1 * 100}¢ per business mile Jan–Jun and ${TAX_RULES_2026.mileage.h2 * 100}¢ Jul–Dec; the amount depends on qualifying miles and when driven.`}</li>
          </ul>
        </section>

        {/* SECTION 6 — CALCULATOR */}
        <section id="calculator">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            DoorDash Tax Calculator 2026
          </h2>
          <DoorDashInlineCalc />
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '32px 0 20px' }}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q: 'How much tax does DoorDash take out in 2026?',
              a: `DoorDash generally does not withhold federal income or self-employment taxes for independent contractors. A federal-only $40,000 net-profit, Single-filer baseline with no mileage is ${money(baseline40.total)}; state tax and other return details are excluded.`,
            },
            {
              q: 'What is the DoorDash mileage deduction for 2026?',
              a: `The 2026 standard business mileage rates are ${TAX_RULES_2026.mileage.h1 * 100}¢/mile for January–June and ${TAX_RULES_2026.mileage.h2 * 100}¢/mile from July. The deduction depends on qualifying business miles and when they were driven.`,
            },
            {
              q: 'When does DoorDash send a 1099 for 2026?',
              a: `The general 2026 1099-NEC threshold for nonemployee compensation is ${money(TAX_RULES_2026.form1099Threshold.year2026)}. All taxable income remains reportable even if no information return arrives.`,
            },
            {
              q: 'Does the No Tax on Tips law apply to DoorDash drivers in 2026?',
              a: 'Some tip income may qualify for a federal deduction, subject to eligibility and limits. This calculator does not model tip-related deductions; check current IRS instructions before claiming one.',
            },
            {
              q: 'Is the QBI deduction available for DoorDash drivers in 2026?',
              a: 'A QBI deduction may apply depending on eligibility, taxable-income limits, and other rules. This calculator does not include QBI; consult current IRS instructions or a tax professional for your situation.',
            },
            {
              q: 'How much should I set aside for DoorDash taxes?',
              a: 'There is no universal set-aside percentage. Estimate your full-year tax using net profit, filing status, other income, state, withholding, and eligible deductions; compare payments with applicable safe-harbor rules.',
            },
            {
              q: 'Does DoorDash report my income to the IRS?',
              a: 'Payers may file applicable information returns with tax authorities. You remain responsible for reporting all taxable income, whether or not you receive a form.',
            },
          ].map(({ q, a }, i) => (
            <div key={i} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#C8D8EC', margin: '0 0 8px' }}>{q}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>{a}</p>
            </div>
          ))}
        </section>

        {/* RELATED ARTICLES */}
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 16px' }}>
            Related Articles
          </h2>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 14 }}>
            <li><a href="/blog/uber-tax-guide-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>Uber Driver Tax Guide 2026</a></li>
            <li><a href="/blog/quarterly-taxes-gig-workers" style={{ color: '#e8b84b', textDecoration: 'none' }}>Quarterly Taxes for Gig Workers: Deadlines and How to Pay</a></li>
            <li><a href="/blog/1099-vs-w2-taxes-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>1099 vs W-2 Taxes 2026: Which Costs You More?</a></li>
          </ul>
        </section>

        <TaxFreshness />
<AuthorBox />
      </article>
    </>
  )
}
