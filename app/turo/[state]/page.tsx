import { notFound } from 'next/navigation'
import AuthorBox from '@/app/components/AuthorBox'
import { PLATFORMS, STATES as ALL_STATES, DEADLINES_2026 } from '@/lib/data'
import GigCalculator from '../GigCalculator'
import type { Metadata } from 'next'

const PLATFORM_SLUG = 'turo'
const PLATFORM_NAME = 'Turo'
const PLATFORM_EMOJI = ''

const STATES = [
  {
    "slug": "alabama",
    "name": "Alabama",
    "abbr": "AL",
    "rate": 0.05
  },
  {
    "slug": "alaska",
    "name": "Alaska",
    "abbr": "AK",
    "rate": 0
  },
  {
    "slug": "arizona",
    "name": "Arizona",
    "abbr": "AZ",
    "rate": 0.025
  },
  {
    "slug": "arkansas",
    "name": "Arkansas",
    "abbr": "AR",
    "rate": 0.044
  },
  {
    "slug": "california",
    "name": "California",
    "abbr": "CA",
    "rate": 0.093
  },
  {
    "slug": "colorado",
    "name": "Colorado",
    "abbr": "CO",
    "rate": 0.044
  },
  {
    "slug": "connecticut",
    "name": "Connecticut",
    "abbr": "CT",
    "rate": 0.0699
  },
  {
    "slug": "delaware",
    "name": "Delaware",
    "abbr": "DE",
    "rate": 0.066
  },
  {
    "slug": "florida",
    "name": "Florida",
    "abbr": "FL",
    "rate": 0
  },
  {
    "slug": "georgia",
    "name": "Georgia",
    "abbr": "GA",
    "rate": 0.055
  },
  {
    "slug": "hawaii",
    "name": "Hawaii",
    "abbr": "HI",
    "rate": 0.11
  },
  {
    "slug": "idaho",
    "name": "Idaho",
    "abbr": "ID",
    "rate": 0.058
  },
  {
    "slug": "illinois",
    "name": "Illinois",
    "abbr": "IL",
    "rate": 0.0495
  },
  {
    "slug": "indiana",
    "name": "Indiana",
    "abbr": "IN",
    "rate": 0.0305
  },
  {
    "slug": "iowa",
    "name": "Iowa",
    "abbr": "IA",
    "rate": 0.06
  },
  {
    "slug": "kansas",
    "name": "Kansas",
    "abbr": "KS",
    "rate": 0.057
  },
  {
    "slug": "kentucky",
    "name": "Kentucky",
    "abbr": "KY",
    "rate": 0.04
  },
  {
    "slug": "louisiana",
    "name": "Louisiana",
    "abbr": "LA",
    "rate": 0.03
  },
  {
    "slug": "maine",
    "name": "Maine",
    "abbr": "ME",
    "rate": 0.0715
  },
  {
    "slug": "maryland",
    "name": "Maryland",
    "abbr": "MD",
    "rate": 0.0575
  },
  {
    "slug": "massachusetts",
    "name": "Massachusetts",
    "abbr": "MA",
    "rate": 0.05
  },
  {
    "slug": "michigan",
    "name": "Michigan",
    "abbr": "MI",
    "rate": 0.0425
  },
  {
    "slug": "minnesota",
    "name": "Minnesota",
    "abbr": "MN",
    "rate": 0.0985
  },
  {
    "slug": "mississippi",
    "name": "Mississippi",
    "abbr": "MS",
    "rate": 0.047
  },
  {
    "slug": "missouri",
    "name": "Missouri",
    "abbr": "MO",
    "rate": 0.048
  },
  {
    "slug": "montana",
    "name": "Montana",
    "abbr": "MT",
    "rate": 0.059
  },
  {
    "slug": "nebraska",
    "name": "Nebraska",
    "abbr": "NE",
    "rate": 0.0664
  },
  {
    "slug": "nevada",
    "name": "Nevada",
    "abbr": "NV",
    "rate": 0
  },
  {
    "slug": "new-hampshire",
    "name": "New Hampshire",
    "abbr": "NH",
    "rate": 0
  },
  {
    "slug": "new-jersey",
    "name": "New Jersey",
    "abbr": "NJ",
    "rate": 0.1075
  },
  {
    "slug": "new-mexico",
    "name": "New Mexico",
    "abbr": "NM",
    "rate": 0.059
  },
  {
    "slug": "new-york",
    "name": "New York",
    "abbr": "NY",
    "rate": 0.0685
  },
  {
    "slug": "north-carolina",
    "name": "North Carolina",
    "abbr": "NC",
    "rate": 0.0475
  },
  {
    "slug": "north-dakota",
    "name": "North Dakota",
    "abbr": "ND",
    "rate": 0.025
  },
  {
    "slug": "ohio",
    "name": "Ohio",
    "abbr": "OH",
    "rate": 0.035
  },
  {
    "slug": "oklahoma",
    "name": "Oklahoma",
    "abbr": "OK",
    "rate": 0.05
  },
  {
    "slug": "oregon",
    "name": "Oregon",
    "abbr": "OR",
    "rate": 0.099
  },
  {
    "slug": "pennsylvania",
    "name": "Pennsylvania",
    "abbr": "PA",
    "rate": 0.0307
  },
  {
    "slug": "rhode-island",
    "name": "Rhode Island",
    "abbr": "RI",
    "rate": 0.0599
  },
  {
    "slug": "south-carolina",
    "name": "South Carolina",
    "abbr": "SC",
    "rate": 0.064
  },
  {
    "slug": "south-dakota",
    "name": "South Dakota",
    "abbr": "SD",
    "rate": 0
  },
  {
    "slug": "tennessee",
    "name": "Tennessee",
    "abbr": "TN",
    "rate": 0
  },
  {
    "slug": "texas",
    "name": "Texas",
    "abbr": "TX",
    "rate": 0
  },
  {
    "slug": "utah",
    "name": "Utah",
    "abbr": "UT",
    "rate": 0.0485
  },
  {
    "slug": "vermont",
    "name": "Vermont",
    "abbr": "VT",
    "rate": 0.0875
  },
  {
    "slug": "virginia",
    "name": "Virginia",
    "abbr": "VA",
    "rate": 0.0575
  },
  {
    "slug": "washington",
    "name": "Washington",
    "abbr": "WA",
    "rate": 0
  },
  {
    "slug": "west-virginia",
    "name": "West Virginia",
    "abbr": "WV",
    "rate": 0.065
  },
  {
    "slug": "wisconsin",
    "name": "Wisconsin",
    "abbr": "WI",
    "rate": 0.0765
  },
  {
    "slug": "wyoming",
    "name": "Wyoming",
    "abbr": "WY",
    "rate": 0
  },
  {
    "slug": "washington-dc",
    "name": "District of Columbia",
    "abbr": "DC",
    "rate": 0.0895
  }
]

const DEDUCTIONS = [" Vehicle maintenance"," Insurance premiums"," Depreciation"," Car cleaning & detailing"," Parking costs"," Turo platform fees"," Phone (business use)"," Home office"]


export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params
  const s = STATES.find(x => x.slug === stateSlug)
  if (!s) return {}
  const rateStr = s.rate === 0 ? 'No State Tax' : `${(s.rate*100).toFixed(2).replace(/\.?0+$/,'')}% State Tax`
  return {
    title: `Turo ${s.name} Taxes 2026 — $40K = $5,652 SE Tax`,
    description: `Turo ${s.name} 2026: $50K net = ~$7,065 SE tax + $4,500 fed. ${rateStr}. Quarterly: ~$2,891. Free calculator, no signup.`,
    alternates: { canonical: `https://www.gigwisetax.com/turo/${s.slug}` },
    keywords: `${PLATFORM_SLUG} taxes ${s.name.toLowerCase()} 2026, ${PLATFORM_SLUG} tax calculator ${s.abbr.toLowerCase()}, gig worker taxes ${s.name.toLowerCase()}`,
  }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params
  const state = STATES.find(s => s.slug === stateSlug)
  if (!state) return notFound()

  const rateStr = state.rate === 0 ? 'No State Tax' : `${(state.rate*100).toFixed(2).replace(/\.?0+$/,'')}%`
  const noTax = state.rate === 0
  const fedRate = 0.22
  const seRate = 0.153

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How are Turo hosts taxed?","acceptedAnswer":{"@type":"Answer","text":"Turo hosts report car-sharing income on Schedule C as self-employment income. You pay 15.3% self-employment tax plus income tax on net profit after deductions like depreciation, insurance, and Turo fees."}},{"@type":"Question","name":"What can Turo hosts deduct on taxes?","acceptedAnswer":{"@type":"Answer","text":"Turo hosts can deduct vehicle depreciation, insurance, Turo service fees (25-35% of revenue), cleaning costs, maintenance, and repairs proportional to rental use. Depreciation is often the largest deduction."}},{"@type":"Question","name":"Does Turo send a 1099?","acceptedAnswer":{"@type":"Answer","text":"Yes. Turo issues a 1099-K to hosts earning over $600. All rental income must be reported on your tax return. Use Schedule C to report income and deductions as a self-employed host."}}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Turo Tax Calculator","item":"https://www.gigwisetax.com/turo"},{"@type":"ListItem","position":3,"name":"' + state.name + '","item":"https://www.gigwisetax.com/turo/' + state.slug + '"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Turo Tax Calculator ' + state.name + ' 2026","datePublished":"2026-01-01","dateModified":"2026-05-29","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/turo/' + state.slug + '"}}' }} />
      <div style={{ background: '#07111F', minHeight: '100vh' }}>
        <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#07111F)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 16px 12px' }}>
            <nav style={{ fontSize: 14, color: 'rgba(255,255,255,.5)', marginBottom: 8 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
              <span style={{ margin: '0 8px' }}>›</span>
              <a href="/turo" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Turo Tax Calculator</a>
              <span style={{ margin: '0 8px' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,.7)' }}>{state.name}</span>
            </nav>
            <h1 style={{ fontSize: 'clamp(22px,5vw,28px)', fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: '0 0 12px' }}>
              Turo Tax Calculator — {state.name} 2026
            </h1>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, maxWidth: 780, marginBottom: 8 }}>
              {'Free Turo host tax calculator for ' + state.name + ' (' + state.abbr + '). ' + (noTax ? state.name + ' has no state income tax — you only pay federal SE tax (15.3%) and federal income tax.' : 'Includes the ' + rateStr + ' ' + state.name + ' state income tax plus federal SE tax (15.3%).') + ' No signup required.'}
            </p>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4px 16px 0' }}>
          <div style={{ fontSize:13, color:'rgba(255,255,255,0.45)', marginBottom:16, display:'flex', gap:12, flexWrap:'wrap' as const }}>
            <span>Last updated: May 2026</span><span>·</span>
            <span>By Ethan Blake · Tax Compliance Specialist</span><span>·</span>
            <span>{'~5 min read · 1,200 words'}</span>
          </div>
          <section id="answer-first" style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', marginBottom:24 }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>Quick Answer — Turo Taxes {state.name} 2026</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              {'Turo hosts in ' + state.name + ' earning $50,000 net owe approximately $11,565 total — $7,065 self-employment tax (15.3%) + $4,500 federal income tax' + (noTax ? '. ' + state.name + ' has no state income tax.' : ' + ' + rateStr + ' ' + state.name + ' state income tax.') + ' Quarterly estimated payment: ~$2,891. Top deductions: vehicle depreciation, insurance, Turo fees, mileage at 72.5¢/mile.'}
            </p>
          </section>
          <section id="key-takeaways" style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', marginBottom:24 }}>
            <h2 style={{ fontSize:'clamp(16px,3vw,18px)', fontWeight:700, color:'#e8b84b', marginBottom:12, marginTop:0 }}>Key Takeaways</h2>
            <ul style={{ margin:0, padding:'0 0 0 18px', lineHeight:1.9, fontSize:14, color:'#C8D8EC' }}>
              <li>Turo hosts are independent contractors — Turo withholds zero taxes</li>
              <li>{'On $50,000 net income: ~$7,065 SE tax + ~$4,500 federal = ~$11,565 total in ' + state.name}</li>
              <li>{'Quarterly payments due Apr 15, Jun 16, Sep 15, Jan 15 — ~$2,891 each'}</li>
              <li>Vehicle depreciation is the largest deduction — up to $12,400/year</li>
              <li>Deduct Turo service fees (25-35% of revenue), insurance, cleaning, repairs</li>
              <li>File Schedule C — report all Turo income on your federal tax return</li>
            </ul>
          </section>
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px 20px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }} className="main-grid">
          <div>
            <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:14, marginBottom:20 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color:'rgba(255,255,255,0.9)', marginBottom: 16 }}>Interactive Tax Calculator</h2>
              <GigCalculator platform={PLATFORMS.find(p => p.slug === PLATFORM_SLUG)!} states={ALL_STATES} deadlines={DEADLINES_2026} />
            </div>
            <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:14, marginBottom:20 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color:'rgba(255,255,255,0.9)', marginBottom: 12 }}>{'How Much Tax Do Turo Hosts Pay in ' + state.name + '?'}</h2>
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, marginBottom:16 }}>
                {state.name + (noTax ? ' has no state income tax. Turo hosts in ' + state.name + ' only pay federal income tax and the 15.3% self-employment tax.' : ' has a ' + rateStr + ' state income tax rate. Turo hosts in ' + state.name + ' must make both federal and state quarterly estimated tax payments.')}
              </p>
              <blockquote style={{ borderLeft:'3px solid rgba(232,184,75,0.5)', margin:'16px 0', padding:'12px 20px', background:'rgba(232,184,75,0.04)', borderRadius:'0 6px 6px 0' }}>
                <p style={{ margin:0, fontSize:13, fontStyle:'italic', color:'rgba(255,255,255,0.7)', lineHeight:1.7 }}>
                  {'Car-sharing income is generally self-employment income subject to Schedule C reporting and self-employment tax.'} — <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{ color:'#e8b84b' }}>IRS Self-Employed Tax Center</a>
                </p>
              </blockquote>
              <div style={{ overflowX:'auto', marginBottom:24, borderRadius:6, border:'1px solid rgba(255,255,255,0.08)' }}>
                <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
                  <thead>
                    <tr style={{ background:'rgba(232,184,75,0.08)' }}>
                      <th style={{ padding:'10px 14px', textAlign:'left', color:'#e8b84b', fontSize:13 }}>Annual Net Income</th>
                      <th style={{ padding:'10px 14px', textAlign:'left', color:'#e8b84b', fontSize:13 }}>SE Tax</th>
                      {!noTax && <th style={{ padding:'10px 14px', textAlign:'left', color:'#e8b84b', fontSize:13 }}>State Tax</th>}
                      <th style={{ padding:'10px 14px', textAlign:'left', color:'#e8b84b', fontSize:13 }}>Federal Tax</th>
                      <th style={{ padding:'10px 14px', textAlign:'left', color:'#e8b84b', fontSize:13 }}>Total Est.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[10000,25000,50000,75000,100000].map((income,i,arr) => {
                      const se = Math.round(income * seRate * 0.9235)
                      const st = noTax ? 0 : Math.round(income * state.rate)
                      const fed = Math.round((income - se/2) * fedRate * 0.6)
                      const total = se + st + fed
                      const isLast = i === arr.length - 1
                      return (
                        <tr key={income} style={{ borderBottom:'1px solid rgba(255,255,255,0.05)', ...(isLast ? { background:'rgba(232,184,75,0.08)', borderTop:'1px solid rgba(232,184,75,0.3)' } : {}) }}>
                          <td style={{ padding:'10px 14px', fontWeight:600, color: isLast ? '#e8b84b' : 'rgba(255,255,255,0.85)' }}>${income.toLocaleString()}</td>
                          <td style={{ padding:'10px 14px', color:'rgba(255,255,255,0.7)' }}>${se.toLocaleString()}</td>
                          {!noTax && <td style={{ padding:'10px 14px', color:'rgba(255,255,255,0.7)' }}>${st.toLocaleString()}</td>}
                          <td style={{ padding:'10px 14px', color:'rgba(255,255,255,0.7)' }}>${fed.toLocaleString()}</td>
                          <td style={{ padding:'10px 14px', fontWeight:700, color: isLast ? '#e8b84b' : 'rgba(255,255,255,0.85)' }}>${total.toLocaleString()}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:14, marginBottom:20 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color:'rgba(255,255,255,0.9)', marginBottom: 12 }}>{'Top Turo Deductions in ' + state.name}</h2>
              <ul style={{ margin:0, padding:'0 0 0 18px', lineHeight:1.9, fontSize:14, color:'#C8D8EC' }}>
                {DEDUCTIONS.map((d: string) => <li key={d}>{d}</li>)}
              </ul>
            </div>
            <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:14, marginBottom:20 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color:'rgba(255,255,255,0.9)', marginBottom: 12 }}>{'FAQ — Turo Taxes in ' + state.name + ' 2026'}</h2>
              {[
                { q: 'Do Turo hosts pay taxes in ' + state.name + '?', a: noTax ? 'Yes. In ' + state.name + ', Turo hosts pay 15.3% self-employment tax plus federal income tax. There is no ' + state.name + ' state income tax.' : 'Yes. In ' + state.name + ', Turo hosts pay 15.3% SE tax, federal income tax (10-37%), plus ' + rateStr + ' ' + state.name + ' state income tax.' },
                { q: 'Do I need quarterly payments in ' + state.name + '?', a: noTax ? 'In ' + state.name + ', you only need federal quarterly estimated payments (Form 1040-ES) if you expect to owe $1,000 or more.' : 'Yes. In ' + state.name + ', make both federal (Form 1040-ES) and state quarterly estimated payments if you expect to owe $1,000 or more.' },
                { q: 'Does Turo take out taxes in ' + state.name + '?', a: 'No. Turo does not withhold taxes. You pay all SE tax, federal income tax' + (noTax ? '' : ', and ' + state.name + ' state income tax') + ' yourself through quarterly estimated payments.' },
              ].map((item, i) => (
                <div key={i} style={{ borderBottom:'1px solid rgba(255,255,255,0.08)', paddingBottom:10, marginBottom:8 }}>
                  <div style={{ fontWeight:700, color:'rgba(255,255,255,0.9)', fontSize:15, marginBottom:6 }}>{item.q}</div>
                  <div style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.7 }}>{item.a}</div>
                </div>
              ))}
            </div>
            <div style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:10, padding:14, marginBottom:20 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, color:'rgba(255,255,255,0.9)', marginBottom: 12 }}>Turo Tax in Other States</h2>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:6 }} className="p-grid">
                {ALL_STATES.filter(s => s.slug !== state.slug).map(s => (
                  <a key={s.slug} href={'/turo/' + s.slug} style={{ textDecoration:'none' }}>
                    <div style={{ border:'1px solid rgba(255,255,255,0.1)', borderRadius:4, padding:'6px 8px', textAlign:'center' as const, background:'rgba(255,255,255,0.03)' }}>
                      <div style={{ fontSize:15, fontWeight:700, color:'rgba(255,255,255,0.9)', marginBottom:1 }}>{s.abbr}</div>
                      <div style={{ fontSize:13, color: s.rate === 0 ? '#059669' : '#e8b84b', fontWeight:600 }}>{s.rate === 0 ? 'No Tax' : (s.rate*100).toFixed(1) + '%'}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column' as const, gap:16 }}>
            <a href="https://privatepaycheck.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration:'none', display:'block', background:'linear-gradient(135deg,#091526,#102040)', border:'1px solid rgba(245,200,66,0.35)', borderRadius:10, padding:'20px 16px' }}>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase' as const, color:'#F5C842', marginBottom:8, fontFamily:'monospace' }}>W-2 Paycheck Tool</div>
              <div style={{ fontSize:17, fontWeight:700, color:'#fff', marginBottom:6 }}>PrivatePaycheck<span style={{ color:'#F5C842' }}>.com</span></div>
              <div style={{ fontSize:14, color:'#7A96B8', marginBottom:8, lineHeight:1.5 }}>Free paycheck calculator for W-2 employees. All 50 states, 2026 IRS brackets. No signup.</div>
              <div style={{ background:'#F5C842', color:'#091526', fontSize:15, fontWeight:700, padding:'10px 0', borderRadius:5, textAlign:'center' as const }}>Calculate My Paycheck</div>
            </a>
            <div style={{ background:'#07111F', border:'1px solid rgba(255,255,255,0.12)', borderRadius:6, overflow:'hidden' as const }}>
              <div style={{ background:'rgba(255,255,255,0.07)', padding:'10px 16px' }}>
                <span style={{ fontSize:13, fontWeight:700, color:'rgba(255,255,255,.7)', textTransform:'uppercase' as const, letterSpacing:'1px' }}>Other Platforms in {state.abbr}</span>
              </div>
              {PLATFORMS.filter(p => p.slug !== PLATFORM_SLUG).map(p => (
                <a key={p.slug} href={'/' + p.slug + '/' + state.slug} style={{ textDecoration:'none' }}>
                  <div style={{ padding:'10px 16px', borderBottom:'1px solid rgba(255,255,255,0.08)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:15, fontWeight:500, color:'rgba(255,255,255,0.85)' }}>{p.name} in {state.abbr}</span>
                    <span style={{ fontSize:13, color:'#e8b84b', fontWeight:700 }}>{p.searches}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px 40px' }}>
          <AuthorBox />
        </div>
        <style>{`
          @media(max-width:960px){.main-grid{grid-template-columns:1fr!important}.p-grid{grid-template-columns:repeat(3,1fr)!important}}
          @media(max-width:540px){.p-grid{grid-template-columns:repeat(2,1fr)!important}}
        `}</style>
      </div>
    </>
  )
}