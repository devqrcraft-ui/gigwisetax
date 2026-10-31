import { example as gtxExample } from '@/lib/examples'
import { notFound } from 'next/navigation'

import { estimateTax } from '@/lib/tax-rules'
import GigCalculator from '../GigCalculator'
import type { Metadata } from 'next'
import { STATES } from '@/lib/data'

const PLATFORM_SLUG = 'walmart-spark'
const PLATFORM_NAME = 'Walmart Spark'
const PLATFORM_EMOJI = ''

const DEDUCTIONS = [" Mileage (72.5¢/mile Jan–Jun, 76¢ Jul–Dec)"," Phone & data plan"," Insulated grocery bags"," Vehicle maintenance"," Parking & tolls"," Delivery apps"]


export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state: stateSlug } = await params
  const s = STATES.find(x => x.slug === stateSlug)
  if (!s) return {}
  const rateStr = s.rate === 0 ? 'No State Tax' : `${(s.rate*100).toFixed(2).replace(/\.?0+$/,'')}% State Tax`
  return {
    title: s.rate === 0
      ? `Walmart Spark ${s.name} Taxes 2026 — No State Tax + Free SE Calculator`
      : `Walmart Spark ${s.name} Taxes 2026 — $30K Planning Estimate $${estimateTax(30000, s.rate).total.toLocaleString('en-US')}`,
    description: `Walmart Spark ${s.name} 2026 planning example: $30K net = ~${gtxExample(30000,{stateRate:s.rate}).text.se} SE + ${gtxExample(30000,{stateRate:s.rate}).text.federal} federal + simplified state estimate. ${rateStr}; not a full state tax calculation. Quarterly: ~${gtxExample(30000,{stateRate:s.rate}).text.quarterly}.`,
    alternates: { canonical: `https://www.gigwisetax.com/walmart-spark/${s.slug}` },
    keywords: `${PLATFORM_SLUG} taxes ${s.name.toLowerCase()} 2026, ${PLATFORM_SLUG} tax calculator ${s.abbr.toLowerCase()}, gig worker taxes ${s.name.toLowerCase()}`,
  }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params
  const state = STATES.find(s => s.slug === stateSlug)
  if (!state) return notFound()

  const rateStr = state.rate === 0 ? 'No State Tax' : `${(state.rate*100).toFixed(2).replace(/\.?0+$/,'')}%`
  const noTax = state.rate === 0
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px', color: 'rgba(255,255,255,0.9)' }}>

      
      <nav style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', marginBottom: 24 }}>
        <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
        <span> › </span>
        <a href={`/${PLATFORM_SLUG}`} style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>{PLATFORM_NAME}</a>
        <span> › </span>{state.name}
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
            : ` This estimator uses a simplified ${rateStr} state-rate input in addition to federal tax; it does not calculate the full state tax schedule.`}
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
          { label: 'Mileage Deduction', value: '72.5¢ Jan–Jun / 76¢ Jul–Dec', note: '2026 IRS rates' },
        ].map(c => (
          <div key={c.label} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, padding: 20, textAlign: 'center' }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', marginBottom: 6 }}>{c.label}</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: c.color || '#e8b84b', marginBottom: 4 }}>{c.value}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}>{c.note}</div>
          </div>
        ))}
      </div>

      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: 14, marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Interactive Tax Calculator</h2>
        <GigCalculator platform={{ slug: PLATFORM_SLUG, name: PLATFORM_NAME, emoji: PLATFORM_EMOJI, }} states={STATES} deadlines={[
          { q: 'Q1', due: 'April 15, 2026', period: 'Jan 1 – Mar 31', days: 45 },
          { q: 'Q2', due: 'June 15, 2026', period: 'Apr 1 – May 31', days: 107 },
          { q: 'Q3', due: 'September 15, 2026', period: 'Jun 1 – Aug 31', days: 198 },
          { q: 'Q4', due: 'January 15, 2027', period: 'Sep 1 – Dec 31', days: 320 },
        ]} />
      </div>

      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: 14, marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Quick Tax Estimate — {state.name}</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'rgba(165,180,252,.1)' }}>
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#a5b4fc', fontSize: 13 }}>Annual Net Income</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#a5b4fc', fontSize: 13 }}>SE Tax</th>
              {!noTax && <th style={{ padding: '10px 14px', textAlign: 'left', color: '#a5b4fc', fontSize: 13 }}>State Estimate</th>}
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#a5b4fc', fontSize: 13 }}>Federal Tax</th>
              <th style={{ padding: '10px 14px', textAlign: 'left', color: '#a5b4fc', fontSize: 13 }}>Total Est.</th>
            </tr>
          </thead>
          <tbody>
            {[10000,25000,50000,75000,100000].map(income => {
              const { se, state: st, federal: fed, total } = estimateTax(income, state.rate)
              return (
                <tr key={income} style={{ borderBottom: '1px solid rgba(255,255,255,.05)' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600 }}>${income.toLocaleString('en-US')}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,.7)' }}>${se.toLocaleString('en-US')}</td>
                  {!noTax && <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,.7)' }}>${st.toLocaleString('en-US')}</td>}
                  <td style={{ padding: '10px 14px', color: 'rgba(255,255,255,.7)' }}>${fed.toLocaleString('en-US')}</td>
                  <td style={{ padding: '10px 14px', fontWeight: 700, color: '#e8b84b' }}>${total.toLocaleString('en-US')}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: 14, marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>Top {PLATFORM_NAME} Deductions in {state.name}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {DEDUCTIONS.map((d: string) => (
            <div key={d} style={{ background: 'rgba(255,255,255,.04)', borderRadius: 8, padding: '12px 16px', fontSize: 14 }}>
              {d}
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: 14, marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>2026 Quarterly Deadlines</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { q: 'Q1', due: 'April 15, 2026', urgent: true },
            { q: 'Q2', due: 'June 15, 2026', urgent: false },
            { q: 'Q3', due: 'September 15, 2026', urgent: false },
            { q: 'Q4', due: 'January 15, 2027', urgent: false },
          ].map(d => (
            <div key={d.q} style={{ background: d.urgent ? 'rgba(255,68,68,.1)' : 'rgba(255,255,255,.04)', border: d.urgent ? '1px solid rgba(255,68,68,.3)' : '1px solid rgba(255,255,255,.08)', borderRadius: 8, padding: '12px 16px' }}>
              <div style={{ fontWeight: 700, color: d.urgent ? '#ff4444' : '#fff', marginBottom: 4 }}>{d.q} {d.urgent ? '' : ''}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,.6)' }}>{d.due}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg,#1a1a3e,#0d1117)', borderRadius: 12, padding: 14, border: '1px solid rgba(165,180,252,.2)', textAlign: 'center', marginBottom: 32 }}>
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
