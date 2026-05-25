import AuthorBox from '@/app/components/AuthorBox'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tips Deduction for Gig Workers 2026: Up to $25,000 Tax-Free (OBBBA)',
  description: 'OBBBA 2026: gig workers can deduct up to $25,000 in tips from federal taxes. DoorDash, Uber, Instacart drivers eligible. How to claim it on Schedule C.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/tips-deduction-gig-workers-2026' },
  openGraph: {
    title: 'Tips Deduction for Gig Workers 2026: Up to $25,000 Tax-Free (OBBBA)',
    description: 'OBBBA 2026: gig workers can deduct up to $25,000 in tips from federal taxes. DoorDash, Uber, Instacart drivers eligible.',
    type: 'article',
    url: 'https://www.gigwisetax.com/blog/tips-deduction-gig-workers-2026',
  },
}

export default function TipsDeductionPage() {
  const prose = { fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 16 }
  const h2 = { fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12, marginTop: 28 }
  const h3 = { fontSize: 17, fontWeight: 700, color: '#e8b84b', marginBottom: 10, marginTop: 20 }
  const accent = { background: 'rgba(232,184,75,0.07)', border: '1px solid rgba(232,184,75,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 16 }

  return (
    <div style={{ background: '#07111F', minHeight: '100vh' }}>
      <style>{'.blog-grid{display:grid;grid-template-columns:1fr;max-width:780px;margin:0 auto}@media(max-width:700px){.blog-grid{grid-template-columns:1fr!important}}'}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the tips deduction for gig workers in 2026?","acceptedAnswer":{"@type":"Answer","text":"Under the One Big Beautiful Bill Act (OBBBA) 2026, eligible workers including gig workers can deduct up to $25,000 in tips from their federal taxable income. This means if you earned $8,000 in DoorDash tips, that entire amount reduces your taxable income."}},{"@type":"Question","name":"Do DoorDash drivers qualify for the no-tax-on-tips deduction?","acceptedAnswer":{"@type":"Answer","text":"Yes. DoorDash delivery drivers who receive customer tips qualify for the OBBBA tips deduction up to $25,000. Tips received through the DoorDash app count as qualifying tip income for this deduction."}},{"@type":"Question","name":"How do I claim the tips deduction as a gig worker?","acceptedAnswer":{"@type":"Answer","text":"Report total income including tips on Schedule C. Then deduct the qualifying tip amount (up to $25,000) as a separate line item on your federal return. The deduction reduces your adjusted gross income directly."}},{"@type":"Question","name":"Does the tips deduction apply to self-employment tax?","acceptedAnswer":{"@type":"Answer","text":"No. The OBBBA tips deduction reduces your federal income tax only. You still owe 15.3% self-employment tax on your net gig income including tips. Only federal income tax is reduced."}},{"@type":"Question","name":"Which gig platforms qualify for the tips deduction in 2026?","acceptedAnswer":{"@type":"Answer","text":"Any gig worker who receives customer tips qualifies, including DoorDash, Uber Eats, Instacart, Lyft, Grubhub, and other platforms where customers tip directly. The deduction applies to tips received in 2026 and reported on your 2026 tax return."}}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Tips Deduction for Gig Workers 2026","item":"https://www.gigwisetax.com/blog/tips-deduction-gig-workers-2026"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Tips Deduction for Gig Workers 2026: Up to $25,000 Tax-Free (OBBBA)","description":"OBBBA 2026: gig workers can deduct up to $25,000 in tips from federal taxes. DoorDash, Uber, Instacart drivers eligible.","url":"https://www.gigwisetax.com/blog/tips-deduction-gig-workers-2026","datePublished":"2026-05-12","dateModified":"2026-05-12","author":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"reviewedBy":{"@type":"Person","name":"Ethan Blake","jobTitle":"Tax Compliance Specialist","sameAs":["https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center"]},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"}}' }} />

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 14 }}>
            <a href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 6px' }}>›</span>
            <a href="/blog" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Blog</a>
            <span style={{ margin: '0 6px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,.7)' }}>Tips Deduction 2026</span>
          </nav>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginBottom: 14 }}>
            <span style={{ background: 'rgba(232,184,75,0.15)', color: '#e8b84b', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>OBBBA 2026</span>
            <span style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,.55)', fontSize: 12, padding: '3px 10px', borderRadius: 20 }}>Updated May 2026</span>
          </div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 900, color: '#fff', lineHeight: 1.25, marginBottom: 14 }}>
            Tips Deduction for Gig Workers 2026: Up to $25,000 Tax-Free
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,.65)', lineHeight: 1.7 }}>
            The OBBBA made tips tax-free for eligible workers — including DoorDash, Uber Eats, and Instacart drivers. Here is exactly how it works, who qualifies, and how to claim it.
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px' }}>
        <div style={{ background: 'rgba(232,184,75,0.08)', border: '1px solid rgba(232,184,75,0.3)', borderRadius: 8, padding: '16px 20px', marginBottom: 24 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#e8b84b', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 8 }}>Quick Answer</div>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, margin: 0 }}>Under OBBBA 2026, gig workers can deduct up to <strong>$25,000 in tips</strong> from federal taxable income. If you earned $8,000 in DoorDash tips, that full amount reduces your taxable income. Self-employment tax (15.3%) still applies — only federal income tax is reduced.</p>
        </div>

        <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
          <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
          <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
            <li>Under OBBBA 2026, gig workers can deduct up to <strong>$25,000</strong> in tips from federal taxable income</li>
            <li>Tips are still <strong>reported on your return</strong> — the deduction reduces taxable income, not gross income</li>
            <li>Eligible workers include delivery drivers, rideshare drivers, and service workers</li>
            <li>Tips deduction applies to <strong>federal tax only</strong> — state treatment varies</li>
            <li>Keep records of all tips received — Instacart, DoorDash, Uber all report tip amounts on 1099</li>
          </ul>
        </div>
          <blockquote style={{borderLeft:'3px solid rgba(232,184,75,0.4)',paddingLeft:16,margin:'20px 0',fontStyle:'italic',color:'rgba(255,255,255,0.7)',fontSize:14,lineHeight:1.8}}>
            {'Self-employed individuals must pay estimated taxes quarterly if they expect to owe at least $1,000 in federal tax for the year.'}
            <cite style={{display:'block',marginTop:8,fontSize:12,color:'rgba(255,255,255,0.45)',fontStyle:'normal'}}>
              {'— '}<a href="https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" rel="nofollow" target="_blank" style={{color:'#e8b84b'}}>IRS.gov — Self-Employed Tax Center</a>
            </cite>
          </blockquote>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12, marginTop: 28 }}>What Is the OBBBA Tips Deduction?</h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 16 }}>The One Big Beautiful Bill Act (OBBBA), signed in 2026, introduced a federal deduction for tip income received by eligible workers. Gig workers who receive customer tips through platforms like DoorDash, Uber Eats, Instacart, Lyft, and Grubhub qualify for this deduction up to $25,000 per year.</p>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 16 }}>This means tip income is effectively excluded from your federal taxable income — reducing your income tax bill directly. The deduction is taken on your federal return and reduces adjusted gross income.</p>

        <h2 style={{ fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12, marginTop: 28 }}>Who Qualifies?</h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 16 }}>Any gig worker who receives customer tips qualifies, including drivers and delivery workers on DoorDash, Uber Eats, Instacart, Lyft, and Grubhub. Tips must be received directly from customers — not bonuses or incentives from the platform itself.</p>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12, marginTop: 28 }}>How to Claim the Tips Deduction</h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 16 }}>Report your total income including tips on Schedule C as usual. Then deduct the qualifying tip amount (up to $25,000) as a separate line item on your federal return. Keep records of all tip income received — your platform earnings summary will show tips separately.</p>

        <h2 style={{ fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12, marginTop: 28 }}>Does It Reduce Self-Employment Tax?</h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 16 }}>No. The OBBBA tips deduction only reduces your federal income tax. You still owe 15.3% self-employment tax on your net gig income including tips. On $8,000 in tips you save roughly $800–$2,000 in federal income tax depending on your bracket, but SE tax remains unchanged.</p>

        <h2 style={{ fontSize: 20, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12, marginTop: 28 }}>FAQ</h2>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 8 }}>
          {[
            { q: 'What is the tips deduction cap for gig workers in 2026?', a: 'The OBBBA tips deduction cap is $25,000 per year. If you earned $30,000 in tips, only $25,000 is deductible from federal income tax.' },
            { q: 'Do DoorDash drivers qualify for the no-tax-on-tips deduction?', a: 'Yes. DoorDash delivery drivers who receive customer tips qualify for the OBBBA tips deduction up to $25,000.' },
            { q: 'Does the tips deduction apply to self-employment tax?', a: 'No. It reduces federal income tax only. Self-employment tax (15.3%) still applies to all net gig income including tips.' },
            { q: 'Which platforms qualify for the tips deduction in 2026?', a: 'DoorDash, Uber Eats, Instacart, Lyft, Grubhub, and any platform where customers tip directly.' },
          ].map(({ q, a }, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '16px 0' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#e8b84b', marginBottom: 8 }}>{q}</div>
              <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>

        <div style={{ margin:'32px 0 24px', padding:'20px 24px', background:'rgba(232,184,75,0.07)', border:'1px solid rgba(232,184,75,0.25)', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap' as const, gap:12 }}>
          <div style={{ fontSize:15, fontWeight:700, color:'#e8e8e8' }}>Calculate your exact tax bill with tips deduction — free</div>
          <a href="/1099-tax-calculator" style={{ background:'#e8b84b', color:'#07111F', fontWeight:800, fontSize:14, padding:'10px 22px', borderRadius:7, textDecoration:'none', whiteSpace:'nowrap' as const }}>1099 Tax Calculator →</a>
        </div>

        <div style={{ margin:'0 0 32px', padding:'24px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:10 }}>
          <div style={{ fontSize:13, fontWeight:800, color:'#e8b84b', textTransform:'uppercase' as const, letterSpacing:'1px', marginBottom:16 }}>Related Articles</div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:12 }}>
            <a href='/blog/doordash-taxes-2026' style={{ textDecoration:'none' }}><div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(232,184,75,0.15)', borderRadius:8, padding:'16px 18px' }}><div style={{ fontSize:15, fontWeight:700, color:'#e8b84b', marginBottom:6 }}>DoorDash Taxes 2026</div><div style={{ fontSize:13, color:'#94aabf', lineHeight:1.6 }}>How much tax do DoorDash drivers owe in 2026?</div></div></a>
            <a href='/blog/mileage-rate-2026' style={{ textDecoration:'none' }}><div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(232,184,75,0.15)', borderRadius:8, padding:'16px 18px' }}><div style={{ fontSize:15, fontWeight:700, color:'#e8b84b', marginBottom:6 }}>IRS Mileage Rate 2026</div><div style={{ fontSize:13, color:'#94aabf', lineHeight:1.6 }}>72.5 cents per mile — how to track and claim it.</div></div></a>
            <a href='/blog/self-employment-tax-deductions-2026' style={{ textDecoration:'none' }}><div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(232,184,75,0.15)', borderRadius:8, padding:'16px 18px' }}><div style={{ fontSize:15, fontWeight:700, color:'#e8b84b', marginBottom:6 }}>SE Tax Deductions 2026</div><div style={{ fontSize:13, color:'#94aabf', lineHeight:1.6 }}>Every deduction self-employed workers can claim.</div></div></a>
          </div>
        </div>
        <AuthorBox />
      </div>
    </div>
  )
}
