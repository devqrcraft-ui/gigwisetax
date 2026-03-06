import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from '../GigCalculator'
import type { Metadata } from 'next'

const PLATFORM_SLUG = 'onlyfans'

const STATE_NOTES: Record<string, (platformName: string, stateRateStr: string, noStateTax: boolean) => string> = {
  'alabama':        (p, r, n) => `Alabama has a ${r} state income tax rate. ${p} workers in Alabama must file both federal Form 1040-ES and Alabama Form 40ES for quarterly estimated payments.`,
  'alaska':         (p, r, n) => `Alaska has NO state income tax — one of only 9 states with no income tax. ${p} workers in Alaska only pay federal SE tax (15.3%) and federal income tax. No state quarterly payments required.`,
  'arizona':        (p, r, n) => `Arizona reduced its state income tax to a flat ${r} in 2023 — one of the lowest rates in the US. ${p} workers in Arizona must file AZ Form 140ES for quarterly estimated payments.`,
  'arkansas':       (p, r, n) => `Arkansas has a ${r} state income tax rate. ${p} workers in Arkansas must file both federal and AR state quarterly estimated tax payments using AR Form AR1000ES.`,
  'california':     (p, r, n) => `California has one of the highest state income tax rates in the USA (up to 13.3%). For ${p} workers in California, the base planning rate is ${r}. California also requires separate estimated tax payments to the Franchise Tax Board (FTB) using Form 540-ES.`,
  'colorado':       (p, r, n) => `Colorado has a flat ${r} state income tax rate. ${p} workers in Colorado must file both federal Form 1040-ES and Colorado Form DR 0105EP for quarterly estimated payments.`,
  'connecticut':    (p, r, n) => `Connecticut has a ${r} state income tax rate for most ${p} workers. Connecticut requires quarterly estimated payments using Form CT-1040ES if you expect to owe $1,000 or more.`,
  'delaware':       (p, r, n) => `Delaware has a ${r} state income tax rate. ${p} workers in Delaware must file both federal and Delaware quarterly estimated payments using Form 200-ES.`,
  'florida':        (p, r, n) => `Florida has NO state income tax. ${p} workers in Florida only owe federal income tax and the 15.3% SE tax. This is one of the biggest tax advantages of working as a gig worker in Florida.`,
  'georgia':        (p, r, n) => `Georgia has a ${r} flat income tax rate. ${p} workers in Georgia must file both federal Form 1040-ES and Georgia Form 500-ES for quarterly estimated payments.`,
  'hawaii':         (p, r, n) => `Hawaii has one of the highest state income tax rates at ${r}. ${p} workers in Hawaii must file both federal and Hawaii Form N-1 for quarterly estimated payments. Hawaii's high cost of living also affects deductible expenses.`,
  'idaho':          (p, r, n) => `Idaho has a ${r} state income tax rate. ${p} workers in Idaho must file both federal Form 1040-ES and Idaho Form 51 for quarterly estimated payments.`,
  'illinois':       (p, r, n) => `Illinois has a flat ${r} state income tax rate. ${p} workers in Illinois must file IL-1040-ES for quarterly state estimated payments. Note: Illinois does not conform to some federal deductions.`,
  'indiana':        (p, r, n) => `Indiana has a flat ${r} state income tax rate — one of the lowest flat rates in the US. ${p} workers in Indiana must file both federal and Indiana Form ES-40 for quarterly estimated payments.`,
  'iowa':           (p, r, n) => `Iowa has a ${r} state income tax rate. ${p} workers in Iowa must file both federal Form 1040-ES and Iowa Form IA 1040ES for quarterly estimated payments.`,
  'kansas':         (p, r, n) => `Kansas has a ${r} state income tax rate. ${p} workers in Kansas must file both federal Form 1040-ES and Kansas Form K-40ES for quarterly estimated payments.`,
  'kentucky':       (p, r, n) => `Kentucky has a flat ${r} state income tax rate. ${p} workers in Kentucky must file both federal and Kentucky Form 740-ES for quarterly estimated payments.`,
  'louisiana':      (p, r, n) => `Louisiana has a ${r} state income tax rate — among the lower rates in the US. ${p} workers in Louisiana must file both federal and Louisiana Form IT-540ES for quarterly estimated payments.`,
  'maine':          (p, r, n) => `Maine has a ${r} state income tax rate. ${p} workers in Maine must file both federal Form 1040-ES and Maine Form 1040ES-ME for quarterly estimated payments.`,
  'maryland':       (p, r, n) => `Maryland has a ${r} state income tax rate plus local income taxes (1.75–3.2% depending on county). ${p} workers in Maryland must file both federal and Maryland Form PV for quarterly estimated payments.`,
  'massachusetts':  (p, r, n) => `Massachusetts has a flat ${r} state income tax rate. ${p} workers in Massachusetts must file both federal Form 1040-ES and Massachusetts Form 1-ES for quarterly estimated payments.`,
  'michigan':       (p, r, n) => `Michigan has a flat ${r} state income tax rate. ${p} workers in Michigan must file both federal and Michigan Form MI-1040ES for quarterly estimated payments.`,
  'minnesota':      (p, r, n) => `Minnesota has graduated state income tax rates up to ${r}. ${p} workers in Minnesota must file both federal Form 1040-ES and Minnesota Form M15 for quarterly estimated payments.`,
  'mississippi':    (p, r, n) => `Mississippi has a ${r} state income tax rate. ${p} workers in Mississippi must file both federal and Mississippi Form 80-106 for quarterly estimated payments.`,
  'missouri':       (p, r, n) => `Missouri has a ${r} state income tax rate. ${p} workers in Missouri must file both federal Form 1040-ES and Missouri Form MO-1040ES for quarterly estimated payments.`,
  'montana':        (p, r, n) => `Montana has a ${r} state income tax rate. ${p} workers in Montana must file both federal and Montana Form ESW for quarterly estimated payments.`,
  'nebraska':       (p, r, n) => `Nebraska has a ${r} state income tax rate. ${p} workers in Nebraska must file both federal Form 1040-ES and Nebraska Form 1040N-ES for quarterly estimated payments.`,
  'nevada':         (p, r, n) => `Nevada has NO state income tax — one of the best states for ${p} gig workers. You only pay federal taxes and SE tax. No state quarterly payments required.`,
  'new-hampshire':  (p, r, n) => `New Hampshire has NO state income tax on wages or self-employment income. ${p} workers in New Hampshire only pay federal SE tax and federal income tax. No state quarterly payments required.`,
  'new-jersey':     (p, r, n) => `New Jersey has a ${r} state income tax rate — one of the highest in the US. ${p} workers in New Jersey must file both federal Form 1040-ES and New Jersey Form NJ-1040-ES for quarterly estimated payments.`,
  'new-mexico':     (p, r, n) => `New Mexico has a ${r} state income tax rate. ${p} workers in New Mexico must file both federal and New Mexico Form PIT-ES for quarterly estimated payments.`,
  'new-york':       (p, r, n) => `New York state income tax applies at ${r} for most ${p} workers. New York City residents pay an additional NYC income tax (2.55–3.88%), making total state+city tax one of the highest in the USA. File NY Form IT-2105 for quarterly estimated payments.`,
  'north-carolina': (p, r, n) => `North Carolina has a flat ${r} state income tax rate. ${p} workers in North Carolina must file both federal Form 1040-ES and NC Form NC-40 for quarterly estimated payments.`,
  'north-dakota':   (p, r, n) => `North Dakota has a very low ${r} state income tax rate — one of the lowest in the US. ${p} workers in North Dakota must file both federal and North Dakota Form ND-1ES for quarterly estimated payments.`,
  'ohio':           (p, r, n) => `Ohio has a ${r} state income tax rate plus local city income taxes in many municipalities. ${p} workers in Ohio must file both federal Form 1040-ES and Ohio Form IT 1040ES for quarterly estimated payments.`,
  'oklahoma':       (p, r, n) => `Oklahoma has a ${r} state income tax rate. ${p} workers in Oklahoma must file both federal Form 1040-ES and Oklahoma Form OW-8-ES for quarterly estimated payments.`,
  'oregon':         (p, r, n) => `Oregon has one of the highest state income tax rates at ${r}. ${p} workers in Oregon must file both federal Form 1040-ES and Oregon Form OR-40-V for quarterly estimated payments.`,
  'pennsylvania':   (p, r, n) => `Pennsylvania has a flat ${r} state income tax rate — among the lowest flat rates in the US. ${p} workers in Pennsylvania must file both federal and Pennsylvania Form PA-40ESR for quarterly estimated payments.`,
  'rhode-island':   (p, r, n) => `Rhode Island has a ${r} state income tax rate. ${p} workers in Rhode Island must file both federal Form 1040-ES and Rhode Island Form RI-1040ES for quarterly estimated payments.`,
  'south-carolina': (p, r, n) => `South Carolina has a ${r} state income tax rate. ${p} workers in South Carolina must file both federal Form 1040-ES and South Carolina Form SC1040ES for quarterly estimated payments.`,
  'south-dakota':   (p, r, n) => `South Dakota has NO state income tax. ${p} workers in South Dakota only pay federal SE tax (15.3%) and federal income tax. No state quarterly payments required.`,
  'tennessee':      (p, r, n) => `Tennessee has NO state income tax on wages or self-employment income. ${p} workers in Tennessee only pay federal SE tax and federal income tax. No state quarterly payments required.`,
  'texas':          (p, r, n) => `Texas has NO state income tax, making it one of the most tax-friendly states for ${p} workers. You only pay federal income tax and the 15.3% self-employment tax. No state quarterly payments required.`,
  'utah':           (p, r, n) => `Utah has a flat ${r} state income tax rate. ${p} workers in Utah must file both federal Form 1040-ES and Utah Form TC-546 for quarterly estimated payments.`,
  'vermont':        (p, r, n) => `Vermont has a ${r} state income tax rate. ${p} workers in Vermont must file both federal Form 1040-ES and Vermont Form IN-114 for quarterly estimated payments.`,
  'virginia':       (p, r, n) => `Virginia has a ${r} state income tax rate. ${p} workers in Virginia must file both federal Form 1040-ES and Virginia Form 760ES for quarterly estimated payments.`,
  'washington':     (p, r, n) => `Washington state has NO state income tax. However, Washington does have a Business & Occupation (B&O) tax that may apply if your ${p} income exceeds $12,000/year. Most gig workers fall below this threshold.`,
  'washington-dc':  (p, r, n) => `Washington D.C. has a ${r} income tax rate. ${p} workers in D.C. must file both federal Form 1040-ES and D.C. Form D-40ES for quarterly estimated payments.`,
  'west-virginia':  (p, r, n) => `West Virginia has a ${r} state income tax rate. ${p} workers in West Virginia must file both federal Form 1040-ES and West Virginia Form IT-140ES for quarterly estimated payments.`,
  'wisconsin':      (p, r, n) => `Wisconsin has a ${r} state income tax rate. ${p} workers in Wisconsin must file both federal Form 1040-ES and Wisconsin Form 1-ES for quarterly estimated payments.`,
  'wyoming':        (p, r, n) => `Wyoming has NO state income tax — making it one of the best states for ${p} gig workers. You only pay federal SE tax (15.3%) and federal income tax. No state quarterly payments required.`,
}

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
  const stateRateStr = noStateTax ? 'No State Income Tax' : `${(state.rate*100).toFixed(2).replace(/\.?0+$/, '')}%`
  const deductions   = DEDUCTIONS[PLATFORM_SLUG as keyof typeof DEDUCTIONS] || DEDUCTIONS.doordash

  const noteGen = STATE_NOTES[stateSlug]
  const stateNote = noteGen
    ? noteGen(platform.name, stateRateStr, noStateTax)
    : `${state.name} ${noStateTax ? 'has no state income tax' : `has a ${stateRateStr} state income tax rate`}. ${noStateTax
        ? `${platform.name} workers in ${state.name} only pay federal income tax and the 15.3% self-employment tax.`
        : `${platform.name} workers in ${state.name} must make both federal and state quarterly estimated tax payments.`}`

  const card   = { background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, marginBottom: 20, boxShadow: '0 1px 6px rgba(0,0,0,.05)', overflow: 'hidden' as const }
  const cardHd = { background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${platform.name} Tax Calculator ${state.name} 2026`,
    applicationCategory: 'FinanceApplication',
    description: `Free ${platform.name} tax calculator for ${state.name} 2026`,
    url: `https://www.gigwisetax.com/${platform.slug}/${state.slug}`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    areaServed: { '@type': 'State', name: state.name, containedIn: { '@type': 'Country', name: 'United States' } },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}/>
      <div style={{ background: '#0d1117', minHeight: '100vh' }}>

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
              } Quarterly payment schedule with Google Calendar export. No signup required.
            </p>
            <div style={{ paddingLeft: 16, display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
              {[
                `🗺️ ${state.abbr}: ${noStateTax ? 'No Tax' : stateRateStr}`,
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

        {/* SPONSORED */}
        <div style={{ background: '#fffbeb', borderBottom: '1px solid #fde68a' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '9px 20px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' as const }}>
            <span style={{ fontSize: 10, fontWeight: 800, color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase' as const }}>Sponsored</span>
            <span style={{ fontSize: 13, color: '#78350f', flex: 1 }}>
              <strong>TurboTax Self-Employed</strong> — File your {state.name} 1099 taxes. Handles both federal and {state.abbr} state returns automatically.
            </span>
            <a href="https://turbotax.intuit.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#B22234', color: '#fff', padding: '7px 18px', borderRadius: 4, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>Start Free →</div>
            </a>
          </div>
        </div>

        {/* MAIN GRID */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px 48px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }} className="main-grid">
          <div>
            <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026} />

            {/* STATE GUIDE */}
            <div style={card}>
              <div style={cardHd}>
                <div style={accent}/>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>📚 {platform.name} Taxes in {state.name} — 2026 Guide</span>
              </div>
              <div style={{ padding: 24 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1a1a2e', marginBottom: 12 }}>
                  How {platform.name} Taxes Work in {state.name}
                </h2>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.8, textAlign: 'justify', marginBottom: 16 }}>
                  {stateNote}
                </p>

                {/* TAX BREAKDOWN */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 20 }} className="three-grid">
                  {[
                    { label: 'SE Tax', val: '15.3%', sub: 'Federal (all states)', color: '#B22234' },
                    { label: 'Federal Tax', val: '10–37%', sub: 'Based on income', color: '#1a1a2e' },
                    { label: `${state.abbr} State Tax`, val: noStateTax ? 'None' : stateRateStr, sub: noStateTax ? 'No state income tax' : `${state.name} rate`, color: noStateTax ? '#059669' : '#1a1a2e' },
                  ].map((r, i) => (
                    <div key={r.label} style={{ border: '1px solid #e2e5e9', borderRadius: 6, padding: 14, borderLeft: `4px solid ${r.color}`, textAlign: 'center' as const }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase' as const, marginBottom: 6 }}>{r.label}</div>
                      <div style={{ fontSize: 24, fontWeight: 900, color: r.color }}>{r.val}</div>
                      <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 4 }}>{r.sub}</div>
                    </div>
                  ))}
                </div>

                {/* QUARTERLY TABLE */}
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#1a1a2e', marginBottom: 12 }}>
                  2026 Quarterly Tax Deadlines for {state.name}
                </h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' as const, marginBottom: 20 }}>
                  <thead>
                    <tr style={{ background: '#1a1a2e' }}>
                      {['Quarter', 'Due Date', 'Federal (1040-ES)', `${state.abbr} State`].map(h => (
                        <th key={h} style={{ padding: '10px 14px', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.6)', textTransform: 'uppercase' as const, textAlign: 'left' as const }}>{h}</th>
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
                            : <span style={{ color: '#374151', fontWeight: 600 }}>Required</span>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* DEDUCTIONS */}
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#1a1a2e', marginBottom: 12 }}>
                  Top Tax Deductions for {platform.name} Workers in {state.name}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }} className="form-grid">
                  {deductions.map((d: string) => (
                    <div key={d} style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: '10px 14px', fontSize: 13, color: '#374151', fontWeight: 500 }}>{d}</div>
                  ))}
                </div>

                {/* FAQ */}
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#1a1a2e', marginBottom: 16 }}>
                  FAQ — {platform.name} Taxes in {state.name} 2026
                </h3>
                {[
                  {
                    q: `How much is ${platform.name} tax in ${state.name}?`,
                    a: noStateTax
                      ? `In ${state.name}, ${platform.name} workers pay 15.3% self-employment tax plus federal income tax. There is no ${state.name} state income tax, making it one of the most tax-friendly states for gig workers.`
                      : `In ${state.name}, ${platform.name} workers pay 15.3% self-employment tax, federal income tax (10–37%), plus ${stateRateStr} ${state.name} state income tax. On $50,000 net income, expect to owe approximately $17,000–$22,000 total.`,
                  },
                  {
                    q: `Do I need to make quarterly payments in ${state.name}?`,
                    a: noStateTax
                      ? `In ${state.name}, you must make federal quarterly estimated payments (IRS Form 1040-ES) if you expect to owe $1,000 or more. No state quarterly payments are required.`
                      : `Yes. In ${state.name}, you must make both federal quarterly estimated payments (IRS Form 1040-ES) and ${state.name} state quarterly payments if you expect to owe $1,000 or more.`,
                  },
                  {
                    q: `What is the self-employment tax rate in ${state.name} for ${platform.name} workers?`,
                    a: `The federal self-employment tax rate is 15.3% regardless of state. This covers Social Security (12.4%) and Medicare (2.9%). In ${state.name}, you additionally pay ${noStateTax ? 'no state income tax' : `${stateRateStr} state income tax`}.`,
                  },
                  {
                    q: `Does ${platform.name} take out taxes in ${state.name}?`,
                    a: `No. ${platform.name} classifies workers as independent contractors, not employees. No taxes are withheld from your payments. You are responsible for paying all federal SE tax, federal income tax${noStateTax ? '' : `, and ${state.name} state income tax`} yourself, typically through quarterly estimated payments.`,
                  },
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #f0f1f3', paddingBottom: 14, marginBottom: 14 }}>
                    <div style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 14, marginBottom: 8 }}>Q: {item.q}</div>
                    <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, textAlign: 'justify' as const }}>{item.a}</div>
                  </div>
                ))}

                <div style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 4, padding: 14, fontSize: 12, color: '#6c757d', lineHeight: 1.6 }}>
                  ⚠️ <strong>Disclaimer:</strong> State tax rates are for estimation purposes. Verify with your state's department of revenue or a licensed CPA. Not affiliated with the IRS, {platform.name}, or any government agency.
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
                {STATES.filter(s => s.slug !== stateSlug).map(s => (
                  <a key={s.slug} href={`/${PLATFORM_SLUG}/${s.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ border: '1px solid #e2e5e9', borderRadius: 4, padding: '8px 10px', textAlign: 'center' as const, background: '#fff' }}
                    >
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
                  <div style={{ background: '#0d7a40', color: '#fff', padding: '11px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const }}>✓ Try Free for 30 Days</div>
                </a>
                <div style={{ fontSize: 10, color: '#c4c9d4', marginTop: 6, textAlign: 'center' as const }}>Affiliate — commission may apply</div>
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
              <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>📌 Other Platforms in {state.abbr}</span>
              </div>
              {PLATFORMS.filter(p => p.slug !== PLATFORM_SLUG).map(p => (
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
                  <div style={{ background: '#165c96', color: '#fff', padding: '11px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const }}>🏛️ File Now — Start Free</div>
                </a>
              </div>
            </div>
          </div>
        </div>

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
