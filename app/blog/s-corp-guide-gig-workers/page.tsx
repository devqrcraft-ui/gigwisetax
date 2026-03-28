import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'S-Corp Election for Gig Workers 2025 — Save $3,000–$12,000/yr | GigWiseTax',
  description: 'How gig workers earning $60k+ can save thousands per year by electing S-Corp status. Step-by-step guide, IRS Form 2553, reasonable salary rules.',
  keywords: 'S-Corp election gig workers, S-Corp vs sole proprietor, gig worker S-Corp savings, IRS Form 2553 guide',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/s-corp-guide-gig-workers' },
}

export default function SCorpGuideBlog() {
  const s  = { maxWidth: 780, margin: '0 auto', padding: '40px 20px' }
  const h2 = { fontSize: 22, fontWeight: 800, color: 'rgba(255,255,255,0.9)', margin: '32px 0 12px' }
  const p  = { fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, margin: '0 0 16px' }
  const tip  = { background: 'rgba(5,150,105,0.12)', border: '1px solid #86efac', borderRadius: 6, padding: '14px 18px', margin: '20px 0', fontSize: 14, color: '#4ade80', lineHeight: 1.7 }
  const warn = { background: 'rgba(178,34,52,0.12)', border: '1px solid rgba(178,34,52,0.5)', borderRadius: 6, padding: '14px 18px', margin: '20px 0', fontSize: 14, color: '#7f1d1d', lineHeight: 1.7 }

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Should a gig worker form an S-Corp?","acceptedAnswer":{"@type":"Answer","text":"An S-Corp can save on SE tax once net income exceeds $40,000-$50,000/year. You pay yourself a reasonable salary (taxed normally) and take remaining profit as a distribution (not subject to SE tax). CPA setup costs $500-$2,000/year."}},{"@type":"Question","name":"How much does an S-Corp save in taxes for gig workers?","acceptedAnswer":{"@type":"Answer","text":"On $80,000 net gig income, an S-Corp with a $45,000 salary saves roughly $5,355 in SE tax annually (15.3% x $35,000 in distributions). The savings typically exceed the cost of maintaining the S-Corp at this income level."}},{"@type":"Question","name":"What is the downside of an S-Corp for gig workers?","acceptedAnswer":{"@type":"Answer","text":"S-Corps require payroll, quarterly payroll taxes, separate bank accounts, annual state fees, and additional accounting costs. The administrative burden typically is not worth it below $40,000-$50,000 in annual net gig income."}}]}' }} />
      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '3px solid #B22234', padding: '40px 20px 32px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 16 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,.7)' }}>S-Corp Guide</span>
          </nav>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' as const }}>
            {['S-Corp','Tax Strategy','Self-Employed','Advanced'].map(t => (
              <span key={t} style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 3, padding: '3px 10px', fontSize: 11, color: 'rgba(255,255,255,.55)' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 900, color: '#fff', margin: '0 0 14px', lineHeight: 1.2 }}>
            S-Corp Election for Gig Workers: Save $3,000–$12,000/Year
          </h1>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, margin: 0 }}>Updated January 2025 · 10 min read · GigWiseTax.com</p>
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)' }}>
        <div style={s}>
          <div style={{ background: 'rgba(232,184,75,0.1)', border: '1px solid #fde68a', borderRadius: 6, padding: '14px 18px', marginBottom: 24, fontSize: 14, color: '#fcd34d' }}>
            <strong>Quick Summary:</strong> Gig workers earning $60,000+ in net profit can save $3,000–$12,000/year by electing S-Corp status. The strategy reduces self-employment tax (15.3%) on income above a "reasonable salary." Most gig workers never hear about this until it's too late.
          </div>

          <p style={p}>If you're a full-time gig worker earning over $60,000 per year, you're almost certainly overpaying self-employment tax. The SE tax rate is 15.3% — and as a sole proprietor, you pay it on every dollar of net profit. An S-Corp election changes that equation dramatically.</p>

          <h2 style={h2}>How the S-Corp Tax Strategy Works</h2>
          <p style={p}>As a sole proprietor, 100% of your net profit is subject to 15.3% self-employment tax. As an S-Corp owner, you split your income into two buckets:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '16px 0 24px' }}>
            <div style={{ background: 'rgba(178,34,52,0.12)', border: '2px solid #fca5a5', borderRadius: 8, padding: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#B22234', marginBottom: 8 }}>SOLE PROPRIETOR</div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>$80,000 profit<br/>× 15.3% SE tax<br/>= <strong>$12,240 in SE tax</strong></p>
            </div>
            <div style={{ background: 'rgba(5,150,105,0.12)', border: '2px solid #86efac', borderRadius: 8, padding: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#4ade80', marginBottom: 8 }}>S-CORPORATION</div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>$40k salary × 15.3% = $6,120<br/>$40k distributions × 0% = $0<br/>= <strong>$6,120 total</strong> (save $6,120)</p>
            </div>
          </div>

          <h2 style={h2}>Who Should Consider an S-Corp Election?</h2>
          <p style={p}>The S-Corp strategy makes financial sense when your <strong>net self-employment profit consistently exceeds $60,000 per year</strong>. Below that threshold, the compliance costs (~$2,500/year for payroll and tax prep) often exceed the tax savings.</p>
          <div style={tip}> <strong>Good candidates:</strong> Full-time DoorDash/Uber drivers earning $70k+, Etsy sellers with $80k+ profit, OnlyFans creators with $60k+ net income, multi-platform gig workers with combined income over $60k.</div>

          <h2 style={h2}>Step-by-Step: How to Elect S-Corp Status</h2>
          {[
            { n: 1, title: 'Form an LLC (if you haven\'t already)', body: 'File Articles of Organization with your state. Cost: $50–$500 depending on state. Do this online at your state\'s Secretary of State website. Takes 1–4 weeks.' },
            { n: 2, title: 'File IRS Form 2553', body: 'This is the S-Corp election form. File within 75 days of your LLC formation date, OR by March 15 for the current tax year. File at IRS.gov or mail to your regional IRS service center. It\'s free.' },
            { n: 3, title: 'Set Up Payroll for Your Salary', body: 'You must pay yourself a "reasonable salary" via payroll. Use Gusto (~$49/month) or ADP. You\'ll receive a W-2 each year from your own company. This triggers payroll taxes — but only on the salary portion.' },
            { n: 4, title: 'Determine Your Reasonable Salary', body: 'The IRS requires S-Corp owners to pay themselves a "reasonable salary" — what you\'d pay someone else to do your work. Most gig workers use 40–60% of net profit. Too low a salary is an audit red flag.' },
            { n: 5, title: 'File Form 1120-S Annually', body: 'S-Corps file their own tax return (Form 1120-S) each year. You\'ll also receive a K-1 showing your share of profits. Hire a CPA for this — cost is typically $1,500–$2,500/year, but the tax savings far exceed this.' },
          ].map(step => (
            <div key={step.n} style={{ display: 'flex', gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ width: 32, height: 32, background: '#B22234', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 14, flexShrink: 0 }}>{step.n}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 6 }}>{step.title}</div>
                <p style={{ ...p, margin: 0 }}>{step.body}</p>
              </div>
            </div>
          ))}

          <div style={warn}> <strong>Important deadlines:</strong> To elect S-Corp status for 2025, you must file Form 2553 by March 15, 2025 (for existing entities) or within 75 days of forming a new LLC. Missing the deadline means waiting until 2026.</div>

          <div style={{ background: '#1e2d5a', borderRadius: 8, padding: 24, margin: '32px 0', textAlign: 'center' as const }}>
            <div style={{ color: '#e8b84b', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>CALCULATE YOUR S-CORP SAVINGS</div>
            <p style={{ color: '#fff', fontSize: 15, margin: '0 0 16px' }}>See exactly how much you'd save with an S-Corp election</p>
            <Link href="/s-corp-calculator" style={{ display: 'block', background: '#B22234', color: '#fff', borderRadius: 6, padding: '13px', fontSize: 15, fontWeight: 800, textDecoration: 'none', marginBottom: 10 }}>
               Open S-Corp Calculator →
            </Link>
            <Link href="/tax-penalty-finder" style={{ display: 'block', background: 'rgba(255,255,255,.1)', color: '#fff', borderRadius: 6, padding: '12px', fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,.2)' }}>
               Find All My Tax Overpayments →
            </Link>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: 14, fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
             <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal or tax advice. S-Corp elections have complex implications. Consult a licensed CPA before making any entity decisions.
          </div>
        </div>
      </div>
    </div>
  )
}
