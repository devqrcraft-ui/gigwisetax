import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IRS Mileage Rate 2026: 70 Cents Per Mile — Complete Guide for Gig Workers',
  description: 'The IRS standard mileage rate for 2026 is 72.5 cents per mile. Learn how to use it, track miles, and maximize your deduction as a DoorDash, Uber, or Amazon Flex driver.',
}

export default function MileageRate2026Post() {
  const h2 = { fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', margin: '32px 0 12px', paddingTop: 8, borderTop: '2px solid rgba(255,255,255,0.1)' }
  const p  = { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, marginBottom: 14 }

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the IRS mileage rate for 2026?","acceptedAnswer":{"@type":"Answer","text":"The IRS standard mileage rate for 2026 is 72.5 cents per mile for business driving. This rate applies to gig workers, self-employed individuals, and employees who drive for work and are not reimbursed."}},{"@type":"Question","name":"How do I calculate my mileage deduction for 2026?","acceptedAnswer":{"@type":"Answer","text":"Multiply total business miles driven by 0.725. Example: 20,000 miles x $0.725 = $13,400 deduction. You must keep a contemporaneous mileage log showing date, destination, and business purpose for each trip."}},{"@type":"Question","name":"Should I use standard mileage or actual expenses for 2026?","acceptedAnswer":{"@type":"Answer","text":"Most gig workers benefit more from standard mileage (70 cents/mile). Actual expenses work better for newer, expensive vehicles. You must choose standard mileage in the first year the car is used for business."}}]}' }} />

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 10 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link> ›{' '}
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</Link> › IRS Mileage Rate 2026
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' as const }}>
            {['IRS', 'Mileage', 'Deductions', '2026'].map(t => (
              <span key={t} style={{ background: 'rgba(232,184,75,.15)', color: '#e8b84b', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 3, border: '1px solid rgba(232,184,75,.3)' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.3, margin: '0 0 12px' }}>
             IRS Mileage Rate 2026: 70¢/Mile — What Every Gig Worker Needs to Know
          </h1>
          <div style={{ display: 'flex', gap: 16 }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}> January 3, 2026</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}> 5 min read</span>
          </div>
        </div>
      </div>

      

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 32, alignItems: 'start' }} className="blog-grid">
        <article>

          {/* BIG RATE CALLOUT */}
          <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 8, padding: '24px 28px', marginBottom: 32, textAlign: 'center' as const }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', textTransform: 'uppercase' as const, letterSpacing: '2px', marginBottom: 8 }}>IRS STANDARD MILEAGE RATE</div>
            <div style={{ fontSize: 56, fontWeight: 900, color: '#e8b84b', lineHeight: 1 }}>70¢</div>
            <div style={{ fontSize: 18, color: 'rgba(255,255,255,.7)', marginTop: 4 }}>per mile · Tax Year 2026</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.3)', marginTop: 8 }}>For business use of a personal vehicle · IRS Rev. Proc. 2026-01</div>
          </div>

          <p style={p}>
            The IRS announced the standard mileage rate for 2026 is <strong>72.5 cents per mile</strong> for business use. This is the rate delivery drivers, rideshare drivers, and other gig workers use to calculate their vehicle expense deduction — without tracking actual gas, maintenance, or insurance costs.
          </p>

          <h2 style={h2}>Mileage Rate History: How 2026 Compares</h2>
          <div style={{ background: '#0d1b3e', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, overflow: 'hidden', marginBottom: 20 }}>
            <div style={{ background: 'rgba(255,255,255,0.85)', padding: '10px 16px', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>IRS Standard Mileage Rates 2020–2026</div>
            {[
              ['2026', '70¢/mile', true],
              ['2025', '70.0¢/mile', false],
              ['2024', '67.0¢/mile', false],
              ['2023', '65.5¢/mile', false],
              ['2022 (Jul–Dec)', '62.5¢/mile', false],
              ['2022 (Jan–Jun)', '58.5¢/mile', false],
              ['2021', '56.0¢/mile', false],
              ['2020', '57.5¢/mile', false],
            ].map(([year, rate, current]) => (
              <div key={year as string} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: current ? 'rgba(232,184,75,0.1)' : 'transparent' }}>
                <span style={{ fontSize: 14, fontWeight: current ? 800 : 500, color: current ? '#ffffff' : 'rgba(255,255,255,0.75)' }}>{year as string} {current && '← Current'}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: current ? '#B22234' : '#6c757d' }}>{rate as string}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>How Much Can You Save? (By Miles Driven)</h2>
          <div style={{ background: '#0d1b3e', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden', marginBottom: 20 }}>
            <div style={{ background: 'rgba(255,255,255,0.85)', padding: '10px 16px', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Mileage Deduction Calculator (70¢/mile, 2026)</div>
            {[
              ['5,000 miles', '$3,625', '$1,087'],
              ['10,000 miles', '$7,250', '$2,175'],
              ['15,000 miles', '$10,875', '$3,262'],
              ['20,000 miles', '$14,500', '$4,350'],
              ['25,000 miles', '$16,750', '$5,437'],
              ['30,000 miles', '$21,750', '$6,525'],
              ['40,000 miles', '$29,000', '$8,700'],
            ].map(([miles, deduction, savings]) => (
              <div key={miles} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{miles}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>{deduction} deduction</span>
                <span style={{ fontSize: 13, color: '#4ade80', fontWeight: 700 }}>{savings} saved*</span>
              </div>
            ))}
            <div style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', fontSize: 11, color: '#9ca3af' }}>*Tax savings estimated at 30% combined rate. Actual savings depend on your tax bracket and state.</div>
          </div>

          <h2 style={h2}>Standard Mileage vs. Actual Expenses: Which Is Better?</h2>
          <p style={p}>
            You can only choose one method per vehicle per year. Once you use actual expenses in the first year, you cannot switch to standard mileage later. If you use standard mileage first, you can switch to actual expenses in future years.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div style={{ background: 'rgba(5,150,105,0.12)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 6, padding: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#4ade80', marginBottom: 8 }}> Standard Mileage (70¢)</div>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {['Simple — just track miles','No fuel receipts needed','Good for fuel-efficient cars','Can switch to actual in future years'].map(i => (
                  <li key={i} style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 4 }}>{i}</li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'rgba(232,184,75,0.1)', border: '1px solid #fde68a', borderRadius: 6, padding: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#fcd34d', marginBottom: 8 }}> Actual Expenses</div>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {['Track gas, repairs, insurance','Depreciation included','Better for gas-guzzlers or luxury cars','More complex recordkeeping'].map(i => (
                  <li key={i} style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 4 }}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <p style={p}>
            For most gig workers, <strong>standard mileage is simpler and often yields a larger deduction</strong> — especially if you drive a fuel-efficient car. Run the numbers both ways if you have a high-expense vehicle.
          </p>

          <h2 style={h2}>How to Track Miles for the IRS</h2>
          <p style={p}>
            The IRS requires a contemporaneous mileage log — meaning you record trips at or near the time they happen, not months later from memory. Your log should include:
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 20 }}>
            {[
              'Date of each trip',
              'Starting location and destination',
              'Business purpose (e.g., "DoorDash delivery — order #12345")',
              'Odometer reading OR total miles for the trip',
              'Total business miles for the year',
            ].map(item => <li key={item} style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 6 }}>{item}</li>)}
          </ul>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 16, marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 8 }}> Best Free Mileage Tracking Apps</div>
            {[
              { name: 'Stride', cost: 'Free', note: 'Best for most gig workers, IRS-compliant logs' },
              { name: 'MileIQ', cost: '$5.99/mo', note: 'Automatic tracking, swipe to categorize' },
              { name: 'Hurdlr', cost: 'Free / $8.34/mo', note: 'Mileage + income + expense tracking combined' },
              { name: 'Everlance', cost: 'Free / $9.99/mo', note: 'Automatic + manual tracking, good reporting' },
            ].map(app => (
              <div key={app.name} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{app.name}</span>
                  <span style={{ fontSize: 11, color: '#6c757d', marginLeft: 8 }}>{app.note}</span>
                </div>
                <span style={{ fontSize: 12, color: '#059669', fontWeight: 700 }}>{app.cost}</span>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(232,184,75,0.1)', border: '1px solid #fde68a', borderRadius: 8, padding: '16px 20px', marginTop: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fcd34d', marginBottom: 6 }}> Disclaimer</div>
            <div style={{ fontSize: 13, color: '#fcd34d', lineHeight: 1.7 }}>Informational purposes only. Not tax advice. Consult a CPA for your specific situation. Always verify rates at irs.gov.</div>
          </div>

        </article>

        <aside style={{ position: 'sticky', top: 80 }}>
          <div style={{ background: '#0d1b3e', border: '1px solid #d8dce6', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ background: 'rgba(255,255,255,0.85)', padding: '12px 16px' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> Calculate Your Taxes</span>
            </div>
            {[
              [' DoorDash Calculator', '/doordash'],
              [' Uber Calculator', '/uber'],
              [' Amazon Flex Calculator', '/amazon-flex'],
              [' Instacart Calculator', '/instacart'],
              [' Grubhub Calculator', '/grubhub'],
            ].map(([l, h]) => (
              <Link key={l as string} href={h as string} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>{l as string}</div>
              </Link>
            ))}
          </div>

          <div style={{ background: '#0d1b3e', border: '1px solid #d8dce6', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ background: 'rgba(255,255,255,0.85)', padding: '12px 16px' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> Related Guides</span>
            </div>
            {[
              ['Amazon Flex Taxes 2026', '/blog/amazon-flex-taxes-2026'],
              ['Quarterly Taxes Guide', '/blog/quarterly-taxes-gig-workers'],
              ['W-2 vs 1099 Guide', '/blog/w2-vs-1099-guide-2026'],
            ].map(([l, h]) => (
              <Link key={l as string} href={h as string} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>→ {l as string}</div>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      <style>{`@media(max-width:900px){.blog-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}
