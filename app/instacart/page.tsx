import { estimateTax, TAX_RULES_2026 } from '@/lib/tax-rules'
import { notFound } from 'next/navigation'
import TaxFreshness from '@/app/components/TaxFreshness'
import AuthorBox from '@/app/components/AuthorBox'
import PlatformStatesGrid from '@/app/components/PlatformStatesGrid'
import { ReviewsSection } from '@/app/components/ReviewsSection'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'

const baseline35 = estimateTax(35000, 0, 'single')
const money = (amount: number) => '$' + amount.toLocaleString('en-US')
const mileageMiles = 10000
const mileageH1Deduction = Math.round(mileageMiles * TAX_RULES_2026.mileage.h1)
const mileageH2Deduction = Math.round(mileageMiles * TAX_RULES_2026.mileage.h2)

export async function generateStaticParams() { return [{ platform: 'instacart' }] }

export async function generateMetadata({ params }: { params: { platform: string } }): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'instacart')
  if (!p) return {}
  return {
    title: 'Instacart Tax Calculator 2026 | Free Shopper Estimate',
    description: 'Estimate 2026 Instacart taxes on 1099 income. Includes self-employment, federal tax, mileage and a simplified state estimate. Free; no signup.',
    keywords: `instacart tax calculator, instacart shopper taxes 2026, instacart self employment tax, instacart quarterly taxes, how much tax do instacart shoppers pay`,
    alternates: { canonical: `https://www.gigwisetax.com/${p.slug}` },
    openGraph: {
      title: 'Instacart Tax Calculator 2026 | Free Shopper Estimate',
      description: 'Estimate 2026 Instacart taxes on 1099 income. Includes self-employment, federal tax, mileage and a simplified state estimate. Free; no signup.',
      url: `https://www.gigwisetax.com/${p.slug}`,
    },
  }
}


export default function PlatformPage({ params }: { params: { platform: string } }) {
  const platform = PLATFORMS.find(p => p.slug === 'instacart')
  if (!platform) return notFound()

  const deductions = DEDUCTIONS['instacart' as keyof typeof DEDUCTIONS] || DEDUCTIONS.doordash
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

  const deductionsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Top Tax Deductions for Instacart Workers 2026`,
    numberOfItems: 12,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: `Mileage deduction (${TAX_RULES_2026.mileage.h1 * 100}¢/mile Jan–Jun, ${TAX_RULES_2026.mileage.h2 * 100}¢ Jul–Dec)` },
      { '@type': 'ListItem', position: 2, name: "Phone bill" },
      { '@type': 'ListItem', position: 3, name: "Auto insurance" },
      { '@type': 'ListItem', position: 4, name: "Insulated grocery bags" },
      { '@type': 'ListItem', position: 5, name: "Car washes" },
      { '@type': 'ListItem', position: 6, name: "Parking fees & tolls" },
      { '@type': 'ListItem', position: 7, name: "Car accessories" },
      { '@type': 'ListItem', position: 8, name: "Half of self-employment tax" },
      { '@type': 'ListItem', position: 9, name: "Accounting & tax software" },
      { '@type': 'ListItem', position: 10, name: "Business bank account fees" },
      { '@type': 'ListItem', position: 11, name: "EV charging costs" },
      { '@type': 'ListItem', position: 12, name: "Health insurance premiums" }
    ],
  };

  const card = { background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, marginBottom: 20, boxShadow: '0 2px 12px rgba(0,0,0,.3)', overflow: 'hidden' as const }
  const cardHd = { background: 'rgba(255,255,255,0.07)', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }

  return (
    <>

      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(deductionsSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com","logo":"https://www.gigwisetax.com/og-image.png","description":"Free gig worker tax calculators and guides for US independent contractors."}` }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Instacart Shopper Tax Calculator 2026","item":"https://www.gigwisetax.com/instacart"}]}` }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Instacart Shopper Tax Calculator 2026","url":"https://www.gigwisetax.com/instacart","dateModified":"${TAX_RULES_2026.verifiedOn}","author":{"@type":"Organization","name":"the GigWiseTax Team","url":"https://www.gigwisetax.com"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"}}` }}/>

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
              Free {platform.name} tax calculator for Full-Service shoppers in 2026. Estimate federal self-employment and income tax plus a simplified state-rate input; it does not calculate the full state tax schedule.
              Get your quarterly estimated payment schedule with Google Calendar export. No signup required — results are instant.
              Choose your filing status and state, enter earnings and mileage, and review the model's assumptions before using the estimate for planning.
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
          <li>{'Federal-only example: $35,000 net profit, Single, no mileage entered = ' + money(baseline35.total) + ' estimated federal taxes; state tax is not included.'}</li>
          <li>{'Illustrative quarterly amount for that example: ' + money(baseline35.quarterly) + '. Actual payment depends on withholding and safe-harbor rules.'}</li>
          <li>{'2026 mileage rates: ' + TAX_RULES_2026.mileage.h1 * 100 + '¢/mile Jan–Jun and ' + TAX_RULES_2026.mileage.h2 * 100 + '¢/mile Jul–Dec.'}</li>
          <li>{'The general 2026 1099-NEC threshold is ' + money(TAX_RULES_2026.form1099Threshold.year2026) + '; all taxable income remains reportable.'}</li>
          <li>Full-Service shoppers may receive 1099 forms; In-Store shoppers are W-2 employees and use a different tax model.</li>
            </ul>
          </div>
          {/* ANSWER-FIRST GEO BLOCK */}
          <div style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', margin:'16px 0' }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>2026 Tax Summary — Instacart</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              For Full-Service shopper income, a $35,000 net-profit, Single-filer example with no mileage deduction entered gives an estimated {money(baseline35.se)} self-employment tax + {money(baseline35.federal)} federal income tax = <strong style={{ color:'#fff' }}>{money(baseline35.total)} federal total</strong>. The illustrative quarterly amount is <strong style={{ color:'#e8b84b' }}>{money(baseline35.quarterly)}</strong>. This excludes state tax and does not apply to In-Store W-2 wages.
            </p>
          </div>

            {/* TAX GUIDE */}
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}> {platform.name} Tax Guide 2026</span>
              </div>
              <div style={{ padding: 24 }}>

                <h2 style={{ fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12 }}>
                  How {platform.name} Taxes Work in 2026
                </h2>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, textAlign: 'justify', marginBottom: 20 }}>
                  As a Full-Service {platform.name} Shopper (shop + deliver), you are classified as an <strong>independent contractor (1099)</strong> — not an employee.
                  This means {platform.name} does not withhold any federal, state, or Social Security/Medicare taxes from Full-Service Shopper payments.
                  You are responsible for calculating and paying your own taxes directly to the IRS four times per year.
                  <strong>In-Store Shoppers</strong> are part-time employees who receive a W-2 with taxes already withheld — this calculator isn't for you; try our free <a href="https://privatepaycheck.com" target="_blank" rel="noopener noreferrer" style={{ color: '#F5C842' }}>W-2 paycheck calculator</a> instead.
                </p>

                <div style={{ background: 'rgba(178,34,52,0.12)', border: '1px solid rgba(178,34,52,0.35)', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                  <div style={{ fontWeight: 700, color: '#B22234', marginBottom: 8 }}> Estimated payments depend on your whole return</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
                    Full-Service shoppers may need federal estimated payments depending on expected tax after withholding and safe-harbor rules. In-Store W-2 shoppers have withholding and a different calculation; use your full return rather than a universal set-aside percentage.
                  </p>
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12 }}>
                  What Taxes Do {platform.name} Workers Pay?
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }} className="form-grid">
                  {[
                    { label: ' Self-Employment Tax', value: 'Schedule SE', detail: 'Calculated from net self-employment earnings', color: '#B22234' },
                    { label: ' Federal Income Tax', value: '10–37%', detail: 'Based on total taxable income', color: 'rgba(255,255,255,0.9)' },
                    { label: ' State Estimate', value: 'Varies', detail: 'Simplified rate input; not a full state schedule', color: 'rgba(255,255,255,0.9)' },
                    { label: ' SE Tax Deduction', value: '50% off', detail: 'Deduct half of SE tax from taxable income', color: '#059669' },
                  ].map(item => (
                    <div key={item.label} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 14, borderLeft: `4px solid ${item.color}` }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.55)', marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: item.color, marginBottom: 4 }}>{item.value}</div>
                      <div style={{ fontSize: 11, color: '#7a9abf' }}>{item.detail}</div>
                    </div>
                  ))}
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12 }}>
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
                        <td style={{ padding: '12px 14px', fontWeight: 800, color: d.isNext ? '#B22234' : 'rgba(255,255,255,0.85)', fontSize: 14 }}>
                          {d.isNext && <span style={{ background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 5px', borderRadius: 2, marginRight: 6, fontWeight: 800 }}>NEXT</span>}
                          {d.q} 2026
                        </td>
                        <td data-label="Period" style={{ padding: '12px 14px', color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>{d.period}</td>
                        <td style={{ padding: '12px 14px', fontWeight: 700, color: d.isNext ? '#B22234' : 'rgba(255,255,255,0.85)', fontSize: 14 }}>{d.due}</td>
                        <td data-label="Status" style={{ padding: '12px 14px' }}>
                          <span style={{ background: d.isNext ? 'rgba(178,34,52,0.25)' : 'rgba(255,255,255,0.08)', color: d.isNext ? '#fca5a5' : 'rgba(255,255,255,0.7)', padding: '3px 10px', borderRadius: 12, fontSize: 12, fontWeight: 700 }}>{d.isPast ? 'Passed' : d.isNext ? 'Next due' : 'Upcoming'}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* DEDUCTIONS */}
                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12 }}>
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
                    <div style={{ fontWeight: 700, color: '#7dd3fc', marginBottom: 8 }}>▸ 2026 IRS Mileage Rate: {TAX_RULES_2026.mileage.h1 * 100}¢ (Jan–Jun) / {TAX_RULES_2026.mileage.h2 * 100}¢ (Jul–Dec)</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
                      The rate depends on when qualifying business miles were driven. Track every delivery mile using a mileage log. For 10,000 qualifying miles, the deduction is about <strong>{money(mileageH1Deduction)}</strong> if all are in January–June or <strong>{money(mileageH2Deduction)}</strong> if all are in July–December; actual tax savings depend on your return.
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
                    <div style={{ fontWeight: 700, color: '#b45309', marginBottom: 8 }}> {platform.name} Creator Tip: Home Office Deduction</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
                      If you use a dedicated space at home exclusively for your {platform.name} business, you can deduct home office expenses.
                      The simplified method allows <strong>$5 per square foot</strong> (up to 300 sq ft = $1,500 deduction).
                      Equipment, camera gear, and software are fully deductible in the year of purchase under Section 179.
                    </p>
                  </div>
                )}

                {/* FAQ */}
                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 16 }}>
                  Frequently Asked Questions — {platform.name} Taxes 2026
                </h3>
                {[
                  {
                    q: `Does ${platform.name} withhold taxes from my payments?`,
                    a: `It depends on your role. Full-Service Shoppers are independent contractors (1099) — ${platform.name} does not withhold federal income tax, state income tax, Social Security, or Medicare taxes; you must calculate and pay these yourself using IRS Form 1040-ES. In-Store Shoppers are part-time employees who get a W-2 with taxes already withheld — see the free W-2 paycheck calculator further down this page instead.`,
                  },
                  {
                    q: `How much should I set aside for ${platform.name} taxes?`,
                    a: `There is no universal set-aside percentage. Full-Service shoppers should estimate tax from net profit, filing status, other income, state, withholding, and eligible deductions; In-Store W-2 wages use a different model.`,
                  },
                  {
                    q: `What 1099 form does ${platform.name} send?`,
                    a: `The general 2026 1099-NEC threshold for nonemployee compensation is ${money(TAX_RULES_2026.form1099Threshold.year2026)}; 1099-K reporting follows separate payment-processor rules. You must report all taxable income even if you do not receive a form.`,
                  },
                  {
                    q: `What is the self-employment tax rate for ${platform.name} in 2026?`,
                    a: `Self-employment tax is calculated on net self-employment earnings under Schedule SE; the calculator applies its current 2026 model. The Social Security wage base for 2026 is ${money(TAX_RULES_2026.ssWageBase)}. Actual results may also depend on W-2 wages, spouse income, and other parts of your return.`,
                  },
                  {
                    q: `Do I need to pay ${platform.name} taxes if I earn less than the 1099 threshold?`,
                    a: `The general 2026 1099-NEC threshold is ${money(TAX_RULES_2026.form1099Threshold.year2026)}; this reporting threshold does not decide whether income is taxable. Report all taxable income.`,
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
                {PLATFORMS.filter(p => p.slug !== 'instacart').map(p => (
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
              <a href="/doordash" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)' }}><span style={{ fontSize: 13 }}>▸ DoorDash Tax Calculator</span><span style={{ fontSize: 13, color: '#e05070', fontWeight: 700 }}>→</span></a>
              <a href="/uber" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)' }}><span style={{ fontSize: 13 }}>▸ Uber Tax Calculator</span><span style={{ fontSize: 13, color: '#e05070', fontWeight: 700 }}>→</span></a>
              <a href="/lyft" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)' }}><span style={{ fontSize: 13 }}>▸ Lyft Tax Calculator</span><span style={{ fontSize: 13, color: '#e05070', fontWeight: 700 }}>→</span></a>
              <a href="/amazon-flex" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)' }}><span style={{ fontSize: 13 }}>▸ Amazon Flex Tax Calculator</span><span style={{ fontSize: 13, color: '#e05070', fontWeight: 700 }}>→</span></a>
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
            <PlatformStatesGrid platformSlug="instacart" />

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
                GigWiseTax.com is an independent, free estimation tool. Not affiliated with {platform.name}, the IRS, or any government agency. Calculator inputs stay in your browser; hosting and analytics may process technical data.
              </div>
            </div>
          </div>
        </div>

        
      <ReviewsSection />
{/* RELATED ARTICLES */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px 24px' }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: '#e8edf8', margin: '0 0 14px' }}>Related Articles</h2>
        <ul style={{ paddingLeft: 20, lineHeight: 2, fontSize: 14 }}>
            <li><a href="/blog/instacart-shopper-taxes-2026" style={{ color: '#e8b84b', textDecoration: 'none' }}>Instacart Shopper Taxes 2026: Complete Guide</a></li>
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
