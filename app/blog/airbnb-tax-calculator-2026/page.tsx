import AuthorBox from '@/app/components/AuthorBox'
import TaxFreshness from '@/app/components/TaxFreshness'
import { estimateTax } from '@/lib/tax-rules'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Airbnb Tax Calculator 2026 | Schedule E vs Schedule C',
  description: 'Compare simplified Airbnb rental-income and Schedule C scenarios for 2026. Learn the assumptions behind federal and state estimates, expenses, and reporting.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/airbnb-tax-calculator-2026' },
}

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Airbnb Tax Calculator 2026","item":"https://www.gigwisetax.com/blog/airbnb-tax-calculator-2026"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Airbnb Host Taxes 2026: Schedule E vs Schedule C","datePublished":"2026-01-01","dateModified":"2026-11-02","author":{"@type":"Organization","name":"the GigWiseTax Team","url":"https://www.gigwisetax.com"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/airbnb-tax-calculator-2026"}}'

export default function AirbnbTaxCalculator2026() {
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
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</a>
            <span> › </span>
            <a href="/blog" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Blog</a>
            <span> › </span>Airbnb Host Taxes 2026
          </nav>
          <h1
            itemProp="headline"
            style={{ fontSize: 'clamp(22px,5vw,24px)', fontWeight: 900, color: '#e8edf8', lineHeight: 1.3, marginBottom: 12 }}
          >
            Airbnb Host Taxes 2026: Schedule E vs Schedule C
          </h1>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginBottom: 24, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <span>2026 tax-year guide</span><span>·</span>
            <span>By the GigWiseTax Team</span><span>·</span>
            <span>{'~9 min read · 2,200 words'}</span>
          </div>
        </header>

        {/* Answer-First */}
        <section id="answer-first">
          <div style={{ background: 'rgba(232,184,75,0.06)', borderLeft: '3px solid #e8b84b', borderRadius: '0 6px 6px 0', padding: '16px 20px', marginBottom: 28 }}>
            <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, margin: 0 }}>
              Rental income is commonly reported on Schedule E; services and other facts can affect whether Schedule C and self-employment tax apply. In a simplified Schedule C example, $50,000 of net profit produces about $7,065 SE tax and $3,396 federal income tax, or <strong style={{ color: '#e8edf8' }}>$10,461 before state tax</strong>. It assumes single filing status, no other income, and no credits; it is not a classification decision.
            </p>
          </div>
        </section>

        {/* Key Takeaways */}
        <section id="takeaways">
          <div style={{ background: 'rgba(232,184,75,0.04)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '20px 24px', marginBottom: 32 }}>
            <div style={{ fontSize: 13, fontFamily: 'monospace', color: '#e8b84b', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Key Takeaways</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              {[
                'A $50K Schedule C net-profit example = about $10,461 federal tax before state tax',
                'SE tax rate: 15.3% on net profit — 12.4% Social Security + 2.9% Medicare',
                'Depreciation: $300K property = $10,909/year deduction over 27.5 years',
                'Tax-form reporting thresholds do not determine whether rental income is taxable',
                'The 14-day exception has dwelling-use requirements; verify that your property qualifies',
                'QBI eligibility depends on the activity and statutory limits; not all rental income qualifies',
              ].map((t, i) => (
                <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.6, paddingLeft: 16, position: 'relative' as const }}>
                  <span style={{ position: 'absolute' as const, left: 0, top: 9, width: 5, height: 5, borderRadius: '50%', background: '#e8b84b', display: 'block' }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TOC */}
        <section id="toc">
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: '18px 22px', marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#e8b84b', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 12 }}>Table of Contents</div>
            <ol style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
              {[
                ['#tax-overview', 'How Airbnb Host Taxes Work in 2026'],
                ['#deductions', 'Top Tax Deductions for Airbnb Hosts'],
                ['#depreciation', 'Depreciation: The Biggest Airbnb Deduction'],
                ['#quarterly', 'Quarterly Estimated Tax Payments'],
                ['#forms', 'Tax Forms Airbnb Hosts Receive'],
                ['#qbi', 'QBI Deduction for Airbnb Hosts'],
                ['#faq', 'Frequently Asked Questions'],
              ].map(([href, label]) => (
                <li key={href}><a href={href} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14 }}>{label}</a></li>
              ))}
            </ol>
          </div>
        </section>

        {/* Tax Overview */}
        <section id="tax-overview">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            How Much Tax Do Airbnb Hosts Owe in 2026?
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Schedule C illustration for a single filer, no state tax, no other income, and no credits; all amounts are net profit after expenses. The Schedule E scenario is not represented in this table.
          </p>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Airbnb rental income may be subject to federal income tax, but it is not automatically self-employment income. Reporting treatment and estimated-payment requirements depend on your activity and full tax situation.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: 24, borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'rgba(232,184,75,0.08)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Net Income</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>SE Tax (15.3%)</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Federal Income Tax</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Total Owed</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Per Quarter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [25000, 35000, 50000, 75000, 100000].map(income => {
                    const estimate = estimateTax(income, 0, 'single')
                    return [
                      '$' + income.toLocaleString('en-US'),
                      '$' + estimate.se.toLocaleString('en-US'),
                      '$' + estimate.federal.toLocaleString('en-US'),
                      '$' + estimate.total.toLocaleString('en-US'),
                      '$' + estimate.quarterly.toLocaleString('en-US'),
                    ]
                  }),
                ].flat().map(([inc, se, fed, tot, qtr], i, arr) => (
                  <tr key={i} style={i === arr.length - 1
                    ? { background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }
                    : { borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 14px', color: i === arr.length - 1 ? '#e8b84b' : '#C8D8EC' }}>{inc}</td>
                    <td style={{ padding: '10px 14px', color: i === arr.length - 1 ? '#e8b84b' : '#C8D8EC' }}>{se}</td>
                    <td style={{ padding: '10px 14px', color: i === arr.length - 1 ? '#e8b84b' : '#C8D8EC' }}>{fed}</td>
                    <td style={{ padding: '10px 14px', color: i === arr.length - 1 ? '#e8b84b' : '#C8D8EC', fontWeight: 700 }}>{tot}</td>
                    <td style={{ padding: '10px 14px', color: i === arr.length - 1 ? '#e8b84b' : '#C8D8EC' }}>{qtr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Use the <a href="/airbnb" style={{ color: '#e8b84b', textDecoration: 'none' }}>free Airbnb tax calculator</a> for a simplified planning estimate based on a selected scenario, income, filing status, and state.
          </p>

          <blockquote style={{ borderLeft: '3px solid rgba(232,184,75,0.4)', paddingLeft: 16, margin: '20px 0', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.8 }}>
            IRS Publication 527 explains rental real-estate reporting. Services and other facts can affect treatment; this guide's calculator scenarios do not determine your classification.{' '}
            <a href="https://www.irs.gov/publications/p527" rel="nofollow" target="_blank" style={{ color: '#e8b84b', textDecoration: 'none' }}>IRS Publication 527 →</a>
          </blockquote>
        </section>

        {/* Deductions */}
        <section id="deductions">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Top Tax Deductions for Airbnb Hosts in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Eligible deductions can reduce taxable rental income, but eligibility and allocation rules vary. A deduction is not equal to tax savings, and this guide does not calculate the tax effect of a specific expense.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              'Mortgage interest — deduct the rental-use percentage of your mortgage interest',
              'Property taxes — deductible proportional to rental days vs personal use days',
              'Depreciation — largest deduction: residential property over 27.5 years',
              'Cleaning and maintenance — eligible costs may be deductible when properly allocated',
              'Utilities — electricity, water, internet deducted by rental-use percentage',
              'Eligible Airbnb platform fees may be deductible when properly allocated',
              'Supplies — toiletries, linens, coffee, paper towels for guests',
              'Insurance — rental property insurance or renters insurance portion',
              'Home office — if you manage the property from a dedicated space',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <div style={{ overflowX: 'auto', marginBottom: 24, borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'rgba(232,184,75,0.08)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Deduction</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Typical Amount</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Tax Savings (22%)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Depreciation ($300K home)', '$10,909/year', '$2,400'],
                  ['Mortgage interest', '$8,000–$15,000', '$1,760–$3,300'],
                  ['Cleaning & maintenance', '$2,000–$5,000', '$440–$1,100'],
                  ['Utilities (50% rental use)', '$1,500–$3,000', '$330–$660'],
                  ['Airbnb platform fees (3%)', '$1,500 on $50K gross', '$330'],
                  ['Supplies & toiletries', '$500–$1,500', '$110–$330'],
                  ['Total potential deductions', '$24,409–$36,909', '$5,370–$8,120'],
                ].map(([ded, amt, sav], i, arr) => (
                  <tr key={i} style={i === arr.length - 1
                    ? { background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }
                    : { borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '10px 14px', color: i === arr.length - 1 ? '#e8b84b' : '#C8D8EC', fontWeight: i === arr.length - 1 ? 700 : 400 }}>{ded}</td>
                    <td style={{ padding: '10px 14px', color: i === arr.length - 1 ? '#e8b84b' : '#C8D8EC' }}>{amt}</td>
                    <td style={{ padding: '10px 14px', color: i === arr.length - 1 ? '#e8b84b' : '#C8D8EC', fontWeight: i === arr.length - 1 ? 700 : 400 }}>{sav}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Depreciation */}
        <section id="depreciation">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            How Does Airbnb Depreciation Work in 2026?
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Depreciation is the biggest tax deduction most Airbnb hosts overlook. The IRS allows you to deduct the cost of your rental property over its useful life — 27.5 years for residential property.
          </p>
          <ol style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
            {[
              'Determine your property cost basis — purchase price minus land value',
              'Divide by 27.5 to get your annual depreciation deduction',
              'Apply the rental-use percentage if you also use the property personally',
              'Report on Schedule E, Part I using Form 4562 for depreciation',
              'Recapture applies when you sell — depreciation taken reduces your cost basis',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ol>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Example: $350,000 property with $50,000 land value = $300,000 depreciable basis. Annual deduction: <strong style={{ color: '#e8edf8' }}>$10,909</strong>. At a 22% tax rate, this saves <strong style={{ color: '#e8b84b' }}>$2,400/year</strong>.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              'Bonus depreciation 100% in 2026 under OBBBA — applies to furniture and appliances',
              'Short-term rentals averaging 7 days or less may qualify for accelerated schediation',
              'Cost segregation study can accelerate depreciation on components like flooring and fixtures',
              'Keep receipts for all capital improvements — they increase your depreciable basis',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Quarterly */}
        <section id="quarterly">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Quarterly Estimated Tax Payments for Airbnb Hosts
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Estimated payments may generally be required if you expect to owe at least $1,000 after withholding and credits. Safe-harbor rules and exceptions affect whether a penalty applies.
          </p>
          <ol style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
            {[
              'Q1 (Jan–Mar): due April 15, 2026',
              'Q2 (Apr–May): due June 15, 2026',
              'Q3 (Jun–Aug): due September 15, 2026',
              'Q4 (Sep–Dec): due January 15, 2027',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ol>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Estimated payments depend on your full tax picture, including filing status, other income, withholding, credits, and state. Use the calculator as a planning estimate, not as a required payment amount.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              'A prior-year safe harbor may apply; the required percentage depends on income and current IRS rules',
              'Withholding, credits, and annualized-income rules can affect estimated-payment requirements',
              'Use the free Airbnb tax calculator to estimate each quarterly payment',
              'Open a separate bank account for tax savings — prevents spending withheld funds',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Forms */}
        <section id="forms">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Tax Forms Airbnb Hosts Receive in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Check your account documents and current information-return rules. A form threshold does not determine whether income is taxable or reportable.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              'Check current Airbnb account documents and information-return rules',
              'Annual earnings summary: payouts, fees, and adjustments, if provided',
              'Schedule E: report passive rental income and deductions (most hosts)',
              'Schedule C may apply depending on services and other facts; this guide does not classify income',
              'Form 4562: may be used to report depreciation when required',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Keep your own records of rental income and expenses. A missing information return does not by itself make taxable income nonreportable.
          </p>
        </section>

        {/* QBI */}
        <section id="qbi">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            QBI Deduction for Airbnb Hosts in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Some taxpayers may qualify for the Section 199A qualified business income deduction. Eligibility, the amount, and any rental real-estate safe harbor depend on the activity and statutory requirements; do not assume all rental income qualifies.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              'QBI eligibility depends on the nature of the activity and current statutory requirements',
              'Rental-real-estate safe harbor rules are separate from Schedule E reporting and have additional conditions',
              'The deduction is limited by taxable income and other rules; an automatic 20% deduction should not be assumed',
              'Review current IRS guidance or consult a tax professional before claiming QBI',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            See the <a href="/blog/self-employment-tax-deductions-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>self-employment tax deductions guide</a> and the <a href="/quarterly-tax-calculator-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>quarterly tax calculator</a> to plan your payments.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 14px', lineHeight: 1.35 }}>
            Frequently Asked Questions
          </h2>
          {[
            ['How much tax does an Airbnb host pay in 2026?', 'In a simplified Schedule C example, $50,000 net profit produces about $10,461 in federal tax before state tax: $7,065 SE tax and $3,396 federal income tax. It assumes single filing status, no other income, and no credits; the calculator does not determine your tax classification.'],
            ['What can Airbnb hosts deduct on taxes in 2026?', 'Potential expenses include eligible mortgage interest, property taxes, depreciation, cleaning, utilities, supplies, and platform fees. Eligibility and allocation depend on property use and tax treatment.'],
            ['Does Airbnb send a 1099 form to hosts?', 'The form depends on current reporting rules and your payment activity. Check your account documents; a reporting threshold does not determine whether income is taxable or reportable.'],
            ['What is the 14-day rule for Airbnb hosts?', 'A limited exception may apply when a dwelling used as a residence is rented for fewer than 15 days during the year. Eligibility depends on the dwelling-use requirements; confirm current IRS rules before relying on it.'],
            ['How do Airbnb hosts pay quarterly estimated taxes?', 'Estimated-payment requirements and amounts depend on the host’s full tax situation, including withholding, credits, and state rules. Review the current IRS 1040-ES instructions.'],
            ['Can Airbnb hosts deduct depreciation in 2026?', 'Depreciation may be available for eligible rental property and assets, subject to basis, business-use, recovery-period, and other rules. Land is not depreciable; review current IRS guidance.'],
            ['What is the QBI deduction for Airbnb hosts?', 'Some hosts may qualify for the Section 199A deduction, subject to eligibility tests and limits. Rental income does not automatically qualify; review current IRS guidance.'],
          ].map(([q, a], i, arr) => (
            <div key={i} style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', padding: '18px 0' }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: '#e8edf8', margin: '0 0 8px' }}>{q}</h3>
              <p style={{ fontSize: 14, color: '#C8D8EC', margin: 0, lineHeight: 1.7 }}>{a}</p>
            </div>
          ))}
        </section>

        {/* Related Articles */}
        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 16px', lineHeight: 1.35 }}>Related Tax Guides</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 12 }}>
            {[
              ['/airbnb', 'Airbnb Tax Calculator 2026', 'CALCULATOR'],
              ['/blog/turo-host-taxes-2026', 'Turo Host Taxes 2026', 'GUIDE'],
              ['/blog/self-employment-tax-deductions-2026', 'Self-Employment Tax Deductions', 'GUIDE'],
              ['/quarterly-tax-calculator-2026', 'Quarterly Tax Calculator 2026', 'CALCULATOR'],
            ].map(([href, title, tag]) => (
              <a key={href} href={href} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: 16, textDecoration: 'none', display: 'block' }}>
                <div style={{ fontSize: 10, color: '#e8b84b', fontFamily: 'monospace', letterSpacing: '0.04em', marginBottom: 6 }}>{tag}</div>
                <div style={{ color: '#e8edf8', fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>{title}</div>
              </a>
            ))}
          </div>
        </section>

        <TaxFreshness />
<AuthorBox />
      </article>
    </>
  )
}
