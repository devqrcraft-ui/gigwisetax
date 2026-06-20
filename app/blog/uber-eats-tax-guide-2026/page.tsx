import AuthorBox from '@/app/components/AuthorBox'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uber Eats Driver Taxes 2026: $35K Income = $7,750 Tax Owed',
  description: 'Uber Eats drivers on $35K owe $7,750 in self-employment tax in 2026. Free calculator — mileage 72.5¢/mi. How to file, deduct, and save.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/uber-eats-tax-guide-2026' },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much tax does an Uber Eats driver pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"An Uber Eats driver earning $35,000 owes approximately $7,750 in self-employment tax in 2026. This covers 15.3% SE tax on 92.35% of net profit after deductions."}},{"@type":"Question","name":"What is the self-employment tax rate for Uber Eats in 2026?","acceptedAnswer":{"@type":"Answer","text":"The self-employment tax rate is 15.3% — 12.4% for Social Security (on income up to $184,500) and 2.9% for Medicare. You deduct half of SE tax from gross income."}},{"@type":"Question","name":"Can Uber Eats drivers deduct mileage in 2026?","acceptedAnswer":{"@type":"Answer","text":"Yes. The 2026 IRS standard mileage rate is 72.5 cents per mile. Track every delivery mile from the moment you go online to the moment you go offline."}},{"@type":"Question","name":"Does Uber Eats send a 1099 form?","acceptedAnswer":{"@type":"Answer","text":"Uber Eats sends a 1099-K if you earn over $5,000, or a 1099-NEC if you earn under that threshold. Either way, all income is taxable and must be reported."}},{"@type":"Question","name":"What deductions can Uber Eats drivers claim in 2026?","acceptedAnswer":{"@type":"Answer","text":"Top deductions include mileage at 72.5¢/mile, phone bill (business portion), insulated delivery bags, hot bags, and half of your self-employment tax."}},{"@type":"Question","name":"Do I need to pay quarterly taxes as an Uber Eats driver?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you expect to owe $1,000 or more in taxes, the IRS requires quarterly estimated payments. Due dates in 2026 are April 15, June 16, September 15, and January 15."}},{"@type":"Question","name":"What is the Uber Eats tax rate by state?","acceptedAnswer":{"@type":"Answer","text":"Federal SE tax applies to all drivers. State income tax varies: California adds up to 13.3%, Texas and Florida have no state income tax, New York adds up to 10.9%."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Uber Eats Driver Taxes 2026","item":"https://www.gigwisetax.com/blog/uber-eats-tax-guide-2026"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Uber Eats Driver Taxes 2026: $35K Income = $7,750 Tax Owed","datePublished":"2026-05-22","dateModified":"2026-05-22","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/uber-eats-tax-guide-2026"}}'

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema }} />
      <article itemScope itemType="https://schema.org/BlogPosting"
        style={{ maxWidth: 780, margin: '0 auto', padding: 'clamp(14px,4vw,28px)', background: '#07111F', color: '#C8D8EC', minHeight: '100vh' }}>
        <header>
          <nav aria-label="breadcrumb" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 6px' }}>›</span>
            <a href="/blog" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Blog</a>
            <span style={{ margin: '0 6px' }}>›</span>
            <span>Uber Eats Taxes 2026</span>
          </nav>
          <h1 itemProp="headline" style={{ fontSize: 'clamp(22px,5vw,24px)', fontWeight: 900, color: '#e8edf8', lineHeight: 1.3, marginBottom: 12 }}>
            Uber Eats Driver Taxes 2026: $35K Income = $7,750 Tax Owed
          </h1>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 24, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <span>Last updated: May 2026</span><span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span><span>·</span>
            <span>{'~8 min read · 2,000 words'}</span>
          </div>
        </header>

        <section id="answer-first">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#C8D8EC', marginBottom: 24 }}>
            An Uber Eats driver earning <strong style={{ color: '#e8edf8' }}>$35,000 in 2026 owes approximately $7,750 in self-employment tax</strong> before deductions. After claiming mileage at 72.5¢/mile, your phone bill, and delivery equipment, taxable income drops — most full-time drivers reduce their bill by <strong style={{ color: '#e8edf8' }}>$1,500–$3,000</strong>. This guide shows the exact math.
          </p>
        </section>

        <section id="takeaways">
          <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '20px 24px', marginBottom: 32 }}>
            <h2 style={{ fontSize: 'clamp(16px,3vw,18px)', fontWeight: 700, color: '#e8b84b', marginBottom: 12, marginTop: 0 }}>Key Takeaways</h2>
            <ul style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 1.9, fontSize: 14, color: '#C8D8EC' }}>
              <li>SE tax rate is 15.3% applied to 92.35% of net profit — not gross earnings</li>
              <li>$35K income = ~$7,750 SE tax; $40K = ~$8,852 before deductions</li>
              <li>2026 mileage rate: 72.5¢ per mile — track every delivery mile</li>
              <li>Quarterly payments due April 15, June 16, Sept 15, Jan 15 — miss one and pay 5% penalty</li>
              <li>1099-K threshold dropped to $5,000 in 2026 — nearly all Uber Eats drivers receive one</li>
            </ul>
          </div>
        </section>

        <section id="toc">
          <nav aria-label="Table of contents" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '16px 20px', marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(200,216,236,0.5)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 10 }}>Contents</div>
            <ol style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 2, fontSize: 14 }}>
              <li><a href="#how-much-tax" style={{ color: '#e8b84b', textDecoration: 'none' }}>How Much Tax Does an Uber Eats Driver Pay?</a></li>
              <li><a href="#se-tax-calculator" style={{ color: '#e8b84b', textDecoration: 'none' }}>SE Tax Calculator by Income Level</a></li>
              <li><a href="#top-deductions" style={{ color: '#e8b84b', textDecoration: 'none' }}>Top Deductions for Uber Eats Drivers</a></li>
              <li><a href="#mileage" style={{ color: '#e8b84b', textDecoration: 'none' }}>Mileage: Your Biggest Deduction</a></li>
              <li><a href="#quarterly-taxes" style={{ color: '#e8b84b', textDecoration: 'none' }}>Quarterly Estimated Taxes</a></li>
              <li><a href="#how-to-file" style={{ color: '#e8b84b', textDecoration: 'none' }}>How to File Your Uber Eats Taxes</a></li>
              <li><a href="#faq" style={{ color: '#e8b84b', textDecoration: 'none' }}>Frequently Asked Questions</a></li>
            </ol>
          </nav>
        </section>

        <section id="how-much-tax">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            How Much Tax Does an Uber Eats Driver Pay in 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Uber Eats drivers are independent contractors. The IRS treats your earnings as self-employment income. You pay both the employee and employer portions of Social Security and Medicare — a combined rate of 15.3%.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            The IRS applies SE tax to <strong style={{ color: '#e8edf8' }}>92.35% of net profit</strong>, not your gross pay. Net profit is gross earnings minus business expenses. You also deduct half of SE tax from gross income before calculating federal income tax.
          </p>
          <blockquote style={{ borderLeft: '3px solid rgba(232,184,75,0.5)', margin: '24px 0', padding: '12px 20px', background: 'rgba(232,184,75,0.04)', borderRadius: '0 6px 6px 0' }}>
            <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', lineHeight: 1.7 }}>
              &quot;If your net earnings from self-employment are $400 or more, you must pay self-employment tax.&quot; —{' '}
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color: '#e8b84b' }}>IRS Self-Employed Tax Center</a>
            </p>
          </blockquote>
        </section>

        <section id="se-tax-calculator">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            SE Tax Calculator by Income Level (2026)
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            The table below shows estimated SE tax before deductions. Add federal income tax on top based on your filing status and total income.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: 24, borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'rgba(232,184,75,0.08)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Annual Earnings</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Est. SE Tax</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Quarterly Payment</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$20,000</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$2,826</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$707</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$25,000</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$3,532</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$883</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$30,000</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$4,239</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$1,060</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$35,000</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$7,750</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$1,938</td>
                </tr>
                <tr style={{ background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }}>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$40,000</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$8,852</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$2,213</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 24 }}>
            Estimates assume no deductions. Your actual bill will be lower after mileage and expenses.
          </p>
        </section>

        <section id="top-deductions">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            What Deductions Can Uber Eats Drivers Claim in 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Business deductions reduce your net profit, which directly cuts your SE tax. These are the deductions the IRS allows for delivery drivers.
          </p>
          <ul style={{ paddingLeft: 20, lineHeight: 1.9, fontSize: 14, marginBottom: 16 }}>
            <li><strong style={{ color: '#e8edf8' }}>Mileage:</strong> 72.5¢/mile for every business mile driven in 2026</li>
            <li><strong style={{ color: '#e8edf8' }}>Phone:</strong> the business-use percentage of your monthly bill</li>
            <li><strong style={{ color: '#e8edf8' }}>Insulated bags and hot bags:</strong> full cost if used only for deliveries</li>
            <li><strong style={{ color: '#e8edf8' }}>Half of SE tax:</strong> deducted directly from gross income on Schedule 1</li>
            <li><strong style={{ color: '#e8edf8' }}>Health insurance:</strong> if you paid premiums and were not eligible for employer coverage</li>
            <li><strong style={{ color: '#e8edf8' }}>Data plan:</strong> the portion used for navigation and the Uber Eats app</li>
          </ul>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
            You cannot deduct food, personal clothing, or parking tickets. The IRS requires expenses to be ordinary and necessary for delivery work. See the{' '}
            <a href="/blog/doordash-taxes-2026" style={{ color: '#e8b84b' }}>DoorDash tax guide</a> for a side-by-side comparison of deductions across platforms.
          </p>

          <div style={{ overflowX: 'auto', marginBottom: 24, borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'rgba(232,184,75,0.08)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Deduction</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Annual Estimate</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Tax Saved (~15%)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Mileage (10,000 mi)</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$7,250</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$1,088</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Phone (80% business)</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$720</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$108</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Delivery bags</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$120</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$18</td>
                </tr>
                <tr style={{ background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }}>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>Total Savings</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$8,090</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$1,214</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="mileage">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            Mileage: Your Biggest Deduction as an Uber Eats Driver
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            The 2026 IRS mileage rate is <strong style={{ color: '#e8edf8' }}>72.5 cents per mile</strong>. On 10,000 delivery miles, that is a $7,250 deduction — saving roughly $1,088 in tax. Most Uber Eats drivers are surprised how fast miles add up.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Count miles from the moment you go online to the moment you go offline — not just miles with food in the car. The IRS considers your entire active window as business use.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Use an app like Stride or MileIQ to track automatically. Manual logs work too — date, start location, end location, and odometer readings. The IRS requires a contemporaneous record.
          </p>
          <ul style={{ paddingLeft: 20, lineHeight: 1.9, fontSize: 14, marginBottom: 24 }}>
            <li>Do not count commute miles from home to your first pickup</li>
            <li>Do not mix personal and business miles — keep a clean log</li>
            <li>You cannot claim both mileage and actual gas costs — choose one method for the year</li>
          </ul>
        </section>

        <section id="quarterly-taxes">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            Do Uber Eats Drivers Pay Quarterly Taxes?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Yes. If you expect to owe $1,000 or more in federal tax, the IRS requires you to pay estimated taxes four times a year. Missing a payment triggers a 5% underpayment penalty.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            2026 quarterly due dates:
          </p>
          <ol style={{ paddingLeft: 20, lineHeight: 1.9, fontSize: 14, marginBottom: 24 }}>
            <li><strong style={{ color: '#e8edf8' }}>Q1:</strong> April 15, 2026 — income earned January–March</li>
            <li><strong style={{ color: '#e8edf8' }}>Q2:</strong> June 16, 2026 — income earned April–May</li>
            <li><strong style={{ color: '#e8edf8' }}>Q3:</strong> September 15, 2026 — income earned June–August</li>
            <li><strong style={{ color: '#e8edf8' }}>Q4:</strong> January 15, 2027 — income earned September–December</li>
          </ol>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
            Pay via IRS Direct Pay at <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color: '#e8b84b' }}>irs.gov</a> — free, instant, and no account required. Set aside 25–30% of each Uber Eats payout to cover federal and state taxes.
          </p>
        </section>

        <section id="how-to-file">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            How to File Your Uber Eats Taxes in 2026
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Filing as an Uber Eats driver requires two forms beyond the standard 1040.
          </p>
          <ol style={{ paddingLeft: 20, lineHeight: 1.9, fontSize: 14, marginBottom: 24 }}>
            <li><strong style={{ color: '#e8edf8' }}>Gather your 1099:</strong> Uber Eats sends a 1099-K (over $5,000) or 1099-NEC by January 31, 2027</li>
            <li><strong style={{ color: '#e8edf8' }}>Complete Schedule C:</strong> report gross income and all business deductions — mileage, phone, equipment</li>
            <li><strong style={{ color: '#e8edf8' }}>Complete Schedule SE:</strong> calculate SE tax on net profit from Schedule C</li>
            <li><strong style={{ color: '#e8edf8' }}>File Form 1040:</strong> include Schedule C and Schedule SE — deduct half of SE tax on Schedule 1</li>
            <li><strong style={{ color: '#e8edf8' }}>Pay any balance due:</strong> by April 15, 2027</li>
          </ol>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
            Also compare rates on our <a href="/blog/doordash-taxes-2026" style={{ color: '#e8b84b' }}>DoorDash 2026 guide</a> and <a href="/blog/lyft-driver-taxes-2026" style={{ color: '#e8b84b' }}>Lyft driver tax guide</a> to see how platforms differ.
          </p>
        </section>

        <section id="faq">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 20 }}>
            Frequently Asked Questions
          </h2>
          {[
            { q: 'How much tax does an Uber Eats driver pay in 2026?', a: 'An Uber Eats driver earning $35,000 owes approximately $7,750 in self-employment tax in 2026. After mileage and other deductions, most drivers reduce this by $1,000–$2,000.' },
            { q: 'What is the self-employment tax rate for Uber Eats in 2026?', a: 'The self-employment tax rate is 15.3% — 12.4% for Social Security (on income up to $184,500) and 2.9% for Medicare. It applies to 92.35% of net profit.' },
            { q: 'Can Uber Eats drivers deduct mileage in 2026?', a: 'Yes. The 2026 IRS standard mileage rate is 72.5 cents per mile. Track every mile from the moment you go online.' },
            { q: 'Does Uber Eats send a 1099 form?', a: 'Uber Eats sends a 1099-K if you earn over $5,000, or a 1099-NEC below that threshold. All income is taxable regardless of which form you receive.' },
            { q: 'What deductions can Uber Eats drivers claim in 2026?', a: 'Top deductions include mileage at 72.5¢/mile, phone bill (business portion), insulated delivery bags, and half of your self-employment tax.' },
            { q: 'Do I need to pay quarterly taxes as an Uber Eats driver?', a: 'Yes, if you expect to owe $1,000 or more. Due dates are April 15, June 16, September 15, and January 15.' },
            { q: 'What is the Uber Eats tax rate by state?', a: 'Federal SE tax applies everywhere. California adds up to 13.3%. Texas and Florida have no state income tax. New York adds up to 10.9%.' },
          ].map(({ q, a }) => (
            <div key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 20, marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#e8edf8', marginBottom: 8 }}>{q}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.8, margin: 0, color: 'rgba(255,255,255,0.75)' }}>{a}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>Related Articles</h2>
          <ul style={{ paddingLeft: 20, lineHeight: 2, fontSize: 14 }}>
            <li><a href="/blog/doordash-taxes-2026" style={{ color: '#e8b84b' }}>DoorDash Driver Taxes 2026: Complete Guide</a></li>
            <li><a href="/blog/lyft-driver-taxes-2026" style={{ color: '#e8b84b' }}>Lyft Driver Taxes 2026: $35K Income = $7,750 SE Tax</a></li>
            <li><a href="/blog/instacart-shopper-taxes-2026" style={{ color: '#e8b84b' }}>Instacart Shopper Taxes 2026: Full Breakdown</a></li>
            <li><a href="/blog/grubhub-taxes-2026" style={{ color: '#e8b84b' }}>GrubHub Driver Taxes 2026</a></li>
          </ul>
        </section>

        <AuthorBox />
      </article>
    </>
  )
}
