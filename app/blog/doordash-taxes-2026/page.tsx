import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'
import DoorDashInlineCalc from './DoorDashInlineCalc'

export const metadata: Metadata = {
  title: 'DoorDash Taxes 2026: $40K = $8,852 Owed — Free Calculator',
  description: 'DoorDash drivers on $40K owe $8,852 in 2026 taxes. Free calculator — mileage 72.5¢/mi, tips up to $25K deductible. All 50 states.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/doordash-taxes-2026' },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much tax does DoorDash take out in 2026?","acceptedAnswer":{"@type":"Answer","text":"DoorDash does not take out any taxes. Dashers are 1099 contractors responsible for self-employment tax (15.3%) and income tax. On $40,000 net income, total federal tax is approximately $8,852."}},{"@type":"Question","name":"What is the DoorDash mileage deduction for 2026?","acceptedAnswer":{"@type":"Answer","text":"The IRS standard mileage rate for 2026 is 72.5 cents per mile. A Dasher driving 20,000 miles earns a $14,500 deduction. This is typically the largest tax deduction available to delivery drivers."}},{"@type":"Question","name":"When does DoorDash send a 1099 for 2026?","acceptedAnswer":{"@type":"Answer","text":"DoorDash sends 1099-NEC forms by January 31, 2027 for earnings in 2026. You receive a 1099-NEC if you earned over $2,000 under the OBBBA 2026 threshold. Access it via the DoorDash driver portal or Stripe Express."}},{"@type":"Question","name":"Does the No Tax on Tips law apply to DoorDash drivers in 2026?","acceptedAnswer":{"@type":"Answer","text":"Yes. Under the OBBBA 2026, eligible delivery drivers can deduct up to $25,000 in tips from federal taxable income. If you earned $8,000 in tips, that amount is fully excluded from your federal taxable income."}},{"@type":"Question","name":"Is the QBI deduction available for DoorDash drivers in 2026?","acceptedAnswer":{"@type":"Answer","text":"Yes and it is now permanent under OBBBA. The 20% Qualified Business Income deduction lets you deduct 20% of net DoorDash profit. On $30,000 net income that is a $6,000 deduction."}},{"@type":"Question","name":"How much should I set aside for DoorDash taxes?","acceptedAnswer":{"@type":"Answer","text":"Set aside 25 to 30% of your net DoorDash income. In high-tax states like California or New York, set aside 30 to 35%. This covers 15.3% SE tax plus federal income tax."}},{"@type":"Question","name":"Does DoorDash report my income to the IRS?","acceptedAnswer":{"@type":"Answer","text":"Yes. DoorDash sends your 1099-NEC directly to the IRS with your SSN or EIN. The IRS matches this against your tax return. All income must be reported even without a 1099-NEC."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"DoorDash Taxes 2026","item":"https://www.gigwisetax.com/blog/doordash-taxes-2026"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"DoorDash Taxes 2026: How Much Do You Owe? Free Calculator","datePublished":"2026-01-01","dateModified":"2026-05-21","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/doordash-taxes-2026"}}'

export default function DoorDashTaxGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
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
            {' › '}
            <a href="/blog" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Blog</a>
            {' › '}
            <span style={{ color: '#C8D8EC' }}>DoorDash Taxes 2026</span>
          </nav>

          <h1
            itemProp="headline"
            style={{ fontSize: 'clamp(22px,5vw,24px)', fontWeight: 900, lineHeight: 1.3, color: '#C8D8EC', margin: '0 0 16px' }}
          >
            DoorDash Taxes 2026: How Much Do You Owe?
          </h1>

          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <span>Last updated: May 2026</span>
            <span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span>
            <span>·</span>
            <span>{'~9 min read · 2,200 words'}</span>
          </div>
        </header>

        {/* ANSWER-FIRST */}
        <section id="answer">
          <div style={{ background: 'rgba(232,184,75,0.07)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 10, padding: '18px 22px', marginBottom: 28 }}>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#C8D8EC' }}>
              {'DoorDash drivers pay 15.3% self-employment tax plus federal income tax. On $40,000 net income: $5,652 SE tax + $3,200 federal income tax = $8,852 total. Quarterly payment: $2,213. Set aside 25% of every DoorDash payment. The 2026 mileage rate is 72.5 cents per mile — your largest deduction.'}
            </p>
          </div>
        </section>

        {/* KEY TAKEAWAYS */}
        <section id="key-takeaways">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8b84b', margin: '0 0 14px' }}>
            Key Takeaways
          </h2>
          <ul style={{ margin: '0 0 32px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: '#C8D8EC' }}>
            <li>{'DoorDash drivers on $40,000 net income owe approximately $8,852 in total federal tax'}</li>
            <li>{'2026 IRS mileage rate is 72.5 cents per mile — 20,000 miles = $14,500 deduction'}</li>
            <li>{'Tips up to $25,000 are federally deductible under the OBBBA 2026'}</li>
            <li>{'Set aside 25 to 30% of every payment for quarterly estimated taxes'}</li>
            <li>{'Quarterly payments due: Apr 15, Jun 16, Sep 15, Jan 15'}</li>
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
              {'Self-employed individuals must pay estimated taxes quarterly if they expect to owe at least $1,000 in federal tax for the year.'}
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
            <li>{'SE tax applies on net profit above $400 per year'}</li>
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
            {'The IRS standard mileage rate for 2026 is 72.5 cents per mile driven for business. This is the highest rate in years. Track every mile from the moment you accept a delivery to drop-off — not just miles with food in the car.'}
          </p>

          <div style={{ overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 400 }}>
              <thead>
                <tr style={{ background: 'rgba(232,184,75,0.12)', borderBottom: '2px solid rgba(232,184,75,0.3)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Miles Driven</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>Deduction (72.5¢)</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>Tax Saved (22%)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['5,000', '$3,625', '$798'],
                  ['10,000', '$7,250', '$1,595'],
                  ['15,000', '$10,875', '$2,393'],
                  ['20,000', '$14,500', '$3,190'],
                ].map(([miles, ded, saved], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>{miles}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'right', color: 'rgba(255,255,255,0.85)' }}>{ded}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'right', color: 'rgba(255,255,255,0.85)' }}>{saved}</td>
                  </tr>
                ))}
                <tr style={{ background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }}>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>25,000</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>$18,125</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>$3,988</td>
                </tr>
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
            <li><strong style={{ color: '#C8D8EC' }}>{'Mileage (72.5 cents/mile)'}</strong>{' — Every delivery mile from pickup to drop-off plus en-route miles. Most Dashers drive 10,000 to 25,000 miles per year.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Phone bill (business %)'}</strong>{' — Deduct the business-use percentage. Most Dashers use 60 to 80% for business. On a $80/month plan that is $576 to $768 per year.'}</li>
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
            {'Pay quarterly if you expect to owe $1,000 or more. Use IRS Direct Pay at irs.gov/payments. Missing a deadline triggers an underpayment penalty of approximately 7% annualized.'}
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
                  ['Q2 2026', 'Apr – May', 'June 16, 2026'],
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
            What Changed for DoorDash Drivers Under the OBBBA 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'The One Big Beautiful Bill Act introduced major changes for gig workers starting in 2026. These are the five most important for Dashers.'}
          </p>

          <ul style={{ margin: '0 0 28px', paddingLeft: 20, lineHeight: 1.95, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li><strong style={{ color: '#C8D8EC' }}>{'No Tax on Tips — up to $25,000'}</strong>{' — Tips you earn are now federally deductible up to $25,000. Earn $8,000 in tips? That full amount excluded from federal taxable income.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'QBI Deduction — now permanent'}</strong>{' — 20% of net DoorDash profit deductible. On $30,000 net that is $6,000 off your taxable income. Was expiring after 2025.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'1099-NEC threshold raised to $2,000'}</strong>{' — DoorDash only issues a 1099-NEC if you earned $2,000 or more, up from $600. All income is still taxable regardless.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'100% bonus depreciation restored'}</strong>{' — Equipment (phone mount, bags, dash cam) fully deductible in the year of purchase. No multi-year depreciation schedule.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Mileage rate: 72.5 cents per mile'}</strong>{' — Up from 70 cents in 2025. Driving 15,000 miles = $10,875 deduction.'}</li>
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
              a: 'DoorDash does not take out any taxes. Dashers are 1099 contractors responsible for self-employment tax (15.3%) and income tax. On $40,000 net income, total federal tax is approximately $8,852.',
            },
            {
              q: 'What is the DoorDash mileage deduction for 2026?',
              a: 'The IRS standard mileage rate is 72.5 cents per mile. Driving 20,000 miles gives you a $14,500 deduction — typically the largest single deduction for delivery drivers.',
            },
            {
              q: 'When does DoorDash send a 1099 for 2026?',
              a: 'DoorDash sends 1099-NEC forms by January 31, 2027. Under OBBBA 2026, the threshold is $2,000 (up from $600). All income is taxable even without a 1099-NEC.',
            },
            {
              q: 'Does the No Tax on Tips law apply to DoorDash drivers in 2026?',
              a: 'Yes. Under OBBBA 2026, eligible delivery drivers can deduct up to $25,000 in tips from federal taxable income. Earn $8,000 in tips and that full amount is excluded.',
            },
            {
              q: 'Is the QBI deduction available for DoorDash drivers in 2026?',
              a: 'Yes and it is now permanent under OBBBA. The 20% Qualified Business Income deduction lets you deduct 20% of net profit. On $30,000 that is $6,000 off taxable income.',
            },
            {
              q: 'How much should I set aside for DoorDash taxes?',
              a: 'Set aside 25 to 30% of net DoorDash income. In high-tax states like California or New York, set aside 30 to 35%. The mileage deduction can significantly reduce this amount.',
            },
            {
              q: 'Does DoorDash report my income to the IRS?',
              a: 'Yes. DoorDash sends your 1099-NEC directly to the IRS. The IRS matches it against your return. Not reporting DoorDash income results in an IRS notice and penalties.',
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

        <AuthorBox />
      </article>
    </>
  )
}
