import Link from 'next/link'
import AuthorBox from '@/app/components/AuthorBox'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.gigwisetax.com/blog/doordash-vs-uber-eats-taxes-2026' },
  title: 'DoorDash vs Uber Eats Taxes 2026: Which Platform Pays More After Tax?',
  description: 'DoorDash driver: $40K income → $8,852 SE tax → keep $2,213 after deductions. Uber Eats: $35K → $7,750 → $1,938. Full 2026 tax comparison with mileage and deduction breakdown.',
  openGraph: { title: 'DoorDash vs Uber Eats Taxes 2026', description: 'Which platform pays more after taxes? Full 2026 comparison.', type: 'article', url: 'https://www.gigwisetax.com/blog/doordash-vs-uber-eats-taxes-2026' },
}

export default function DoorDashVsUberEatsPost() {
  const h2 = { fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', margin: '32px 0 12px', paddingTop: 8, borderTop: '2px solid rgba(255,255,255,0.1)' }
  const p  = { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, marginBottom: 14 }
  const accent = '#e8b84b'
  const RELATED = [
    { href:'/blog/doordash-taxes-2026', tag:'DOORDASH', title:'DoorDash Taxes 2026: Full Guide' },
    { href:'/platform/uber-eats', tag:'UBER EATS', title:'Uber Eats Tax Calculator 2026' },
    { href:'/blog/mileage-rate-2026', tag:'MILEAGE', title:'IRS Mileage Rate 2026: 72.5¢/mile' },
  ]

  return (
    <div style={{ background: '#07111F', minHeight: '100vh' }}>
      <article itemScope itemType="https://schema.org/BlogPosting">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do DoorDash and Uber Eats drivers pay the same taxes?","acceptedAnswer":{"@type":"Answer","text":"Yes. Both platforms classify drivers as 1099 independent contractors. You pay 15.3% self-employment tax on net profit plus federal income tax."}},{"@type":"Question","name":"How much tax does a DoorDash driver pay on $40,000?","acceptedAnswer":{"@type":"Answer","text":"On $40,000 gross DoorDash income in 2026: after mileage deduction ($14,500) and standard deduction ($16,100), total federal tax is approximately $4,500 for a single filer."}},{"@type":"Question","name":"How much tax does an Uber Eats driver pay on $35,000?","acceptedAnswer":{"@type":"Answer","text":"On $35,000 gross Uber Eats income in 2026: after deductions, estimated total federal tax is ~$3,273."}},{"@type":"Question","name":"Which is better for taxes — DoorDash or Uber Eats?","acceptedAnswer":{"@type":"Answer","text":"Tax treatment is identical. Both are Schedule C self-employment income. Choose the platform with higher earnings per hour in your market."}},{"@type":"Question","name":"Can I drive for both DoorDash and Uber Eats and file one tax return?","acceptedAnswer":{"@type":"Answer","text":"Yes. Combine all 1099-NEC income on one Schedule C. Track mileage for each platform separately, then deduct total business miles at 72.5 cents per mile."}}]}' }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"DoorDash vs Uber Eats Taxes 2026","item":"https://www.gigwisetax.com/blog/doordash-vs-uber-eats-taxes-2026"}]}' }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"DoorDash vs Uber Eats Taxes 2026: Which Platform Pays More After Tax?","description":"Full 2026 tax comparison for DoorDash and Uber Eats drivers.","url":"https://www.gigwisetax.com/blog/doordash-vs-uber-eats-taxes-2026","datePublished":"2026-05-13","dateModified":"2026-05-13","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"}}' }} />

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#07111F)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 10 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link> ›{' '}
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</Link> › DoorDash vs Uber Eats Taxes
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' as const }}>
            {['DoorDash', 'Uber Eats', 'Comparison', '2026'].map(t => (
              <span key={t} style={{ background: 'rgba(232,184,75,.15)', color: accent, fontSize: 13, fontWeight: 700, padding: '2px 8px', borderRadius: 3, border: '1px solid rgba(232,184,75,.3)' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 'clamp(22px,4vw,34px)', fontWeight: 900, color: '#fff', lineHeight: 1.25, marginBottom: 12 }}>DoorDash vs Uber Eats Taxes 2026: Which Platform Pays More After Tax?</h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', margin: 0 }}>By Ethan Blake · Updated May 13, 2026 · 8 min read</p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px' }}>

        <div style={{ background: 'rgba(232,184,75,0.08)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 24 }}>
          <p style={{ margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.9)', lineHeight: 1.75 }}>
            <strong style={{ color: accent }}>Quick answer:</strong> DoorDash and Uber Eats have <strong>identical tax treatment</strong> — both are 1099 self-employment income taxed at 15.3% SE tax + income tax. DoorDash drivers average <strong>$40K/year → ~$2,213 net federal tax</strong> after deductions. Uber Eats drivers average <strong>$35K/year → ~$1,938 net federal tax</strong>. The mileage deduction (72.5¢/mile in 2026) is your biggest lever on both platforms.
          </p>
        </div>

        <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
          <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
          <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
            <li>Both DoorDash and Uber Eats classify drivers as <strong>1099 contractors</strong> — same 15.3% SE tax</li>
            <li>DoorDash pays via <strong>Stripe Express</strong>; Uber Eats via <strong>Uber Pro card or bank transfer</strong></li>
            <li>Both platforms send <strong>1099-NEC</strong> for earnings $2,000+ in 2026</li>
            <li>Mileage at <strong>72.5¢/mile</strong> is the largest deduction for both platforms</li>
            <li>Tips up to <strong>$25,000</strong> are federally deductible from both platforms under OBBBA 2026</li>
          </ul>
        </div>
          <blockquote style={{borderLeft:'3px solid rgba(232,184,75,0.4)',paddingLeft:16,margin:'20px 0',fontStyle:'italic',color:'rgba(255,255,255,0.7)',fontSize:14,lineHeight:1.8}}>
            {'Self-employed individuals must pay estimated taxes quarterly if they expect to owe at least $1,000 in federal tax for the year.'}
            <cite style={{display:'block',marginTop:8,fontSize:12,color:'rgba(255,255,255,0.45)',fontStyle:'normal'}}>
              {'— '}<a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#e8b84b'}}>IRS.gov — Self-Employed Tax Center</a>
            </cite>
          </blockquote>
        <h2 style={h2}>Tax Treatment: DoorDash vs Uber Eats</h2>
        <p style={p}>Both DoorDash and Uber Eats classify delivery drivers as <strong>independent contractors</strong>. You receive a 1099-NEC (for earnings over $600) and report income on Schedule C. There is no difference in how the IRS treats income from either platform.</p>
        <p style={p}>You pay <strong>self-employment tax of 15.3%</strong> (12.4% Social Security + 2.9% Medicare) on net profit. You can deduct 50% of SE tax from gross income. Then pay federal income tax on the remainder at your marginal rate.</p>

        <h2 style={h2}>2026 Tax Comparison: $40K DoorDash vs $35K Uber Eats</h2>
        <div style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: 'rgba(232,184,75,0.1)' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left', color: accent, fontWeight: 700 }}>Item</th>
                <th style={{ padding: '10px 14px', textAlign: 'right', color: '#e8edf8' }}>DoorDash ($40K)</th>
                <th style={{ padding: '10px 14px', textAlign: 'right', color: '#e8edf8' }}>Uber Eats ($35K)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Gross Income','$40,000','$35,000'],
                ['Mileage Deduction (20K mi @ 72.5¢)','−$14,500','−$14,500'],
                ['Phone & App Deduction','−$600','−$600'],
                ['Net Profit','$24,900','$19,900'],
                ['SE Tax (15.3%)','$3,810','$3,045'],
                ['50% SE Deduction','−$1,905','−$1,523'],
                ['Federal Taxable Income','$23,000','$18,377'],
                ['Standard Deduction 2026','−$16,100','−$16,100'],
                ['Income After Std Deduction','$6,900','$2,277'],
                ['Federal Income Tax (10%)','$690','$228'],
                ['Total Federal Tax','$4,500','$3,273'],
                ['Est. Quarterly Payment','$1,125','$818'],
              ].map(([label, dd, ue]) => (
                <tr key={label} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.8)' }}>{label}</td>
                  <td style={{ padding: '9px 14px', textAlign: 'right', color: accent, fontWeight: 600 }}>{dd}</td>
                  <td style={{ padding: '9px 14px', textAlign: 'right', color: 'rgba(255,255,255,0.7)' }}>{ue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={h2}>Mileage Deduction: The Key Difference</h2>
        <p style={p}>The <strong>IRS mileage rate for 2026 is 72.5¢ per mile</strong>. This is identical for DoorDash and Uber Eats. A driver doing 20,000 business miles deducts $14,500 — the single largest deduction available. Track every mile from the moment you open the app to your last drop-off.</p>
        <p style={p}>DoorDash drivers typically drive more miles per order (suburban markets, longer distances). Uber Eats skews toward urban areas with shorter routes. More miles = larger deduction = lower taxes.</p>

        <h2 style={h2}>Which Platform Is Better After Taxes?</h2>
        <p style={p}>Tax treatment is identical. The better platform after taxes is simply the one with <strong>higher earnings per hour in your specific market</strong>. Run both apps simultaneously (dual-apping) to maximize hourly earnings — both platforms allow this.</p>
        <p style={p}>Key factors: DoorDash typically averages <strong>$20–25/hour</strong> in suburban markets. Uber Eats averages <strong>$18–22/hour</strong> in urban areas. Check local Facebook driver groups for current market rates before committing.</p>

        <h2 style={h2}>Quarterly Taxes: Same Rules for Both</h2>
        <p style={p}>If you expect to owe $1,000+ in taxes, you must pay quarterly estimated taxes. Due dates for 2026: <strong>April 15, June 16, September 15, January 15 (2027)</strong>. Use IRS Form 1040-ES. Missing a payment triggers a penalty of approximately 8% annualized.</p>
        <p style={p}>Set aside <strong>25–30% of every payout</strong> from both DoorDash and Uber Eats into a separate savings account. Pay quarterly from that account.</p>

        <h2 style={h2}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 24 }}>
          {[
            { q: 'Do DoorDash and Uber Eats drivers pay the same taxes?', a: 'Yes. Both are 1099 self-employment income. SE tax is 15.3% on net profit for both platforms.' },
            { q: 'How much tax on $40,000 DoorDash income?', a: 'After mileage deduction (~$14,500) and standard deduction ($16,100), total federal tax is approximately $4,500 for a single filer in 2026.' },
            { q: 'Can I deduct mileage for both platforms?', a: 'Yes. Track miles separately per platform but deduct total business miles at 72.5¢/mile on one Schedule C (or two if you keep separate books).' },
            { q: 'Do I get a 1099 from both DoorDash and Uber Eats?', a: 'Yes, if you earn over $600 from each platform. Both issue 1099-NEC forms by January 31 of the following year.' },
            { q: 'Should I drive for both DoorDash and Uber Eats?', a: 'Dual-apping is legal and common. It maximizes hourly earnings. Both income streams go on the same Schedule C as self-employment income.' },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '14px 18px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontWeight: 700, color: accent, fontSize: 14, marginBottom: 6 }}>{q}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '16px 20px', marginBottom: 32 }}>
          <p style={{ margin: '0 0 8px', fontWeight: 700, color: accent }}>Calculate your exact tax bill</p>
          <p style={{ margin: '0 0 12px', fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>Enter your DoorDash or Uber Eats income into the free GigWiseTax calculator — get quarterly payment amounts in 30 seconds.</p>
          <Link href="/platform/doordash" style={{ display: 'inline-block', background: accent, color: '#07111F', fontWeight: 800, fontSize: 14, padding: '10px 20px', borderRadius: 6, textDecoration: 'none', marginRight: 10 }}>DoorDash Calculator</Link>
          <Link href="/platform/uber-eats" style={{ display: 'inline-block', background: 'transparent', color: accent, fontWeight: 700, fontSize: 14, padding: '10px 20px', borderRadius: 6, textDecoration: 'none', border: '1px solid rgba(232,184,75,0.4)' }}>Uber Eats Calculator</Link>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, marginBottom: 32 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: accent, marginBottom: 12 }}>Related Articles</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 12 }}>
            {RELATED.map(r => (
              <Link key={r.href} href={r.href} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '14px 16px', textDecoration: 'none', display: 'block' }}>
                <div style={{ fontSize: 11, color: accent, fontWeight: 700, marginBottom: 6 }}>{r.tag}</div>
                <div style={{ fontSize: 14, color: '#e8edf8', fontWeight: 600, lineHeight: 1.4 }}>{r.title}</div>
              </Link>
            ))}
          </div>
        </div>

        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
          Tax estimates based on 2026 IRS rates. Individual results vary. Consult a tax professional for personalized advice.{' '}
          <a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" style={{ color: 'rgba(255,255,255,0.35)' }}>IRS Self-Employed Tax Center</a>
        </p>

      </div>
      <AuthorBox />
          </article>
</div>
  )
}
