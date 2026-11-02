'use client'

import { useState } from 'react'
import BehindOnTaxes from '@/app/components/BehindOnTaxes'
import PartnerCTA from '@/app/PartnerCTA'
import { estimateScheduleERawForState, estimateTaxForState } from '@/lib/tax-rules'
import ResultActions from '@/app/components/ResultActions'

interface State { slug: string; name: string; abbr: string; rate: number }
interface Platform { slug: string; name: string; emoji: string }
interface Deadline { q: string; period: string; due: string; days: number }

const MAX_EARNINGS = 10000000
const MAX_MILES = 500000
function parseNum(v: string): number {
  const t = v.replace(/[\s,$]/g, '')
  if (t === '') return 0
  if (/^\d+\.\d{3}$/.test(t) || (t.match(/\./g) || []).length > 1) return NaN
  return /^(\d+\.?\d*|\.\d+)$/.test(t) ? Number(t) : NaN
}

export default function GigCalculator({
  platform, states, deadlines, defaultState, allowScheduleEMode = false
}: {
  platform: Platform
  states: State[]
  deadlines: Deadline[]
  defaultState?: string
  allowScheduleEMode?: boolean
}) {
  const [income, setIncome]     = useState('')
  const [stateSlug, setStateSlug] = useState(defaultState && states.some(s => s.slug === defaultState) ? defaultState : 'california')
  const [filing, setFiling]     = useState<'single'|'married'|'hoh'>('single')
  const [schedule, setSchedule] = useState<'e'|'c'|null>(null)
  const [result, setResult]     = useState<any>(null)
  const [inputError, setInputError] = useState('')

  const fmt = (n: number) => '$' + Math.round(n || 0).toLocaleString('en-US')
  const nextIdx = deadlines.findIndex(d => new Date(d.due + ' 23:59:59').getTime() >= Date.now())

  const calculate = () => {
    if (allowScheduleEMode && !schedule) {
      setInputError('Choose the tax-treatment scenario that best matches your facts before calculating.')
      setResult(null)
      return
    }
    const checks: [number, number][] = [[parseNum(income), MAX_EARNINGS]]
    if (checks.some(([v]) => Number.isNaN(v))) { setInputError('Use numbers only (no letters or minus signs). For thousands use a comma, e.g. 50,000.'); setResult(null); return }
    if (checks.some(([v, mx]) => v > mx)) { setInputError('That number is too large for this estimator. Check the amount you entered.'); setResult(null); return }
    if (!checks[0][0]) { setInputError('Enter your annual earnings to calculate.'); setResult(null); return }
    setInputError('')
    const net = parseNum(income)
    if (!net) return
    const st = states.find(s => s.slug === stateSlug)
    const tax = allowScheduleEMode && schedule === 'e'
      ? estimateScheduleERawForState(net, st ?? { slug: 'unknown', rate: 0.05 }, filing)
      : estimateTaxForState(net, st ?? { slug: 'unknown', rate: 0.05 }, filing)
    const { se: seTax, federal, state: stateTax, total, quarterly } = tax
    const saveRate = Math.min(Math.ceil((total / net) * 100) + 5, 35)
    setResult({ seTax, federal, stateTax, total, quarterly, rate: ((total / net) * 100).toFixed(1), saveRate, stateAbbr: st?.abbr ?? '?', stateTaxModeled: tax.stateTaxModeled, scheduleE: allowScheduleEMode && schedule === 'e' })
  }

  const card    = { background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, marginBottom: 12, boxShadow: '0 2px 12px rgba(0,0,0,.3)', overflow: 'hidden' as const }
  const cardHd  = { background: 'rgba(255,255,255,0.07)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent  = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }
  const lbl     = { display: 'block', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase' as const, letterSpacing: '0.8px', marginBottom: 6 }
  const inp     = { width: '100%', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, padding: '10px 12px', fontSize: 14, color: 'rgba(255,255,255,0.9)', background: 'rgba(255,255,255,0.07)', boxSizing: 'border-box' as const }
  const btnDark = { background: 'rgba(255,255,255,0.07)', color: '#fff', padding: '13px 0', borderRadius: 4, fontSize: 14, fontWeight: 800, cursor: 'pointer', textAlign: 'center' as const, width: '100%', letterSpacing: '0.3px' }
  const btnRed  = { background: '#B22234', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 16, fontWeight: 700, cursor: 'pointer', textAlign: 'center' as const, width: '100%' }
  const subtotalLabel = result?.scheduleE ? 'Federal Subtotal' : 'Federal + SE Subtotal'

  return (
    <>
      <div style={card}>
        <div style={cardHd}>
          <div style={accent}/>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>{platform.name} Tax Calculator 2026</span>
          <span style={{ marginLeft: 'auto', background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.6)', fontSize: 13, padding: '3px 9px', borderRadius: 3 }}>
            {allowScheduleEMode ? schedule ? `Schedule ${schedule.toUpperCase()} scenario` : 'Choose tax treatment' : 'IRS Schedule SE'}
          </span>
        </div>
        <div style={{ padding: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 10 }} className="form-grid">
            <div>
              <label style={lbl} htmlFor="state-of-residence-0"> State of Residence</label>
              <select style={inp}  id="state-of-residence-0" value={stateSlug} onChange={e => setStateSlug(e.target.value)}>
                {states.map(s => (
                  <option key={s.slug} value={s.slug}>
                    {s.name} {s.slug === 'california' ? '(state tax not modeled)' : s.rate === 0 ? '(No State Tax)' : `(${(s.rate*100).toFixed(2).replace(/\.?0+$/, '')}%)`}
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
            {allowScheduleEMode && (
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={lbl} htmlFor="rental-tax-treatment"> Rental Tax Treatment Scenario</label>
                <select
                  style={inp}
                  id="rental-tax-treatment"
                  value={schedule ?? ''}
                  onChange={e => {
                    if (e.target.value === 'e' || e.target.value === 'c') {
                      setSchedule(e.target.value)
                    }
                    setResult(null)
                    setInputError('')
                  }}
                >
                  <option value="" disabled>Select based on your facts</option>
                  <option value="e">Schedule E — rental income (no SE tax modeled)</option>
                  <option value="c">Schedule C — business services (SE tax included)</option>
                </select>
                <p style={{ color: '#7a9abf', fontSize: 12, lineHeight: 1.6, margin: '6px 0 0' }}>
                  Choose based on your facts. Guest services and other circumstances can affect classification; this tool does not determine it.
                </p>
              </div>
            )}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={lbl}> Annual {allowScheduleEMode && schedule === 'e' ? 'Net Rental Income' : allowScheduleEMode && !schedule ? 'Net Income' : `${platform.name} Net Income`} (USD)</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.55)', fontWeight: 700 }}>$</span>
                <input style={{ ...inp, paddingLeft: 24 }} type="text" inputMode="decimal" value={income} onChange={e => setIncome(e.target.value)} placeholder="e.g. 45,000"/>
              </div>
            </div>
          </div>
          {inputError && (<div role="alert" style={{ color: '#ff8a8a', fontSize: 14, margin: '0 0 10px', lineHeight: 1.5 }}>{inputError}</div>)}
          <button type="button" style={{...btnDark, border: 'none', fontFamily: 'inherit', minHeight: 44, background: income ? "#4CAF50" : "rgba(255,255,255,0.07)", transition: "background 0.2s"}} onClick={calculate}> Calculate {platform.name} Tax Estimate</button>
        </div>
      </div>

      {result && (
        <div style={card}>
          <div style={cardHd}>
            <div style={accent}/>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}> Your {platform.name} Tax Estimate{result.stateTaxModeled ? '' : `: ${result.scheduleE ? 'federal' : 'federal + SE'} subtotal; CA tax not modeled`}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid rgba(255,255,255,0.1)' }} className="results-row">
            {[
              { label: 'SE Tax',  val: fmt(result.seTax),    sub: result.scheduleE ? 'Not modeled for Schedule E' : 'Schedule SE',          hi: false },
              { label: 'Federal Tax',    val: fmt(result.federal),  sub: 'Estimated',             hi: false },
              { label: `${result.stateAbbr} State Tax`, val: result.stateTaxModeled ? fmt(result.stateTax) : 'Not modeled', sub: result.stateTaxModeled ? 'Simplified rate' : 'Excluded from subtotal', hi: false },
              { label: result.stateTaxModeled ? 'Total Annual' : subtotalLabel,   val: fmt(result.total),    sub: result.stateTaxModeled ? `${result.rate}% effective rate` : 'California state tax excluded', hi: true  },
            ].map((r, i) => (
              <div key={r.label} style={{ padding: '10px 10px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', background: r.hi ? 'rgba(178,34,52,0.12)' : 'rgba(255,255,255,0.05)', borderLeft: r.hi ? '4px solid #B22234' : 'none' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#8fa8c8', textTransform: 'uppercase' as const, letterSpacing: '0.7px', marginBottom: 8, lineHeight: 1.4 }}>{r.label}</div>
                <div style={{ fontSize: 20, fontWeight: 900, color: r.hi ? '#B22234' : 'rgba(255,255,255,0.85)', marginBottom: 4 }}>{r.val}</div>
                <div style={{ fontSize: 13, color: '#7a9abf' }}>{r.sub}</div>
              </div>
            ))}
          </div>

          <ResultActions platformName={platform.name} stateAbbr={result.stateAbbr} seTax={result.seTax} federal={result.federal} stateTax={result.stateTax} stateTaxModeled={result.stateTaxModeled} scheduleE={result.scheduleE} total={result.total} quarterly={result.quarterly} />
          <div style={{ padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap' as const, gap: 8 }}>
              <span style={{ fontWeight: 700, fontSize: 14, color: 'rgba(255,255,255,0.9)' }}> Your 2026 Quarterly Payment Schedule</span>
              <button style={{...btnRed, border:'none', cursor:'pointer'}} onClick={() => {
                  const dates = [
                    {q:'Q1 2026',date:'20260415'},
                    {q:'Q2 2026',date:'20260615'},
                    {q:'Q3 2026',date:'20260915'},
                    {q:'Q4 2026',date:'20270115'},
                  ];
                  (nextIdx === -1 ? [] : dates.slice(nextIdx)).forEach(d => {
                    const title = encodeURIComponent(d.q + (result.stateTaxModeled ? ' Estimated Tax - ' : result.scheduleE ? ' Federal subtotal - ' : ' Federal + SE subtotal - ') + fmt(result.quarterly));
                    const url = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + title + '&dates=' + d.date + '/' + d.date;
                    window.open(url, '_blank');
                  });
                }}>+ Add All to Google Calendar</button>
                <button style={{background:'rgba(255,255,255,0.08)',color:'#e8b84b',padding:'10px 16px',borderRadius:4,fontSize:14,fontWeight:600,cursor:'pointer',border:'1px solid rgba(232,184,75,0.3)'}} onClick={() => {
                  const lines = deadlines.map(d => d.q + ' 2026 — ' + d.due + ': ' + fmt(result.quarterly)).join('\n')
                  const text = 'Quarterly Tax Schedule 2026\n' + lines + '\n' + (result.stateTaxModeled ? 'Total: ' : result.scheduleE ? 'Federal subtotal (state tax excluded): ' : 'Federal + SE subtotal (state tax excluded): ') + fmt(result.total)
                  try {
                    const ta = document.createElement('textarea')
                    ta.value = text
                    ta.style.position = 'fixed'
                    ta.style.opacity = '0'
                    document.body.appendChild(ta)
                    ta.focus()
                    ta.select()
                    document.execCommand('copy')
                    document.body.removeChild(ta)
                    const el = document.getElementById('copy-sched-btn2')
                    if (el) { el.textContent = '✓ Copied!'; setTimeout(() => { if(el) el.textContent = ' Copy schedule' }, 2000) }
                  } catch(e) {}
                }} id="copy-sched-btn2"> Copy schedule</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8 }} className="q-grid">
              {deadlines.map((d, i) => (
                <div key={d.q} style={{ border: i === nextIdx ? '2px solid #B22234' : '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 10, background: i === nextIdx ? 'rgba(178,34,52,0.12)' : 'rgba(255,255,255,0.04)', position: 'relative' as const }}>
                  {i === nextIdx && <div style={{ position: 'absolute', top: -10, left: 8, background: '#B22234', color: '#fff', fontSize: 12, padding: '2px 6px', borderRadius: 3, fontWeight: 800 }}> NEXT</div>}
                  <div style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 2 }}>{d.q} 2026</div>
                  <div style={{ fontSize: 13, color: '#7a9abf', marginBottom: 4 }}>{d.due}</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: i === nextIdx ? '#B22234' : 'rgba(255,255,255,0.85)', marginBottom: 6 }}>{fmt(result.quarterly)}</div>
                  {nextIdx !== -1 && i >= nextIdx && (<button style={{...btnRed, border:'none', cursor:'pointer', width:'100%'}} onClick={() => {
                    const calDates = ['20260415','20260615','20260915','20270115'];
                    const title = encodeURIComponent(d.q + (result.stateTaxModeled ? ' 2026 Estimated Tax - ' : result.scheduleE ? ' 2026 Federal subtotal - ' : ' 2026 Federal + SE subtotal - ') + fmt(result.quarterly));
                    const url = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + title + '&dates=' + calDates[i] + '/' + calDates[i];
                    window.open(url, '_blank');
                  }}>+ Calendar</button>)}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, background: 'rgba(232,184,75,0.1)', border: '1px solid rgba(232,184,75,0.3)', borderRadius: 4, padding: '10px 14px', fontSize: 14, color: '#fcd34d', lineHeight: 1.6 }}>
               <strong>Disclaimer:</strong> Planning estimate only. Federal tax assumes this is your only income and uses the selected filing status; it excludes other income, credits, rental-use limits, and local or lodging taxes. Schedule E treatment does not include self-employment tax. Consult a tax professional for classification and filing.
            </div>
          <PartnerCTA sid="airbnb" />
          <BehindOnTaxes page="airbnb" />
          </div>
        </div>
      )}


      <div style={{ margin: '24px 0 0', padding: '20px 24px', background: 'rgba(232,184,75,0.08)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 12 }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: '#e8b84b', marginBottom: 6 }}>Ready to file your 1099 taxes?</div>
        <div style={{ fontSize: 14, color: '#8fa8c8', marginBottom: 14, lineHeight: 1.6 }}>Compare the best tax software for gig workers in 2026 and see which saves you the most.</div>
        <a href="/blog/best-tax-software-for-gig-workers-2026" style={{ display: 'inline-block', background: '#e8b84b', color: '#07111F', fontWeight: 800, fontSize: 14, padding: '10px 20px', borderRadius: 8, textDecoration: 'none' }}>See recommended tax software →</a>
      </div>
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
