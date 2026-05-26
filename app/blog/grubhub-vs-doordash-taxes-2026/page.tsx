import Link from 'next/link'
import AuthorBox from '@/app/components/AuthorBox'
import type { Metadata } from 'next'

export const metadata = {
  alternates: { canonical: 'https://www.gigwisetax.com/blog/grubhub-vs-doordash-taxes-2026' },
  title: 'Grubhub vs DoorDash Taxes 2026: What\'s the Difference?',
  description: 'Both Grubhub and DoorDash classify drivers as 1099 contractors. But your deductions, income patterns, and strategies differ. Full comparison for 2026.',
}

export default function GrubhubVsDoorDashPost() {
  const h2 = { fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', margin: '32px 0 12px', paddingTop: 8, borderTop: '2px solid rgba(255,255,255,0.1)' }
  const p  = { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, marginBottom: 14 }

  return (
    <div style={{ background: '#07111F', minHeight: '100vh' }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are Grubhub and DoorDash taxes the same?","acceptedAnswer":{"@type":"Answer","text":"Yes. Both Grubhub and DoorDash drivers are 1099 independent contractors who pay SE tax (15.3%) plus income tax. Both issue 1099-NEC forms for earnings over $600. The main difference is earnings per mile, not tax treatment."}},{"@type":"Question","name":"Which platform is better for taxes — Grubhub or DoorDash?","acceptedAnswer":{"@type":"Answer","text":"Tax treatment is identical. Grubhub and DoorDash earnings are both self-employment income taxed the same way. Choose the platform with higher earnings per hour in your market — the tax math is the same."}},{"@type":"Question","name":"Can I drive for both Grubhub and DoorDash and file one tax return?","acceptedAnswer":{"@type":"Answer","text":"Yes. All 1099 gig income goes on one Schedule C (or separate Schedule C per business if you keep separate records). Add all 1099-NEC income together, deduct total business miles and expenses, and report net profit."}}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Grubhub vs DoorDash Taxes 2026: What\","item":"https://www.gigwisetax.com/blog/grubhub-vs-doordash-taxes-2026"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Grubhub vs DoorDash Taxes 2026: What\","description":"Both Grubhub and DoorDash classify drivers as 1099 contractors. But your deductions, income patterns, and strategies differ. Full comparison for 2026.","url":"https://www.gigwisetax.com/blog/grubhub-vs-doordash-taxes-2026","datePublished":"2026-01-01","dateModified":"2026-05-12","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"}}' }} />

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#07111F)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 10 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link> ›{' '}
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</Link> › Grubhub vs DoorDash Taxes
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
            {['Grubhub', 'DoorDash', 'Comparison', '2026'].map(t => (
              <span key={t} style={{ background: 'rgba(232,184,75,.15)', color: '#e8b84b', fontSize: 13, fontWeight: 700, padding: '2px 8px', borderRadius: 3, border: '1px solid rgba(232,184,75,.3)' }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.3, margin: '0 0 12px' }}>
             Grubhub vs DoorDash Taxes 2026: Are They Different?
          </h1>
      {/* ANSWER-FIRST GEO BLOCK */}
      <div style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', margin:'24px 0 16px' }}>
        <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>2026 Tax Summary — Grubhub vs DoorDash 2026</div>
        <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
          Both platforms classify drivers as independent contractors paying 15.3% SE tax. Grubhub at $35,000 net: <strong style={{ color:'#fff' }}>$7,750 total tax</strong> ($1,938/quarter). DoorDash at $40,000 net: <strong style={{ color:'#fff' }}>$8,852 total tax</strong> ($2,213/quarter). Mileage deduction at 72.5¢/mile applies equally to both.
        </p>
      </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}> January 20, 2026</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}> 6 min read</span>
          </div>
        <section id="answer">
          <p style={{ margin: '0 0 24px', fontSize: 15, lineHeight: 1.75, color: '#C8D8EC' }}>
            GrubHub and DoorDash drivers pay identical SE tax rates in 2026 — 15.3% on 92.35% of net profit. On $35,000, both owe $7,750 before deductions. Both platforms now use the $2,000 1099-NEC threshold under OBBBA 2026. Mileage at 72.5¢/mile is the primary deduction for both.
          </p>
        </section>
        <section id="key-takeaways">
          <div style={{ background: 'rgba(232,184,75,0.06)', border: '1px solid rgba(232,184,75,0.2)', borderRadius: 8, padding: '20px 24px', marginBottom: 32 }}>
            <h2 style={{ fontSize: 'clamp(16px,3vw,18px)', fontWeight: 700, color: '#e8b84b', marginTop: 0, marginBottom: 12 }}>Key Takeaways</h2>
            <ul style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 1.9, fontSize: 14, color: '#C8D8EC' }}>
          <li>Both platforms: 15.3% SE tax on 92.35% of net profit — same calculation</li>
          <li>$35K income = $7,750 SE tax = $1,938 per quarter on both platforms</li>
          <li>Both use $2,000 1099-NEC threshold in 2026 under OBBBA</li>
          <li>Mileage at 72.5¢/mile applies equally to GrubHub and DoorDash</li>
          <li>If you drive both: combine miles in one mileage log — separate income on Schedule C</li>
            </ul>
          </div>
        </section>
        </div>
      </div>

      

      <div style={{ maxWidth: 780, margin: '0 auto', padding: '32px 20px 64px', display: 'grid', gridTemplateColumns: '1fr', gap: 32 }} className="blog-grid">
        <article>

          <div style={{ background: 'rgba(5,150,105,0.12)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#4ade80', marginBottom: 8 }}> Short Answer</div>
            <p style={{ fontSize: 13, color: '#4ade80', lineHeight: 1.7, margin: 0 }}>
              Grubhub and DoorDash use identical tax rules — both are 1099 independent contractors, both owe 15.3% SE tax, and both get the same IRS mileage deduction. The only difference is how much you earn and how many miles you drive, which affects your total tax bill.
            </p>
          </div>

          <p style={p}>
            If you drive for both Grubhub and DoorDash (a common strategy called "multi-apping"), you might wonder: do the two platforms have different tax rules? Do I file separately? Is one better for taxes?
          </p>
          <p style={p}>
            The good news: the IRS doesn't care which app you're using. Both platforms classify drivers as <strong>independent contractors</strong>, and the tax rules are identical.
          </p>

          <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
            <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>KEY TAKEAWAYS</div>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
              <li>Both Grubhub and DoorDash classify drivers as <strong>1099 contractors</strong> — same 15.3% SE tax</li>
              <li>Grubhub pays weekly via <strong>direct deposit</strong>; DoorDash offers <strong>Fast Pay</strong> daily for $1.99</li>
              <li>Both send <strong>1099-NEC</strong> for earnings $2,000+ in 2026</li>
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
          <h2 style={h2}>Side-by-Side Tax Comparison</h2>
          <div style={{ background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, overflow: 'hidden', marginBottom: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', background: 'rgba(255,255,255,0.07)', padding: '12px 16px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Tax Factor</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#e8b84b', textTransform: 'uppercase' as const, letterSpacing: '1px', textAlign: 'center' as const }}> Grubhub</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#e8b84b', textTransform: 'uppercase' as const, letterSpacing: '1px', textAlign: 'center' as const }}> DoorDash</span>
            </div>
            {[
              ['Worker Classification', '1099 Contractor', '1099 Contractor'],
              ['SE Tax Rate', '15.3%', '15.3%'],
              ['Mileage Deduction 2026', '72.5¢/mile', '72.5¢/mile'],
              ['1099 Form Type', '1099-NEC', '1099-NEC'],
              ['1099 Threshold', '$600+', '$600+'],
              ['Quarterly Tax Req.', 'If owe $1,000+', 'If owe $1,000+'],
              ['Schedule C Required', 'Yes', 'Yes'],
              ['QBI Deduction Eligible', 'Yes (up to 20%)', 'Yes (up to 20%)'],
              ['State Tax', 'Depends on state', 'Depends on state'],
              ['Avg. Miles per Year', '20,000–30,000', '15,000–25,000'],
            ].map(([factor, grubhub, doordash], i) => (
              <div key={factor} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', padding: '11px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: i%2===0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.01)' }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{factor}</span>
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
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: 16, marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 10 }}> Multi-App Filing Example</div>
            {[
              ['Grubhub income', '$22,000'],
              ['DoorDash income', '$18,000'],
              ['Total self-employment income', '$40,000'],
              ['Combined mileage deduction (28,000 mi)', '−$20,300'],
              ['Net profit on Schedule C', '$19,700'],
            ].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13 }}>
                <span style={{ color: 'rgba(255,255,255,0.85)' }}>{l}</span>
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
              <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 6, padding: '16px', textAlign: 'center' as const, cursor: 'pointer' }}>
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

          <div style={{ background: 'rgba(232,184,75,0.1)', border: '1px solid #fde68a', borderRadius: 8, padding: '16px 20px' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fcd34d', marginBottom: 6 }}> Disclaimer</div>
            <div style={{ fontSize: 13, color: '#fcd34d', lineHeight: 1.7 }}>Informational purposes only. Not tax advice. Consult a licensed CPA for your specific tax situation.</div>
          </div>

        </article>

        <aside style={{ position: 'sticky', top: 80 }}>
          <div style={{ background: '#07111F', border: '1px solid #d8dce6', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', padding: '12px 16px' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase' as const, letterSpacing: '1px' }}> Use a Calculator</span>
            </div>
            {[[' Grubhub Calculator','/grubhub'],[' DoorDash Calculator','/doordash'],[' Uber Calculator','/uber'],[' Amazon Flex','/amazon-flex']].map(([l,h]) => (
              <Link key={l as string} href={h as string} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>{l as string}</div>
              </Link>
            ))}
          </div>
          <div style={{ background: '#07111F', border: '1px solid #d8dce6', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', padding: '12px 16px' }}>
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

      
      
      {/* RELATED ARTICLES */}
      <div style={{ margin:'40px 0 32px', padding:'24px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:10 }}>
        <div style={{ fontSize:13, fontWeight:800, color:'#e8b84b', textTransform:'uppercase' as const, letterSpacing:'1px', marginBottom:16 }}>Related Articles</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:12 }}>

      <a href="/blog/uber-tax-guide-2026" style={{ textDecoration:'none' }}>
        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(232,184,75,0.15)', borderRadius:8, padding:'16px 18px', transition:'border-color 0.2s' }}>
          <div style={{ fontSize:15, fontWeight:700, color:'#e8b84b', marginBottom:6, lineHeight:1.4 }}>Uber Driver Tax Guide 2026</div>
          <div style={{ fontSize:13, color:'#94aabf', lineHeight:1.6 }}>Complete tax guide for Uber and UberEats drivers in 2026.</div>
        </div>
      </a>

      <a href="/blog/lyft-driver-taxes-2026" style={{ textDecoration:'none' }}>
        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(232,184,75,0.15)', borderRadius:8, padding:'16px 18px', transition:'border-color 0.2s' }}>
          <div style={{ fontSize:15, fontWeight:700, color:'#e8b84b', marginBottom:6, lineHeight:1.4 }}>Lyft Driver Taxes 2026</div>
          <div style={{ fontSize:13, color:'#94aabf', lineHeight:1.6 }}>Tax obligations, deductions, and quarterly tips for Lyft drivers.</div>
        </div>
      </a>

      <a href="/blog/doordash-taxes-2026" style={{ textDecoration:'none' }}>
        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(232,184,75,0.15)', borderRadius:8, padding:'16px 18px', transition:'border-color 0.2s' }}>
          <div style={{ fontSize:15, fontWeight:700, color:'#e8b84b', marginBottom:6, lineHeight:1.4 }}>DoorDash Taxes 2026</div>
          <div style={{ fontSize:13, color:'#94aabf', lineHeight:1.6 }}>SE tax, quarterly payments, and top deductions for Dashers.</div>
        </div>
      </a>
        </div>
      </div>
      <AuthorBox />
      <style>{`@media(max-width:900px){.blog-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  )
}
