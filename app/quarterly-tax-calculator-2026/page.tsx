'use client'
import { useState } from 'react';
import Link from 'next/link';
import AuthorBox from '@/app/components/AuthorBox';

const FILING_STATUSES = [
  { label: 'Single', value: 'single', stdDeduction: 16100 },
  { label: 'Married Filing Jointly', value: 'mfj', stdDeduction: 32200 },
  { label: 'Head of Household', value: 'hoh', stdDeduction: 24150 },
];

const TAX_BRACKETS_SINGLE = [
  { min: 0, max: 11925, rate: 0.10 },
  { min: 11925, max: 48475, rate: 0.12 },
  { min: 48475, max: 103350, rate: 0.22 },
  { min: 103350, max: 197300, rate: 0.24 },
  { min: 197300, max: 250525, rate: 0.32 },
  { min: 250525, max: 626350, rate: 0.35 },
  { min: 626350, max: Infinity, rate: 0.37 },
];

const TAX_BRACKETS_MFJ = [
  { min: 0, max: 23850, rate: 0.10 },
  { min: 23850, max: 96950, rate: 0.12 },
  { min: 96950, max: 206700, rate: 0.22 },
  { min: 206700, max: 394600, rate: 0.24 },
  { min: 394600, max: 501050, rate: 0.32 },
  { min: 501050, max: 751600, rate: 0.35 },
  { min: 751600, max: Infinity, rate: 0.37 },
];

const TAX_BRACKETS_HOH = [
  { min: 0, max: 17000, rate: 0.10 },
  { min: 17000, max: 64850, rate: 0.12 },
  { min: 64850, max: 103350, rate: 0.22 },
  { min: 103350, max: 197300, rate: 0.24 },
  { min: 197300, max: 250500, rate: 0.32 },
  { min: 250500, max: 626350, rate: 0.35 },
  { min: 626350, max: Infinity, rate: 0.37 },
];

function getBrackets(status: string) {
  if (status === 'mfj') return TAX_BRACKETS_MFJ;
  if (status === 'hoh') return TAX_BRACKETS_HOH;
  return TAX_BRACKETS_SINGLE;
}

function calcFederalTax(taxable: number, status: string): number {
  const brackets = getBrackets(status);
  let tax = 0;
  for (const b of brackets) {
    if (taxable <= b.min) break;
    tax += (Math.min(taxable, b.max) - b.min) * b.rate;
  }
  return Math.max(0, tax);
}

const QUARTERS = [
  { label: 'Q1', period: 'Jan 1 – Mar 31', due: 'April 15, 2026' },
  { label: 'Q2', period: 'Apr 1 – May 31', due: 'June 16, 2026' },
  { label: 'Q3', period: 'Jun 1 – Aug 31', due: 'September 15, 2026' },
  { label: 'Q4', period: 'Sep 1 – Dec 31', due: 'January 15, 2027' },
];

export default function QuarterlyTaxCalculator() {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [status, setStatus] = useState('single');
  const [result, setResult] = useState<null | {
    netProfit: number;
    seTax: number;
    federalTax: number;
    totalAnnual: number;
    perQuarter: number;
  }>(null);

  function calculate() {
    const gross = parseFloat(income) || 0;
    const exp = parseFloat(expenses) || 0;
    const netProfit = Math.max(0, gross - exp);

    // SE tax: 92.35% of net × 15.3% (SS cap $184,500)
    const seBase = netProfit * 0.9235;
    const ssTax = Math.min(seBase, 184500) * 0.124;
    const medicareTax = seBase * 0.029;
    const seTax = ssTax + medicareTax;

    // SE deduction: half of SE tax
    const seDeduction = seTax / 2;

    // Standard deduction
    const filing = FILING_STATUSES.find(f => f.value === status)!;
    const stdDeduction = filing.stdDeduction;

    // Taxable income
    const taxable = Math.max(0, netProfit - seDeduction - stdDeduction);
    const federalTax = calcFederalTax(taxable, status);
    const totalAnnual = seTax + federalTax;
    const perQuarter = totalAnnual / 4;

    setResult({ netProfit, seTax, federalTax, totalAnnual, perQuarter });
  }

  const fmt = (n: number) => '$' + Math.round(n).toLocaleString('en-US');

  return (
    <div style={{ background: '#07111F', minHeight: '100vh', color: '#C8D8EC', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '40px 20px' }}>

        {/* Breadcrumb */}
        <nav style={{ fontSize: 14, marginBottom: 24, color: '#8a9bb0' }}>
          <Link href="/" style={{ color: '#e8b84b', textDecoration: 'none' }}>GigWiseTax</Link>
          {' › '}
          <Link href="/calculators" style={{ color: '#e8b84b', textDecoration: 'none' }}>Calculators</Link>
          {' › '}
          Quarterly Tax Calculator 2026
        </nav>

        <h1 style={{ fontSize: 32, fontWeight: 800, color: '#e8b84b', marginBottom: 12, lineHeight: 1.2 }}>
          Quarterly Tax Calculator 2026
        </h1>

        {/* Answer-First GEO block */}
        <div style={{ background: '#0d1f35', border: '1px solid #e8b84b33', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <p style={{ fontSize: 16, lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#e8b84b' }}>Quick answer:</strong> Gig workers pay estimated taxes 4 times per year — April 15, June 16, September 15, and January 15. Each quarter you owe roughly <strong>25–30% of your net profit</strong>: ~15.3% self-employment tax + federal income tax minus the SE deduction. Use this calculator to get your exact quarterly payment for 2026.
          </p>
        </div>

        {/* Key Takeaways */}
        <div style={{ background: '#0d1f35', border: '1px solid #1e3a5f', borderRadius: 10, padding: '20px 24px', marginBottom: 32 }}>
          <h2 style={{ fontSize: 17, color: '#e8b84b', marginTop: 0, marginBottom: 14 }}>⚡ Key Takeaways</h2>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.9, fontSize: 15 }}>
            <li>Pay quarterly if you expect to owe <strong>$1,000+ in taxes</strong> for 2026</li>
            <li>Self-employment tax is <strong>15.3%</strong> on 92.35% of net profit (SS cap: $184,500)</li>
            <li>Deduct <strong>half of SE tax</strong> before calculating federal income tax</li>
            <li>Standard deduction 2026: <strong>$16,100</strong> single / <strong>$32,200</strong> MFJ</li>
            <li>IRS mileage rate 2026: <strong>72.5¢/mile</strong> — track every trip</li>
          </ul>
        </div>

        {/* Calculator */}
        <div style={{ background: '#0d1f35', border: '1px solid #1e3a5f', borderRadius: 12, padding: '28px 24px', marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, color: '#e8b84b', marginTop: 0, marginBottom: 24 }}>Calculate Your Quarterly Payment</h2>

          <div style={{ display: 'grid', gap: 16, marginBottom: 20 }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
              <span style={{ color: '#8a9bb0' }}>Annual Gross Income (1099 / gig income)</span>
              <input
                type="number"
                placeholder="e.g. 45000"
                value={income}
                onChange={e => setIncome(e.target.value)}
                style={{ background: '#07111F', border: '1px solid #1e3a5f', borderRadius: 8, padding: '12px 14px', color: '#C8D8EC', fontSize: 16, outline: 'none' }}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
              <span style={{ color: '#8a9bb0' }}>Annual Business Expenses (mileage, phone, supplies…)</span>
              <input
                type="number"
                placeholder="e.g. 8000"
                value={expenses}
                onChange={e => setExpenses(e.target.value)}
                style={{ background: '#07111F', border: '1px solid #1e3a5f', borderRadius: 8, padding: '12px 14px', color: '#C8D8EC', fontSize: 16, outline: 'none' }}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
              <span style={{ color: '#8a9bb0' }}>Filing Status</span>
              <select
                value={status}
                onChange={e => setStatus(e.target.value)}
                style={{ background: '#07111F', border: '1px solid #1e3a5f', borderRadius: 8, padding: '12px 14px', color: '#C8D8EC', fontSize: 16, outline: 'none' }}
              >
                {FILING_STATUSES.map(f => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
            </label>
          </div>

          <button
            onClick={calculate}
            style={{ width: '100%', background: '#e8b84b', color: '#07111F', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 17, fontWeight: 700, cursor: 'pointer' }}
          >
            Calculate Quarterly Tax →
          </button>

          {result && (
            <div style={{ marginTop: 28 }}>
              {/* Summary */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
                {[
                  { label: 'Net Profit', value: fmt(result.netProfit) },
                  { label: 'SE Tax (15.3%)', value: fmt(result.seTax) },
                  { label: 'Federal Income Tax', value: fmt(result.federalTax) },
                  { label: 'Total Annual Tax', value: fmt(result.totalAnnual), highlight: true },
                ].map(({ label, value, highlight }) => (
                  <div key={label} style={{ background: '#07111F', border: `1px solid ${highlight ? '#e8b84b' : '#1e3a5f'}`, borderRadius: 8, padding: '14px 16px', textAlign: 'center' }}>
                    <div style={{ fontSize: 13, color: '#8a9bb0', marginBottom: 6 }}>{label}</div>
                    <div style={{ fontSize: 22, fontWeight: 800, color: highlight ? '#e8b84b' : '#C8D8EC' }}>{value}</div>
                  </div>
                ))}
              </div>

              {/* Quarterly breakdown */}
              <div style={{ background: '#07111F', border: '2px solid #e8b84b', borderRadius: 10, padding: '20px', marginBottom: 8 }}>
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <div style={{ fontSize: 14, color: '#8a9bb0' }}>Pay each quarter</div>
                  <div style={{ fontSize: 36, fontWeight: 900, color: '#e8b84b' }}>{fmt(result.perQuarter)}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {QUARTERS.map(q => (
                    <div key={q.label} style={{ background: '#0d1f35', borderRadius: 8, padding: '12px 14px' }}>
                      <div style={{ fontWeight: 700, color: '#e8b84b', fontSize: 15 }}>{q.label} — {fmt(result.perQuarter)}</div>
                      <div style={{ fontSize: 13, color: '#8a9bb0', marginTop: 4 }}>{q.period}</div>
                      <div style={{ fontSize: 13, color: '#C8D8EC', marginTop: 2 }}>Due: <strong>{q.due}</strong></div>
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: 13, color: '#6a7d91', textAlign: 'center', margin: 0 }}>
                Estimate based on 2026 tax brackets. Does not include state taxes.
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        <article>
          <section>
            <h2 style={{ fontSize: 22, color: '#e8b84b', marginBottom: 14 }}>When Are Quarterly Taxes Due in 2026?</h2>
            <div style={{ overflowX: 'auto', marginBottom: 24 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                <thead>
                  <tr style={{ background: '#0d1f35' }}>
                    {['Quarter', 'Income Period', 'Due Date', 'IRS Form'].map(h => (
                      <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: '#e8b84b', borderBottom: '1px solid #1e3a5f' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Q1 2026', 'Jan 1 – Mar 31', 'April 15, 2026', 'Form 1040-ES'],
                    ['Q2 2026', 'Apr 1 – May 31', 'June 16, 2026', 'Form 1040-ES'],
                    ['Q3 2026', 'Jun 1 – Aug 31', 'September 15, 2026', 'Form 1040-ES'],
                    ['Q4 2026', 'Sep 1 – Dec 31', 'January 15, 2027', 'Form 1040-ES'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #1e3a5f', background: i % 2 === 0 ? '#07111F' : '#0d1f35' }}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ padding: '12px 14px', color: '#C8D8EC' }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: 22, color: '#e8b84b', marginBottom: 14 }}>How to Calculate Quarterly Taxes Step by Step</h2>
            <ol style={{ lineHeight: 1.9, fontSize: 15, paddingLeft: 20 }}>
              <li><strong>Estimate annual net profit</strong> — gross gig income minus business expenses</li>
              <li><strong>Calculate SE tax</strong> — net profit × 92.35% × 15.3% (SS capped at $184,500)</li>
              <li><strong>Deduct half of SE tax</strong> from gross income</li>
              <li><strong>Subtract standard deduction</strong> ($16,100 single / $32,200 MFJ in 2026)</li>
              <li><strong>Apply federal tax brackets</strong> to the remaining taxable income</li>
              <li><strong>Divide total by 4</strong> — that's your quarterly payment</li>
            </ol>
            <p style={{ fontSize: 15, lineHeight: 1.7 }}>
              Pay via IRS Direct Pay at{' '}
              <a href="https://www.irs.gov/payments/direct-pay" rel="nofollow noopener" target="_blank" style={{ color: '#e8b84b' }}>
                irs.gov/payments/direct-pay
              </a>{' '}
              — free, no account required.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, color: '#e8b84b', marginBottom: 14 }}>What Happens If You Miss a Quarterly Payment?</h2>
            <p style={{ fontSize: 15, lineHeight: 1.7 }}>
              The IRS charges an underpayment penalty — currently around <strong>7–8% annualized</strong> on the shortfall. You avoid penalties if you pay at least 90% of your current-year tax OR 100% of last year's tax liability (110% if prior-year AGI exceeded $150,000). This is the <strong>safe harbor rule</strong>.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7 }}>
              See our <Link href="/safe-harbor-quarterly-taxes" style={{ color: '#e8b84b' }}>Safe Harbor Guide</Link> for the full calculation.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, color: '#e8b84b', marginBottom: 14 }}>Top Deductions to Reduce Your Quarterly Tax Bill</h2>
            <ul style={{ lineHeight: 1.9, fontSize: 15, paddingLeft: 20 }}>
              <li><strong>Mileage:</strong> 72.5¢/mile in 2026 (IRS rate) — track every business trip</li>
              <li><strong>Phone &amp; internet:</strong> business-use percentage</li>
              <li><strong>Home office:</strong> $5/sq ft up to 300 sq ft ($1,500 max)</li>
              <li><strong>Health insurance premiums</strong> — 100% deductible if self-employed</li>
              <li><strong>Retirement contributions:</strong> SEP-IRA up to 25% of net profit</li>
            </ul>
            <p style={{ fontSize: 15, lineHeight: 1.7 }}>
              See the full list: <Link href="/deductions" style={{ color: '#e8b84b' }}>Top 1099 Tax Deductions for Gig Workers</Link>
            </p>
          </section>
        </article>

        {/* FAQ */}
        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 22, color: '#e8b84b', marginBottom: 20 }}>Frequently Asked Questions</h2>
          {[
            {
              q: 'How much should I set aside for quarterly taxes as a gig worker?',
              a: 'Set aside 25–30% of every payment you receive. For most gig workers earning $30K–$80K, this covers both self-employment tax (15.3%) and federal income tax after deductions. Use this calculator to get your exact number.',
            },
            {
              q: 'Do I have to pay quarterly taxes if I also have a W-2 job?',
              a: 'Yes, if your 1099 gig income creates a tax liability of $1,000 or more after withholding from your W-2. You can also ask your employer to withhold extra from your W-2 paycheck to cover the gig income instead of making quarterly payments.',
            },
            {
              q: 'What is the self-employment tax rate for 2026?',
              a: 'The SE tax rate is 15.3% on 92.35% of your net profit — 12.4% for Social Security (on income up to $184,500) and 2.9% for Medicare. You can deduct half of the SE tax on your income tax return.',
            },
            {
              q: 'Can I pay quarterly taxes online?',
              a: 'Yes. Use IRS Direct Pay at irs.gov/payments, EFTPS (Electronic Federal Tax Payment System), or pay by debit/credit card. IRS Direct Pay is free. EFTPS requires registration but allows scheduling payments in advance.',
            },
            {
              q: 'What if my income varies each quarter?',
              a: "You can use the annualized income installment method (IRS Form 2210, Schedule AI) to base each quarter's payment on actual income earned that quarter, rather than dividing the annual estimate by 4. This avoids overpaying in slow quarters.",
            },
          ].map(({ q, a }) => (
            <details key={q} style={{ background: '#0d1f35', border: '1px solid #1e3a5f', borderRadius: 8, padding: '16px 20px', marginBottom: 10 }}>
              <summary style={{ fontWeight: 700, fontSize: 15, cursor: 'pointer', color: '#C8D8EC' }}>{q}</summary>
              <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.7, color: '#C8D8EC' }}>{a}</p>
            </details>
          ))}
        </section>

        {/* Related Articles */}
        <section style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid #1e3a5f' }}>
          <h2 style={{ fontSize: 18, color: '#e8b84b', marginBottom: 16 }}>Related Articles</h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              { href: '/safe-harbor-quarterly-taxes', title: 'Safe Harbor Rule — Avoid IRS Underpayment Penalties' },
              { href: '/quarterly-reminder', title: 'Quarterly Tax Deadline Reminders 2026' },
              { href: '/deductions', title: 'Top Tax Deductions for Gig Workers 2026' },
            ].map(({ href, title }) => (
              <Link key={href} href={href} style={{ background: '#0d1f35', border: '1px solid #1e3a5f', borderRadius: 8, padding: '14px 18px', color: '#e8b84b', textDecoration: 'none', fontSize: 15, display: 'block' }}>
                → {title}
              </Link>
            ))}
          </div>
        </section>

        <AuthorBox />

      </div>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Calculators","item":"https://www.gigwisetax.com/calculators"},{"@type":"ListItem","position":3,"name":"Quarterly Tax Calculator 2026","item":"https://www.gigwisetax.com/quarterly-tax-calculator-2026"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much should I set aside for quarterly taxes as a gig worker?","acceptedAnswer":{"@type":"Answer","text":"Set aside 25-30% of every payment you receive. For most gig workers earning $30K-$80K, this covers both self-employment tax (15.3%) and federal income tax after deductions."}},{"@type":"Question","name":"Do I have to pay quarterly taxes if I also have a W-2 job?","acceptedAnswer":{"@type":"Answer","text":"Yes, if your 1099 gig income creates a tax liability of $1,000 or more after withholding from your W-2. You can also ask your employer to withhold extra from your W-2 paycheck."}},{"@type":"Question","name":"What is the self-employment tax rate for 2026?","acceptedAnswer":{"@type":"Answer","text":"The SE tax rate is 15.3% on 92.35% of your net profit - 12.4% for Social Security (on income up to $184,500) and 2.9% for Medicare."}},{"@type":"Question","name":"Can I pay quarterly taxes online?","acceptedAnswer":{"@type":"Answer","text":"Yes. Use IRS Direct Pay at irs.gov/payments, EFTPS, or pay by debit/credit card. IRS Direct Pay is free."}},{"@type":"Question","name":"What if my income varies each quarter?","acceptedAnswer":{"@type":"Answer","text":"Use the annualized income installment method (IRS Form 2210, Schedule AI) to base each quarter payment on actual income earned that quarter."}}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Quarterly Tax Calculator 2026","description":"Calculate your 2026 quarterly estimated taxes for freelancers and gig workers.","datePublished":"2026-05-14","dateModified":"2026-05-14","author":{"@type":"Person","name":"Ethan Blake","url":"https://www.gigwisetax.com/about"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":"https://www.gigwisetax.com/quarterly-tax-calculator-2026"}' }} />
    </div>
  );
}
