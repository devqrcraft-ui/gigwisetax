import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lyft Driver Taxes 2026 — Complete Tax Guide | GigWiseTax',
  description: 'How to file Lyft driver taxes in 2026. Mileage deduction, 1099-NEC, quarterly payments. Free calculator.',
  keywords: 'lyft driver taxes 2026, lyft tax calculator, lyft 1099, lyft driver deductions',
}

export default function BlogPost() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <nav style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
        {' › '}
        <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a>
        {' › '}Lyft Taxes 2026
      </nav>

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: 32, marginBottom: 32, border: '1px solid rgba(165,180,252,.2)' }}>
        <div style={{ fontSize: 13, color: '#a5b4fc', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Tax Guide · Updated 2026</div>
        <h1 style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginBottom: 16 }}>Lyft Driver Taxes 2026 — Complete Tax Guide</h1>
        <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, fontSize: 17 }}>
          Lyft drivers are independent contractors who receive a 1099-NEC. You owe self-employment tax (15.3%) on net earnings. The mileage deduction is your biggest tool to reduce your tax bill.
        </p>
      </div>

      

      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>
        Top Tax Deductions for Lyft
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🚗 Mileage</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>$0.725/mile — includes deadhead miles between rides</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>📱 Phone & Data</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>50–100% of phone bill for navigation and app</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🚘 Vehicle Depreciation</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>If using actual expenses instead of mileage</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🛡️ Auto Insurance</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Proportional business-use percentage</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>🧴 Car Supplies</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Phone mount, charger, air freshener for passengers</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>💻 Lyft App & Accessories</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>Any equipment for your Lyft business</div>
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
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$2,826</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$1,440</td>
            <td style={{ padding: '12px 16px', fontWeight: 700, color: '#e8b84b' }}>$4,266</td>
          </tr>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
            <td style={{ padding: '12px 16px', fontWeight: 700 }}>$35,000</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$4,946</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$3,360</td>
            <td style={{ padding: '12px 16px', fontWeight: 700, color: '#e8b84b' }}>$8,306</td>
          </tr>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
            <td style={{ padding: '12px 16px', fontWeight: 700 }}>$55,000</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$7,766</td>
            <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>$7,020</td>
            <td style={{ padding: '12px 16px', fontWeight: 700, color: '#e8b84b' }}>$14,786</td>
          </tr>
        </tbody>
      </table>

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: 24, border: '1px solid rgba(165,180,252,.2)', textAlign: 'center' }}>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Free Lyft Tax Calculator</div>
        <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: 16 }}>All 51 states. No signup. Instant results.</p>
        <a href="/lyft" style={{ background: '#B22234', color: '#fff', padding: '12px 28px', borderRadius: 6, textDecoration: 'none', fontWeight: 700 }}>
          Calculate My Taxes
        </a>
      </div>
    </main>
  )
}
