import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'
import { ReviewsSection, ContactSection } from '@/app/components/ReviewsSection'

export const metadata: Metadata = {
  title: 'DoorDash Tax Calculator 2026 — Free SE Tax Estimator',
  description: 'Free DoorDash tax calculator 2026. Enter net income, get SE tax, federal + state tax, quarterly payments. 72.5 cents/mile deduction. All 51 states.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/doordash-tax-calculator-2026' },
  keywords: 'doordash tax calculator 2026, doordash 1099 tax, doordash self employment tax, doordash quarterly tax',
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

const faqSchema = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much tax do DoorDash drivers pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"DoorDash drivers pay 15.3% self-employment tax on net earnings. On $40,000 net income: SE tax is $5,652 + federal income tax $3,200 = $8,852 total. Quarterly payment: $2,213."}},{"@type":"Question","name":"What is the DoorDash mileage deduction for 2026?","acceptedAnswer":{"@type":"Answer","text":"The IRS standard mileage rate is 72.5 cents per mile for 2026. Driving 20,000 miles gives a $14,500 deduction — the largest single deduction for most DoorDash drivers."}},{"@type":"Question","name":"When are DoorDash quarterly taxes due in 2026?","acceptedAnswer":{"@type":"Answer","text":"Quarterly estimated tax deadlines for 2026: April 15, June 16, September 15, and January 15, 2027."}},{"@type":"Question","name":"Does DoorDash withhold taxes?","acceptedAnswer":{"@type":"Answer","text":"No. DoorDash pays you as a 1099 contractor with no tax withheld. You are responsible for paying SE tax and income tax directly to the IRS each quarter."}},{"@type":"Question","name":"How do I calculate DoorDash SE tax?","acceptedAnswer":{"@type":"Answer","text":"Multiply net DoorDash income by 0.9235, then multiply by 0.153. Example: $40,000 x 0.9235 x 0.153 = $5,652 SE tax."}},{"@type":"Question","name":"Are DoorDash tips taxable in 2026?","acceptedAnswer":{"@type":"Answer","text":"Under the OBBBA 2026, DoorDash drivers can deduct up to $25,000 in tips from federal taxable income. Tips are still subject to SE tax."}},{"@type":"Question","name":"What percentage should DoorDash drivers set aside for taxes?","acceptedAnswer":{"@type":"Answer","text":"Set aside 25-30% of net DoorDash income. In high-tax states like California or New York, set aside 30-35%. This covers SE tax plus federal and state income tax."}}]})

const breadcrumbSchema = JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"DoorDash Tax Calculator 2026","item":"https://www.gigwisetax.com/blog/doordash-tax-calculator-2026"}]})

const articleSchema = JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting","headline":"DoorDash Tax Calculator 2026 — Free SE Tax Estimator","datePublished":"2026-01-15","dateModified":"2026-06-10","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/doordash-tax-calculator-2026"}})

const orgSchema = JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com","logo":"https://www.gigwisetax.com/og-image.png","description":"Free gig worker tax calculators and guides for US independent contractors"})

export default function DoorDashTaxCalculator2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: orgSchema }} />

      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        style={{ maxWidth: 780, margin: '0 auto', padding: 'clamp(14px,4vw,28px)', background: '#07111F', color: '#C8D8EC', minHeight: '100vh' }}
      >
        <header>
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Home</a>
            {' > '}
            <a href="/blog" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Blog</a>
            {' > '}
            <span style={{ color: '#C8D8EC' }}>DoorDash Tax Calculator 2026</span>
          </nav>

          <h1
            itemProp="headline"
            style={{ fontSize: 'clamp(22px,5vw,24px)', fontWeight: 900, lineHeight: 1.3, color: '#e8edf8', margin: '0 0 16px' }}
          >
            DoorDash Tax Calculator 2026 — Free SE Tax Estimator
          </h1>

          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <span>Last updated: June 10, 2026</span>
            <span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span>
            <span>·</span>
            <span>~8 min read · 1,900 words</span>
          </div>
        </header>

        {/* ANSWER-FIRST */}
        <section id="answer">
          <div style={{ background: 'rgba(232,184,75,0.07)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 10, padding: '18px 22px', marginBottom: 28 }}>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75, color: '#C8D8EC' }}>
              The DoorDash tax calculator shows your exact 2026 tax bill in seconds. On $40,000 net income: $5,652 SE tax + $3,200 federal income tax = $8,852 total owed. Set aside 25% of every payment. The 2026 IRS mileage rate is 72.5 cents per mile — 20,000 miles = $14,500 deduction.
            </p>
          </div>
        </section>

        {/* KEY TAKEAWAYS */}
        <section id="key-takeaways">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8b84b', margin: '0 0 14px' }}>Key Takeaways</h2>
          <ul style={{ margin: '0 0 32px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: '#C8D8EC' }}>
            <li>DoorDash drivers on $40,000 net income owe approximately $8,852 in total federal tax</li>
            <li>SE tax formula: net income x 0.9235 x 0.153 = SE tax owed</li>
            <li>2026 IRS mileage rate: 72.5 cents per mile — largest deduction for most Dashers</li>
            <li>Tips up to $25,000 are federally deductible under the OBBBA 2026</li>
            <li>Quarterly deadlines: April 15, June 16, September 15, January 15</li>
            <li>Set aside 25-30% of every DoorDash payment for taxes</li>
          </ul>
        </section>

        {/* TOC */}
        <section id="toc">
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '18px 22px', marginBottom: 32 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#C8D8EC', marginBottom: 12 }}>Table of Contents</div>
            <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 13 }}>
              <li><a href="#how-calculator-works" style={{ color: '#e8b84b', textDecoration: 'none' }}>How the DoorDash Tax Calculator Works</a></li>
              <li><a href="#se-tax" style={{ color: '#e8b84b', textDecoration: 'none' }}>Self-Employment Tax for DoorDash 2026</a></li>
              <li><a href="#mileage" style={{ color: '#e8b84b', textDecoration: 'none' }}>IRS Mileage Deduction 2026</a></li>
              <li><a href="#quarterly" style={{ color: '#e8b84b', textDecoration: 'none' }}>Quarterly Tax Payments</a></li>
              <li><a href="#deductions" style={{ color: '#e8b84b', textDecoration: 'none' }}>Top DoorDash Tax Deductions</a></li>
              <li><a href="#obbba" style={{ color: '#e8b84b', textDecoration: 'none' }}>OBBBA 2026 — New Tax Laws</a></li>
              <li><a href="#faq" style={{ color: '#e8b84b', textDecoration: 'none' }}>FAQ</a></li>
            </ol>
          </div>
        </section>

        {/* CTA CALCULATOR */}
        <section id="how-calculator-works" style={{ marginBottom: 36 }}>
          <div style={{ background: 'rgba(76,175,80,0.08)', border: '2px solid rgba(76,175,80,0.3)', borderRadius: 12, padding: '24px', textAlign: 'center' as const }}>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#e8edf8', margin: '0 0 8px' }}>Try the Free DoorDash Tax Calculator</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: '0 0 16px' }}>Enter your DoorDash earnings — get SE tax, federal + state, quarterly payments instantly</p>
            <a href="/doordash" style={{ display: 'inline-block', background: '#4CAF50', color: '#fff', fontWeight: 700, fontSize: 15, padding: '12px 32px', borderRadius: 8, textDecoration: 'none' }}>
              Open DoorDash Calculator →
            </a>
          </div>
        </section>

        {/* SE TAX */}
        <section id="se-tax" style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 14px' }}>
            How Much Self-Employment Tax Do DoorDash Drivers Pay in 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            DoorDash classifies all Dashers as independent contractors. You receive a 1099-NEC, not a W-2. That means you pay the full 15.3% self-employment tax on net earnings — 12.4% Social Security plus 2.9% Medicare.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            The SE tax formula: multiply net income by 0.9235, then by 0.153. On $40,000 net: $40,000 x 0.9235 x 0.153 = $5,652 SE tax. Add federal income tax of approximately $3,200 and your total bill is $8,852.
          </p>

          <div style={{ overflowX: 'auto' as const, marginBottom: 24 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e8b84b', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Net Income</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e8b84b', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>SE Tax</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e8b84b', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Federal Income Tax</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e8b84b', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Total Owed</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e8b84b', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Quarterly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['$20,000','$2,826','$1,200','$4,026','$1,007'],
                  ['$30,000','$4,239','$2,100','$6,339','$1,585'],
                  ['$40,000','$5,652','$3,200','$8,852','$2,213'],
                  ['$50,000','$7,065','$4,500','$11,565','$2,891'],
                  ['$60,000','$8,478','$6,000','$14,478','$3,620'],
                ].map(([inc,se,fed,tot,q]) => (
                  <tr key={inc} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 14px', color: '#C8D8EC' }}>{inc}</td>
                    <td style={{ padding: '10px 14px', color: '#C8D8EC' }}>{se}</td>
                    <td style={{ padding: '10px 14px', color: '#C8D8EC' }}>{fed}</td>
                    <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>{tot}</td>
                    <td style={{ padding: '10px 14px', color: '#C8D8EC' }}>{q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* MILEAGE */}
        <section id="mileage" style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 14px' }}>
            IRS Mileage Deduction for DoorDash Drivers in 2026
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            The IRS standard mileage rate for 2026 is 72.5 cents per mile. This is the largest single deduction available to most DoorDash drivers. You can deduct miles driven from the moment you accept an order until delivery is complete — plus miles driven to the restaurant.
          </p>
          <div style={{ background: 'rgba(232,184,75,0.07)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '14px 18px', marginBottom: 16 }}>
            <p style={{ margin: 0, fontSize: 14, color: '#C8D8EC' }}>
              <strong style={{ color: '#e8b84b' }}>Example:</strong> 20,000 miles x $0.725 = <strong style={{ color: '#e8b84b' }}>$14,500 deduction</strong>. On a 25% effective tax rate this saves $3,625 in taxes.
            </p>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            You must choose between the standard mileage rate and actual vehicle expenses (gas, insurance, depreciation). Most Dashers benefit more from the standard rate. Track every mile using a mileage log app — the IRS requires contemporaneous records.
          </p>
          <blockquote style={{ borderLeft: '3px solid #e8b84b', paddingLeft: 16, margin: '0 0 24px', color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.7 }}>
            IRS source: <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" rel="nofollow" style={{ color: '#e8b84b' }}>IRS Standard Mileage Rates 2026</a> — 67 cents/mile for 2024, 70 cents for 2025, 72.5 cents for 2026.
          </blockquote>
        </section>

        {/* QUARTERLY */}
        <section id="quarterly" style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 14px' }}>
            DoorDash Quarterly Tax Payments 2026
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            If you expect to owe $1,000 or more in federal taxes, you must make quarterly estimated payments. Missing a deadline triggers an underpayment penalty of approximately 8% annualized.
          </p>
          <div style={{ overflowX: 'auto' as const, marginBottom: 24 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e8b84b', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Quarter</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e8b84b', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Income Period</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e8b84b', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Q1 2026','Jan 1 – Mar 31','April 15, 2026'],
                  ['Q2 2026','Apr 1 – May 31','June 16, 2026'],
                  ['Q3 2026','Jun 1 – Aug 31','September 15, 2026'],
                  ['Q4 2026','Sep 1 – Dec 31','January 15, 2027'],
                ].map(([q,p,d]) => (
                  <tr key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>{q}</td>
                    <td style={{ padding: '10px 14px', color: '#C8D8EC' }}>{p}</td>
                    <td style={{ padding: '10px 14px', color: '#C8D8EC' }}>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* DEDUCTIONS */}
        <section id="deductions" style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 14px' }}>
            Top Tax Deductions for DoorDash Drivers in 2026
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            Every deductible expense reduces your net profit — which reduces both SE tax and income tax. A $1,000 deduction saves approximately $250-$350 in taxes depending on your bracket.
          </p>
          <div style={{ overflowX: 'auto' as const, marginBottom: 24 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e8b84b', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Deduction</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e8b84b', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Typical Amount</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e8b84b', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Vehicle mileage','$10,875–$18,125','72.5¢/mile × 15k–25k miles'],
                  ['Phone (50-80%)','$300–$600','Business use portion only'],
                  ['Hot bags & equipment','$100–$400','Required for delivery'],
                  ['Half SE tax deduction','$1,413–$4,239','Deducted on Form 1040'],
                  ['Health insurance','Up to 100%','If not eligible for employer plan'],
                  ['QBI deduction (20%)','$2,000–$8,000','Up to 20% of net profit'],
                  ['Tips deduction','Up to $25,000','OBBBA 2026 — federal only'],
                ].map(([d,a,n]) => (
                  <tr key={d} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 14px', color: '#C8D8EC', fontWeight: 600 }}>{d}</td>
                    <td style={{ padding: '10px 14px', color: '#e8b84b' }}>{a}</td>
                    <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>{n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* OBBBA */}
        <section id="obbba" style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 14px' }}>
            OBBBA 2026 — New Tax Laws for DoorDash Drivers
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            The One Big Beautiful Bill Act (OBBBA) 2026 introduced two key changes for gig workers: the 1099-NEC reporting threshold increased to $2,000 (from $600), and tips up to $25,000 are now federally deductible.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            The QBI deduction (20% of net profit) is now permanent under OBBBA. On $40,000 net DoorDash income, that is an $8,000 deduction. The QBI deduction phases out above $182,050 for single filers.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 20px' }}>
            Frequently Asked Questions
          </h2>
          {[
            ['How much tax do DoorDash drivers pay in 2026?', 'DoorDash drivers pay 15.3% SE tax on net earnings. On $40,000 net income: SE tax is $5,652 + federal income tax $3,200 = $8,852 total. Quarterly payment: $2,213.'],
            ['What is the DoorDash mileage deduction for 2026?', 'The IRS standard mileage rate is 72.5 cents per mile. Driving 20,000 miles gives a $14,500 deduction — the largest single deduction for most DoorDash drivers.'],
            ['When are DoorDash quarterly taxes due?', 'Q1: April 15 | Q2: June 16 | Q3: September 15 | Q4: January 15, 2027.'],
            ['Does DoorDash withhold taxes?', 'No. DoorDash pays you as a 1099 contractor with no tax withheld. You are responsible for paying SE tax and income tax to the IRS each quarter.'],
            ['Are DoorDash tips taxable in 2026?', 'Under OBBBA 2026, drivers can deduct up to $25,000 in tips from federal taxable income. Tips are still subject to SE tax.'],
            ['What percentage should I set aside for DoorDash taxes?', 'Set aside 25-30% of net income. In high-tax states like California or New York, set aside 30-35%.'],
            ['Does DoorDash report my income to the IRS?', 'Yes. DoorDash sends your 1099-NEC directly to the IRS. All income must be reported even if earnings are below the $2,000 threshold.'],
          ].map(([q, a]) => (
            <div key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: 20, marginBottom: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: '#e8edf8', margin: '0 0 8px' }}>{q}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', margin: 0 }}>{a}</p>
            </div>
          ))}
        </section>

        {/* RELATED */}
        <section id="related" style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#e8edf8', margin: '0 0 14px' }}>Related Articles</h2>
          <ul style={{ paddingLeft: 20, lineHeight: 2, fontSize: 14 }}>
            <li><a href="/blog/doordash-taxes-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>DoorDash Taxes 2026 — Complete Guide</a></li>
            <li><a href="/blog/self-employment-tax-deductions-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>Self-Employment Tax Deductions 2026</a></li>
            <li><a href="/blog/quarterly-taxes-gig-workers" style={{ color: '#e8b84b', textDecoration: 'none' }}>Quarterly Taxes for Gig Workers</a></li>
            <li><a href="/blog/mileage-rate-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>IRS Mileage Rate 2026 Guide</a></li>
            <li><a href="/blog/best-tax-software-for-gig-workers-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>Best Tax Software for Gig Workers 2026</a></li>
          </ul>
        </section>

        <ReviewsSection />
        <ContactSection />
        <AuthorBox />
      </article>
    </>
  )
}
