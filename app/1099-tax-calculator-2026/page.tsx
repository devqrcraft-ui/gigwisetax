import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '1099 Tax Calculator 2026 — Self-Employment & SE Tax for All 51 States',
  description: 'Free 1099 tax calculator for U.S. gig workers and freelancers. Estimate self-employment tax, federal and state income tax for all 51 states in 2026. No signup, no data stored.',
  alternates: { canonical: 'https://www.gigwisetax.com/1099-tax-calculator-2026' },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What taxes do 1099 workers pay in 2026?","acceptedAnswer":{"@type":"Answer","text":"1099 workers pay self-employment tax (15.3% on net income) plus federal income tax (10%-37% based on brackets). Most states also tax 1099 income. After the mileage deduction, QBI deduction, and 50% SE tax deduction, effective rates for gig workers are typically 18-28%."}},{"@type":"Question","name":"What is the difference between a 1099-NEC and 1099-K?","acceptedAnswer":{"@type":"Answer","text":"A 1099-NEC reports nonemployee compensation (direct payments from platforms like DoorDash, Uber, Lyft). A 1099-K reports payment card and third-party network transactions. The 2026 1099-K threshold is $5,000. You owe tax on all 1099 income regardless of which form you receive."}},{"@type":"Question","name":"How much should I set aside for 1099 taxes?","acceptedAnswer":{"@type":"Answer","text":"A common guideline is 25-30% of net income. This covers self-employment tax (15.3%) and federal income tax (typically 10-22% for most gig workers after deductions). Use our calculator for a precise figure based on your platform, income, and state."}},{"@type":"Question","name":"Do 1099 workers pay quarterly taxes?","acceptedAnswer":{"@type":"Answer","text":"Yes, if you expect to owe $1,000 or more in federal taxes for the year. Quarterly estimated payments are due April 15, June 16, September 15, and January 15. Underpayment results in a penalty from the IRS."}},{"@type":"Question","name":"What deductions can 1099 gig workers claim?","acceptedAnswer":{"@type":"Answer","text":"Standard mileage ($0.70/mile in 2026), phone plan (business portion), home office, equipment, platform fees, and business supplies. The QBI deduction (up to 20% of net income) is also available to most self-employed workers."}}]};

const CSS = `
  body{background:#0f1117;}
  .k99-wrap{max-width:900px;margin:0 auto;padding:60px 24px 80px;color:#d1d5db;font-family:'Inter',sans-serif;}
  .k99-badge{display:inline-block;background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.3);color:#6ee7b7;font-size:12px;font-weight:600;letter-spacing:.08em;padding:4px 14px;border-radius:20px;margin-bottom:18px;}
  .k99-h1{font-size:clamp(26px,5vw,40px);font-weight:700;color:#fff;line-height:1.2;margin-bottom:14px;}
  .k99-h1 em{color:#34d399;font-style:normal;}
  .k99-lead{font-size:16px;color:#9ca3af;line-height:1.7;margin-bottom:40px;max-width:680px;}
  .diff-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:40px;}
  .diff-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:20px;}
  .diff-card.w2{border-color:rgba(99,102,241,.3);}
  .diff-card.k99c{border-color:rgba(16,185,129,.3);}
  .diff-title{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:14px;}
  .diff-card.w2 .diff-title{color:#a5b4fc;}
  .diff-card.k99c .diff-title{color:#6ee7b7;}
  .diff-row{display:flex;justify-content:space-between;font-size:13px;color:#6b7280;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04);}
  .diff-row:last-child{border-bottom:none;}
  .diff-row span:last-child{color:#d1d5db;font-weight:500;}
  .deductions-box{background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.2);border-radius:14px;padding:24px 28px;margin-bottom:40px;}
  .deductions-box h2{font-size:18px;font-weight:700;color:#fff;margin-bottom:16px;}
  .ded-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
  .ded-item{display:flex;align-items:flex-start;gap:10px;font-size:14px;color:#9ca3af;}
  .ded-check{color:#34d399;font-weight:700;flex-shrink:0;}
  .platforms-section{margin-bottom:40px;}
  .platforms-section h2{font-size:20px;font-weight:700;color:#fff;margin-bottom:16px;}
  .plat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;}
  .plat-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:14px;text-decoration:none;text-align:center;transition:border-color .2s;}
  .plat-card:hover{border-color:rgba(16,185,129,.4);}
  .plat-emoji{font-size:22px;margin-bottom:6px;}
  .plat-name{font-size:13px;font-weight:600;color:#fff;}
  .plat-type{font-size:11px;color:#6b7280;margin-top:2px;}
  .faq-section{margin-top:48px;}
  .faq-section h2{font-size:20px;font-weight:700;color:#fff;margin-bottom:20px;}
  .faq-q{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:16px 20px;margin-bottom:10px;}
  .faq-qt{font-size:14px;font-weight:600;color:#fff;margin-bottom:6px;}
  .faq-qa{font-size:13px;color:#9ca3af;line-height:1.7;}
  .cta-box{margin-top:48px;background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.25);border-radius:16px;padding:32px;text-align:center;}
  .cta-box h2{font-size:22px;font-weight:700;color:#fff;margin-bottom:10px;}
  .cta-box p{font-size:15px;color:#9ca3af;margin-bottom:20px;}
  .cta-btn{display:inline-block;background:#10b981;color:#fff;font-weight:700;font-size:15px;padding:12px 32px;border-radius:10px;text-decoration:none;}
  .cta-btn:hover{background:#059669;}
  @media(max-width:640px){.diff-grid{grid-template-columns:1fr;}.ded-grid{grid-template-columns:1fr;}.plat-grid{grid-template-columns:repeat(2,1fr);}}
`;

export default function Calculator1099HubPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: CSS}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />

      <div className="k99-wrap">
        <div className="k99-badge">1099 · Gig Workers · Contractors · 2026</div>
        <h1 className="k99-h1">1099 Tax Calculator <em>2026</em></h1>
        <p className="k99-lead">
          Free tax estimator built for gig workers, freelancers, and independent contractors.
          Calculate self-employment tax, federal income tax, deductions, and quarterly payments.
          All 50 states covered. No signup, no paywall.
        </p>

        <div className="diff-grid">
          <div className="diff-card w2">
            <div className="diff-title">W-2 Employee</div>
            <div className="diff-row"><span>FICA burden</span><span>7.65% (employer pays 7.65%)</span></div>
            <div className="diff-row"><span>Tax withheld</span><span>Automatic each paycheck</span></div>
            <div className="diff-row"><span>Quarterly filing</span><span>Not required</span></div>
            <div className="diff-row"><span>Mileage deduction</span><span>Not available (post-2017)</span></div>
            <div className="diff-row"><span>QBI deduction</span><span>Not available</span></div>
          </div>
          <div className="diff-card k99c">
            <div className="diff-title">1099 Contractor</div>
            <div className="diff-row"><span>SE tax burden</span><span>15.3% (you pay both sides)</span></div>
            <div className="diff-row"><span>Tax withheld</span><span>Nothing — you pay quarterly</span></div>
            <div className="diff-row"><span>Quarterly filing</span><span>Required if owe $1,000+</span></div>
            <div className="diff-row"><span>Mileage deduction</span><span>$0.70/mile (2026)</span></div>
            <div className="diff-row"><span>QBI deduction</span><span>Up to 20% of net income</span></div>
          </div>
        </div>

        <div className="deductions-box">
          <h2>Top Deductions for 1099 Workers in 2026</h2>
          <div className="ded-grid">
            <div className="ded-item"><span className="ded-check">✓</span><span>Mileage — $0.70/mile (IRS 2026 rate)</span></div>
            <div className="ded-item"><span className="ded-check">✓</span><span>QBI deduction — up to 20% of net income</span></div>
            <div className="ded-item"><span className="ded-check">✓</span><span>50% of SE tax — automatic above-the-line</span></div>
            <div className="ded-item"><span className="ded-check">✓</span><span>Phone plan — business-use percentage</span></div>
            <div className="ded-item"><span className="ded-check">✓</span><span>Home office — dedicated space only</span></div>
            <div className="ded-item"><span className="ded-check">✓</span><span>Health insurance premiums (self-employed)</span></div>
            <div className="ded-item"><span className="ded-check">✓</span><span>Platform fees (Uber service fee, Etsy fees, etc.)</span></div>
            <div className="ded-item"><span className="ded-check">✓</span><span>Equipment and supplies for your gig</span></div>
          </div>
        </div>

        <div style={{background:'rgba(255,255,255,0.04)',borderRadius:10,padding:'16px 20px',marginBottom:24,fontSize:14,color:'#90B4D0',lineHeight:1.7}}>
          This 1099 tax calculator works for <strong style={{color:'#fff'}}>DoorDash, Uber, Lyft, Etsy, OnlyFans, Airbnb, Amazon Flex, Instacart, Grubhub</strong> and all other self-employed income. Enter your net earnings to see your self-employment tax, federal income tax, and state tax instantly.
        </div>
        <div className="platforms-section">
          <h2>Calculate by Platform</h2>
          <div className="plat-grid">
            <Link href="/doordash" className="plat-card"><div className="plat-name">DoorDash</div><div className="plat-type">Food delivery</div></Link>
            <Link href="/uber" className="plat-card"><div className="plat-name">Uber</div><div className="plat-type">Rideshare</div></Link>
            <Link href="/lyft" className="plat-card"><div className="plat-name">Lyft</div><div className="plat-type">Rideshare</div></Link>
            <Link href="/instacart" className="plat-card"><div className="plat-name">Instacart</div><div className="plat-type">Grocery</div></Link>
            <Link href="/amazon-flex" className="plat-card"><div className="plat-name">Amazon Flex</div><div className="plat-type">Delivery</div></Link>
            <Link href="/grubhub" className="plat-card"><div className="plat-name">Grubhub</div><div className="plat-type">Food delivery</div></Link>
            <Link href="/walmart-spark" className="plat-card"><div className="plat-name">Walmart Spark</div><div className="plat-type">Delivery</div></Link>
            <Link href="/etsy" className="plat-card"><div className="plat-name">Etsy</div><div className="plat-type">E-commerce</div></Link>
            <Link href="/onlyfans" className="plat-card"><div className="plat-name">OnlyFans</div><div className="plat-type">Content</div></Link>
            <Link href="/airbnb" className="plat-card"><div className="plat-name">Airbnb</div><div className="plat-type">Rental</div></Link>
            <Link href="/turo" className="plat-card"><div className="plat-name">Turo</div><div className="plat-type">Car rental</div></Link>
            <Link href="/self-employment-tax-calculator-2026" className="plat-card"><div className="plat-name">SE Tax Guide</div><div className="plat-type">15.3% explained</div></Link>
          </div>
        </div>

        <div className="faq-section">
          <h2>1099 Tax FAQs</h2>
          <div className="faq-q"><div className="faq-qt">What taxes do 1099 workers pay in 2026?</div><div className="faq-qa">SE tax (15.3%) + federal income tax (10-37%) + state tax. After mileage, QBI, and the 50% SE deduction, effective rates are typically 18-28% for most gig workers.</div></div>
          <div className="faq-q"><div className="faq-qt">What is the difference between a 1099-NEC and 1099-K?</div><div className="faq-qa">1099-NEC reports nonemployee compensation (DoorDash, Uber, Lyft payments). 1099-K reports payment network transactions — threshold is $5,000 in 2026. All 1099 income is taxable regardless of which form you receive.</div></div>
          <div className="faq-q"><div className="faq-qt">How much should I set aside for 1099 taxes?</div><div className="faq-qa">25-30% of net income covers SE tax (15.3%) plus federal income tax for most gig workers. Use a platform calculator above for a precise number based on your actual income and state.</div></div>
          <div className="faq-q"><div className="faq-qt">Do 1099 workers pay quarterly taxes?</div><div className="faq-qa">Yes, if you expect to owe $1,000 or more. Due dates: April 15 · June 16 · September 15 · January 15. Underpayment triggers an IRS penalty.</div></div>
          <div className="faq-q"><div className="faq-qt">What deductions can 1099 gig workers claim?</div><div className="faq-qa">Mileage ($0.70/mile), phone plan, home office, equipment, platform fees, QBI deduction (up to 20% of net), and health insurance premiums for self-employed workers.</div></div>
        </div>

        <div className="cta-box">
          <h2>Pick your platform for a precise calculation</h2>
          <p>Platform-specific deductions, mileage rules, and 1099 handling — all included.</p>
          <Link href="/doordash" className="cta-btn">Calculate DoorDash Taxes →</Link>
        </div>
      </div>
    </>
  );
}
