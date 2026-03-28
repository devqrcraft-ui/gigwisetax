import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Calculate Gig Worker Taxes 2026 — Methodology | GigWiseTax',
  description: 'Transparent methodology for GigWiseTax calculations. SE tax formula (IRS Schedule SE), 2026 federal brackets, state tax sources, and quarterly payment math explained.',
  alternates: { canonical: 'https://www.gigwisetax.com/how-we-calculate-gig-taxes' },
};

const CSS = `
  body { background: #0d1117; }
  .wrap { max-width: 860px; margin: 0 auto; padding: 48px 24px 80px; color: #d1d5db; font-family: 'Segoe UI', sans-serif; }
  .badge { display: inline-block; background: rgba(232,184,75,.12); border: 1px solid rgba(232,184,75,.3); color: #e8b84b; font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; padding: 4px 14px; border-radius: 20px; margin-bottom: 16px; }
  h1 { font-size: clamp(22px,4vw,34px); font-weight: 900; color: #fff; line-height: 1.2; margin-bottom: 12px; }
  .lead { font-size: 15px; color: #9ca3af; line-height: 1.75; margin-bottom: 36px; max-width: 680px; }
  h2 { font-size: 18px; font-weight: 800; color: #fff; margin: 0 0 14px; padding-top: 8px; }
  h3 { font-size: 14px; font-weight: 700; color: #e8b84b; margin: 0 0 8px; }
  .section { margin-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,.06); padding-bottom: 40px; }
  .section:last-child { border-bottom: none; }
  .formula-box { background: rgba(232,184,75,.06); border: 1px solid rgba(232,184,75,.2); border-radius: 10px; padding: 20px 24px; margin-bottom: 16px; font-family: 'Courier New', monospace; }
  .formula-title { font-size: 11px; font-weight: 800; color: #e8b84b; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 12px; font-family: 'Segoe UI', sans-serif; }
  .formula-line { font-size: 14px; color: #fff; margin-bottom: 6px; line-height: 1.7; }
  .formula-line span { color: #e8b84b; }
  .formula-note { font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 10px; font-family: 'Segoe UI', sans-serif; line-height: 1.6; }
  .source-box { background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07); border-radius: 8px; padding: 14px 18px; margin-bottom: 10px; }
  .source-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: .06em; margin-bottom: 6px; }
  .source-text { font-size: 13px; color: #9ca3af; line-height: 1.65; }
  .source-link { color: #e8b84b; text-decoration: none; font-weight: 600; }
  .bracket-table { width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 16px; }
  .bracket-table th { text-align: left; padding: 9px 14px; background: rgba(255,255,255,.05); color: #9ca3af; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
  .bracket-table td { padding: 9px 14px; border-bottom: 1px solid rgba(255,255,255,.05); color: #d1d5db; }
  .bracket-table tr:last-child td { border-bottom: none; }
  .td-rate { color: #f87171; font-weight: 700; }
  .example-box { background: rgba(34,197,94,.04); border: 1px solid rgba(34,197,94,.15); border-radius: 10px; padding: 18px 22px; margin-bottom: 16px; }
  .example-title { font-size: 13px; font-weight: 700; color: #4ade80; margin-bottom: 12px; }
  .ex-row { display: flex; justify-content: space-between; font-size: 13px; padding: 4px 0; }
  .ex-label { color: rgba(255,255,255,0.5); }
  .ex-val { color: #d1d5db; font-weight: 600; }
  .ex-val.total { color: #f87171; font-size: 15px; font-weight: 800; }
  .disclaimer { background: rgba(178,34,52,.06); border: 1px solid rgba(178,34,52,.2); border-radius: 8px; padding: 16px 20px; font-size: 13px; color: #9ca3af; line-height: 1.7; margin-top: 32px; }
  .nav-links { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 32px; }
  .nav-link { font-size: 13px; color: #e8b84b; text-decoration: none; font-weight: 700; }
`;

export default function HowWeCalculatePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: CSS}} />
      <div className="wrap">
        <div className="badge">Methodology & Sources</div>
        <h1>How GigWiseTax Calculates Your Taxes</h1>
        <p className="lead">
          Every number in our calculator is based on published IRS formulas and official state tax rates.
          This page explains exactly how we arrive at each figure — so you can verify our math.
        </p>

        {/* SE TAX */}
        <div className="section">
          <h2>Step 1 — Self-Employment Tax (IRS Schedule SE)</h2>
          <p style={{fontSize:13,color:'#9ca3af',lineHeight:1.7,marginBottom:16}}>
            Self-employment tax covers Social Security (12.4%) and Medicare (2.9%) — the same taxes
            W-2 employees split with their employer. As a gig worker, you pay both halves: 15.3% total.
            The IRS allows a small adjustment before applying the rate.
          </p>
          <div className="formula-box">
            <div className="formula-title">IRS Schedule SE Formula</div>
            <div className="formula-line">1. SE Base = Net Profit × <span>0.9235</span></div>
            <div className="formula-line">2. SE Tax = SE Base × <span>0.153</span></div>
            <div className="formula-line">3. SE Deduction = SE Tax × <span>0.5</span> (deducted on Form 1040)</div>
            <div className="formula-note">
              Source: <a href="https://www.irs.gov/forms-pubs/about-schedule-se-form-1040" target="_blank" rel="noopener noreferrer" className="source-link">IRS Schedule SE (Form 1040)</a>.
              The 0.9235 factor represents 1 minus the employer-equivalent portion (7.65%).
              Same formula used by H&amp;R Block, TurboTax, and Jackson Hewitt.
            </div>
          </div>
          <div className="example-box">
            <div className="example-title">Example: DoorDash driver, $40,000 net profit</div>
            <div className="ex-row"><span className="ex-label">SE Base</span><span className="ex-val">$40,000 × 0.9235 = $36,940</span></div>
            <div className="ex-row"><span className="ex-label">SE Tax</span><span className="ex-val">$36,940 × 0.153 = $5,652</span></div>
            <div className="ex-row"><span className="ex-label">SE Deduction (half)</span><span className="ex-val">$5,652 × 0.5 = $2,826</span></div>
          </div>
        </div>

        {/* FEDERAL */}
        <div className="section">
          <h2>Step 2 — Federal Income Tax (2026 Brackets)</h2>
          <p style={{fontSize:13,color:'#9ca3af',lineHeight:1.7,marginBottom:16}}>
            Federal income tax is calculated on adjusted gross income (AGI), which is net profit minus
            the SE deduction (half of SE tax). We apply the standard deduction before estimating the bracket.
          </p>
          <table className="bracket-table">
            <thead>
              <tr><th>Rate</th><th>Single filer taxable income</th><th>Married filing jointly</th></tr>
            </thead>
            <tbody>
              {[
                ['10%','$0 – $11,925','$0 – $23,850'],
                ['12%','$11,926 – $48,475','$23,851 – $96,950'],
                ['22%','$48,476 – $103,350','$96,951 – $206,700'],
                ['24%','$103,351 – $197,300','$206,701 – $394,600'],
                ['32%','$197,301 – $250,525','$394,601 – $501,050'],
                ['35%','$250,526 – $626,350','$501,051 – $751,600'],
                ['37%','Over $626,350','Over $751,600'],
              ].map(([rate,single,married])=>(
                <tr key={rate}>
                  <td className="td-rate">{rate}</td>
                  <td>{single}</td>
                  <td>{married}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="source-box">
            <div className="source-label">Source</div>
            <div className="source-text">
              <a href="https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2026" target="_blank" rel="noopener noreferrer" className="source-link">IRS Revenue Procedure — 2026 inflation adjustments</a>.
              Standard deduction 2026: $15,000 (single), $30,000 (married filing jointly).
            </div>
          </div>
          <p style={{fontSize:12,color:'rgba(255,255,255,0.5)',marginTop:8,lineHeight:1.6}}>
            Note: Our calculator uses a simplified effective rate based on the most common bracket for the entered income level.
            Actual federal tax depends on additional deductions, credits, and other income.
          </p>
        </div>

        {/* STATE */}
        <div className="section">
          <h2>Step 3 — State Income Tax</h2>
          <p style={{fontSize:13,color:'#9ca3af',lineHeight:1.7,marginBottom:16}}>
            We include state income tax for all 51 jurisdictions (50 states + D.C.).
            Nine states have no state income tax: Alaska, Florida, Nevada, New Hampshire,
            South Dakota, Tennessee, Texas, Washington, and Wyoming.
          </p>
          <div className="source-box">
            <div className="source-label">State Rate Sources</div>
            <div className="source-text">
              State flat rates and bracket midpoints sourced from each state&apos;s Department of Revenue.
              We use the marginal rate applicable to the entered income level for the selected filing status.
              Rates verified for tax year 2026.
            </div>
          </div>
          <div className="source-box">
            <div className="source-label">Key State Rates Used</div>
            <div className="source-text">
              California 9.3% · New York 6.85% · Illinois 4.95% · Georgia 5.5% ·
              North Carolina 5.25% · Ohio 4.0% · Arizona 2.5% · Colorado 4.4% ·
              Texas 0% · Florida 0% · Washington 0% · Nevada 0%
            </div>
          </div>
        </div>

        {/* QUARTERLY */}
        <div className="section">
          <h2>Step 4 — Quarterly Payment Estimate</h2>
          <p style={{fontSize:13,color:'#9ca3af',lineHeight:1.7,marginBottom:16}}>
            Gig workers who expect to owe $1,000 or more must pay estimated taxes quarterly.
            We divide the total annual tax estimate by 4 for equal quarterly payments.
          </p>
          <div className="formula-box">
            <div className="formula-title">Quarterly Payment Formula</div>
            <div className="formula-line">Quarterly Payment = <span>(SE Tax + Federal Tax + State Tax) ÷ 4</span></div>
            <div className="formula-note">
              2026 due dates: Q1 April 15 · Q2 June 16 · Q3 September 15 · Q4 January 15, 2027.
              Source: <a href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" target="_blank" rel="noopener noreferrer" className="source-link">IRS Estimated Taxes</a>.
            </div>
          </div>
        </div>

        {/* LIMITATIONS */}
        <div className="section">
          <h2>What This Calculator Does Not Include</h2>
          <div className="source-box">
            <div className="source-label">Simplifications in our model</div>
            <div className="source-text" style={{lineHeight:1.8}}>
              • Additional Medicare Tax (0.9% on income over $200,000) — not included<br/>
              • Qualified Business Income (QBI) deduction — not included<br/>
              • Child tax credit, earned income credit, and other credits — not included<br/>
              • Local/city income taxes (e.g. NYC) — not included<br/>
              • Alternative Minimum Tax (AMT) — not included<br/>
              • Multiple income sources (W-2 + gig) interactions — simplified
            </div>
          </div>
          <p style={{fontSize:13,color:'#9ca3af',lineHeight:1.7,marginTop:12}}>
            For a complete and accurate tax return, use tax filing software (TurboTax, H&amp;R Block, TaxAct)
            or consult a licensed CPA or Enrolled Agent.
          </p>
        </div>

        <div className="disclaimer">
          <strong>Disclaimer:</strong> GigWiseTax.com is an independent estimation tool. Not affiliated with the IRS,
          any state Department of Revenue, or any gig platform. Results are estimates for planning purposes only —
          not tax advice. Tax laws change; verify with IRS.gov or a qualified tax professional before filing.
        </div>

        <div className="nav-links">
          <a href="/" className="nav-link">← Back to Calculator</a>
          <a href="/safe-harbor-quarterly-taxes" className="nav-link">→ Safe Harbor Guide</a>
          <a href="/multi-app-gig-taxes-2026" className="nav-link">→ Multi-App Tax Guide</a>
          <a href="/tax-penalty-finder" className="nav-link">→ Penalty Finder</a>
        </div>
      </div>
    </>
  );
}
