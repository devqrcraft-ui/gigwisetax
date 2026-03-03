import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const PLATFORM_SLUG = 'walmart-spark'
const PLATFORM_NAME = 'Walmart Spark'
const PLATFORM_EMOJI = '🛒'

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
    "slug": "district-of-columbia",
    "name": "District of Columbia",
    "abbr": "DC",
    "rate": 0.0895
  }
]

const DEDUCTIONS = ["🚗 Mileage ($0.725/mile)","📱 Phone & data plan","🌡️ Insulated grocery bags","🔧 Vehicle maintenance","🅿️ Parking & tolls","💻 Delivery apps"]

export async function generateStaticParams() {
  return STATES.map(s => ({ state: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params
  const s = STATES.find(x => x.slug === stateSlug)
  if (!s) return {}
  const rateStr = s.rate === 0 ? 'No State Tax' : `${(s.rate*100).toFixed(2).replace(/\.?0+$/,'')}% State Tax`
  return {
    title: `${PLATFORM_NAME} Tax Calculator — ${s.name} 2026 | GigWiseTax`,
    description: `Free ${PLATFORM_NAME} tax calculator for ${s.name} (${rateStr}). Calculate self-employment tax (15.3%), federal income tax, and quarterly payments for 2026. No signup.`,
    keywords: `${PLATFORM_SLUG} taxes ${s.name.toLowerCase()} 2026, ${platformSlug} tax calculator ${s.abbr.toLowerCase()}, gig worker taxes ${s.name.toLowerCase()}`,
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
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px', color: '#fff' }}>
      <nav style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
        {' › '}
        <a href={`/${PLATFORM_SLUG}`} style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>{PLATFORM_NAME}</a>
        {' › '}{state.name}
      </nav>

      <div style={{ background: 'linear-gradient(135deg,#1a1a2e,#0d1117)', borderRadius: 12, padding: 32, marginBottom: 32, border: '1px solid rgba(165,180,252,.2)' }}>
        <div style={{ fontSize: 13, color: '#a5b4fc', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
          {state.abbr} · {rateStr} · 2026
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 900, lineHeight: 1.2, marginBottom: 12 }}>
          {PLATFORM_EMOJI} {PLATFORM_NAME} Tax Calculator — {state.name} 2026
        </h1>
        <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.8, marginBottom: 20 }}>
          Free {PLATFORM_NAME} tax calculator for {state.name} ({state.abbr}).
          {noTax
            ? ` ${state.name} has NO state income tax — you only pay federal SE tax (15.3%) and federal income tax.`
            : ` ${state.name} has a ${rateStr} state income tax rate on top of federal SE tax (15.3%).`}
          {' '}No signup required.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[
            `${state.abbr}: ${rateStr}`,
            'SE Tax: 15.3%',
            'No Signup',
            'Updated 2026',
          ].map(b => (
            <span key={b} style={{ background: 'rgba(255,255,255,.08)', padding: '4px 12px', borderRadius: 20, fontSize: 13 }}>{b}</span>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 32 }}>
        {[
          { label: 'SE Tax Rate', value: '15.3%', note: 'Federal (all states)' },
          { label: 'State Income Tax', value: noTax ? 'None' : rateStr, note: state.name, color: noTax ? '#86efac' : '#fca5a5' },
          { label: 'Mileage Deduction', value: '$0.725/mi', note: '2026 IRS Rate' },
        ].map(c => (
          <div key={c.label} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, padding: 20, textAlign: 'center' }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', marginBottom: 6 }}>{c.label}</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: c.color || '#e8b84b', marginBottom: 4 }}>{c.value}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}>{c.note}</div>
          </div>
        ))}
      </div>

      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: 24, marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Quick Tax Estimate — {state.name}</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'rgba(165,180,252,.1)' }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#a5b4fc', fontSize: 13 }}>Annual Net Income</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#a5b4fc', fontSize: 13 }}>SE Tax</th>
              {!noTax && <th style={{ padding: '10px 14px', textAlign: 'left', color: '#a5b4fc', fontSize: 13 }}>State Tax</th>}
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#a5b4fc', fontSize: 13 }}>Federal Tax</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#a5b4fc', fontSize: 13 }}>Total Est.</th>
            </tr>
          </thead>
          <tbody>
            {[10000,25000,50000,75000,100000].map(income => {
              const se = Math.round(income * seRate * 0.9235)
              const st = noTax ? 0 : Math.round(income * state.rate)
              const fed = Math.round((income - se/2) * fedRate * 0.6)
              const total = se + st + fed
              return (
                <tr key={income} style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600 }}>${income.toLocaleString()}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,.7)' }}>${se.toLocaleString()}</td>
                  {!noTax && <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,.7)' }}>${st.toLocaleString()}</td>}
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,.7)' }}>${fed.toLocaleString()}</td>
                  <td style={{ padding: '10px 14px', fontWeight: 700, color: '#e8b84b' }}>${total.toLocaleString()}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: 24, marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Top {PLATFORM_NAME} Deductions in {state.name}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {DEDUCTIONS.map((d: string) => (
            <div key={d} style={{ background: 'rgba(255,255,255,.04)', borderRadius: 8, padding: '12px 16px', fontSize: 14 }}>
              {d}
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: 24, marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>2026 Quarterly Deadlines</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { q: 'Q1', due: 'April 15, 2026', urgent: true },
            { q: 'Q2', due: 'June 16, 2026', urgent: false },
            { q: 'Q3', due: 'September 15, 2026', urgent: false },
            { q: 'Q4', due: 'January 15, 2027', urgent: false },
          ].map(d => (
            <div key={d.q} style={{ background: d.urgent ? 'rgba(255,68,68,.1)' : 'rgba(255,255,255,.04)', border: d.urgent ? '1px solid rgba(255,68,68,.3)' : '1px solid rgba(255,255,255,.08)', borderRadius: 8, padding: '12px 16px' }}>
              <div style={{ fontWeight: 700, color: d.urgent ? '#ff4444' : '#fff', marginBottom: 4 }}>{d.q} {d.urgent ? '⚠️' : ''}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,.6)' }}>{d.due}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: 24, border: '1px solid rgba(165,180,252,.2)', textAlign: 'center', marginBottom: 32 }}>
        <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Calculate Your Exact {PLATFORM_NAME} Taxes in {state.name}</div>
        <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: 16 }}>Free · No signup · Instant results</p>
        <a href={`/${PLATFORM_SLUG}`} style={{ background: '#B22234', color: '#fff', padding: '12px 28px', borderRadius: 6, textDecoration: 'none', fontWeight: 700 }}>
          Open Calculator
        </a>
      </div>

      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>Other States</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {STATES.filter(s => s.slug !== stateSlug).slice(0, 20).map(s => (
            <a key={s.slug} href={`/${PLATFORM_SLUG}/${s.slug}`}
              style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 6, padding: '6px 12px', textDecoration: 'none', color: 'rgba(255,255,255,.7)', fontSize: 13 }}>
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
