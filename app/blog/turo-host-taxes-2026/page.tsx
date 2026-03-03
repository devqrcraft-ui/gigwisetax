import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Turo Host Taxes 2026 — Complete Tax Guide | GigWiseTax',
  description: 'How Turo hosts file taxes in 2026. Schedule C vs E, car depreciation, insurance deductions. Free tax calculator.',
  keywords: 'turo host taxes 2026, turo tax calculator, turo 1099-K, turo car sharing taxes',
}

export default function BlogPost() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <nav style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
        {' › '}
        <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a>
        {' › '}Turo Taxes 2026
      </nav>

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: 32, marginBottom: 32, border: '1px solid rgba(165,180,252,.2)' }}>
        <div style={{ fontSize: 13, color: '#a5b4fc', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Tax Guide · Updated 2026</div>
        <h1 style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginBottom: 16 }}>Turo Host Taxes 2026 — Complete Tax Guide</h1>
        <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, fontSize: 17 }}>
          Turo hosts typically report income on Schedule C as a business. You can deduct depreciation, insurance, maintenance, cleaning, and Turo platform fees. Here is the complete 2026 guide.
        </p>
      </div>
      
      <div style={{ background: 'rgba(232,184,75,.1)', border: '1px solid rgba(232,184,75,.3)', borderRadius: 8, padding: 16, marginBottom: 24, fontSize: 14, color: '#e8b84b', lineHeight: 1.7 }}>
        <strong>Note:</strong> Turo income is usually reported on Schedule C (self-employment) because hosts provide services. This means SE tax applies. If you only rent the car with zero services, Schedule E may apply — consult a CPA.
      </div>
      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>
        Top Turo Tax Deductions 2026
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🚗 Vehicle Depreciation</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Deduct car depreciation proportional to rental days — often $3,000-$8,000/year</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🛡️ Insurance Premiums</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Car insurance proportional to business use percentage</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🔧 Repairs & Maintenance</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>All maintenance costs for your Turo vehicles</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🧹 Cleaning & Detailing</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>100% deductible — required between rentals</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>💻 Turo Platform Fees</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Turo takes 15-35% — that fee is fully deductible</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>📱 Phone & Apps</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Business percentage of phone used for Turo management</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🅿️ Parking & Storage</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Garage or parking costs for your rental vehicles</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🏠 Home Office</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>If you manage your fleet from home — proportional deduction</div>
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
            <td style={{ padding: '12px 16px', fontWeight: 700 }}>$15,000</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$2,120</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$1,350</td>
            <td style={{ padding: '12px 16px', fontWeight: 700, color: '#e8b84b' }}>$3,470</td>
          </tr>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
            <td style={{ padding: '12px 16px', fontWeight: 700 }}>$25,000</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$3,534</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$2,850</td>
            <td style={{ padding: '12px 16px', fontWeight: 700, color: '#e8b84b' }}>$6,384</td>
          </tr>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
            <td style={{ padding: '12px 16px', fontWeight: 700 }}>$40,000</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$5,655</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$5,040</td>
            <td style={{ padding: '12px 16px', fontWeight: 700, color: '#e8b84b' }}>$10,695</td>
          </tr>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
            <td style={{ padding: '12px 16px', fontWeight: 700 }}>$60,000</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$8,483</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$8,520</td>
            <td style={{ padding: '12px 16px', fontWeight: 700, color: '#e8b84b' }}>$17,003</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>
        2026 Quarterly Payment Deadlines
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 32 }}>
        {[
          { q: 'Q1 — April 15, 2026', urgent: true },
          { q: 'Q2 — June 16, 2026', urgent: false },
          { q: 'Q3 — September 15, 2026', urgent: false },
          { q: 'Q4 — January 15, 2027', urgent: false },
        ].map(d => (
          <div key={d.q} style={{ background: d.urgent ? 'rgba(255,68,68,.1)' : 'rgba(255,255,255,.04)', border: d.urgent ? '1px solid rgba(255,68,68,.3)' : '1px solid rgba(255,255,255,.08)', borderRadius: 8, padding: '12px 16px', fontWeight: 600, color: d.urgent ? '#ff4444' : '#fff' }}>
            {d.urgent ? '⚠️ ' : ''}{d.q}
          </div>
        ))}
      </div>

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: 24, border: '1px solid rgba(165,180,252,.2)', textAlign: 'center' }}>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Free Turo Tax Calculator</div>
        <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: 16 }}>All 51 states · No signup · Instant results</p>
        <a href="/turo" style={{ background: '#B22234', color: '#fff', padding: '12px 28px', borderRadius: 6, textDecoration: 'none', fontWeight: 700 }}>
          Calculate My Taxes
        </a>
      </div>
    </main>
  )
}
