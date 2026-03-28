import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazon Flex Taxes 2026: Complete Guide for Drivers',
  description: 'How to calculate and pay taxes as an Amazon Flex driver in 2026. SE tax, mileage deduction (70¢/mile), quarterly payments, and top deductions.',
}

export default function AmazonFlexTaxesBlogPost() {
  const h2 = { fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', margin: '32px 0 12px', paddingTop: 8, borderTop: '2px solid rgba(255,255,255,0.1)' }
  const h3 = { fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '20px 0 8px' }
  const p  = { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, marginBottom: 14 }
  const li = { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 8 }

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does Amazon Flex report income for taxes?","acceptedAnswer":{"@type":"Answer","text":"Amazon Flex issues a 1099-NEC to drivers earning over $600. Income is reported on Schedule C as self-employment income. Amazon does not withhold taxes — drivers pay quarterly estimated taxes."}},{"@type":"Question","name":"What is the tax rate for Amazon Flex drivers?","acceptedAnswer":{"@type":"Answer","text":"Amazon Flex drivers pay 15.3% self-employment tax plus income tax. After mileage deductions, most drivers pay an effective rate of 18-25% on net earnings. Use our calculator for your exact amount."}},{"@type":"Question","name":"Can Amazon Flex drivers deduct car expenses?","acceptedAnswer":{"@type":"Answer","text":"Yes. Amazon Flex drivers can deduct either standard mileage (67 cents/mile in 2026) or actual car expenses. Most drivers get a larger deduction using standard mileage. Keep a mileage log for every delivery block."}}]}' }} />

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 10 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link> ›{' '}
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</Link> › Amazon Flex Taxes 2026
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' as const }}>
            {['Amazon Flex', 'Delivery', 'Mileage', '1099'].map(t => (
              <span key={t} style={{ background: 'rgba(232,184,75,.15)', color: '#e8b84b', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 3, border: '1px solid rgba(232,184,75,.3)' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.3, margin: '0 0 12px' }}>
             Amazon Flex Taxes 2026: Complete Guide for Drivers
          </h1>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}> January 15, 2026</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}> 8 min read</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}> Updated for 2026 IRS rates</span>
          </div>
        </div>
      </div>


      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 32, alignItems: 'start' }} className="blog-grid">

        {/* ARTICLE */}
        <article>

          {/* TL;DR BOX */}
          <div style={{ background: 'rgba(5,150,105,0.12)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#4ade80', marginBottom: 8 }}> Quick Summary</div>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {[
                'Amazon Flex drivers are 1099 independent contractors — no taxes withheld',
                'Self-employment tax: 15.3% on 92.35% of net income',
                'Mileage deduction: 72.5 cents per mile in 2026',
                'Must pay quarterly taxes if you expect to owe $1,000+',
                'Top deductions: mileage, phone, dolly/equipment, parking, tolls',
              ].map(item => <li key={item} style={{ fontSize: 13, color: '#4ade80', lineHeight: 1.7, marginBottom: 4 }}>{item}</li>)}
            </ul>
          </div>

          <p style={p}>
            Amazon Flex has become one of America's most popular side gigs, with over 500,000 active drivers delivering packages across all 50 states. But unlike a regular Amazon warehouse job, Flex drivers are classified as <strong>independent contractors</strong> — which means Amazon deducts nothing from your earnings for taxes.
          </p>
          <p style={p}>
            That's great news for your paycheck every week. It's a shock every April if you haven't been setting money aside.
          </p>

          <h2 style={h2}>Does Amazon Flex Send a 1099?</h2>
          <p style={p}>
            Yes. Amazon sends a <strong>1099-NEC</strong> (Non-Employee Compensation) to every Flex driver who earns $600 or more in a calendar year. Your 1099-NEC will arrive by January 31, 2027 for the 2026 tax year.
          </p>
          <p style={p}>
            Important: Even if you earn less than $600 and don't receive a 1099, the IRS still requires you to report all self-employment income. Amazon reports all payments to the IRS regardless of threshold.
          </p>

          <h2 style={h2}>How Much Tax Do Amazon Flex Drivers Owe?</h2>
          <p style={p}>
            Your total tax burden as a Flex driver has two main components:
          </p>
          <h3 style={h3}>1. Self-Employment (SE) Tax — 15.3%</h3>
          <p style={p}>
            This covers Social Security (12.4%) and Medicare (2.9%). The SE tax is calculated on <strong>92.35% of your net profit</strong> (after deductions). You can then deduct 50% of the SE tax from your gross income.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 16, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 8 }}> Example: $50,000 Amazon Flex Income</div>
            {[
              ['Net income (after mileage deduction)', '$50,000'],
              ['SE tax base (× 92.35%)', '$46,175'],
              ['SE tax (× 15.3%)', '$7,065'],
              ['Deduct 50% of SE tax from income', '−$3,532'],
              ['Taxable income (approx.)', '$46,468'],
              ['Federal income tax (22% bracket, single)', '$10,223'],
              ['State tax (CA 9.3% example)', '$4,321'],
              ['TOTAL estimated taxes', '$21,609'],
            ].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13 }}>
                <span style={{ color: 'rgba(255,255,255,0.85)' }}>{l}</span>
                <strong style={{ color: 'rgba(255,255,255,0.9)' }}>{v}</strong>
              </div>
            ))}
          </div>

          <h3 style={h3}>2. Federal + State Income Tax</h3>
          <p style={p}>
            After deducting half of your SE tax, your remaining profit is taxed at your regular federal income tax bracket rate, plus your state's rate. Use our <Link href="/amazon-flex" style={{ color: '#B22234', fontWeight: 600 }}>Amazon Flex Tax Calculator</Link> to get your exact estimate.
          </p>

          <h2 style={h2}>The Mileage Deduction: Your Biggest Tax Break</h2>
          <p style={p}>
            The IRS standard mileage rate for 2026 is <strong>72.5 cents per mile</strong>. For Amazon Flex drivers — who typically drive 20,000–40,000 business miles per year — this is the single largest deduction available.
          </p>
          <div style={{ background: '#1a1a2e', borderRadius: 6, padding: '16px 20px', marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 8 }}> Mileage Savings Example</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,.8)', lineHeight: 1.8 }}>
              25,000 miles × $0.725 = <strong style={{ color: '#e8b84b', fontSize: 18 }}>$17,500 deduction</strong><br />
              At 30% effective rate → saves you approximately <strong style={{ color: '#e8b84b' }}>$5,438 in taxes</strong>
            </div>
          </div>
          <p style={p}>
            Track your miles using a dedicated app. Stride (free) and MileIQ ($5.99/mo) are both popular among delivery drivers. The IRS can audit mileage deductions — keep records that show the date, destination, and business purpose of each trip.
          </p>
          <p style={p}>
            <strong>What counts as a deductible mile?</strong> From the moment you accept a block and start driving to pick up packages, through all deliveries, until you return home after your last delivery.
          </p>

          <h2 style={h2}>Top Tax Deductions for Amazon Flex Drivers 2026</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
            {[
              { icon: '', title: 'Mileage (70¢/mile)', desc: 'Biggest deduction. Track every delivery mile.' },
              { icon: '', title: 'Phone & Data', desc: '50–80% of bill used for Flex app and navigation.' },
              { icon: '', title: 'Hand Truck / Dolly', desc: 'Equipment for large Amazon packages — fully deductible.' },
              { icon: '', title: 'Flashlight & Safety Gear', desc: 'Required for early morning or evening deliveries.' },
              { icon: '', title: 'Parking & Tolls', desc: 'All parking fees and tolls during deliveries.' },
              { icon: '', title: 'Gloves & Work Gear', desc: 'Protective gear worn exclusively for deliveries.' },
              { icon: '', title: 'Bank Fees', desc: 'If you open a business account for Flex income.' },
              { icon: '', title: 'Tax Prep Fees', desc: 'CPA or tax software costs — deductible on Schedule C.' },
            ].map(d => (
              <div key={d.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #e2e5e9', borderRadius: 6, padding: '12px 14px' }}>
                <div style={{ fontSize: 18, marginBottom: 4 }}>{d.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 3 }}>{d.title}</div>
                <div style={{ fontSize: 11, color: '#6c757d', lineHeight: 1.5 }}>{d.desc}</div>
              </div>
            ))}
          </div>

          <h2 style={h2}>Quarterly Tax Payments for Amazon Flex Drivers</h2>
          <p style={p}>
            If you expect to owe $1,000 or more in taxes, the IRS requires you to pay estimated taxes four times per year. Most Flex drivers earning $20,000+ fall into this category.
          </p>
          <div style={{ background: '#0d1b3e', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ background: '#1a1a2e', padding: '10px 16px', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>2026 Quarterly Deadlines</div>
            {[
              { q: 'Q1 2026', period: 'Jan – Mar income', due: 'April 15, 2026', urgent: true },
              { q: 'Q2 2026', period: 'Apr – May income', due: 'June 16, 2026', urgent: false },
              { q: 'Q3 2026', period: 'Jun – Aug income', due: 'September 15, 2026', urgent: false },
              { q: 'Q4 2026', period: 'Sep – Dec income', due: 'January 15, 2027', urgent: false },
            ].map(row => (
              <div key={row.q} style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontSize: 14 }}>{row.q}</span>
                  <span style={{ fontSize: 12, color: '#6c757d', marginLeft: 8 }}>{row.period}</span>
                </div>
                <span style={{ fontWeight: 700, color: row.urgent ? '#B22234' : 'rgba(255,255,255,0.75)', fontSize: 13 }}>
                  {row.urgent && ' '}{row.due}
                </span>
              </div>
            ))}
          </div>
          <p style={p}>
            Pay online at <a href="https://irs.gov/payments" target="_blank" rel="noopener noreferrer" style={{ color: '#B22234', fontWeight: 600 }}>IRS.gov/payments</a> using Direct Pay (free) or EFTPS. Missing a quarterly payment triggers a penalty of roughly 7–8% annually on the unpaid amount.
          </p>

          <h2 style={h2}>How Much Should Amazon Flex Drivers Set Aside?</h2>
          <p style={p}>
            A safe rule of thumb: <strong>set aside 25–30% of every Amazon Flex payment</strong> you receive. The exact percentage depends on your state, filing status, and other income sources. Drivers in no-income-tax states like Texas or Florida can often get away with 22–25%.
          </p>
          <p style={p}>
            Use our free <Link href="/amazon-flex" style={{ color: '#B22234', fontWeight: 600 }}>Amazon Flex Tax Calculator</Link> to get your personalized estimate.
          </p>

          <div style={{ background: 'rgba(232,184,75,0.1)', border: '1px solid #fde68a', borderRadius: 8, padding: '16px 20px', marginTop: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fcd34d', marginBottom: 6 }}> Disclaimer</div>
            <div style={{ fontSize: 13, color: '#fcd34d', lineHeight: 1.7 }}>
              This article is for informational purposes only and does not constitute tax advice. Tax laws change frequently. Consult a licensed CPA or Enrolled Agent for advice specific to your situation.
            </div>
          </div>

        </article>

        {/* SIDEBAR */}
        <aside style={{ position: 'sticky', top: 80 }}>
          <div style={{ background: '#0d1b3e', border: '1px solid #d8dce6', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ background: '#1a1a2e', padding: '12px 16px' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> Try the Calculator</span>
            </div>
            <div style={{ padding: 16 }}>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: 12, marginTop: 0 }}>Estimate your exact Amazon Flex tax bill in 60 seconds.</p>
              <Link href="/amazon-flex" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#B22234', color: '#fff', padding: '11px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const, cursor: 'pointer' }}> Amazon Flex Calculator →</div>
              </Link>
            </div>
          </div>

          <div style={{ background: '#0d1b3e', border: '2px dashed #d8dce6', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderBottom: '1px solid #e2e5e9', fontSize: 10, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Sponsored</div>
            <div style={{ padding: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 6 }}> QuickBooks Self-Employed</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', marginBottom: 12, lineHeight: 1.6 }}>Track mileage and expenses automatically. Built for Amazon Flex drivers.</div>
              <a href="https://privatepaycheck.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#0d7a40', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 12, fontWeight: 700, textAlign: 'center' as const, cursor: 'pointer' }}>✓ Try Free 30 Days</div>
              </a>
            </div>
          </div>

          <div style={{ background: '#0d1b3e', border: '1px solid #d8dce6', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ background: '#1a1a2e', padding: '12px 16px' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> Related Articles</span>
            </div>
            {[
              ['Mileage Rate 2026 Guide', '/blog/mileage-rate-2026'],
              ['Quarterly Taxes Guide', '/blog/quarterly-taxes-gig-workers'],
              ['W-2 vs 1099 Explained', '/blog/w2-vs-1099-guide-2026'],
              ['DoorDash vs Grubhub Taxes', '/blog/grubhub-vs-doordash-taxes-2026'],
            ].map(([l, h]) => (
              <Link key={l} href={h} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>→ {l}</div>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      <style>{`
        @media(max-width:900px){.blog-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  )
}
