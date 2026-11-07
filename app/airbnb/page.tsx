import { TAX_RULES_2026 as GTX_RULES } from '@/lib/tax-rules'
import { notFound } from 'next/navigation'
import TaxFreshness from '@/app/components/TaxFreshness'
import AuthorBox from '@/app/components/AuthorBox'
import PlatformStatesGrid from '@/app/components/PlatformStatesGrid'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS, MILEAGE_RATE_2026 } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'

export async function generateStaticParams() { return [{ platform: 'airbnb' }] }

export async function generateMetadata({ params }: { params: { platform: string } }): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'airbnb')
  if (!p) return {}
  return {
    title: 'Airbnb Host Tax Calculator 2026 | Schedule E & C Estimates',
    description: 'Estimate Airbnb rental-income taxes with Schedule E or Schedule C assumptions. Includes federal tax and a simplified state estimate; treatment depends on your activity and services.',
    keywords: `airbnb tax calculator, airbnb host taxes 2026, airbnb self employment tax, airbnb rental income taxes, how much tax do airbnb hosts pay`,
    alternates: { canonical: `https://www.gigwisetax.com/${p.slug}` },
    openGraph: {
      title: 'Airbnb Host Tax Calculator 2026 | Schedule E & C Estimates',
      description: 'Estimate Airbnb rental-income taxes with Schedule E or Schedule C assumptions. Includes federal tax and a simplified state estimate; treatment depends on your activity and services.',
      url: `https://www.gigwisetax.com/${p.slug}`,
    },
  }
}


export default function PlatformPage({ params }: { params: { platform: string } }) {
  const platform = PLATFORMS.find(p => p.slug === 'airbnb')
  if (!platform) return notFound()

  const deductions = DEDUCTIONS['airbnb' as keyof typeof DEDUCTIONS] || DEDUCTIONS.doordash
  const isPlatformDriver = false
  const isRental = true
  const isCreator = false

  const deductionsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Top Tax Deductions for Airbnb Workers 2026`,
    numberOfItems: 12,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: "Airbnb service fee (3%)" },
      { '@type': 'ListItem', position: 2, name: "Mortgage interest (proportional)" },
      { '@type': 'ListItem', position: 3, name: "Property taxes (proportional)" },
      { '@type': 'ListItem', position: 4, name: "Utilities (proportional)" },
      { '@type': 'ListItem', position: 5, name: "Cleaning & turnover costs" },
      { '@type': 'ListItem', position: 6, name: "Home furnishings & supplies" },
      { '@type': 'ListItem', position: 7, name: "Repairs & maintenance" },
      { '@type': 'ListItem', position: 8, name: "Depreciation (Schedule E)" },
      { '@type': 'ListItem', position: 9, name: "Internet & cable" },
      { '@type': 'ListItem', position: 10, name: "Tax preparation and accounting fees (if eligible)" },
      { '@type': 'ListItem', position: 11, name: "Accounting & tax software" },
      { '@type': 'ListItem', position: 12, name: "Home insurance (proportional)" }
    ],
  };

  const card = { background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, marginBottom: 20, boxShadow: '0 2px 12px rgba(0,0,0,.3)', overflow: 'hidden' as const }
  const cardHd = { background: 'rgba(255,255,255,0.07)', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }

  return (
    <>

      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(deductionsSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to organize Airbnb rental tax records',
        description: 'A recordkeeping checklist for Airbnb rental income; tax classification depends on the rental activity and services.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Track rental income', text: 'Keep booking statements, payout records, and any tax forms received.' },
          { '@type': 'HowToStep', position: 2, name: 'Separate rental and personal use', text: 'Record rental days, personal-use days, and shared expenses for the property.' },
          { '@type': 'HowToStep', position: 3, name: 'Review tax classification', text: 'Use the rental activity and services provided to determine the appropriate reporting treatment; seek professional advice when needed.' },
          { '@type': 'HowToStep', position: 4, name: 'Document expenses', text: 'Keep receipts and records for eligible property expenses, repairs, and depreciation.' },
          { '@type': 'HowToStep', position: 5, name: 'Check payment and filing rules', text: 'Review federal, state, and local lodging-tax requirements for your circumstances.' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com","logo":"https://www.gigwisetax.com/og-image.png","description":"Free gig worker tax calculators and guides for US independent contractors."}` }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Airbnb Host Tax Calculator 2026","item":"https://www.gigwisetax.com/airbnb"}]}` }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Airbnb Host Tax Calculator 2026","url":"https://www.gigwisetax.com/airbnb","dateModified":"${GTX_RULES.verifiedOn}","author":{"@type":"Organization","name":"the GigWiseTax Team","url":"https://www.gigwisetax.com"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"}}` }}/>

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
              Free {platform.name} rental-income tax estimator for 2026. Compare Schedule E and Schedule C assumptions, estimate federal tax, and include a simplified state-rate estimate for all 50 states + DC.
              Tax classification and estimated-payment requirements depend on your facts and full return. No signup required.
              Powered by the <a href="/" style={{ color: 'rgba(255,255,255,.75)', fontWeight: 700 }}>GigWiseTax tax model</a>.
            </p>
            <div style={{ paddingLeft: 16, display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
              {[' Schedule E & C scenarios', ' All 50 States + DC', ' No Signup', ` 2026 Tax Rules`, 'State rate simplified'].map(b => (
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
            <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026} allowScheduleEMode />


          {/* KEY TAKEAWAYS */}
          <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
            <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
          <li>Rental income is not automatically subject to self-employment tax; reporting depends on the activity and services provided.</li>
          <li>The estimator offers separate Schedule E and Schedule C scenarios; it does not decide which applies to your rental.</li>
          <li dangerouslySetInnerHTML={{__html: 'Depreciation, mortgage interest, utilities, and cleaning fees are <strong>top Airbnb deductions</strong>'}}/>
          <li>Rental income from a home rented fewer than 15 days may qualify for a specific exclusion; the 14-day rule has related expense limits.</li>
          <li>Occupancy and lodging taxes are separate from federal and state income tax; local collection rules vary.</li>
            </ul>
          </div>
          {/* ANSWER-FIRST GEO BLOCK */}
          <div style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', margin:'16px 0' }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>Airbnb Rental Income Tax Scenarios — 2026</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              Rental income is generally reported on Schedule E, while substantial guest services or other facts may affect whether Schedule C applies. The calculator lets you compare simplified Schedule E and Schedule C scenarios; it does not determine your tax classification. Federal estimates assume the selected filing status and no other income. State results use a simplified rate and exclude lodging taxes.
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
                  Airbnb hosts are not all classified as independent contractors. Rental income is generally reported under Schedule E; services and other facts can affect whether Schedule C and self-employment tax apply. Airbnb payment reporting does not by itself determine how income is taxed.
                </p>

                <div style={{ background: 'rgba(178,34,52,0.12)', border: '1px solid rgba(178,34,52,0.35)', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                  <div style={{ fontWeight: 700, color: '#B22234', marginBottom: 8 }}> Plan from your full tax picture</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
                    The amount to reserve depends on your rental classification, expenses, other income, withholding, and state/local rules. Estimated payments may be required based on your full return and prior-year safe-harbor amounts.
                  </p>
                </div>

                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12 }}>
                  What Taxes Do {platform.name} Workers Pay?
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }} className="form-grid">
                  {[
                    { label: ' Schedule E scenario', value: 'No SE tax modeled', detail: 'Rental income assumption; classification depends on facts', color: '#059669' },
                    { label: ' Schedule C scenario', value: 'SE tax included', detail: 'For qualifying business-service assumptions', color: '#B22234' },
                    { label: ' Federal income tax', value: 'Estimated', detail: 'Assumes no other income or credits', color: 'rgba(255,255,255,0.9)' },
                    { label: ' State tax', value: 'Simplified', detail: 'Flat-rate estimate; local taxes excluded', color: 'rgba(255,255,255,0.9)' },
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
                    <div style={{ fontWeight: 700, color: '#7dd3fc', marginBottom: 8 }}>▸ 2026 IRS Mileage Rate: 72.5¢ (Jan–Jun) / 76¢ (Jul–Dec)</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
                      The 2026 standard mileage rate is <strong>72.5¢/mile through June, 76¢/mile from July</strong>.
                      Track every delivery mile using a mileage app. For 10,000 business miles driven entirely in one period, the deduction is <strong>$7,250 (Jan–Jun) or $7,600 (Jul–Dec)</strong>. For a mixed-year total, calculate each period's miles separately. This reduces business profit; tax savings depend on your full return.
                      Use the actual expense method if your vehicle costs exceed the standard rate.
                    </p>
                  </div>
                )}

                {isRental && (
                  <div style={{ background: 'rgba(22,101,52,0.12)', border: '1px solid rgba(22,101,52,0.35)', borderRadius: 6, padding: 16, marginBottom: 20 }}>
                    <div style={{ fontWeight: 700, color: '#86efac', marginBottom: 8 }}>▸ Airbnb Hosts: 14-Day Rule</div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 }}>
                      If a home is rented for fewer than 15 days during the year, a federal exclusion may apply; related rental-expense deductions are also limited. Review IRS Publication 527.
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
                  Frequently Asked Questions — {platform.name} Rental Taxes 2026
                </h3>
                {[
                  {
                    q: `Does ${platform.name} withhold taxes from my payments?`,
                    a: `Airbnb hosts are not all independent contractors. Rental income is generally reported on Schedule E; substantial guest services or other facts may change the tax treatment. A tax form from a platform does not determine whether income is Schedule E or Schedule C.`,
                  },
                  {
                    q: `How much should I set aside for ${platform.name} taxes?`,
                    a: `There is no single percentage that fits every host. Consider your rental classification, deductible expenses, other income, withholding, state income tax, and local lodging taxes. Use the calculator only as a planning estimate.`,
                  },
                  {
                    q: `What 1099 form does ${platform.name} send?`,
                    a: `${platform.name} may provide tax-reporting forms depending on your payments and activity. The form type or reporting threshold does not determine whether rental income is taxable; report income according to the applicable tax rules even if no form is received.`,
                  },
                  {
                    q: `Do Airbnb hosts pay self-employment tax in 2026?`,
                    a: `Not all rental income is subject to self-employment tax. Rental income generally reported on Schedule E is not subject to SE tax; substantial services and other facts may affect whether Schedule C treatment applies. This calculator offers scenarios but does not determine your classification.`,
                  },
                  {
                    q: `Do I need to pay ${platform.name} taxes if I earn less than the 1099 threshold?`,
                    a: `Tax-form reporting thresholds do not determine whether rental income is taxable. Reporting and any self-employment tax depend on your facts and applicable rules; consult IRS Publication 527 or a tax professional.`,
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
                {PLATFORMS.filter(p => p.slug !== 'airbnb').map(p => (
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
              <a href="/turo" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)' }}><span style={{ fontSize: 13 }}> Turo Tax Calculator</span><span style={{ fontSize: 13, color: '#e05070', fontWeight: 700 }}>→</span></a>
              <a href="/etsy" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)' }}><span style={{ fontSize: 13 }}>▸ Etsy Tax Calculator</span><span style={{ fontSize: 13, color: '#e05070', fontWeight: 700 }}>→</span></a>
              <a href="/onlyfans" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)' }}><span style={{ fontSize: 13 }}>▸ OnlyFans Tax Calculator</span><span style={{ fontSize: 13, color: '#e05070', fontWeight: 700 }}>→</span></a>
              <a href="/doordash" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)' }}><span style={{ fontSize: 13 }}>▸ DoorDash Tax Calculator</span><span style={{ fontSize: 13, color: '#e05070', fontWeight: 700 }}>→</span></a>
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
            <PlatformStatesGrid platformSlug="airbnb" />

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

        
      <TaxFreshness />
<AuthorBox />
      <style>{`
          @media(max-width:960px){.main-grid{grid-template-columns:1fr!important}.form-grid{grid-template-columns:1fr!important}.p-grid{grid-template-columns:repeat(2,1fr)!important}}
        `}</style>
      </div>
    </>
  )
}
