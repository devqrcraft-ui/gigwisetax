'use client'

import { useState } from 'react'

const STATES = [
  { slug: 'alabama', name: 'Alabama', abbr: 'AL', rate: 0.05 },
  { slug: 'alaska', name: 'Alaska', abbr: 'AK', rate: 0 },
  { slug: 'arizona', name: 'Arizona', abbr: 'AZ', rate: 0.025 },
  { slug: 'arkansas', name: 'Arkansas', abbr: 'AR', rate: 0.047 },
  { slug: 'california', name: 'California', abbr: 'CA', rate: 0.093 },
  { slug: 'colorado', name: 'Colorado', abbr: 'CO', rate: 0.044 },
  { slug: 'connecticut', name: 'Connecticut', abbr: 'CT', rate: 0.065 },
  { slug: 'delaware', name: 'Delaware', abbr: 'DE', rate: 0.066 },
  { slug: 'florida', name: 'Florida', abbr: 'FL', rate: 0 },
  { slug: 'georgia', name: 'Georgia', abbr: 'GA', rate: 0.055 },
  { slug: 'hawaii', name: 'Hawaii', abbr: 'HI', rate: 0.11 },
  { slug: 'idaho', name: 'Idaho', abbr: 'ID', rate: 0.058 },
  { slug: 'illinois', name: 'Illinois', abbr: 'IL', rate: 0.0495 },
  { slug: 'indiana', name: 'Indiana', abbr: 'IN', rate: 0.03 },
  { slug: 'iowa', name: 'Iowa', abbr: 'IA', rate: 0.057 },
  { slug: 'kansas', name: 'Kansas', abbr: 'KS', rate: 0.057 },
  { slug: 'kentucky', name: 'Kentucky', abbr: 'KY', rate: 0.045 },
  { slug: 'louisiana', name: 'Louisiana', abbr: 'LA', rate: 0.03 },
  { slug: 'maine', name: 'Maine', abbr: 'ME', rate: 0.075 },
  { slug: 'maryland', name: 'Maryland', abbr: 'MD', rate: 0.0575 },
  { slug: 'massachusetts', name: 'Massachusetts', abbr: 'MA', rate: 0.05 },
  { slug: 'michigan', name: 'Michigan', abbr: 'MI', rate: 0.0425 },
  { slug: 'minnesota', name: 'Minnesota', abbr: 'MN', rate: 0.0985 },
  { slug: 'mississippi', name: 'Mississippi', abbr: 'MS', rate: 0.047 },
  { slug: 'missouri', name: 'Missouri', abbr: 'MO', rate: 0.048 },
  { slug: 'montana', name: 'Montana', abbr: 'MT', rate: 0.059 },
  { slug: 'nebraska', name: 'Nebraska', abbr: 'NE', rate: 0.0664 },
  { slug: 'nevada', name: 'Nevada', abbr: 'NV', rate: 0 },
  { slug: 'new-hampshire', name: 'New Hampshire', abbr: 'NH', rate: 0 },
  { slug: 'new-jersey', name: 'New Jersey', abbr: 'NJ', rate: 0.1075 },
  { slug: 'new-mexico', name: 'New Mexico', abbr: 'NM', rate: 0.059 },
  { slug: 'new-york', name: 'New York', abbr: 'NY', rate: 0.0685 },
  { slug: 'north-carolina', name: 'North Carolina', abbr: 'NC', rate: 0.0525 },
  { slug: 'north-dakota', name: 'North Dakota', abbr: 'ND', rate: 0.029 },
  { slug: 'ohio', name: 'Ohio', abbr: 'OH', rate: 0.04 },
  { slug: 'oklahoma', name: 'Oklahoma', abbr: 'OK', rate: 0.0475 },
  { slug: 'oregon', name: 'Oregon', abbr: 'OR', rate: 0.099 },
  { slug: 'pennsylvania', name: 'Pennsylvania', abbr: 'PA', rate: 0.0307 },
  { slug: 'rhode-island', name: 'Rhode Island', abbr: 'RI', rate: 0.0599 },
  { slug: 'south-carolina', name: 'South Carolina', abbr: 'SC', rate: 0.064 },
  { slug: 'south-dakota', name: 'South Dakota', abbr: 'SD', rate: 0 },
  { slug: 'tennessee', name: 'Tennessee', abbr: 'TN', rate: 0 },
  { slug: 'texas', name: 'Texas', abbr: 'TX', rate: 0 },
  { slug: 'utah', name: 'Utah', abbr: 'UT', rate: 0.0465 },
  { slug: 'vermont', name: 'Vermont', abbr: 'VT', rate: 0.0875 },
  { slug: 'virginia', name: 'Virginia', abbr: 'VA', rate: 0.0575 },
  { slug: 'washington', name: 'Washington', abbr: 'WA', rate: 0 },
  { slug: 'west-virginia', name: 'West Virginia', abbr: 'WV', rate: 0.065 },
  { slug: 'wisconsin', name: 'Wisconsin', abbr: 'WI', rate: 0.0765 },
  { slug: 'wyoming', name: 'Wyoming', abbr: 'WY', rate: 0 },
  { slug: 'washington-dc', name: 'Washington D.C.', abbr: 'DC', rate: 0.0895 },
]

const DEADLINES = [
  { q: 'Q1', due: 'April 15, 2026', days: 45 },
  { q: 'Q2', due: 'June 16, 2026', days: 107 },
  { q: 'Q3', due: 'Sept 15, 2026', days: 198 },
  { q: 'Q4', due: 'Jan 15, 2027', days: 320 },
]

interface Platform { slug: string; name: string; emoji: string }

export default function GigCalculator({
  platform,
  defaultState,
}: {
  platform: Platform
  defaultState?: string
}) {
  const [income, setIncome] = useState('')
  const [stateSlug, setStateSlug] = useState(defaultState || 'california')
  const [filing, setFiling] = useState<'single' | 'married'>('single')
  const [result, setResult] = useState<any>(null)

  const fmt = (n: number) => '$' + Math.round(n || 0).toLocaleString('en-US')

  const calculate = () => {
    const net = parseFloat(income) || 0
    if (!net) return
    const st = STATES.find(s => s.slug === stateSlug)
    const seBase = net * 0.9235
    const seTax = seBase * 0.153
    const taxable = net - seTax * 0.5
    const fedRate = filing === 'single' ? 0.22 : 0.12
    const federal = taxable * fedRate
    const stateTax = taxable * (st?.rate ?? 0.05)
    const total = federal + seTax + stateTax
    setResult({
      seTax, federal, stateTax, total,
      quarterly: total / 4,
      rate: ((total / net) * 100).toFixed(1),
      saveRate: Math.min(Math.ceil((total / net) * 100) + 5, 35),
      stateAbbr: st?.abbr ?? '?',
    })
  }

  const inp: React.CSSProperties = { width: '100%', border: '1px solid #d1d5db', borderRadius: 4, padding: '10px 12px', fontSize: 14, color: '#1a1a2e', background: '#fff', boxSizing: 'border-box' }
  const lbl: React.CSSProperties = { display: 'block', fontSize: 11, fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 6 }
  const cardHd: React.CSSProperties = { background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }
  const accentBar: React.CSSProperties = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }
  const btnRed: React.CSSProperties = { background: '#B22234', color: '#fff', padding: '8px 0', borderRadius: 4, fontSize: 12, fontWeight: 700, cursor: 'pointer', textAlign: 'center', width: '100%' }
  const card: React.CSSProperties = { background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, marginBottom: 20, boxShadow: '0 1px 6px rgba(0,0,0,.05)', overflow: 'hidden' }

  return (
    <>
      {/* ── FORM ── */}
      <div style={card}>
        <div style={cardHd}>
          <div style={accentBar} />
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>
            {platform.emoji} {platform.name} Tax Calculator 2026
          </span>
          <span style={{ marginLeft: 'auto', background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.45)', fontSize: 11, padding: '3px 9px', borderRadius: 3 }}>
            IRS Schedule SE
          </span>
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }} className="form-grid">
            <div>
              <label style={lbl}>🗺️ State of Residence</label>
              <select style={inp} value={stateSlug} onChange={e => setStateSlug(e.target.value)}>
                {STATES.map(s => (
                  <option key={s.slug} value={s.slug}>
                    {s.name} {s.rate === 0 ? '(No State Tax)' : `(${(s.rate * 100).toFixed(2).replace(/\.?0+$/, '')}%)`}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label style={lbl}>📋 Filing Status</label>
              <select style={inp} value={filing} onChange={e => setFiling(e.target.value as any)}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={lbl}>💵 Annual {platform.name} Net Income (USD)</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#6b7280', fontWeight: 700 }}>$</span>
                <input
                  style={{ ...inp, paddingLeft: 24 }}
                  type="number"
                  value={income}
                  onChange={e => setIncome(e.target.value)}
                  placeholder="e.g. 45000"
                />
              </div>
            </div>
          </div>
          <div
            onClick={calculate}
            style={{ background: '#1a1a2e', color: '#fff', padding: '13px 0', borderRadius: 4, fontSize: 14, fontWeight: 800, cursor: 'pointer', textAlign: 'center', width: '100%', letterSpacing: '0.3px' }}
          >
            📊 Calculate {platform.name} Tax Estimate
          </div>
        </div>
      </div>

      {/* ── RESULTS ── */}
      {result && (
        <div style={card}>
          <div style={cardHd}>
            <div style={accentBar} />
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>📈 Your {platform.name} Tax Estimate</span>
          </div>

          {/* 4 boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid #e2e5e9' }} className="results-row">
            {[
              { label: 'SE Tax (15.3%)', val: fmt(result.seTax), sub: 'Schedule SE', hi: false },
              { label: 'Federal Tax', val: fmt(result.federal), sub: 'Estimated', hi: false },
              { label: `${result.stateAbbr} State Tax`, val: fmt(result.stateTax), sub: 'Estimated', hi: false },
              { label: 'Total Annual Tax', val: fmt(result.total), sub: `${result.rate}% effective`, hi: true },
            ].map((r, i) => (
              <div
                key={r.label}
                style={{
                  padding: '16px 14px',
                  borderRight: i < 3 ? '1px solid #e2e5e9' : 'none',
                  background: r.hi ? '#fff5f5' : '#f8fafc',
                  borderLeft: r.hi ? '4px solid #B22234' : 'none',
                }}
              >
                <div style={{ fontSize: 10, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 8, lineHeight: 1.4 }}>{r.label}</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: r.hi ? '#B22234' : '#1a1a2e', marginBottom: 4 }}>{r.val}</div>
                <div style={{ fontSize: 11, color: '#9ca3af' }}>{r.sub}</div>
              </div>
            ))}
          </div>

          {/* Tip */}
          <div style={{ background: '#fff5f5', borderBottom: '1px solid #fecaca', padding: '11px 20px' }}>
            <span style={{ fontSize: 13, color: '#B22234', fontWeight: 600 }}>
              💡 Set aside <strong>{result.saveRate}% of every payment</strong> — approx. {fmt(parseFloat(income) * result.saveRate / 100 / 12)}/month
            </span>
          </div>

          {/* Quarterly */}
          <div style={{ padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
              <span style={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e' }}>📆 2026 Quarterly Payment Schedule</span>
              <div style={{ ...btnRed, width: 'auto', padding: '7px 14px', fontSize: 12 }}>+ Add All to Calendar</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }} className="q-grid">
              {DEADLINES.map((d, i) => (
                <div
                  key={d.q}
                  style={{ border: i === 0 ? '2px solid #B22234' : '1px solid #e2e5e9', borderRadius: 6, padding: 14, background: i === 0 ? '#fff5f5' : '#fff', position: 'relative' }}
                >
                  {i === 0 && (
                    <div style={{ position: 'absolute', top: -10, left: 8, background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 6px', borderRadius: 3, fontWeight: 800 }}>
                      ⚠️ NEXT
                    </div>
                  )}
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#1a1a2e', marginBottom: 2 }}>{d.q} 2026</div>
                  <div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 6 }}>{d.due}</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: i === 0 ? '#B22234' : '#1a1a2e', marginBottom: 8 }}>
                    {fmt(result.quarterly)}
                  </div>
                  <div style={btnRed}>+ Calendar</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 4, padding: '10px 14px', fontSize: 12, color: '#92400e', lineHeight: 1.6 }}>
              ⚠️ <strong>Disclaimer:</strong> Estimates for planning only. Consult a licensed CPA or visit IRS.gov for official guidance.
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:960px){
          .results-row{grid-template-columns:1fr 1fr!important}
          .q-grid{grid-template-columns:1fr 1fr!important}
          .form-grid{grid-template-columns:1fr!important}
        }
        @media(max-width:480px){.results-row{grid-template-columns:1fr!important}}
      `}</style>
    </>
  )
}
