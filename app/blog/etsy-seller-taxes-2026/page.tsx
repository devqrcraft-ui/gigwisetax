// ================================================================
// FILE: app/blog/etsy-seller-taxes-2026/page.tsx
// ================================================================
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Etsy Seller Taxes 2026 — Complete 1099 Filing Guide | GigWiseTax',
  description: 'How Etsy sellers pay taxes in 2026. Schedule C, SE tax 15.3%, COGS deduction, home office, shipping, quarterly payments. Free Etsy tax calculator for all 51 states.',
  keywords: 'Etsy seller taxes 2026, Etsy 1099 how to file, Etsy self employment tax, Etsy COGS deduction, Etsy quarterly taxes 2026',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/etsy-seller-taxes-2026' },
}
export default function EtsyTaxGuide() {
  const prose = { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, textAlign: 'justify' as const, marginBottom: 16 }
  const h2 = { fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12, marginTop: 28 }
  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Etsy report sales to the IRS in 2026?","acceptedAnswer":{"@type":"Answer","text":"Yes. Etsy issues a 1099-K to sellers with over $600 in sales and reports this to the IRS. All Etsy income must be reported on Schedule C regardless of whether you receive a 1099."}},{"@type":"Question","name":"How much can I sell on Etsy before paying taxes?","acceptedAnswer":{"@type":"Answer","text":"There is no threshold — all Etsy income is taxable. However, after deducting supplies, Etsy fees, shipping, and other expenses, your taxable profit may be significantly lower than gross sales."}},{"@type":"Question","name":"Do Etsy sellers pay self-employment tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. Etsy sellers who operate as sole proprietors pay self-employment tax of 15.3% on net profit plus income tax. You can deduct half of SE tax on your return, reducing the effective rate."}}]}' }} />
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a> ›{' '}
            <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a> ›{' '}
            <span style={{ color: 'rgba(255,255,255,.7)' }}>Etsy Seller Taxes 2026</span>
          </nav>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: '0 0 14px' }}>
             Etsy Seller Taxes 2026 — Complete 1099 Filing Guide
          </h1>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, textAlign: 'justify', maxWidth: 760, margin: 0 }}>
            How Etsy sellers file taxes in 2026. Covers Schedule C, SE tax, cost of goods sold (COGS) deduction, home office, shipping costs, Etsy fees, and quarterly estimated payments.
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 48px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 24 }} className="blog-grid">
        <div>
          <div style={{ background: '#0d1b3e', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
            <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 6, padding: 16, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' as const }}>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: 14 }}> Calculate Your Etsy Taxes Instantly</div>
              <a href="/etsy" style={{ textDecoration: 'none' }}><div style={{ background: '#B22234', color: '#fff', padding: '9px 18px', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Open Calculator →</div></a>
            </div>
            <div style={{ background: 'rgba(178,34,52,0.12)', border: '1px solid #fecaca', borderRadius: 6, padding: 16, marginBottom: 20 }}>
              <div style={{ fontWeight: 800, color: '#B22234', marginBottom: 8 }}> Key Facts: Etsy Taxes 2026</div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 2 }}>
                <li><strong>Etsy sends 1099-K if you earn $600+</strong> (threshold lowered starting 2025)</li>
                <li><strong>COGS (cost of goods sold) is fully deductible</strong> — materials, supplies, inventory</li>
                <li><strong>Etsy fees are deductible</strong> — listing fees, transaction fees, ads</li>
                <li><strong>Etsy collects sales tax</strong> for you in most states — you do NOT remit this</li>
                <li><strong>File Schedule C</strong> for Etsy income and expenses</li>
                <li><strong>NAICS Code 454110</strong> — Electronic Shopping (for Schedule C)</li>
              </ul>
            </div>
            <h2 style={h2}>How Etsy Taxes Differ from Other Gig Platforms</h2>
            <p style={prose}>
              Unlike DoorDash or Uber where income is straightforward, Etsy sellers have a more complex tax situation.
              You must account for <strong>cost of goods sold (COGS)</strong> — the cost of materials, supplies, and production
              costs that went into creating what you sold. COGS directly reduces your gross income before calculating SE tax,
              making it one of the most important deductions for Etsy sellers.
            </p>
            <p style={prose}>
              Additionally, Etsy handles sales tax collection and remittance in most states — meaning the sales tax
              collected from buyers is NOT your income and does NOT appear on your 1099-K.
              Your taxable income is only the portion you receive as the seller.
            </p>
            <h2 style={h2}>Cost of Goods Sold (COGS) — The #1 Etsy Deduction</h2>
            <div style={{ background: 'rgba(3,105,161,0.12)', border: '1px solid #bae6fd', borderRadius: 6, padding: 16, marginBottom: 20 }}>
              <div style={{ fontWeight: 700, color: '#7dd3fc', marginBottom: 8 }}> COGS Formula for Etsy Sellers</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontFamily: 'monospace' }}>
                Beginning Inventory<br/>
                + Purchases/Materials during year<br/>
                − Ending Inventory<br/>
                = <strong>Cost of Goods Sold (deductible)</strong>
              </div>
            </div>
            <h2 style={h2}>Top Tax Deductions for Etsy Sellers in 2026</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }} className="form-grid">
              {[
                { icon: '', name: 'Materials & Supplies (COGS)', detail: 'Yarn, fabric, clay, paint, wood, beads — all raw materials used to create your products.' },
                { icon: '', name: 'Shipping & Packaging', detail: 'Boxes, tissue paper, bubble wrap, tape, Etsy shipping labels. Fully deductible.' },
                { icon: '', name: 'Home Office/Studio', detail: 'Dedicated workspace. $5/sq ft (up to 300 sq ft) or actual expense method.' },
                { icon: '', name: 'Photography Equipment', detail: 'Camera, backdrop, ring light, props used for product photography. 100% deductible.' },
                { icon: '', name: 'Etsy Fees', detail: 'Listing fees ($0.20), transaction fees (6.5%), payment processing, Etsy Ads. All deductible.' },
                { icon: '', name: 'Phone & Internet (business %)', detail: 'Deduct business-use percentage of your monthly plan.' },
                { icon: '', name: 'Printer & Office Supplies', detail: 'Printer, ink, labels, stickers, thank-you cards. 100% deductible for business use.' },
                { icon: '', name: 'Software Subscriptions', detail: 'Canva, Adobe, Etsy Pattern, Quickbooks. 100% deductible if for business.' },
              ].map(d => (
                <div key={d.name} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 12 }}>
                  <div style={{ fontSize: 20, marginBottom: 5 }}>{d.icon}</div>
                  <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 3, fontSize: 13 }}>{d.name}</div>
                  <div style={{ fontSize: 12, color: '#6c757d', lineHeight: 1.5 }}>{d.detail}</div>
                </div>
              ))}
            </div>
            {[
              { q: 'Does Etsy report my sales to the IRS?', a: 'Yes. Etsy sends a 1099-K to both you and the IRS if your gross sales exceed $600 (for 2026 filings). This includes all transaction amounts — before Etsy fees. Your taxable profit is the net after deducting COGS and all business expenses.' },
              { q: 'Do I pay self-employment tax on Etsy income?', a: 'Yes. If your Etsy net profit exceeds $400, you pay 15.3% self-employment tax plus federal income tax. If you sell on Etsy as a hobby (not primarily for profit), different rules may apply — consult a CPA if your Etsy activity is borderline hobby vs. business.' },
              { q: 'What records should Etsy sellers keep?', a: 'Keep receipts for all materials, supplies, shipping costs, equipment, and software. Track inventory (beginning and ending). Save all Etsy statements and monthly billing summaries. The IRS recommends keeping records for at least 3 years after filing.' },
            ].map((item, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 14, marginBottom: 14 }}>
                <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontSize: 14, marginBottom: 6 }}>Q: {item.q}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>{item.a}</div>
              </div>
            ))}
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #e2e5e9', borderRadius: 4, padding: 14, fontSize: 12, color: '#6c757d', lineHeight: 1.6 }}>
               <strong>Disclaimer:</strong> Informational purposes only. Not affiliated with Etsy or the IRS. Consult a licensed CPA for your specific situation.
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
          <a href="/etsy" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 6, padding: 20, textAlign: 'center' as const }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}></div>
              <div style={{ fontWeight: 800, color: '#fff', marginBottom: 6 }}>Etsy Tax Calculator</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>All 51 states · COGS included</div>
              <div style={{ background: '#B22234', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Calculate Now →</div>
            </div>
          </a>
          <div style={{ background: '#0d1b3e', border: '2px dashed #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderBottom: '1px solid #e2e5e9', fontSize: 10, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' as const }}>Sponsored</div>
            <div style={{ padding: 16 }}>
              <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 4, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}><span style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic' }}>Ad image here</span></div>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 6 }}>QuickBooks Self-Employed</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', marginBottom: 14, lineHeight: 1.6 }}>Tracks Etsy inventory, COGS, and expenses automatically.</div>
              <div style={{ background: '#0d7a40', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const }}>Try Free 30 Days →</div>
              <div style={{ fontSize: 10, color: '#c4c9d4', marginTop: 5, textAlign: 'center' as const }}>Affiliate link</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:760px){.blog-grid{grid-template-columns:1fr!important}.form-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}
