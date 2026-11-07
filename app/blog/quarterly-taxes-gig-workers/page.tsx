import type { Metadata } from 'next'
import TaxFreshness from '@/app/components/TaxFreshness'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Quarterly Taxes for Gig Workers 2026: Deadlines & Amounts',
  description: 'Learn 2026 estimated-tax deadlines, safe-harbor basics, and how to plan payments. Examples are estimates; your amount depends on your full tax situation.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/quarterly-taxes-gig-workers' },
  openGraph: {
    title: 'Quarterly Taxes for Gig Workers 2026: Deadlines & Amounts',
    description: 'How much to pay each quarter, the 2026 due dates and how to estimate your payment.',
    url: 'https://www.gigwisetax.com/blog/quarterly-taxes-gig-workers',
    siteName: 'GigWiseTax',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quarterly Taxes for Gig Workers 2026: Deadlines & Amounts',
    description: 'How much to pay each quarter, the 2026 due dates and how to estimate your payment.',
    images: ['/og-image.png'],
  },
}

const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'When are quarterly estimated taxes due in 2026?', acceptedAnswer: { '@type': 'Answer', text: '2026 quarterly deadlines: Q1 — April 15, Q2 — June 15, Q3 — September 15, Q4 — January 15, 2027. Estimated payments may be required if you expect to owe at least $1,000 after withholding and refundable credits.' } },
    { '@type': 'Question', name: 'How much should a gig worker pay each quarter in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'For the stated single-filer example with $35,000 net profit, standard deduction, no other income, and no state tax, this model estimates about $1,667 per quarter. Actual payments depend on withholding, credits, other income, and deductions.' } },
    { '@type': 'Question', name: 'How do I pay quarterly estimated taxes?', acceptedAnswer: { '@type': 'Answer', text: 'Pay online at IRS Direct Pay (irs.gov/payments) — free, no account needed. Select Estimated Tax and tax year 2026. You can also use EFTPS for automatic scheduling.' } },
    { '@type': 'Question', name: 'What is the safe harbor rule for quarterly taxes?', acceptedAnswer: { '@type': 'Answer', text: 'Generally, the federal underpayment penalty can be avoided by paying enough through withholding and estimated payments to meet a safe harbor, commonly 90% of current-year tax or 100% of prior-year tax (110% for certain higher-income taxpayers). Exceptions and installment rules apply; consult IRS Form 1040-ES and Form 2210.' } },
    { '@type': 'Question', name: 'What happens if I miss a quarterly tax deadline?', acceptedAnswer: { '@type': 'Answer', text: 'An underpayment charge may apply based on the unpaid installment, how late it is, and the applicable IRS interest rate for that period. The 7% rate applies to Q4 2026; it is not a fixed 7% penalty on the full balance.' } },
    { '@type': 'Question', name: 'Do I owe quarterly taxes if I made less than $400?', acceptedAnswer: { '@type': 'Answer', text: 'Net self-employment earnings of $400 or more generally trigger a self-employment tax filing requirement. The separate estimated-tax payment requirement depends on expected tax after withholding and credits.' } },
    { '@type': 'Question', name: 'Can I deduct mileage to reduce my quarterly payment?', acceptedAnswer: { '@type': 'Answer', text: 'The 2026 IRS business mileage rates are 72.5 cents per mile for January–June and 76 cents for July–December. Mileage deductions reduce business profit; the effect on total tax depends on the taxpayer’s full return.' } },
  ],
})

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Quarterly Taxes for Gig Workers 2026","item":"https://www.gigwisetax.com/blog/quarterly-taxes-gig-workers"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Quarterly Taxes for Gig Workers 2026: Deadlines, Amounts & How to Pay","datePublished":"2026-01-01","dateModified":"2026-11-07","author":{"@type":"Organization","name":"the GigWiseTax Team","url":"https://www.gigwisetax.com"},"reviewedBy":{"@type":"Organization","name":"the GigWiseTax Team","url":"https://www.gigwisetax.com"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/quarterly-taxes-gig-workers"}}'

export default function QuarterlyTaxesGuide() {
  return (
    <>
      
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
            <span> › </span>
            <a href="/blog" style={{color:'rgba(255,255,255,0.45)', textDecoration:'none'}}>Blog</a>
            <span> › </span>
            <span style={{color:'rgba(255,255,255,0.65)'}}>Quarterly Taxes 2026</span>
          </nav>

          <h1 style={{fontSize:'clamp(22px,5vw,24px)', fontWeight:900, color:'#C8D8EC', lineHeight:1.3, marginBottom:12}}>
            Quarterly Taxes for Gig Workers 2026: Deadlines, Amounts and How to Pay
          </h1>

          <div style={{fontSize:12, color:'rgba(255,255,255,0.45)', marginBottom:20, display:'flex', gap:12, flexWrap:'wrap'}}>
            <span>Last updated: November 7, 2026</span>
            <span>·</span>
            <span>By the GigWiseTax Team</span>
            <span>·</span>
            <span>{'~9 min read · 2,300 words'}</span>
          </div>
        <section id="answer">
          <p style={{ margin: '0 0 24px', fontSize: 15, lineHeight: 1.75, color: '#C8D8EC' }}>
            Gig workers who expect to owe at least $1,000 in federal tax after withholding and refundable credits generally need to make estimated payments. For the stated $35,000 single-filer example, this model estimates about $1,667 per quarter. An underpayment charge depends on each installment, timing, and the applicable IRS rate; 7% is the rate for Q4 2026, not a fixed penalty on the full balance.
          </p>
        </section>
        <section id="key-takeaways">
          <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '20px 24px', marginBottom: 32 }}>
            <h2 style={{ fontSize: 'clamp(16px,3vw,18px)', fontWeight: 700, color: '#e8b84b', marginTop: 0, marginBottom: 12 }}>Key Takeaways</h2>
            <ul style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 1.9, fontSize: 14, color: '#C8D8EC' }}>
          <li>Estimated payments may be required when expected federal tax due after withholding and refundable credits is at least $1,000</li>
          <li>$35K gig income = $6,669 total tax (SE + federal) = $1,667 per quarter</li>
          <li>Due dates: April 15 / June 15 / September 15 / January 15</li>
          <li>Safe harbor generally uses 90% of current-year tax or 100% of prior-year tax (110% for certain higher-income taxpayers); installment rules apply</li>
          <li>State estimated taxes also due on the same dates in most states</li>
            </ul>
          </div>
        </section>
        </header>

        {/* ANSWER-FIRST */}
        <div style={{background:'rgba(232,184,75,0.07)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
          <p style={{margin:0, fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.9)'}}>
            {'For the stated example (single filer, $35,000 net profit, standard deduction, no other income or state tax), this model estimates about $6,669 for the year, or $1,667 per quarter. Federal estimated-tax deadlines are April 15, June 15, September 15, and January 15, 2027. A late or insufficient installment may incur an underpayment charge based on the amount and timing; 7% is the IRS rate for Q4 2026, not a fixed penalty.'}
          </p>
        </div>

        {/* KEY TAKEAWAYS */}
        <div style={{background:'rgba(232,184,75,0.08)', border:'1px solid rgba(232,184,75,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#e8b84b', marginBottom:10, fontSize:13}}>KEY TAKEAWAYS</div>
          <ul style={{margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Estimated payments may be required if you expect to owe at least $1,000 after withholding and refundable credits'}</li>
            <li>{'On $35,000 net gig income: $6,669 total tax = $1,667 per quarter'}</li>
            <li>{'2026 deadlines: April 15 · June 15 · September 15 · January 15, 2027'}</li>
            <li>{'Safe harbor generally uses 90% of current-year tax or 100% of prior-year tax (110% for certain higher-income taxpayers); conditions apply'}</li>
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
            {'The IRS splits the year into four payment periods. Each has a firm due date. Q1 covers January through March income — due April 15. Q2 covers April and May — due June 15. Q3 covers June through August — due September 15. Q4 covers September through December — due January 15, 2027.'}
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
                  {q:'Q1 2026', period:'Jan 1 – Mar 31', due:'April 15, 2026', amt:'$1,667'},
                  {q:'Q2 2026', period:'Apr 1 – May 31', due:'June 15, 2026', amt:'$1,667'},
                  {q:'Q3 2026', period:'Jun 1 – Aug 31', due:'September 15, 2026', amt:'$1,667'},
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
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700}}>$1,667</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'Use our free '}
            <a href="/1099-tax-calculator-2026" style={{color:'#e8b84b'}}>1099 tax calculator</a>
            {' to estimate your quarterly amount based on your platform and state.'}
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
                  {inc:'$20,000', se:'$2,826', fed:'$249', q:'$769'},
                  {inc:'$25,000', se:'$3,532', fed:'$713', q:'$1,061'},
                  {inc:'$30,000', se:'$4,239', fed:'$1,178', q:'$1,354'},
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
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700}}>{'$1,723'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700}}>{'$1,667'}</td>
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
            {'Meeting an applicable federal safe harbor generally avoids the underpayment penalty, but exceptions and installment rules apply. Common thresholds are:'}
          </p>
          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Pay at least 90% of current-year tax through withholding and timely estimated installments'}</li>
            <li>{'Or pay 100% of prior-year tax; this generally rises to 110% if prior-year AGI was over $150,000 ($75,000 if married filing separately)'}</li>
            <li>{'The $1,000 test and safe-harbor calculations account for withholding and credits; special rules may apply'}</li>
            <li>{'If income is uneven during the year, the annualized income installment method may affect the required payment schedule'}</li>
          </ul>

          <blockquote style={{borderLeft:'3px solid rgba(232,184,75,0.4)', paddingLeft:16, margin:'20px 0', fontStyle:'italic', color:'rgba(255,255,255,0.7)', fontSize:14, lineHeight:1.8}}>
            {'Individuals generally need estimated tax payments if they expect to owe at least $1,000 after withholding and refundable credits.'}
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
            {'Deductions reduce net self-employment income before SE tax is calculated. In a simplified example below the Social Security wage limit, 10,000 business miles driven in one rate period produce a $7,250 or $7,600 deduction and reduce the SE-tax component by roughly $1,024 or $1,074 for the year. That is about $256–$269 per quarter on average for the SE-tax component only; federal income-tax effects and individual limits are separate.'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Mileage: 72.5 cents per mile (January–June; 76 cents from July 1) for all business-related driving in 2026'}</li>
            <li>{'Phone: 50-80% of your monthly bill if used for gig work'}</li>
            <li>{'Health insurance: 100% deductible if you are self-employed with no employer coverage'}</li>
            <li>{'Home office: $5 per square foot (simplified), max 300 sq ft = $1,500 deduction'}</li>
            <li>{'SE tax deduction: deduct 50% of SE tax paid — reduces federal income tax automatically'}</li>
          </ul>

          {/* INFORMATION GAIN */}
          <div style={{background:'rgba(232,184,75,0.05)', border:'1px solid rgba(232,184,75,0.15)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
            <div style={{fontWeight:800, color:'#e8b84b', marginBottom:8, fontSize:13}}>Worked example — 2026</div>
            <p style={{margin:0, fontSize:14, color:'rgba(255,255,255,0.8)', lineHeight:1.8}}>
              {'Illustrative example (single filer, standard deduction, no state tax, no QBI): a DoorDash driver with $40,000 gross and 12,000 business miles, half driven before July 1 at 72.5¢ and half after at 76¢, has a mileage deduction of $8,910 and net income of $31,090. Estimated federal plus self-employment tax falls from $7,933 to $5,680, and the quarterly payment from $1,983 to $1,420 — about $563 less per quarter, or roughly $2,250 per year. Your numbers will differ.'}
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
              a:'Q1: April 15. Q2: June 15. Q3: September 15. Q4: January 15, 2027. Pay via IRS Direct Pay at irs.gov/payments — free and instant.'
            },
            {
              q:'How much does a gig worker on $35,000 pay per quarter?',
              a:'For the stated example (single filer, $35,000 net profit, standard deduction, no other income or state tax), this model estimates about $1,667 per quarter — $4,945 in SE tax plus $1,723 federal income tax ($6,669 total). Actual payments depend on your full return.'
            },
            {
              q:'What is the safe harbor rule for quarterly taxes?',
              a:'A common safe harbor is 90% of current-year tax or 100% of prior-year tax (110% if prior-year AGI was over $150,000, or $75,000 if married filing separately), paid through withholding and estimated installments. The $1,000 test, installment rules, and exceptions apply.'
            },
            {
              q:'What happens if I miss a quarterly tax deadline?',
              a:'An underpayment charge may apply based on the unpaid installment and how long it remained unpaid, using the IRS rate applicable to the period. The 7% rate applies to Q4 2026; it is not a fixed 7% penalty on the full balance.'
            },
            {
              q:'Can I deduct mileage to reduce my quarterly payment?',
              a:'The 2026 IRS business mileage rates are 72.5 cents per mile for January–June and 76 cents for July–December. Mileage deductions reduce business profit; calculate miles in each period separately. The total tax effect depends on your full return.'
            },
            {
              q:'Do I pay quarterly taxes if I earned less than $400?',
              a:'Net self-employment earnings below $400 generally do not trigger a self-employment tax filing requirement by themselves. Estimated-tax payments can still be required based on other income and your expected tax after withholding and credits.'
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

        <TaxFreshness />
<AuthorBox />

      </article>
    </>
  )
}
