import { notFound } from 'next/navigation'
import AuthorBox from '@/app/components/AuthorBox'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from '../GigCalculator'
import type { Metadata } from 'next'

const PLATFORM_SLUG = 'upwork'


export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params
  const p = PLATFORMS.find(x => x.slug === PLATFORM_SLUG)
  const s = STATES.find(x => x.slug === stateSlug)
  if (!p || !s) return {}
  const stateStr = s.rate === 0 ? 'No State Income Tax' : (s.rate*100).toFixed(2).replace(/\.?0+$/, '') + '% State Tax'
  return {
    title: s.rate === 0
      ? `Upwork ${s.name} Taxes 2026 — No State Tax + Free SE Calculator`
      : `Upwork ${s.name} Taxes 2026 — $60K Earner Owes ${(14278 + Math.round(60000 * s.rate)).toLocaleString()} Total`,
    description: `Upwork ${s.name} 2026: $60K net = ~$8,478 SE tax + $5,800 fed. ${stateStr}. Quarterly: ~$3,570. Free calculator, no signup.`,
    keywords: p.name + ' taxes ' + s.name + ', upwork 1099 taxes ' + s.slug,
    alternates: { canonical: 'https://www.gigwisetax.com/' + p.slug + '/' + s.slug },
  }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params
  const platform = PLATFORMS.find(p => p.slug === PLATFORM_SLUG)
  const state    = STATES.find(s => s.slug === stateSlug)
  if (!platform || !state) return notFound()

  const noStateTax   = state.rate === 0
  const stateRateStr = noStateTax ? 'No State Income Tax' : (state.rate*100).toFixed(2).replace(/\.?0+$/, '') + '%'
  const deductions   = DEDUCTIONS[PLATFORM_SLUG as keyof typeof DEDUCTIONS] || DEDUCTIONS.doordash

  const stateNote = state.name + (noStateTax ? ' has no state income tax. Upwork workers in ' + state.name + ' only pay federal income tax and the 15.3% self-employment tax.' : ' has a ' + stateRateStr + ' state income tax rate. Upwork workers in ' + state.name + ' must make both federal and state quarterly estimated tax payments.')

  const card   = { background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, marginBottom: 12, boxShadow: '0 2px 12px rgba(0,0,0,.3)', overflow: 'hidden' as const }
  const cardHd = { background: 'rgba(255,255,255,0.07)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: platform.name + ' Tax Calculator ' + state.name + ' 2026',
    applicationCategory: 'FinanceApplication',
    description: 'Free ' + platform.name + ' tax calculator for ' + state.name + ' 2026',
    url: 'https://www.gigwisetax.com/' + platform.slug + '/' + state.slug,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    areaServed: { '@type': 'State', name: state.name, containedIn: { '@type': 'Country', name: 'United States' } },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do Upwork workers pay taxes?","acceptedAnswer":{"@type":"Answer","text":"Yes. Upwork classifies taskers as independent contractors. Upwork does not withhold taxes. If you earn $400 or more you must pay self-employment tax (15.3%) plus federal and state income tax."}},{"@type":"Question","name":"Does Upwork send a 1099?","acceptedAnswer":{"@type":"Answer","text":"Upwork sends a 1099-K if you process $5,000 or more through the platform in a year. Even without a 1099 all income is taxable and must be reported on Schedule C."}},{"@type":"Question","name":"What can Upwork workers deduct?","acceptedAnswer":{"@type":"Answer","text":"Upwork workers can deduct tools and equipment, work supplies, mileage driving to client locations (72.5 cents/mile in 2026), a home office if used exclusively for the business, and any training costs."}}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <div style={{ background: '#0d1117', minHeight: '100vh' }}>
        <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#07111F)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 16px 12px' }}>
            <nav style={{ fontSize: 14, color: 'rgba(255,255,255,.5)', marginBottom: 8 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
              <span style={{ margin: '0 8px' }}>›</span>
              <a href={'/' + platform.slug} style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>{platform.name} Calculator</a>
              <span style={{ margin: '0 8px' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,.7)' }}>{state.name}</span>
            </nav>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
              <div style={{ width: 4, height: 34, background: '#1B5E20', borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
              <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.5px', margin: 0 }}>
                {platform.name} Tax Calculator — {state.name} 2026
              </h1>
            </div>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, paddingLeft: 16, maxWidth: 780, marginBottom: 18 }}>
              {'Free ' + platform.name + ' tasker tax calculator for ' + state.name + ' (' + state.abbr + ').'}
              {noStateTax ? ' ' + state.name + ' has no state income tax — you only pay federal SE tax (15.3%) and federal income tax.' : ' Includes the ' + stateRateStr + ' ' + state.name + ' state income tax plus federal SE tax (15.3%) and federal income tax.'}
              {' Quarterly payment schedule included. No signup required.'}
            </p>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 16px 20px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }} className="main-grid">
          <div>
            <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026} />
            <div style={card}>
              <div style={cardHd}>
                <div style={accent} />
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>{platform.name} Taxes in {state.name} — 2026 Guide</span>
              </div>
              <div style={{ padding: 14 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12 }}>How {platform.name} Taxes Work in {state.name}</h2>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 16 }}>{stateNote}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 12 }} className="three-grid">
                  {[
                    { label: 'SE Tax', val: '15.3%', sub: 'Federal (all states)', color: '#1B5E20' },
                    { label: 'Federal Tax', val: '10-37%', sub: 'Based on income', color: 'rgba(255,255,255,0.9)' },
                    { label: state.abbr + ' State Tax', val: noStateTax ? 'None' : stateRateStr, sub: noStateTax ? 'No state income tax' : state.name + ' rate', color: noStateTax ? '#059669' : 'rgba(255,255,255,0.85)' },
                  ].map(r => (
                    <div key={r.label} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 10, borderLeft: '4px solid ' + r.color, textAlign: 'center' as const }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#8fa8c8', textTransform: 'uppercase' as const, marginBottom: 4 }}>{r.label}</div>
                      <div style={{ fontSize: 20, fontWeight: 900, color: r.color }}>{r.val}</div>
                      <div style={{ fontSize: 13, color: '#7a9abf', marginTop: 2 }}>{r.sub}</div>
                    </div>
                  ))}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12 }}>Top Tax Deductions for {platform.name} Workers in {state.name}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }} className="form-grid">
                  {deductions.map((d: string) => (
                    <div key={d} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '8px 10px', fontSize: 14, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{d}</div>
                  ))}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 8 }}>FAQ — {platform.name} Taxes in {state.name} 2026</h3>
                {[
                  { q: 'Do Upwork workers pay taxes in ' + state.name + '?', a: noStateTax ? 'Yes. In ' + state.name + ', Upwork taskers pay 15.3% self-employment tax plus federal income tax. There is no ' + state.name + ' state income tax.' : 'Yes. In ' + state.name + ', Upwork taskers pay 15.3% SE tax, federal income tax (10-37%), plus ' + stateRateStr + ' ' + state.name + ' state income tax.' },
                  { q: 'Do I need quarterly payments in ' + state.name + '?', a: noStateTax ? 'In ' + state.name + ', you only need federal quarterly estimated payments (Form 1040-ES) if you expect to owe $1,000 or more. No state payments required.' : 'Yes. In ' + state.name + ', you must make both federal (Form 1040-ES) and state quarterly estimated payments if you expect to owe $1,000 or more.' },
                  { q: 'Does Upwork take out taxes in ' + state.name + '?', a: 'No. Upwork does not withhold taxes. You are responsible for paying all SE tax, federal income tax' + (noStateTax ? '' : ', and ' + state.name + ' state income tax') + ' yourself through quarterly estimated payments.' },
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 10, marginBottom: 8 }}>
                    <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', fontSize: 16, marginBottom: 6 }}>Q: {item.q}</div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>{item.a}</div>
                  </div>
                ))}
                <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: 12, fontSize: 14, color: '#8fa8c8', lineHeight: 1.6 }}>
                  <strong>Disclaimer:</strong> State tax rates are for estimation purposes only. Not affiliated with Upwork or any government agency. Consult a licensed CPA for advice.
                </div>
              </div>
            </div>
            <div style={card}>
              <div style={cardHd}>
                <div style={accent} />
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>{platform.name} Tax in Other States</span>
              </div>
              <div style={{ padding: 12, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }} className="p-grid">
                {STATES.filter(s => s.slug !== stateSlug).map(s => (
                  <a key={s.slug} href={'/' + PLATFORM_SLUG + '/' + s.slug} style={{ textDecoration: 'none' }}>
                    <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '6px 8px', textAlign: 'center' as const, background: 'rgba(255,255,255,0.03)' }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 1 }}>{s.abbr}</div>
                      <div style={{ fontSize: 13, color: s.rate === 0 ? '#059669' : '#1B5E20', fontWeight: 600 }}>{s.rate === 0 ? 'No Tax' : (s.rate*100).toFixed(1) + '%'}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            <a href="https://privatepaycheck.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', background: 'linear-gradient(135deg,#091526,#102040)', border: '1px solid rgba(245,200,66,0.35)', borderRadius: 10, padding: '20px 16px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#F5C842', marginBottom: 8, fontFamily: 'monospace' }}>W-2 Paycheck Tool</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 6 }}>PrivatePaycheck<span style={{ color: '#F5C842' }}>.com</span></div>
              <div style={{ fontSize: 14, color: '#7A96B8', marginBottom: 8, lineHeight: 1.5 }}>Free paycheck calculator for W-2 employees. All 50 states, 2026 IRS brackets. No signup.</div>
              <div style={{ background: '#F5C842', color: '#091526', fontSize: 15, fontWeight: 700, padding: '10px 0', borderRadius: 5, textAlign: 'center' as const }}>Calculate My Paycheck</div>
            </a>
            <div style={{ background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: 'rgba(255,255,255,0.07)', padding: '10px 16px' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,.7)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Other Platforms in {state.abbr}</span>
              </div>
              {PLATFORMS.filter(p => p.slug !== PLATFORM_SLUG).map(p => (
                <a key={p.slug} href={'/' + p.slug + '/' + state.slug} style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>{p.name} in {state.abbr}</span>
                    <span style={{ fontSize: 13, color: '#1B5E20', fontWeight: 700 }}>{p.searches}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
      <AuthorBox />
      <style>{`
          @media(max-width:960px){
            .main-grid{grid-template-columns:1fr!important}
            .three-grid{grid-template-columns:1fr!important}
            .form-grid{grid-template-columns:1fr!important}
            .p-grid{grid-template-columns:repeat(3,1fr)!important}
          }
          @media(max-width:540px){
            .p-grid{grid-template-columns:repeat(2,1fr)!important}
          }
        `}</style>
      </div>
    </>
  )
}
