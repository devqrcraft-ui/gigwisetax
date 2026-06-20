import AuthorBox from '@/app/components/AuthorBox'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TaskRabbit Taxes 2026: $45K Income = $10,160 Tax Owed',
  description: 'TaskRabbit Taskers on $45K owe $10,160 in 2026 taxes. Free calculator — mileage 72.5¢/mi, tools deductible. All 50 states.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/taskrabbit-taxes-2026' },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do TaskRabbit Taskers file taxes in 2026?","acceptedAnswer":{"@type":"Answer","text":"TaskRabbit Taskers file as independent contractors using Schedule C to report income and deductions. You report earnings from your 1099-K or 1099-NEC, subtract deductions like mileage and tools, and pay self-employment tax on net profit."}},{"@type":"Question","name":"What is the mileage deduction rate for TaskRabbit Taskers in 2026?","acceptedAnswer":{"@type":"Answer","text":"The 2026 IRS standard mileage rate is 72.5 cents per mile. Taskers can deduct miles driven to client locations, hardware stores for job supplies, and any other business-related driving."}},{"@type":"Question","name":"How much self-employment tax does a TaskRabbit Tasker pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"TaskRabbit Taskers pay 15.3% self-employment tax on net profit — 12.4% Social Security and 2.9% Medicare. On $45,000 net income that is approximately $6,358 in SE tax."}},{"@type":"Question","name":"Does TaskRabbit send a 1099 form to Taskers?","acceptedAnswer":{"@type":"Answer","text":"Yes. TaskRabbit sends a 1099-K if gross earnings exceed $600 in 2026 under OBBBA rules. Forms are available in your TaskRabbit account by January 31 each year."}},{"@type":"Question","name":"What quarterly estimated tax does a TaskRabbit Tasker pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"On $45,000 net income, quarterly estimated payments are approximately $2,540 per quarter. IRS due dates are April 15, June 16, September 15, and January 15."}},{"@type":"Question","name":"What tools and equipment can TaskRabbit Taskers deduct in 2026?","acceptedAnswer":{"@type":"Answer","text":"Taskers can deduct tools, equipment, and supplies purchased for jobs — drills, levels, cleaning supplies, ladders — as long as they are used for business. Under 100% bonus depreciation in 2026, you can deduct the full cost in year one."}},{"@type":"Question","name":"Can TaskRabbit Taskers deduct a vehicle in 2026?","acceptedAnswer":{"@type":"Answer","text":"Yes. Use the standard mileage rate of 72.5 cents per mile or deduct actual vehicle expenses proportional to business use. Track every trip to and from job sites."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"TaskRabbit Taxes 2026","item":"https://www.gigwisetax.com/blog/taskrabbit-taxes-2026"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"TaskRabbit Taxes 2026: $45K Income = $10,160 Tax Owed","datePublished":"2026-05-27","dateModified":"2026-05-27","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/taskrabbit-taxes-2026"}}'

export default function TaskRabbitTaxes2026() {
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
            {' › '}TaskRabbit Taxes 2026
          </nav>
          <h1
            itemProp="headline"
            style={{ fontSize: 'clamp(22px,5vw,24px)', fontWeight: 900, color: '#e8edf8', lineHeight: 1.3, marginBottom: 12 }}
          >
            TaskRabbit Taxes 2026: $45K Income = $10,160 Tax Owed
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
              TaskRabbit Taskers are independent contractors — no taxes are withheld. On <strong style={{ color: '#e8edf8' }}>$45,000 net income</strong> in 2026: approximately $6,358 SE tax + $3,802 federal income tax = <strong style={{ color: '#e8edf8' }}>$10,160 total tax owed</strong>. Quarterly estimated payment: <strong style={{ color: '#e8b84b' }}>$2,540</strong>. Mileage at 72.5¢/mile and tool deductions under 100% bonus depreciation are the biggest write-offs for Taskers.
            </p>
          </div>
        </section>

        <section id="takeaways">
          <div style={{ background: 'rgba(232,184,75,0.04)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '20px 24px', marginBottom: 32 }}>
            <div style={{ fontSize: 13, fontFamily: 'monospace', color: '#e8b84b', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 14 }}>Key Takeaways</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              {[
                '$45K net income = $10,160 total tax owed in 2026 ($2,540/quarter)',
                'SE tax rate: 15.3% on net profit (12.4% SS + 2.9% Medicare)',
                'IRS mileage deduction: 72.5¢/mile — deduct every drive to job sites',
                'Tools and equipment: 100% bonus depreciation in 2026 — deduct full cost year one',
                'TaskRabbit sends 1099-K for earnings over $600 by January 31',
                'TaskRabbit service fee (15%) charged to clients is not your deduction — track your net payout',
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
                ['#tax-breakdown', 'How Much Tax Does a TaskRabbit Tasker Pay in 2026?'],
                ['#deductions', 'Top Tax Deductions for TaskRabbit Taskers'],
                ['#mileage', 'Mileage Deduction for Taskers'],
                ['#tools', 'Tools and Equipment Deduction'],
                ['#quarterly', 'Quarterly Estimated Taxes'],
                ['#1099', 'Does TaskRabbit Send a 1099?'],
                ['#tips', 'No Tax on Tips for Taskers in 2026'],
                ['#faq', 'Frequently Asked Questions'],
              ].map(([href, label]) => (
                <li key={href}><a href={href} style={{ color: '#e8b84b', fontSize: 13, textDecoration: 'none', lineHeight: 1.7 }}>{label}</a></li>
              ))}
            </ol>
          </div>
        </section>

        <section id="tax-breakdown">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            How Much Tax Does a TaskRabbit Tasker Pay in 2026?
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            TaskRabbit treats all Taskers as independent contractors. You receive the full payout and owe all taxes yourself. The SE tax rate is <strong style={{ color: '#e8edf8' }}>15.3%</strong> on net profit — on top of regular federal income tax.
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
                  ['$20,000', '$2,826', '$1,200', '$4,026', '$1,007'],
                  ['$30,000', '$4,239', '$2,400', '$6,639', '$1,660'],
                  ['$40,000', '$5,652', '$3,400', '$9,052', '$2,263'],
                  ['$45,000', '$6,358', '$3,802', '$10,160', '$2,540'],
                  ['$60,000', '$8,478', '$5,600', '$14,078', '$3,520'],
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
            Top Tax Deductions for TaskRabbit Taskers in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Every deductible dollar reduces both income tax and SE tax. Taskers have strong deductions — especially tools and mileage. All deductions go on <a href="/blog/self-employment-tax-rate-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>Schedule C</a>.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              'Mileage — 72.5¢/mile to job sites, hardware stores, supply runs',
              'Tools and equipment — drills, levels, ladders, cleaning supplies (100% bonus depreciation)',
              'Phone — business-use portion of your monthly plan',
              'Work clothing — uniforms or protective gear required for jobs',
              'Insurance — liability insurance for handyman or cleaning work',
              'Home office — if you manage your Tasker business from a dedicated space',
              'Professional development — trade courses, certifications relevant to your services',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="mileage">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Mileage Deduction for TaskRabbit Taskers in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            The IRS standard mileage rate for 2026 is <strong style={{ color: '#e8edf8' }}>72.5 cents per mile</strong>. Every drive to a job site, hardware store, or supply run counts. Taskers typically drive more than delivery workers — track every trip.
          </p>
          <ol style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
            {[
              'Install a mileage tracking app (MileIQ, Stride, or Everlance) before your first job',
              'Log every drive — from home to job site, store runs, and return trips',
              'Record date, destination, and business purpose for IRS compliance',
              'Multiply total miles by 72.5¢ at tax time for your deduction amount',
            ].map((step, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{step}</li>
            ))}
          </ol>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Example: 6,000 business miles × $0.725 = <strong style={{ color: '#e8edf8' }}>$4,350 deduction</strong>. That saves roughly $665 in SE tax alone.
          </p>
        </section>

        <section id="tools">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Tools and Equipment Deduction for Taskers in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Under <strong style={{ color: '#e8edf8' }}>100% bonus depreciation</strong> in 2026, Taskers can deduct the full cost of tools and equipment in the year of purchase — no multi-year depreciation required.
          </p>
          <div style={{ overflowX: 'auto' as const, marginBottom: 24, borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
              <thead>
                <tr>
                  {['Item', 'Avg Cost', 'Tax Saved (22% bracket)', 'SE Tax Saved'].map(h => (
                    <th key={h} style={{ background: 'rgba(255,255,255,0.05)', color: '#e8b84b', padding: '10px 14px', textAlign: 'left' as const, fontSize: 12, fontFamily: 'monospace', letterSpacing: '0.04em', borderBottom: '1px solid rgba(232,184,75,0.2)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Power drill set', '$150', '$33', '$23'],
                  ['Ladder', '$200', '$44', '$31'],
                  ['Cleaning equipment', '$300', '$66', '$46'],
                  ['Tool bag + hand tools', '$250', '$55', '$38'],
                  ['Total example', '$900', '$198', '$138'],
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
            Quarterly Estimated Taxes for TaskRabbit Taskers in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            TaskRabbit withholds nothing. If you expect to owe more than $1,000 for the year, pay quarterly or face an underpayment penalty at filing.
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
            On $45,000 net income, each payment is approximately <strong style={{ color: '#e8edf8' }}>$2,540</strong>. Use the <a href="/blog/quarterly-taxes-gig-workers" style={{ color: '#e8b84b', textDecoration: 'none' }}>quarterly tax guide for gig workers</a> to calculate your exact amount after deductions.
          </p>
        </section>

        <section id="1099">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            Does TaskRabbit Send a 1099 Form in 2026?
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Yes — TaskRabbit sends a <strong style={{ color: '#e8edf8' }}>1099-K</strong> if gross earnings exceed $600 in 2026. Forms arrive in your TaskRabbit account by January 31.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              '1099-K: task income when gross exceeds $600 in the calendar year',
              '1099-NEC: referral bonuses and promotional payments',
              'Earnings summary: available in your TaskRabbit account year-round',
            ].map((item, i) => (
              <li key={i} style={{ color: '#C8D8EC', fontSize: 14, lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            Report all income even without a 1099. The IRS requires you to report any net self-employment income over $400. Keep your own records via the TaskRabbit earnings dashboard.
          </p>
        </section>

        <section id="tips">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '36px 0 14px', lineHeight: 1.35 }}>
            No Tax on Tips for TaskRabbit Taskers in 2026
          </h2>
          <p style={{ fontSize: 15, color: '#C8D8EC', lineHeight: 1.75, marginBottom: 14 }}>
            The No Tax on Tips provision allows qualifying workers to exclude up to <strong style={{ color: '#e8edf8' }}>$25,000</strong> in tip income from federal income tax. Taskers who receive cash or in-app tips from clients may qualify.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
            {[
              'Applies to tips received directly from clients — TaskRabbit in-app tips qualify',
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
            ['How do TaskRabbit Taskers file taxes in 2026?', 'TaskRabbit Taskers file as independent contractors using Schedule C to report income and deductions. You report earnings from your 1099-K, subtract deductions like mileage and tools, and pay self-employment tax on net profit.'],
            ['What is the mileage deduction rate for TaskRabbit Taskers in 2026?', 'The 2026 IRS standard mileage rate is 72.5 cents per mile. Deduct miles to job sites, hardware stores, and supply runs related to your tasks.'],
            ['How much SE tax does a TaskRabbit Tasker pay?', 'Taskers pay 15.3% self-employment tax on net profit — 12.4% Social Security and 2.9% Medicare. On $45,000 net income that is approximately $6,358 in SE tax.'],
            ['Does TaskRabbit send a 1099 form?', 'Yes. TaskRabbit sends a 1099-K if gross earnings exceed $600 in 2026. Forms are available in your TaskRabbit account by January 31 each year.'],
            ['What quarterly payment does a TaskRabbit Tasker owe?', 'On $45,000 net income, quarterly estimated payments are approximately $2,540. IRS due dates are April 15, June 16, September 15, and January 15.'],
            ['What tools and equipment can Taskers deduct in 2026?', 'Deduct drills, levels, ladders, cleaning supplies, and any equipment used for jobs. Under 100% bonus depreciation in 2026, deduct the full cost in year one on Schedule C.'],
            ['Can TaskRabbit Taskers deduct a vehicle in 2026?', 'Yes. Use the standard mileage rate of 72.5 cents per mile or deduct actual vehicle expenses proportional to business use. Track every trip to and from job sites.'],
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
              ['/blog/rover-taxes-2026', 'Rover Sitter Taxes 2026', 'GUIDE'],
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
