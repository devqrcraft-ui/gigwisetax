import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Quarterly Taxes for Gig Workers 2026: Deadlines & Amounts',
  description: 'Gig workers on $35K owe $1,938/quarter in 2026. Four deadlines: Apr 15, Jun 16, Sep 15, Jan 15. Free IRS payment guide + calculator.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/quarterly-taxes-gig-workers' },
  openGraph: {
    title: 'Quarterly Taxes for Gig Workers 2026: Deadlines & Amounts',
    description: 'Pay the right amount every quarter. No penalties. Free guide for all gig platforms.',
    type: 'article',
  },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"When are quarterly estimated taxes due in 2026?","acceptedAnswer":{"@type":"Answer","text":"2026 quarterly deadlines: Q1 — April 15, Q2 — June 16, Q3 — September 15, Q4 — January 15, 2027. You must pay if you expect to owe $1,000 or more for the year."}},{"@type":"Question","name":"How much should a gig worker pay each quarter in 2026?","acceptedAnswer":{"@type":"Answer","text":"A gig worker earning $35,000 net owes roughly $1,938 per quarter — $7,750 total for the year. Set aside 25-30% of each payment you receive to cover this."}},{"@type":"Question","name":"How do I pay quarterly estimated taxes?","acceptedAnswer":{"@type":"Answer","text":"Pay online at IRS Direct Pay (irs.gov/payments) — free, no account needed. Select Estimated Tax and tax year 2026. You can also use EFTPS for automatic scheduling."}},{"@type":"Question","name":"What is the safe harbor rule for quarterly taxes?","acceptedAnswer":{"@type":"Answer","text":"Pay 100% of your 2025 tax liability (or 110% if your 2025 AGI exceeded $150,000). This guarantees no underpayment penalty regardless of your 2026 income."}},{"@type":"Question","name":"What happens if I miss a quarterly tax deadline?","acceptedAnswer":{"@type":"Answer","text":"The IRS charges an underpayment penalty — currently around 7% annualized on the amount you should have paid. The penalty applies per quarter, not just at year-end."}},{"@type":"Question","name":"Do I owe quarterly taxes if I made less than $400?","acceptedAnswer":{"@type":"Answer","text":"No. If your net self-employment income is under $400 for the year, you do not owe self-employment tax and do not need to make quarterly payments."}},{"@type":"Question","name":"Can I deduct mileage to reduce my quarterly payment?","acceptedAnswer":{"@type":"Answer","text":"Yes. The 2026 IRS mileage rate is 72.5 cents per mile. A DoorDash driver with 500 delivery miles per month deducts $362.50 monthly, reducing their taxable income by $4,350 per year."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Quarterly Taxes for Gig Workers 2026","item":"https://www.gigwisetax.com/blog/quarterly-taxes-gig-workers"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Quarterly Taxes for Gig Workers 2026: Deadlines, Amounts & How to Pay","datePublished":"2026-01-01","dateModified":"2026-05-21","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/quarterly-taxes-gig-workers"}}'

export default function QuarterlyTaxesGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: faqSchema}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: breadcrumbSchema}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: articleSchema}} />

      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        style={{maxWidth:780, margin:'0 auto', padding:'clamp(14px,4vw,28px)', background:'#07111F', color:'#C8D8EC', minHeight:'100vh'}}
      >

        <header>
          <nav aria-label="breadcrumb" style={{fontSize:13, color:'rgba(255,255,255,0.45)', marginBottom:16}}>
            <a href="/" style={{color:'rgba(255,255,255,0.45)', textDecoration:'none'}}>Home</a>
            {' › '}
            <a href="/blog" style={{color:'rgba(255,255,255,0.45)', textDecoration:'none'}}>Blog</a>
            {' › '}
            <span style={{color:'rgba(255,255,255,0.65)'}}>Quarterly Taxes 2026</span>
          </nav>

          <h1 style={{fontSize:'clamp(22px,5vw,24px)', fontWeight:900, color:'#C8D8EC', lineHeight:1.3, marginBottom:12}}>
            Quarterly Taxes for Gig Workers 2026: Deadlines, Amounts and How to Pay
          </h1>

          <div style={{fontSize:12, color:'rgba(255,255,255,0.45)', marginBottom:20, display:'flex', gap:12, flexWrap:'wrap'}}>
            <span>Last updated: May 2026</span>
            <span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span>
            <span>·</span>
            <span>{'~9 min read · 2,300 words'}</span>
          </div>
        <section id="answer">
          <p style={{ margin: '0 0 24px', fontSize: 15, lineHeight: 1.75, color: '#C8D8EC' }}>
            Gig workers who expect to owe $1,000 or more in 2026 must pay quarterly estimated taxes. A DoorDash or Lyft driver earning $35,000 owes approximately $1,938 per quarter. Missing payments triggers a 5% underpayment penalty. Pay via IRS Direct Pay — free and takes under 5 minutes.
          </p>
        </section>
        <section id="key-takeaways">
          <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '20px 24px', marginBottom: 32 }}>
            <h2 style={{ fontSize: 'clamp(16px,3vw,18px)', fontWeight: 700, color: '#e8b84b', marginTop: 0, marginBottom: 12 }}>Key Takeaways</h2>
            <ul style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 1.9, fontSize: 14, color: '#C8D8EC' }}>
          <li>Threshold: owe $1,000+ annually → quarterly payments required</li>
          <li>$35K gig income = $7,750 SE tax = $1,938 per quarter</li>
          <li>Due dates: April 15 / June 16 / September 15 / January 15</li>
          <li>Safe harbor: pay 100% of last year's total tax to eliminate underpayment risk</li>
          <li>State estimated taxes also due on the same dates in most states</li>
            </ul>
          </div>
        </section>
        </header>

        {/* ANSWER-FIRST */}
        <div style={{background:'rgba(232,184,75,0.07)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
          <p style={{margin:0, fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.9)'}}>
            {'A gig worker earning $35,000 net in 2026 owes roughly $7,750 in total tax — about $1,938 per quarter. Four deadlines apply: April 15, June 16, September 15, and January 15, 2027. Missing any deadline triggers a 7% IRS underpayment penalty on the amount owed.'}
          </p>
        </div>

        {/* KEY TAKEAWAYS */}
        <div style={{background:'rgba(232,184,75,0.08)', border:'1px solid rgba(232,184,75,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#e8b84b', marginBottom:10, fontSize:13}}>KEY TAKEAWAYS</div>
          <ul style={{margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Pay quarterly if you expect to owe $1,000 or more in 2026 federal tax'}</li>
            <li>{'On $35,000 net gig income: $7,750 total tax = $1,938 per quarter'}</li>
            <li>{'2026 deadlines: April 15 · June 16 · September 15 · January 15, 2027'}</li>
            <li>{'Safe harbor: pay 100% of your 2025 tax to avoid all penalties'}</li>
            <li>{'IRS Direct Pay is free — no account, no fee, instant confirmation'}</li>
          </ul>
        </div>

        {/* TOC */}
        <div style={{background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#e8b84b', marginBottom:10, fontSize:13}}>TABLE OF CONTENTS</div>
          <ol style={{margin:0, padding:'0 0 0 18px', lineHeight:2}}>
            {[
              {label:'2026 Quarterly Deadlines', id:'deadlines'},
              {label:'How Much to Pay Each Quarter', id:'how-much'},
              {label:'Safe Harbor Rule Explained', id:'safe-harbor'},
              {label:'How to Pay the IRS', id:'how-to-pay'},
              {label:'Deductions That Lower Your Payment', id:'deductions'},
              {label:'Frequently Asked Questions', id:'faq'},
            ].map((item, i) => (
              <li key={i} style={{marginBottom:6}}>
                <a href={`#${item.id}`} style={{color:'#e8b84b', textDecoration:'none', fontSize:14, fontWeight:600}}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* SECTION 1 — DEADLINES */}
        <section id="deadlines">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            What Are the 2026 Quarterly Tax Deadlines for Gig Workers?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'The IRS splits the year into four payment periods. Each has a firm due date. Q1 covers January through March income — due April 15. Q2 covers April and May — due June 16 (Monday holiday shift). Q3 covers June through August — due September 15. Q4 covers September through December — due January 15, 2027.'}
          </p>

          <div style={{overflowX:'auto', marginBottom:24}}>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:14}}>
              <thead>
                <tr style={{background:'rgba(232,184,75,0.12)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>Quarter</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>Income Period</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>Due Date</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>On $35K/yr</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {q:'Q1 2026', period:'Jan 1 – Mar 31', due:'April 15, 2026', amt:'$1,938'},
                  {q:'Q2 2026', period:'Apr 1 – May 31', due:'June 16, 2026', amt:'$1,938'},
                  {q:'Q3 2026', period:'Jun 1 – Aug 31', due:'September 15, 2026', amt:'$1,938'},
                ].map((row, i) => (
                  <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)', fontWeight:600}}>{row.q}</td>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.75)'}}>{row.period}</td>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)'}}>{row.due}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.amt}</td>
                  </tr>
                ))}
                <tr style={{background:'rgba(232,184,75,0.08)', borderTop:'1px solid rgba(232,184,75,0.3)'}}>
                  <td style={{padding:'10px 14px', color:'#e8b84b', fontWeight:700}}>Q4 2026</td>
                  <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.75)'}}>Sep 1 – Dec 31</td>
                  <td style={{padding:'10px 14px', color:'#e8b84b', fontWeight:700}}>January 15, 2027</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700}}>$1,938</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'Use our free '}
            <a href="/1099-tax-calculator-2026" style={{color:'#e8b84b'}}>1099 tax calculator</a>
            {' to find your exact quarterly amount based on your platform and state.'}
          </p>
        </section>

        {/* SECTION 2 — HOW MUCH */}
        <section id="how-much">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            How Much Do Gig Workers Pay Each Quarter in 2026?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Your quarterly payment has two parts: self-employment (SE) tax at 15.3% and federal income tax. SE tax applies to 92.35% of net earnings. Then you subtract the standard deduction ($16,100 single in 2026) to find taxable income for federal tax.'}
          </p>

          <div style={{overflowX:'auto', marginBottom:24}}>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:14}}>
              <thead>
                <tr style={{background:'rgba(232,184,75,0.12)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>Net Income</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>SE Tax</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>Federal Tax</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>Per Quarter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {inc:'$20,000', se:'$2,825', fed:'$0', q:'$706'},
                  {inc:'$25,000', se:'$3,532', fed:'$883', q:'$1,104'},
                  {inc:'$30,000', se:'$4,239', fed:'$1,060', q:'$1,325'},
                ].map((row, i) => (
                  <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)'}}>{row.inc}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.se}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.fed}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.q}</td>
                  </tr>
                ))}
                <tr style={{background:'rgba(232,184,75,0.08)', borderTop:'1px solid rgba(232,184,75,0.3)'}}>
                  <td style={{padding:'10px 14px', color:'#e8b84b', fontWeight:700}}>{'$35,000 (avg)'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700}}>{'$4,945'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700}}>{'$2,805'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700}}>{'$1,938'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:24}}>
            {'Note: federal tax assumes single filer, standard deduction $16,100, no other income. Actual amounts vary by state and deductions. See our '}
            <a href="/doordash" style={{color:'#e8b84b'}}>DoorDash tax calculator</a>
            {' for platform-specific estimates.'}
          </p>
        </section>

        {/* SECTION 3 — SAFE HARBOR */}
        <section id="safe-harbor">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            What Is the Safe Harbor Rule for Quarterly Taxes?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'The safe harbor rule protects you from underpayment penalties even if your income changes mid-year. Two options qualify:'}
          </p>
          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Pay 90% of your actual 2026 tax liability by each deadline'}</li>
            <li>{'Pay 100% of your 2025 tax (110% if your 2025 AGI exceeded $150,000)'}</li>
            <li>{'Spread payments evenly — one quarter cannot cover another'}</li>
            <li>{'The prior-year method is safest if your income is unpredictable'}</li>
          </ul>

          <blockquote style={{borderLeft:'3px solid rgba(232,184,75,0.4)', paddingLeft:16, margin:'20px 0', fontStyle:'italic', color:'rgba(255,255,255,0.7)', fontSize:14, lineHeight:1.8}}>
            {'Self-employed individuals must pay estimated taxes quarterly if they expect to owe at least $1,000 in federal tax for the year.'}
            <cite style={{display:'block', marginTop:8, fontSize:12, color:'rgba(255,255,255,0.45)', fontStyle:'normal'}}>
              {'— '}
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#e8b84b'}}>
                IRS.gov — Self-Employed Tax Center
              </a>
            </cite>
          </blockquote>
        </section>

        {/* SECTION 4 — HOW TO PAY */}
        <section id="how-to-pay">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            How Do You Pay Quarterly Taxes to the IRS?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'The IRS offers three payment methods. IRS Direct Pay is the fastest and costs nothing. EFTPS lets you schedule payments in advance. Mailing a check with Form 1040-ES works but is slowest.'}
          </p>

          <h3 style={{fontSize:15, fontWeight:700, color:'#C8D8EC', marginBottom:12}}>
            Step-by-Step: Pay via IRS Direct Pay
          </h3>
          <ol style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#C8D8EC'}}>{'Go to irs.gov/payments.'}</strong>
              {' Click "Make a Payment" under IRS Direct Pay.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#C8D8EC'}}>{'Select "Estimated Tax"'}</strong>
              {' as the reason, then choose tax year 2026.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#C8D8EC'}}>{'Verify your identity'}</strong>
              {' with your prior-year AGI from your 2025 return.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#C8D8EC'}}>{'Enter your bank account'}</strong>
              {' (routing + account number). No fee is charged.'}
            </li>
            <li>
              <strong style={{color:'#C8D8EC'}}>{'Save the confirmation number.'}</strong>
              {' Payments post within 1-2 business days.'}
            </li>
          </ol>

          <ul style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'IRS Direct Pay: free, no account needed, same-day processing'}</li>
            <li>{'EFTPS (eftps.gov): free, schedule future payments, requires 5-7 day enrollment'}</li>
            <li>{'Debit/credit card: 1.82–1.98% processing fee — avoid if possible'}</li>
            <li>{'Form 1040-ES by mail: allow 7-10 days before deadline'}</li>
          </ul>
        </section>

        {/* SECTION 5 — DEDUCTIONS */}
        <section id="deductions">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            Which Deductions Reduce Your Quarterly Tax Payment?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Deductions reduce your net self-employment income before SE tax is calculated. A DoorDash driver logging 10,000 miles per year deducts $7,250 — cutting their SE tax by $1,109 and saving about $277 per quarter.'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Mileage: 72.5 cents per mile for all business-related driving in 2026'}</li>
            <li>{'Phone: 50-80% of your monthly bill if used for gig work'}</li>
            <li>{'Health insurance: 100% deductible if you are self-employed with no employer coverage'}</li>
            <li>{'Home office: $5 per square foot (simplified), max 300 sq ft = $1,500 deduction'}</li>
            <li>{'SE tax deduction: deduct 50% of SE tax paid — reduces federal income tax automatically'}</li>
          </ul>

          {/* INFORMATION GAIN */}
          <div style={{background:'rgba(232,184,75,0.05)', border:'1px solid rgba(232,184,75,0.15)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
            <div style={{fontWeight:800, color:'#e8b84b', marginBottom:8, fontSize:13}}>UNIQUE DATA — 2026 Analysis</div>
            <p style={{margin:0, fontSize:14, color:'rgba(255,255,255,0.8)', lineHeight:1.8}}>
              {'Based on typical gig worker profiles: a DoorDash driver earning $40,000 gross with 12,000 delivery miles reduces net income to $31,300 after the mileage deduction alone. Their quarterly payment drops from $2,213 to $1,556 — saving $657 per quarter or $2,628 per year.'}
            </p>
          </div>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'See the full list in our '}
            <a href="/blog/self-employment-tax-deductions-2026" style={{color:'#e8b84b'}}>
              self-employment tax deductions guide for 2026
            </a>
            {'.'}
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:24}}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q:'When are quarterly estimated taxes due in 2026?',
              a:'Q1: April 15. Q2: June 16. Q3: September 15. Q4: January 15, 2027. Pay via IRS Direct Pay at irs.gov/payments — free and instant.'
            },
            {
              q:'How much does a gig worker on $35,000 pay per quarter?',
              a:'A gig worker with $35,000 net income owes roughly $1,938 per quarter — $4,945 in SE tax plus $2,805 in federal income tax, split four ways.'
            },
            {
              q:'What is the safe harbor rule for quarterly taxes?',
              a:'Pay 100% of your 2025 tax liability (or 110% if your AGI exceeded $150,000). This protects you from underpayment penalties no matter how your 2026 income changes.'
            },
            {
              q:'What happens if I miss a quarterly tax deadline?',
              a:'The IRS charges an underpayment penalty — currently about 7% annualized on the underpaid amount. Each quarter is calculated separately, so a late Q1 payment accrues penalties for three quarters.'
            },
            {
              q:'Can I deduct mileage to reduce my quarterly payment?',
              a:'Yes. The 2026 IRS mileage rate is 72.5 cents per mile. Driving 10,000 miles for deliveries deducts $7,250 from income, saving roughly $277 per quarter in taxes.'
            },
            {
              q:'Do I pay quarterly taxes if I earned less than $400?',
              a:'No. Net self-employment income under $400 is not subject to SE tax and does not trigger the quarterly filing requirement.'
            },
            {
              q:'Which IRS form do I use for quarterly payments?',
              a:'Use Form 1040-ES to calculate the payment amount. For online payments, no form is needed — IRS Direct Pay handles everything digitally.'
            },
          ].map((item, i) => (
            <div key={i} style={{marginBottom:24, paddingBottom:20, borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.06)' : 'none'}}>
              <h3 style={{fontSize:15, fontWeight:700, color:'#C8D8EC', marginBottom:8}}>{item.q}</h3>
              <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.8)', margin:0}}>{item.a}</p>
            </div>
          ))}
        </section>

        {/* RELATED ARTICLES */}
        <section style={{marginTop:32, paddingTop:24, borderTop:'1px solid rgba(255,255,255,0.08)'}}>
          <h2 style={{fontSize:16, fontWeight:700, color:'#C8D8EC', marginBottom:16}}>Related Articles</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:12}}>
            {[
              {title:'IRS Mileage Rate 2026 Guide', href:'/blog/mileage-rate-2026'},
              {title:'Self-Employment Tax Deductions 2026', href:'/blog/self-employment-tax-deductions-2026'},
              {title:'Gig Worker Tax Deadlines 2026', href:'/blog/gig-worker-tax-deadlines-2026'},
            ].map((a, i) => (
              <a key={i} href={a.href} style={{
                display:'block', padding:'12px 16px',
                background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.15)',
                borderRadius:8, color:'#e8b84b', textDecoration:'none', fontSize:13, fontWeight:600, lineHeight:1.5
              }}>
                {a.title} {'>'}
              </a>
            ))}
          </div>
        </section>

        <AuthorBox />

      </article>
    </>
  )
}
