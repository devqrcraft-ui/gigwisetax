import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PLATFORMS, STATES } from '../../../lib/data';
import GigCalculator from '../GigCalculator';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  const params = [];
  for (const p of PLATFORMS) {
    for (const s of Object.keys(STATES)) {
      params.push({ platform: p.slug, state: s });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ platform: string; state: string }> }): Promise<Metadata> {
  const { platform, state } = await params;
  const p = PLATFORMS.find(x => x.slug === platform);
  const st = STATES[state];
  if (!p || !st) return {};
  const noTaxNote = st.noTax ? ` ${st.name} has no state income tax — great news for gig workers!` : '';
  return {
    title: `${p.name} Tax Calculator ${st.name} 2026 — SE Tax & Take-Home Pay`,
    description: `Free ${p.name} tax calculator for ${st.name}. Calculate self-employment tax, quarterly payments, and exact take-home pay for ${st.name} gig workers 2026.${noTaxNote}`,
    alternates: { canonical: `https://www.gigwisetax.com/${platform}/${state}` },
    openGraph: { title: `${p.name} Tax Calculator ${st.name} 2026`, description: `Calculate ${p.name} taxes in ${st.name}. Free, no signup, 100% private.` },
  };
}

export default async function PlatformStatePage({ params }: { params: Promise<{ platform: string; state: string }> }) {
  const { platform, state } = await params;
  const p = PLATFORMS.find(x => x.slug === platform);
  const st = STATES[state];
  if (!p || !st) notFound();

  const showMileage = ['doordash', 'uber', 'instacart', 'amazon-flex', 'lyft'].includes(platform);
  const otherPlatforms = PLATFORMS.filter(x => x.slug !== platform).slice(0, 4);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much tax do ${p.name} workers pay in ${st.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: st.noTax
          ? `${p.name} workers in ${st.name} pay self-employment tax (15.3% on 92.35% of net income) plus federal income tax. ${st.name} has no state income tax, which is a significant advantage.`
          : `${p.name} workers in ${st.name} pay self-employment tax (15.3%), federal income tax, and ${st.name} state income tax (up to ${(st.rate * 100).toFixed(1)}%). Use our calculator above for your exact amount.`
        }
      },
      {
        '@type': 'Question',
        name: `Do ${p.name} workers pay quarterly taxes in ${st.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Yes. If you expect to owe $1,000 or more in taxes, the IRS requires estimated quarterly payments. For 2026, due dates are April 15, June 16, September 15, and January 15, 2027.` }
      },
      {
        '@type': 'Question',
        name: `What deductions can ${p.name} workers claim in ${st.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `${p.name} workers can deduct${showMileage ? ' mileage (70¢/mile for 2026),' : ''} business expenses, half of self-employment tax, and take the standard deduction ($14,600 single, $29,200 married filing jointly for 2026).` }
      },
    ]
  };

  return (
    <main style={{ padding: '40px 24px 80px', maxWidth: 900, margin: '0 auto' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb */}
      <div style={{ marginBottom: 20, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px', color: 'rgba(255,255,255,0.2)' }}>›</span>
        <Link href={`/${platform}`} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{p.name} Tax Calculator</Link>
        <span style={{ margin: '0 8px', color: 'rgba(255,255,255,0.2)' }}>›</span>
        <span style={{ color: 'rgba(255,255,255,0.6)' }}>{st.name}</span>
      </div>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <span style={{ fontSize: 40 }}>{p.emoji}</span>
          {st.noTax && <span style={{ background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: 100, padding: '4px 12px', fontSize: 12, color: '#4ade80', fontWeight: 600 }}>🎉 No State Tax</span>}
        </div>
        <h1 style={{ fontSize: 'clamp(26px,5vw,44px)', fontWeight: 800, fontFamily: "'Space Grotesk',sans-serif", margin: '0 0 12px', background: 'linear-gradient(135deg,#fff,#a5b4fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {p.name} Tax Calculator<br />{st.name} 2026
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 580, lineHeight: 1.6, margin: 0 }}>
          Calculate your exact {p.name} tax bill in {st.name} — self-employment tax, quarterly payments, and take-home pay. {st.noTax ? `${st.name} has no state income tax!` : `Includes ${st.name} state tax rate of ${(st.rate * 100).toFixed(1)}%.`}
        </p>
      </div>

      {/* Calculator */}
      <GigCalculator
        platformName={p.name}
        platformEmoji={p.emoji}
        stateName={st.name}
        stateRate={st.rate}
        noTax={!!st.noTax}
        showMileage={showMileage}
      />

      {/* FAQ */}
      <section style={{ marginTop: 60 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, fontFamily: "'Space Grotesk',sans-serif" }}>
          Frequently Asked Questions
        </h2>
        {[
          {
            q: `How much tax do ${p.name} workers pay in ${st.name}?`,
            a: st.noTax
              ? `${p.name} workers in ${st.name} pay self-employment tax (15.3% on 92.35% of net income) plus federal income tax. ${st.name} has no state income tax — a major advantage for gig workers.`
              : `${p.name} workers in ${st.name} pay: (1) Self-employment tax: 15.3% on 92.35% of net income. (2) Federal income tax based on your bracket. (3) ${st.name} state income tax up to ${(st.rate * 100).toFixed(1)}%. Use the calculator above for your exact number.`
          },
          {
            q: `Do I need to pay quarterly taxes as a ${p.name} worker in ${st.name}?`,
            a: `Yes. If you expect to owe $1,000 or more, the IRS requires quarterly estimated payments. For 2026: April 15 (Q1), June 16 (Q2), September 15 (Q3), January 15, 2027 (Q4). Missing payments results in IRS penalties.`
          },
          {
            q: `What deductions can ${p.name} workers claim in ${st.name}?`,
            a: `Key deductions include: ${showMileage ? 'mileage (70¢/mile IRS rate for 2026), ' : ''}business expenses (phone, equipment, supplies), 50% of self-employment tax, and the standard deduction ($14,600 single / $29,200 married filing jointly in 2026).`
          },
        ].map((item, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 20, marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: 'white', marginBottom: 8 }}>{item.q}</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
          </div>
        ))}
      </section>

      {/* Other platforms */}
      <section style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Other Gig Worker Calculators in {st.name}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 10 }}>
          {otherPlatforms.map(op => (
            <Link key={op.slug} href={`/${op.slug}/${state}`} style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '12px 14px', display: 'block' }}>
              <div style={{ fontSize: 20, marginBottom: 6 }}>{op.emoji}</div>
              <div style={{ fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{op.name}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{st.name} Tax →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
