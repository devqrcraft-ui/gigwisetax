import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Safe Harbor & Quarterly Tax Penalties for Gig Workers 2026 | GigWiseTax',
  description: 'Complete guide to IRS safe harbor rules, underpayment penalties, and quarterly tax strategy for gig workers in 2026. Includes penalty calculator, real examples, and multi-app scenarios.',
  alternates: { canonical: 'https://www.gigwisetax.com/safe-harbor-quarterly-taxes' },
};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the safe harbor rule for quarterly taxes?","acceptedAnswer":{"@type":"Answer","text":"The IRS safe harbor rule protects you from underpayment penalties if you pay either: (1) 100% of your prior year's total tax liability, or (2) 90% of your current year's tax liability — whichever is smaller. High earners (AGI over $150,000) must pay 110% of prior year tax."}},{"@type":"Question","name":"What is the IRS underpayment penalty rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"The 2026 IRS underpayment penalty rate is the federal short-term rate plus 3 percentage points, currently approximately 7–8% annually. The penalty is calculated on each underpaid quarter separately, not on the full year amount."}},{"@type":"Question","name":"What happens if I don't pay quarterly taxes as a gig worker?","acceptedAnswer":{"@type":"Answer","text":"If you owe $1,000 or more in federal taxes for the year and didn't pay enough quarterly, the IRS charges an underpayment penalty. The penalty is calculated per quarter — missing Q1 accrues a longer penalty than missing Q4. You still owe the full tax when you file, plus the penalty amount."}},{"@type":"Question","name":"Can I avoid the quarterly tax penalty if I'm a first-year gig worker?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you had zero tax liability in the prior year (your total tax was $0), you are exempt from the underpayment penalty for the current year, even if you owe a large amount when you file. This typically applies to your first year of self-employment."}},{"@type":"Question","name":"What is the 2026 quarterly tax due date schedule?","acceptedAnswer":{"@type":"Answer","text":"2026 quarterly estimated tax deadlines: Q1 (Jan–Mar income) due April 15, 2026. Q2 (Apr–May income) due June 16, 2026. Q3 (Jun–Aug income) due September 15, 2026. Q4 (Sep–Dec income) due January 15, 2027."}},{"@type":"Question","name":"Should I use the annualized income method or regular quarterly payments?","acceptedAnswer":{"@type":"Answer","text":"Most gig workers use equal quarterly payments based on their estimated annual income. The annualized income installment method (IRS Form 2210) is better if your income varies significantly by quarter — for example, if you earn 60% of income in Q4. It calculates each quarter's payment based on actual income earned that quarter, potentially reducing or eliminating penalties."}}]};

const CSS = `
  body{background:#0d1117;}
  .sh-wrap{max-width:900px;margin:0 auto;padding:48px 24px 80px;color:#d1d5db;font-family:'IBM Plex Sans',sans-serif;}
  .sh-badge{display:inline-block;background:rgba(178,34,52,.12);border:1px solid rgba(178,34,52,.35);color:#fca5a5;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px;margin-bottom:18px;}
  .sh-h1{font-size:clamp(24px,5vw,38px);font-weight:900;color:#fff;line-height:1.2;margin-bottom:14px;}
  .sh-h1 em{color:#e8b84b;font-style:normal;}
  .sh-lead{font-size:15px;color:#9ca3af;line-height:1.75;margin-bottom:40px;max-width:700px;}
  .alert-box{background:rgba(178,34,52,.08);border:1px solid rgba(178,34,52,.3);border-radius:12px;padding:18px 22px;margin-bottom:40px;display:flex;gap:14px;}
  .alert-icon{font-size:24px;flex-shrink:0;}
  .alert-title{font-size:14px;font-weight:700;color:#fca5a5;margin-bottom:4px;}
  .alert-desc{font-size:13px;color:#9ca3af;line-height:1.6;}
  .sh-h2{font-size:20px;font-weight:800;color:#fff;margin:0 0 16px;}
  .sh-h3{font-size:16px;font-weight:700;color:#e8b84b;margin:0 0 12px;}
  .section{margin-bottom:48px;}
  .rule-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px;}
  .rule-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:20px;}
  .rule-card.active{border-color:rgba(34,197,94,.3);background:rgba(34,197,94,.05);}
  .rule-label{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px;color:rgba(255,255,255,0.5);}
  .rule-card.active .rule-label{color:#4ade80;}
  .rule-title{font-size:16px;font-weight:800;color:#fff;margin-bottom:6px;}
  .rule-desc{font-size:13px;color:#9ca3af;line-height:1.6;}
  .rule-note{font-size:12px;color:#4ade80;margin-top:8px;font-weight:600;}
  .penalty-table{width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px;}
  .penalty-table th{text-align:left;padding:10px 14px;background:rgba(178,34,52,.15);color:#fca5a5;font-weight:700;font-size:11px;letter-spacing:.06em;text-transform:uppercase;}
  .penalty-table td{padding:10px 14px;border-bottom:1px solid rgba(255,255,255,.05);color:#d1d5db;}
  .penalty-table tr:last-child td{border-bottom:none;}
  .td-red{color:#f87171;font-weight:700;}
  .td-green{color:#4ade80;font-weight:700;}
  .scenario-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;}
  .scenario{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:20px;}
  .scenario-badge{display:inline-block;background:rgba(232,184,75,.1);border:1px solid rgba(232,184,75,.25);color:#e8b84b;font-size:11px;font-weight:700;padding:3px 10px;border-radius:10px;margin-bottom:12px;}
  .scenario-title{font-size:15px;font-weight:800;color:#fff;margin-bottom:14px;}
  .s-row{display:flex;justify-content:space-between;font-size:13px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.04);}
  .s-row:last-child{border-bottom:none;}
  .s-label{color:rgba(255,255,255,0.5);}
  .s-val{color:#d1d5db;font-weight:500;}
  .s-val.red{color:#f87171;}
  .s-val.green{color:#4ade80;}
  .s-val.yellow{color:#e8b84b;}
  .timeline{margin-bottom:24px;}
  .tl-item{display:flex;gap:16px;margin-bottom:16px;}
  .tl-dot{width:32px;height:32px;border-radius:50%;background:rgba(232,184,75,.15);border:2px solid rgba(232,184,75,.4);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:#e8b84b;flex-shrink:0;}
  .tl-dot.urgent{background:rgba(178,34,52,.2);border-color:rgba(178,34,52,.5);color:#fca5a5;}
  .tl-content{padding-top:4px;}
  .tl-date{font-size:13px;font-weight:700;color:#fff;margin-bottom:2px;}
  .tl-desc{font-size:12px;color:rgba(255,255,255,0.5);line-height:1.5;}
  .tl-penalty{font-size:12px;color:#f87171;font-weight:600;margin-top:3px;}
  .strategy-box{background:rgba(232,184,75,.06);border:1px solid rgba(232,184,75,.2);border-radius:12px;padding:22px;margin-bottom:16px;}
  .strategy-title{font-size:15px;font-weight:700;color:#e8b84b;margin-bottom:10px;}
  .strategy-desc{font-size:13px;color:#9ca3af;line-height:1.7;}
  .faq-q{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:16px 20px;margin-bottom:10px;}
  .faq-qt{font-size:14px;font-weight:700;color:#fff;margin-bottom:6px;}
  .faq-qa{font-size:13px;color:#9ca3af;line-height:1.7;}
  .tools-row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:32px;}
  .tool-btn{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:14px;text-decoration:none;text-align:center;transition:border-color .2s;}
  .tool-btn:hover{border-color:rgba(232,184,75,.4);}
  .tool-emoji{font-size:20px;margin-bottom:6px;}
  .tool-name{font-size:12px;font-weight:700;color:#fff;}
  .note{background:rgba(255,255,255,.03);border-left:3px solid rgba(232,184,75,.5);padding:14px 18px;border-radius:0 8px 8px 0;font-size:13px;color:#9ca3af;margin:16px 0;line-height:1.6;}
  @media(max-width:640px){.rule-grid{grid-template-columns:1fr;}.scenario-grid{grid-template-columns:1fr;}.tools-row{grid-template-columns:repeat(2,1fr);}}
`;

export default function SafeHarborPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: CSS}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />

      <div className="sh-wrap">
        <div className="sh-badge">IRS Safe Harbor · Penalties · 2026</div>
        <h1 className="sh-h1">Quarterly Tax Penalties & <em>Safe Harbor</em> Rules for Gig Workers</h1>
        <p className="sh-lead">
          Missing quarterly tax payments costs gig workers hundreds to thousands of dollars in IRS penalties each year.
          Here is exactly how the safe harbor rules work, what the penalty is, when it applies, and how to avoid it entirely.
        </p>

        <div className="alert-box">
          <div className="alert-icon"></div>
          <div>
            <div className="alert-title">The $1,000 Rule — You Must Pay Quarterly</div>
            <div className="alert-desc">
              If you expect to owe <strong>$1,000 or more</strong> in federal taxes after withholding and credits,
              the IRS requires quarterly estimated payments. Gig workers with no withholding almost always exceed this threshold.
              Missing payments triggers a penalty even if you pay the full amount when you file.
            </div>
          </div>
        </div>

        {/* SAFE HARBOR RULES */}
        <div className="section">
          <h2 className="sh-h2">The Two Safe Harbor Rules</h2>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,0.5)',marginBottom:'20px',lineHeight:'1.6'}}>
            Pay at least one of these amounts and the IRS cannot charge an underpayment penalty — even if you end up owing more at filing.
          </p>
          <div className="rule-grid">
            <div className="rule-card active">
              <div className="rule-label">Rule 1 — Prior Year</div>
              <div className="rule-title">100% of Last Year's Tax</div>
              <div className="rule-desc">Pay the same total tax as you paid last year, spread across 4 quarters. Simple — just look at last year's Form 1040 Line 24.</div>
              <div className="rule-note">✓ Best if income increased this year</div>
            </div>
            <div className="rule-card">
              <div className="rule-label">Rule 2 — Current Year</div>
              <div className="rule-title">90% of This Year's Tax</div>
              <div className="rule-desc">Pay 90% of what you'll actually owe this year. Requires estimating current income — can be tricky if income fluctuates.</div>
              <div className="rule-note" style={{color:'#9ca3af'}}>Best if income dropped significantly</div>
            </div>
          </div>
          <div className="note">
            <strong style={{color:'#e8b84b'}}>High earner exception:</strong> If your adjusted gross income was over $150,000 last year (over $75,000 if married filing separately),
            you must pay <strong>110% of prior year tax</strong> to qualify for safe harbor — not 100%.
          </div>
        </div>

        {/* PENALTY CALCULATION */}
        <div className="section">
          <h2 className="sh-h2">How the Underpayment Penalty Is Calculated</h2>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,0.5)',marginBottom:'20px',lineHeight:'1.6'}}>
            The penalty is not a flat fee — it accrues per quarter at the current IRS short-term rate plus 3%.
            In 2026 this is approximately <strong style={{color:'#fca5a5'}}>7–8% annually</strong> on the underpaid amount.
          </p>
          <table className="penalty-table">
            <thead>
              <tr><th>Scenario</th><th>Annual Income</th><th>Tax Owed</th><th>Penalty if Zero Paid</th><th>Penalty if 50% Paid</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>DoorDash driver</td>
                <td>$45,000 net</td>
                <td className="td-red">~$10,800</td>
                <td className="td-red">~$756/yr</td>
                <td className="td-red">~$378/yr</td>
              </tr>
              <tr>
                <td>Uber + Lyft combo</td>
                <td>$68,000 net</td>
                <td className="td-red">~$17,200</td>
                <td className="td-red">~$1,204/yr</td>
                <td className="td-red">~$602/yr</td>
              </tr>
              <tr>
                <td>OnlyFans creator</td>
                <td>$90,000 net</td>
                <td className="td-red">~$24,500</td>
                <td className="td-red">~$1,715/yr</td>
                <td className="td-red">~$858/yr</td>
              </tr>
              <tr>
                <td>Airbnb host</td>
                <td>$35,000 net</td>
                <td className="td-red">~$7,800</td>
                <td className="td-red">~$546/yr</td>
                <td className="td-red">~$273/yr</td>
              </tr>
            </tbody>
          </table>
          <div className="note">
            Penalty = (underpaid amount) × (IRS rate ÷ 4) × (quarters underpaid).
            Each quarter is calculated separately — missing Q1 costs more than missing Q4 because it accrues longer.
            Source: <a href="https://www.irs.gov/payments/underpayment-of-estimated-tax-by-individuals-penalty" target="_blank" rel="noopener" style={{color:'#e8b84b'}}>IRS Underpayment Penalty</a>
          </div>
        </div>

        {/* MULTI-APP SCENARIOS */}
        <div className="section">
          <h2 className="sh-h2">Multi-App Gig Worker Scenarios</h2>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,0.5)',marginBottom:'20px',lineHeight:'1.6'}}>
            Working multiple platforms is common — but taxes are calculated on <strong>combined net income</strong>, not per platform.
            Here are real scenarios with safe harbor calculations.
          </p>
          <div className="scenario-grid">

            <div className="scenario">
              <div className="scenario-badge">Scenario 1</div>
              <div className="scenario-title"> DoorDash +  Uber Driver</div>
              <div className="s-row"><span className="s-label">DoorDash gross</span><span className="s-val">$32,000</span></div>
              <div className="s-row"><span className="s-label">Uber gross</span><span className="s-val">$28,000</span></div>
              <div className="s-row"><span className="s-label">Total gross</span><span className="s-val">$60,000</span></div>
              <div className="s-row"><span className="s-label">Mileage deduction (22k mi)</span><span className="s-val green">-$14,740</span></div>
              <div className="s-row"><span className="s-label">Phone + supplies</span><span className="s-val green">-$1,800</span></div>
              <div className="s-row"><span className="s-label">Net income</span><span className="s-val yellow">$43,460</span></div>
              <div className="s-row"><span className="s-label">SE tax (15.3%)</span><span className="s-val red">-$6,143</span></div>
              <div className="s-row"><span className="s-label">Federal income tax</span><span className="s-val red">-$3,890</span></div>
              <div className="s-row"><span className="s-label">Total annual tax</span><span className="s-val red">$10,033</span></div>
              <div className="s-row"><span className="s-label">Safe harbor quarterly</span><span className="s-val yellow">$2,508/quarter</span></div>
              <div className="s-row"><span className="s-label">Penalty if not paid</span><span className="s-val red">~$702/yr</span></div>
            </div>

            <div className="scenario">
              <div className="scenario-badge">Scenario 2</div>
              <div className="scenario-title"> Instacart +  Amazon Flex</div>
              <div className="s-row"><span className="s-label">Instacart gross</span><span className="s-val">$24,000</span></div>
              <div className="s-row"><span className="s-label">Amazon Flex gross</span><span className="s-val">$18,000</span></div>
              <div className="s-row"><span className="s-label">Total gross</span><span className="s-val">$42,000</span></div>
              <div className="s-row"><span className="s-label">Mileage deduction (16k mi)</span><span className="s-val green">-$10,720</span></div>
              <div className="s-row"><span className="s-label">Bags + equipment</span><span className="s-val green">-$600</span></div>
              <div className="s-row"><span className="s-label">Net income</span><span className="s-val yellow">$30,680</span></div>
              <div className="s-row"><span className="s-label">SE tax (15.3%)</span><span className="s-val red">-$4,335</span></div>
              <div className="s-row"><span className="s-label">Federal income tax</span><span className="s-val red">-$1,890</span></div>
              <div className="s-row"><span className="s-label">Total annual tax</span><span className="s-val red">$6,225</span></div>
              <div className="s-row"><span className="s-label">Safe harbor quarterly</span><span className="s-val yellow">$1,556/quarter</span></div>
              <div className="s-row"><span className="s-label">Penalty if not paid</span><span className="s-val red">~$436/yr</span></div>
            </div>

            <div className="scenario">
              <div className="scenario-badge">Scenario 3</div>
              <div className="scenario-title"> OnlyFans +  Etsy Creator</div>
              <div className="s-row"><span className="s-label">OnlyFans gross</span><span className="s-val">$75,000</span></div>
              <div className="s-row"><span className="s-label">Etsy gross</span><span className="s-val">$18,000</span></div>
              <div className="s-row"><span className="s-label">Total gross</span><span className="s-val">$93,000</span></div>
              <div className="s-row"><span className="s-label">Business expenses</span><span className="s-val green">-$14,200</span></div>
              <div className="s-row"><span className="s-label">QBI deduction (20%)</span><span className="s-val green">-$15,760</span></div>
              <div className="s-row"><span className="s-label">Net taxable</span><span className="s-val yellow">$63,040</span></div>
              <div className="s-row"><span className="s-label">SE tax</span><span className="s-val red">-$11,083</span></div>
              <div className="s-row"><span className="s-label">Federal income tax</span><span className="s-val red">-$7,480</span></div>
              <div className="s-row"><span className="s-label">Total annual tax</span><span className="s-val red">$18,563</span></div>
              <div className="s-row"><span className="s-label">Safe harbor quarterly</span><span className="s-val yellow">$4,641/quarter</span></div>
              <div className="s-row"><span className="s-label">Penalty if not paid</span><span className="s-val red">~$1,299/yr</span></div>
            </div>

            <div className="scenario">
              <div className="scenario-badge">Scenario 4</div>
              <div className="scenario-title"> Airbnb +  Turo Host</div>
              <div className="s-row"><span className="s-label">Airbnb gross</span><span className="s-val">$28,000</span></div>
              <div className="s-row"><span className="s-label">Turo gross</span><span className="s-val">$14,000</span></div>
              <div className="s-row"><span className="s-label">Total gross</span><span className="s-val">$42,000</span></div>
              <div className="s-row"><span className="s-label">Depreciation + expenses</span><span className="s-val green">-$12,400</span></div>
              <div className="s-row"><span className="s-label">Net income</span><span className="s-val yellow">$29,600</span></div>
              <div className="s-row"><span className="s-label">SE tax (active rental)</span><span className="s-val red">-$4,183</span></div>
              <div className="s-row"><span className="s-label">Federal income tax</span><span className="s-val red">-$1,740</span></div>
              <div className="s-row"><span className="s-label">Total annual tax</span><span className="s-val red">$5,923</span></div>
              <div className="s-row"><span className="s-label">Safe harbor quarterly</span><span className="s-val yellow">$1,481/quarter</span></div>
              <div className="s-row"><span className="s-label">Penalty if not paid</span><span className="s-val red">~$415/yr</span></div>
            </div>

          </div>
        </div>

        {/* QUARTERLY TIMELINE */}
        <div className="section">
          <h2 className="sh-h2">2026 Quarterly Deadline Timeline</h2>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-dot urgent">Q1</div>
              <div className="tl-content">
                <div className="tl-date">April 15, 2026 — Q1 Payment Due</div>
                <div className="tl-desc">Covers January–March income. Also the deadline for 2025 annual return.</div>
                <div className="tl-penalty">Missing this: penalty accrues for ~9 months until Jan 15, 2027 filing deadline</div>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-dot">Q2</div>
              <div className="tl-content">
                <div className="tl-date">June 16, 2026 — Q2 Payment Due</div>
                <div className="tl-desc">Covers April–May income only (not full quarter — IRS uses a compressed Q2).</div>
                <div className="tl-penalty">Missing this: penalty accrues for ~7 months</div>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-dot">Q3</div>
              <div className="tl-content">
                <div className="tl-date">September 15, 2026 — Q3 Payment Due</div>
                <div className="tl-desc">Covers June–August income.</div>
                <div className="tl-penalty">Missing this: penalty accrues for ~4 months</div>
              </div>
            </div>
            <div className="tl-item">
              <div className="tl-dot">Q4</div>
              <div className="tl-content">
                <div className="tl-date">January 15, 2027 — Q4 Payment Due</div>
                <div className="tl-desc">Covers September–December income. Can skip if you file and pay full return by Feb 1.</div>
                <div className="tl-penalty">Missing this: smallest penalty — only ~1 month accrual</div>
              </div>
            </div>
          </div>
        </div>

        {/* STRATEGIES */}
        <div className="section">
          <h2 className="sh-h2">3 Strategies to Never Pay a Penalty</h2>
          <div className="strategy-box">
            <div className="strategy-title">Strategy 1 — Prior Year Safe Harbor (Easiest)</div>
            <div className="strategy-desc">
              Look at last year's Form 1040, Line 24 (Total Tax). Divide by 4. Pay that amount each quarter.
              You are fully protected from penalties regardless of how much you earn this year.
              Best for workers whose income grows year-over-year.
            </div>
          </div>
          <div className="strategy-box">
            <div className="strategy-title">Strategy 2 — Percentage Withholding (Most Practical)</div>
            <div className="strategy-desc">
              Set aside 27–30% of every payment you receive into a separate savings account.
              Pay quarterly from this account. This naturally adjusts to your actual income
              — higher earning quarters generate larger automatic reserves.
              Works best for variable income platforms like DoorDash, Uber, Etsy.
            </div>
          </div>
          <div className="strategy-box">
            <div className="strategy-title">Strategy 3 — Annualized Income Method (For Variable Income)</div>
            <div className="strategy-desc">
              If you earn significantly more in some quarters (holiday Etsy sales, summer Airbnb),
              use IRS Form 2210 to calculate each quarter's payment based on actual income that quarter.
              You pay more in high-income quarters and less in slow quarters — but you avoid overpaying
              in Q1/Q2 based on income that hasn't happened yet.
            </div>
          </div>
        </div>

        {/* FIRST YEAR EXCEPTION */}
        <div className="section">
          <h2 className="sh-h2">First-Year Gig Worker? You May Be Exempt</h2>
          <div className="note" style={{borderColor:'rgba(74,222,128,.4)'}}>
            <strong style={{color:'#4ade80'}}>Zero liability exception:</strong> If your total federal tax for the prior year was $0,
            you owe no underpayment penalty this year — even if you owe thousands when you file.
            This applies to most first-year gig workers who had no income or were covered by employer withholding all of last year.
            The exception only applies once — year two you must pay quarterly.
          </div>
        </div>

        {/* FAQ */}
        <div className="section">
          <h2 className="sh-h2">Safe Harbor FAQs</h2>
          <div className="faq-q"><div className="faq-qt">What is the safe harbor rule for quarterly taxes?</div><div className="faq-qa">Pay either 100% of last year's total tax (110% if AGI was over $150,000) or 90% of this year's tax — whichever is smaller. Meet either threshold and the IRS cannot charge an underpayment penalty.</div></div>
          <div className="faq-q"><div className="faq-qt">What is the IRS underpayment penalty rate in 2026?</div><div className="faq-qa">Approximately 7–8% annually on the underpaid amount, calculated per quarter. The penalty is the federal short-term rate plus 3 percentage points, updated quarterly by the IRS.</div></div>
          <div className="faq-q"><div className="faq-qt">What happens if I don't pay quarterly taxes?</div><div className="faq-qa">You still owe the full tax when you file — plus an underpayment penalty calculated per quarter. Missing Q1 costs the most (9 months of accrual). Missing Q4 costs the least (1 month). You cannot avoid the penalty by paying everything in April.</div></div>
          <div className="faq-q"><div className="faq-qt">Can I avoid the penalty as a first-year gig worker?</div><div className="faq-qa">Yes — if your prior year total tax was $0, you are exempt from the underpayment penalty this year. This applies once. Starting year two, you must pay quarterly.</div></div>
          <div className="faq-q"><div className="faq-qt">What are the 2026 quarterly tax due dates?</div><div className="faq-qa">Q1: April 15, 2026 · Q2: June 16, 2026 · Q3: September 15, 2026 · Q4: January 15, 2027. Missing these by even one day starts the penalty clock.</div></div>
          <div className="faq-q"><div className="faq-qt">I work on multiple apps. Do I file separately for each?</div><div className="faq-qa">No. All gig income is combined on a single Schedule C (or multiple Schedule C forms if different types of business). Your quarterly payment covers all platforms combined. The IRS does not track income by platform — only your total self-employment income.</div></div>
        </div>

        <h2 className="sh-h2" style={{marginBottom:'8px'}}>Calculate Your Quarterly Payment</h2>
        <p style={{fontSize:'14px',color:'rgba(255,255,255,0.5)',marginBottom:'16px'}}>Select your platform for a precise breakdown including deductions and quarterly schedule.</p>
        <div className="tools-row">
          <Link href="/doordash" className="tool-btn"><div className="tool-emoji"></div><div className="tool-name">DoorDash</div></Link>
          <Link href="/uber" className="tool-btn"><div className="tool-emoji"></div><div className="tool-name">Uber</div></Link>
          <Link href="/instacart" className="tool-btn"><div className="tool-emoji"></div><div className="tool-name">Instacart</div></Link>
          <Link href="/onlyfans" className="tool-btn"><div className="tool-emoji"></div><div className="tool-name">OnlyFans</div></Link>
          <Link href="/amazon-flex" className="tool-btn"><div className="tool-emoji"></div><div className="tool-name">Amazon Flex</div></Link>
          <Link href="/airbnb" className="tool-btn"><div className="tool-emoji"></div><div className="tool-name">Airbnb</div></Link>
          <Link href="/etsy" className="tool-btn"><div className="tool-emoji"></div><div className="tool-name">Etsy</div></Link>
          <Link href="/tax-penalty-finder" className="tool-btn"><div className="tool-emoji"></div><div className="tool-name">Penalty Finder</div></Link>
        </div>

      </div>
    </>
  );
}
