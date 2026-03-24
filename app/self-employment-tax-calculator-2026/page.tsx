import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Self-Employment Tax Calculator 2026 — Free SE Tax Estimator for Gig Workers',
  description: 'Calculate your 2026 self-employment tax (15.3%). Covers Social Security, Medicare, QBI deduction, and quarterly estimated payments. Free, no signup, all gig platforms.',
  alternates: { canonical: 'https://www.gigwisetax.com/self-employment-tax-calculator-2026' },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is self-employment tax in 2026?","acceptedAnswer":{"@type":"Answer","text":"Self-employment tax is 15.3% of net self-employment income: 12.4% for Social Security on income up to $176,100, and 2.9% for Medicare on all income. Self-employed workers pay both the employee and employer portions."}},{"@type":"Question","name":"Who has to pay self-employment tax?","acceptedAnswer":{"@type":"Answer","text":"Anyone with net self-employment income of $400 or more must pay self-employment tax. This includes freelancers, gig workers (DoorDash, Uber, Instacart, etc.), independent contractors, and sole proprietors."}},{"@type":"Question","name":"Can I deduct self-employment tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. You can deduct 50% of your self-employment tax from gross income before calculating federal income tax. This deduction is automatic — you do not need to itemize to claim it."}},{"@type":"Question","name":"How do I calculate self-employment tax?","acceptedAnswer":{"@type":"Answer","text":"Step 1: Calculate net self-employment income (gross minus business expenses). Step 2: Multiply by 0.9235 (92.35%). Step 3: Multiply by 0.153 (15.3%). The result is your SE tax. For example: $60,000 net x 0.9235 x 0.153 = $8,479."}},{"@type":"Question","name":"What is the 2026 Social Security wage base?","acceptedAnswer":{"@type":"Answer","text":"The 2026 Social Security wage base is $176,100. The 12.4% Social Security portion of SE tax only applies to income up to this limit. The 2.9% Medicare portion applies to all net self-employment income with no cap."}}]};

const CSS = `
  body{background:#0f1117;}
  .se-wrap{max-width:900px;margin:0 auto;padding:60px 24px 80px;color:#d1d5db;font-family:'Inter',sans-serif;}
  .se-badge{display:inline-block;background:rgba(139,92,246,.15);border:1px solid rgba(139,92,246,.35);color:#c4b5fd;font-size:12px;font-weight:600;letter-spacing:.08em;padding:4px 14px;border-radius:20px;margin-bottom:18px;}
  .se-h1{font-size:clamp(26px,5vw,40px);font-weight:700;color:#fff;line-height:1.2;margin-bottom:14px;}
  .se-h1 em{color:#a78bfa;font-style:normal;}
  .se-lead{font-size:16px;color:#9ca3af;line-height:1.7;margin-bottom:40px;max-width:680px;}
  .formula-box{background:rgba(139,92,246,.08);border:1px solid rgba(139,92,246,.25);border-radius:14px;padding:24px 28px;margin-bottom:40px;}
  .formula-box h2{font-size:16px;font-weight:700;color:#c4b5fd;margin-bottom:16px;letter-spacing:.04em;text-transform:uppercase;}
  .formula-steps{display:flex;flex-direction:column;gap:10px;}
  .formula-step{display:flex;align-items:flex-start;gap:14px;font-size:15px;}
  .step-num{background:rgba(139,92,246,.3);color:#c4b5fd;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;}
  .step-text{color:#d1d5db;line-height:1.5;padding-top:3px;}
  .step-text strong{color:#fff;}
  .rates-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:40px;}
  .rate-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:18px;}
  .rate-label{font-size:12px;color:#6b7280;margin-bottom:6px;text-transform:uppercase;letter-spacing:.06em;}
  .rate-val{font-size:24px;font-weight:700;color:#fff;}
  .rate-sub{font-size:12px;color:#6b7280;margin-top:4px;}
  .platforms-section{margin-bottom:40px;}
  .platforms-section h2{font-size:20px;font-weight:700;color:#fff;margin-bottom:16px;}
  .plat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;}
  .plat-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:14px;text-decoration:none;text-align:center;transition:border-color .2s;}
  .plat-card:hover{border-color:rgba(139,92,246,.4);}
  .plat-emoji{font-size:22px;margin-bottom:6px;}
  .plat-name{font-size:13px;font-weight:600;color:#fff;}
  .plat-type{font-size:11px;color:#6b7280;margin-top:2px;}
  .example-box{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:24px 28px;margin-bottom:40px;}
  .example-box h2{font-size:18px;font-weight:700;color:#fff;margin-bottom:18px;}
  .ex-row{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:14px;}
  .ex-row:last-child{border-bottom:none;}
  .ex-label{color:#9ca3af;}
  .ex-val{color:#d1d5db;font-weight:500;}
  .ex-val.neg{color:#f87171;}
  .ex-val.hi{color:#a78bfa;font-size:16px;font-weight:700;}
  .faq-section{margin-top:48px;}
  .faq-section h2{font-size:20px;font-weight:700;color:#fff;margin-bottom:20px;}
  .faq-q{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:16px 20px;margin-bottom:10px;}
  .faq-qt{font-size:14px;font-weight:600;color:#fff;margin-bottom:6px;}
  .faq-qa{font-size:13px;color:#9ca3af;line-height:1.7;}
  .cta-box{margin-top:48px;background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.3);border-radius:16px;padding:32px;text-align:center;}
  .cta-box h2{font-size:22px;font-weight:700;color:#fff;margin-bottom:10px;}
  .cta-box p{font-size:15px;color:#9ca3af;margin-bottom:20px;}
  .cta-btn{display:inline-block;background:#8b5cf6;color:#fff;font-weight:700;font-size:15px;padding:12px 32px;border-radius:10px;text-decoration:none;}
  .cta-btn:hover{background:#7c3aed;}
  @media(max-width:640px){.rates-grid{grid-template-columns:1fr 1fr;}.plat-grid{grid-template-columns:repeat(2,1fr);}}
`;

export default function SECalculatorPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: CSS}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />

      <div className="se-wrap">
        <div className="se-badge">2026 · IRS Compliant · Free</div>
        <h1 className="se-h1">Self-Employment Tax Calculator <em>2026</em></h1>
        <p className="se-lead">
          Calculate your exact SE tax as a gig worker, freelancer, or independent contractor.
          Covers Social Security (12.4%), Medicare (2.9%), the 50% SE deduction, and QBI.
          No signup, no paywall — all math runs in your browser.
        </p>

        <div className="rates-grid">
          <div className="rate-card">
            <div className="rate-label">SE Tax Rate</div>
            <div className="rate-val">15.3%</div>
            <div className="rate-sub">Both sides of FICA</div>
          </div>
          <div className="rate-card">
            <div className="rate-label">SS Wage Base 2026</div>
            <div className="rate-val">$176,100</div>
            <div className="rate-sub">12.4% applies up to this</div>
          </div>
          <div className="rate-card">
            <div className="rate-label">SE Deduction</div>
            <div className="rate-val">50%</div>
            <div className="rate-sub">Of SE tax, above-the-line</div>
          </div>
        </div>

        <div className="formula-box">
          <h2>How SE Tax Is Calculated</h2>
          <div className="formula-steps">
            <div className="formula-step">
              <div className="step-num">1</div>
              <div className="step-text">Start with <strong>net self-employment income</strong> (gross income minus business expenses)</div>
            </div>
            <div className="formula-step">
              <div className="step-num">2</div>
              <div className="step-text">Multiply by <strong>92.35%</strong> (0.9235) — this removes the employer-equivalent portion the IRS allows</div>
            </div>
            <div className="formula-step">
              <div className="step-num">3</div>
              <div className="step-text">Multiply by <strong>15.3%</strong> — result is your SE tax</div>
            </div>
            <div className="formula-step">
              <div className="step-num">4</div>
              <div className="step-text">Deduct <strong>50% of SE tax</strong> from gross income before calculating federal income tax</div>
            </div>
          </div>
        </div>

        <div className="example-box">
          <h2>Example: $60,000 net income (single filer)</h2>
          <div className="ex-row"><span className="ex-label">Net self-employment income</span><span className="ex-val">$60,000</span></div>
          <div className="ex-row"><span className="ex-label">× 92.35% (SE base)</span><span className="ex-val">$55,410</span></div>
          <div className="ex-row"><span className="ex-label">× 15.3% (SE tax rate)</span><span className="ex-val neg">−$8,478</span></div>
          <div className="ex-row"><span className="ex-label">50% SE deduction (reduces federal taxable income)</span><span className="ex-val">−$4,239</span></div>
          <div className="ex-row"><span className="ex-label">QBI deduction (20% of net)</span><span className="ex-val">−$12,000</span></div>
          <div className="ex-row"><span className="ex-label">Federal income tax (after deductions)</span><span className="ex-val neg">−$4,680</span></div>
          <div className="ex-row"><span className="ex-label">Total tax burden</span><span className="ex-val hi">~22%</span></div>
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
            <Link href="/etsy" className="plat-card"><div className="plat-name">Etsy</div><div className="plat-type">E-commerce</div></Link>
            <Link href="/onlyfans" className="plat-card"><div className="plat-name">OnlyFans</div><div className="plat-type">Content</div></Link>
            <Link href="/airbnb" className="plat-card"><div className="plat-name">Airbnb</div><div className="plat-type">Rental</div></Link>
            <Link href="/turo" className="plat-card"><div className="plat-name">Turo</div><div className="plat-type">Car rental</div></Link>
            <Link href="/walmart-spark" className="plat-card"><div className="plat-name">Walmart Spark</div><div className="plat-type">Delivery</div></Link>
            <Link href="/1099-tax-calculator-2026" className="plat-card"><div className="plat-name">All 1099</div><div className="plat-type">General calculator</div></Link>
          </div>
        </div>

        <div className="faq-section">
          <h2>Self-Employment Tax FAQs</h2>
          <div className="faq-q"><div className="faq-qt">What is self-employment tax in 2026?</div><div className="faq-qa">Self-employment tax is 15.3% of net self-employment income: 12.4% Social Security (up to $176,100) + 2.9% Medicare on all income. You pay both the employee and employer portions.</div></div>
          <div className="faq-q"><div className="faq-qt">Who has to pay self-employment tax?</div><div className="faq-qa">Anyone with $400 or more in net self-employment income — freelancers, gig workers (DoorDash, Uber, Instacart, etc.), independent contractors, and sole proprietors.</div></div>
          <div className="faq-q"><div className="faq-qt">Can I deduct self-employment tax?</div><div className="faq-qa">Yes — you deduct 50% of SE tax from gross income before calculating federal income tax. This is automatic and does not require itemizing.</div></div>
          <div className="faq-q"><div className="faq-qt">How do I calculate self-employment tax?</div><div className="faq-qa">Net income × 0.9235 × 0.153 = SE tax. Example: $60,000 × 0.9235 × 0.153 = $8,478 SE tax.</div></div>
          <div className="faq-q"><div className="faq-qt">What is the 2026 Social Security wage base?</div><div className="faq-qa">$176,100. The 12.4% SS portion applies only up to this limit. The 2.9% Medicare portion applies to all income with no cap.</div></div>
        </div>

        <div className="cta-box">
          <h2>Ready to calculate your exact gig tax?</h2>
          <p>Select your platform for a precise breakdown including mileage, expenses, and quarterly payments.</p>
          <Link href="/doordash" className="cta-btn">Start with DoorDash →</Link>
        </div>

      </div>
    </>
  );
}
