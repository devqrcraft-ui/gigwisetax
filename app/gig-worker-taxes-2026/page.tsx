import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gig Worker Tax Center 2026 — DoorDash, Uber, OnlyFans, Airbnb & More | GigWiseTax',
  description: 'Complete gig worker tax hub 2026. Free SE tax calculators for DoorDash, Uber, Etsy, OnlyFans, Instacart, Airbnb, Amazon Flex. Quarterly deadlines, deductions, IRS guides.',
  alternates: { canonical: 'https://www.gigwisetax.com/gig-worker-taxes-2026' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Gig Worker Tax Center 2026',
  url: 'https://www.gigwisetax.com/gig-worker-taxes-2026',
  description: 'Free SE tax calculators for all gig platforms. DoorDash, Uber, Etsy, OnlyFans, Instacart, Airbnb, Amazon Flex. All 51 states, 2026 IRS brackets.',
  hasPart: [
    { '@type': 'WebApplication', name: 'DoorDash Tax Calculator', url: 'https://www.gigwisetax.com/doordash' },
    { '@type': 'WebApplication', name: 'Uber Tax Calculator', url: 'https://www.gigwisetax.com/uber' },
    { '@type': 'WebApplication', name: 'Etsy Tax Calculator', url: 'https://www.gigwisetax.com/etsy' },
    { '@type': 'WebApplication', name: 'OnlyFans Tax Calculator', url: 'https://www.gigwisetax.com/onlyfans' },
    { '@type': 'WebApplication', name: 'Instacart Tax Calculator', url: 'https://www.gigwisetax.com/instacart' },
    { '@type': 'WebApplication', name: 'Airbnb Tax Calculator', url: 'https://www.gigwisetax.com/airbnb' },
    { '@type': 'WebApplication', name: 'Amazon Flex Tax Calculator', url: 'https://www.gigwisetax.com/amazon-flex' },
    { '@type': 'WebApplication', name: 'Lyft Tax Calculator', url: 'https://www.gigwisetax.com/lyft' },
  ],
};

const CATEGORIES = [
  {
    title: '▸ Rideshare Drivers',
    color: '#3b82f6',
    desc: 'Uber, Lyft — SE tax 15.3% + mileage deductions',
    platforms: [
      { name: 'Uber Tax Calculator', href: '/uber', sub: '$50k → ~$35k after tax' },
      { name: 'Lyft Tax Calculator', href: '/lyft', sub: '$40k → ~$28k after tax' },
    ],
  },
  {
    title: '▸ Delivery Workers',
    color: '#ef4444',
    desc: 'DoorDash, Grubhub, Instacart — mileage + SE tax',
    platforms: [
      { name: 'DoorDash Tax Calculator', href: '/doordash', sub: '$40k → ~$29k after tax' },
      { name: 'Grubhub Tax Calculator', href: '/grubhub', sub: '$35k → ~$25k after tax' },
      { name: 'Instacart Tax Calculator', href: '/instacart', sub: '$35k → ~$25k after tax' },
      { name: 'Walmart Spark Tax Calculator', href: '/walmart-spark', sub: '$30k → ~$22k after tax' },
    ],
  },
  {
    title: '▸ Content Creators',
    color: '#f59e0b',
    desc: 'OnlyFans — 1099-NEC, platform fee deductible',
    platforms: [
      { name: 'OnlyFans Tax Calculator', href: '/onlyfans', sub: '$60k → ~$40k after tax' },
    ],
  },
  {
    title: '▸ Hosts & Rentals',
    color: '#10b981',
    desc: 'Airbnb, Turo — rental income + depreciation',
    platforms: [
      { name: 'Airbnb Tax Calculator', href: '/airbnb', sub: '$45k → ~$32k after tax' },
      { name: 'Turo Tax Calculator', href: '/turo', sub: '$30k → ~$22k after tax' },
    ],
  },
  {
    title: '▸ Sellers',
    color: '#8b5cf6',
    desc: 'Etsy, Amazon Flex — Schedule C, COGS deductions',
    platforms: [
      { name: 'Etsy Tax Calculator', href: '/etsy', sub: '$30k → ~$22k after tax' },
      { name: 'Amazon Flex Tax Calculator', href: '/amazon-flex', sub: '$35k → ~$25k after tax' },
    ],
  },
];

export default function GigWorkerTaxCenter() {
  return (
    <div style={{ background: '#0d1117', minHeight: '100vh', color: '#fff' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)', padding: '48px 20px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#e8b84b', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 12 }}>Gig Worker Tax Center 2026</div>
          <h1 style={{ fontSize: 36, fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>
            Free Gig Worker Tax Calculators 2026 —<br />DoorDash, Uber, OnlyFans, Airbnb & More
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.65)', lineHeight: 1.7, maxWidth: 700 }}>
            SE tax 15.3% + federal + state for all 51 jurisdictions. Pick your platform and get your exact tax estimate in seconds. No signup, no data stored.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
            <Link href="/" style={{ background: '#B22234', color: '#fff', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>→ Open Main Calculator</Link>
            <Link href="/tax-penalty-finder" style={{ background: 'rgba(255,255,255,.08)', color: '#fff', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', border: '1px solid rgba(255,255,255,.15)' }}> Tax Penalty Finder</Link>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 20px' }}>
        {CATEGORIES.map(cat => (
          <div key={cat.title} style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 4, height: 24, background: cat.color, borderRadius: 2 }} />
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: '#fff' }}>{cat.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)' }}>{cat.desc}</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 12 }}>
              {cat.platforms.map(p => (
                <Link key={p.href} href={p.href} style={{ textDecoration: 'none', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'border-color .2s' }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: '#e8b84b', fontWeight: 600 }}>{p.sub}</div>
                  </div>
                  <div style={{ fontSize: 20, color: cat.color }}>→</div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* QUARTERLY DEADLINES */}
        <div style={{ background: 'rgba(178,34,52,.08)', border: '1px solid rgba(178,34,52,.3)', borderRadius: 12, padding: '24px', marginBottom: 40 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 16 }}> 2026 Quarterly Tax Deadlines</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 12 }}>
            {[['Q1','April 15, 2026','URGENT'],['Q2','June 16, 2026',''],['Q3','Sept 15, 2026',''],['Q4','Jan 15, 2027','']].map(([q,d,u])=>(
              <div key={q} style={{ background: 'rgba(255,255,255,.04)', borderRadius: 8, padding: '12px 14px' }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: u ? '#ef4444' : '#e8b84b', letterSpacing: '1px' }}>{q}{u ? ' — '+u : ''}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginTop: 4 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 16 }}> Tax Tools</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 12 }}>
            {[
              { name: ' Tax Penalty Finder', href: '/tax-penalty-finder', desc: 'Find IRS underpayment penalties' },
              { name: ' Deductions Checklist', href: '/deductions', desc: 'IRS Schedule C write-offs' },
              { name: ' S-Corp vs Sole Prop', href: '/s-corp-calculator', desc: 'Which saves more at your income?' },
              { name: ' Safe Harbor Guide', href: '/safe-harbor-quarterly-taxes', desc: 'Avoid underpayment penalties' },
            ].map(t=>(
              <Link key={t.href} href={t.href} style={{ textDecoration: 'none', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: '16px 18px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)' }}>{t.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* 1099 DEDUCTIONS CTA */}
        <a href="https://1099deductions.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', background: 'linear-gradient(135deg,#0E2240,#07111F)', border: '1px solid rgba(184,146,74,.35)', borderRadius: 12, padding: '24px', marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#D4AA66', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 8 }}>1099 Deductions Tool</div>
          <div style={{ fontSize: 20, fontWeight: 900, color: '#fff', marginBottom: 8 }}>Find Every Tax Write-Off on 1099Deductions.com</div>
          <div style={{ fontSize: 13, color: '#7A96B8', marginBottom: 16 }}>Free IRS Schedule C checklists for DoorDash, Uber, Airbnb, Etsy, OnlyFans. Save $2,000–$8,000/year.</div>
          <div style={{ background: '#B8924A', color: '#07111F', fontWeight: 800, padding: '12px 24px', borderRadius: 8, display: 'inline-block', fontSize: 14 }}>Find My Deductions →</div>
        </a>
      </div>
    </div>
  );
}
