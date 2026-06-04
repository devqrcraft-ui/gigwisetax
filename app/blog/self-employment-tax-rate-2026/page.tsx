import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'Self-Employment Tax Rate 2026: 15.3% Explained + Calculator',
  description: 'Self-employment tax rate is 15.3% in 2026. On $40K net income you owe $5,650. How SE tax works, who pays it, and how to reduce it. Free calculator.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/self-employment-tax-rate-2026' },
  openGraph: {
    title: 'Self-Employment Tax Rate 2026: 15.3% Explained',
    description: 'On $40K net income you owe $5,650 in SE tax. Learn how to calculate and reduce it.',
    type: 'article',
  },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the self-employment tax rate in 2026?","acceptedAnswer":{"@type":"Answer","text":"The self-employment tax rate is 15.3% in 2026 — 12.4% for Social Security (on income up to $184,500) plus 2.9% for Medicare. On $40,000 net income, SE tax is $5,650."}},{"@type":"Question","name":"Who has to pay self-employment tax in 2026?","acceptedAnswer":{"@type":"Answer","text":"Anyone with $400 or more in net self-employment income must pay SE tax. This includes gig workers on DoorDash, Uber, Etsy, Airbnb, Fiverr, and any other 1099 platform."}},{"@type":"Question","name":"How is self-employment tax calculated?","acceptedAnswer":{"@type":"Answer","text":"Multiply your net earnings by 92.35% (this adjusts for the employer-half deduction), then multiply by 15.3%. Example: $40,000 x 0.9235 x 0.153 = $5,650."}},{"@type":"Question","name":"Can I deduct self-employment tax?","acceptedAnswer":{"@type":"Answer","text":"Yes. You can deduct 50% of SE tax paid as an adjustment to income on Schedule 1, Line 15. On $5,650 in SE tax, you deduct $2,825 — reducing your federal income tax."}},{"@type":"Question","name":"What is the Social Security wage base for 2026?","acceptedAnswer":{"@type":"Answer","text":"The Social Security wage base is $184,500 in 2026. The 12.4% SS portion applies only up to this limit. Above $184,500, only the 2.9% Medicare tax continues with no cap."}},{"@type":"Question","name":"Does self-employment tax apply to all income?","acceptedAnswer":{"@type":"Answer","text":"SE tax applies to 92.35% of your net self-employment earnings — not 100%. This 92.35% factor accounts for the employer-equivalent portion you are allowed to deduct."}},{"@type":"Question","name":"How do I reduce my self-employment tax in 2026?","acceptedAnswer":{"@type":"Answer","text":"Track all deductible expenses — especially mileage at 72.5 cents per mile. Deductions reduce net income before SE tax is calculated. On $5,000 in deductions, SE tax drops by about $707."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Self-Employment Tax Rate 2026","item":"https://www.gigwisetax.com/blog/self-employment-tax-rate-2026"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Self-Employment Tax Rate 2026: 15.3% Explained + How to Reduce It","datePublished":"2026-05-21","dateModified":"2026-05-21","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/self-employment-tax-rate-2026"}}'

export default function SelfEmploymentTaxRate2026() {
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
            <span style={{color:'rgba(255,255,255,0.65)'}}>Self-Employment Tax Rate 2026</span>
          </nav>

          <h1 style={{fontSize:'clamp(22px,5vw,24px)', fontWeight:900, color:'#C8D8EC', lineHeight:1.3, marginBottom:12}}>
            Self-Employment Tax Rate 2026: 15.3% Explained, Calculated and Reduced
          </h1>

          <div style={{fontSize:12, color:'rgba(255,255,255,0.45)', marginBottom:20, display:'flex', gap:12, flexWrap:'wrap'}}>
            <span>Last updated: May 2026</span>
            <span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span>
            <span>·</span>
            <span>{'~8 min read · 2,000 words'}</span>
          </div>
        <section id="answer">
          <p style={{ margin: '0 0 24px', fontSize: 15, lineHeight: 1.75, color: '#C8D8EC' }}>
            The self-employment tax rate in 2026 is 15.3% — 12.4% for Social Security on income up to $184,500, and 2.9% for Medicare with no cap. SE tax applies to 92.35% of net profit, not gross income. On $50,000 net profit, SE tax is $11,565. You deduct half ($5,783) from gross income before calculating federal income tax.
          </p>
        </section>
        <section id="key-takeaways">
          <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '20px 24px', marginBottom: 32 }}>
            <h2 style={{ fontSize: 'clamp(16px,3vw,18px)', fontWeight: 700, color: '#e8b84b', marginTop: 0, marginBottom: 12 }}>Key Takeaways</h2>
            <ul style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 1.9, fontSize: 14, color: '#C8D8EC' }}>
          <li>SE tax rate: 15.3% total — 12.4% SS + 2.9% Medicare</li>
          <li>SS wage base: $184,500 in 2026 — income above this cap pays only 2.9% Medicare</li>
          <li>SE tax applies to 92.35% of net profit — not your gross earnings</li>
          <li>Deduct half of SE tax on Schedule 1 Line 15 — reduces federal income tax</li>
          <li>$50K net profit = $11,565 SE tax | $35K = $7,750 | $40K = $8,852</li>
            </ul>
          </div>
        </section>
        </header>

        {/* ANSWER-FIRST */}
        <div style={{background:'rgba(232,184,75,0.07)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
          <p style={{margin:0, fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.9)'}}>
            {'The self-employment tax rate in 2026 is 15.3% — 12.4% Social Security plus 2.9% Medicare. On $40,000 net gig income, SE tax is $5,650. You pay this on top of federal income tax. Every DoorDash, Uber, Etsy, and Airbnb worker earning $400+ per year owes it.'}
          </p>
        </div>

        {/* KEY TAKEAWAYS */}
        <div style={{background:'rgba(232,184,75,0.08)', border:'1px solid rgba(232,184,75,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#e8b84b', marginBottom:10, fontSize:13}}>KEY TAKEAWAYS</div>
          <ul style={{margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'SE tax rate is 15.3% — applies to 92.35% of net self-employment income'}</li>
            <li>{'On $40,000 net income: $5,650 in SE tax owed in 2026'}</li>
            <li>{'Social Security portion (12.4%) caps at the $184,500 wage base in 2026'}</li>
            <li>{'Deduct 50% of SE tax paid — reduces your federal income tax automatically'}</li>
            <li>{'Every $1,000 in deductions saves roughly $141 in SE tax'}</li>
          </ul>
        </div>

        {/* TOC */}
        <div style={{background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#e8b84b', marginBottom:10, fontSize:13}}>TABLE OF CONTENTS</div>
          <ol style={{margin:0, padding:'0 0 0 18px', lineHeight:2}}>
            {[
              {label:'What Is Self-Employment Tax?', id:'what-is-se-tax'},
              {label:'How to Calculate SE Tax in 2026', id:'calculate'},
              {label:'SE Tax by Income Level', id:'by-income'},
              {label:'How to Deduct and Reduce SE Tax', id:'reduce'},
              {label:'SE Tax vs Federal Income Tax', id:'vs-federal'},
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

        {/* SECTION 1 */}
        <section id="what-is-se-tax">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            What Is Self-Employment Tax and Who Pays It?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'Self-employment tax covers Social Security and Medicare contributions. W-2 employees split this 50/50 with their employer — each pays 7.65%. Self-employed workers pay the full 15.3% themselves. The IRS considers gig workers self-employed by default.'}
          </p>
          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'DoorDash, Uber Eats, Instacart, Grubhub drivers — all pay SE tax'}</li>
            <li>{'Airbnb hosts, Turo owners, Etsy sellers — SE tax applies'}</li>
            <li>{'Fiverr, Upwork, OnlyFans earners — SE tax applies above $400 net'}</li>
            <li>{'W-2 side job income does not trigger SE tax — only 1099/gig income does'}</li>
          </ul>

          <blockquote style={{borderLeft:'3px solid rgba(232,184,75,0.4)', paddingLeft:16, margin:'20px 0', fontStyle:'italic', color:'rgba(255,255,255,0.7)', fontSize:14, lineHeight:1.8}}>
            {'Self-employed individuals must pay self-employment tax in addition to income tax. SE tax funds your Social Security and Medicare coverage.'}
            <cite style={{display:'block', marginTop:8, fontSize:12, color:'rgba(255,255,255,0.45)', fontStyle:'normal'}}>
              {'— '}
              <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#e8b84b'}}>
                IRS.gov — Self-Employed Tax Center
              </a>
            </cite>
          </blockquote>
        </section>

        {/* SECTION 2 */}
        <section id="calculate">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            How to Calculate Self-Employment Tax in 2026
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'SE tax is not calculated on 100% of net income. The IRS applies a 92.35% factor first — this simulates the employer deduction a business owner is entitled to. Then multiply by 15.3%.'}
          </p>

          <h3 style={{fontSize:15, fontWeight:700, color:'#C8D8EC', marginBottom:12}}>
            Step-by-Step SE Tax Calculation
          </h3>
          <ol style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#C8D8EC'}}>{'Find net self-employment income.'}</strong>
              {' Gross earnings minus all deductible business expenses.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#C8D8EC'}}>{'Multiply by 92.35%.'}</strong>
              {' Example: $40,000 × 0.9235 = $36,940.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#C8D8EC'}}>{'Multiply by 15.3%.'}</strong>
              {' Example: $36,940 × 0.153 = $5,652 in SE tax.'}
            </li>
            <li style={{marginBottom:8}}>
              <strong style={{color:'#C8D8EC'}}>{'Deduct 50% of SE tax.'}</strong>
              {' $5,652 ÷ 2 = $2,826 deducted from gross income on Schedule 1.'}
            </li>
            <li>
              <strong style={{color:'#C8D8EC'}}>{'Report on Schedule SE.'}</strong>
              {' Attach to your Form 1040. Pay any balance by April 15, 2027.'}
            </li>
          </ol>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:24}}>
            {'Use our free '}
            <a href="/1099-tax-calculator-2026" style={{color:'#e8b84b'}}>1099 tax calculator</a>
            {' to get your exact SE tax in under 60 seconds — including state taxes.'}
          </p>
        </section>

        {/* SECTION 3 */}
        <section id="by-income">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            Self-Employment Tax by Income Level in 2026
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'The table below shows SE tax at common gig worker income levels. Federal income tax column assumes single filer with $16,100 standard deduction and 50% SE tax deduction applied.'}
          </p>

          <div style={{overflowX:'auto', marginBottom:24}}>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:14}}>
              <thead>
                <tr style={{background:'rgba(232,184,75,0.12)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>Net Income</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>SE Tax (15.3%)</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>Federal Tax</th>
                  <th style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>Total Owed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {inc:'$20,000', se:'$2,825', fed:'$0', total:'$2,825'},
                  {inc:'$25,000', se:'$3,532', fed:'$883', total:'$4,415'},
                  {inc:'$30,000', se:'$4,239', fed:'$1,060', total:'$5,299'},
                  {inc:'$35,000', se:'$4,945', fed:'$2,805', total:'$7,750'},
                ].map((row, i) => (
                  <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)'}}>{row.inc}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.se}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.fed}</td>
                    <td style={{padding:'10px 14px', textAlign:'right', color:'rgba(255,255,255,0.85)'}}>{row.total}</td>
                  </tr>
                ))}
                <tr style={{background:'rgba(232,184,75,0.08)', borderTop:'1px solid rgba(232,184,75,0.3)'}}>
                  <td style={{padding:'10px 14px', color:'#e8b84b', fontWeight:700}}>{'$40,000 (avg)'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700}}>{'$5,650'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700}}>{'$2,213'}</td>
                  <td style={{padding:'10px 14px', textAlign:'right', color:'#e8b84b', fontWeight:700}}>{'$7,863'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* INFORMATION GAIN */}
          <div style={{background:'rgba(232,184,75,0.05)', border:'1px solid rgba(232,184,75,0.15)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
            <div style={{fontWeight:800, color:'#e8b84b', marginBottom:8, fontSize:13}}>UNIQUE DATA — 2026 Analysis</div>
            <p style={{margin:0, fontSize:14, color:'rgba(255,255,255,0.8)', lineHeight:1.8}}>
              {'SE tax is the single largest tax bill for most gig workers — larger than federal income tax at every income level below $60,000. At $40,000 net income, SE tax ($5,650) exceeds federal income tax ($2,213) by 155%. This gap closes only above $80,000 where the 22% bracket kicks in fully.'}
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="reduce">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            How to Reduce Self-Employment Tax in 2026
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'SE tax is calculated on net income — gross earnings minus deductions. Every dollar you deduct saves 14.13 cents in SE tax (15.3% × 92.35%). The most powerful deductions for gig workers are mileage, phone, and health insurance.'}
          </p>

          <ul style={{margin:'0 0 20px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Mileage: 72.5 cents/mile × 10,000 miles = $7,250 deduction — saves $1,024 in SE tax'}</li>
            <li>{'Phone: 60% of $100/month bill = $720/year deduction — saves $102 in SE tax'}</li>
            <li>{'Health insurance: $300/month = $3,600/year — saves $509 in SE tax'}</li>
            <li>{'Home office: 200 sq ft × $5 = $1,000 deduction — saves $141 in SE tax'}</li>
            <li>{'SE tax deduction: deduct 50% of SE paid — saves federal income tax, not SE tax'}</li>
          </ul>

          <ul style={{margin:'0 0 24px', padding:'0 0 0 20px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'Use Stride or Gridwise to auto-track mileage — the biggest missed deduction'}</li>
            <li>{'Keep receipts for every business purchase above $25'}</li>
            <li>{'Open a separate bank account for gig income — simplifies expense tracking'}</li>
            <li>{'Pay quarterly — reduces penalty risk and helps you track the true tax burden'}</li>
          </ul>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'See the full breakdown in our '}
            <a href="/blog/self-employment-tax-deductions-2026" style={{color:'#e8b84b'}}>
              self-employment tax deductions guide
            </a>
            {'.'}
          </p>
        </section>

        {/* SECTION 5 */}
        <section id="vs-federal">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            Self-Employment Tax vs Federal Income Tax: What Is the Difference?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'SE tax and federal income tax are two separate obligations. SE tax funds Social Security and Medicare. Federal income tax funds general government spending. Both are filed on Form 1040 but calculated separately.'}
          </p>

          <div style={{overflowX:'auto', marginBottom:24}}>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:14}}>
              <thead>
                <tr style={{background:'rgba(232,184,75,0.12)'}}>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>Feature</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>SE Tax</th>
                  <th style={{padding:'10px 14px', textAlign:'left', color:'#e8b84b', fontWeight:700, borderBottom:'1px solid rgba(232,184,75,0.2)'}}>Federal Income Tax</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {feat:'Rate', se:'15.3% flat', fed:'10%–37% brackets'},
                  {feat:'Applies to', se:'Net SE income × 92.35%', fed:'Taxable income after deductions'},
                  {feat:'Standard deduction', se:'No benefit', fed:'$16,100 single (2026)'},
                  {feat:'Wage base cap', se:'$184,500 for SS portion', fed:'No cap'},
                  {feat:'Form used', se:'Schedule SE', fed:'Form 1040 + brackets'},
                ].map((row, i) => (
                  <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)', fontWeight:600}}>{row.feat}</td>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)'}}>{row.se}</td>
                    <td style={{padding:'10px 14px', color:'rgba(255,255,255,0.85)'}}>{row.fed}</td>
                  </tr>
                ))}
                <tr style={{background:'rgba(232,184,75,0.08)', borderTop:'1px solid rgba(232,184,75,0.3)'}}>
                  <td style={{padding:'10px 14px', color:'#e8b84b', fontWeight:700}}>On $40K net</td>
                  <td style={{padding:'10px 14px', color:'#e8b84b', fontWeight:700}}>{'$5,650'}</td>
                  <td style={{padding:'10px 14px', color:'#e8b84b', fontWeight:700}}>{'$2,213'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.75)', marginBottom:16}}>
            {'Learn how quarterly payments work in our '}
            <a href="/blog/quarterly-taxes-gig-workers" style={{color:'#e8b84b'}}>
              quarterly taxes guide for gig workers
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
              q:'What is the self-employment tax rate in 2026?',
              a:'The SE tax rate is 15.3% — 12.4% Social Security plus 2.9% Medicare. It applies to 92.35% of net self-employment income. On $40,000 net income, SE tax is $5,650.'
            },
            {
              q:'Who has to pay self-employment tax in 2026?',
              a:'Anyone earning $400 or more in net self-employment income. This includes all gig workers on 1099 platforms: DoorDash, Uber, Airbnb, Etsy, Fiverr, OnlyFans, and others.'
            },
            {
              q:'How is self-employment tax calculated?',
              a:'Multiply net income by 92.35%, then by 15.3%. Example: $40,000 × 0.9235 × 0.153 = $5,650. Report on Schedule SE and attach to Form 1040.'
            },
            {
              q:'Can I deduct self-employment tax?',
              a:'Yes — 50% of SE tax paid is deductible as an adjustment to income. On $5,650 in SE tax, you deduct $2,825. This reduces your federal income tax but not SE tax itself.'
            },
            {
              q:'What is the Social Security wage base for 2026?',
              a:'The Social Security wage base is $184,500 in 2026. The 12.4% SS rate applies only up to this amount. The 2.9% Medicare rate applies to all net income with no cap.'
            },
            {
              q:'How do I reduce my self-employment tax in 2026?',
              a:'Track all deductible expenses — mileage at 72.5 cents/mile is the largest. Every $1,000 in deductions saves about $141 in SE tax. Use Stride or Gridwise to automate mileage tracking.'
            },
            {
              q:'Is self-employment tax the same as income tax?',
              a:'No. SE tax (15.3%) covers Social Security and Medicare. Federal income tax (10-37%) covers general spending. Both are owed separately on the same Form 1040.'
            },
          ].map((item, i) => (
            <div key={i} style={{marginBottom:24, paddingBottom:20, borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.06)' : 'none'}}>
              <h3 style={{fontSize:15, fontWeight:700, color:'#C8D8EC', marginBottom:8}}>{item.q}</h3>
              <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.8)', margin:0}}>{item.a}</p>
            </div>
          ))}
        </section>

        {/* RELATED */}
        <section style={{marginTop:32, paddingTop:24, borderTop:'1px solid rgba(255,255,255,0.08)'}}>
          <h2 style={{fontSize:16, fontWeight:700, color:'#C8D8EC', marginBottom:16}}>Related Articles</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:12}}>
            {[
              {title:'Quarterly Taxes for Gig Workers 2026', href:'/blog/quarterly-taxes-gig-workers'},
              {title:'Self-Employment Tax Deductions 2026', href:'/blog/self-employment-tax-deductions-2026'},
              {title:'DoorDash Taxes 2026: Complete Guide', href:'/blog/doordash-taxes-2026'},
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
