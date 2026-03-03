import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Airbnb Host Taxes 2026 — Complete Guide | GigWiseTax',
  description: 'How Airbnb hosts file taxes in 2026. Schedule E vs Schedule C, deductions, occupancy tax. Free calculator.',
  keywords: 'airbnb host taxes 2026, airbnb tax calculator, airbnb 1099-K, airbnb schedule E',
}

export default function BlogPost() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <nav style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
        {' › '}
        <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a>
        {' › '}Airbnb Taxes 2026
      </nav>

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: 32, marginBottom: 32, border: '1px solid rgba(165,180,252,.2)' }}>
        <div style={{ fontSize: 13, color: '#a5b4fc', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Tax Guide · Updated 2026</div>
        <h1 style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginBottom: 16 }}>Airbnb Host Taxes 2026 — Complete Guide</h1>
        <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, fontSize: 17 }}>
          Airbnb sends you a 1099-K if you earned $600 or more. As a host you can deduct mortgage interest, cleaning, repairs, and depreciation. Here is the complete 2026 guide.
        </p>
      </div>

      <div style={{ background: 'rgba(232,184,75,.1)', border: '1px solid rgba(232,184,75,.3)', borderRadius: 8, padding: 16, marginBottom: 24, fontSize: 14, color: '#e8b84b' }}>
          {String.raw`* Airbnb rental income is typically NOT subject to SE tax (Schedule E) unless you provide substantial services (daily cleaning, meals).`}
        </div>

      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>
        Top Tax Deductions for Airbnb
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🏠 Mortgage Interest</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Proportional to rental days — big deduction for hosts</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🧹 Cleaning Services</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>100% deductible for cleaning between guests</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🔧 Repairs & Maintenance</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Plumbing, electrical, HVAC — all deductible</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>📷 Photography</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Professional photos for your listing</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>📱 Phone & Internet</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Proportional business use percentage</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>💻 Airbnb Platform Fees</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>The 3% host fee is fully deductible</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🛏️ Furnishings</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Depreciated over useful life or Section 179</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🏠 Depreciation</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Structural depreciation over 27.5 years</div>
        </div>
      </div>

      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>
        Estimated Tax by Income — 2026
      </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead>
          <tr style={{ background: 'rgba(165,180,252,.1)' }}>
            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>Net Income</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>SE Tax</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>Federal Tax</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>Total Est.</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
            <td style={{ padding: '12px 16px', fontWeight: 700 }}>$20,000</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$0*</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$2,400</td>
            <td style={{ padding: '12px 16px', fontWeight: 700, color: '#e8b84b' }}>$2,400</td>
          </tr>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
            <td style={{ padding: '12px 16px', fontWeight: 700 }}>$40,000</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$0*</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$5,600</td>
            <td style={{ padding: '12px 16px', fontWeight: 700, color: '#e8b84b' }}>$5,600</td>
          </tr>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
            <td style={{ padding: '12px 16px', fontWeight: 700 }}>$75,000</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$0*</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$12,600</td>
            <td style={{ padding: '12px 16px', fontWeight: 700, color: '#e8b84b' }}>$12,600</td>
          </tr>
        </tbody>
      </table>

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: 24, border: '1px solid rgba(165,180,252,.2)', textAlign: 'center' }}>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Free Airbnb Tax Calculator</div>
        <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: 16 }}>All 51 states. No signup. Instant results.</p>
        <a href="/airbnb" style={{ background: '#B22234', color: '#fff', padding: '12px 28px', borderRadius: 6, textDecoration: 'none', fontWeight: 700 }}>
          Calculate My Taxes
        </a>
      </div>
    </main>
  )
}
