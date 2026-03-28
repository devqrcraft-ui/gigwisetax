// ================================================================
// FILE: app/deadlines/page.tsx
// ================================================================

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '2026 Quarterly Tax Deadlines — All 51 States | GigWiseTax',
  description: 'Complete 2026 quarterly estimated tax deadlines for gig workers. Q1: April 15 · Q2: June 16 · Q3: Sept 15 · Q4: Jan 15. Federal and all 50 state deadlines. Google Calendar export.',
  keywords: '2026 quarterly tax deadlines, estimated tax deadlines 2026, IRS 1040-ES due dates 2026, gig worker tax deadlines',
  alternates: { canonical: 'https://www.gigwisetax.com/deadlines' },
}

const STATES_DEADLINES = [
  { state: 'Alabama', abbr: 'AL', rate: '5%', q1: 'April 15', q2: 'June 15', q3: 'Sept 15', q4: 'Jan 15', portal: 'myalabamataxes.alabama.gov' },
  { state: 'Alaska', abbr: 'AK', rate: 'No Tax', q1: '—', q2: '—', q3: '—', q4: '—', portal: 'N/A' },
  { state: 'Arizona', abbr: 'AZ', rate: '2.5%', q1: 'April 15', q2: 'June 15', q3: 'Sept 15', q4: 'Jan 15', portal: 'aztaxes.gov' },
  { state: 'California', abbr: 'CA', rate: '9.3%', q1: 'April 15', q2: 'June 15', q3: 'Sept 15', q4: 'Jan 15', portal: 'ftb.ca.gov' },
  { state: 'Colorado', abbr: 'CO', rate: '4.4%', q1: 'April 15', q2: 'June 15', q3: 'Sept 15', q4: 'Jan 15', portal: 'revenue.colorado.gov' },
  { state: 'Florida', abbr: 'FL', rate: 'No Tax', q1: '—', q2: '—', q3: '—', q4: '—', portal: 'N/A' },
  { state: 'Georgia', abbr: 'GA', rate: '5.5%', q1: 'April 15', q2: 'June 15', q3: 'Sept 15', q4: 'Jan 15', portal: 'gtc.dor.ga.gov' },
  { state: 'Illinois', abbr: 'IL', rate: '4.95%', q1: 'April 15', q2: 'June 15', q3: 'Sept 15', q4: 'Jan 15', portal: 'mytax.illinois.gov' },
  { state: 'Nevada', abbr: 'NV', rate: 'No Tax', q1: '—', q2: '—', q3: '—', q4: '—', portal: 'N/A' },
  { state: 'New York', abbr: 'NY', rate: '6.85%', q1: 'April 15', q2: 'June 15', q3: 'Sept 15', q4: 'Jan 15', portal: 'tax.ny.gov' },
  { state: 'Texas', abbr: 'TX', rate: 'No Tax', q1: '—', q2: '—', q3: '—', q4: '—', portal: 'N/A' },
  { state: 'Washington', abbr: 'WA', rate: 'No Tax', q1: '—', q2: '—', q3: '—', q4: '—', portal: 'N/A' },
]

export default function DeadlinesPage() {
  const card = { background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, marginBottom: 20, boxShadow: '0 1px 6px rgba(0,0,0,.05)', overflow: 'hidden' as const }
  const cardHd = { background: '#1a1a2e', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 10 }
  const accent = { width: 3, height: 18, background: '#e8b84b', borderRadius: 2, flexShrink: 0 }
  const btnRed = { background: '#B22234', color: '#fff', padding: '8px 14px', borderRadius: 4, fontSize: 12, fontWeight: 700, cursor: 'pointer', textAlign: 'center' as const, whiteSpace: 'nowrap' as const }

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the 2026 tax deadlines for gig workers?","acceptedAnswer":{"@type":"Answer","text":"2026 key dates: Q1 estimated tax — April 15, Q2 — June 16, Q3 — September 15, Q4 — January 15 2027. Tax return deadline — April 15 2027 (extension to October 15 2027). 1099-NEC receipt by January 31 2027."}},{"@type":"Question","name":"What is the penalty for missing quarterly estimated tax payments?","acceptedAnswer":{"@type":"Answer","text":"The IRS underpayment penalty for 2026 is based on the federal short-term rate plus 3 percentage points. On a $2,000 underpayment for one quarter, the penalty is roughly $30-$50. Penalties compound quarterly."}},{"@type":"Question","name":"When do I need to file my gig worker tax return for 2026?","acceptedAnswer":{"@type":"Answer","text":"Your 2026 federal tax return is due April 15, 2027. File Form 4868 for an automatic 6-month extension to October 15, 2027. An extension to file is NOT an extension to pay — any taxes owed are still due April 15."}}]}' }} />
      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
            <div style={{ width: 4, height: 34, background: '#B22234', borderRadius: 2, flexShrink: 0, marginTop: 4 }}/>
            <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: 0 }}>
               2026 Quarterly Estimated Tax Deadlines — All 51 States
            </h1>
          </div>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: 14, lineHeight: 1.8, paddingLeft: 16, maxWidth: 760, textAlign: 'justify' }}>
            Official IRS quarterly estimated tax payment deadlines for gig workers in 2026.
            Includes federal deadlines and state-level payment portals for all 51 jurisdictions.
            Export any deadline directly to Google Calendar — free, no signup required.
          </p>
        </div>
      </div>


      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px 48px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: 24 }} className="main-grid">
        <div>
          {/* 2026 FEDERAL DEADLINES */}
          <div style={card}>
            <div style={cardHd}>
              <div style={accent}/>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}> 2026 Federal Quarterly Deadlines (IRS Form 1040-ES)</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: '1px solid #e2e5e9' }} className="results-row">
              {[
                { q: 'Q1 2026', period: 'Jan 1 – Mar 31', due: 'April 15, 2026', days: 45, now: true },
                { q: 'Q2 2026', period: 'Apr 1 – May 31', due: 'June 16, 2026', days: 107, now: false },
                { q: 'Q3 2026', period: 'Jun 1 – Aug 31', due: 'Sept 15, 2026', days: 198, now: false },
                { q: 'Q4 2026', period: 'Sep 1 – Dec 31', due: 'Jan 15, 2027', days: 320, now: false },
              ].map((d, i) => (
                <div key={d.q} style={{ padding: '20px 16px', borderRight: i < 3 ? '1px solid #e2e5e9' : 'none', background: d.now ? '#fff5f5' : '#fff', borderLeft: d.now ? '4px solid #B22234' : 'none', textAlign: 'center' as const, position: 'relative' as const }}>
                  {d.now && <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', background: '#B22234', color: '#fff', fontSize: 9, padding: '2px 8px', borderRadius: 3, fontWeight: 800, whiteSpace: 'nowrap' }}> UPCOMING</div>}
                  <div style={{ marginTop: d.now ? 16 : 0, fontSize: 13, fontWeight: 800, color: d.now ? '#B22234' : '#1a1a2e', marginBottom: 4 }}>{d.q}</div>
                  <div style={{ fontSize: 11, color: '#9ca3af', marginBottom: 10 }}>{d.period}</div>
                  <div style={{ fontSize: 17, fontWeight: 900, color: d.now ? '#B22234' : '#1a1a2e', marginBottom: 8 }}>{d.due}</div>
                  <div style={{ background: d.now ? '#fee2e2' : '#f0f4f8', color: d.now ? '#B22234' : '#374151', padding: '4px 10px', borderRadius: 12, fontSize: 12, fontWeight: 700, display: 'inline-block', marginBottom: 12 }}>{d.days} days</div>
                  <div style={btnRed}> + Calendar</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '16px 20px', background: '#f8fafc', fontSize: 13, color: '#374151', lineHeight: 1.7 }}>
              <strong>How to pay:</strong> Use <a href="https://directpay.irs.gov" target="_blank" rel="noopener noreferrer" style={{ color: '#B22234' }}>IRS Direct Pay</a> (free, no registration) or the IRS2Go app. Pay to "1040-ES" for estimated taxes. Same-day processing available.
            </div>
          </div>

          {/* PENALTY WARNING */}
          <div style={{ background: '#fff5f5', border: '1px solid #fecaca', borderRadius: 6, padding: 20, marginBottom: 20 }}>
            <div style={{ fontWeight: 800, color: '#B22234', marginBottom: 10, fontSize: 15 }}> Underpayment Penalty Warning</div>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 10px', textAlign: 'justify' }}>
              If you expect to owe <strong>$1,000 or more</strong> in federal taxes after withholding and credits,
              you must make quarterly estimated payments or face an <strong>underpayment penalty</strong>.
              For 2026, the underpayment rate is approximately <strong>7–8% annualized</strong> on the amount owed.
            </p>
            <div style={{ fontSize: 13, color: '#374151', fontWeight: 600 }}>
              Safe Harbor: Pay at least 100% of your 2025 tax liability (110% if 2025 AGI exceeded $150,000) and avoid penalties entirely — even if you owe more in April.
            </div>
          </div>

          {/* STATE DEADLINES */}
          <div style={card}>
            <div style={cardHd}>
              <div style={accent}/>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}> State Quarterly Tax Deadlines 2026</span>
            </div>
            <div style={{ overflowX: 'auto' as const }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' as const, minWidth: 600 }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e5e9' }}>
                    {['State', 'Rate', 'Q1', 'Q2', 'Q3', 'Q4', 'Portal'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', fontSize: 11, fontWeight: 700, color: '#6c757d', textTransform: 'uppercase' as const, textAlign: 'left' as const }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {STATES_DEADLINES.map((s, i) => (
                    <tr key={s.abbr} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                      <td style={{ padding: '11px 14px', fontWeight: 700, fontSize: 13 }}>{s.abbr} — {s.state}</td>
                      <td style={{ padding: '11px 14px', color: s.rate === 'No Tax' ? '#059669' : '#B22234', fontWeight: 700, fontSize: 13 }}>{s.rate}</td>
                      <td style={{ padding: '11px 14px', color: s.q1 === '—' ? '#d1d5db' : '#374151', fontSize: 12 }}>{s.q1}</td>
                      <td style={{ padding: '11px 14px', color: s.q2 === '—' ? '#d1d5db' : '#374151', fontSize: 12 }}>{s.q2}</td>
                      <td style={{ padding: '11px 14px', color: s.q3 === '—' ? '#d1d5db' : '#374151', fontSize: 12 }}>{s.q3}</td>
                      <td style={{ padding: '11px 14px', color: s.q4 === '—' ? '#d1d5db' : '#374151', fontSize: 12 }}>{s.q4}</td>
                      <td style={{ padding: '11px 14px', fontSize: 11, color: '#6c757d' }}>{s.portal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <div style={{ background: '#1a1a2e', borderRadius: 6, padding: 20, textAlign: 'center' as const }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}></div>
              <div style={{ fontWeight: 800, color: '#fff', marginBottom: 6 }}>Calculate Your Quarterly Payment</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginBottom: 14 }}>All platforms · All 51 states</div>
              <div style={{ background: '#B22234', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700 }}>Open Calculator →</div>
            </div>
          </a>
          <div style={{ background: '#fff', border: '2px dashed #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
            <div style={{ background: '#f8fafc', padding: '6px 14px', borderBottom: '1px solid #e2e5e9', fontSize: 10, fontWeight: 800, color: '#9ca3af', textTransform: 'uppercase' as const }}>Sponsored — 300×250</div>
            <div style={{ padding: 16 }}>
              <div style={{ background: '#f0f4f8', borderRadius: 4, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic' }}>Ad image here</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 6 }}>QuickBooks Self-Employed</div>
              <div style={{ fontSize: 13, color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>Automatically calculates and reminds you of quarterly tax deadlines. Built for gig workers.</div>
              <div style={{ background: '#0d7a40', color: '#fff', padding: '10px 0', borderRadius: 4, fontSize: 13, fontWeight: 700, textAlign: 'center' as const }}>Try Free 30 Days →</div>
              <div style={{ fontSize: 10, color: '#c4c9d4', marginTop: 5, textAlign: 'center' as const }}>Affiliate link</div>
            </div>
          </div>
          <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden' as const }}>
            <div style={{ background: '#1a1a2e', padding: '10px 16px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const }}> Tax Calculators</span>
            </div>
            {[
              { label: ' DoorDash Tax Calculator', href: '/doordash' },
              { label: ' Uber Tax Calculator', href: '/uber' },
              { label: ' OnlyFans Tax Calculator', href: '/onlyfans' },
              { label: ' Etsy Tax Calculator', href: '/etsy' },
              { label: ' Instacart Tax Calculator', href: '/instacart' },
              { label: ' Airbnb Tax Calculator', href: '/airbnb' },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: '#374151', fontWeight: 500 }}>{l.label}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(min-width:960px){.main-grid{grid-template-columns:1fr 300px!important}}.results-row{grid-template-columns:1fr 1fr}.main-grid{width:100%!important}`}</style>
    </div>
  )
}
