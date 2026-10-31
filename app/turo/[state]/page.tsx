import { example as gtxExample } from '@/lib/examples'
import { notFound } from 'next/navigation'
import TaxFreshness from '@/app/components/TaxFreshness'

import { estimateTax } from '@/lib/tax-rules'
import AuthorBox from '@/app/components/AuthorBox'
import { PLATFORMS, STATES as ALL_STATES, DEADLINES_2026 } from '@/lib/data'
import GigCalculator from '../GigCalculator'
import type { Metadata } from 'next'

const PLATFORM_SLUG = 'turo'
const PLATFORM_NAME = 'Turo'
const PLATFORM_EMOJI = ''

const DEDUCTIONS = [" Vehicle maintenance"," Insurance premiums"," Depreciation"," Car cleaning & detailing"," Parking costs"," Turo platform fees"," Phone (business use)"," Home office"]


export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params
  const s = ALL_STATES.find(x => x.slug === stateSlug)
  if (!s) return {}
  const rateStr = s.rate === 0 ? 'No State Tax' : `${(s.rate*100).toFixed(2).replace(/\.?0+$/,'')}% State Tax`
  const example50 = estimateTax(50000, s.rate)
  return {
    title: s.rate === 0
      ? `Turo ${s.name} Taxes 2026 — No State Tax + Free SE Calculator`
      : `Turo ${s.name} Taxes 2026 — $50K Earner Owes $${estimateTax(50000, s.rate).total.toLocaleString('en-US')} Total`,
    description: `Turo ${s.name} 2026 planning example: $50K net profit = ~$${example50.se} SE + $${example50.federal} federal + $${example50.state} simplified state estimate; ~$${example50.quarterly} quarterly. Not a tax return.`,
    alternates: { canonical: `https://www.gigwisetax.com/turo/${s.slug}` },
    keywords: `${PLATFORM_SLUG} taxes ${s.name.toLowerCase()} 2026, ${PLATFORM_SLUG} tax calculator ${s.abbr.toLowerCase()}, gig worker taxes ${s.name.toLowerCase()}`,
  }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params
  const state = ALL_STATES.find(s => s.slug === stateSlug)
  if (!state) return notFound()

  const rateStr = state.rate === 0 ? 'No State Tax' : `${(state.rate*100).toFixed(2).replace(/\.?0+$/,'')}%`
  const noTax = state.rate === 0
  const example50 = estimateTax(50000, state.rate)

  return (
    <>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Turo Tax Calculator","item":"https://www.gigwisetax.com/turo"},{"@type":"ListItem","position":3,"name":"${state.name}","item":"https://www.gigwisetax.com/turo/${state.slug}"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Turo Tax Calculator ${state.name} 2026","datePublished":"2026-01-01","dateModified":"2026-05-29","author":{"@type":"Organization","name":"the GigWiseTax Team","url":"https://www.gigwisetax.com"},"reviewedBy":{"@type":"Organization","name":"the GigWiseTax Team","url":"https://www.gigwisetax.com"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/turo/${state.slug}"}}` }} />
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
              {'Free Turo host tax calculator for ' + state.name + ' (' + state.abbr + '). This planning model estimates federal SE and income tax plus ' + (noTax ? 'no state income tax' : 'a simplified ' + rateStr + ' state-rate input') + '; it does not calculate the full state tax schedule.'}
            </p>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4px 16px 0' }}>
          <div style={{ fontSize:13, color:'rgba(255,255,255,0.45)', marginBottom:16, display:'flex', gap:12, flexWrap:'wrap' as const }}>
            <span>Last updated: May 2026</span><span>·</span>
            <span>By the GigWiseTax Team</span><span>·</span>
            <span>{'~5 min read · 1,200 words'}</span>
          </div>
          <section id="answer-first" style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', marginBottom:24 }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>Quick Answer — Turo Taxes {state.name} 2026</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              {'This simplified $50,000 net-profit example for ' + state.name + ' estimates $' + example50.se.toLocaleString('en-US') + ' SE tax + $' + example50.federal.toLocaleString('en-US') + ' federal + $' + example50.state.toLocaleString('en-US') + ' state = $' + example50.total.toLocaleString('en-US') + ' total. The state component is a simplified rate input, not a full state tax calculation. Estimated quarterly amount: $' + example50.quarterly.toLocaleString('en-US') + '. Vehicle depreciation and passive Schedule E treatment are not modeled.'}
            </p>
          </section>
          <section id="key-takeaways" style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', marginBottom:24 }}>
            <h2 style={{ fontSize:'clamp(16px,3vw,18px)', fontWeight:700, color:'#e8b84b', marginBottom:12, marginTop:0 }}>Key Takeaways</h2>
            <ul style={{ margin:0, padding:'0 0 0 18px', lineHeight:1.9, fontSize:14, color:'#C8D8EC' }}>
              <li>Turo hosts are independent contractors — Turo withholds zero taxes</li>
              <li>{'On $50,000 net profit: $' + example50.se.toLocaleString('en-US') + ' SE + $' + example50.federal.toLocaleString('en-US') + ' federal + $' + example50.state.toLocaleString('en-US') + ' simplified state estimate = $' + example50.total.toLocaleString('en-US') + ' total in ' + state.name}</li>
              <li>{'Estimated quarterly amount: $' + example50.quarterly.toLocaleString('en-US') + '. Actual payments depend on your full tax situation.'}</li>
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
                      const { se, federal: fed, state: st, total } = estimateTax(income, state.rate)
                      const isLast = i === arr.length - 1
                      return (
                        <tr key={income} style={{ borderBottom:'1px solid rgba(255,255,255,0.05)', ...(isLast ? { background:'rgba(232,184,75,0.08)', borderTop:'1px solid rgba(232,184,75,0.3)' } : {}) }}>
                          <td style={{ padding:'10px 14px', fontWeight:600, color: isLast ? '#e8b84b' : 'rgba(255,255,255,0.85)' }}>${income.toLocaleString('en-US')}</td>
                          <td style={{ padding:'10px 14px', color:'rgba(255,255,255,0.7)' }}>${se.toLocaleString('en-US')}</td>
                          {!noTax && <td style={{ padding:'10px 14px', color:'rgba(255,255,255,0.7)' }}>${st.toLocaleString('en-US')}</td>}
                          <td style={{ padding:'10px 14px', color:'rgba(255,255,255,0.7)' }}>${fed.toLocaleString('en-US')}</td>
                          <td style={{ padding:'10px 14px', fontWeight:700, color: isLast ? '#e8b84b' : 'rgba(255,255,255,0.85)' }}>${total.toLocaleString('en-US')}</td>
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
          <TaxFreshness />
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