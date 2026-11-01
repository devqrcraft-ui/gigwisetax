import Link from 'next/link'
import TaxFreshness from '@/app/components/TaxFreshness'
import AuthorBox from '@/app/components/AuthorBox'
import { STATES } from '@/lib/data'
import type { Metadata } from 'next'
import { estimateTax, TAX_RULES_2026 } from '@/lib/tax-rules'

const californiaRate = STATES.find(state => state.slug === 'california')!.rate
const example50 = estimateTax(50000, californiaRate, 'single')
const mileageMiles = 25000
const mileageH1Deduction = Math.round(mileageMiles * TAX_RULES_2026.mileage.h1)
const mileageH2Deduction = Math.round(mileageMiles * TAX_RULES_2026.mileage.h2)
const money = (amount: number) => '$' + amount.toLocaleString('en-US')

export const metadata = {
  alternates: { canonical: 'https://www.gigwisetax.com/blog/amazon-flex-taxes-2026' },
  title: 'Amazon Flex Taxes 2026: Mileage, 1099s & Tax Guide',
  description: 'A practical 2026 tax guide for Amazon Flex drivers: track mileage, estimate federal tax, understand filing assumptions, and review quarterly-payment rules.',
}

export default function AmazonFlexTaxesBlogPost() {
  const h2 = { fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', margin: '32px 0 12px', paddingTop: 8, borderTop: '2px solid rgba(255,255,255,0.1)' }
  const h3 = { fontSize: 16, fontWeight: 700, color: 'rgba(255,255,255,0.9)', margin: '20px 0 8px' }
  const p  = { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, marginBottom: 14 }
  const li = { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 8 }

  return (
    <div style={{ background: '#07111F', minHeight: '100vh' }}>

      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Amazon Flex Taxes 2026: Mileage, 1099s & Tax Guide","item":"https://www.gigwisetax.com/blog/amazon-flex-taxes-2026"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: metadata.title, description: metadata.description, url: 'https://www.gigwisetax.com/blog/amazon-flex-taxes-2026', dateModified: '2026-11-01', author: { '@type': 'Organization', name: 'the GigWiseTax Team', url: 'https://www.gigwisetax.com' }, publisher: { '@type': 'Organization', name: 'GigWiseTax', url: 'https://www.gigwisetax.com' }, mainEntityOfPage: 'https://www.gigwisetax.com/blog/amazon-flex-taxes-2026' }) }} />

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#07111F)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 10 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link> ›{' '}
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</Link> › Amazon Flex Taxes 2026
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' as const }}>
            {['Amazon Flex', 'Delivery', 'Mileage', '1099'].map(t => (
              <span key={t} style={{ background: 'rgba(232,184,75,.15)', color: '#e8b84b', fontSize: 13, fontWeight: 700, padding: '2px 8px', borderRadius: 3, border: '1px solid rgba(232,184,75,.3)' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.3, margin: '0 0 12px' }}>
             Amazon Flex Taxes 2026: Mileage, 1099s & Tax Guide
          </h1>
      {/* ANSWER-FIRST GEO BLOCK */}
          <div style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', margin:'24px 0 16px' }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>2026 Tax Summary — Amazon Flex</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              For a $50,000 net-profit input, Single filing status, California selected, and no mileage deduction entered, the model estimates {money(example50.se)} self-employment tax + {money(example50.federal)} federal income tax + {money(example50.state)} simplified California state estimate = <strong style={{ color:'#fff' }}>{money(example50.total)} total</strong>. The quarterly estimate is <strong style={{ color:'#e8b84b' }}>{money(example50.quarterly)}</strong>. This is a planning model, not a return; California uses a simplified state-rate input rather than its full tax schedule.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}> Updated November 1, 2026</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}> 8 min read</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}> Tax year 2026</span>
          </div>
        </div>
      </div>


      <div style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px', display: 'grid', gridTemplateColumns: '1fr', gap: 32 }} className="blog-grid">

        {/* ARTICLE */}
        <article>

          {/* TL;DR BOX */}
          <div style={{ background: 'rgba(5,150,105,0.12)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#4ade80', marginBottom: 8 }}> Quick Summary</div>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              {[
                'This guide models active Schedule C income; actual filing treatment can differ',
                'Mileage rates are split by when qualifying business miles were driven',
                'Federal estimated payments depend on expected tax after withholding and credits',
                'Top deductions: mileage, phone, dolly/equipment, parking, tolls',
              ].map(item => <li key={item} style={{ fontSize: 13, color: '#4ade80', lineHeight: 1.7, marginBottom: 4 }}>{item}</li>)}
            </ul>
          </div>

          <p style={p}>
            This guide focuses on the self-employed tax model for Amazon Flex delivery income. The worked example assumes active Schedule C income; your tax treatment and result can differ with other income, expenses, withholding, filing status, and deduction eligibility.
          </p>
          <p style={p}>
            That's great news for your paycheck every week. It's a shock every April if you haven't been setting money aside.
          </p>

                    <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
            <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>KEY TAKEAWAYS</div>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
              <li>$50,000 net-profit input, Single, California, and no mileage entered: <strong>{money(example50.total)}</strong> total planning estimate including a simplified state component</li>
              <li>Mileage rates: <strong>{TAX_RULES_2026.mileage.h1 * 100}¢/mile Jan–Jun</strong> and <strong>{TAX_RULES_2026.mileage.h2 * 100}¢/mile Jul–Dec</strong>; the deduction depends on when business miles were driven</li>
              <li>Tip-related deductions, if applicable, are not included in this worked example</li>
              <li>The general 2026 1099-NEC threshold is <strong>${TAX_RULES_2026.form1099Threshold.year2026.toLocaleString('en-US')}</strong>; all taxable income must still be reported</li>
              <li>Estimated payments depend on your full return, withholding, and safe-harbor status; there is no universal set-aside percentage</li>
            </ul>
          </div>
          <blockquote style={{borderLeft:'3px solid rgba(232,184,75,0.4)',paddingLeft:16,margin:'20px 0',fontStyle:'italic',color:'rgba(255,255,255,0.7)',fontSize:14,lineHeight:1.8}}>
            {'Estimated tax payments may be required under federal safe-harbor rules. Review IRS Form 1040-ES and consider withholding, prior-year tax, and current-year income.'}
            <cite style={{display:'block',marginTop:8,fontSize:12,color:'rgba(255,255,255,0.45)',fontStyle:'normal'}}>
              {'— '}<a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#e8b84b'}}>IRS.gov — Self-Employed Tax Center</a>
            </cite>
          </blockquote>
          {/* TABLE OF CONTENTS */}
          <div style={{background:'rgba(232,184,75,0.06)',border:'1px solid rgba(232,184,75,0.2)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
            <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>{'📋 TABLE OF CONTENTS'}</div>
            <ol style={{margin:0,padding:'0 0 0 18px',lineHeight:2}}>
              <li style={{marginBottom:6}}><a href={"#1099-forms"} style={{color:'#e8b84b',textDecoration:'none',fontSize:14,fontWeight:600}}>Does Amazon Flex Send a 1099?</a></li>
              <li style={{marginBottom:6}}><a href={"#how-much-tax"} style={{color:'#e8b84b',textDecoration:'none',fontSize:14,fontWeight:600}}>How Much Tax Do Amazon Flex Drivers Owe?</a></li>
              <li style={{marginBottom:6}}><a href={"#mileage-deduction"} style={{color:'#e8b84b',textDecoration:'none',fontSize:14,fontWeight:600}}>The Mileage Deduction: Your Biggest Tax Break</a></li>
              <li style={{marginBottom:6}}><a href={"#top-deductions"} style={{color:'#e8b84b',textDecoration:'none',fontSize:14,fontWeight:600}}>Top Tax Deductions for Amazon Flex Drivers 2026</a></li>
              <li style={{marginBottom:6}}><a href={"#quarterly-payments"} style={{color:'#e8b84b',textDecoration:'none',fontSize:14,fontWeight:600}}>Quarterly Tax Payments for Amazon Flex Drivers</a></li>
              <li style={{marginBottom:6}}><a href={"#set-aside"} style={{color:'#e8b84b',textDecoration:'none',fontSize:14,fontWeight:600}}>How Much Should Amazon Flex Drivers Set Aside?</a></li>
            </ol>
          </div>
<h2 id="1099-forms" style={h2}>Does Amazon Flex Send a 1099?</h2>
          <p style={p}>
            For 2026 payments, the general 1099-NEC reporting threshold is <strong>{money(TAX_RULES_2026.form1099Threshold.year2026)}</strong>. Whether a payer sends a 1099-NEC or another form depends on payment type and reporting rules. You must still report all taxable income even if no information return arrives.
          </p>

          <h2 id="how-much-tax" style={h2}>How Much Tax Do Amazon Flex Drivers Owe?</h2>
          <p style={p}>
            Your total tax burden as a Flex driver has two main components:
          </p>
          <h3 style={h3}>1. Self-Employment Tax</h3>
          <p style={p}>
            Self-employment tax is calculated from net self-employment earnings under Schedule SE rules. This model applies the shared 2026 rules and wage-base limit, but does not combine W-2 or spouse wages when evaluating Additional Medicare effects; results can differ when those wages apply.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 16, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 8 }}> Example: $50,000 Amazon Flex Income</div>
            {[
              ['Net-profit input (no mileage entered)', '$50,000'],
              ['Self-employment tax', money(example50.se)],
              ['Federal income tax (Single)', money(example50.federal)],
              ['California state estimate (simplified input)', money(example50.state)],
              ['Total modeled taxes', money(example50.total)],
              ['Estimated amount per quarter', money(example50.quarterly)],
            ].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13 }}>
                <span style={{ color: 'rgba(255,255,255,0.85)' }}>{l}</span>
                <strong style={{ color: 'rgba(255,255,255,0.9)' }}>{v}</strong>
              </div>
            ))}
          </div>

          <h3 style={h3}>2. Federal + State Income Tax</h3>
          <p style={p}>
            After the modeled half-SE-tax adjustment and standard deduction, federal tax uses progressive brackets. The state component shown by our calculator is a simplified input, not a full state tax schedule. Use the <Link href="/amazon-flex" style={{ color: '#B22234', fontWeight: 600 }}>Amazon Flex Tax Calculator</Link> for a planning estimate based on mileage and state.
          </p>

          <h2 id="mileage-deduction" style={h2}>The Mileage Deduction: Your Biggest Tax Break</h2>
          <p style={p}>
            The 2026 IRS standard mileage rates are <strong>{TAX_RULES_2026.mileage.h1 * 100} cents per mile for January–June and {TAX_RULES_2026.mileage.h2 * 100} cents for July–December</strong>. The deduction depends on qualifying business miles and when they were driven; keep a contemporaneous mileage log.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 6, padding: '16px 20px', marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 8 }}> Mileage Savings Example</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,.8)', lineHeight: 1.8 }}>
              For 25,000 qualifying miles, the deduction is about <strong style={{ color: '#e8b84b', fontSize: 18 }}>{money(mileageH1Deduction)}</strong> if all miles are in January–June, or <strong style={{ color: '#e8b84b', fontSize: 18 }}>{money(mileageH2Deduction)}</strong> if all are in July–December. Tax savings depend on your full return.
            </div>
          </div>
          <p style={p}>
            Track your miles using a dedicated app. Stride (free) and MileIQ ($5.99/mo) are both popular among delivery drivers. The IRS can audit mileage deductions — keep records that show the date, destination, and business purpose of each trip.
          </p>
          <p style={p}>
            <strong>What counts as a deductible mile?</strong> From the moment you accept a block and start driving to pick up packages, through all deliveries, until you return home after your last delivery.
          </p>

          <h2 id="top-deductions" style={h2}>Top Tax Deductions for Amazon Flex Drivers 2026</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
            {[
              { icon: '', title: `Mileage (${TAX_RULES_2026.mileage.h1 * 100}¢–${TAX_RULES_2026.mileage.h2 * 100}¢/mile)`, desc: 'Track qualifying business miles and use the rate for the date driven.' },
              { icon: '', title: 'Phone & Data', desc: 'Document and deduct only the substantiated business-use portion.' },
              { icon: '', title: 'Hand Truck / Dolly', desc: 'Equipment for large Amazon packages — fully deductible.' },
              { icon: '', title: 'Flashlight & Safety Gear', desc: 'Required for early morning or evening deliveries.' },
              { icon: '', title: 'Parking & Tolls', desc: 'All parking fees and tolls during deliveries.' },
              { icon: '', title: 'Gloves & Work Gear', desc: 'Protective gear worn exclusively for deliveries.' },
              { icon: '', title: 'Bank Fees', desc: 'If you open a business account for Flex income.' },
              { icon: '', title: 'Tax Prep Fees', desc: 'CPA or tax software costs — deductible on Schedule C.' },
            ].map(d => (
              <div key={d.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: '12px 14px' }}>
                <div style={{ fontSize: 18, marginBottom: 4 }}>{d.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 3 }}>{d.title}</div>
                <div style={{ fontSize: 11, color: '#8fa8c8', lineHeight: 1.5 }}>{d.desc}</div>
              </div>
            ))}
          </div>

          <h2 id="quarterly-payments" style={h2}>Quarterly Tax Payments for Amazon Flex Drivers</h2>
          <p style={p}>
            Federal estimated payments may be required based on expected tax after withholding, credits, and prior-year safe-harbor rules. Income alone does not determine the filing requirement; review IRS Form 1040-ES for your situation.
          </p>
          <div style={{ background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', padding: '10px 16px', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>2026 Quarterly Deadlines</div>
            {[
              { q: 'Q1 2026', period: 'Jan – Mar income', due: 'April 15, 2026', urgent: true },
              { q: 'Q2 2026', period: 'Apr – May income', due: 'June 15, 2026', urgent: false },
              { q: 'Q3 2026', period: 'Jun – Aug income', due: 'September 15, 2026', urgent: false },
              { q: 'Q4 2026', period: 'Sep – Dec income', due: 'January 15, 2027', urgent: false },
            ].map(row => (
              <div key={row.q} style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontSize: 14 }}>{row.q}</span>
                  <span style={{ fontSize: 12, color: '#8fa8c8', marginLeft: 8 }}>{row.period}</span>
                </div>
                <span style={{ fontWeight: 700, color: row.urgent ? '#B22234' : 'rgba(255,255,255,0.75)', fontSize: 13 }}>
                  {row.urgent && ' '}{row.due}
                </span>
              </div>
            ))}
          </div>
          <p style={p}>
            Pay online at <a href="https://irs.gov/payments" target="_blank" rel="noopener noreferrer" style={{ color: '#B22234', fontWeight: 600 }}>IRS.gov/payments</a> using Direct Pay or EFTPS. The IRS underpayment interest rate is {TAX_RULES_2026.underpaymentRateQ4_2026 * 100}% annualized for Q4 2026; this is not a flat penalty on every missed payment, and the actual charge depends on timing and amount. See the <a href={TAX_RULES_2026.sources.underpaymentRate} target="_blank" rel="nofollow noopener noreferrer" style={{ color: '#B22234', fontWeight: 600 }}>IRS quarterly rate notice</a>.
          </p>

          <h2 id="set-aside" style={h2}>How Much Should Amazon Flex Drivers Set Aside?</h2>
          <p style={p}>
            There is no single set-aside percentage that fits every driver. The estimate above does not include W-2 wages, spouse income, withholding, credits, or all deductions; compare your complete tax projection with prior-year safe-harbor amounts.
          </p>
          <p style={p}>
            Use our free <Link href="/amazon-flex" style={{ color: '#B22234', fontWeight: 600 }}>Amazon Flex Tax Calculator</Link> to get your personalized estimate.
          </p>

          

          <div style={{ background: 'rgba(232,184,75,0.1)', border: '1px solid #fde68a', borderRadius: 8, padding: '16px 20px', marginTop: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fcd34d', marginBottom: 6 }}> Disclaimer</div>
            <div style={{ fontSize: 13, color: '#fcd34d', lineHeight: 1.7 }}>
              This article is for informational purposes only and does not constitute tax advice. Tax laws change frequently. Consult a licensed CPA or Enrolled Agent for advice specific to your situation.
            </div>
          </div>

        </article>

        {/* SIDEBAR */}
        <aside style={{ position: 'sticky', top: 80 }}>
          <div style={{ background: '#07111F', border: '1px solid #d8dce6', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', padding: '12px 16px' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> Try the Calculator</span>
            </div>
            <div style={{ padding: 16 }}>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: 12, marginTop: 0 }}>Estimate your Amazon Flex tax bill in 60 seconds.</p>
              <Link href="/amazon-flex" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#B22234', color: '#fff', padding: '11px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const, cursor: 'pointer' }}> Amazon Flex Calculator →</div>
              </Link>
            </div>
          </div>

          <div style={{ background: '#07111F', border: '2px dashed #d8dce6', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: 13, fontWeight: 800, color: '#7a9abf', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Sponsored W-2 Tool</div>
            <div style={{ padding: 16 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 6 }}>PrivatePaycheck</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', marginBottom: 12, lineHeight: 1.6 }}>A separate W-2 paycheck calculator; it does not track Amazon Flex mileage or expenses.</div>
              <a href="https://privatepaycheck.com" target="_blank" rel="sponsored nofollow noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#0d7a40', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 12, fontWeight: 700, textAlign: 'center' as const, cursor: 'pointer' }}>Open W-2 Paycheck Calculator</div>
              </a>
            </div>
          </div>

          <div style={{ background: '#07111F', border: '1px solid #d8dce6', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', padding: '12px 16px' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> Related Articles</span>
            </div>
            {[
              ['Mileage Rate 2026 Guide', '/blog/mileage-rate-2026'],
              ['Quarterly Taxes Guide', '/blog/quarterly-taxes-gig-workers'],
              ['W-2 vs 1099 Explained', '/blog/1099-vs-w2-taxes-2026'],
              ['DoorDash vs Grubhub Taxes', '/blog/grubhub-vs-doordash-taxes-2026'],
            ].map(([l, h]) => (
              <Link key={l} href={h} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>→ {l}</div>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      
      <TaxFreshness />
<AuthorBox />
      <style>{`
        @media(max-width:900px){.blog-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  )
}
