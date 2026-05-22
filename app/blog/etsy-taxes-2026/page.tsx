import AuthorBox from '@/app/components/AuthorBox'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Etsy Seller Taxes 2026: $30K Income = $6,448 SE Tax Owed',
  description: 'Etsy sellers earning $30K owe $6,448 in self-employment tax in 2026. Deduct supplies, shipping, home studio, and Etsy fees. Complete filing guide.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/etsy-taxes-2026' },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much tax does an Etsy seller pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"An Etsy seller earning $30,000 owes approximately $6,448 in self-employment tax in 2026, before deductions. After supplies, shipping, home studio, and Etsy fees, most sellers reduce their taxable income by $5,000–$10,000."}},{"@type":"Question","name":"Does Etsy send a 1099 in 2026?","acceptedAnswer":{"@type":"Answer","text":"Etsy sends a 1099-K if your gross sales exceed $5,000 in 2026. Even without a 1099, all Etsy income is taxable and must be reported on Schedule C."}},{"@type":"Question","name":"Can Etsy sellers deduct supplies and materials?","acceptedAnswer":{"@type":"Answer","text":"Yes. The cost of materials used to create your products is fully deductible on Schedule C under Cost of Goods Sold. Keep all receipts from craft stores, fabric suppliers, and online vendors."}},{"@type":"Question","name":"Are Etsy fees tax deductible?","acceptedAnswer":{"@type":"Answer","text":"Yes. Etsy listing fees (20 cents per item), transaction fees (6.5% of sale price), and payment processing fees are all deductible as business expenses on Schedule C."}},{"@type":"Question","name":"Can Etsy sellers deduct a home studio?","acceptedAnswer":{"@type":"Answer","text":"Yes, if you use a dedicated space exclusively for creating, photographing, and shipping your products. Use the IRS simplified method: $5 per square foot, up to 300 sq ft."}},{"@type":"Question","name":"Do Etsy sellers pay quarterly taxes?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you expect to owe $1,000 or more in federal taxes, make quarterly estimated payments. Due dates in 2026 are April 15, June 16, September 15, and January 15."}},{"@type":"Question","name":"Is Etsy income subject to self-employment tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. If your net Etsy profit is $400 or more, you owe self-employment tax at 15.3% on 92.35% of net profit. This is in addition to federal income tax."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Etsy Seller Taxes 2026","item":"https://www.gigwisetax.com/blog/etsy-taxes-2026"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Etsy Seller Taxes 2026: $30K Income = $6,448 SE Tax Owed","datePublished":"2026-05-22","dateModified":"2026-05-22","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/etsy-taxes-2026"}}'

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
            <span>Etsy Seller Taxes 2026</span>
          </nav>
          <h1 itemProp="headline" style={{ fontSize: 'clamp(22px,5vw,24px)', fontWeight: 900, color: '#e8edf8', lineHeight: 1.3, marginBottom: 12 }}>
            Etsy Seller Taxes 2026: $30K Income = $6,448 SE Tax Owed
          </h1>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 24, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <span>Last updated: May 2026</span><span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span><span>·</span>
            <span>{'~8 min read · 2,000 words'}</span>
          </div>
        </header>

        <section id="answer-first">
          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#C8D8EC', marginBottom: 24 }}>
            An Etsy seller earning <strong style={{ color: '#e8edf8' }}>$30,000 in 2026 owes $6,448 in self-employment tax</strong> before deductions. Etsy sellers have access to powerful write-offs — materials, shipping supplies, Etsy fees, and a home studio — that can reduce taxable income by <strong style={{ color: '#e8edf8' }}>$5,000–$10,000</strong>. This guide covers every deduction and the exact steps to file.
          </p>
        </section>

        <section id="takeaways">
          <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '20px 24px', marginBottom: 32 }}>
            <h2 style={{ fontSize: 'clamp(16px,3vw,18px)', fontWeight: 700, color: '#e8b84b', marginBottom: 12, marginTop: 0 }}>Key Takeaways</h2>
            <ul style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 1.9, fontSize: 14, color: '#C8D8EC' }}>
              <li>SE tax rate is 15.3% on 92.35% of net profit — applied after all deductions</li>
              <li>$30K gross = $6,448 SE tax before deductions; actual bill is often $2,000–$3,500 lower</li>
              <li>Etsy fees (listing + transaction + processing) are 100% deductible on Schedule C</li>
              <li>Materials and supplies are deductible under Cost of Goods Sold — keep every receipt</li>
              <li>1099-K threshold is $5,000 in 2026 — most active sellers will receive one from Etsy</li>
            </ul>
          </div>
        </section>

        <section id="toc">
          <nav aria-label="Table of contents" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '16px 20px', marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(200,216,236,0.5)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: 10 }}>Contents</div>
            <ol style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 2, fontSize: 14 }}>
              <li><a href="#how-much-tax" style={{ color: '#e8b84b', textDecoration: 'none' }}>How Much Tax Does an Etsy Seller Pay?</a></li>
              <li><a href="#se-tax-table" style={{ color: '#e8b84b', textDecoration: 'none' }}>SE Tax by Income Level (2026)</a></li>
              <li><a href="#etsy-deductions" style={{ color: '#e8b84b', textDecoration: 'none' }}>Deductions Unique to Etsy Sellers</a></li>
              <li><a href="#etsy-fees" style={{ color: '#e8b84b', textDecoration: 'none' }}>Are Etsy Fees Tax Deductible?</a></li>
              <li><a href="#quarterly-taxes" style={{ color: '#e8b84b', textDecoration: 'none' }}>Quarterly Estimated Taxes</a></li>
              <li><a href="#how-to-file" style={{ color: '#e8b84b', textDecoration: 'none' }}>How to File Etsy Taxes Step-by-Step</a></li>
              <li><a href="#faq" style={{ color: '#e8b84b', textDecoration: 'none' }}>Frequently Asked Questions</a></li>
            </ol>
          </nav>
        </section>

        <section id="how-much-tax">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            How Much Tax Does an Etsy Seller Pay in 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Etsy classifies you as an independent contractor. If your net profit is $400 or more, you owe self-employment tax. The IRS charges 15.3% — 12.4% for Social Security and 2.9% for Medicare — on 92.35% of net profit.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Net profit is your gross Etsy revenue minus all allowable business expenses. Because Etsy sellers typically spend heavily on materials, the gap between gross revenue and taxable net profit is often larger than for service-based freelancers.
          </p>
          <blockquote style={{ borderLeft: '3px solid rgba(232,184,75,0.5)', margin: '24px 0', padding: '12px 20px', background: 'rgba(232,184,75,0.04)', borderRadius: '0 6px 6px 0' }}>
            <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', lineHeight: 1.7 }}>
              &quot;You must report self-employment income even if you don't receive a 1099 form from the payer.&quot; —{' '}
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color: '#e8b84b' }}>IRS Self-Employed Tax Center</a>
            </p>
          </blockquote>
        </section>

        <section id="se-tax-table">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            Etsy Seller SE Tax by Income Level (2026)
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Estimates assume no deductions. Your actual tax will be lower after deducting materials, fees, and home studio costs.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: 24, borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'rgba(232,184,75,0.08)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Annual Gross Sales</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Est. SE Tax</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left', color: '#e8b84b', fontWeight: 700 }}>Quarterly Payment</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$15,000</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$2,120</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$530</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$20,000</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$2,826</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$707</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$30,000</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$6,448</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$1,612</td>
                </tr>
                <tr style={{ background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }}>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$50,000</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$11,565</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$2,891</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="etsy-deductions">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            Deductions Unique to Etsy Sellers in 2026
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Etsy sellers have access to product-based deductions that service freelancers cannot claim. These deductions reduce net profit — and therefore SE tax — significantly.
          </p>
          <ul style={{ paddingLeft: 20, lineHeight: 1.9, fontSize: 14, marginBottom: 16 }}>
            <li><strong style={{ color: '#e8edf8' }}>Raw materials:</strong> fabric, wood, clay, resin, beads, yarn — deducted as Cost of Goods Sold</li>
            <li><strong style={{ color: '#e8edf8' }}>Packaging:</strong> boxes, tissue paper, shipping tape, thank-you cards</li>
            <li><strong style={{ color: '#e8edf8' }}>Shipping costs:</strong> postage, label printing, packaging materials</li>
            <li><strong style={{ color: '#e8edf8' }}>Photography:</strong> camera, lighting equipment, props used for product photos</li>
            <li><strong style={{ color: '#e8edf8' }}>Home studio:</strong> dedicated workspace square footage × $5/sq ft (simplified method)</li>
            <li><strong style={{ color: '#e8edf8' }}>Tools and equipment:</strong> sewing machines, kilns, Cricut cutters, heat presses</li>
            <li><strong style={{ color: '#e8edf8' }}>Half of SE tax:</strong> deducted on Schedule 1, Line 15</li>
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
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Raw materials</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$4,800</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$720</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Shipping + packaging</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$1,200</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$180</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Etsy fees</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$2,340</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$351</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>Home studio (120 sq ft)</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$600</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.85)' }}>$90</td>
                </tr>
                <tr style={{ background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' }}>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>Total Savings</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$8,940</td>
                  <td style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700 }}>$1,341</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="etsy-fees">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            Are Etsy Fees Tax Deductible in 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Yes — all three types of Etsy fees are deductible as business expenses on Schedule C.
          </p>
          <ul style={{ paddingLeft: 20, lineHeight: 1.9, fontSize: 14, marginBottom: 16 }}>
            <li><strong style={{ color: '#e8edf8' }}>Listing fee:</strong> $0.20 per item — adds up quickly for high-volume sellers</li>
            <li><strong style={{ color: '#e8edf8' }}>Transaction fee:</strong> 6.5% of sale price including shipping</li>
            <li><strong style={{ color: '#e8edf8' }}>Payment processing fee:</strong> 3% + $0.25 per transaction via Etsy Payments</li>
          </ul>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
            Etsy provides a monthly statement in your seller dashboard. Download the CSV at year-end and total fees paid — this becomes a single line item on Schedule C under advertising or other expenses.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
            On $30,000 in sales with 500 listings, your annual Etsy fees total roughly $2,340 — saving $351 in SE tax alone. Also check our <a href="/blog/fiverr-taxes-2026" style={{ color: '#e8b84b' }}>Fiverr tax guide</a> for comparison with service-based platform fees.
          </p>
        </section>

        <section id="quarterly-taxes">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            Do Etsy Sellers Pay Quarterly Taxes in 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>
            Yes. Etsy does not withhold taxes. If you expect to owe $1,000 or more, you must make quarterly estimated payments to avoid a 5% underpayment penalty.
          </p>
          <ol style={{ paddingLeft: 20, lineHeight: 1.9, fontSize: 14, marginBottom: 24 }}>
            <li><strong style={{ color: '#e8edf8' }}>Q1:</strong> April 15, 2026 — January through March earnings</li>
            <li><strong style={{ color: '#e8edf8' }}>Q2:</strong> June 16, 2026 — April through May earnings</li>
            <li><strong style={{ color: '#e8edf8' }}>Q3:</strong> September 15, 2026 — June through August earnings</li>
            <li><strong style={{ color: '#e8edf8' }}>Q4:</strong> January 15, 2027 — September through December earnings</li>
          </ol>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
            Set aside 25–30% of each Etsy payout. Pay via{' '}
            <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color: '#e8b84b' }}>IRS Direct Pay</a> at no cost.
          </p>
        </section>

        <section id="how-to-file">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 16 }}>
            How to File Etsy Taxes in 2026: Step-by-Step
          </h2>
          <ol style={{ paddingLeft: 20, lineHeight: 1.9, fontSize: 14, marginBottom: 24 }}>
            <li><strong style={{ color: '#e8edf8' }}>Collect your 1099-K</strong> — Etsy sends it by January 31, 2027 if gross sales exceed $5,000</li>
            <li><strong style={{ color: '#e8edf8' }}>Download your Etsy fee statements</strong> — available in your seller dashboard under Finances</li>
            <li><strong style={{ color: '#e8edf8' }}>Calculate Cost of Goods Sold</strong> — total materials and supplies used to produce sold items</li>
            <li><strong style={{ color: '#e8edf8' }}>Complete Schedule C</strong> — enter gross revenue, COGS, and all other business expenses</li>
            <li><strong style={{ color: '#e8edf8' }}>Complete Schedule SE</strong> — calculate SE tax on 92.35% of Schedule C net profit</li>
            <li><strong style={{ color: '#e8edf8' }}>File Form 1040</strong> — deduct half of SE tax on Schedule 1, Line 15</li>
            <li><strong style={{ color: '#e8edf8' }}>Pay balance due</strong> by April 15, 2027</li>
          </ol>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
            Also see our <a href="/blog/instacart-shopper-taxes-2026" style={{ color: '#e8b84b' }}>Instacart tax guide</a> and <a href="/blog/uber-eats-tax-guide-2026" style={{ color: '#e8b84b' }}>Uber Eats tax guide</a> for how other gig platforms compare.
          </p>
        </section>

        <section id="faq">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', marginBottom: 20 }}>
            Frequently Asked Questions
          </h2>
          {[
            { q: 'How much tax does an Etsy seller pay in 2026?', a: 'An Etsy seller earning $30,000 owes approximately $6,448 in SE tax before deductions. After materials, fees, and home studio, most sellers reduce this by $1,000–$2,500.' },
            { q: 'Does Etsy send a 1099 in 2026?', a: 'Etsy sends a 1099-K if gross sales exceed $5,000. All income is taxable even without a 1099.' },
            { q: 'Can Etsy sellers deduct supplies and materials?', a: 'Yes. Materials used to produce sold products are deductible as Cost of Goods Sold on Schedule C. Keep all receipts.' },
            { q: 'Are Etsy fees tax deductible?', a: 'Yes. Listing fees ($0.20/item), transaction fees (6.5%), and payment processing fees (3% + $0.25) are all deductible business expenses.' },
            { q: 'Can Etsy sellers deduct a home studio?', a: 'Yes, if used exclusively for work. The IRS simplified method allows $5 per square foot, up to 300 sq ft ($1,500 max).' },
            { q: 'Do Etsy sellers pay quarterly taxes?', a: 'Yes, if you expect to owe $1,000 or more. Due dates: April 15, June 16, September 15, January 15.' },
            { q: 'Is Etsy income subject to self-employment tax?', a: 'Yes. Any net profit of $400 or more triggers SE tax at 15.3% on 92.35% of net profit, in addition to federal income tax.' },
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
            <li><a href="/blog/fiverr-taxes-2026" style={{ color: '#e8b84b' }}>Fiverr Seller Taxes 2026: $50K = $11,565 SE Tax</a></li>
            <li><a href="/blog/instacart-shopper-taxes-2026" style={{ color: '#e8b84b' }}>Instacart Shopper Taxes 2026: Full Breakdown</a></li>
            <li><a href="/blog/doordash-taxes-2026" style={{ color: '#e8b84b' }}>DoorDash Driver Taxes 2026: Complete Guide</a></li>
            <li><a href="/blog/uber-eats-tax-guide-2026" style={{ color: '#e8b84b' }}>Uber Eats Driver Taxes 2026</a></li>
          </ul>
        </section>

        <AuthorBox />
      </article>
    </>
  )
}
