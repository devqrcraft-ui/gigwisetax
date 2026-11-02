import { notFound } from 'next/navigation'
import TaxFreshness from '@/app/components/TaxFreshness'
import AuthorBox from '@/app/components/AuthorBox'
import PlatformStatesGrid from '@/app/components/PlatformStatesGrid'
import { ReviewsSection } from '@/app/components/ReviewsSection'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS, MILEAGE_RATE_2026 } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'

export async function generateStaticParams() { return [{ platform: 'shipt' }] }

export async function generateMetadata({ params }: { params: { platform: string } }): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'shipt')
  if (!p) return {}
  return {
    title: `${p.name} Tax Calculator 2026 | Estimate Mileage & Taxes`,
    description: `Estimate federal and simplified state taxes on ${p.name} shopper profit. Add business expenses, filing status, and state for a free planning estimate.`,
    keywords: `shipt tax calculator, shipt self employment tax 2026, shipt quarterly taxes, shipt 1099 taxes, how much taxes do shipt workers pay`,
    alternates: { canonical: `https://www.gigwisetax.com/${p.slug}` },
    openGraph: {
      title: `${p.name} Tax Calculator 2026 — Free, All 50 States + DC`,
      description: `Estimate federal and simplified state taxes on ${p.name} shopper profit, with expense and quarterly planning. Not a tax return.`,
      url: `https://www.gigwisetax.com/${p.slug}`,
    },
  }
}


export default function PlatformPage({ params }: { params: { platform: string } }) {
  const platform = PLATFORMS.find(p => p.slug === 'shipt')
  if (!platform) return notFound()

  const deductions = DEDUCTIONS['shipt' as keyof typeof DEDUCTIONS] || DEDUCTIONS.shipt
  const isPlatformDriver = true
  const isRental = false
  const isCreator = false

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${platform.name} Tax Calculator 2026`,
    description: `Free ${platform.name} self-employment tax calculator for 2026. All 50 States + DC.`,
    url: `https://www.gigwisetax.com/${platform.slug}`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much tax do I pay on ${platform.name} income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Many ${platform.name} shoppers are treated as independent contractors for federal tax purposes and may owe self-employment tax on net earnings, plus federal and applicable state income tax. Tax treatment and the amount due depend on your full situation.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does ${platform.name} withhold taxes?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Withholding and tax forms depend on your work and payment arrangement. Review your payment statements and determine any tax due based on your facts; do not assume platform payments satisfy your tax obligations.`,
        },
      },
      {
        '@type': 'Question',
        name: `When are ${platform.name} quarterly taxes due in 2026?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `For 2026: Q1 taxes are due April 15, 2026. Q2 is due June 15, 2026. Q3 is due September 15, 2026. Q4 is due January 15, 2027.`,
        },
      },
      {
        '@type': 'Question',
        name: `What tax forms might a ${platform.name} shopper receive?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Forms depend on the payment arrangement and current reporting rules. A form threshold does not determine whether income is taxable or reportable.`,
        },
      },
    ],
  }


  const deductionsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Top Tax Deductions for ${platform.name} Workers 2026`,
    numberOfItems: deductions.length,
    itemListElement: deductions.map((d: string, i: number) => ({ '@type': 'ListItem', position: i + 1, name: d })),
  };
  const card = { background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, marginBottom: 20, boxShadow: '0 2px 12px rgba(0,0,0,.3)', overflow: 'hidden' as const }
  const cardHd = { background: 'rgba(255,255,255,0.07)', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }

  return (
    <>

      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(deductionsSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"HowTo","name":"Tax Planning Steps for ${platform.name} Shoppers","description":"General recordkeeping and tax-planning steps; treatment depends on the shopper's role and tax facts.","step":[{"@type":"HowToStep","position":1,"name":"Keep payment records","text":"Save platform statements, payment records, and any tax documents you receive."},{"@type":"HowToStep","position":2,"name":"Track business expenses","text":"Keep receipts and records for eligible business expenses and qualifying mileage."},{"@type":"HowToStep","position":3,"name":"Determine tax treatment","text":"Confirm whether your work is employee or self-employment income; this calculator does not classify it."},{"@type":"HowToStep","position":4,"name":"Estimate payments","text":"Estimate taxes using your full income, deductions, withholding, filing status, and state rules."},{"@type":"HowToStep","position":5,"name":"File applicable forms","text":"Report income and expenses using the forms and treatment that apply to your circumstances."}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com","logo":"https://www.gigwisetax.com/og-image.png","description":"Free gig worker tax calculators and guides for US independent contractors."}` }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"${platform.name} Tax Calculator","item":"https://www.gigwisetax.com/shipt"}]}` }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"${platform.name} Tax Calculator 2026","url":"https://www.gigwisetax.com/shipt","dateModified":"2026-11-02","author":{"@type":"Organization","name":"the GigWiseTax Team","url":"https://www.gigwisetax.com"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"}}` }}/>

      <div style={{ background: '#07111F', minHeight: '100vh' }}>

        {/* HERO */}
        <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#07111F)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 20px 28px' }}>
            <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
              <span style={{ margin: '0 8px' }}>›</span>
              <a href="/calculators" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Calculators</a>
              <span style={{ margin: '0 8px' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,.7)' }}>{platform.name}</span>
            </nav>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
              <div style={{ width: 4, height: 34, background: '#B22234', borderRadius: 2, flexShrink: 0, marginTop: 4 }}/>
              <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.5px', margin: 0 }}>
                {platform.name} Tax Calculator 2026 — All 50 States + DC
              </h1>
            </div>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, paddingLeft: 16, maxWidth: 780, marginBottom: 18, textAlign: 'justify' }}>
              Free {platform.name} tax planning estimate for 2026. Estimate self-employment, federal, and simplified state taxes for all 50 states + DC.
              Get your quarterly estimated payment schedule with Google Calendar export. No signup required — results are instant.
              Powered by the <a href="/" style={{ color: 'rgba(255,255,255,.75)', fontWeight: 700 }}>GigWiseTax main calculator</a> — SE tax + federal + all 50 states + DC.
            </p>
            <div style={{ paddingLeft: 16, display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
              {[' IRS Schedule SE', ' All 50 States + DC', ' No Signup', ` 2026 Tax Rules`, platform.badge ? `▸ ${platform.badge}` : ' Instant Results'].filter(Boolean).map(b => (
                <span key={b} style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 3, padding: '4px 10px', fontSize: 11, color: 'rgba(255,255,255,.55)', fontWeight: 500 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>


        {/* MAIN GRID */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px 48px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }} className="main-grid">

          {/* LEFT */}
          <div>
            {/* CALCULATOR */}
            <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026}/>


          {/* KEY TAKEAWAYS */}
          <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
            <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
          <li>Federal-only example: $30,000 net profit, single filer, no mileage entered = about $5,417; state tax is not included</li>
          <li>Estimated payments depend on your full tax picture; check current federal and state due dates</li>
          <li dangerouslySetInnerHTML={{__html: 'IRS mileage rate is <strong>72.5¢/mile through June, 76¢/mile from July 2026</strong> — one of the largest deductions available'}}/>
          <li>Tax-form thresholds do not determine whether income must be reported</li>
          <li>Tax treatment and estimated payments vary with your role and full tax situation</li>
            </ul>
          </div>
          {/* ANSWER-FIRST GEO BLOCK */}
          <div style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', margin:'16px 0' }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>2026 Tax Summary — {platform.name}</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              In this federal-only example, $30,000 of net profit produces approximately $4,239 in SE tax and $1,178 in federal income tax, or <strong style={{ color:'#fff' }}>$5,417 total</strong>. It assumes single filing status, no other income, no credits, and no mileage deduction; state tax is excluded. Do not subtract mileage twice if it is already reflected in net profit.
            </p>
          </div>

            {/* TAX GUIDE */}
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}> {platform.name} Tax Guide 2026</span>
              </div>
              <div style={{ padding: 24 }}>

                <h2 style={{ fontSize: 20, fontWeight: 800, color: '#ffffff', marginBottom: 12 }}>
                  How {platform.name} Taxes Work in 2026
                </h2>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, textAlign: 'justify', marginBottom: 20 }}>
                  Many {platform.name} shoppers are treated as independent contractors for federal tax purposes, but work arrangements can differ. Check your documents and reporting status; a platform form does not determine whether income is taxable.
                </p>

                <div style={{ background: 'rgba(178,34,52,0.12)', border: '1px solid rgba(178,34,52,0.35)', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                  <div style={{ fontWeight: 700, color: '#B22234', marginBottom: 8 }}>Plan for Estimated Tax Payments</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
                    The amount depends on net profit, other income, filing status, withholding, credits, and state. Estimated payments may generally be required if you expect to owe at least $1,000 after withholding and credits; safe-harbor rules and exceptions apply.
                  </p>
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#ffffff', marginBottom: 12 }}>
                  What Taxes Do {platform.name} Workers Pay?
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }} className="form-grid">
                  {[
                    { label: ' Self-Employment Tax', value: '15.3%', detail: '12.4% Social Security + 2.9% Medicare', color: '#B22234' },
                    { label: ' Federal Income Tax', value: '10–37%', detail: 'Based on total taxable income', color: '#7dd3fc' },
                    { label: ' State Income Tax', value: '0–13.3%', detail: 'Depends on your state (0 in TX, FL, NV)', color: '#a78bfa' },
                    { label: ' SE Tax Deduction', value: '50% off', detail: 'Deduct half of SE tax from taxable income', color: '#059669' },
                  ].map(item => (
                    <div key={item.label} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 14, borderLeft: `4px solid ${item.color}` }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: item.color, marginBottom: 4 }}>{item.value}</div>
                      <div style={{ fontSize: 11, color: '#7a9abf' }}>{item.detail}</div>
                    </div>
                  ))}
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#ffffff', marginBottom: 12 }}>
                  2026 Quarterly Tax Deadlines for {platform.name} Workers
                </h3>
                <table className="deadline-table" style={{ width: '100%', borderCollapse: 'collapse' as const, marginBottom: 20 }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.07)' }}>
                      {['Quarter','Income Period','Due Date','Status'].map(h => (
                        <th key={h} style={{ padding: '10px 14px', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.6)', textTransform: 'uppercase' as const, letterSpacing: '0.8px', textAlign: 'left' as const }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {DEADLINES_2026.map((d, i) => (
                      <tr key={d.q} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: d.isNext ? 'rgba(178,34,52,0.12)' : 'rgba(255,255,255,0.03)' }}>
                        <td data-label="Quarter" style={{ padding: '12px 14px', fontWeight: 800, color: d.isNext ? '#B22234' : 'rgba(255,255,255,0.85)', fontSize: 14 }}>
                          {d.isNext && <span style={{ background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 5px', borderRadius: 2, marginRight: 6, fontWeight: 800 }}>NEXT</span>}
                          {d.q} 2026
                        </td>
                        <td data-label="Period" style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>{d.period}</td>
                        <td data-label="Due Date" style={{ padding: '12px 14px', fontWeight: 700, color: d.isNext ? '#B22234' : 'rgba(255,255,255,0.85)', fontSize: 14 }}>{d.due}</td>
                        <td data-label="Status" style={{ padding: '12px 14px' }}>
                          <span style={{ background: d.isNext ? 'rgba(178,34,52,0.25)' : 'rgba(255,255,255,0.08)', color: d.isNext ? '#fca5a5' : 'rgba(255,255,255,0.7)', padding: '3px 10px', borderRadius: 12, fontSize: 12, fontWeight: 700 }}>{d.isPast ? 'Passed' : d.isNext ? 'Next due' : 'Upcoming'}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* DEDUCTIONS */}
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#ffffff', marginBottom: 12 }}>
                  Top Tax Deductions for {platform.name} Workers in 2026
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }} className="form-grid">
                  {deductions.map((d: string) => (
                    <div key={d} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '10px 14px', fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                      {d}
                    </div>
                  ))}
                </div>

                {/* 1099DEDUCTIONS CROSS-LINK */}
                <a href="https://1099deductions.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(135deg,#0E2240,#07111F)', border: '1px solid rgba(184,146,74,0.35)', borderRadius: 8, padding: '14px 18px', marginBottom: 16, textDecoration: 'none' }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#D4AA66', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 4 }}>Full Deductions Checklist</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>See complete IRS Schedule C write-offs on <span style={{ color: '#D4AA66' }}>1099Deductions.com</span></div>
                    <div style={{ fontSize: 12, color: '#7A96B8', marginTop: 2 }}>DoorDash, Uber, Airbnb, Etsy, OnlyFans — 17 job types. 100% free.</div>
                  </div>
                  <div style={{ fontSize: 22, color: '#D4AA66', marginLeft: 12 }}>→</div>
                </a>

                {isPlatformDriver && (
                  <div style={{ background: 'rgba(3,105,161,0.12)', border: '1px solid rgba(3,105,161,0.35)', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                    <div style={{ fontWeight: 700, color: '#7dd3fc', marginBottom: 8 }}>▸ 2026 IRS Mileage Rate: 72.5¢ (Jan–Jun) / 76¢ (Jul–Dec) per mile</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
                      The 2026 standard mileage rate is <strong>72.5¢/mile through June, 76¢/mile from July</strong>.
                      Track every mile driven for {platform.name} using a mileage app. On 10,000 miles, that's roughly a <strong>$7,250–$7,600 deduction</strong> depending on when you drove (72.5¢/mile before July 1, 76¢/mile after) — reducing your taxable income significantly.
                      Use the actual expense method if your vehicle costs exceed the standard rate.
                    </p>
                  </div>
                )}

                {isRental && (
                  <div style={{ background: 'rgba(22,101,52,0.12)', border: '1px solid rgba(22,101,52,0.35)', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                    <div style={{ fontWeight: 700, color: '#86efac', marginBottom: 8 }}>▸ Airbnb Hosts: 14-Day Rule</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
                      If you rent your property for <strong>14 days or fewer</strong> per year, rental income is tax-free (Section 280A exclusion).
                      Above 14 days, you must report income but can deduct a proportional share of mortgage interest, property taxes, utilities, and depreciation.
                    </p>
                  </div>
                )}

                {isCreator && (
                  <div style={{ background: 'rgba(232,184,75,0.1)', border: '1px solid rgba(232,184,75,0.35)', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                    <div style={{ fontWeight: 700, color: '#b45309', marginBottom: 8 }}> {platform.name} Tip: Home Office Deduction</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
                      If you use a dedicated space at home exclusively for your {platform.name} business, you can deduct home office expenses.
                      The simplified method allows <strong>$5 per square foot</strong> (up to 300 sq ft = $1,500 deduction).
                      Eligible equipment or software may qualify for depreciation or an expensing election, depending on business use and current rules.
                    </p>
                  </div>
                )}

                {/* FAQ */}
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#ffffff', marginBottom: 16 }}>
                  Frequently Asked Questions — {platform.name} Taxes 2026
                </h3>
                {[
                  {
                    q: `Does ${platform.name} withhold taxes from my payments?`,
                    a: `Withholding and tax forms depend on your work and payment arrangement. Review your payment statements and determine any tax due based on your facts; do not assume platform payments satisfy your tax obligations.`,
                  },
                  {
                    q: `How much should I set aside for ${platform.name} taxes?`,
                    a: `There is no single percentage that fits every ${platform.name} shopper. Your estimate depends on net profit, filing status, other income, withholding, credits, and state or local taxes.`,
                  },
                  {
                    q: `What 1099 form does ${platform.name} send?`,
                    a: `The information return you receive depends on how payments are reported and current rules. A form threshold does not determine whether income is taxable or reportable.`,
                  },
                  {
                    q: `What is the self-employment tax rate for ${platform.name} in 2026?`,
                    a: `For eligible self-employment income, the general SE tax rate is 15.3% on net earnings, subject to the Social Security wage base and other rules. The deductible portion and final amount depend on your circumstances; see current IRS instructions.`,
                  },
                  {
                    q: `Do I need to pay ${platform.name} taxes if I earn less than the 1099 threshold?`,
                    a: `Tax-form reporting thresholds do not determine whether income is taxable. Reporting and self-employment tax requirements depend on your income and circumstances; consult current IRS guidance.`,
                  },
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: 16, marginBottom: 16 }}>
                    <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.95)', fontSize: 14, marginBottom: 8 }}>Q: {item.q}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, textAlign: 'justify' }}>{item.a}</div>
                  </div>
                ))}

                {/* DISCLAIMER */}
                <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: 14, fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, textAlign: 'justify' as const }}>
                   <strong>Disclaimer:</strong> This calculator provides estimates for planning purposes only. Tax laws are subject to change. Consult a licensed CPA or tax professional, or visit <a href="https://irs.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#B22234' }}>IRS.gov</a> for official guidance. GigWiseTax.com is not affiliated with {platform.name}, the IRS, or any government agency.
                </div>
              </div>
            </div>

            {/* OTHER PLATFORMS */}
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}> Other Platform Calculators</span>
              </div>
              <div style={{ padding: 16, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }} className="p-grid">
                {PLATFORMS.filter(p => p.slug !== 'shipt').map(p => (
                  <a key={p.slug} href={`/${p.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: 6, padding: '12px 8px', textAlign: 'center' as const, background: '#07111F', position: 'relative' as const }}>

                      <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{p.name}</div>
                      <div style={{ fontSize: 13, color: '#e05070', fontWeight: 600 }}>{p.searches}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {/* AD */}
            <div style={{ background: '#07111F', border: '2px dashed rgba(255,255,255,0.15)', borderRadius: 10, overflow: 'hidden' as const }}>
            {/* OTHER CALCULATORS */}
<div style={{ background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, overflow: 'hidden' as const, marginBottom: 16 }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', padding: '10px 16px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> Other Gig Tax Calculators</span>
            </div>
              <a href="/uber" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)' }}><span style={{ fontSize: 13 }}>▸ Uber Tax Calculator</span><span style={{ fontSize: 13, color: '#e05070', fontWeight: 700 }}>→</span></a>
              <a href="/instacart" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)' }}><span style={{ fontSize: 13 }}>▸ Instacart Tax Calculator</span><span style={{ fontSize: 13, color: '#e05070', fontWeight: 700 }}>→</span></a>
              <a href="/lyft" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)' }}><span style={{ fontSize: 13 }}>▸ Lyft Tax Calculator</span><span style={{ fontSize: 13, color: '#e05070', fontWeight: 700 }}>→</span></a>
              <a href="/etsy" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)' }}><span style={{ fontSize: 13 }}>▸ Etsy Tax Calculator</span><span style={{ fontSize: 13, color: '#e05070', fontWeight: 700 }}>→</span></a>
          </div>

          {/* OWN BANNER — privatepaycheck.com */}
            <a href="https://privatepaycheck.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', background: 'linear-gradient(135deg,#091526,#102040)', border: '1px solid rgba(245,200,66,0.35)', borderRadius: 10, padding: '20px 16px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#F5C842', marginBottom: 8, fontFamily: 'monospace' }}>W-2 Paycheck Tool</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 6 }}>PrivatePaycheck<span style={{ color: '#F5C842' }}>.com</span></div>
              <div style={{ fontSize: 12, color: '#7A96B8', marginBottom: 12, lineHeight: 1.5 }}>Free paycheck calculator for W-2 employees. All 50 states, 2026 IRS brackets. No signup.</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const, marginBottom: 12 }}>
                <span style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.25)', color: '#F5C842', fontSize: 10, padding: '2px 7px', borderRadius: 3 }}>Salary &amp; Hourly</span>
                <span style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.25)', color: '#F5C842', fontSize: 10, padding: '2px 7px', borderRadius: 3 }}>All 50 States</span>
                <span style={{ background: 'rgba(245,200,66,0.1)', border: '1px solid rgba(245,200,66,0.25)', color: '#F5C842', fontSize: 10, padding: '2px 7px', borderRadius: 3 }}>100% Free</span>
              </div>
              <div style={{ background: '#F5C842', color: '#091526', fontSize: 12, fontWeight: 700, padding: '9px 0', borderRadius: 5, textAlign: 'center' as const }}>Calculate My Paycheck ›</div>
            </a>
            </div>

            {/* STATES LINKS */}
            <PlatformStatesGrid platformSlug="shipt" />

            {/* AD 2 */}
            <div style={{ background: '#07111F', border: '2px dashed rgba(255,255,255,0.15)', borderRadius: 10, overflow: 'hidden' as const }}>
            </div>

            {/* MULTI-APP BANNER */}
            <div style={{ background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, overflow: 'hidden' as const }}>
              <div style={{ background: 'rgba(255,255,255,0.07)', padding: '10px 16px' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> Drive for multiple apps?</span>
              </div>
              <div style={{ padding: '14px 16px' }}>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 10 }}>
                  Working Uber + DoorDash, Instacart + Amazon Flex, or other combinations? Learn how to combine your gig income for taxes.
                </div>
                <a href="/multi-app-gig-taxes-2026" style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#B22234', color: '#fff', padding: '9px 0', borderRadius: 4, fontSize: 12, fontWeight: 700, textAlign: 'center' as const, cursor: 'pointer' }}>
                    → Multi-App Gig Tax Guide 2026
                  </div>
                </a>
                <a href="/multi-platform-gig-tax-calculator-2026" style={{ textDecoration: 'none', display: 'block', marginTop: 8 }}>
                  <div style={{ background: '#e8b84b', color: '#07111F', padding: '9px 0', borderRadius: 4, fontSize: 12, fontWeight: 700, textAlign: 'center' as const, cursor: 'pointer' }}>
                    → Multi-App Tax Calculator 2026
                  </div>
                </a>
              </div>
            </div>

            {/* TRUST */}
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 10 }}> About This Tool</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, textAlign: 'justify' as const }}>
                GigWiseTax.com is an independent, free estimation tool. Not affiliated with {platform.name}, the IRS, or any government agency. No personal data is stored.
              </div>
            </div>
          </div>
        </div>


      <ReviewsSection />
{/* RELATED ARTICLES */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px 24px' }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: '#e8edf8', margin: '0 0 14px' }}>Related Articles</h2>
        <ul style={{ paddingLeft: 20, lineHeight: 2, fontSize: 14 }}>
            <li><a href="/blog/shipt-taxes-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>Shipt Taxes 2026: Complete Guide</a></li>
        </ul>
      </section>
      <TaxFreshness />
<AuthorBox />
      <style>{`
          @media(max-width:960px){.main-grid{grid-template-columns:1fr!important}.form-grid{grid-template-columns:1fr!important}.p-grid{grid-template-columns:repeat(2,1fr)!important}}
        `}</style>
      </div>
    </>
  )
}
