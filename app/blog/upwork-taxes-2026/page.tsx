import AuthorBox from '@/app/components/AuthorBox'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upwork Taxes 2026: $60K Income = $14,278 Tax Owed',
  description: 'Upwork freelancers on $60K owe $14,278 in 2026 taxes. Free calculator — home office, software, mileage deductible. All 50 states.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/upwork-taxes-2026' },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do Upwork freelancers file taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"Upwork freelancers file as independent contractors using Schedule C to report income and deductions. You report earnings from your 1099-K or 1099-NEC, subtract deductions like home office and software, and pay self-employment tax on net profit."}},{"@type":"Question","name":"How much self-employment tax does an Upwork freelancer pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"Upwork freelancers pay 15.3% self-employment tax on net profit — 12.4% Social Security and 2.9% Medicare. On $60,000 net income that is approximately $8,478 in SE tax."}},{"@type":"Question","name":"Does Upwork send a 1099 form to freelancers?","acceptedAnswer":{"@type":"Answer","text":"Yes. Upwork sends a 1099-K if gross earnings exceed $600 in 2026 under OBBBA rules, or a 1099-NEC for other payments. Forms are available in your Upwork account by January 31 each year."}},{"@type":"Question","name":"What quarterly estimated tax does an Upwork freelancer pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"On $60,000 net income, quarterly estimated payments are approximately $3,570 per quarter. IRS due dates are April 15, June 16, September 15, and January 15."}},{"@type":"Question","name":"What can Upwork freelancers deduct in 2026?","acceptedAnswer":{"@type":"Answer","text":"Upwork freelancers can deduct home office, software subscriptions, hardware, internet, phone business use, professional development, and the Upwork service fee (10% on earnings over $10K). All deductions go on Schedule C."}},{"@type":"Question","name":"Is the Upwork service fee tax deductible in 2026?","acceptedAnswer":{"@type":"Answer","text":"Yes. The Upwork service fee — 20% on first $500, 10% on $500.01 to $10,000, and 5% above $10,000 per client — is a business expense deductible on Schedule C as a platform fee."}},{"@type":"Question","name":"Can Upwork freelancers deduct a home office in 2026?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you work from a dedicated home space used exclusively for freelance work, deduct it using the simplified method at $5 per sq ft up to 300 sq ft, or actual expenses proportional to business use."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Upwork Taxes 2026","item":"https://www.gigwisetax.com/blog/upwork-taxes-2026"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Upwork Taxes 2026: $60K Income = $14,278 Tax Owed","datePublished":"2026-05-27","dateModified":"2026-05-27","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/upwork-taxes-2026"}}'

export default function UpworkTaxes2026() {
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
          <nav aria-label="breadcrumb" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</a>
            {' › '}
            <a href="/blog" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Blog</a>
            {' › '}Upwork Taxes 2026
          </nav>
          <h1
            itemProp="headline"
            style={{ fontSize: 'clamp(22px,5vw,24px)', fontWeight: 900, color: '#e8edf8', lineHeight: 1.3, marginBottom: 12 }}
          >
            Upwork Taxes 2026: $60K Income = $14,278 Tax Owed
          </h1>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 24, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <span>Last updated: May 2026</span><span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span><span>·</span>
            <span>{'~8 min read · 2,000 words'}</span>
          </div>
        </header>

        <section id="answer-first">
          <div style={{ background: 'rgba(232,184,75,0.06)', borderLeft: '3px solid #e8b84b', borderRadius: '0 6px 6px 0', padding: '16px 20px', marginBottom: 28 }}>
            <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, margin: 0 }}>
              Upwork freelancers are independent contractors — no taxes are withheld. On <strong style={{ color: '#e8edf8' }}>$60,000 net income</strong> in 2026: approximately $8,478 SE tax + $5,800 federal income tax = <strong style={{ color: '#e8edf8' }}>$14,278 total tax owed</strong>. Quarterly estimated payment: <strong style={{ color: '#e8b84b' }}>$3,570</strong>. Home office, software subscriptions, and the Upwork service fee are the top deductions for remote freelancers.
            </p>
          </div>
        </section>

        <section id="takeaways">
          <div style={{ background: 'rgba(232,184,75,0.04)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '20px 24px', marginBottom: 32 }}>
            <div style={{ fontSize: 13, fontFamily: 'monospace', color: '#e8b84b', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Key Takeaways</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              {[
                '$60K net income = $14,278 total tax owed in 2026 ($3,570/quarter)',
                'SE tax rate: 15.3% on net profit (12.4% SS + 2.9% Medicare)',
                'Upwork service fee (5–20%) is fully deductible as a platform expense on Schedule C',
                'Home office deduction: $5/sq ft up to 300 sq ft — $1,500 max simplified method',
                'Upwork sends 1099-K for earnings over $600 by January 31',
                'Software, hardware, internet, and phone business-use portion all deductible',
              ].map((t, i) => (
                <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.6, paddingLeft: 16, position: 'relative' as const }}>
                  <span style={{ position: 'absolute' as const, left: 0, top: 9, width: 5, height: 5, borderRadius: '50%', background: '#e8b84b', display: 'block' }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="toc">
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: '18px 22px', marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontFamily: 'monospace', color: '#e8b84b', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 12 }}>Table of Contents</div>
            <ol style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
              {[
                ['#tax-breakdown', 'How Much Tax Does an Upwork Freelancer Pay in 2026?'],
                ['#deductions', 'Top Tax Deductions for Upwork Freelancers'],
                ['#service-fee', 'Is the Upwork Service Fee Tax Deductible?'],
                ['#home-office', 'Home Office Deduction for Remote Freelancers'],
                ['#quarterly', 'Quarterly Estimated Taxes for Upwork Freelancers'],
                ['#1099', 'Does Upwork Send a 1099 Form?'],
                ['#qbi', 'QBI Deduction for Upwork Freelancers in 2026'],
                ['#faq', 'Frequently Asked Questions'],
              ].map(([href, label]) => (
                <li key={href}><a href={href} style={{ color: '#e8b84b', fontSize: 13, textDecoration: 'none', lineHeight: 1.7 }}>{label}</a></li>
              ))}
            </ol>
          </div>
        </section>

        <section id="tax-breakdown">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            How Much Tax Does an Upwork Freelancer Pay in 2026?
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Upwork reports your earnings but withholds nothing. You owe self-employment tax at <strong style={{ color: '#e8edf8' }}>15.3%</strong> on net profit, plus federal income tax on top. Higher income means a higher bracket — plan quarterly payments carefully.
          </p>
          <div style={{ overflowX: 'auto' as const, marginBottom: 24, borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
              <thead>
                <tr>
                  {['Income Level', 'SE Tax (15.3%)', 'Federal Income Tax', 'Total Owed', 'Per Quarter'].map(h => (
                    <th key={h} style={{ background: 'rgba(255,255,255,0.05)', color: '#e8b84b', padding: '10px 14px', textAlign: 'left' as const, fontSize: 12, fontFamily: 'monospace', letterSpacing: '0.04em', borderBottom: '1px solid rgba(232,184,75,0.2)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['$30,000', '$4,239', '$2,400', '$6,639', '$1,660'],
                  ['$40,000', '$5,652', '$3,400', '$9,052', '$2,263'],
                  ['$50,000', '$7,065', '$4,600', '$11,665', '$2,916'],
                  ['$60,000', '$8,478', '$5,800', '$14,278', '$3,570'],
                  ['$80,000', '$11,304', '$8,800', '$20,104', '$5,026'],
                ].map((row, i, arr) => (
                  <tr key={i} style={i === arr.length - 1 ? { background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' } : { borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '10px 14px', color: i === arr.length - 1 ? '#e8b84b' : 'rgba(255,255,255,0.85)', fontWeight: i === arr.length - 1 ? 700 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <blockquote style={{ borderLeft: '3px solid #e8b84b', background: 'rgba(232,184,75,0.04)', padding: '14px 18px', margin: '24px 0', borderRadius: '0 6px 6px 0' }}>
            <p style={{ margin: 0, fontSize: 13, fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
              "If you carry on a trade or business as a sole proprietor or independent contractor, you generally must file a return if your net earnings from self-employment are at least $400." — <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color: '#e8b84b' }}>IRS Self-Employed Tax Center</a>
            </p>
          </blockquote>
        </section>

        <section id="deductions">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Top Tax Deductions for Upwork Freelancers in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Remote freelancers have more deduction options than most gig workers. Every deductible dollar reduces both income tax and SE tax. Report all on <a href="/blog/self-employment-tax-rate-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>Schedule C</a>.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              'Home office — dedicated workspace at $5/sq ft up to 300 sq ft',
              'Software — design tools, project management, accounting apps, AI subscriptions',
              'Hardware — computer, monitor, keyboard, webcam used for freelance work',
              'Internet — business-use portion of your monthly plan',
              'Phone — business-use percentage of your bill',
              'Upwork service fee — 5% to 20% platform fee is a deductible business expense',
              'Professional development — courses, certifications, books relevant to your work',
              'Health insurance premiums — if not eligible for employer coverage',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="service-fee">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Is the Upwork Service Fee Tax Deductible in 2026?
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Yes — the Upwork service fee is a platform expense deductible on Schedule C. Upwork charges a sliding fee per client relationship:
          </p>
          <div style={{ overflowX: 'auto' as const, marginBottom: 24, borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
              <thead>
                <tr>
                  {['Lifetime Billings per Client', 'Upwork Fee', 'On $10K earned', 'Tax Saved (22%)'].map(h => (
                    <th key={h} style={{ background: 'rgba(255,255,255,0.05)', color: '#e8b84b', padding: '10px 14px', textAlign: 'left' as const, fontSize: 12, fontFamily: 'monospace', letterSpacing: '0.04em', borderBottom: '1px solid rgba(232,184,75,0.2)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['First $500', '20%', '$100', '$22'],
                  ['$500.01 – $10,000', '10%', '$950', '$209'],
                  ['Over $10,000', '5%', '$250+', '$55+'],
                  ['Total example ($10K)', '~10.5% avg', '$1,050', '$231'],
                ].map((row, i, arr) => (
                  <tr key={i} style={i === arr.length - 1 ? { background: 'rgba(232,184,75,0.08)', borderTop: '1px solid rgba(232,184,75,0.3)' } : { borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '10px 14px', color: i === arr.length - 1 ? '#e8b84b' : 'rgba(255,255,255,0.85)', fontWeight: i === arr.length - 1 ? 700 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="home-office">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Home Office Deduction for Remote Freelancers in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            If you work from a dedicated home space used exclusively for freelance work, the home office deduction is one of the largest available to Upwork freelancers.
          </p>
          <ol style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
            {[
              'Measure the square footage of your dedicated workspace',
              'Simplified method: multiply sq ft by $5 — max deduction $1,500 (300 sq ft)',
              'Actual method: calculate the percentage of your home used for work and apply to rent, utilities, insurance',
              'The space must be used regularly and exclusively for business — no shared living use',
            ].map((step, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{step}</li>
            ))}
          </ol>
        </section>

        <section id="quarterly">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Quarterly Estimated Taxes for Upwork Freelancers in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Upwork withholds nothing. If you expect to owe more than $1,000 for the year, pay quarterly or face an underpayment penalty at filing.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              'Q1 (Jan–Mar) → due April 15, 2026',
              'Q2 (Apr–May) → due June 16, 2026',
              'Q3 (Jun–Aug) → due September 15, 2026',
              'Q4 (Sep–Dec) → due January 15, 2027',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            On $60,000 net income, each payment is approximately <strong style={{ color: '#e8edf8' }}>$3,570</strong>. After deductions, your actual payment will be lower. Use the <a href="/blog/quarterly-taxes-gig-workers" style={{ color: '#e8b84b', textDecoration: 'none' }}>quarterly tax guide</a> to calculate your exact amount.
          </p>
        </section>

        <section id="1099">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Does Upwork Send a 1099 Form in 2026?
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Yes — Upwork sends a <strong style={{ color: '#e8edf8' }}>1099-K</strong> if gross earnings exceed $600 in 2026. Forms arrive in your Upwork account by January 31.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              '1099-K: freelance earnings when gross exceeds $600 in the calendar year',
              '1099-NEC: referral bonuses and other non-service payments',
              'Transaction history: available in your Upwork Reports dashboard year-round',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Report all income even without a 1099. The IRS requires reporting any net self-employment income over $400. Upwork's transaction history is your backup record.
          </p>
        </section>

        <section id="qbi">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            QBI Deduction for Upwork Freelancers in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            The <strong style={{ color: '#e8edf8' }}>Qualified Business Income (QBI) deduction</strong> is made permanent under OBBBA 2026. It allows eligible self-employed workers to deduct up to <strong style={{ color: '#e8edf8' }}>20%</strong> of qualified business income from federal income tax.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              'Deduct up to 20% of net self-employment income before income tax calculation',
              'On $60,000 net income: up to $12,000 QBI deduction',
              'Income limits apply — phase-outs begin above $182,050 single / $364,200 MFJ in 2026',
              'Specified service trades (law, consulting, finance) may face restrictions above the threshold',
              'Most Upwork freelancers — developers, designers, writers — qualify with no restriction',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="faq" style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 14px', lineHeight: 1.35 }}>
            Frequently Asked Questions
          </h2>
          {[
            ['How do Upwork freelancers file taxes in 2026?', 'Upwork freelancers file as independent contractors using Schedule C to report income and deductions. You report earnings from your 1099-K, subtract deductions like home office and software, and pay self-employment tax on net profit.'],
            ['How much SE tax does an Upwork freelancer pay?', 'Upwork freelancers pay 15.3% self-employment tax on net profit — 12.4% Social Security and 2.9% Medicare. On $60,000 net income that is approximately $8,478 in SE tax.'],
            ['Does Upwork send a 1099 form?', 'Yes. Upwork sends a 1099-K if gross earnings exceed $600 in 2026. Forms are available in your Upwork account by January 31 each year.'],
            ['What quarterly payment does an Upwork freelancer owe?', 'On $60,000 net income, quarterly estimated payments are approximately $3,570. IRS due dates are April 15, June 16, September 15, and January 15.'],
            ['What can Upwork freelancers deduct in 2026?', 'Deduct home office, software, hardware, internet, phone business use, the Upwork service fee, professional development, and health insurance premiums on Schedule C.'],
            ['Is the Upwork service fee tax deductible in 2026?', 'Yes. The Upwork service fee — 20% on first $500, 10% on $500–$10K, 5% above $10K per client — is a deductible business expense on Schedule C.'],
            ['Can Upwork freelancers deduct a home office in 2026?', 'Yes. Use the simplified method at $5 per sq ft up to 300 sq ft for a max $1,500 deduction, or actual expenses proportional to business use of your home.'],
          ].map(([q, a], i, arr) => (
            <div key={i} style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', padding: '18px 0' }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: '#e8edf8', margin: '0 0 8px' }}>{q}</h3>
              <p style={{ fontSize: 14, color: '#C8D8EC', margin: 0, lineHeight: 1.7 }}>{a}</p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 16px', lineHeight: 1.35 }}>Related Tax Guides</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 12 }}>
            {[
              ['/blog/taskrabbit-taxes-2026', 'TaskRabbit Taxes 2026', 'GUIDE'],
              ['/blog/fiverr-taxes-2026', 'Fiverr Taxes 2026', 'GUIDE'],
              ['/blog/self-employment-tax-rate-2026', 'Self-Employment Tax Rate 2026', 'GUIDE'],
              ['/blog/quarterly-taxes-gig-workers', 'Quarterly Taxes for Gig Workers', 'GUIDE'],
            ].map(([href, title, tag]) => (
              <a key={href} href={href} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: 16, textDecoration: 'none', display: 'block' }}>
                <div style={{ fontSize: 10, color: '#e8b84b', fontFamily: 'monospace', letterSpacing: '0.04em', marginBottom: 6 }}>{tag}</div>
                <div style={{ color: '#e8edf8', fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>{title}</div>
              </a>
            ))}
          </div>
        </section>

        <AuthorBox />
      </article>
    </>
  )
}
