import { notFound } from 'next/navigation'
import AuthorBox from '@/app/components/AuthorBox'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from '../GigCalculator'
import type { Metadata } from 'next'

const PLATFORM_SLUG = 'doordash'


export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params
  const p = PLATFORMS.find(x => x.slug === PLATFORM_SLUG)
  const s = STATES.find(x => x.slug === stateSlug)
  if (!p || !s) return {}
  const stateStr = s.rate === 0 ? 'No State Income Tax' : `${(s.rate*100).toFixed(2).replace(/\.?0+$/, '')}% State Tax`
  return {
    title: s.rate === 0
      ? `DoorDash ${s.name} Taxes 2026 — No State Tax + Free SE Calculator`
      : `DoorDash ${s.name} Taxes 2026 — $40K Earner Owes $${(8129 + Math.round(40000 * s.rate)).toLocaleString()} Total`,
    description: `DoorDash ${s.name} 2026: $40K net = ~$5,652 SE tax + $3,200 fed. ${stateStr}. Quarterly: ~$2,213. Free calculator, no signup.`,
    keywords: `${p.name} taxes ${s.name}, ${p.name} ${s.abbr} tax calculator 2026, ${p.slug} ${s.slug} self employment tax`,
    alternates: { canonical: `https://www.gigwisetax.com/${p.slug}/${s.slug}` },
  }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params
  const platform = PLATFORMS.find(p => p.slug === PLATFORM_SLUG)
  const state    = STATES.find(s => s.slug === stateSlug)
  if (!platform || !state) return notFound()

  const noStateTax   = state.rate === 0
  const stateRateStr = state.rate === 0 ? 'No State Income Tax' : `${(state.rate*100).toFixed(2).replace(/\.?0+$/, '')}%`
  const deductions   = DEDUCTIONS[PLATFORM_SLUG as keyof typeof DEDUCTIONS] || DEDUCTIONS.doordash

  const card   = { background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, marginBottom: 12, boxShadow: '0 2px 12px rgba(0,0,0,.3)', overflow: 'hidden' as const }
  const cardHd = { background: 'rgba(255,255,255,0.07)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }


  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': `DoorDash Tax Calculator 2026 — ${state.name}`,
    'url': `https://www.gigwisetax.com/doordash/${state.slug}`,
    'description': `Free DoorDash tax calculator for ${state.name} 2026. Estimate SE tax 15.3% + federal & state income tax.`,
    'applicationCategory': 'FinanceApplication',
    'operatingSystem': 'Web',
    'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
  }

  return (
    <>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much should a DoorDash driver set aside for taxes?","acceptedAnswer":{"@type":"Answer","text":"DoorDash drivers should set aside 25-30% of net earnings for taxes. This covers self-employment tax (15.3%) plus federal income tax. Use quarterly estimated payments to avoid underpayment penalties."}},{"@type":"Question","name":"Does DoorDash withhold taxes?","acceptedAnswer":{"@type":"Answer","text":"No. DoorDash does not withhold federal or state taxes. Dashers are independent contractors and receive a 1099-NEC. You are responsible for paying self-employment tax and income tax yourself."}},{"@type":"Question","name":"What can DoorDash drivers deduct on taxes?","acceptedAnswer":{"@type":"Answer","text":"DoorDash drivers can deduct mileage (72.5 cents/mile in 2026), phone bill percentage, insulated bags, car insurance portion, and other business expenses. Mileage is typically the largest deduction."}}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebApplication","name":"DoorDash Tax Calculator ' + state.name + ' 2026","url":"https://www.gigwisetax.com/doordash/' + state.slug + '","applicationCategory":"FinanceApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"DoorDash Tax Calculator","item":"https://www.gigwisetax.com/doordash"},{"@type":"ListItem","position":3,"name":"' + state.name + '","item":"https://www.gigwisetax.com/doordash/' + state.slug + '"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"DoorDash Tax Calculator ' + state.name + ' 2026","description":"Free DoorDash tax calculator for ' + state.name + ' 2026.","datePublished":"2026-01-01","dateModified":"2026-06-04","author":{"@type":"Person","name":"Ethan Blake"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/doordash/' + state.slug + '"}}' }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px 40px' }}>

        {/* Answer-First */}
        <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'14px 18px',marginBottom:20,marginTop:8}}>
          <p style={{margin:0,fontSize:15,lineHeight:1.8,color:'rgba(255,255,255,0.88)'}}>
            {platform.name}{' '}drivers in {state.name} pay{' '}
            <strong style={{color:'#e8b84b'}}>15.3% self-employment tax</strong>{' '}
            on net profit plus federal income tax
            {noStateTax ? '.' : <span> and <strong style={{color:'#e8b84b'}}>{stateRateStr} {state.name} state tax</strong>.</span>}
            {' '}On <strong style={{color:'#e8b84b'}}>{'$40,000'}</strong> net income a DoorDash driver owes roughly{' '}
            <strong style={{color:'#e8b84b'}}>{'$8,852'}</strong> total — about <strong style={{color:'#e8b84b'}}>{'$2,213'}</strong> per quarter.
          </p>
        </div>

        <p style={{fontSize:13,color:'rgba(255,255,255,0.65)',margin:'-12px 0 16px',fontStyle:'italic' as const}}>By <a href="https://medium.com/@ethanblake_tax" rel="nofollow" target="_blank" style={{color:'#e8b84b'}}>Ethan Blake</a> &nbsp;·&nbsp; ~5 min read &nbsp;·&nbsp; Updated June 2026</p>

        {/* Key Takeaways */}
        <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:24}}>
          <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>{'⚡ KEY TAKEAWAYS'}</div>
          <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
            <li>{'DoorDash drivers on $40K net owe ~$8,852 in total 2026 taxes'}</li>
            <li>{'Self-employment tax is 15.3% on net profit — paid entirely by you'}</li>
            <li>{'Mileage deduction: 72.5¢/mile — 10,000 miles = $7,250 deduction'}</li>
            <li>{noStateTax ? state.name + ' has no state income tax — federal + SE tax only' : state.name + ' state tax up to ' + stateRateStr + ' — file state quarterly payments too'}</li>
            <li>{'Tip income up to $25,000 is federally deductible in 2026'}</li>
          </ul>
        </div>

        <blockquote style={{borderLeft:'3px solid #e8b84b',padding:'12px 16px 12px 18px',margin:'0 0 20px',background:'rgba(232,184,75,0.05)',borderRadius:'0 6px 6px 0'}}>
          <p style={{margin:0,fontSize:14,color:'rgba(255,255,255,0.75)',fontStyle:'italic' as const,lineHeight:1.7}}>"Self-employed individuals are required to pay self-employment tax and income tax. Self-employment tax includes Social Security and Medicare taxes."</p>
          <cite style={{display:'block',marginTop:8,fontSize:12,color:'#e8b84b',fontStyle:'normal' as const}}>— <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" rel="nofollow" target="_blank" style={{color:'#e8b84b'}}>IRS.gov — Self-Employment Tax</a></cite>
        </blockquote>

        {/* California Prop 22 + AB5 — only shown for CA */}
        {state.slug === 'california' && (
          <div style={{background:'rgba(178,34,52,0.08)',border:'1px solid rgba(178,34,52,0.3)',borderRadius:8,padding:'16px 20px',marginBottom:20}}>
            <div style={{fontWeight:800,color:'#B22234',marginBottom:10,fontSize:13}}>{'🏛 CALIFORNIA DOORDASH: PROP 22 + AB5 — WHAT IT MEANS FOR YOUR TAXES'}</div>
            <p style={{margin:'0 0 12px',fontSize:14,lineHeight:1.8,color:'rgba(255,255,255,0.85)'}}>
              California DoorDash drivers operate under <strong style={{color:'#e8b84b'}}>Proposition 22</strong> (passed Nov 2020), which classifies app-based delivery workers as independent contractors — not employees. This means you still owe <strong style={{color:'#e8b84b'}}>15.3% SE tax</strong> on net profit and must pay <strong style={{color:'#e8b84b'}}>California state income tax up to 9.3%</strong>.
            </p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:12}}>
              {[
                {label:'Prop 22 Status',value:'Active',sub:'IC classification maintained',color:'#059669'},
                {label:'CA State Tax',value:'Up to 9.3%',sub:'On net earnings',color:'#B22234'},
                {label:'Prop 22 Benefit',value:'~120%',sub:'Min earnings guarantee',color:'#e8b84b'},
                {label:'Healthcare Subsidy',value:'≥15 hrs/wk',sub:'Stipend if eligible',color:'#e8b84b'},
              ].map(s => (
                <div key={s.label} style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:4,padding:'10px 14px'}}>
                  <div style={{fontSize:10,fontWeight:700,color:'#8fa8c8',textTransform:'uppercase',letterSpacing:'0.7px',marginBottom:4}}>{s.label}</div>
                  <div style={{fontSize:18,fontWeight:900,color:s.color,marginBottom:2}}>{s.value}</div>
                  <div style={{fontSize:11,color:'#7a9abf'}}>{s.sub}</div>
                </div>
              ))}
            </div>
            <h3 style={{fontSize:15,fontWeight:800,color:'rgba(255,255,255,0.9)',margin:'12px 0 8px'}}>How Prop 22 Affects Your 2026 Tax Bill</h3>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.82)'}}>
              <li>You remain an <strong style={{color:'#e8b84b'}}>independent contractor</strong> — DoorDash does not withhold taxes</li>
              <li>Earnings guarantee: <strong style={{color:'#e8b84b'}}>120% of CA minimum wage</strong> during active delivery time + 30¢/mile</li>
              <li>On $40K net: SE tax $5,652 + federal ~$3,200 + CA state ~$1,700 = <strong style={{color:'#e8b84b'}}>~$10,552 total</strong></li>
              <li>AB5 does NOT apply to Prop 22 workers — no W-2, no employer withholding</li>
              <li>Quarterly CA estimated tax due: <strong style={{color:'#e8b84b'}}>Apr 15, Jun 16, Sep 15, Jan 15</strong></li>
              <li>Mileage deduction 72.5¢/mile reduces both federal and CA taxable income</li>
            </ul>
            <blockquote style={{borderLeft:'3px solid #B22234',padding:'10px 14px',margin:'12px 0 0',background:'rgba(178,34,52,0.05)',borderRadius:'0 4px 4px 0'}}>
              <p style={{margin:0,fontSize:13,color:'rgba(255,255,255,0.7)',fontStyle:'italic',lineHeight:1.7}}>"App-based drivers who work under Proposition 22 are independent contractors and must pay self-employment tax on net earnings."</p>
              <cite style={{display:'block',marginTop:6,fontSize:11,color:'#e8b84b',fontStyle:'normal'}}>— <a href="https://www.ftb.ca.gov/file/personal/income-types/gig-economy.html" rel="nofollow" target="_blank" style={{color:'#e8b84b'}}>California FTB — Gig Economy</a></cite>
            </blockquote>
          </div>
        )}

        {/* Breadcrumb */}
        <div style={{ fontSize: 12, color: '#8fa8c8', padding: '14px 0 10px', display: 'flex', gap: 6, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color: '#8fa8c8', textDecoration: 'none' }}>Home</a> /
          <a href={`/${platform.slug}`} style={{ color: '#B22234', textDecoration: 'none' }}>{platform.name} Tax</a> /
          <span>{state.name}</span>
        </div>

        {/* Hero */}
        <div style={{ background: '#07111F', borderRadius: 8, padding: 'clamp(14px,4vw,28px)', marginBottom: 24, border: '1px solid rgba(255,255,255,0.12)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: '#e8b84b', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 8 }}>
                {platform.name} · {state.abbr} · Tax Year 2026
              </div>
              <h1 style={{ fontSize: 22, fontWeight: 900, color: '#fff', margin: '0 0 8px', lineHeight: 1.25 }}>
                {platform.name} Tax Calculator<br/>{state.name} 2026
              </h1>
              <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 14, margin: 0, lineHeight: 1.6, maxWidth: 560 }}>
                Estimate your {platform.name} self-employment taxes in {state.name}. Includes SE tax (15.3%), federal income tax, {noStateTax ? 'no state income tax' : `${stateRateStr} ${state.name} state tax`}, and quarterly payment schedule.
              </p>
            </div>
            <div style={{ background: noStateTax ? 'rgba(5,150,105,.15)' : 'rgba(178,34,52,.15)', border: `1px solid ${noStateTax ? '#059669' : '#B22234'}`, borderRadius: 6, padding: '12px 18px', textAlign: 'center' as const, minWidth: 140 }}>
              <div style={{ fontSize: 11, color: noStateTax ? '#6ee7b7' : '#fca5a5', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 4 }}>State Tax Rate</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: noStateTax ? '#34d399' : '#f87171' }}>{noStateTax ? '0%' : stateRateStr}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', marginTop: 2 }}>{noStateTax ? 'No state income tax' : 'Top marginal rate'}</div>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, alignItems: 'start' }} className="main-grid">
          <div>
            {/* Calculator */}
            <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026} />

            {/* Requirements */}
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}> {platform.name} Tax Requirements — {state.name} 2026</span>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 12 }} className="three-grid">
                  {[
                    { label: 'SE Tax Rate', value: '15.3%', sub: 'SS + Medicare', color: '#B22234' },
                    { label: `${state.abbr} State Tax`, value: noStateTax ? '0%' : stateRateStr, sub: noStateTax ? 'No state tax' : 'Top rate', color: noStateTax ? '#059669' : '#B22234' },
                    { label: 'Quarterly Due', value: '4×/yr', sub: 'If owe $1,000+', color: '#e8b84b' },
                  ].map(s => (
                    <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '14px 16px', textAlign: 'center' as const }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#8fa8c8', textTransform: 'uppercase' as const, letterSpacing: '0.7px', marginBottom: 6 }}>{s.label}</div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: s.color, marginBottom: 2 }}>{s.value}</div>
                      <div style={{ fontSize: 11, color: '#7a9abf' }}>{s.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Quarterly table */}
                <h3 style={{ fontSize: 16, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 10 }}>2026 Quarterly Tax Deadlines</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13, marginBottom: 20 }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.07)' }}>
                      {['Quarter','Due Date','Federal','State'].map(h => (
                        <th key={h} style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700, fontSize: 11, textTransform: 'uppercase' as const, letterSpacing: '0.5px', textAlign: 'left' as const }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {DEADLINES_2026.map((d, i) => (
                      <tr key={d.q} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: i === 0 ? 'rgba(178,34,52,0.12)' : 'rgba(255,255,255,0.03)' }}>
                        <td style={{ padding: '8px 10px', fontWeight: 800, color: i === 0 ? '#B22234' : 'rgba(255,255,255,0.85)' }}>
                          {i === 0 && <span style={{ background: '#B22234', color: '#fff', fontSize: 12, padding: '2px 4px', borderRadius: 2, marginRight: 5 }}>NOW</span>}
                          {d.q} 2026
                        </td>
                        <td style={{ padding: '8px 10px', fontWeight: 700, color: i === 0 ? '#B22234' : 'rgba(255,255,255,0.85)' }}>{d.due}</td>
                        <td style={{ padding: '8px 10px', color: '#059669', fontWeight: 600, fontSize: 14 }}>✓ Required</td>
                        <td style={{ padding: '8px 10px', fontSize: 14 }}>
                          {noStateTax
                            ? <span style={{ color: '#059669', fontWeight: 600 }}>Not required</span>
                            : <span style={{ color: 'rgba(255,255,255,0.85)' }}>Required</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Deductions */}
                <h3 style={{ fontSize: 16, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 10 }}>Top Tax Deductions for {platform.name} Workers in {state.name}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }} className="form-grid">
                  {deductions.map((d: string) => (
                    <div key={d} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '8px 10px', fontSize: 14, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{d}</div>
                  ))}
                </div>

                {/* FAQ */}
                <h3 style={{ fontSize: 16, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 14 }}>FAQ — {platform.name} Taxes in {state.name} 2026</h3>
                {[
                  {
                    q: `How much is ${platform.name} tax in ${state.name}?`,
                    a: noStateTax
                      ? `In ${state.name}, ${platform.name} workers pay 15.3% self-employment tax plus federal income tax. There is no ${state.name} state income tax.`
                      : `In ${state.name}, ${platform.name} workers pay 15.3% SE tax, federal income tax (10–37%), plus ${stateRateStr} ${state.name} state tax. On $50,000 net income expect to owe $17,000–$22,000 total.`,
                  },
                  {
                    q: `Do I need to make quarterly payments in ${state.name}?`,
                    a: noStateTax
                      ? `In ${state.name}, make federal quarterly estimated payments (Form 1040-ES) if you expect to owe $1,000+. No state quarterly payments required.`
                      : `Yes. Make both federal (Form 1040-ES) and ${state.name} state quarterly payments if you expect to owe $1,000+.`,
                  },
                  {
                    q: `What is the self-employment tax rate for ${platform.name} in ${state.name}?`,
                    a: `Federal SE tax is 15.3% regardless of state. In ${state.name} you additionally pay ${noStateTax ? 'no state income tax' : `${stateRateStr} state income tax`}.`,
                  },
                  {
                    q: `What mileage rate can DoorDash drivers deduct in ${state.name} in 2026?`,
                    a: `DoorDash drivers in ${state.name} can deduct 72.5 cents per mile for deliveries in 2026. On 10,000 delivery miles that is a $7,250 deduction directly reducing taxable profit.`,
                  },
                  {
                    q: `Does the No Tax on Tips law apply to DoorDash drivers in ${state.name}?`,
                    a: `Yes. Under the One Big Beautiful Budget Act 2026, tip income up to $25,000 is federally deductible for DoorDash drivers in ${state.name}, in addition to mileage and business expense deductions.`,
                  },
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 10, marginBottom: 8 }}>
                    <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontSize: 16, marginBottom: 6 }}>Q: {item.q}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>{item.a}</div>
                  </div>
                ))}

                <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: 12, fontSize: 14, color: '#8fa8c8', lineHeight: 1.6 }}>
                   <strong>Disclaimer:</strong> Estimates only. Verify with your state revenue department or a CPA.
                </div>
              </div>
            </div>

            {/* Other states */}
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}> {platform.name} Tax in Other States</span>
              </div>
              <div style={{ padding: 12, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }} className="p-grid">
                {STATES.filter(s => s.slug !== stateSlug).slice(0, 12).map(s => (
                  <a key={s.slug} href={`/${PLATFORM_SLUG}/${s.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '6px 8px', textAlign: 'center' as const, background: 'rgba(255,255,255,0.03)' }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 1 }}>{s.abbr}</div>
                      <div style={{ fontSize: 13, color: s.rate === 0 ? '#059669' : '#B22234', fontWeight: 600 }}>{s.rate === 0 ? 'No Tax' : `${(s.rate*100).toFixed(1)}%`}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            <div style={{ background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: 'rgba(255,255,255,0.07)', padding: '10px 16px' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,.7)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> Other Platforms in {state.abbr}</span>
              </div>
              {PLATFORMS.filter(p => p.slug !== PLATFORM_SLUG).map(p => (
                <a key={p.slug} href={`/${p.slug}/${state.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.85)' }}>
                    <span style={{ fontSize: 15, fontWeight: 500 }}>{p.name} in {state.abbr}</span>
                    <span style={{ fontSize: 13, color: '#B22234', fontWeight: 700 }}>{p.searches}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <AuthorBox />
      <style>{`
        @media(max-width:960px){.main-grid{grid-template-columns:1fr!important}.form-grid{grid-template-columns:1fr!important}.p-grid{grid-template-columns:repeat(3,1fr)!important}}@media(max-width:600px){.three-grid{grid-template-columns:1fr!important}.p-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
    </>
  )
}
