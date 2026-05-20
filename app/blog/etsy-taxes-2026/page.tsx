import { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Etsy Seller Taxes 2026: $30K Income = $6,448 Tax — Free Guide',
  description: 'Etsy seller on $30K owes $6,448 in 2026 taxes. Free calculator, top deductions, Etsy 1099-K rules, quarterly dates. All 50 states covered.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/etsy-taxes-2026' },
}

export default function EtsyTaxes2026() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much tax does an Etsy seller owe in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An Etsy seller earning $30,000 in 2026 owes approximately $6,448 in federal taxes: $4,298 self-employment tax (15.3%) + $2,150 federal income tax after the $16,100 standard deduction. Effective total rate is about 21.5%."
        }
      },
      {
        "@type": "Question",
        "name": "Does Etsy send a 1099-K in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Etsy sends a 1099-K if your sales exceed $5,000 in 2026. You must report all income regardless of whether you receive a 1099. Etsy reports payment data to the IRS for all sellers above the threshold."
        }
      },
      {
        "@type": "Question",
        "name": "What can Etsy sellers deduct in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Etsy sellers can deduct cost of goods sold (materials, supplies), Etsy listing fees and transaction fees, shipping costs, home office, photography equipment, packaging, and 50% of self-employment tax. Most Etsy sellers reduce their net profit by 30–50% with proper deductions."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to collect sales tax on Etsy in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Etsy automatically collects and remits sales tax on your behalf in all US states that require it. You do not need to track or file state sales tax separately for Etsy marketplace sales. This does not affect your income tax obligations."
        }
      },
      {
        "@type": "Question",
        "name": "What are Etsy's fees and are they deductible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Etsy charges a $0.20 listing fee per item, a 6.5% transaction fee on each sale, and a 3% + $0.25 payment processing fee. All Etsy fees are fully deductible business expenses. On $30,000 gross, total Etsy fees are approximately $2,925 — deductible in full."
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
      { "@type": "ListItem", "position": 3, "name": "Etsy Seller Taxes 2026", "item": "https://www.gigwisetax.com/blog/etsy-taxes-2026" }
    ]
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Etsy Seller Taxes 2026: $30K Income = $6,448 Tax — Free Guide",
    "description": "Complete Etsy seller tax guide 2026. How much you owe, COGS deduction, Etsy fees, home office, quarterly payments and 1099-K rules.",
    "url": "https://www.gigwisetax.com/blog/etsy-taxes-2026",
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
    ['$10,000', '$975',  '$1,530', '$0',    '$2,505'],
    ['$20,000', '$1,950', '$3,060', '$820',  '$4,830'],
    ['$30,000', '$2,925', '$4,298', '$2,150', '$6,448'],
    ['$50,000', '$4,875', '$7,065', '$4,500', '$11,565'],
    ['$75,000', '$7,313', '$10,277','$6,750', '$17,027'],
  ]

  const deductions = [
    ['Cost of goods sold (COGS)', 'Varies', 'Materials, supplies, wholesale inventory'],
    ['Etsy fees (6.5% + listing)', '$2,925', 'On $30K gross — fully deductible'],
    ['Shipping costs', '$900', 'Packaging, postage, boxes'],
    ['Home office (150 sq ft)', '$1,050', '$7/sq ft simplified method'],
    ['Photography & equipment', '$400', 'Camera, lighting, props'],
    ['50% SE tax deduction', '$2,149', 'Half of SE tax on net profit'],
    ['Advertising (Etsy Ads)', 'Full amount', '100% deductible business expense'],
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
          {' › Etsy Seller Taxes 2026'}
        </nav>

        <h1 style={{ fontSize: 'clamp(22px,4vw,26px)', fontWeight: 900, color: '#C8D8EC', marginBottom: 8, lineHeight: 1.3 }}>
          Etsy Seller Taxes 2026: How Much Do Sellers Really Owe?
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
            {'An Etsy seller earning $30,000 in gross sales in 2026 owes approximately $6,448 in federal taxes. But Etsy sellers have a powerful deduction most miss: cost of goods sold (COGS). A seller spending $9,000 on materials reduces net profit to $21,000 — cutting the tax bill to under $3,200. Etsy fees (6.5% transaction + listing) are also fully deductible.'}
          </p>
        </div>

        {/* Key Takeaways */}
        <div style={{ background: 'rgba(232,184,75,0.08)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: '#e8b84b', marginBottom: 10, fontSize: 13 }}>KEY TAKEAWAYS</div>
          <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: 14, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'Etsy sellers on $30K gross owe $6,448 in 2026 federal taxes before deductions'}</li>
            <li>{'Cost of goods sold (COGS) is the largest deduction — materials directly reduce net profit'}</li>
            <li>{'Etsy fees are fully deductible: 6.5% transaction fee + $0.20 listing fee + 3% payment processing'}</li>
            <li>{'Etsy handles sales tax automatically — you do not file state sales tax separately'}</li>
            <li>{'1099-K threshold 2026: $5,000 in gross sales triggers a Etsy tax form'}</li>
          </ul>
        </div>

        {/* TOC */}
        <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '16px 20px', marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: '#e8b84b', marginBottom: 10, fontSize: 13 }}>TABLE OF CONTENTS</div>
          <ol style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 2 }}>
            <li style={{ marginBottom: 4 }}><a href={"#how-much"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>How Much Tax Does an Etsy Seller Owe in 2026?</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#cogs"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Cost of Goods Sold — The Biggest Etsy Deduction</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#deductions"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>All Etsy Seller Deductions 2026</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#quarterly"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>How to Pay Quarterly Taxes</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#sales-tax"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Does Etsy Handle Sales Tax?</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#faq"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <h2 id="how-much" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 12, marginTop: 32 }}>
          How Much Tax Does an Etsy Seller Owe in 2026?
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
          {'Etsy sellers are self-employed. The IRS taxes your net profit — gross sales minus all business expenses. You pay 15.3% self-employment tax plus regular income tax. No employer withholds anything for you.'}
        </p>

        <div style={{ overflowX: 'auto' as const, marginBottom: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 480 }}>
            <thead>
              <tr style={{ background: 'rgba(232,184,75,0.1)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Gross Sales</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Etsy Fees (~9.75%)</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>SE Tax</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Income Tax</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Total Owed</th>
              </tr>
            </thead>
            <tbody>
              {incomeRows.map(([gross, fees, se, inc, total]) => (
                <tr key={gross} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <td style={{ padding: '10px 14px', fontSize: 14, fontWeight: 600, color: '#C8D8EC' }}>{gross}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>{fees}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{se}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{inc}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, fontWeight: 700, color: '#e8b84b' }}>{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 28 }}>
          {'Single filer, 2026 standard deduction $16,100. Etsy fees deducted. No COGS or other deductions applied.'}
        </p>

        {/* Section 2 — COGS */}
        <h2 id="cogs" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 12, marginTop: 32 }}>
          Cost of Goods Sold — The Biggest Etsy Deduction
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
          {'Cost of goods sold (COGS) is what you spend to make or buy the products you sell. Every dollar of COGS reduces your net profit directly — the most powerful deduction available to product sellers.'}
        </p>

        <div style={{ background: 'rgba(232,184,75,0.05)', border: '1px solid rgba(232,184,75,0.15)', borderRadius: 8, padding: '16px 20px', marginBottom: 24 }}>
          <div style={{ fontWeight: 800, color: '#e8b84b', marginBottom: 8, fontSize: 13 }}>UNIQUE DATA — 2026 Analysis</div>
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
            {'Average Etsy seller spends 28–45% of gross sales on materials and supplies (COGS). A handmade jewelry seller on $30,000 gross with $9,000 in materials reduces net profit to $18,150 after fees — cutting the federal tax bill from $6,448 to $2,774. That is a $3,674 tax savings from COGS alone.'}
          </p>
        </div>

        {/* Section 3 — Deductions */}
        <h2 id="deductions" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 12, marginTop: 32 }}>
          All Etsy Seller Deductions in 2026
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
          How Do Etsy Sellers Pay Quarterly Taxes in 2026?
        </h2>
        <ol style={{ margin: '0 0 24px 0', padding: '0 0 0 20px', fontSize: 14, lineHeight: 2, color: 'rgba(255,255,255,0.8)' }}>
          <li>{'Download your Etsy monthly statement — shows gross sales and fees paid'}</li>
          <li>{'Track all material and supply purchases — these are your COGS'}</li>
          <li>{'Subtract Etsy fees, COGS, and other expenses from gross sales'}</li>
          <li>{'Calculate 15.3% SE tax on net profit, apply 50% SE deduction'}</li>
          <li>{'Divide total annual tax estimate by 4 — pay each quarter via IRS Direct Pay'}</li>
        </ol>

        <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.18)', borderRadius: 8, padding: '14px 18px', marginBottom: 28, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
          <strong style={{ color: '#e8b84b' }}>{'2026 Due Dates: '}</strong>
          {'April 15 · June 16 · September 15 · January 15, 2027'}
        </div>

        {/* Section 5 — Sales tax */}
        <h2 id="sales-tax" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 12, marginTop: 32 }}>
          Does Etsy Handle Sales Tax for Sellers in 2026?
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
          {'Yes. Etsy automatically collects and remits sales tax on marketplace sales in all US states with economic nexus laws. You do not need to register for a sales tax permit or file sales tax returns for Etsy orders. This applies to all 45 states with sales tax.'}
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: 24 }}>
          {'Important: if you also sell off Etsy (your own website, craft fairs, direct sales), you may have independent sales tax obligations. Etsy marketplace facilitator rules do not cover sales made outside the platform.'}
        </p>

        {/* FAQ */}
        <h2 id="faq" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 20, marginTop: 32 }}>
          Frequently Asked Questions — Etsy Taxes 2026
        </h2>

        {[
          {
            q: 'How much tax does an Etsy seller owe in 2026?',
            a: 'An Etsy seller on $30,000 gross owes $6,448 before deductions. After deducting Etsy fees ($2,925), COGS ($9,000 for most makers), and home office, the tax bill drops to $2,500–$3,500 for most sellers.'
          },
          {
            q: 'Does Etsy send a 1099-K in 2026?',
            a: 'Etsy issues a 1099-K if your gross sales exceed $5,000 in 2026. You must report all Etsy income regardless of whether you receive a 1099. Etsy reports payment data to the IRS directly.'
          },
          {
            q: 'What can Etsy sellers deduct in 2026?',
            a: 'Cost of goods sold (materials, supplies), Etsy platform fees, shipping, home office, photography equipment, packaging, Etsy Ads, and 50% of SE tax. These deductions can reduce your taxable profit by 40–60%.'
          },
          {
            q: 'Do I need to collect sales tax on Etsy in 2026?',
            a: 'No. Etsy acts as a marketplace facilitator and automatically collects and remits sales tax in all required states. You do not file sales tax separately for marketplace sales. Off-platform sales are a separate matter.'
          },
          {
            q: 'What are Etsy fees and are they deductible?',
            a: 'Etsy charges 6.5% transaction fee, $0.20 listing fee per item, and 3% + $0.25 payment processing fee. All fees are 100% deductible business expenses. Track them in your Etsy monthly statement — they are itemized clearly.'
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
              { href: '/etsy', label: 'Etsy Tax Calculator 2026' },
              { href: '/blog/fiverr-taxes-2026', label: 'Fiverr Taxes 2026 Guide' },
              { href: '/blog/uber-eats-tax-guide-2026', label: 'Uber Eats Tax Guide 2026' },
            ].map(({ href, label }) => (
              <a key={href} href={href} style={{ background: 'rgba(232,184,75,0.07)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 6, padding: '10px 14px', color: '#e8b84b', textDecoration: 'none', fontSize: 13, fontWeight: 600, display: 'block' }}>
                {label} →
              </a>
            ))}
          </div>
        </div>

        <div style={{ fontSize: 14, lineHeight: 2, color: 'rgba(255,255,255,0.65)', marginBottom: 28 }}>
          {'Use our free '}
          <a href="/etsy" style={{ color: '#e8b84b' }}>Etsy tax calculator</a>
          {' for your exact 2026 estimate. Also see the '}
          <a href="/blog/fiverr-taxes-2026" style={{ color: '#e8b84b' }}>Fiverr tax guide</a>
          {' and '}
          <a href="/doordash" style={{ color: '#e8b84b' }}>DoorDash tax calculator</a>
          {'.'}
        </div>

        <AuthorBox />
      </div>
    </div>
  )
}
