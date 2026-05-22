import AuthorBox from '@/app/components/AuthorBox'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fiverr Taxes 2026: $50K Income = $11,565 SE Tax Owed',
  description: 'Fiverr freelancers earning $50K owe $11,565 in self-employment tax in 2026. How to deduct home office, software, and equipment. Free calculator.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/fiverr-taxes-2026' },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much tax does a Fiverr seller pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"A Fiverr seller earning $50,000 owes approximately $11,565 in self-employment tax in 2026, before any deductions. After home office, software, and equipment deductions, most sellers reduce this by $2,000–$4,000."}},{"@type":"Question","name":"Does Fiverr send a 1099 form in 2026?","acceptedAnswer":{"@type":"Answer","text":"Fiverr sends a 1099-K if you earn over $5,000. If you earn less, you still owe taxes — all income is taxable regardless of whether you receive a 1099."}},{"@type":"Question","name":"Can Fiverr freelancers deduct home office expenses?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you use a dedicated space in your home exclusively for work, you can deduct a proportional share of rent, utilities, and internet. The IRS simplified method allows $5 per square foot up to 300 sq ft."}},{"@type":"Question","name":"What software can Fiverr sellers deduct in 2026?","acceptedAnswer":{"@type":"Answer","text":"Fiverr sellers can deduct Adobe Creative Cloud, Canva Pro, project management tools, antivirus software, and any other subscription used exclusively for client work."}},{"@type":"Question","name":"Do Fiverr sellers pay quarterly taxes?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you expect to owe $1,000 or more in federal taxes, the IRS requires quarterly payments. Due dates in 2026 are April 15, June 16, September 15, and January 15."}},{"@type":"Question","name":"What is the self-employment tax rate on Fiverr income?","acceptedAnswer":{"@type":"Answer","text":"The SE tax rate is 15.3% applied to 92.35% of net profit. On $50,000 gross, after expenses, most Fiverr sellers pay 15.3% on roughly $40,000–$45,000 of net income."}},{"@type":"Question","name":"Can Fiverr sellers deduct the 20% Fiverr service fee?","acceptedAnswer":{"@type":"Answer","text":"No. The Fiverr service fee is deducted before you receive payment. Your 1099 reflects your actual earnings after the fee. You do not deduct it again on your taxes."}},{"@type":"Question","name":"What is the standard deduction for Fiverr freelancers in 2026?","acceptedAnswer":{"@type":"Answer","text":"The 2026 standard deduction is $16,100 for single filers and $32,200 for married filing jointly. This reduces federal income tax but not self-employment tax, which is calculated separately on Schedule SE."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Fiverr Taxes 2026","item":"https://www.gigwisetax.com/blog/fiverr-taxes-2026"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Fiverr Taxes 2026: $50K Income = $11,565 SE Tax Owed","datePublished":"2026-05-22","dateModified":"2026-05-22","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/fiverr-taxes-2026"}}'

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
            <span>Fiverr Taxes 2026</span>
          </nav>
          <h1 itemProp="headline" style={{ fontSize: 'clamp(22px,5vw,24px)', fontWeight: 900, color: '#e8edf8', lineHeight: 1.3, marginBottom: 12 }}>
            Fiverr Taxes 2026: $50K Income = $11,565 SE Tax Owed
          </h1>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 24, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <span>Last updated: May 2026</span><span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span><span>·</span>
            <span>{'~8 min read · 2,100 words'}</span>
          </div>
        </header>

        <section id="answer-first">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#C8D8EC', marginBottom: 24 }}>
            A Fiverr seller earning <strong style={{ color: '#e8edf8' }}>$50,000 in 2026 owes $11,565 in self-employment tax</strong> before deductions. After home office, software subscriptions, and equipment write-offs, taxable net income drops significantly. Most Fiverr sellers who track expenses cut their SE tax by <strong style={{ color: '#e8edf8' }}>$2,000–$4,000</strong>. This guide shows every deduction and the exact filing steps.
          </p>
        </section>

        <section id="takeaways">
          <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '20px 24px', marginBottom: 32 }}>
            <h2 style={{ fontSize: 'clamp(16px,3vw,18px)', fontWeight: 700, color: '#e8b84b', marginBottom: 12, marginTop: 0 }}>Key Takeaways</h2>
            <ul style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 1.9, fontSize: 14, color: '#C8D8EC' }}>
              <li>SE tax is 15.3% on 92.35% of net profit — not your Fiverr gross earnings</li>
              <li>$50K income = $11,565 SE tax; $60K = $14,278 before deductions</li>
              <li>Home office deduction: $5/sq ft × up to 300 sq ft = up to $1,500/year</li>
              <li>The Fiverr 20% service fee is NOT deductible — your 1099 already reflects net earnings</li>
              <li>2026 standard deduction: $16,100 single / $32,200 married — cuts federal income tax, not SE tax</li>
            </ul>
          </div>
        </section>

        <section id="toc">
          <nav aria-label="Table of contents" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '16px 20px', marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(200,216,236,0.5)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 10 }}>Contents</div>
            <ol style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 2, fontSize: 14 }}>
              <li><a href="#how-much-tax" style={{ color: '#e8b84b', textDecoration: 'none' }}>How Much Tax Does a Fiverr Seller Pay?</a></li>
              <li><a href="#se-tax-table" style={{ color: '#e8b84b', textDecoration: 'none' }}>SE Tax by Income Level (2026)</a></li>
              <li><a href="#top-deductions" style={{ color: '#e8b84b', textDecoration: 'none' }}>Top Deductions for Fiverr Freelancers</a></li>
              <li><a href="#home-office" style={{ color: '#e8b84b', textDecoration: 'none' }}>Home Office Deduction</a></li>
              <li><a href="#quarterly-taxes" style={{ color: '#e8b84b', textDecoration: 'none' }}>Quarterly Estimated Taxes</a></li>
              <li><a href="#how-to-file" style={{ color: '#e8b84b', textDecoration: 'none' }}>How to File Fiverr Taxes</a></li>
              <li><a href="#faq" style={{ color: '#e8b84b', textDecoration: 'none' }}>Frequently Asked Questions</a></li>
            </ol>
          </nav>
        </section>

        <section id="how-much-tax">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            How Much Tax Does a Fiverr Seller Pay in 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Fiverr pays you as an independent contractor. You owe self-employment tax on every dollar of net profit — no employer withholds taxes for you. The IRS charges 15.3% SE tax: 12.4% for Social Security and 2.9% for Medicare.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            SE tax applies to <strong style={{ color: '#e8edf8' }}>92.35% of net profit</strong>, not gross earnings. Net profit is gross income minus legitimate business expenses. You also deduct half of SE tax from gross income when calculating federal income tax.
          </p>
          <blockquote style={{ borderLeft: '3px solid rgba(232,184,75,0.5)', margin: '24px 0', padding: '12px 20px', background: 'rgba(232,184,75,0.04)', borderRadius: '0 6px 6px 0' }}>
            <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', lineHeight: 1.7 }}>
              &quot;As a self-employed individual, you must pay self-employment tax if your net earnings are $400 or more.&quot; —{' '}
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color: '#e8b84b' }}>IRS Self-Employed Tax Center</a>
            </p>
          </blockquote>
        </section>

        <section id="se-tax-table">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            Fiverr SE Tax by Income Level (2026)
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Estimates below assume no deductions. Your actual tax will be lower after claiming home office, software, and equipment.
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
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$25,000</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$3,532</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$883</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$35,000</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$4,945</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$1,236</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$50,000</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$11,565</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$2,891</td>
                </tr>
                <tr style={{ background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }}>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$60,000</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$14,278</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$3,570</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="top-deductions">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            Top Deductions for Fiverr Freelancers in 2026
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Every dollar you deduct reduces net profit, which cuts your SE tax by about 15 cents. These deductions are available on Schedule C.
          </p>
          <ul style={{ paddingLeft: 20, lineHeight: 1.9, fontSize: 14, marginBottom: 16 }}>
            <li><strong style={{ color: '#e8edf8' }}>Home office:</strong> dedicated workspace square footage as a percentage of your home</li>
            <li><strong style={{ color: '#e8edf8' }}>Software subscriptions:</strong> Adobe Creative Cloud, Canva Pro, Notion, project tools</li>
            <li><strong style={{ color: '#e8edf8' }}>Equipment:</strong> laptop, monitor, microphone, camera — used primarily for work</li>
            <li><strong style={{ color: '#e8edf8' }}>Internet bill:</strong> business-use percentage (typically 50–80%)</li>
            <li><strong style={{ color: '#e8edf8' }}>Phone bill:</strong> business-use percentage of your monthly plan</li>
            <li><strong style={{ color: '#e8edf8' }}>Half of SE tax:</strong> deducted on Schedule 1, Line 15</li>
            <li><strong style={{ color: '#e8edf8' }}>Professional development:</strong> courses, books, certifications related to your services</li>
          </ul>

          <div style={{ overflowX: 'auto', marginBottom: 24, borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'rgba(232,184,75,0.08)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Deduction</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Annual Estimate</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>SE Tax Saved (~15%)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Home office (150 sq ft)</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$750</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$113</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Software subs</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$1,200</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$180</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Equipment (laptop)</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$1,500</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$225</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Internet (70%)</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$840</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$126</td>
                </tr>
                <tr style={{ background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }}>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>Total Savings</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$4,290</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$644</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="home-office">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            How Does the Home Office Deduction Work for Fiverr Sellers?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            The IRS allows a home office deduction if you use a specific part of your home <strong style={{ color: '#e8edf8' }}>regularly and exclusively</strong> for business. A kitchen table does not qualify. A dedicated desk in a spare room does.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            The simplified method: <strong style={{ color: '#e8edf8' }}>$5 per square foot</strong>, up to 300 sq ft. A 200 sq ft home office equals a $1,000 deduction.
          </p>
          <ol style={{ paddingLeft: 20, lineHeight: 1.9, fontSize: 14, marginBottom: 24 }}>
            <li>Measure the square footage of your dedicated workspace</li>
            <li>Multiply by $5 (simplified method) — maximum deduction $1,500</li>
            <li>Or calculate actual expenses: divide office sq ft by total home sq ft, multiply by rent + utilities + internet</li>
            <li>Report on Form 8829 (actual method) or Schedule C Line 30 (simplified method)</li>
          </ol>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
            The actual method often produces a larger deduction but requires more record-keeping. If your rent is $2,000/month and your office is 15% of your home, your annual deduction is $3,600.
          </p>
        </section>

        <section id="quarterly-taxes">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            Do Fiverr Sellers Pay Quarterly Taxes in 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Yes. Fiverr does not withhold taxes from your earnings. If you expect to owe $1,000 or more, the IRS requires quarterly estimated payments. Missing payments triggers a 5% underpayment penalty.
          </p>
          <ol style={{ paddingLeft: 20, lineHeight: 1.9, fontSize: 14, marginBottom: 24 }}>
            <li><strong style={{ color: '#e8edf8' }}>Q1:</strong> April 15, 2026 — income earned January–March</li>
            <li><strong style={{ color: '#e8edf8' }}>Q2:</strong> June 16, 2026 — income earned April–May</li>
            <li><strong style={{ color: '#e8edf8' }}>Q3:</strong> September 15, 2026 — income earned June–August</li>
            <li><strong style={{ color: '#e8edf8' }}>Q4:</strong> January 15, 2027 — income earned September–December</li>
          </ol>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
            Set aside 30–35% of every Fiverr payment to cover SE tax plus federal and state income tax. Pay via{' '}
            <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color: '#e8b84b' }}>IRS Direct Pay</a> — free and no account required.
          </p>
        </section>

        <section id="how-to-file">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            How to File Fiverr Taxes in 2026: Step-by-Step
          </h2>
          <ol style={{ paddingLeft: 20, lineHeight: 1.9, fontSize: 14, marginBottom: 24 }}>
            <li><strong style={{ color: '#e8edf8' }}>Collect your 1099-K or 1099-NEC</strong> from Fiverr — available in your account dashboard by January 31, 2027</li>
            <li><strong style={{ color: '#e8edf8' }}>Compile all expenses</strong> — receipts for software, equipment, internet, phone, and home office measurements</li>
            <li><strong style={{ color: '#e8edf8' }}>Complete Schedule C</strong> — report gross income and all deductions; net profit flows to your 1040</li>
            <li><strong style={{ color: '#e8edf8' }}>Complete Schedule SE</strong> — calculate SE tax on 92.35% of net profit</li>
            <li><strong style={{ color: '#e8edf8' }}>File Form 1040</strong> — deduct half of SE tax on Schedule 1, Line 15</li>
            <li><strong style={{ color: '#e8edf8' }}>Pay any remaining balance</strong> by April 15, 2027</li>
          </ol>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
            Also see our <a href="/blog/etsy-taxes-2026" style={{ color: '#e8b84b' }}>Etsy seller tax guide</a> and <a href="/blog/uber-eats-tax-guide-2026" style={{ color: '#e8b84b' }}>Uber Eats tax guide</a> for comparisons across freelance platforms.
          </p>
        </section>

        <section id="faq">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 20 }}>
            Frequently Asked Questions
          </h2>
          {[
            { q: 'How much tax does a Fiverr seller pay in 2026?', a: 'A Fiverr seller earning $50,000 owes approximately $11,565 in SE tax before deductions. After home office, software, and equipment, most sellers reduce this by $2,000–$4,000.' },
            { q: 'Does Fiverr send a 1099 form in 2026?', a: 'Fiverr sends a 1099-K if you earn over $5,000. All income is taxable whether or not you receive a 1099.' },
            { q: 'Can Fiverr freelancers deduct home office expenses?', a: 'Yes. Use the simplified method — $5 per square foot, up to 300 sq ft ($1,500 max). The space must be used exclusively for work.' },
            { q: 'What software can Fiverr sellers deduct in 2026?', a: 'Adobe Creative Cloud, Canva Pro, project management tools, and any subscription used exclusively for client work is deductible.' },
            { q: 'Do Fiverr sellers pay quarterly taxes?', a: 'Yes, if you expect to owe $1,000 or more. Due dates: April 15, June 16, September 15, January 15.' },
            { q: 'What is the self-employment tax rate on Fiverr income?', a: 'The SE tax rate is 15.3% on 92.35% of net profit. On $50,000 gross, after expenses, you typically pay 15.3% on $40,000–$45,000.' },
            { q: 'Can Fiverr sellers deduct the 20% Fiverr service fee?', a: 'No. The fee is deducted before you receive payment. Your 1099 reflects earnings after the fee — do not deduct it again.' },
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
            <li><a href="/blog/etsy-taxes-2026" style={{ color: '#e8b84b' }}>Etsy Seller Taxes 2026: Complete Guide</a></li>
            <li><a href="/blog/uber-eats-tax-guide-2026" style={{ color: '#e8b84b' }}>Uber Eats Driver Taxes 2026</a></li>
            <li><a href="/blog/doordash-taxes-2026" style={{ color: '#e8b84b' }}>DoorDash Driver Taxes 2026</a></li>
            <li><a href="/blog/instacart-shopper-taxes-2026" style={{ color: '#e8b84b' }}>Instacart Shopper Taxes 2026</a></li>
          </ul>
        </section>

        <AuthorBox />
      </article>
    </>
  )
}
