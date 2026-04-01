import HomeClient from '../home-client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DoorDash Tax Calculator 2026 — SE Tax + All 51 States | GigWiseTax',
  description: 'Free DoorDash tax calculator 2026. Estimate self-employment tax 15.3%, federal and state income tax for all 51 states. Quarterly payment schedule included. No signup.',
  alternates: { canonical: 'https://www.gigwisetax.com/doordash-tax-calculator-2026' },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much tax does a DoorDash worker pay in 2026?",
      "acceptedAnswer": { "@type": "Answer", "text": "DoorDash workers pay 15.3% SE tax on 92.35% of net earnings plus federal income tax (10-22% for most earners) plus state income tax. A DoorDash worker earning $40,000 typically pays $10,000-$13,000 in total taxes depending on their state." }
    },
    {
      "@type": "Question",
      "name": "What deductions can DoorDash workers claim?",
      "acceptedAnswer": { "@type": "Answer", "text": "DoorDash workers can deduct mileage ($0.725/mile in 2026), phone and data plan, equipment, and 50% of self-employment tax. These deductions directly reduce taxable income and SE tax." }
    },
    {
      "@type": "Question",
      "name": "Does DoorDash issue a 1099 form?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. DoorDash issues a 1099-NEC for earnings over $600. You must report all income to the IRS even if you don't receive a 1099. Use IRS Schedule C to report profit and loss." }
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
               DoorDash Tax Calculator 2026 — SE Tax + All 51 States
            </h1>
          </div>
          <p style={{ paddingLeft: 16, fontSize: 15, color: 'rgba(255,255,255,.75)', lineHeight: 1.6, maxWidth: 700, marginBottom: 16 }}>
            DoorDash drivers are independent contractors — you pay SE tax 15.3% on net earnings plus federal and state income tax. This calculator estimates your total 2026 tax bill and quarterly payments for all 51 states.
          </p>
          <div style={{ paddingLeft: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['SE Tax 15.3%', 'All 51 States', 'Free, No Signup', 'Quarterly Schedule'].map(b => (
              <span key={b} style={{ background: '#0d2340', border: '1px solid #2a6496', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{b}</span>
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
            Best Deductions for DoorDash Gig Workers
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 20, marginLeft: 13 }}>
            These deductions reduce your taxable income and SE tax. Track them throughout the year using a spreadsheet or app.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Mileage deduction — $0.725/mile (IRS 2026 rate) for every delivery mile</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Insulated delivery bags and equipment</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Phone and data plan (business use percentage)</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Hot bags, backpacks, and other gear</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Parking fees and tolls during deliveries</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Health insurance premiums (self-employed deduction)</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Home office (if you manage your schedule from home)</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>50% of self-employment tax deducted from gross income</li>
          </ul>
          <div style={{ marginTop: 24, padding: '16px 20px', background: 'rgba(184,146,74,0.08)', border: '1px solid rgba(184,146,74,0.25)', borderRadius: 8 }}>
            <div style={{ fontSize: 13, color: '#e8b84b', fontWeight: 700, marginBottom: 6 }}> Free DoorDash Deductions Checklist</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              Get the full IRS Schedule C checklist for DoorDash workers — every deductible expense listed and explained.
            </div>
            <a href="https://1099deductions.com/doordash" target="_blank" rel="noopener" style={{ display: 'inline-block', marginTop: 12, background: '#B8924A', color: '#07111F', fontSize: 13, fontWeight: 700, padding: '10px 20px', borderRadius: 6, textDecoration: 'none' }}>
              View DoorDash Deductions Checklist →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
