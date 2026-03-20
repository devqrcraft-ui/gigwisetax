import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DoorDash Taxes 2026: Complete Guide — How Much You Owe | GigWiseTax',
  description: 'Everything DoorDash drivers need to know about taxes in 2025. SE tax, quarterly payments, top deductions, and how to avoid IRS penalties. Free calculator included.',
  keywords: 'DoorDash taxes 2025, DoorDash tax guide, DoorDash 1099 taxes, DoorDash quarterly taxes, DoorDash self employment tax',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/doordash-taxes-2025-guide' },
}

export default function DoorDashTaxesBlog() {
  const s = { maxWidth: 780, margin: '0 auto', padding: '40px 20px' }
  const h2 = { fontSize: 22, fontWeight: 800, color: '#1a1a2e', margin: '32px 0 12px' }
  const h3 = { fontSize: 17, fontWeight: 700, color: '#1a1a2e', margin: '24px 0 10px' }
  const p  = { fontSize: 15, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }
  const warn = { background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: 6, padding: '14px 18px', margin: '20px 0', fontSize: 14, color: '#7f1d1d', lineHeight: 1.7 }
  const tip  = { background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 6, padding: '14px 18px', margin: '20px 0', fontSize: 14, color: '#14532d', lineHeight: 1.7 }

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How did DoorDash taxes work in 2025?","acceptedAnswer":{"@type":"Answer","text":"In 2025, DoorDash drivers paid SE tax (15.3%) plus income tax as 1099 contractors. The IRS mileage rate was 67 cents/mile. DoorDash issued 1099-NEC forms for earnings over $600 by January 31, 2026."}},{"@type":"Question","name":"What changed for DoorDash taxes from 2025 to 2026?","acceptedAnswer":{"@type":"Answer","text":"The basic structure remains the same — 1099 income, SE tax, mileage deductions. Check the current federal tax brackets and confirm the mileage rate for 2026 with our calculator for the most accurate estimate."}},{"@type":"Question","name":"Did the 1099 threshold change for DoorDash in 2025?","acceptedAnswer":{"@type":"Answer","text":"The 1099-NEC threshold remained at $600 in 2025. DoorDash issues a 1099-NEC to all drivers earning $600 or more. All income must be reported on Schedule C regardless of whether a 1099 is received."}}]}' }} />
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '3px solid #B22234', padding: '40px 20px 32px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 16 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,.7)' }}>DoorDash Taxes 2025</span>
          </nav>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' as const }}>
            {['DoorDash','Taxes 2025','1099','Delivery Driver'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 3, padding: '3px 10px', fontSize: 11, color: 'rgba(255,255,255,.55)' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', margin: '0 0 14px', lineHeight: 1.2 }}>
            DoorDash Taxes 2025: The Complete Driver's Guide
          </h1>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, margin: 0 }}>Updated January 2025 · 11 min read · GigWiseTax.com</p>
        </div>
      </div>

      <div style={{ background: '#fff' }}>
        <div style={s}>
          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 6, padding: '14px 18px', marginBottom: 24, fontSize: 14, color: '#92400e' }}>
            <strong>Quick Summary:</strong> DoorDash drivers pay 15.3% SE tax + federal income tax + state tax. Set aside 25-30% of net income. Top deductions: mileage ($0.67/mile), phone, insulated bags. Quarterly deadlines: Apr 15, Jun 16, Sep 15, Jan 15.
          </div>

          <p style={p}>There are over 7 million active DoorDash drivers in the United States. Most of them overpay taxes by $1,000–$4,000 per year — simply because they don't know the rules. This guide covers everything you need to know about DoorDash taxes in 2025.</p>

          <h2 style={h2}>Does DoorDash Withhold Taxes?</h2>
          <p style={p}>No. DoorDash classifies all drivers as independent contractors (1099-NEC). This means DoorDash does not withhold federal income tax, state income tax, Social Security, or Medicare taxes from your earnings. You receive your full pay — and you are responsible for calculating and paying all taxes yourself.</p>
          <div style={warn}>⚠️ <strong>Critical:</strong> Many new drivers don't realize this until they file their first tax return and owe a large unexpected bill. The solution is to set aside 25-30% of every payment from day one.</div>

          <h2 style={h2}>What Taxes Do DoorDash Drivers Pay?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '16px 0 24px' }}>
            {[
              { label: 'Self-Employment Tax', value: '15.3%', detail: '12.4% SS + 2.9% Medicare on net earnings' },
              { label: 'Federal Income Tax', value: '10–22%', detail: 'Most drivers fall in 12% or 22% bracket' },
              { label: 'SE Tax Deduction', value: '-50%', detail: 'Deduct half of SE tax from taxable income' },
              { label: 'State Income Tax', value: '0–9.3%', detail: 'No tax in TX, FL, NV. Up to 9.3% in CA' },
            ].map(item => (
              <div key={item.label} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 6, padding: '14px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: '#B22234', marginBottom: 4 }}>{item.value}</div>
                <div style={{ fontSize: 12, color: '#9ca3af' }}>{item.detail}</div>
              </div>
            ))}
          </div>

          <h2 style={h2}>Top DoorDash Tax Deductions for 2025</h2>
          <h3 style={h3}>1. Mileage Deduction — $0.67 per mile</h3>
          <p style={p}>The mileage deduction is the single biggest tax break for DoorDash drivers. The 2025 IRS standard mileage rate is $0.67 per mile for business driving. On 15,000 business miles per year, that's a $10,050 deduction — saving approximately $2,940 in taxes (at 28% combined rate).</p>
          <div style={tip}>✅ <strong>Pro tip:</strong> Track miles from the moment you open the DoorDash app until you complete your last delivery — not just while food is in your car. App opening, waiting at restaurants, and driving between orders all count.</div>

          <h3 style={h3}>2. Phone & Data Plan</h3>
          <p style={p}>If you use your smartphone for DoorDash, you can deduct the business-use percentage of your monthly bill. Most drivers use their phone 60-80% for work during active hours. On a $100/month phone bill with 70% business use, that's an $840/year deduction.</p>

          <h3 style={h3}>3. Insulated Bags & Equipment</h3>
          <p style={p}>Hot bags, pizza bags, drink carriers, and other delivery equipment are 100% deductible. So are car mounts for your phone, external chargers, and any other gear you use exclusively for deliveries.</p>

          <h3 style={h3}>4. Car Expenses (if using actual method)</h3>
          <p style={p}>Instead of the standard mileage rate, you can deduct actual car expenses — gas, insurance, repairs, depreciation — proportional to business use. This method requires detailed records but can be more valuable for high-mileage drivers with expensive vehicles.</p>

          <h2 style={h2}>DoorDash Quarterly Tax Deadlines 2025</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, marginBottom: 24 }}>
            <thead>
              <tr style={{ background: '#1a1a2e' }}>
                {['Quarter','Income Period','IRS Deadline'].map(h => (
                  <th key={h} style={{ padding: '10px 14px', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.6)', textAlign: 'left' as const }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { q: 'Q1 2025', p: 'January – March', d: 'April 15, 2025' },
                { q: 'Q2 2025', p: 'April – May',     d: 'June 16, 2025' },
                { q: 'Q3 2025', p: 'June – August',   d: 'September 15, 2025' },
                { q: 'Q4 2025', p: 'September – Dec', d: 'January 15, 2026' },
              ].map((r, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f0f1f3', background: i===0 ? '#fff9f9' : '#fff' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 700, color: '#1a1a2e' }}>{r.q}</td>
                  <td style={{ padding: '12px 14px', color: '#374151' }}>{r.p}</td>
                  <td style={{ padding: '12px 14px', fontWeight: 700, color: i===0 ? '#B22234' : '#1a1a2e' }}>{r.d}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ background: '#1e2d5a', borderRadius: 8, padding: 24, margin: '32px 0', textAlign: 'center' as const }}>
            <div style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>CALCULATE YOUR DOORDASH TAX BILL</div>
            <p style={{ color: '#fff', fontSize: 15, margin: '0 0 16px' }}>Free calculator — all 51 states, instant results, no signup</p>
            <Link href="/doordash" style={{ display: 'block', background: '#B22234', color: '#fff', borderRadius: 6, padding: '13px', fontSize: 15, fontWeight: 800, textDecoration: 'none', marginBottom: 10 }}>
              🚗 Open DoorDash Tax Calculator →
            </Link>
            <Link href="/tax-penalty-finder" style={{ display: 'block', background: 'rgba(255,255,255,.1)', color: '#fff', borderRadius: 6, padding: '12px', fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,.2)' }}>
              🔍 Find My Tax Overpayment →
            </Link>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: 14, fontSize: 12, color: '#6b7280', lineHeight: 1.6 }}>
            ⚠️ <strong>Disclaimer:</strong> This article is for informational purposes only. Tax laws change. Consult a licensed CPA. GigWiseTax.com is not affiliated with DoorDash or the IRS.
          </div>
        </div>
      </div>
    </div>
  )
}
