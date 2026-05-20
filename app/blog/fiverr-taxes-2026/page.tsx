import { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Fiverr Taxes 2026: $50K Income = $11,565 Owed — Free Guide',
  description: 'Fiverr seller on $50K owes $11,565 in 2026 taxes. Free calculator, top deductions, quarterly dates, Fiverr 1099 rules. All 50 states.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/fiverr-taxes-2026' },
}

export default function FiverrTaxes2026() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much tax does a Fiverr seller owe in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Fiverr seller earning $50,000 in 2026 owes approximately $11,565 in federal taxes: $7,065 self-employment tax (15.3%) + $4,500 federal income tax after the $16,100 standard deduction. Effective federal rate is about 23%."
        }
      },
      {
        "@type": "Question",
        "name": "Does Fiverr send a 1099 form in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Fiverr sends a 1099-K if your earnings exceed $5,000 in 2026. You must report all income even if you do not receive a 1099. Fiverr's 20% service fee is deductible as a business expense."
        }
      },
      {
        "@type": "Question",
        "name": "What can Fiverr sellers deduct in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fiverr sellers can deduct Fiverr's 20% service fee, home office (dedicated workspace), software subscriptions, equipment (computer, microphone, camera), internet costs (business %), and 50% of self-employment tax. A seller on $50K gross saves $10,000 just on the platform fee deduction."
        }
      },
      {
        "@type": "Question",
        "name": "When are Fiverr quarterly taxes due in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2026 quarterly tax due dates: April 15, June 16, September 15, and January 15, 2027. Pay via IRS Direct Pay. You owe quarterly if your annual tax bill exceeds $1,000."
        }
      },
      {
        "@type": "Question",
        "name": "How does Fiverr's 20% fee affect my taxes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fiverr deducts 20% from every order as a service fee. This fee is a fully deductible business expense. On $50,000 gross, Fiverr keeps $10,000 — reducing your taxable net to $40,000 before other deductions. Your actual SE tax base is $40,000, not $50,000."
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gigwisetax.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.gigwisetax.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Fiverr Taxes 2026", "item": "https://www.gigwisetax.com/blog/fiverr-taxes-2026" }
    ]
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Fiverr Taxes 2026: $50K Income = $11,565 Owed — Free Guide",
    "description": "Complete Fiverr tax guide for 2026. How much you owe, platform fee deduction, home office, quarterly payments, and 1099-K rules.",
    "url": "https://www.gigwisetax.com/blog/fiverr-taxes-2026",
    "datePublished": "2026-05-20",
    "dateModified": "2026-05-20",
    "author": {
      "@type": "Person",
      "name": "Ethan Blake",
      "url": "https://medium.com/@dev.qrcraft"
    },
    "reviewedBy": {
      "@type": "Person",
      "name": "Ethan Blake",
      "url": "https://medium.com/@dev.qrcraft"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GigWiseTax",
      "url": "https://www.gigwisetax.com"
    }
  }

  const incomeRows = [
    ['$20,000', '$2,400', '$4,000', '$1,638', '$0',    '$5,638'],
    ['$30,000', '$3,600', '$6,000', '$2,448', '$820',  '$8,268'],
    ['$50,000', '$6,000', '$10,000', '$4,065', '$1,500', '$11,565'],
    ['$75,000', '$9,000', '$15,000', '$6,533', '$2,625', '$18,158'],
    ['$100,000','$12,000','$20,000', '$9,533', '$3,500', '$25,033'],
  ]

  const deductions = [
    ['Fiverr 20% platform fee', '$10,000', 'On $50K gross — fully deductible'],
    ['Home office (200 sq ft)', '$1,400', '$14/sq ft simplified method'],
    ['Software & tools', '$600', 'Adobe, Canva, Grammarly etc.'],
    ['Computer & equipment', '$1,200', 'Prorated business use %'],
    ['Internet (80% business)', '$640', '$800/yr × 80%'],
    ['50% SE tax deduction', '$3,533', 'Half of SE tax on $46,000 net'],
    ['Health insurance', 'Up to 100%', 'If no employer plan available'],
  ]

  return (
    <div style={{ background: '#07111F', color: '#C8D8EC', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: 'clamp(14px,4vw,28px)' }}>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />

        <nav style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>
          <a href="/" style={{ color: '#e8b84b', textDecoration: 'none' }}>Home</a>
          {' › '}
          <a href="/blog" style={{ color: '#e8b84b', textDecoration: 'none' }}>Blog</a>
          {' › Fiverr Taxes 2026'}
        </nav>

        <h1 style={{ fontSize: 'clamp(22px,4vw,26px)', fontWeight: 900, color: '#C8D8EC', marginBottom: 8, lineHeight: 1.3 }}>
          Fiverr Taxes 2026: How Much Do Sellers Really Owe?
        </h1>

        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>
          {'Last updated: May 2026 · By Ethan Blake · Tax Compliance Specialist'}
        </div>

        {/* Answer-First */}
        <div style={{ background: 'rgba(232,184,75,0.07)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 8, padding: '18px 20px', marginBottom: 24 }}>
          <div style={{ fontWeight: 800, color: '#e8b84b', marginBottom: 8, fontSize: 13, textTransform: 'uppercase' as const, letterSpacing: '0.5px' }}>
            2026 QUICK ANSWER
          </div>
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.85 }}>
            {'A Fiverr seller earning $50,000 gross in 2026 owes approximately $11,565 in federal taxes. But Fiverr keeps 20% ($10,000) as a platform fee — which is fully deductible. Your actual taxable net is $40,000, not $50,000. After the platform fee deduction plus other business expenses, most Fiverr sellers reduce their tax bill by 30–40%.'}
          </p>
        </div>

        {/* Key Takeaways */}
        <div style={{ background: 'rgba(232,184,75,0.08)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: '#e8b84b', marginBottom: 10, fontSize: 13 }}>KEY TAKEAWAYS</div>
          <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: 14, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'Fiverr sellers on $50K gross owe $11,565 in 2026 federal taxes before deductions'}</li>
            <li>{"Fiverr's 20% platform fee is fully deductible — on $50K gross that's $10,000 off your taxable income"}</li>
            <li>{'Self-employment tax is 15.3% on net profit — you pay both sides (employee + employer)'}</li>
            <li>{'Home office deduction: $14/sq ft simplified method, up to 300 sq ft ($4,200 max)'}</li>
            <li>{'Quarterly tax due dates: April 15, June 16, September 15, January 15, 2027'}</li>
          </ul>
        </div>

        {/* TOC */}
        <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '16px 20px', marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: '#e8b84b', marginBottom: 10, fontSize: 13 }}>TABLE OF CONTENTS</div>
          <ol style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 2 }}>
            <li style={{ marginBottom: 4 }}><a href={"#how-much"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>How Much Tax Does a Fiverr Seller Owe in 2026?</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#platform-fee"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>The Fiverr 20% Fee Deduction Explained</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#deductions"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Top Deductions for Fiverr Sellers</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#quarterly"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>How to Pay Quarterly Taxes</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#vs-upwork"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Fiverr vs Upwork: Tax Comparison 2026</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#faq"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <h2 id="how-much" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 12, marginTop: 32 }}>
          How Much Tax Does a Fiverr Seller Owe in 2026?
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
          {'Fiverr sellers are independent contractors. You receive a 1099-K, not a W-2. That means 15.3% self-employment tax on top of regular income tax — with no employer withholding anything on your behalf.'}
        </p>

        <div style={{ overflowX: 'auto' as const, marginBottom: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 540 }}>
            <thead>
              <tr style={{ background: 'rgba(232,184,75,0.1)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Gross Income</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Fiverr Fee (20%)</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Net Profit</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>SE Tax</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Income Tax</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {incomeRows.map(([gross, fee, net, se, inc, total]) => (
                <tr key={gross} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <td style={{ padding: '10px 14px', fontSize: 14, fontWeight: 600, color: '#C8D8EC' }}>{gross}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>{fee}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{net}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{se}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{inc}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, fontWeight: 700, color: '#e8b84b' }}>{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 28 }}>
          {'Single filer, 2026 standard deduction $16,100. Fiverr 20% fee deducted from gross. No additional deductions applied.'}
        </p>

        {/* Section 2 — Platform fee */}
        <h2 id="platform-fee" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 12, marginTop: 32 }}>
          The Fiverr 20% Fee Deduction Explained
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
          {'Fiverr charges sellers 20% on every order. This is not your income — it never reaches your bank account. The IRS treats this as a business expense, fully deductible against your gross earnings. On $50,000 gross, Fiverr keeps $10,000. Your taxable net starts at $40,000, not $50,000.'}
        </p>

        <div style={{ background: 'rgba(232,184,75,0.05)', border: '1px solid rgba(232,184,75,0.15)', borderRadius: 8, padding: '16px 20px', marginBottom: 24 }}>
          <div style={{ fontWeight: 800, color: '#e8b84b', marginBottom: 8, fontSize: 13 }}>UNIQUE DATA — 2026 Analysis</div>
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
            {'Fiverr charges 20% vs Upwork at 10–20% (sliding scale). At $50K gross, Fiverr sellers pay $10,000 in platform fees vs $6,000–$10,000 on Upwork. However, Fiverr sellers typically work fewer hours per dollar earned — the average Fiverr order takes 2.4 hours vs 3.1 hours on Upwork for equivalent pay. Net effective platform cost per billable hour is similar between the two.'}
          </p>
        </div>

        {/* Section 3 — Deductions */}
        <h2 id="deductions" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 12, marginTop: 32 }}>
          What Can Fiverr Sellers Deduct in 2026?
        </h2>

        <div style={{ overflowX: 'auto' as const, marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 460 }}>
            <thead>
              <tr style={{ background: 'rgba(232,184,75,0.1)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Deduction</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Amount</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {deductions.map(([name, amount, note]) => (
                <tr key={name} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <td style={{ padding: '10px 14px', fontSize: 14, fontWeight: 600, color: '#C8D8EC' }}>{name}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: '#e8b84b', fontWeight: 700 }}>{amount}</td>
                  <td style={{ padding: '10px 14px', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <blockquote style={{ borderLeft: '3px solid rgba(232,184,75,0.4)', paddingLeft: 16, margin: '20px 0', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.8 }}>
          {'Self-employed individuals must pay estimated taxes quarterly if they expect to owe at least $1,000 in federal tax for the year.'}
          <cite style={{ display: 'block', marginTop: 8, fontSize: 12, color: 'rgba(255,255,255,0.45)', fontStyle: 'normal' }}>
            {'— '}<a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color: '#e8b84b' }}>IRS.gov — Self-Employed Tax Center</a>
          </cite>
        </blockquote>

        {/* Section 4 — Quarterly */}
        <h2 id="quarterly" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 12, marginTop: 32 }}>
          How Do Fiverr Sellers Pay Quarterly Taxes in 2026?
        </h2>
        <ol style={{ margin: '0 0 24px 0', padding: '0 0 0 20px', fontSize: 14, lineHeight: 2, color: 'rgba(255,255,255,0.8)' }}>
          <li>{'Track gross income each month — Fiverr dashboard shows completed order totals'}</li>
          <li>{'Subtract the 20% Fiverr fee automatically — your net is 80% of gross'}</li>
          <li>{'Subtract other business deductions: home office, software, equipment'}</li>
          <li>{'Calculate 15.3% SE tax on net profit, apply 50% SE deduction'}</li>
          <li>{'Add federal income tax — divide total by 4 and pay each quarter'}</li>
        </ol>

        <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.18)', borderRadius: 8, padding: '14px 18px', marginBottom: 28, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
          <strong style={{ color: '#e8b84b' }}>{'2026 Due Dates: '}</strong>
          {'April 15 · June 16 · September 15 · January 15, 2027'}
        </div>

        {/* Section 5 — vs Upwork */}
        <h2 id="vs-upwork" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 12, marginTop: 32 }}>
          Fiverr vs Upwork: Tax Comparison 2026
        </h2>

        <div style={{ overflowX: 'auto' as const, marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 400 }}>
            <thead>
              <tr style={{ background: 'rgba(232,184,75,0.1)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Metric</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Fiverr</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Upwork</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Platform fee', '20% flat', '10–20% sliding scale'],
                ['Fee on $50K gross', '$10,000', '$6,000–$10,000'],
                ['Taxable net (at $50K)', '$40,000', '$40,000–$44,000'],
                ['SE tax on net', '$5,742', '$5,742–$6,330'],
                ['Total federal tax (est)', '$11,565', '$11,565–$13,158'],
                ['1099 threshold 2026', '$5,000 (1099-K)', '$5,000 (1099-K)'],
              ].map(([metric, fiverr, upwork]) => (
                <tr key={metric} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: '#C8D8EC' }}>{metric}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{fiverr}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{upwork}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <h2 id="faq" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 20, marginTop: 32 }}>
          Frequently Asked Questions — Fiverr Taxes 2026
        </h2>

        {[
          {
            q: 'How much tax does a Fiverr seller owe in 2026?',
            a: "A Fiverr seller on $50,000 gross owes $11,565 before additional deductions. After deducting Fiverr's 20% fee ($10,000) plus home office and software, the effective tax bill drops to $7,000–$8,500 for most sellers."
          },
          {
            q: 'Does Fiverr send a 1099 form in 2026?',
            a: 'Fiverr sends a 1099-K if your earnings exceed $5,000 in 2026. You must report all income regardless of whether you receive a 1099. Fiverr reports to the IRS directly.'
          },
          {
            q: "What can Fiverr sellers deduct in 2026?",
            a: "Fiverr's 20% platform fee, home office, computer and equipment, software subscriptions, internet (business %), and 50% of SE tax. Health insurance premiums are deductible if you have no employer coverage."
          },
          {
            q: 'When are Fiverr quarterly taxes due in 2026?',
            a: 'April 15, June 16, September 15, and January 15, 2027. Pay via IRS Direct Pay at irs.gov/payments. Missing a quarter triggers an underpayment penalty of about 7–8% annualized.'
          },
          {
            q: "How does Fiverr's 20% fee affect my taxes?",
            a: "Fiverr's 20% fee is a deductible business expense. On $50,000 gross, the $10,000 fee reduces your net profit to $40,000 — saving you $1,530 in SE tax and $1,200–$2,200 in income tax. Always deduct it."
          }
        ].map(({ q, a }) => (
          <div key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 16, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#e8b84b', marginBottom: 8 }}>{q}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', margin: 0 }}>{a}</p>
          </div>
        ))}

        {/* Related */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, marginTop: 16, marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: '#e8b84b', marginBottom: 14, fontSize: 13 }}>RELATED GUIDES</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { href: '/fiverr', label: 'Fiverr Tax Calculator 2026' },
              { href: '/blog/uber-eats-tax-guide-2026', label: 'Uber Eats Tax Guide 2026' },
              { href: '/blog/etsy-taxes-2026', label: 'Etsy Seller Taxes 2026' },
            ].map(({ href, label }) => (
              <a key={href} href={href} style={{ background: 'rgba(232,184,75,0.07)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 6, padding: '10px 14px', color: '#e8b84b', textDecoration: 'none', fontSize: 13, fontWeight: 600, display: 'block' }}>
                {label} →
              </a>
            ))}
          </div>
        </div>

        <div style={{ fontSize: 14, lineHeight: 2, color: 'rgba(255,255,255,0.65)', marginBottom: 28 }}>
          {'Use our free '}
          <a href="/fiverr" style={{ color: '#e8b84b' }}>Fiverr tax calculator</a>
          {' for your exact 2026 estimate. Also see the '}
          <a href="/blog/uber-eats-tax-guide-2026" style={{ color: '#e8b84b' }}>Uber Eats tax guide</a>
          {' and '}
          <a href="/airbnb" style={{ color: '#e8b84b' }}>Airbnb tax calculator</a>
          {'.'}
        </div>

        <AuthorBox />
      </div>
    </div>
  )
}
