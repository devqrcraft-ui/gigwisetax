'use client'

import { useState } from 'react'

interface State { slug: string; name: string; abbr: string; rate: number }
interface Platform { slug: string; name: string; emoji: string }
interface Deadline { q: string; period: string; due: string; days: number }

export default function GigCalculator({
  platform, states, deadlines
}: {
  platform: Platform
  states: State[]
  deadlines: Deadline[]
}) {
  const [income, setIncome]     = useState('')
  const [stateSlug, setStateSlug] = useState('california')
  const [filing, setFiling]     = useState<'single'|'married'>('single')
  const [result, setResult]     = useState<any>(null)

  const fmt = (n: number) => '$' + Math.round(n || 0).toLocaleString('en-US')

  const calculate = () => {
    const net = parseFloat(income) || 0
    if (!net) return
    const st = states.find(s => s.slug === stateSlug)
    const seBase   = net * 0.9235
    const seTax    = seBase * 0.153
    const taxable  = net - seTax * 0.5
    const fedRate  = filing === 'single' ? 0.22 : 0.12
    const federal  = taxable * fedRate
    const stateTax = taxable * (st?.rate ?? 0.05)
    const total    = federal + seTax + stateTax
    const saveRate = Math.min(Math.ceil((total / net) * 100) + 5, 35)
    setResult({ seTax, federal, stateTax, total, quarterly: total / 4, rate: ((total / net) * 100).toFixed(1), saveRate, stateAbbr: st?.abbr ?? '?' })
  }

  const card    = { background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, marginBottom: 20, boxShadow: '0 1px 6px rgba(0,0,0,.05)', overflow: 'hidden' as const }
  const cardHd  = { background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent  = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }
  const lbl     = { display: 'block', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 6 }
  const inp     = { width: '100%', border: '1px solid #d1d5db', borderRadius: 4, padding: '10px 12px', fontSize: 14, color: 'rgba(255,255,255,0.9)', background: '#fff', boxSizing: 'border-box' as const }
  const btnDark = { background: '#1a1a2e', color: '#fff', padding: '13px 0', borderRadius: 4, fontSize: 14, fontWeight: 800, cursor: 'pointer', textAlign: 'center' as const, width: '100%', letterSpacing: '0.3px' }
  const btnRed  = { background: '#B22234', color: '#fff', padding: '8px 0', borderRadius: 4, fontSize: 12, fontWeight: 700, cursor: 'pointer', textAlign: 'center' as const, width: '100%' }
  const btnGray = { background: '#f3f4f6', color: 'rgba(255,255,255,0.85)', padding: '8px 14px', borderRadius: 4, fontSize: 12, fontWeight: 700, cursor: 'pointer', textAlign: 'center' as const, border: '1px solid #d1d5db', whiteSpace: 'nowrap' as const }

  return (
    <>
      <div style={card}>
        <div style={cardHd}>
          <div style={accent}/>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{platform.name} Tax Calculator 2026</span>
          <span style={{ marginLeft: 'auto', background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.45)', fontSize: 11, padding: '3px 9px', borderRadius: 3 }}>IRS Schedule SE</span>
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }} className="form-grid">
            <div>
              <label style={lbl} htmlFor="state-of-residence-0"> State of Residence</label>
              <select style={inp}  id="state-of-residence-0" value={stateSlug} onChange={e => setStateSlug(e.target.value)}>
                {states.map(s => (
                  <option key={s.slug} value={s.slug}>
                    {s.name} {s.rate === 0 ? '(No State Tax)' : `(${(s.rate*100).toFixed(2).replace(/\.?0+$/, '')}%)`}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label style={lbl} htmlFor="filing-status-1"> Filing Status</label>
              <select style={inp}  id="filing-status-1" value={filing} onChange={e => setFiling(e.target.value as any)}>
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="hoh">Head of Household</option>
              </select>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={lbl}> Annual {platform.name} Net Income (USD)</label>
              <div style={{ position: 'relative' }}>
                 <input style={{ ...inp, paddingLeft: 24 }} type="number" value={income} onChange={e => setIncome(e.target.value)} placeholder="e.g. 45,000"/>
               </div>

          {/* INCOME PRESETS */}
          <div style={{display:'flex',flexWrap:'wrap',gap:'6px',marginTop:'8px',marginBottom:'4px'}}>
            {[['20000','$20k'],['50000','$50k'],['100000','$100k'],['250000','$250k'],['500000','$500k']].map(([v,l])=>(
              <button key={v} onClick={()=>setIncome(v)} style={{padding:'4px 10px',borderRadius:'20px',border:'1px solid rgba(232,184,75,0.35)',background:'rgba(20,35,60,0.9)',color:'#e8b84b',fontSize:'12px',fontWeight:600,cursor:'pointer'}}>{l}</button>
            ))}
          </div>
            </div>
          </div>
          <div style={btnDark} onClick={calculate}> Calculate {platform.name} Tax Estimate</div>
        </div>
      </div>

      {result && (
        <div style={card}>
          <div style={cardHd}>
            <div style={accent}/>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}> Your {platform.name} Tax Estimate</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid #e2e5e9' }} className="results-row">
            {[
              { label: 'SE Tax (15.3%)',  val: fmt(result.seTax),    sub: 'Schedule SE',          hi: false },
              { label: 'Federal Tax',    val: fmt(result.federal),  sub: 'Estimated',             hi: false },
              { label: `${result.stateAbbr} State Tax`, val: fmt(result.stateTax), sub: 'Estimated', hi: false },
              { label: 'Total Annual',   val: fmt(result.total),    sub: `${result.rate}% effective rate`, hi: true  },
            ].map((r, i) => (
              <div key={r.label} style={{ padding: '16px 14px', borderRight: i < 3 ? '1px solid #e2e5e9' : 'none', background: r.hi ? '#fff5f5' : '#f8fafc', borderLeft: r.hi ? '4px solid #B22234' : 'none' }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase' as const, letterSpacing: '0.7px', marginBottom: 8, lineHeight: 1.4 }}>{r.label}</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: r.hi ? '#B22234' : '#1a1a2e', marginBottom: 4 }}>{r.val}</div>
                <div style={{ fontSize: 11, color: '#9ca3af' }}>{r.sub}</div>
              </div>
            ))}
          </div>

          <div style={{ background: '#fff5f5', borderBottom: '1px solid #fecaca', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 13, color: '#B22234', fontWeight: 600 }}>
               Recommendation: Set aside <strong>{result.saveRate}% of every payment</strong> for taxes (approx. {fmt(parseFloat(income) * result.saveRate / 100 / 12)}/month)
            </span>
          </div>

          <div style={{ padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap' as const, gap: 8 }}>
              <span style={{ fontWeight: 700, fontSize: 14, color: 'rgba(255,255,255,0.9)' }}> Your 2026 Quarterly Payment Schedule</span>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={btnRed}>+ Add All to Google Calendar</div>
                <div style={btnGray} onClick={() => {
                  const lines = deadlines.map(d => d.q + ' 2026 — ' + d.due + ': ' + fmt(result.quarterly)).join('\n')
                  const text = 'Quarterly Tax Schedule 2026\n' + lines + '\nTotal: ' + fmt(result.total)
                  navigator.clipboard.writeText(text).then(() => {
                    const el = document.getElementById('copy-sched-btn')
                    if (el) { el.textContent = ' Copied!'; setTimeout(() => { el.textContent = ' Copy schedule' }, 2000) }
                  })
                }} id="copy-sched-btn"> Copy schedule</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }} className="q-grid">
              {deadlines.map((d, i) => (
                <div key={d.q} style={{ border: i === 0 ? '2px solid #B22234' : '1px solid #e2e5e9', borderRadius: 6, padding: 14, background: i === 0 ? '#fff5f5' : '#fff', position: 'relative' as const }}>
                  {i === 0 && <div style={{ position: 'absolute', top: -10, left: 8, background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 6px', borderRadius: 3, fontWeight: 800 }}> NEXT</div>}
                  <div style={{ fontSize: 12, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 2 }}>{d.q} 2026</div>
                  <div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 6 }}>{d.due}</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: i === 0 ? '#B22234' : '#1a1a2e', marginBottom: 8 }}>{fmt(result.quarterly)}</div>
                  <div style={btnRed}>+ Calendar</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 4, padding: '10px 14px', fontSize: 12, color: '#92400e', lineHeight: 1.6 }}>
               <strong>Disclaimer:</strong> Estimates for planning only. Consult a licensed CPA or visit IRS.gov for official guidance.
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
        @media(max-width:480px){
          .results-row{grid-template-columns:1fr!important}
        }
      `}</style>
    </>
  )
}
