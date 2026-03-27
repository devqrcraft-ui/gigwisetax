import { notFound } from 'next/navigation'
import { STATES, DEADLINES_2026 } from '@/lib/data'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return STATES.map(s => ({ state: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params
  const s = STATES.find(x => x.slug === stateSlug)
  if (!s) return {}
  const noTax = s.rate === 0
  const rateStr = noTax ? 'No State Income Tax' : `${(s.rate*100).toFixed(2).replace(/\.?0+$/, '')}% State Tax`
  return {
    title: noTax
      ? `${s.name} 1099 Tax Calculator 2026 — Self-Employed Tax, No State Income Tax`
      : `${s.name} 1099 Tax Calculator 2026 — Self-Employment & State Tax`,
    description: noTax
      ? `Free ${s.name} 1099 tax calculator for 2026 gig workers. See your self-employment and federal income taxes on 1099 income — with no state income tax in ${s.name}. Simple, fast and 100% private.`
      : `Free ${s.name} 1099 tax calculator for 2026. Estimate self-employment tax (15.3%), federal income tax and ${s.name} state tax on your 1099 income as a gig worker or freelancer. No signup, no data stored.`,
    alternates: { canonical: `https://www.gigwisetax.com/1099-tax-calculator/${stateSlug}` },
  }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params
  const state = STATES.find(s => s.slug === stateSlug)
  if (!state) return notFound()

  const noStateTax = state.rate === 0
  const rateStr = noStateTax ? '0%' : `${(state.rate*100).toFixed(2).replace(/\.?0+$/, '')}%`
  const stateRateText = noStateTax ? 'no state income tax' : `${rateStr} state income tax`

  const net40k = Math.round(40000 * (1 - 0.153 * 0.9235 - 0.12 - (noStateTax ? 0 : state.rate)))
  const net80k = Math.round(80000 * (1 - 0.153 * 0.9235 - 0.22 - (noStateTax ? 0 : state.rate)))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: `How much is 1099 self-employment tax in ${state.name}?`, acceptedAnswer: { '@type': 'Answer', text: `In ${state.name}, 1099 workers pay 15.3% self-employment tax on 92.35% of net earnings, plus federal income tax. ${noStateTax ? `${state.name} has no state income tax.` : `${state.name} also charges up to ${rateStr} state income tax.`}` } },
          { '@type': 'Question', name: `Do I need to pay quarterly taxes in ${state.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Yes. If you expect to owe $1,000+ in federal taxes, make quarterly estimated payments. ${noStateTax ? `${state.name} has no state income tax, so no state quarterly payments are required.` : `${state.name} also requires quarterly state estimated payments.`}` } },
          { '@type': 'Question', name: `What platforms does this ${state.name} 1099 calculator work for?`, acceptedAnswer: { '@type': 'Answer', text: `This calculator works for DoorDash, Uber, Lyft, Etsy, OnlyFans, Airbnb, Amazon Flex, Instacart, Grubhub, and all other 1099 / self-employed income in ${state.name}.` } },
        ]
      }) }} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px 48px', fontFamily: 'system-ui,sans-serif' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: 12, color: '#6c757d', padding: '14px 0 10px', display: 'flex', gap: 6, flexWrap: 'wrap' as const }}>
          <a href="/" style={{ color: '#B22234', textDecoration: 'none' }}>Home</a> /
          <a href="/1099-tax-calculator-2026" style={{ color: '#B22234', textDecoration: 'none' }}>1099 Tax Calculator</a> /
          <span>{state.name}</span>
        </div>

        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)', borderRadius: 8, padding: '28px 28px 22px', marginBottom: 28, border: '1px solid #2d2d4e' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: '#e8b84b', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 8 }}>
                {state.abbr} · 1099 & Self-Employed · Tax Year 2026
              </div>
              <h1 style={{ fontSize: 26, fontWeight: 900, color: '#fff', margin: '0 0 8px', lineHeight: 1.25 }}>
                {state.name} 1099 Tax Calculator 2026 —<br/>
                <span style={{ fontSize: 18, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Self-Employment Tax for Gig Workers</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, margin: 0, lineHeight: 1.6, maxWidth: 560 }}>
                This free {state.name} 1099 tax calculator helps gig workers, freelancers and independent contractors estimate their 2026 self-employment tax, federal income tax and {noStateTax ? 'no state income tax ('+state.name+' is tax-free)' : state.name+' state income tax'} on 1099 income. Works for DoorDash, Uber, Etsy, OnlyFans, Airbnb and all gig platforms.
              </p>
            </div>
            <div style={{ background: noStateTax ? 'rgba(5,150,105,.15)' : 'rgba(178,34,52,.15)', border: `1px solid ${noStateTax ? '#059669' : '#B22234'}`, borderRadius: 6, padding: '12px 18px', textAlign: 'center' as const, minWidth: 140 }}>
              <div style={{ fontSize: 11, color: noStateTax ? '#6ee7b7' : '#fca5a5', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 4 }}>State Tax Rate</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: noStateTax ? '#34d399' : '#f87171' }}>{rateStr}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', marginTop: 2 }}>{noStateTax ? 'No state income tax' : 'Top marginal rate'}</div>
            </div>
          </div>
        </div>

        {/* How 1099 taxes work */}
        <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, marginBottom: 20, overflow: 'hidden' as const }}>
          <div style={{ background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 3, height: 18, background: '#e8b84b', borderRadius: 2 }}/>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>How 1099 Taxes Work in {state.name}</span>
          </div>
          <div style={{ padding: 20 }}>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, marginBottom: 12 }}>
              As a 1099 worker in {state.name}, you pay <strong>self-employment tax of 15.3%</strong> on 92.35% of your net earnings (this covers Social Security 12.4% and Medicare 2.9%). On top of that, you owe <strong>federal income tax</strong> at your bracket rate (10%–37%).{' '}
              {noStateTax
                ? <><strong>{state.name} has no state income tax</strong>, which means you keep more of every dollar compared to high-tax states.</>
                : <>{state.name} additionally charges <strong>up to {rateStr} state income tax</strong> on your 1099 income.</>
              }
            </p>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              You can deduct 50% of your SE tax from gross income, plus business expenses like mileage ($0.725/mile in 2026), phone, equipment, and home office. Most gig workers in {state.name} end up with an effective total tax rate of <strong>18%–28%</strong> after deductions.
            </p>
          </div>
        </div>

        {/* Examples */}
        <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, marginBottom: 20, overflow: 'hidden' as const }}>
          <div style={{ background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 3, height: 18, background: '#e8b84b', borderRadius: 2 }}/>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>Example 1099 Income in {state.name}</span>
          </div>
          <div style={{ padding: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { gross: 40000, net: net40k, label: '$40,000 gross 1099 income' },
                { gross: 80000, net: net80k, label: '$80,000 gross 1099 income' },
              ].map(ex => (
                <div key={ex.gross} style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 6, padding: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e', marginBottom: 8 }}>{ex.label}</div>
                  <div style={{ fontSize: 12, color: '#6c757d', lineHeight: 1.7 }}>
                    SE tax (15.3%): ~${Math.round(ex.gross * 0.9235 * 0.153).toLocaleString()}<br/>
                    Federal tax: ~${Math.round(ex.gross * (ex.gross > 44000 ? 0.22 : 0.12)).toLocaleString()}<br/>
                    {noStateTax ? 'State tax: $0 (no state tax)' : `State tax: ~$${Math.round(ex.gross * state.rate).toLocaleString()}`}<br/>
                    <strong style={{ color: '#059669' }}>Est. take-home: ~${ex.net.toLocaleString()}</strong>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 12, margin: '12px 0 0' }}>
              * Estimates based on standard deduction, single filer, after 50% SE deduction. Use the full calculator above for your exact situation.
            </p>
          </div>
        </div>

        {/* Quarterly deadlines */}
        <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, marginBottom: 20, overflow: 'hidden' as const }}>
          <div style={{ background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 3, height: 18, background: '#e8b84b', borderRadius: 2 }}/>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>2026 Quarterly Tax Deadlines — {state.name}</span>
          </div>
          <div style={{ padding: 20 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
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
                    <td style={{ padding: '12px 14px', color: '#059669', fontWeight: 600 }}>✓ Required</td>
                    <td style={{ padding: '12px 14px' }}>
                      {noStateTax
                        ? <span style={{ color: '#059669', fontWeight: 600 }}>Not required</span>
                        : <span style={{ color: '#374151' }}>Required</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Platforms */}
        <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, marginBottom: 20, overflow: 'hidden' as const }}>
          <div style={{ background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 3, height: 18, background: '#e8b84b', borderRadius: 2 }}/>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>1099 Platforms in {state.name}</span>
          </div>
          <div style={{ padding: 16 }}>
            <p style={{ fontSize: 13, color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>
              This {state.name} 1099 tax calculator works for all gig platforms:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
              {[
                { name: 'DoorDash', href: '/doordash/' + stateSlug },
                { name: 'Uber', href: '/uber/' + stateSlug },
                { name: 'Instacart', href: '/instacart/' + stateSlug },
                { name: 'Airbnb', href: '/airbnb/' + stateSlug },
                { name: 'Etsy', href: '/etsy/' + stateSlug },
                { name: 'Amazon Flex', href: '/amazon-flex/' + stateSlug },
                { name: 'OnlyFans', href: '/onlyfans/' + stateSlug },
                { name: 'Lyft', href: '/lyft/' + stateSlug },
              ].map(p => (
                <a key={p.name} href={p.href} style={{ textDecoration: 'none' }}>
                  <div style={{ border: '1px solid #e2e5e9', borderRadius: 4, padding: '10px', textAlign: 'center' as const, background: '#f8fafc' }}>
                    <div style={{ fontSize: 18, marginBottom: 4 }}></div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#1a1a2e' }}>{p.name}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Other states */}
        <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, marginBottom: 20, overflow: 'hidden' as const }}>
          <div style={{ background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 3, height: 18, background: '#e8b84b', borderRadius: 2 }}/>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>1099 Tax Calculator — Other States</span>
          </div>
          <div style={{ padding: 16, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 8 }}>
            {STATES.filter(s => s.slug !== stateSlug).slice(0, 15).map(s => (
              <a key={s.slug} href={`/1099-tax-calculator/${s.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ border: '1px solid #e2e5e9', borderRadius: 4, padding: '8px', textAlign: 'center' as const, background: '#fff' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#1a1a2e' }}>{s.abbr}</div>
                  <div style={{ fontSize: 10, color: s.rate === 0 ? '#059669' : '#B22234', fontWeight: 600 }}>{s.rate === 0 ? 'No Tax' : `${(s.rate*100).toFixed(1)}%`}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
