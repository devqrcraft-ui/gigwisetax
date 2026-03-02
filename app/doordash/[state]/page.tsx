import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEDUCTIONS } from '@/lib/data'
import GigCalculator from '../GigCalculator'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return STATES.map(s => ({ state: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params
  const p = PLATFORMS.find(x => x.slug === 'doordash')
  const s = STATES.find(x => x.slug === stateSlug)
  if (!p || !s) return {}
  const stateStr = s.rate === 0 ? 'No State Income Tax' : `${(s.rate*100).toFixed(2).replace(/\.?0+$/, '')}% State Tax`
  return {
    title: `${p.name} Tax Calculator ${s.name} 2026 — ${stateStr} | GigWiseTax`,
    description: `Free ${p.name} tax calculator for ${s.name} (${s.abbr}) 2026. ${stateStr}. Calculate self-employment tax, federal tax, and ${s.name} state tax. Quarterly payment schedule included. No signup.`,
    keywords: `${p.name} taxes ${s.name}, ${p.name} ${s.abbr} tax calculator 2026, ${p.slug} ${s.slug} self employment tax`,
    alternates: { canonical: `https://gigwisetax.com/${p.slug}/${s.slug}` },
  }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params
  const platform = PLATFORMS.find(p => p.slug === 'doordash')
  const state    = STATES.find(s => s.slug === stateSlug)
  if (!platform || !state) return notFound()

  const noStateTax = state.rate === 0
  const stateRateStr = noStateTax ? 'No State Income Tax' : `${(state.rate*100).toFixed(2).replace(/\.?0+$/, '')}%`
  const deductions = DEDUCTIONS['doordash' as keyof typeof DEDUCTIONS] || DEDUCTIONS.doordash

  const stateNotes: Record<string, string> = {
    'california':     `California has one of the highest state income tax rates in the USA at up to 13.3%. For ${platform.name} workers in California, the base rate used for planning is 9.3% — but high earners may pay more. California also requires separate estimated tax payments to the Franchise Tax Board (FTB) using Form 540-ES.`,
    'new-york':       `New York state income tax applies at 6.85% for most ${platform.name} workers. New York City residents pay an additional NYC income tax (2.55–3.88%), making total state+city tax one of the highest in the USA. File NY Form IT-2105 for quarterly estimated payments.`,
    'texas':          `Texas has NO state income tax, making it one of the most tax-friendly states for ${platform.name} workers. You only pay federal income tax and the 15.3% self-employment tax. No state quarterly payments required.`,
    'florida':        `Florida has NO state income tax. ${platform.name} workers in Florida only owe federal income tax and the 15.3% SE tax. This is one of the biggest benefits of living in Florida as a gig worker.`,
    'illinois':       `Illinois has a flat 4.95% state income tax rate. ${platform.name} workers in Illinois must also file IL-1040-ES for quarterly state estimated payments. Note: Illinois does not conform to some federal deductions.`,
    'washington':     `Washington state has NO state income tax. However, Washington does have a Business & Occupation (B&O) tax that may apply if your ${platform.name} income is above $12,000/year. Most gig workers fall below this threshold.`,
    'nevada':         `Nevada has NO state income tax — one of the best states for ${platform.name} gig workers. You only pay federal taxes and SE tax. No state quarterly payments required.`,
  }

  const stateNote = stateNotes[stateSlug] || `${state.name} ${noStateTax ? 'has no state income tax' : `has a ${stateRateStr} state income tax rate`}. ${noStateTax ? `${platform.name} workers in ${state.name} only pay federal income tax and the 15.3% self-employment tax.` : `${platform.name} workers in ${state.name} must make both federal and state quarterly estimated tax payments.`}`

  const card   = { background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, marginBottom: 20, boxShadow: '0 1px 6px rgba(0,0,0,.05)', overflow: 'hidden' as const }
  const cardHd = { background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${platform.name} Tax Calculator ${state.name} 2026`,
    applicationCategory: 'FinanceApplication',
    description: `Free ${platform.name} tax calculator for ${state.name} 2026`,
    url: `https://gigwisetax.com/${platform.slug}/${state.slug}`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    areaServed: { '@type': 'State', name: state.name, containedIn: { '@type': 'Country', name: 'United States' } },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}/>

      <div style={{ background: '#eef0f4', minHeight: '100vh' }}>

        {/* HERO */}
        <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 20px 28px' }}>
            <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
              <span style={{ margin: '0 8px' }}>›</span>
              <a href={`/${platform.slug}`} style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>{platform.name} Calculator</a>
              <span style={{ margin: '0 8px' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,.7)' }}>{state.name}</span>
            </nav>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
              <div style={{ width: 4, height: 34, background: '#B22234', borderRadius: 2, flexShrink: 0, marginTop: 4 }}/>
              <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.5px', margin: 0 }}>
                {platform.emoji} {platform.name} Tax Calculator — {state.name} 2026
              </h1>
            </div>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, paddingLeft: 16, maxWidth: 780, marginBottom: 18, textAlign: 'justify' }}>
              Free {platform.name} tax calculator for {state.name} ({state.abbr}).
              {noStateTax
                ? ` ${state.name} has no state income tax — you only pay federal SE tax (15.3%) and federal income tax.`
                : ` Includes the ${stateRateStr} ${state.name} state income tax plus federal SE tax (15.3%) and federal income tax.`
              } Get your quarterly payment schedule with Google Calendar export. No signup required.
            </p>
            <div style={{ paddingLeft: 16, display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
              {[
                `🗺️ ${state.abbr} State: ${noStateTax ? 'No Tax' : stateRateStr}`,
                '📋 IRS Schedule SE',
                '🔒 No Signup',
                '📅 2026 Tax Rules',
                '⚡ Instant Results',
              ].map(b => (
                <span key={b} style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 3, padding: '4px 10px', fontSize: 11, color: 'rgba(255,255,255,.55)', fontWeight: 500 }}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24, alignItems: 'start' }} className="main-grid">
          <div>
            {/* CALCULATOR */}
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>⚡ {platform.name} Tax Calculator — {state.name}</span>
              </div>
              <div style={{ padding: 20 }}>
                <GigCalculator platformSlug="doordash" stateSlug={stateSlug} stateName={state.name} stateRate={state.rate} platformName={platform.name} />
              </div>
            </div>

            {/* STATE NOTE */}
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>🗺️ {state.name} Tax Info for {platform.name} Workers</span>
              </div>
              <div style={{ padding: 20, fontSize: 14, color: '#374151', lineHeight: 1.8 }}>
                {stateNote}
              </div>
            </div>

            {/* FAQ */}
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>❓ Frequently Asked Questions</span>
              </div>
              <div style={{ padding: 20 }}>
                {[
                  {
                    q: `How much is ${platform.name} tax in ${state.name}?`,
                    a: noStateTax
                      ? `In ${state.name}, ${platform.name} workers pay 15.3% self-employment tax plus federal income tax. There is no ${state.name} state income tax, making it one of the most tax-friendly states for gig workers.`
                      : `In ${state.name}, ${platform.name} workers pay 15.3% self-employment tax, federal income tax (10–37%), plus ${stateRateStr} ${state.name} state income tax. On $50,000 net income, expect to owe approximately $17,000–$22,000 total in taxes.`,
                  },
                  {
                    q: `Do I need to make quarterly payments in ${state.name}?`,
                    a: noStateTax
                      ? `In ${state.name}, you must make federal quarterly estimated payments (IRS Form 1040-ES) if you expect to owe $1,000 or more. No state quarterly payments are required.`
                      : `Yes. In ${state.name}, you must make both federal quarterly estimated payments (IRS Form 1040-ES) and ${state.name} state quarterly payments if you expect to owe $1,000 or more.`,
                  },
                  {
                    q: `What is the self-employment tax in ${state.name} for ${platform.name} workers?`,
                    a: `The federal self-employment tax rate is 15.3% regardless of which state you live in. This covers Social Security (12.4%) and Medicare (2.9%). In ${state.name}, you additionally pay ${noStateTax ? 'no state income tax' : `${stateRateStr} state income tax`}.`,
                  },
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #f0f1f3', paddingBottom: 14, marginBottom: 14 }}>
                    <div style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 14, marginBottom: 8 }}>Q: {item.q}</div>
                    <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, textAlign: 'justify' }}>{item.a}</div>
                  </div>
                ))}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: 14, fontSize: 12, color: '#6c757d', lineHeight: 1.6 }}>
                  ⚠️ <strong>Disclaimer:</strong> State tax rates are for estimation purposes. Verify with your state&apos;s department of revenue or a licensed CPA. Not affiliated with the IRS, {platform.name}, or any government agency.
                </div>
              </div>
            </div>

            {/* OTHER STATES */}
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>🗺️ {platform.name} Tax in Other States</span>
              </div>
              <div style={{ padding: 16, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }} className="p-grid">
                {STATES.filter(s => s.slug !== stateSlug).slice(0, 12).map(s => (
                  <a key={s.slug} href={`/doordash/${s.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ border: '1px solid #e2e5e9', borderRadius: 4, padding: '8px 10px', textAlign: 'center' as const, background: '#fff' }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#1a1a2e', marginBottom: 2 }}>{s.abbr}</div>
                      <div style={{ fontSize: 10, color: s.rate === 0 ? '#059669' : '#B22234', fontWeight: 600 }}>{s.rate === 0 ? 'No Tax' : `${(s.rate*100).toFixed(1)}%`}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            <div style={{ background: '#fff', border: '2px dashed #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: '#f8fafc', padding: '6px 14px', borderBottom: '1px solid #e2e5e9', fontSize: 10, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Sponsored — 300×250</div>
              <div style={{ padding: 16 }}>
                <div style={{ background: '#f0f4f8', borderRadius: 4, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic' }}>Ad image / logo here</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#1a1a2e', marginBottom: 6 }}>📊 QuickBooks Self-Employed</div>
                <div style={{ fontSize: 13, color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>Handles {state.name} state and federal taxes automatically.</div>
                <a href="https://quickbooks.intuit.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#0d7a40', color: '#fff', padding: '11px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const, width: '100%' }}>✓ Try Free for 30 Days</div>
                </a>
                <div style={{ fontSize: 10, color: '#c4c9d4', marginTop: 6, textAlign: 'center' as const }}>Affiliate — commission may apply</div>
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>📌 Other Platforms in {state.abbr}</span>
              </div>
              {PLATFORMS.filter(p => p.slug !== 'doordash').map(p => (
                <a key={p.slug} href={`/${p.slug}/${state.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '10px 16px', borderBottom: '1px solid #f0f1f3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#374151' }}>
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{p.emoji} {p.name} in {state.abbr}</span>
                    <span style={{ fontSize: 11, color: '#B22234', fontWeight: 700 }}>{p.searches}</span>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ background: '#fff', border: '2px dashed #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: '#f8fafc', padding: '6px 14px', borderBottom: '1px solid #e2e5e9', fontSize: 10, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Sponsored — 300×200</div>
              <div style={{ padding: 16 }}>
                <div style={{ background: '#f0f4f8', borderRadius: 4, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic' }}>Ad image / logo here</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#1a1a2e', marginBottom: 6 }}>🏛️ H&amp;R Block</div>
                <div style={{ fontSize: 13, color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>File federal + {state.abbr} state taxes. Expert CPA review included.</div>
                <a href="https://hrblock.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#165c96', color: '#fff', padding: '11px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const, width: '100%' }}>🏛️ File Now — Start Free</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media(max-width:960px){.main-grid{grid-template-columns:1fr!important}.three-grid{grid-template-columns:1fr!important}.form-grid{grid-template-columns:1fr!important}.p-grid{grid-template-columns:repeat(3,1fr)!important}}
        `}</style>
      </div>
    </>
  )
}
