import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OnlyFans Taxes 2026: How Much Tax Do Creators Pay? (Free Calculator)',
  description: 'OnlyFans creators pay 15.3% SE tax + federal income tax on all earnings. See exact deductions (home office, equipment, subscriptions) + quarterly deadlines. Free calculator.',
  keywords: 'onlyfans taxes 2026, onlyfans tax calculator, onlyfans 1099, onlyfans self employment tax',
  openGraph: {
    title: 'OnlyFans Taxes 2026 — Complete Creator Guide',
    description: 'Everything OnlyFans creators need to know about taxes in 2026. Free calculator included.',
    type: 'article',
  },
}

export default function OnlyFansTaxGuide() {
  return (
    <div style={{ background: "#0d1117", minHeight: "100vh" }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much tax do OnlyFans creators owe in 2026?","acceptedAnswer":{"@type":"Answer","text":"OnlyFans creators owe self-employment tax (15.3%) plus federal income tax on net profit. On $60,000 gross with $10,000 in deductions, net tax is approximately $14,000-$16,000 depending on filing status."}},{"@type":"Question","name":"What business expenses can OnlyFans creators deduct?","acceptedAnswer":{"@type":"Answer","text":"OnlyFans creators can deduct camera equipment, lighting, props, costumes, home studio space, internet, phone, editing software, and marketing. A dedicated business bank account makes tracking deductions much easier."}},{"@type":"Question","name":"Does OnlyFans report income to the IRS?","acceptedAnswer":{"@type":"Answer","text":"Yes. OnlyFans reports creator income to the IRS on a 1099-NEC for earnings over $600. All income must be reported on Schedule C of your tax return regardless of whether you receive a 1099."}}]}' }} />
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <nav style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a> › <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a> › OnlyFans Taxes 2026
      </nav>

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: '32px', marginBottom: 32, border: '1px solid rgba(165,180,252,.2)' }}>
        <div style={{ fontSize: 13, color: '#a5b4fc', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Creator Tax Guide · Updated 2026</div>
        <h1 style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginBottom: 16 }}>OnlyFans Taxes 2026: Complete Creator Guide</h1>
        <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, fontSize: 17 }}>
          OnlyFans counts you as an independent contractor — you're responsible for all taxes. That means self-employment tax (15.3%), federal income tax, and possibly state income tax. Here's exactly how to handle it.
        </p>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>Does OnlyFans Send Me a 1099?</h2>
      <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, marginBottom: 24 }}>
        Yes — if you earned <strong style={{ color: '#fff' }}>$600 or more</strong>, OnlyFans will send you a Form 1099-NEC. But even if you earned less, you're legally required to report all income. The IRS has received the same 1099 they sent you.
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>How Much Tax Will I Owe?</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24 }}>
        <thead>
          <tr style={{ background: 'rgba(165,180,252,.1)' }}>
            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>Annual Net Income</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>SE Tax (15.3%)</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>Federal Income Tax</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>Total Est.</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['$10,000', '$1,530', '$765', '$2,295'],
            ['$25,000', '$3,825', '$2,288', '$6,113'],
            ['$50,000', '$7,065', '$6,617', '$13,682'],
            ['$100,000', '$14,130', '$18,479', '$32,609'],
          ].map(([income, se, fed, total], i) => (
            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
              <td style={{ padding: '12px 16px', fontWeight: 700 }}>{income}</td>
              <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>{se}</td>
              <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>{fed}</td>
              <td style={{ padding: '12px 16px', fontWeight: 700, color: '#e8b84b' }}>{total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>Top Tax Deductions for OnlyFans Creators</h2>
      <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, marginBottom: 16 }}>
        The IRS allows deductions for "ordinary and necessary" business expenses. For creators, that includes a lot:
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
        {[
          ['📸 Camera & Equipment', 'Full cost if used for content'],
          ['💡 Lighting & Studio', 'Ring lights, backdrops, props'],
          ['📱 Phone & Internet', '50–100% if used for business'],
          ['💄 Makeup & Costumes', 'If exclusively for content'],
          ['🏠 Home Office', '$5/sq ft (simplified method)'],
          ['✂️ Hair & Beauty', 'Business use only'],
          ['📦 Subscriptions', 'Editing software, stock music'],
          ['🎵 Music Licensing', 'Royalty-free music services'],
        ].map(([name, desc]) => (
          <div key={name} style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>{name}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>{desc}</div>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>Do I Need to Pay Quarterly?</h2>
      <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, marginBottom: 32 }}>
        Yes — if you expect to owe <strong style={{ color: '#fff' }}>$1,000 or more</strong> in taxes for 2026, the IRS requires quarterly estimated payments. Missing them results in a penalty. Use our free calculator to find your exact quarterly amount.
      </p>

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: 24, border: '1px solid rgba(165,180,252,.2)', textAlign: 'center' }}>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Free OnlyFans Tax Calculator</div>
        <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: 16 }}>Calculate SE tax + federal + state. All 51 states. No signup.</p>
        <a href="/onlyfans" style={{ background: '#B22234', color: '#fff', padding: '12px 28px', borderRadius: 6, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>Calculate My Taxes →</a>
      </div>
    </main>
    </div>
  )
}
