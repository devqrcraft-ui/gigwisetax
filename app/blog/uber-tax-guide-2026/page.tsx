import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Uber Driver Tax Guide 2026 — How to File Your 1099',
  description: 'Uber drivers on $35K owe $7,750 in 2026 taxes. SE tax 15.3%, mileage 72.5¢/mi, tips up to $25K deductible. Free calculator. All 50 states.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/uber-tax-guide-2026' },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much tax does an Uber driver pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"Uber drivers pay 15.3% self-employment tax plus federal income tax. On $35,000 net income after mileage deductions, total federal tax is approximately $7,750. Set aside 25 to 30% of each payment."}},{"@type":"Question","name":"Can Uber drivers deduct tips in 2026?","acceptedAnswer":{"@type":"Answer","text":"Yes. Under OBBBA 2026, rideshare drivers can deduct qualified tips up to $25,000 from federal taxable income. You still report the tip income on Schedule C, then deduct it on Schedule 1."}},{"@type":"Question","name":"What is the 2026 mileage rate for Uber drivers?","acceptedAnswer":{"@type":"Answer","text":"The 2026 IRS standard mileage rate is 72.5 cents per mile. On 15,000 business miles, that is a $10,875 deduction — your largest single tax reduction."}},{"@type":"Question","name":"Does Uber report my income to the IRS?","acceptedAnswer":{"@type":"Answer","text":"Yes. Uber sends 1099-K and 1099-NEC forms directly to the IRS with your SSN. Even if you earn less than the 1099 threshold, you must report all income on Schedule C."}},{"@type":"Question","name":"What is the difference between 1099-K and 1099-NEC for Uber?","acceptedAnswer":{"@type":"Answer","text":"The 1099-K reports gross trip earnings — what riders paid before Uber fees. The 1099-NEC reports bonuses and referral payments over $600. Your actual taxable income is the net amount after Uber fees, shown in your Tax Summary."}},{"@type":"Question","name":"Standard mileage vs actual expense method — which is better for Uber?","acceptedAnswer":{"@type":"Answer","text":"Most Uber drivers benefit more from the standard mileage method at 72.5 cents per mile. It is simpler and requires no expense receipts. The actual expense method may yield more for drivers with expensive vehicles or high maintenance costs."}},{"@type":"Question","name":"When are the 2026 quarterly tax deadlines for Uber drivers?","acceptedAnswer":{"@type":"Answer","text":"Quarterly estimated tax deadlines for 2026 are: April 15 (Q1), June 16 (Q2), September 15 (Q3), and January 15 2027 (Q4). Pay online at IRS Direct Pay. Missing a deadline triggers an underpayment penalty of approximately 7% annualized."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Uber Driver Tax Guide 2026","item":"https://www.gigwisetax.com/blog/uber-tax-guide-2026"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Uber Driver Tax Guide 2026 — How to File Your 1099","datePublished":"2026-01-01","dateModified":"2026-05-21","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/uber-tax-guide-2026"}}'

export default function UberTaxGuide() {
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
            <span style={{ color: '#C8D8EC' }}>Uber Driver Tax Guide 2026</span>
          </nav>

          <h1
            itemProp="headline"
            style={{ fontSize: 'clamp(22px,5vw,24px)', fontWeight: 900, lineHeight: 1.3, color: '#C8D8EC', margin: '0 0 16px' }}
          >
            Uber Driver Tax Guide 2026 — How to File Your 1099
          </h1>

          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <span>Last updated: May 2026</span>
            <span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span>
            <span>·</span>
            <span>{'~8 min read · 2,050 words'}</span>
          </div>
        </header>

        {/* ANSWER-FIRST */}
        <section id="answer">
          <div style={{ background: 'rgba(232,184,75,0.07)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 10, padding: '18px 22px', marginBottom: 28 }}>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#C8D8EC' }}>
              {'Uber drivers pay 15.3% self-employment tax on net earnings. On $35,000 net income: $4,950 SE tax + $2,800 federal income tax = $7,750 total. Quarterly estimated payment: $1,938. Set aside 25% of every Uber payment. The 2026 mileage rate is 72.5 cents per mile and the OBBBA tips deduction (up to $25,000) are your two largest savings.'}
            </p>
          </div>
        </section>

        {/* KEY TAKEAWAYS */}
        <section id="key-takeaways">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8b84b', margin: '0 0 14px' }}>
            Key Takeaways
          </h2>
          <ul style={{ margin: '0 0 32px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: '#C8D8EC' }}>
            <li>{'Uber drivers on $35,000 net income owe approximately $7,750 in total federal tax'}</li>
            <li>{'2026 IRS mileage rate is 72.5 cents per mile — your single largest deduction'}</li>
            <li>{'Tips up to $25,000 are federally deductible under OBBBA 2026'}</li>
            <li>{'Uber sends 1099-NEC for earnings over $2,000 and 1099-K for trip earnings'}</li>
            <li>{'Set aside 25 to 30% of every payment for quarterly estimated taxes'}</li>
          </ul>
        </section>

        {/* TOC */}
        <section id="toc">
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '18px 22px', marginBottom: 32 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#C8D8EC', marginBottom: 12 }}>Table of Contents</div>
            <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 13 }}>
              <li><a href="#1099-forms" style={{ color: '#e8b84b', textDecoration: 'none' }}>{"Uber's 1099 Forms Explained"}</a></li>
              <li><a href="#mileage-deduction" style={{ color: '#e8b84b', textDecoration: 'none' }}>2026 Mileage Deduction for Uber Drivers</a></li>
              <li><a href="#top-deductions" style={{ color: '#e8b84b', textDecoration: 'none' }}>Top Deductions for Uber Drivers in 2026</a></li>
              <li><a href="#mileage-vs-actual" style={{ color: '#e8b84b', textDecoration: 'none' }}>Standard Mileage vs Actual Expense Method</a></li>
              <li><a href="#quarterly-deadlines" style={{ color: '#e8b84b', textDecoration: 'none' }}>2026 Quarterly Tax Deadlines</a></li>
              <li><a href="#obbba" style={{ color: '#e8b84b', textDecoration: 'none' }}>2026 OBBBA Changes for Uber Drivers</a></li>
              <li><a href="#faq" style={{ color: '#e8b84b', textDecoration: 'none' }}>Frequently Asked Questions</a></li>
            </ol>
          </div>
        </section>

        {/* SECTION 1 */}
        <section id="1099-forms">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            {"How Do Uber's 1099 Forms Work in 2026?"}
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'Uber issues two different 1099 forms. The 1099-K reports gross trip earnings — what riders paid before Uber fees. The 1099-NEC reports bonuses, referral payments, and other non-trip income. Your actual taxable income is the 1099-K amount minus Uber fees shown in your Uber Tax Summary.'}
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
            <li>{'Uber does NOT withhold any taxes — you are fully responsible as an independent contractor'}</li>
            <li>{'1099-K reports gross trip earnings before Uber service fees'}</li>
            <li>{'1099-NEC reports bonuses and referral payments over $600'}</li>
            <li>{'Net taxable income = 1099-K minus Uber fees, shown in your Tax Summary'}</li>
            <li>{'File Schedule C + Schedule SE with your Form 1040'}</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section id="mileage-deduction">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            What Is the 2026 Mileage Deduction for Uber Drivers?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'The IRS standard mileage rate for 2026 is 72.5 cents per mile. Track every business mile — driving to the first pickup, trips between rides, and driving back after the last trip. Uber provides your online miles in the Tax Summary but it often undercounts. Use a mileage app for accuracy.'}
          </p>

          <div style={{ overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 400 }}>
              <thead>
                <tr style={{ background: 'rgba(232,184,75,0.12)', borderBottom: '2px solid rgba(232,184,75,0.3)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Miles/Year</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>Deduction (72.5¢)</th>
                  <th style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>Tax Saved (22%)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['10,000', '$7,250', '$1,595'],
                  ['15,000', '$10,875', '$2,393'],
                  ['20,000', '$14,500', '$3,190'],
                  ['25,000', '$18,125', '$3,988'],
                ].map(([miles, ded, saved], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>{miles}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'right', color: 'rgba(255,255,255,0.85)' }}>{ded}</td>
                    <td style={{ padding: '10px 14px', textAlign: 'right', color: 'rgba(255,255,255,0.85)' }}>{saved}</td>
                  </tr>
                ))}
                <tr style={{ background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }}>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>30,000</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>$21,750</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', color: '#e8b84b', fontWeight: 700 }}>$4,785</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="top-deductions">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            What Can Uber Drivers Deduct in 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'Uber drivers have access to powerful deductions unavailable to W-2 employees. Track every expense throughout the year — not just at tax time.'}
          </p>

          <ol style={{ margin: '0 0 20px', paddingLeft: 20, lineHeight: 1.95, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li><strong style={{ color: '#C8D8EC' }}>{'Mileage (72.5 cents/mile)'}</strong>{' — Every trip mile plus en-route miles between pickups. Your largest single deduction.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Tips deduction (up to $25,000)'}</strong>{' — New OBBBA 2026 law. Earn $8,000 in tips and deduct the full amount from federal taxable income.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Phone bill (business %)'}</strong>{' — Deduct 70 to 90% of your monthly plan. On $80/month that is $672 to $864 per year.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Car washes'}</strong>{' — Keeping your vehicle clean for passengers. 100% deductible as a business expense.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Passenger amenities'}</strong>{' — Mints, water bottles, phone chargers provided to riders. Keep grocery receipts.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Parking and tolls'}</strong>{' — All fees incurred during active Uber trips.'}</li>
          </ol>

          <ul style={{ margin: '0 0 28px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'Health insurance premiums — 100% deductible on Schedule 1 if not eligible for employer coverage'}</li>
            <li>{'Accounting software subscriptions (Stride, QuickBooks Self-Employed) — 100% deductible'}</li>
            <li>{'Solo 401(k) contributions up to $23,500 reduce taxable income dollar-for-dollar'}</li>
          </ul>
        </section>

        {/* SECTION 4 */}
        <section id="mileage-vs-actual">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            Standard Mileage vs Actual Expense Method — Which Is Better?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'You must choose one method per vehicle per year. Most Uber drivers benefit more from the standard mileage method — it is simpler and often yields a larger deduction.'}
          </p>

          <div style={{ overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 480 }}>
              <thead>
                <tr style={{ background: 'rgba(232,184,75,0.12)', borderBottom: '2px solid rgba(232,184,75,0.3)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Method</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Best For</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Pros</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Cons</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Standard Mileage</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Most drivers</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Simple, no receipts needed</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Must use from year 1</td>
                </tr>
                <tr style={{ background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }}>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>Actual Expenses</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>High-cost vehicles</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>May yield larger deduction</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>Requires all receipts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="quarterly-deadlines">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            When Are the 2026 Quarterly Tax Deadlines for Uber Drivers?
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
            {'Full guide: '}
            <a href="/blog/quarterly-taxes-gig-workers" style={{ color: '#e8b84b', textDecoration: 'none' }}>Quarterly Taxes for Gig Workers — Step-by-Step 2026</a>
            {'.'}
          </p>
        </section>

        {/* SECTION 6 */}
        <section id="obbba">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 14px' }}>
            What Changed for Uber Drivers Under the OBBBA 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            {'The One Big Beautiful Bill Act introduced four major changes for rideshare drivers starting in 2026.'}
          </p>

          <ul style={{ margin: '0 0 28px', paddingLeft: 20, lineHeight: 1.95, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <li><strong style={{ color: '#C8D8EC' }}>{'No Tax on Tips — up to $25,000'}</strong>{' — Tips deductible from federal taxable income. Earn $10,000 in Uber tips? Full amount excluded.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'QBI Deduction — now permanent'}</strong>{' — Deduct 20% of net Uber profit. On $35,000 net that is $7,000 off taxable income.'}</li>
            <li><strong style={{ color: '#C8D8CE' }}>{'100% bonus depreciation restored'}</strong>{' — Phone mount, dash cam, accessories fully deductible in year of purchase.'}</li>
            <li><strong style={{ color: '#C8D8EC' }}>{'Mileage rate: 72.5 cents per mile'}</strong>{' — Up from 70 cents in 2025. Driving 15,000 miles = $10,875 deduction.'}</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#C8D8EC', margin: '0 0 20px' }}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q: 'How much tax does an Uber driver pay in 2026?',
              a: 'Uber drivers pay 15.3% self-employment tax plus federal income tax. On $35,000 net income, total federal tax is approximately $7,750. Set aside 25 to 30% of each payment.',
            },
            {
              q: 'Can Uber drivers deduct tips in 2026?',
              a: 'Yes. Under OBBBA 2026, rideshare drivers can deduct qualified tips up to $25,000 from federal taxable income. You still report the income on Schedule C then deduct it on Schedule 1.',
            },
            {
              q: 'What is the 2026 mileage rate for Uber drivers?',
              a: 'The 2026 IRS standard mileage rate is 72.5 cents per mile. On 15,000 business miles that is a $10,875 deduction — your largest single tax reduction.',
            },
            {
              q: 'Does Uber report my income to the IRS?',
              a: 'Yes. Uber sends 1099-K and 1099-NEC forms directly to the IRS. Even if you earn below the threshold, you must report all income on Schedule C.',
            },
            {
              q: "What is the difference between 1099-K and 1099-NEC for Uber?",
              a: 'The 1099-K reports gross trip earnings before Uber fees. The 1099-NEC reports bonuses and referral payments over $600. Your taxable income is the net amount after Uber fees.',
            },
            {
              q: 'Standard mileage vs actual expense — which is better for Uber?',
              a: 'Most Uber drivers benefit more from standard mileage at 72.5 cents per mile. It is simpler and requires no expense receipts. Actual expenses may yield more for high-cost vehicles.',
            },
            {
              q: 'When are the 2026 quarterly tax deadlines for Uber drivers?',
              a: 'Quarterly deadlines: April 15 (Q1), June 16 (Q2), September 15 (Q3), January 15 2027 (Q4). Pay at IRS Direct Pay. Missing a deadline triggers a penalty of approximately 7% annualized.',
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
            <li><a href="/blog/doordash-taxes-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>DoorDash Taxes 2026: How Much Do You Owe?</a></li>
            <li><a href="/blog/1099-vs-w2-taxes-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>1099 vs W-2 Taxes 2026: Which Costs You More?</a></li>
            <li><a href="/blog/quarterly-taxes-gig-workers" style={{ color: '#e8b84b', textDecoration: 'none' }}>Quarterly Taxes for Gig Workers: Deadlines and How to Pay</a></li>
          </ul>
        </section>

        <AuthorBox />
      </article>
    </>
  )
}
