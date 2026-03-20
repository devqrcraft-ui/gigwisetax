import HomeClient from '../home-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instacart Tax Calculator 2026 — SE Tax + All 51 States | GigWiseTax',
  description: 'Free Instacart tax calculator 2026. Estimate self-employment tax 15.3%, federal and state income tax for all 51 states. Quarterly payment schedule included. No signup.',
  alternates: { canonical: 'https://www.gigwisetax.com/instacart-tax-calculator-2026' },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much tax does a Instacart worker pay in 2026?",
      "acceptedAnswer": { "@type": "Answer", "text": "Instacart workers pay 15.3% SE tax on 92.35% of net earnings plus federal income tax (10-22% for most earners) plus state income tax. A Instacart worker earning $40,000 typically pays $10,000-$13,000 in total taxes depending on their state." }
    },
    {
      "@type": "Question",
      "name": "What deductions can Instacart workers claim?",
      "acceptedAnswer": { "@type": "Answer", "text": "Instacart workers can deduct mileage ($0.70/mile in 2026), phone and data plan, equipment, and 50% of self-employment tax. These deductions directly reduce taxable income and SE tax." }
    },
    {
      "@type": "Question",
      "name": "Does Instacart issue a 1099 form?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Instacart issues a 1099-NEC for earnings over $600. You must report all income to the IRS even if you don't receive a 1099. Use IRS Schedule C to report profit and loss." }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)', padding: '32px 20px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
            <div style={{ width: 4, minWidth: 4, height: 34, background: '#B22234', borderRadius: 2, marginTop: 4 }} />
            <h1 style={{ fontSize: 'clamp(22px,4vw,30px)', fontWeight: 900, color: '#fff', lineHeight: 1.25, margin: 0 }}>
              🛒 Instacart Tax Calculator 2026 — SE Tax + All 51 States
            </h1>
          </div>
          <p style={{ paddingLeft: 16, fontSize: 15, color: 'rgba(255,255,255,.75)', lineHeight: 1.6, maxWidth: 700, marginBottom: 16 }}>
            Instacart shoppers are independent contractors paid via 1099-NEC. You owe SE tax 15.3% on net earnings plus federal and state tax. Estimate your 2026 Instacart tax and quarterly payments.
          </p>
          <div style={{ paddingLeft: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['SE Tax 15.3%', 'All 51 States', 'Free, No Signup', 'Quarterly Schedule'].map(b => (
              <span key={b} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* CALCULATOR */}
      <HomeClient />

      {/* DEDUCTIONS BLOCK */}
      <div style={{ background: '#0d1117', padding: '48px 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{ width: 3, height: 20, background: '#B22234', borderRadius: 2 }} />
            <span style={{ fontSize: 11, fontWeight: 800, color: '#e8b84b', letterSpacing: '1.5px', textTransform: 'uppercase' as const }}>Tax Write-Offs</span>
          </div>
          <h2 style={{ fontSize: 'clamp(18px,3vw,24px)', fontWeight: 900, color: '#fff', marginBottom: 8, marginLeft: 13 }}>
            Best Deductions for Instacart Gig Workers
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 20, marginLeft: 13 }}>
            These deductions reduce your taxable income and SE tax. Track them throughout the year using a spreadsheet or app.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Mileage — $0.70/mile for driving to stores and delivering</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Insulated bags and coolers</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Phone and data plan (business use)</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Parking fees at grocery stores</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Cart fees and supplies</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Health insurance premiums</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>50% of SE tax deductible</li>
          </ul>
          <div style={{ marginTop: 24, padding: '16px 20px', background: 'rgba(184,146,74,0.08)', border: '1px solid rgba(184,146,74,0.25)', borderRadius: 8 }}>
            <div style={{ fontSize: 13, color: '#e8b84b', fontWeight: 700, marginBottom: 6 }}>📋 Free Instacart Deductions Checklist</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              Get the full IRS Schedule C checklist for Instacart workers — every deductible expense listed and explained.
            </div>
            <a href="https://1099deductions.com/instacart" target="_blank" rel="noopener" style={{ display: 'inline-block', marginTop: 12, background: '#B8924A', color: '#07111F', fontSize: 13, fontWeight: 700, padding: '10px 20px', borderRadius: 6, textDecoration: 'none' }}>
              View Instacart Deductions Checklist →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
