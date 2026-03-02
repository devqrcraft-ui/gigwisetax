import Link from 'next/link';
import { PLATFORMS, STATES } from '../lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Gig Worker Tax Calculator USA 2026 — DoorDash, Uber, Etsy & More',
  description: 'Calculate your exact tax bill as a gig worker. SE tax, quarterly payments, state taxes. DoorDash, Uber, Etsy, OnlyFans, Instacart. Free, no signup, 100% private.',
  alternates: { canonical: 'https://www.gigwisetax.com' },
};

export default function HomePage() {
  const noTaxStates = Object.entries(STATES).filter(([,v]) => v.noTax).map(([,v]) => v.name);
  return (
    <main>
      {/* HERO */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 24, fontSize: 13, color: '#a5b4fc' }}>
          🔒 No signup • No data stored • 100% browser-based
        </div>
        <h1 style={{ fontSize: 'clamp(36px,6vw,68px)', fontWeight: 800, lineHeight: 1.1, margin: '0 auto 20px', maxWidth: 800, fontFamily: "'Space Grotesk',sans-serif", background: 'linear-gradient(135deg,#fff 0%,#a5b4fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Free Gig Worker<br />Tax Calculator 2026
        </h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.6 }}>
          Know exactly what you owe — SE tax, quarterly payments, and take-home pay. Built for DoorDash drivers, Etsy sellers, Uber drivers, and every 1099 worker.
        </p>

        {/* PLATFORM GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {PLATFORMS.map(p => (
            <Link key={p.slug} href={`/${p.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '24px 20px', cursor: 'pointer', textAlign: 'left' }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{p.emoji}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: 'white', marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Tax Calculator →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY SECTION */}
      <section style={{ padding: '60px 24px', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: 32, fontWeight: 700, marginBottom: 40, fontFamily: "'Space Grotesk',sans-serif" }}>
          Why gig workers need a special calculator
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
          {[
            { icon: '📊', title: 'Self-Employment Tax', desc: 'As a gig worker you pay both sides of Social Security + Medicare — 15.3% on 92.35% of net income. Most calculators miss this.' },
            { icon: '📅', title: 'Quarterly Payments', desc: 'The IRS requires estimated payments 4x/year. Miss one and face penalties. Know exactly how much to set aside.' },
            { icon: '🗺️', title: 'State Tax Varies', desc: 'No income tax in TX, FL, WA? High rates in CA, NY? We calculate your exact state liability.' },
            { icon: '🚗', title: 'Mileage Deduction', desc: 'Drive for DoorDash or Uber? Deduct 70¢/mile for 2026. This can slash your tax bill significantly.' },
          ].map(item => (
            <div key={item.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: 'white' }}>{item.title}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NO TAX STATES */}
      <section style={{ padding: '40px 24px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg,rgba(74,222,128,0.08),rgba(34,197,94,0.05))', border: '1px solid rgba(74,222,128,0.2)', borderRadius: 16, padding: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#4ade80', marginBottom: 16 }}>🎉 No State Income Tax States</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 16, fontSize: 14 }}>Gig workers in these states keep significantly more of their earnings:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {noTaxStates.map(s => (
              <span key={s} style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: 8, padding: '4px 12px', fontSize: 13, color: '#4ade80' }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ALL STATES for Platform */}
      <section style={{ padding: '40px 24px 80px', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, fontFamily: "'Space Grotesk',sans-serif" }}>Calculate by State</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 8 }}>
          {Object.entries(STATES).map(([slug, st]) => (
            <Link key={slug} href={`/doordash/${slug}`} style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '10px 14px', fontSize: 13, color: 'rgba(255,255,255,0.6)', display: 'block', transition: 'all 0.15s' }}>
              {st.noTax ? '🌟 ' : ''}{st.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
