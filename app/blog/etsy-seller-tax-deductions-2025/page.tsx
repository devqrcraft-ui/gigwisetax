import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Etsy Seller Tax Deductions 2026 — Complete List | GigWiseTax',
  description: 'Every tax deduction Etsy sellers can claim in 2025. Materials, home studio, shipping, Etsy fees, equipment — complete deduction checklist with dollar amounts.',
  keywords: 'Etsy seller tax deductions 2025, Etsy taxes deductions, Etsy 1099 deductions, Etsy seller write offs',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/etsy-seller-tax-deductions-2025' },
}

export default function EtsyDeductionsBlog() {
  const s = { maxWidth: 780, margin: '0 auto', padding: '40px 20px' }
  const h2 = { fontSize: 22, fontWeight: 800, color: '#1a1a2e', margin: '32px 0 12px' }
  const p  = { fontSize: 15, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }
  const tip  = { background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 6, padding: '14px 18px', margin: '20px 0', fontSize: 14, color: '#14532d', lineHeight: 1.7 }

  const deductions = [
    { cat: ' Materials & Supplies', items: ['Raw materials (fabric, yarn, wood, resin, etc.)', 'Packaging materials (boxes, tissue paper, ribbon)', 'Shipping supplies (tape, labels, bubble wrap)', 'Tools and equipment used for production'] },
    { cat: ' Home Studio / Workspace', items: ['Home office deduction: $5/sq ft up to 300 sq ft', 'Dedicated craft room — 100% of space qualifies', 'Utilities proportional to studio space', 'Rent or mortgage interest (proportional)'] },
    { cat: ' Technology & Software', items: ['Computer and tablet used for shop management', 'Design software (Canva Pro, Adobe, etc.)', 'Photography equipment for product photos', 'Phone used for Etsy business (business %)'] },
    { cat: ' Shipping & Postage', items: ['All postage and shipping fees paid by you', 'Shipping insurance', 'PO Box rental for business address', 'Driving to post office (mileage at $0.70/mi)'] },
    { cat: ' Etsy Platform Fees', items: ['Etsy listing fees ($0.20 per listing)', 'Etsy transaction fees (6.5% of sale price)', 'Etsy Ads / offsite ads fees', 'Etsy Plus subscription ($10/month)'] },
    { cat: ' Education & Marketing', items: ['Etsy courses and business books', 'Photography props and backdrops', 'Social media marketing costs', 'Business cards and promotional materials'] },
  ]

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What can Etsy sellers deduct on their 2025 taxes?","acceptedAnswer":{"@type":"Answer","text":"Etsy sellers can deduct materials and supplies, Etsy listing and transaction fees (6.5%), shipping costs, packaging, photography equipment, home studio space, and Etsy Ads spending. Keep receipts for everything."}},{"@type":"Question","name":"How do I calculate my Etsy profit for taxes?","acceptedAnswer":{"@type":"Answer","text":"Gross Etsy sales minus cost of goods sold (materials, supplies) minus Etsy fees minus shipping minus other business expenses equals net profit. Net profit is what you owe self-employment tax and income tax on."}},{"@type":"Question","name":"Do I need to collect sales tax on Etsy?","acceptedAnswer":{"@type":"Answer","text":"Usually no. Etsy automatically collects and remits sales tax in most US states under marketplace facilitator laws. You should check your state rules, but most Etsy sellers do not need to collect sales tax themselves."}}]}' }} />
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '3px solid #B22234', padding: '40px 20px 32px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 16 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,.7)' }}>Etsy Deductions 2025</span>
          </nav>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' as const }}>
            {['Etsy','Tax Deductions','1099-K','Seller Guide'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 3, padding: '3px 10px', fontSize: 11, color: 'rgba(255,255,255,.55)' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', margin: '0 0 14px', lineHeight: 1.2 }}>
            Etsy Seller Tax Deductions 2025: The Complete List
          </h1>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, margin: 0 }}>Updated January 2025 · 8 min read · GigWiseTax.com</p>
        </div>
      </div>

      <div style={{ background: '#fff' }}>
        <div style={s}>
          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 6, padding: '14px 18px', marginBottom: 24, fontSize: 14, color: '#92400e' }}>
            <strong>Quick Summary:</strong> The average Etsy seller qualifies for $4,000–$9,000 in tax deductions they don't claim. Materials, home studio, shipping, Etsy fees, equipment — all deductible. This guide covers every category.
          </div>

          <p style={p}>Etsy sent 1099-K forms to sellers with over $5,000 in sales in 2024 (threshold drops to $600 in 2025). But what most Etsy sellers don't realize is how many expenses they can deduct against that income — often dramatically reducing their taxable profit.</p>
          <p style={p}>Here's every deduction Etsy sellers can claim in 2025, organized by category.</p>

          {deductions.map((cat, i) => (
            <div key={i} style={{ marginBottom: 28 }}>
              <h2 style={h2}>{cat.cat}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {cat.items.map((item, j) => (
                  <div key={j} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 6, padding: '12px 14px', fontSize: 14, color: '#374151', display: 'flex', gap: 8 }}>
                    <span style={{ color: '#22c55e', fontWeight: 800, flexShrink: 0 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={tip}>
            <strong> Important: Cost of Goods Sold (COGS)</strong><br/>
            Materials you use to make your products are deducted as "Cost of Goods Sold" on Schedule C, not as regular expenses. Keep separate records for materials purchased vs. materials used in products sold.
          </div>

          <h2 style={h2}>The Home Studio Deduction — Most Missed</h2>
          <p style={p}>If you have a dedicated space at home used exclusively for your Etsy business — a craft room, studio, or dedicated workspace — you can deduct $5 per square foot using the simplified method (up to 300 sq ft = $1,500 max deduction). The space must be used regularly and exclusively for business.</p>

          <div style={{ background: '#1e2d5a', borderRadius: 8, padding: 24, margin: '32px 0', textAlign: 'center' as const }}>
            <div style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>FREE ETSY TAX CALCULATOR</div>
            <p style={{ color: '#fff', fontSize: 15, margin: '0 0 16px' }}>Calculate your exact Etsy tax bill and quarterly payment amount</p>
            <Link href="/etsy" style={{ display: 'block', background: '#B22234', color: '#fff', borderRadius: 6, padding: '13px', fontSize: 15, fontWeight: 800, textDecoration: 'none', marginBottom: 10 }}>
               Open Etsy Tax Calculator →
            </Link>
            <Link href="/deductions" style={{ display: 'block', background: 'rgba(255,255,255,.1)', color: '#fff', borderRadius: 6, padding: '12px', fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,.2)' }}>
               Full Deductions Checklist →
            </Link>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: 14, fontSize: 12, color: '#6b7280', lineHeight: 1.6 }}>
             <strong>Disclaimer:</strong> This article is for informational purposes only. Consult a licensed CPA for personalized tax advice. GigWiseTax.com is not affiliated with Etsy or the IRS.
          </div>
        </div>
      </div>
    </div>
  )
}
