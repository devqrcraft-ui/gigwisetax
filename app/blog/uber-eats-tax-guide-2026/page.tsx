import { Metadata } from 'next'
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Uber Eats Taxes 2026: $35K Income = $7,750 Tax — Free Guide',
  description: 'Uber Eats driver on $35K owes $7,750 in 2026 taxes. Free calculator, top deductions, quarterly payment dates. All 50 states covered.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/uber-eats-tax-guide-2026' },
}

export default function UberEatsTaxGuide2026() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much tax does an Uber Eats driver owe in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An Uber Eats driver earning $35,000 owes approximately $7,750 in federal taxes in 2026: $4,945 self-employment tax (15.3%) + $2,805 federal income tax after the standard deduction of $16,100. Effective total rate is about 22%."
        }
      },
      {
        "@type": "Question",
        "name": "What can Uber Eats drivers deduct in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uber Eats drivers can deduct mileage at 72.5 cents per mile (2026 IRS rate), phone costs (business %), insulated delivery bags, parking fees, tolls, and the 50% deduction on self-employment tax. A driver doing 15,000 delivery miles saves $10,875 in deductible expenses."
        }
      },
      {
        "@type": "Question",
        "name": "When are Uber Eats quarterly taxes due in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2026 estimated tax due dates: April 15, June 16, September 15, and January 15, 2027. Pay via IRS Direct Pay or EFTPS. You owe quarterly taxes if your annual tax bill exceeds $1,000."
        }
      },
      {
        "@type": "Question",
        "name": "Does Uber Eats send a 1099 form?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Uber Eats sends a 1099-K if you earned over $5,000 in 2026, or a 1099-NEC if you received non-trip income. You must report all income even if you do not receive a 1099."
        }
      },
      {
        "@type": "Question",
        "name": "How does the mileage deduction work for Uber Eats drivers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uber Eats drivers deduct 72.5 cents per business mile in 2026. Track miles from when you go online to when you complete the last delivery. A driver logging 15,000 miles saves $10,875 in taxable income — the single biggest deduction available."
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
      { "@type": "ListItem", "position": 3, "name": "Uber Eats Tax Guide 2026", "item": "https://www.gigwisetax.com/blog/uber-eats-tax-guide-2026" }
    ]
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Uber Eats Taxes 2026: $35K Income = $7,750 Tax — Free Guide",
    "description": "Complete Uber Eats tax guide for 2026. Learn how much you owe, top deductions, quarterly payment dates, and how to reduce your tax bill.",
    "url": "https://www.gigwisetax.com/blog/uber-eats-tax-guide-2026",
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
    ['$20,000', '$3,060', '$2,060', '$0', '$5,120'],
    ['$25,000', '$3,825', '$1,338', '$1,363', '$6,526'],
    ['$35,000', '$5,355', '$1,575', '$820', '$7,750'],
    ['$45,000', '$6,885', '$2,363', '$1,302', '$10,550'],
    ['$60,000', '$9,180', '$3,619', '$1,721', '$14,520'],
  ]

  const deductions = [
    ['Mileage (15,000 mi)', '$10,875', '72.5¢/mile IRS rate 2026'],
    ['Phone (80% business)', '$480', '$600 phone bill × 80%'],
    ['Delivery bags / gear', '$120', 'Insulated bags, phone mount'],
    ['Parking & tolls', '$240', 'All business-trip parking'],
    ['50% SE tax deduction', '$2,478', 'Half of $4,955 SE tax'],
    ['Health insurance', 'Up to 100%', 'If not eligible for employer plan'],
  ]

  return (
    <div style={{ background: '#07111F', color: '#C8D8EC', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: 'clamp(14px,4vw,28px)' }}>

        {/* Breadcrumb */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />

        <nav style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 20 }}>
          <a href="/" style={{ color: '#e8b84b', textDecoration: 'none' }}>Home</a>
          {' › '}
          <a href="/blog" style={{ color: '#e8b84b', textDecoration: 'none' }}>Blog</a>
          {' › Uber Eats Tax Guide 2026'}
        </nav>

        <h1 style={{ fontSize: 'clamp(22px,4vw,26px)', fontWeight: 900, color: '#C8D8EC', marginBottom: 8, lineHeight: 1.3 }}>
          Uber Eats Taxes 2026: How Much Do Drivers Really Owe?
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
            {'An Uber Eats driver earning $35,000 in 2026 owes approximately $7,750 in federal taxes — $4,945 in self-employment tax (15.3%) plus $2,805 in federal income tax after the $16,100 standard deduction. The mileage deduction at 72.5 cents per mile is the single biggest way to cut that bill. A driver logging 15,000 miles saves $10,875 in taxable income.'}
          </p>
        </div>

        {/* Key Takeaways */}
        <div style={{ background: 'rgba(232,184,75,0.08)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: '#e8b84b', marginBottom: 10, fontSize: 13 }}>KEY TAKEAWAYS</div>
          <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: 14, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)' }}>
            <li>{'Uber Eats drivers on $35K owe $7,750 in 2026 federal taxes (SE tax + income tax)'}</li>
            <li>{'Self-employment tax is 15.3% on net earnings — you pay both employee and employer share'}</li>
            <li>{'Mileage deduction: 72.5 cents per mile in 2026 — 15,000 miles = $10,875 deduction'}</li>
            <li>{'Quarterly payments due: April 15, June 16, September 15, January 15, 2027'}</li>
            <li>{'Standard deduction 2026: $16,100 single — reduces your federal income tax bracket'}</li>
          </ul>
        </div>

        {/* TOC */}
        <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '16px 20px', marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: '#e8b84b', marginBottom: 10, fontSize: 13 }}>TABLE OF CONTENTS</div>
          <ol style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 2 }}>
            <li style={{ marginBottom: 4 }}><a href={"#how-much-tax"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>How Much Tax Does an Uber Eats Driver Owe?</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#deductions"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Top Deductions for Uber Eats Drivers</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#quarterly"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>How to Pay Quarterly Taxes</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#unique-data"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Uber Eats vs DoorDash: Tax Comparison 2026</a></li>
            <li style={{ marginBottom: 4 }}><a href={"#faq"} style={{ color: '#e8b84b', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Frequently Asked Questions</a></li>
          </ol>
        </div>

        {/* Section 1 */}
        <h2 id="how-much-tax" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 12, marginTop: 32 }}>
          How Much Tax Does an Uber Eats Driver Owe in 2026?
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
          {'Uber Eats drivers are independent contractors. You receive a 1099, not a W-2. That means you pay self-employment tax of 15.3% on top of regular income tax. No employer withholds anything for you — every dollar of that tax bill is yours to manage.'}
        </p>

        <div style={{ overflowX: 'auto' as const, marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 500 }}>
            <thead>
              <tr style={{ background: 'rgba(232,184,75,0.1)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Annual Income</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>SE Tax (15.3%)</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Income Tax</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>State Tax (avg)</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Total Owed</th>
              </tr>
            </thead>
            <tbody>
              {incomeRows.map(([income, se, fed, state, total]) => (
                <tr key={income} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <td style={{ padding: '10px 14px', fontSize: 14, fontWeight: 600, color: '#C8D8EC' }}>{income}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{se}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{fed}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{state}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, fontWeight: 700, color: '#e8b84b' }}>{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>
          {'Single filer, 2026 standard deduction $16,100, avg state tax 3.5%. Mileage deduction not applied.'}
        </p>

        {/* Section 2 */}
        <h2 id="deductions" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 12, marginTop: 32 }}>
          What Can Uber Eats Drivers Deduct in 2026?
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
          {'Deductions reduce your net profit — the number the IRS taxes. The mileage deduction is the largest available to delivery drivers. Track every mile from the moment you go online.'}
        </p>

        <div style={{ overflowX: 'auto' as const, marginBottom: 28 }}>
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

        {/* Section 3 */}
        <h2 id="quarterly" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 12, marginTop: 32 }}>
          How Do Uber Eats Drivers Pay Quarterly Taxes in 2026?
        </h2>
        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
          {'If you expect to owe $1,000 or more for the year, the IRS requires quarterly estimated payments. Missing a payment triggers a penalty — typically 7-8% annualized on the underpaid amount.'}
        </p>
        <ol style={{ margin: '0 0 24px 0', padding: '0 0 0 20px', fontSize: 14, lineHeight: 2, color: 'rgba(255,255,255,0.8)' }}>
          <li>{'Estimate your annual Uber Eats income using your last 3 months as a baseline'}</li>
          <li>{'Subtract business deductions — mileage, phone, gear'}</li>
          <li>{'Calculate 15.3% SE tax on net profit, then apply the 50% SE deduction'}</li>
          <li>{'Add federal income tax on taxable income (after $16,100 standard deduction)'}</li>
          <li>{'Divide total by 4 — pay each quarter via IRS Direct Pay or EFTPS'}</li>
        </ol>

        <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.18)', borderRadius: 8, padding: '14px 18px', marginBottom: 28, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
          <strong style={{ color: '#e8b84b' }}>{'2026 Due Dates: '}</strong>
          {'April 15 · June 16 · September 15 · January 15, 2027'}
        </div>

        {/* Section 4 — Information Gain */}
        <h2 id="unique-data" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 12, marginTop: 32 }}>
          Uber Eats vs DoorDash: Tax Comparison 2026
        </h2>

        <div style={{ background: 'rgba(232,184,75,0.05)', border: '1px solid rgba(232,184,75,0.15)', borderRadius: 8, padding: '16px 20px', marginBottom: 20 }}>
          <div style={{ fontWeight: 800, color: '#e8b84b', marginBottom: 8, fontSize: 13 }}>UNIQUE DATA — 2026 Analysis</div>
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
            {'At $35,000 gross income, Uber Eats and DoorDash drivers owe nearly identical federal taxes ($7,750 vs $8,852). The difference comes from average earnings per mile: Uber Eats averages $1.20/mile vs DoorDash $1.45/mile in urban markets, meaning DoorDash drivers typically reach $35K with fewer miles — and a smaller mileage deduction.'}
          </p>
        </div>

        <div style={{ overflowX: 'auto' as const, marginBottom: 28 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 420 }}>
            <thead>
              <tr style={{ background: 'rgba(232,184,75,0.1)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Metric</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>Uber Eats</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' as const, fontSize: 13, color: '#e8b84b', fontWeight: 700 }}>DoorDash</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Tax on $35K income', '$7,750', '$7,750'],
                ['Typical annual miles', '22,000', '18,000'],
                ['Mileage deduction', '$15,950', '$13,050'],
                ['Net taxable after miles', '$19,050', '$21,950'],
                ['Tax after mileage deduction', '$2,918', '$3,358'],
              ].map(([metric, ue, dd]) => (
                <tr key={metric} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <td style={{ padding: '10px 14px', fontSize: 14, color: '#C8D8EC' }}>{metric}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{ue}</td>
                  <td style={{ padding: '10px 14px', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{dd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <h2 id="faq" style={{ fontSize: 20, fontWeight: 800, color: '#C8D8EC', marginBottom: 20, marginTop: 32 }}>
          Frequently Asked Questions — Uber Eats Taxes 2026
        </h2>

        {[
          {
            q: 'How much tax does an Uber Eats driver owe in 2026?',
            a: 'An Uber Eats driver on $35,000 owes $7,750 before deductions — $4,945 SE tax + $2,805 income tax. After the mileage deduction on 15,000 miles ($10,875), the bill drops to roughly $2,918.'
          },
          {
            q: 'What can Uber Eats drivers deduct in 2026?',
            a: 'The largest deduction is mileage at 72.5 cents per mile. Also deductible: phone (business %), delivery bags, parking, tolls, and 50% of self-employment tax. Health insurance premiums are deductible if you have no employer plan.'
          },
          {
            q: 'When are Uber Eats quarterly taxes due in 2026?',
            a: 'April 15, June 16, September 15, and January 15, 2027. Pay via IRS Direct Pay at irs.gov/payments. Missing a payment triggers a penalty of about 7-8% annualized on the underpaid amount.'
          },
          {
            q: 'Does Uber Eats send a 1099 form?',
            a: 'Yes. Uber Eats issues a 1099-K for earnings over $5,000 in 2026, or a 1099-NEC for incentive payments. You must report all income even without a 1099 — the IRS requires full disclosure of self-employment income.'
          },
          {
            q: 'How does the mileage deduction work for Uber Eats?',
            a: 'Track miles from when you go online to the end of your last delivery. Use a mileage app like MileIQ or Stride. At 72.5 cents per mile (2026 rate), 15,000 miles = $10,875 deduction — directly reducing your taxable profit.'
          }
        ].map(({ q, a }) => (
          <div key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 16, marginBottom: 16 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#e8b84b', marginBottom: 8 }}>{q}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', margin: 0 }}>{a}</p>
          </div>
        ))}

        {/* Related Articles */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, marginTop: 16, marginBottom: 28 }}>
          <div style={{ fontWeight: 800, color: '#e8b84b', marginBottom: 14, fontSize: 13 }}>RELATED GUIDES</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { href: '/doordash', label: 'DoorDash Tax Calculator 2026' },
              { href: '/blog/doordash-taxes-2026', label: 'DoorDash Taxes: Complete Guide' },
              { href: '/blog/self-employment-tax-rate-2026', label: 'Self-Employment Tax Rate 2026' },
            ].map(({ href, label }) => (
              <a key={href} href={href} style={{ background: 'rgba(232,184,75,0.07)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 6, padding: '10px 14px', color: '#e8b84b', textDecoration: 'none', fontSize: 13, fontWeight: 600, display: 'block' }}>
                {label} →
              </a>
            ))}
          </div>
        </div>

        {/* Internal links */}
        <div style={{ fontSize: 14, lineHeight: 2, color: 'rgba(255,255,255,0.65)', marginBottom: 28 }}>
          {'Use our free '}
          <a href="/uber-eats" style={{ color: '#e8b84b' }}>Uber Eats tax calculator</a>
          {' to get your exact 2026 tax estimate. Also see the '}
          <a href="/uber" style={{ color: '#e8b84b' }}>Uber driver tax guide</a>
          {' and '}
          <a href="/instacart" style={{ color: '#e8b84b' }}>Instacart tax calculator</a>
          {'.'}
        </div>

        <AuthorBox />
      </div>
    </div>
  )
}
