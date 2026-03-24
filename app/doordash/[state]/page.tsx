import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from '../GigCalculator'
import type { Metadata } from 'next'

const PLATFORM_SLUG = 'doordash'

export async function generateStaticParams() {
  return STATES.map(s => ({ state: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params
  const p = PLATFORMS.find(x => x.slug === PLATFORM_SLUG)
  const s = STATES.find(x => x.slug === stateSlug)
  if (!p || !s) return {}
  const stateStr = s.rate === 0 ? 'No State Income Tax' : `${(s.rate*100).toFixed(2).replace(/\.?0+$/, '')}% State Tax`
  return {
    title: `${p.name} Tax Calculator ${s.name} 2026 — ${stateStr} | GigWiseTax`,
    description: `Free ${p.name} tax calculator for ${s.name} (${s.abbr}) 2026. ${stateStr}. Calculate self-employment tax, federal tax, and ${s.name} state tax. Quarterly payment schedule included. No signup.`,
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

  const card   = { background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, marginBottom: 20, boxShadow: '0 1px 6px rgba(0,0,0,.05)', overflow: 'hidden' as const }
  const cardHd = { background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much should a DoorDash driver set aside for taxes?","acceptedAnswer":{"@type":"Answer","text":"DoorDash drivers should set aside 25-30% of net earnings for taxes. This covers self-employment tax (15.3%) plus federal income tax. Use quarterly estimated payments to avoid underpayment penalties."}},{"@type":"Question","name":"Does DoorDash withhold taxes?","acceptedAnswer":{"@type":"Answer","text":"No. DoorDash does not withhold federal or state taxes. Dashers are independent contractors and receive a 1099-NEC. You are responsible for paying self-employment tax and income tax yourself."}},{"@type":"Question","name":"What can DoorDash drivers deduct on taxes?","acceptedAnswer":{"@type":"Answer","text":"DoorDash drivers can deduct mileage (67 cents/mile in 2026), phone bill percentage, insulated bags, car insurance portion, and other business expenses. Mileage is typically the largest deduction."}}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}/>
      <title>{`${platform.name} Tax Calculator ${state.name} 2026`}</title>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px 40px' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 12, color: '#6c757d', padding: '14px 0 10px', display: 'flex', gap: 6, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color: '#B22234', textDecoration: 'none' }}>Home</a> /
          <a href={`/${platform.slug}`} style={{ color: '#B22234', textDecoration: 'none' }}>{platform.name} Tax</a> /
          <span>{state.name}</span>
        </div>

        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)', borderRadius: 8, padding: '28px 28px 22px', marginBottom: 24, border: '1px solid #2d2d4e' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: '#e8b84b', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 8 }}>
                {platform.name} · {state.abbr} · Tax Year 2026
              </div>
              <h1 style={{ fontSize: 26, fontWeight: 900, color: '#fff', margin: '0 0 8px', lineHeight: 1.25 }}>
                {platform.name} Tax Calculator<br/>{state.name} 2026
              </h1>
              <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, margin: 0, lineHeight: 1.6, maxWidth: 560 }}>
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
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}> {platform.name} Tax Requirements — {state.name} 2026</span>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 20 }} className="three-grid">
                  {[
                    { label: 'SE Tax Rate', value: '15.3%', sub: 'SS + Medicare', color: '#B22234' },
                    { label: `${state.abbr} State Tax`, value: noStateTax ? '0%' : stateRateStr, sub: noStateTax ? 'No state tax' : 'Top rate', color: noStateTax ? '#059669' : '#B22234' },
                    { label: 'Quarterly Due', value: '4×/yr', sub: 'If owe $1,000+', color: '#e8b84b' },
                  ].map(s => (
                    <div key={s.label} style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: '14px 16px', textAlign: 'center' as const }}>
                      <div style={{ fontSize: 10, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase' as const, letterSpacing: '0.7px', marginBottom: 6 }}>{s.label}</div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: s.color, marginBottom: 2 }}>{s.value}</div>
                      <div style={{ fontSize: 11, color: '#9ca3af' }}>{s.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Quarterly table */}
                <h3 style={{ fontSize: 15, fontWeight: 800, color: '#1a1a2e', marginBottom: 10 }}>2026 Quarterly Tax Deadlines</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13, marginBottom: 20 }}>
                  <thead>
                    <tr style={{ background: '#1a1a2e' }}>
                      {['Quarter','Due Date','Federal','State'].map(h => (
                        <th key={h} style={{ padding: '10px 14px', color: '#e8b84b', fontWeight: 700, fontSize: 11, textTransform: 'uppercase' as const, letterSpacing: '0.5px', textAlign: 'left' as const }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {DEADLINES_2026.map((d, i) => (
                      <tr key={d.q} style={{ borderBottom: '1px solid #f0f1f3', background: i === 0 ? '#fff9f9' : '#fff' }}>
                        <td style={{ padding: '12px 14px', fontWeight: 800, color: i === 0 ? '#B22234' : '#1a1a2e' }}>
                          {i === 0 && <span style={{ background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 4px', borderRadius: 2, marginRight: 5 }}>NOW</span>}
                          {d.q} 2026
                        </td>
                        <td style={{ padding: '12px 14px', fontWeight: 700, color: i === 0 ? '#B22234' : '#1a1a2e' }}>{d.due}</td>
                        <td style={{ padding: '12px 14px', color: '#059669', fontWeight: 600, fontSize: 13 }}>✓ Required</td>
                        <td style={{ padding: '12px 14px', fontSize: 13 }}>
                          {noStateTax
                            ? <span style={{ color: '#059669', fontWeight: 600 }}>Not required</span>
                            : <span style={{ color: '#374151' }}>Required</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Deductions */}
                <h3 style={{ fontSize: 15, fontWeight: 800, color: '#1a1a2e', marginBottom: 10 }}>Top Tax Deductions for {platform.name} Workers in {state.name}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }} className="form-grid">
                  {deductions.map((d: string) => (
                    <div key={d} style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: '10px 14px', fontSize: 13, color: '#374151', fontWeight: 500 }}>{d}</div>
                  ))}
                </div>

                {/* FAQ */}
                <h3 style={{ fontSize: 15, fontWeight: 800, color: '#1a1a2e', marginBottom: 14 }}>FAQ — {platform.name} Taxes in {state.name} 2026</h3>
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
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #f0f1f3', paddingBottom: 14, marginBottom: 14 }}>
                    <div style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 14, marginBottom: 8 }}>Q: {item.q}</div>
                    <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7 }}>{item.a}</div>
                  </div>
                ))}

                <div style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: 14, fontSize: 12, color: '#6c757d', lineHeight: 1.6 }}>
                   <strong>Disclaimer:</strong> Estimates only. Verify with your state revenue department or a CPA.
                </div>
              </div>
            </div>

            {/* Other states */}
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}> {platform.name} Tax in Other States</span>
              </div>
              <div style={{ padding: 16, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }} className="p-grid">
                {STATES.filter(s => s.slug !== stateSlug).slice(0, 12).map(s => (
                  <a key={s.slug} href={`/${PLATFORM_SLUG}/${s.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ border: '1px solid #e2e5e9', borderRadius: 4, padding: '8px 10px', textAlign: 'center' as const, background: '#fff' }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#1a1a2e', marginBottom: 2 }}>{s.abbr}</div>
                      <div style={{ fontSize: 10, color: s.rate === 0 ? '#059669' : '#B22234', fontWeight: 600 }}>{s.rate === 0 ? 'No Tax' : `${(s.rate*100).toFixed(1)}%`}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> Other Platforms in {state.abbr}</span>
              </div>
              {PLATFORMS.filter(p => p.slug !== PLATFORM_SLUG).map(p => (
                <a key={p.slug} href={`/${p.slug}/${state.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '10px 16px', borderBottom: '1px solid #f0f1f3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#374151' }}>
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{p.name} in {state.abbr}</span>
                    <span style={{ fontSize: 11, color: '#B22234', fontWeight: 700 }}>{p.searches}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:960px){.main-grid{grid-template-columns:1fr!important}.three-grid{grid-template-columns:1fr!important}.form-grid{grid-template-columns:1fr!important}.p-grid{grid-template-columns:repeat(3,1fr)!important}}
      `}</style>
    </>
  )
}
