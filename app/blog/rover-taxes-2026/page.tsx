import AuthorBox from '@/app/components/AuthorBox'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rover Taxes 2026: $25K Income = $5,340 Tax Owed',
  description: 'Rover pet sitters on $25K owe $5,340 in 2026 taxes. Free calculator — mileage 72.5¢/mi, tips up to $25K deductible. All 50 states.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/rover-taxes-2026' },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do Rover sitters file taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"Rover sitters file as independent contractors using Schedule C to report income and deductions. You report earnings from your 1099-K or 1099-NEC, subtract deductions like mileage and supplies, and pay self-employment tax on net profit."}},{"@type":"Question","name":"What is the mileage deduction rate for Rover sitters in 2026?","acceptedAnswer":{"@type":"Answer","text":"The 2026 IRS standard mileage rate is 72.5 cents per mile. Rover sitters can deduct miles driven to client homes, vet visits for boarded pets, and supply runs directly related to pet care."}},{"@type":"Question","name":"How much self-employment tax does a Rover sitter pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"Rover sitters pay 15.3% self-employment tax on net profit — 12.4% Social Security and 2.9% Medicare. On $25,000 net income that is approximately $3,533 in SE tax."}},{"@type":"Question","name":"Does Rover send a 1099 form to sitters?","acceptedAnswer":{"@type":"Answer","text":"Yes. Rover sends a 1099-K if gross earnings exceed $600 in 2026 under OBBBA rules. Forms are available in your Rover dashboard by January 31 each year."}},{"@type":"Question","name":"What quarterly estimated tax does a Rover sitter pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"On $25,000 net income, quarterly estimated payments are approximately $1,335 per quarter. IRS due dates are April 15, June 16, September 15, and January 15."}},{"@type":"Question","name":"What supplies can Rover sitters deduct in 2026?","acceptedAnswer":{"@type":"Answer","text":"Rover sitters can deduct pet food for boarded animals, treats, leashes, waste bags, kennels, first-aid supplies, and equipment used exclusively for the pet care business on Schedule C."}},{"@type":"Question","name":"Can Rover sitters deduct a home office in 2026?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you board pets at home and use a dedicated space exclusively for that, you may deduct the home office using the simplified method at $5 per sq ft up to 300 sq ft."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Rover Taxes 2026","item":"https://www.gigwisetax.com/blog/rover-taxes-2026"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Rover Taxes 2026: $25K Income = $5,340 Tax Owed","datePublished":"2026-05-27","dateModified":"2026-05-27","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/rover-taxes-2026"}}'

export default function RoverTaxes2026() {
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
            {' › '}Rover Taxes 2026
          </nav>
          <h1
            itemProp="headline"
            style={{ fontSize: 'clamp(22px,5vw,24px)', fontWeight: 900, color: '#e8edf8', lineHeight: 1.3, marginBottom: 12 }}
          >
            Rover Taxes 2026: $25K Income = $5,340 Tax Owed
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
              Rover pet sitters and dog walkers are independent contractors. On <strong style={{ color: '#e8edf8' }}>$25,000 net income</strong> in 2026: approximately $3,533 SE tax + $1,807 federal income tax = <strong style={{ color: '#e8edf8' }}>$5,340 total tax owed</strong>. Quarterly estimated payment: <strong style={{ color: '#e8b84b' }}>$1,335</strong>. Mileage at 72.5¢/mile and home-office deductions are the two biggest write-offs for Rover sitters.
            </p>
          </div>
        </section>

        <section id="takeaways">
          <div style={{ background: 'rgba(232,184,75,0.04)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '20px 24px', marginBottom: 32 }}>
            <div style={{ fontSize: 13, fontFamily: 'monospace', color: '#e8b84b', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Key Takeaways</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              {[
                '$25K net income = $5,340 total tax owed in 2026 ($1,335/quarter)',
                'SE tax rate: 15.3% on net profit (12.4% SS + 2.9% Medicare)',
                'IRS mileage deduction: 72.5¢/mile — deduct drives to client homes and vet visits',
                'Rover sends 1099-K (bookings over $600) by January 31',
                'Home office deduction applies if you board pets in a dedicated space',
                'Supplies — food, treats, leashes, waste bags — fully deductible on Schedule C',
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
                ['#tax-breakdown', 'How Much Tax Does a Rover Sitter Pay in 2026?'],
                ['#deductions', 'Top Tax Deductions for Rover Sitters'],
                ['#mileage', 'Mileage Deduction for Rover Dog Walkers'],
                ['#home-office', 'Home Office Deduction for Pet Boarding'],
                ['#quarterly', 'Quarterly Estimated Taxes for Rover Sitters'],
                ['#1099', 'Does Rover Send a 1099 Form?'],
                ['#tips', 'No Tax on Tips for Rover Sitters in 2026'],
                ['#faq', 'Frequently Asked Questions'],
              ].map(([href, label]) => (
                <li key={href}><a href={href} style={{ color: '#e8b84b', fontSize: 13, textDecoration: 'none', lineHeight: 1.7 }}>{label}</a></li>
              ))}
            </ol>
          </div>
        </section>

        <section id="tax-breakdown">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            How Much Tax Does a Rover Sitter Pay in 2026?
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Rover classifies all sitters and dog walkers as independent contractors. That means no taxes are withheld — you owe both the employee and employer share of Social Security and Medicare, called self-employment tax.
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
                  ['$15,000', '$2,120', '$800', '$2,920', '$730'],
                  ['$20,000', '$2,826', '$1,200', '$4,026', '$1,007'],
                  ['$25,000', '$3,533', '$1,807', '$5,340', '$1,335'],
                  ['$30,000', '$4,239', '$2,400', '$6,639', '$1,660'],
                  ['$40,000', '$5,652', '$3,800', '$9,452', '$2,363'],
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
            Top Tax Deductions for Rover Sitters in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Every dollar you deduct reduces both income tax and SE tax. Rover sitters have strong deduction options compared to most gig workers. Report all deductions on <a href="/blog/self-employment-tax-rate-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>Schedule C</a>.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              'Mileage — 72.5¢/mile for drives to client homes, vet visits, supply runs',
              'Pet supplies — food, treats, leashes, waste bags, kennels, first-aid kits',
              'Home office — dedicated boarding space deductible at $5/sq ft (up to 300 sq ft)',
              'Phone — business-use portion of your monthly plan',
              'Rover service fees — the 20% Rover takes from each booking is deductible',
              'Insurance — pet care liability insurance premiums',
              'Training and education — pet first-aid courses, certifications',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="mileage">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Mileage Deduction for Rover Dog Walkers in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            The IRS standard mileage rate for 2026 is <strong style={{ color: '#e8edf8' }}>72.5 cents per mile</strong>. Rover walkers and sitters can deduct every mile driven for business. Track every trip — commuting from home to a client counts when you have no fixed office.
          </p>
          <ol style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
            {[
              'Download a mileage tracking app (MileIQ, Stride, or Everlance) on day one',
              'Log drives to client homes, drop-offs, vet visits, and pet supply stores',
              'Record date, start point, end point, and business purpose for each trip',
              'Multiply total business miles by 72.5¢ at tax time — that is your deduction',
            ].map((step, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{step}</li>
            ))}
          </ol>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Example: 4,000 business miles × $0.725 = <strong style={{ color: '#e8edf8' }}>$2,900 deduction</strong>. That eliminates $2,900 from taxable income and saves roughly $444 in SE tax alone.
          </p>
        </section>

        <section id="home-office">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Home Office Deduction for Pet Boarding in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            If you board pets at home, the space used exclusively for that purpose qualifies as a home office. This is one deduction most Rover sitters miss entirely.
          </p>
          <div style={{ overflowX: 'auto' as const, marginBottom: 24, borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
              <thead>
                <tr>
                  {['Method', 'Calculation', 'Max Deduction', 'Best For'].map(h => (
                    <th key={h} style={{ background: 'rgba(255,255,255,0.05)', color: '#e8b84b', padding: '10px 14px', textAlign: 'left' as const, fontSize: 12, fontFamily: 'monospace', letterSpacing: '0.04em', borderBottom: '1px solid rgba(232,184,75,0.2)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Simplified', '$5 × sq ft of space', '$1,500 (300 sq ft max)', 'Easy, no depreciation recapture'],
                  ['Actual Expenses', '% of home costs', 'Unlimited', 'Larger homes, higher expenses'],
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

        <section id="quarterly">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Quarterly Estimated Taxes for Rover Sitters in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Rover withholds nothing. If you expect to owe more than $1,000 in tax for the year, the IRS requires quarterly estimated payments. Missing a deadline triggers a penalty even if you pay in full at filing.
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
            On $25,000 net income, each quarterly payment is approximately <strong style={{ color: '#e8edf8' }}>$1,335</strong>. Use the <a href="/blog/quarterly-taxes-gig-workers" style={{ color: '#e8b84b', textDecoration: 'none' }}>quarterly tax guide for gig workers</a> to calculate your exact amount.
          </p>
        </section>

        <section id="1099">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Does Rover Send a 1099 Form in 2026?
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Yes — Rover sends a <strong style={{ color: '#e8edf8' }}>1099-K</strong> if your gross earnings exceed $600 in 2026. The threshold dropped from $20,000 under the OBBBA rules. Forms arrive in your Rover dashboard by January 31.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              '1099-K: booking income when gross exceeds $600 in calendar year',
              '1099-NEC: referral bonuses and promotional payments',
              'Annual earnings summary: available in Rover Pro dashboard year-round',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Report all income even without a 1099. The IRS requires you to report any net self-employment income over $400. Keep your own records via the Rover earnings dashboard or a dedicated accounting app.
          </p>
        </section>

        <section id="tips">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            No Tax on Tips for Rover Sitters in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            The No Tax on Tips provision allows qualifying workers to exclude up to <strong style={{ color: '#e8edf8' }}>$25,000</strong> in tip income from federal income tax. Rover sitters who receive in-app or cash tips from clients may qualify.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              'Applies to tips received directly from customers — Rover in-app tips qualify',
              'Income cap applies — higher earners may see the benefit phased out',
              'Tips still count toward SE tax calculation',
              'Maximum exclusion: $25,000 per individual per year',
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
            ['How do Rover sitters file taxes in 2026?', 'Rover sitters file as independent contractors using Schedule C to report income and deductions. You report earnings from your 1099-K or 1099-NEC, subtract deductions like mileage and supplies, and pay self-employment tax on net profit.'],
            ['What is the mileage deduction rate for Rover sitters in 2026?', 'The 2026 IRS standard mileage rate is 72.5 cents per mile. Deduct miles to client homes, vet visits, and supply runs directly related to pet care.'],
            ['How much SE tax does a Rover sitter pay?', 'Rover sitters pay 15.3% self-employment tax on net profit — 12.4% Social Security and 2.9% Medicare. On $25,000 net income that is approximately $3,533 in SE tax.'],
            ['Does Rover send a 1099 form to sitters?', 'Yes. Rover sends a 1099-K if gross earnings exceed $600 in 2026. Forms are available in your Rover dashboard by January 31 each year.'],
            ['What quarterly payment does a Rover sitter owe?', 'On $25,000 net income, quarterly estimated payments are approximately $1,335. IRS due dates are April 15, June 16, September 15, and January 15.'],
            ['What supplies can Rover sitters deduct in 2026?', 'Deduct pet food for boarded animals, treats, leashes, waste bags, kennels, first-aid supplies, and any equipment used exclusively for pet care on Schedule C.'],
            ['Can Rover sitters deduct a home office in 2026?', 'Yes. If you board pets in a dedicated home space, deduct it using the simplified method at $5 per sq ft up to 300 sq ft, or actual expenses proportional to business use.'],
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
              ['/blog/lyft-driver-taxes-2026', 'Lyft Driver Taxes 2026', 'GUIDE'],
              ['/blog/doordash-taxes-2026', 'DoorDash Driver Taxes 2026', 'GUIDE'],
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
