import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PLATFORMS, STATES } from '../../lib/data';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return PLATFORMS.map(p => ({ platform: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ platform: string }> }): Promise<Metadata> {
  const { platform } = await params;
  const p = PLATFORMS.find(x => x.slug === platform);
  if (!p) return {};
  return {
    title: `${p.name} Tax Calculator 2026 — By State`,
    description: `Free ${p.name} tax calculator. Calculate SE tax, quarterly payments, and take-home pay for ${p.name} workers. Pick your state for exact results.`,
    alternates: { canonical: `https://www.gigwisetax.com/${platform}` },
  };
}

export default async function PlatformPage({ params }: { params: Promise<{ platform: string }> }) {
  const { platform } = await params;
  const p = PLATFORMS.find(x => x.slug === platform);
  if (!p) notFound();

  return (
    <main style={{ padding: '60px 24px', maxWidth: 960, margin: '0 auto' }}>
      <div style={{ marginBottom: 12 }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 13 }}>Home</Link>
        <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 8px' }}>›</span>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>{p.name} Tax Calculator</span>
      </div>

      <div style={{ fontSize: 48, marginBottom: 16 }}>{p.emoji}</div>
      <h1 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 800, fontFamily: "'Space Grotesk',sans-serif", margin: '0 0 16px', background: 'linear-gradient(135deg,#fff,#a5b4fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        {p.name} Tax Calculator 2026
      </h1>
      <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', marginBottom: 48, maxWidth: 600 }}>
        Calculate your exact tax bill as a {p.name} worker. Includes self-employment tax, quarterly estimates, mileage deductions, and state taxes. Select your state:
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 10 }}>
        {Object.entries(STATES).map(([slug, st]) => (
          <Link key={slug} href={`/${platform}/${slug}`} style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '14px 16px', transition: 'all 0.15s', display: 'block' }}>
            <div style={{ fontWeight: 600, fontSize: 14, color: 'white', marginBottom: 4 }}>{st.noTax ? '⭐ ' : ''}{st.name}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{st.noTax ? 'No state tax!' : `${(st.rate * 100).toFixed(1)}% state tax`}</div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 60, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>How {p.name} taxes work</h2>
        <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 12 }}>
          As a {p.name} worker, you receive 1099 income. This means you&apos;re self-employed and must pay self-employment (SE) tax of <strong style={{ color: 'white' }}>15.3%</strong> on 92.35% of your net profit — covering both Social Security (12.4%) and Medicare (2.9%) that employers normally split with employees.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
          On top of SE tax, you pay federal income tax and state income tax. The good news: you can deduct half your SE tax, business expenses, and mileage (70¢/mile in 2026) before calculating income tax.
        </p>
      </div>
    </main>
  );
}
