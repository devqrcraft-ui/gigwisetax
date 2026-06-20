import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Shipt Shopper Taxes 2026 — Free Tax Calculator + Guide',
  description: 'Shipt shoppers pay 15.3% SE tax on net earnings. On $35K net: $7,750 total tax. Free calculator, mileage 72.5¢/mile, quarterly deadlines. All 51 states.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/shipt-taxes-2026' },
  keywords: 'shipt taxes 2026, shipt shopper tax calculator, shipt 1099 tax, shipt self employment tax, shipt quarterly tax',
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

const faqSchema = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much tax do Shipt shoppers pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"Shipt shoppers pay 15.3% self-employment tax on net earnings. On $35,000 net income: SE tax is $4,944 + federal income tax $2,806 = $7,750 total. Quarterly payment: $1,938."}},{"@type":"Question","name":"Does Shipt send a 1099 form?","acceptedAnswer":{"@type":"Answer","text":"Yes. Shipt sends a 1099-NEC for earnings over $2,000 under the OBBBA 2026 threshold (previously $600). You receive it by January 31, 2027 via the Shipt app or email."}},{"@type":"Question","name":"What mileage can Shipt shoppers deduct in 2026?","acceptedAnswer":{"@type":"Answer","text":"Shipt shoppers can deduct 72.5 cents per mile for business driving. This includes miles from home to the store, during shopping, and to the delivery address. Track every mile."}},{"@type":"Question","name":"Do I need to pay quarterly taxes as a Shipt shopper?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you expect to owe $1,000 or more in federal taxes, you must pay quarterly. Deadlines are April 15, June 16, September 15, and January 15."}},{"@type":"Question","name":"Are Shipt tips taxable?","acceptedAnswer":{"@type":"Answer","text":"Under OBBBA 2026, Shipt shoppers can deduct up to $25,000 in tips from federal taxable income. Tips are still subject to SE tax but not income tax up to the $25,000 cap."}},{"@type":"Question","name":"What percentage should Shipt shoppers set aside for taxes?","acceptedAnswer":{"@type":"Answer","text":"Set aside 25% of net Shipt income. In high-tax states like California, set aside 30-35%. This covers SE tax (15.3%) plus federal and state income tax."}},{"@type":"Question","name":"Can I deduct my car for Shipt deliveries?","acceptedAnswer":{"@type":"Answer","text":"Yes. You can use the standard mileage rate (72.5 cents/mile) or actual vehicle expenses (gas, insurance, depreciation). Most shoppers benefit more from the standard mileage rate."}}]})

const breadcrumbSchema = JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Shipt Taxes 2026","item":"https://www.gigwisetax.com/blog/shipt-taxes-2026"}]})

const articleSchema = JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting","headline":"Shipt Shopper Taxes 2026 — Free Tax Calculator + Complete Guide","datePublished":"2026-02-01","dateModified":"2026-06-10","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/shipt-taxes-2026"}})

const orgSchema = JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com","logo":"https://www.gigwisetax.com/og-image.png","description":"Free gig worker tax calculators and guides for US independent contractors"})

export default function ShiptTaxes2026() {
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
            <span style={{ color: '#C8D8EC' }}>Shipt Taxes 2026</span>
          </nav>

          <h1
            itemProp="headline"
            style={{ fontSize: 'clamp(22px,5vw,24px)', fontWeight: 900, lineHeight: 1.3, color: '#e8edf8', margin: '0 0 16px' }}
          >
            Shipt Shopper Taxes 2026 — Free Calculator + Complete Guide
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
              Shipt shoppers are 1099 contractors and pay 15.3% self-employment tax on net earnings. On $35,000 net income: $4,944 SE tax + $2,806 federal income tax = $7,750 total. Quarterly payment: $1,938. The 2026 IRS mileage rate is 72.5 cents per mile — your largest deduction.
            </p>
          </div>
        </section>

        {/* KEY TAKEAWAYS */}
        <section id="key-takeaways">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8b84b', margin: '0 0 14px' }}>Key Takeaways</h2>
          <ul style={{ margin: '0 0 32px', paddingLeft: 20, lineHeight: 1.85, fontSize: 14, color: '#C8D8EC' }}>
            <li>Shipt shoppers on $35,000 net income owe approximately $7,750 in total federal tax</li>
            <li>SE tax formula: net income x 0.9235 x 0.153 = SE tax owed</li>
            <li>2026 IRS mileage rate: 72.5 cents per mile — deduct every mile driven for orders</li>
            <li>Tips up to $25,000 are federally deductible under OBBBA 2026</li>
            <li>Quarterly deadlines: April 15, June 16, September 15, January 15</li>
            <li>Set aside 25% of every Shipt payment for taxes</li>
          </ul>
        </section>

        {/* TOC */}
        <section id="toc">
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '18px 22px', marginBottom: 32 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#C8D8EC', marginBottom: 12 }}>Table of Contents</div>
            <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2, fontSize: 13 }}>
              <li><a href="#se-tax" style={{ color: '#e8b84b', textDecoration: 'none' }}>Shipt Self-Employment Tax 2026</a></li>
              <li><a href="#mileage" style={{ color: '#e8b84b', textDecoration: 'none' }}>Mileage Deduction for Shipt Shoppers</a></li>
              <li><a href="#deductions" style={{ color: '#e8b84b', textDecoration: 'none' }}>Top Shipt Tax Deductions</a></li>
              <li><a href="#quarterly" style={{ color: '#e8b84b', textDecoration: 'none' }}>Quarterly Tax Payments 2026</a></li>
              <li><a href="#1099" style={{ color: '#e8b84b', textDecoration: 'none' }}>Shipt 1099-NEC Form</a></li>
              <li><a href="#obbba" style={{ color: '#e8b84b', textDecoration: 'none' }}>OBBBA 2026 — New Tax Laws</a></li>
              <li><a href="#faq" style={{ color: '#e8b84b', textDecoration: 'none' }}>FAQ</a></li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section style={{ marginBottom: 36 }}>
          <div style={{ background: 'rgba(76,175,80,0.08)', border: '2px solid rgba(76,175,80,0.3)', borderRadius: 12, padding: '24px', textAlign: 'center' as const }}>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#e8edf8', margin: '0 0 8px' }}>Try the Free Shipt Tax Calculator</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', margin: '0 0 16px' }}>Enter earnings — get SE tax, federal + state, quarterly payments instantly. All 51 states.</p>
            <a href="/shipt" style={{ display: 'inline-block', background: '#4CAF50', color: '#fff', fontWeight: 700, fontSize: 15, padding: '12px 32px', borderRadius: 8, textDecoration: 'none' }}>
              Open Shipt Calculator →
            </a>
          </div>
        </section>

        {/* SE TAX */}
        <section id="se-tax" style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 14px' }}>
            How Much Self-Employment Tax Do Shipt Shoppers Pay in 2026?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            Shipt classifies all shoppers as independent contractors. You receive a 1099-NEC at year end. Unlike W-2 employees who split FICA taxes with their employer, Shipt shoppers pay the full 15.3% SE tax — 12.4% Social Security plus 2.9% Medicare on net earnings.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            SE tax calculation: multiply net Shipt income by 0.9235 (SE tax base), then by 0.153. On $35,000 net: $35,000 x 0.9235 x 0.153 = $4,944 SE tax. You also deduct 50% of SE tax on Form 1040, which reduces your adjusted gross income.
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
                  ['$35,000','$4,944','$2,806','$7,750','$1,938'],
                  ['$45,000','$6,357','$4,000','$10,357','$2,589'],
                  ['$55,000','$7,771','$5,500','$13,271','$3,318'],
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
            Mileage Deduction for Shipt Shoppers in 2026
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            The IRS standard mileage rate for 2026 is 72.5 cents per mile. For Shipt shoppers, deductible miles include driving from home to the store, driving within the store parking area, and driving from the store to the delivery address.
          </p>
          <div style={{ background: 'rgba(232,184,75,0.07)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '14px 18px', marginBottom: 16 }}>
            <p style={{ margin: 0, fontSize: 14, color: '#C8D8EC' }}>
              <strong style={{ color: '#e8b84b' }}>Example:</strong> 15,000 miles x $0.725 = <strong style={{ color: '#e8b84b' }}>$10,875 deduction</strong>. This reduces net income by $10,875, saving approximately $2,700 in taxes.
            </p>
          </div>
          <blockquote style={{ borderLeft: '3px solid #e8b84b', paddingLeft: 16, margin: '0 0 24px', color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.7 }}>
            Source: <a href="https://www.irs.gov/tax-professionals/standard-mileage-rates" rel="nofollow" style={{ color: '#e8b84b' }}>IRS Standard Mileage Rates</a> — 72.5 cents per mile for business use in 2026.
          </blockquote>
        </section>

        {/* DEDUCTIONS */}
        <section id="deductions" style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 14px' }}>
            Top Tax Deductions for Shipt Shoppers in 2026
          </h2>
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
                  ['Vehicle mileage','$7,250–$14,500','72.5¢/mile × 10k–20k miles'],
                  ['Insulated bags & coolers','$50–$200','Required for grocery delivery'],
                  ['Phone (50-80%)','$300–$600','Business portion only'],
                  ['Half SE tax deduction','$2,472','Auto-deducted on Form 1040'],
                  ['Health insurance','Up to 100%','If self-employed only'],
                  ['QBI deduction (20%)','Up to $7,000','20% of net Shipt profit'],
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

        {/* QUARTERLY */}
        <section id="quarterly" style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 14px' }}>
            Quarterly Tax Payments for Shipt Shoppers 2026
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            Shipt shoppers earning over $400 net must file a tax return. If you expect to owe $1,000 or more in federal taxes, you must pay quarterly estimated taxes using IRS Form 1040-ES.
          </p>
          <div style={{ overflowX: 'auto' as const, marginBottom: 24 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e8b84b', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Quarter</th>
                  <th style={{ padding: '10px 14px', textAlign: 'left' as const, color: '#e8b84b', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Period</th>
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

        {/* 1099 */}
        <section id="1099" style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 14px' }}>
            Shipt 1099-NEC Form — What You Need to Know
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            Shipt sends a 1099-NEC for total earnings over $2,000 under the OBBBA 2026 threshold (previously $600). You receive it by January 31, 2027 via the Shipt Target app or by email. Even if you earn below $2,000, you must report all income on Schedule C.
          </p>
        </section>

        {/* OBBBA */}
        <section id="obbba" style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 14px' }}>
            OBBBA 2026 — Key Changes for Shipt Shoppers
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            The One Big Beautiful Bill Act 2026 introduced three major changes for gig workers. First, the 1099-NEC threshold increased to $2,000 from $600. Second, tips up to $25,000 are now deductible from federal taxable income. Third, the 20% QBI deduction is now permanent.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.85, margin: '0 0 16px', color: 'rgba(255,255,255,0.85)' }}>
            On $35,000 net Shipt income with $5,000 in tips: the QBI deduction reduces taxable income by $7,000, and the tips deduction removes another $5,000 — combined saving approximately $3,000 in federal taxes.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 20px' }}>
            Frequently Asked Questions
          </h2>
          {[
            ['How much tax do Shipt shoppers pay in 2026?', 'Shipt shoppers pay 15.3% SE tax on net earnings. On $35,000 net: SE tax $4,944 + federal income tax $2,806 = $7,750 total. Quarterly payment: $1,938.'],
            ['Does Shipt send a 1099 form?', 'Yes. Shipt sends a 1099-NEC for earnings over $2,000 under OBBBA 2026. You receive it by January 31, 2027 via the Shipt app or email.'],
            ['What mileage can Shipt shoppers deduct?', 'Deduct 72.5 cents per mile for all business driving — home to store, store to delivery address. Track every mile with a mileage app.'],
            ['Do I need to pay quarterly taxes as a Shipt shopper?', 'Yes, if you expect to owe $1,000 or more. Deadlines: April 15, June 16, September 15, January 15.'],
            ['Are Shipt tips taxable in 2026?', 'Under OBBBA 2026, deduct up to $25,000 in tips from federal taxable income. Tips are still subject to SE tax.'],
            ['What percentage should I set aside for Shipt taxes?', 'Set aside 25% of net income. In high-tax states like California, set aside 30-35%.'],
            ['Can I deduct my car for Shipt deliveries?', 'Yes — use the standard mileage rate (72.5¢/mile) or actual vehicle expenses. Most shoppers benefit more from the standard rate.'],
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
            <li><a href="/shipt" style={{ color: '#e8b84b', textDecoration: 'none' }}>Shipt Tax Calculator 2026 — All States</a></li>
            <li><a href="/blog/instacart-shopper-taxes-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>Instacart Shopper Taxes 2026</a></li>
            <li><a href="/blog/walmart-spark-taxes-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>Walmart Spark Driver Taxes 2026</a></li>
            <li><a href="/blog/mileage-rate-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>IRS Mileage Rate 2026 Guide</a></li>
            <li><a href="/blog/self-employment-tax-deductions-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>Self-Employment Tax Deductions 2026</a></li>
          </ul>
        </section>

        <AuthorBox />
      </article>
    </>
  )
}
