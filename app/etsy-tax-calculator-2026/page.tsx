import HomeClient from '../home-client';
import type { Metadata } from 'next';
import AuthorBox from '@/app/components/AuthorBox';

export const metadata: Metadata = {
  title: 'Etsy Tax Calculator 2026 — SE Tax + All 50 States + DC | GigWiseTax',
  description: 'Free Etsy tax calculator 2026. Estimate self-employment tax 15.3%, federal and state income tax for all 50 states + DC. Quarterly payment schedule included. No signup.',
  alternates: { canonical: 'https://www.gigwisetax.com/etsy-tax-calculator-2026' },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much tax does a Etsy worker pay in 2026?",
      "acceptedAnswer": { "@type": "Answer", "text": "Etsy workers pay 15.3% SE tax on 92.35% of net earnings plus federal income tax (10-22% for most earners) plus state income tax. A Etsy worker earning $40,000 typically pays $10,000-$13,000 in total taxes depending on their state." }
    },
    {
      "@type": "Question",
      "name": "What deductions can Etsy workers claim?",
      "acceptedAnswer": { "@type": "Answer", "text": "Etsy workers can deduct mileage ($0.725/mile in 2026), phone and data plan, equipment, and 50% of self-employment tax. These deductions directly reduce taxable income and SE tax." }
    },
    {
      "@type": "Question",
      "name": "Does Etsy issue a 1099 form?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Etsy issues a 1099-NEC for earnings over $600. You must report all income to the IRS even if you don't receive a 1099. Use IRS Schedule C to report profit and loss." }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#07111F)', borderBottom: '1px solid rgba(255,255,255,.07)', padding: '32px 20px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
            <div style={{ width: 4, minWidth: 4, height: 34, background: '#B22234', borderRadius: 2, marginTop: 4 }} />
            <h1 style={{ fontSize: 'clamp(22px,4vw,30px)', fontWeight: 900, color: '#fff', lineHeight: 1.25, margin: 0 }}>
               Etsy Tax Calculator 2026 — SE Tax + All 50 States + DC
            </h1>
          </div>
          <p style={{ paddingLeft: 16, fontSize: 15, color: 'rgba(255,255,255,.75)', lineHeight: 1.6, maxWidth: 700, marginBottom: 16 }}>
            Etsy sellers receive 1099-K for sales over $5,000 (2026 threshold). You owe SE tax 15.3% on net profit plus income tax. Estimate your 2026 Etsy seller tax bill and quarterly payments.
          </p>
          {/* ANSWER-FIRST */}
          <div style={{background:'rgba(232,184,75,0.07)',border:'1px solid rgba(232,184,75,0.2)',borderRadius:8,padding:'14px 18px',marginBottom:12,marginLeft:16,fontSize:14,color:'rgba(255,255,255,0.85)',lineHeight:1.8}}>
            Etsy sellers earning <strong style={{color:'#e8b84b'}}>$30,000</strong> net profit owe roughly <strong style={{color:'#e8b84b'}}>$6,448</strong> in total taxes — about <strong style={{color:'#e8b84b'}}>$1,612 per quarter</strong>. SE tax is 15.3% on 92.35% of net profit after deducting Etsy fees, materials, and supplies.
          </div>
          <div style={{fontSize:12,color:'rgba(255,255,255,0.45)',marginBottom:12,paddingLeft:16}}>
            Last updated: May 2026 · By Ethan Blake · Tax Compliance Specialist
          </div>
          <div style={{ paddingLeft: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['SE Tax 15.3%', 'All 50 States + DC', 'Free, No Signup', 'Quarterly Schedule'].map(b => (
              <span key={b} style={{ background: '#0d2340', border: '1px solid #2a6496', borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* KEY TAKEAWAYS */}
      <div style={{maxWidth:860,margin:'0 auto',padding:'24px 20px 0'}}>
        <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:8}}>
          <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
          <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
            <li>Etsy sellers pay <strong>15.3% SE tax</strong> on net profit — Etsy fees and materials reduce that base</li>
            <li>At <strong>$30,000</strong> net profit, total tax is ~$6,448 — set aside $1,612 each quarter</li>
            <li>Top deductions: listing fees (20¢), transaction fees (6.5%), materials, shipping supplies, and equipment</li>
            <li>Etsy sends a <strong>1099-K</strong> if sales exceed $5,000 in 2026 — all profit is taxable regardless</li>
            <li>Quarterly deadlines: <strong>Apr 15 · Jun 16 · Sep 15 · Jan 15</strong> — required if you expect to owe $1,000+</li>
          </ul>
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
            Best Deductions for Etsy Gig Workers
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 20, marginLeft: 13 }}>
            These deductions reduce your taxable income and SE tax. Track them throughout the year using a spreadsheet or app.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Etsy listing fees ($0.20/listing) and transaction fees (6.5%)</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Materials and supplies for products</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Shipping supplies — boxes, tape, labels</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Home studio or workshop space</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Equipment — tools, sewing machines, printers</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Photography equipment and props</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Etsy Ads and offsite ad fees</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>Packaging and branding materials</li>
            <li style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, paddingBottom: 4 }}>50% of SE tax deductible</li>
          </ul>
          <div style={{ marginTop: 24, padding: '16px 20px', background: 'rgba(184,146,74,0.08)', border: '1px solid rgba(184,146,74,0.25)', borderRadius: 8 }}>
            <div style={{ fontSize: 13, color: '#e8b84b', fontWeight: 700, marginBottom: 6 }}> Free Etsy Deductions Checklist</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              Get the full IRS Schedule C checklist for Etsy workers — every deductible expense listed and explained.
            </div>
            <a href="https://1099deductions.com/etsy" target="_blank" rel="noopener" style={{ display: 'inline-block', marginTop: 12, background: '#B8924A', color: '#07111F', fontSize: 13, fontWeight: 700, padding: '10px 20px', borderRadius: 6, textDecoration: 'none' }}>
              View Etsy Deductions Checklist →
            </a>
          </div>
        </div>
      </div>
      <AuthorBox />
    </>
  );
}
