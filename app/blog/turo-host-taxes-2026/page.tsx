import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Turo Host Taxes 2026 — Complete Tax Guide | GigWiseTax',
  description: 'How to file Turo host taxes in 2026. Depreciation, mileage, platform fees deduction, 1099-K. Free calculator — no signup.',
  keywords: 'turo taxes 2026, turo host tax guide, turo 1099-k, turo depreciation deduction',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/turo-host-taxes-2026' },
}
export default function BlogPost() {
  const card: React.CSSProperties = { background: 'rgba(255,255,255,.05)', borderRadius: 8, padding: '14px 16px', border: '1px solid rgba(255,255,255,.08)' }
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px', color: 'rgba(255,255,255,0.9)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do Turo hosts pay self-employment tax?","acceptedAnswer":{"@type":"Answer","text":"It depends on activity level. Casual Turo hosts (fewer than 3 cars, passive rental) report income on Schedule E — no SE tax. Active hosts who manage fleets report on Schedule C and owe 15.3% SE tax."}},{"@type":"Question","name":"Does Turo send a 1099?","acceptedAnswer":{"@type":"Answer","text":"Yes. Turo sends a 1099-K to hosts who process over $5,000 in gross payments in 2026. Even without a 1099-K you must report all rental income."}},{"@type":"Question","name":"What is the best tax deduction for Turo hosts?","acceptedAnswer":{"@type":"Answer","text":"Depreciation is the largest deduction. Under MACRS, a car used for Turo depreciates over 5 years. Bonus depreciation may allow up to 40% in year one for 2026."}}]}) }} />
      <nav style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>{' > '}
        <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a>{' > '}Turo Host Taxes 2026
      </nav>
      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: 32, marginBottom: 32, border: '1px solid rgba(165,180,252,.2)' }}>
        <div style={{ fontSize: 13, color: '#a5b4fc', marginBottom: 8, textTransform: 'uppercase' as const, letterSpacing: 1 }}>Tax Guide - Updated 2026</div>
        <h1 style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginBottom: 16 }}>Turo Host Taxes 2026 — Complete Guide</h1>
        <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, fontSize: 17 }}>Turo hosts report rental income on Schedule C (active) or Schedule E (passive). Deductions dramatically reduce your tax bill. Here is everything for 2026.</p>
      </div>
      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>Top Turo Host Tax Deductions 2026</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
        {([['Depreciation','Deduct car value over 5 years — largest single deduction'],['Turo Platform Fee','25-40% Turo fee is fully deductible'],['Insurance','Turo protection plan and personal auto — business portion'],['Cleaning and Detailing','All cleaning between rentals — 100% deductible'],['Mileage ($0.725/mile)','Miles to/from airport, maintenance trips'],['Repairs and Maintenance','Oil changes, tires, any repair for the rental vehicle']] as [string,string][]).map(([t,d]) => (
          <div key={t} style={card}><div style={{ fontWeight: 700, marginBottom: 4 }}>{t}</div><div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>{d}</div></div>
        ))}
      </div>
      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, borderBottom: '2px solid rgba(165,180,252,.2)', paddingBottom: 8 }}>Schedule C vs Schedule E</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead><tr style={{ background: 'rgba(165,180,252,.1)' }}>
          <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>Host Type</th>
          <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>Schedule</th>
          <th style={{ padding: '12px 16px', textAlign: 'left', color: '#a5b4fc' }}>SE Tax?</th>
        </tr></thead>
        <tbody>
          {([['Casual host, 1-2 cars, no services','Schedule E','No'],['Active host, fleet, provides services','Schedule C','Yes (15.3%)']] as string[][]).map(([t,s,se]) => (
            <tr key={t} style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
              <td style={{ padding: '12px 16px', color: 'rgba(255,255,255,.7)' }}>{t}</td>
              <td style={{ padding: '12px 16px', fontWeight: 700 }}>{s}</td>
              <td style={{ padding: '12px 16px', color: se === 'No' ? '#4ade80' : '#e8b84b', fontWeight: 700 }}>{se}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ background: 'rgba(165,180,252,.08)', borderRadius: 8, padding: 20, marginBottom: 32, border: '1px solid rgba(165,180,252,.2)' }}>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>Calculate your exact Turo tax bill</div>
        <a href="/calculators" style={{ background: '#6366f1', color: '#ffffff', fontWeight: 800, padding: '10px 22px', borderRadius: 6, textDecoration: 'none', display: 'inline-block' }}>Free Tax Calculator</a>
      </div>
    </main>
  )
}
