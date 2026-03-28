import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grubhub vs DoorDash Taxes 2026: What\'s the Difference?',
  description: 'Both Grubhub and DoorDash classify drivers as 1099 contractors. But your deductions, income patterns, and strategies differ. Full comparison for 2026.',
}

export default function GrubhubVsDoorDashPost() {
  const h2 = { fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', margin: '32px 0 12px', paddingTop: 8, borderTop: '2px solid rgba(255,255,255,0.1)' }
  const p  = { fontSize: 14, color: '#374151', lineHeight: 1.9, marginBottom: 14 }

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are Grubhub and DoorDash taxes the same?","acceptedAnswer":{"@type":"Answer","text":"Yes. Both Grubhub and DoorDash drivers are 1099 independent contractors who pay SE tax (15.3%) plus income tax. Both issue 1099-NEC forms for earnings over $600. The main difference is earnings per mile, not tax treatment."}},{"@type":"Question","name":"Which platform is better for taxes — Grubhub or DoorDash?","acceptedAnswer":{"@type":"Answer","text":"Tax treatment is identical. Grubhub and DoorDash earnings are both self-employment income taxed the same way. Choose the platform with higher earnings per hour in your market — the tax math is the same."}},{"@type":"Question","name":"Can I drive for both Grubhub and DoorDash and file one tax return?","acceptedAnswer":{"@type":"Answer","text":"Yes. All 1099 gig income goes on one Schedule C (or separate Schedule C per business if you keep separate records). Add all 1099-NEC income together, deduct total business miles and expenses, and report net profit."}}]}' }} />

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 10 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link> ›{' '}
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</Link> › Grubhub vs DoorDash Taxes
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
            {['Grubhub', 'DoorDash', 'Comparison', '2026'].map(t => (
              <span key={t} style={{ background: 'rgba(232,184,75,.15)', color: '#e8b84b', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 3, border: '1px solid rgba(232,184,75,.3)' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.3, margin: '0 0 12px' }}>
             Grubhub vs DoorDash Taxes 2026: Are They Different?
          </h1>
          <div style={{ display: 'flex', gap: 16 }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}> January 20, 2026</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}> 6 min read</span>
          </div>
        </div>
      </div>

      

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 32, alignItems: 'start' }} className="blog-grid">
        <article>

          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#166534', marginBottom: 8 }}> Short Answer</div>
            <p style={{ fontSize: 13, color: '#166534', lineHeight: 1.7, margin: 0 }}>
              Grubhub and DoorDash use identical tax rules — both are 1099 independent contractors, both owe 15.3% SE tax, and both get the same IRS mileage deduction. The only difference is how much you earn and how many miles you drive, which affects your total tax bill.
            </p>
          </div>

          <p style={p}>
            If you drive for both Grubhub and DoorDash (a common strategy called "multi-apping"), you might wonder: do the two platforms have different tax rules? Do I file separately? Is one better for taxes?
          </p>
          <p style={p}>
            The good news: the IRS doesn't care which app you're using. Both platforms classify drivers as <strong>independent contractors</strong>, and the tax rules are identical.
          </p>

          <h2 style={h2}>Side-by-Side Tax Comparison</h2>
          <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 6, overflow: 'hidden', marginBottom: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', background: '#1a1a2e', padding: '12px 16px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Tax Factor</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#e8b84b', textTransform: 'uppercase' as const, letterSpacing: '1px', textAlign: 'center' as const }}> Grubhub</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#e8b84b', textTransform: 'uppercase' as const, letterSpacing: '1px', textAlign: 'center' as const }}> DoorDash</span>
            </div>
            {[
              ['Worker Classification', '1099 Contractor', '1099 Contractor'],
              ['SE Tax Rate', '15.3%', '15.3%'],
              ['Mileage Deduction 2026', '70¢/mile', '70¢/mile'],
              ['1099 Form Type', '1099-NEC', '1099-NEC'],
              ['1099 Threshold', '$600+', '$600+'],
              ['Quarterly Tax Req.', 'If owe $1,000+', 'If owe $1,000+'],
              ['Schedule C Required', 'Yes', 'Yes'],
              ['QBI Deduction Eligible', 'Yes (up to 20%)', 'Yes (up to 20%)'],
              ['State Tax', 'Depends on state', 'Depends on state'],
              ['Avg. Miles per Year', '20,000–30,000', '15,000–25,000'],
            ].map(([factor, grubhub, doordash], i) => (
              <div key={factor} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', padding: '11px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: i%2===0 ? '#fff' : '#fafafa' }}>
                <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>{factor}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 600, textAlign: 'center' as const }}>{grubhub}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 600, textAlign: 'center' as const }}>{doordash}</span>
              </div>
            ))}
          </div>

          <h2 style={h2}>What Actually Differs: Income & Miles</h2>
          <p style={p}>
            The real difference between Grubhub and DoorDash taxes is simply <strong>how much you earn</strong> and <strong>how many miles you drive</strong> for each platform. Grubhub tends to have longer distances between restaurant and customer, which means more mileage — and more mileage = bigger deduction.
          </p>

          <h2 style={h2}>Filing Taxes When You Drive for Both</h2>
          <p style={p}>
            If you drive for both Grubhub and DoorDash, you file a <strong>single Schedule C</strong> combining all self-employment income. You don't file two separate Schedule Cs unless you run them as genuinely separate business activities (rare).
          </p>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e5e9', borderRadius: 6, padding: 16, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 10 }}> Multi-App Filing Example</div>
            {[
              ['Grubhub income', '$22,000'],
              ['DoorDash income', '$18,000'],
              ['Total self-employment income', '$40,000'],
              ['Combined mileage deduction (28,000 mi)', '−$20,300'],
              ['Net profit on Schedule C', '$19,700'],
            ].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13 }}>
                <span style={{ color: '#374151' }}>{l}</span>
                <strong style={{ color: 'rgba(255,255,255,0.9)' }}>{v}</strong>
              </div>
            ))}
          </div>

          <h2 style={h2}>Which Platform Is "Better" for Taxes?</h2>
          <p style={p}>
            Neither — the tax math is identical. Choose your platform based on earnings per hour, not tax implications. If one platform pays better after expenses, drive for that one more. From a tax perspective, it makes zero difference.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            <Link href="/grubhub" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#1a1a2e', borderRadius: 6, padding: '16px', textAlign: 'center' as const, cursor: 'pointer' }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}></div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Grubhub Tax Calculator</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)' }}>Calculate your Grubhub taxes →</div>
              </div>
            </Link>
            <Link href="/doordash" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#B22234', borderRadius: 6, padding: '16px', textAlign: 'center' as const, cursor: 'pointer' }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}></div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 4 }}>DoorDash Tax Calculator</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>Calculate your DoorDash taxes →</div>
              </div>
            </Link>
          </div>

          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 8, padding: '16px 20px' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#92400e', marginBottom: 6 }}> Disclaimer</div>
            <div style={{ fontSize: 13, color: '#92400e', lineHeight: 1.7 }}>Informational purposes only. Not tax advice. Consult a licensed CPA for your specific tax situation.</div>
          </div>

        </article>

        <aside style={{ position: 'sticky', top: 80 }}>
          <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ background: '#1a1a2e', padding: '12px 16px' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> Use a Calculator</span>
            </div>
            {[[' Grubhub Calculator','/grubhub'],[' DoorDash Calculator','/doordash'],[' Uber Calculator','/uber'],[' Amazon Flex','/amazon-flex']].map(([l,h]) => (
              <Link key={l as string} href={h as string} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>{l as string}</div>
              </Link>
            ))}
          </div>
          <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ background: '#1a1a2e', padding: '12px 16px' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> More Guides</span>
            </div>
            {[['Mileage Rate 2026','/blog/mileage-rate-2026'],['Amazon Flex Taxes','/blog/amazon-flex-taxes-2026'],['Quarterly Taxes','/blog/quarterly-taxes-gig-workers'],['W-2 vs 1099','/blog/w2-vs-1099-guide-2026']].map(([l,h]) => (
              <Link key={l as string} href={h as string} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>→ {l as string}</div>
              </Link>
            ))}
          </div>
        </aside>
      </div>

      <style>{`@media(max-width:900px){.blog-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}
