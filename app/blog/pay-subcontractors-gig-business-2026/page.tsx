import type { Metadata } from 'next'
import AuthorBox from '@/app/components/AuthorBox'

export const metadata: Metadata = {
  title: 'How to Pay Subcontractors as a Gig Business Owner (2026)',
  description: 'Hiring helpers for your gig business? Learn the $2,000 1099-NEC threshold, W-9 rules, and payment methods that keep clean records for 2026.',
  alternates: { canonical: 'https://www.gigwisetax.com/blog/pay-subcontractors-gig-business-2026' },
  openGraph: {
    title: 'How to Pay Subcontractors as a Gig Business Owner (2026)',
    description: 'The $2,000 1099-NEC threshold, W-9 collection, and payment methods that keep clean records. Free guide for gig business owners.',
    type: 'article',
  },
}

const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do I need to send a 1099 to someone I pay to help with my gig work?","acceptedAnswer":{"@type":"Answer","text":"Yes, if you pay them $2,000 or more in a calendar year for services (the 2026 threshold under OBBBA, up from $600 in prior years) and they are not your employee. Collect a Form W-9 from them before the first payment."}},{"@type":"Question","name":"What is the 2026 threshold for issuing a 1099-NEC?","acceptedAnswer":{"@type":"Answer","text":"For 2026, you must issue Form 1099-NEC to any non-employee you paid $2,000 or more during the year for services. This is up from the long-standing $600 threshold. The form is due to the contractor and the IRS by January 31, 2027."}},{"@type":"Question","name":"Can I just Venmo or Zelle my helper instead of tracking payments formally?","acceptedAnswer":{"@type":"Answer","text":"You can, but personal payment apps mix business and personal transactions and make it hard to total exact payments at year-end. Apps like Venmo and Zelle were not built to generate 1099-ready payment histories, so many gig business owners switch to a dedicated business payment tool once they cross a few hundred dollars a month in helper payments."}},{"@type":"Question","name":"What information do I need from a subcontractor before paying them?","acceptedAnswer":{"@type":"Answer","text":"Collect a completed Form W-9 (name, address, and Taxpayer Identification Number or Social Security number) before the first payment. This is what you will use to prepare their 1099-NEC at year-end."}},{"@type":"Question","name":"Do I withhold taxes when I pay a subcontractor?","acceptedAnswer":{"@type":"Answer","text":"No. Independent contractors are responsible for their own self-employment tax and quarterly estimated payments, the same way you are responsible for yours. You simply pay the agreed amount and report it on Form 1099-NEC if it totals $2,000 or more for the year."}}]}'

const breadcrumbSchema = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.gigwisetax.com/blog"},{"@type":"ListItem","position":3,"name":"Pay Subcontractors as a Gig Business Owner","item":"https://www.gigwisetax.com/blog/pay-subcontractors-gig-business-2026"}]}'

const articleSchema = '{"@context":"https://schema.org","@type":"BlogPosting","headline":"How to Pay Subcontractors as a Gig Business Owner (2026)","datePublished":"2026-08-07","dateModified":"2026-08-07","author":{"@type":"Organization","name":"the GigWiseTax Team","url":"https://www.gigwisetax.com"},"reviewedBy":{"@type":"Organization","name":"the GigWiseTax Team","url":"https://www.gigwisetax.com"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.gigwisetax.com/blog/pay-subcontractors-gig-business-2026"}}'

export default function PaySubcontractorsGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: faqSchema}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: breadcrumbSchema}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: articleSchema}} />

      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        style={{maxWidth:780, margin:'0 auto', padding:'clamp(14px,4vw,28px)', background:'#07111F', color:'#C8D8EC', minHeight:'100vh'}}
      >
        <header>
          <nav aria-label="breadcrumb" style={{fontSize:13, color:'rgba(255,255,255,0.45)', marginBottom:16}}>
            <a href="/" style={{color:'#e8b84b', textDecoration:'none', fontWeight:700}}>🏠 Home</a>
            <span> › </span>
            <a href="/blog" style={{color:'rgba(255,255,255,0.45)', textDecoration:'none'}}>Blog</a>
            <span> › </span>
            <span style={{color:'rgba(255,255,255,0.65)'}}>Pay Subcontractors 2026</span>
          </nav>

          <h1 style={{fontSize:'clamp(22px,5vw,24px)', fontWeight:900, color:'#C8D8EC', lineHeight:1.3, marginBottom:12}}>
            How to Pay Subcontractors as a Gig Business Owner (2026)
          </h1>

          <div style={{fontSize:12, color:'rgba(255,255,255,0.45)', marginBottom:20, display:'flex', gap:12, flexWrap:'wrap'}}>
            <span>Last updated: August 2026</span>
            <span>·</span>
            <span>By the GigWiseTax Team</span>
            <span>·</span>
            <span>{'~6 min read · 1,400 words'}</span>
          </div>
        </header>

        {/* ANSWER-FIRST */}
        <div style={{background:'rgba(232,184,75,0.07)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'16px 20px', marginBottom:24}}>
          <p style={{margin:0, fontSize:15, lineHeight:1.8, color:'rgba(255,255,255,0.9)'}}>
            {'If you pay a helper $2,000 or more in 2026 for gig-related work, you owe them a Form 1099-NEC by January 31, 2027 — collect a W-9 before the first payment. Personal apps like Venmo and Zelle work for small one-off payments but get messy fast once you have a regular helper; most gig business owners switch to a dedicated payment tool once they cross a few hundred dollars a month.'}
          </p>
        </div>

        {/* KEY TAKEAWAYS */}
        <div style={{background:'rgba(232,184,75,0.08)', border:'1px solid rgba(232,184,75,0.25)', borderRadius:8, padding:'16px 20px', marginBottom:28}}>
          <div style={{fontWeight:800, color:'#e8b84b', marginBottom:10, fontSize:13}}>KEY TAKEAWAYS</div>
          <ul style={{margin:0, padding:'0 0 0 18px', fontSize:14, lineHeight:1.9, color:'rgba(255,255,255,0.85)'}}>
            <li>{'2026 threshold: 1099-NEC required once you pay someone $2,000+ for the year (up from $600)'}</li>
            <li>{'Collect Form W-9 before the first payment — not after'}</li>
            <li>{'You do not withhold taxes from a subcontractor — that is their responsibility'}</li>
            <li>{'Mixing business and personal apps makes year-end totals harder to reconstruct'}</li>
            <li>{'1099-NEC deadline: January 31, 2027, to both the contractor and the IRS'}</li>
          </ul>
        </div>

        {/* SECTION 1 */}
        <section id="threshold">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            When Do You Need to 1099 Someone You Pay?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'If your gig business has grown to the point where you pay someone else — a driver who covers your route when you are sick, someone who helps with deliveries, a virtual assistant, or anyone doing work for your business who is not your employee — the IRS treats that the same way a client treats you: with a Form 1099-NEC.'}
          </p>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'For 2026, the reporting threshold is $2,000 in a calendar year, raised from the long-standing $600 figure. Cross that amount with a single non-employee, and you are required to issue them a 1099-NEC by January 31, 2027, and file a copy with the IRS.'}
          </p>
        </section>

        {/* SECTION 2 */}
        <section id="w9">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            Collect a W-9 Before You Pay Anyone
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'The single most common mistake gig business owners make is paying a helper all year, then scrambling for their Social Security number in January. Ask for a completed Form W-9 (name, address, Taxpayer ID or SSN) before the first payment goes out. It takes two minutes for them to fill out and saves you a stressful search later.'}
          </p>
        </section>

        {/* SECTION 3 — PAYMENT METHODS */}
        <section id="payment-methods">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            Venmo, Zelle, or a Dedicated Payment Tool?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'For a one-time $50 favor, Venmo is fine. The problem shows up once you have a helper you pay regularly: personal payment apps were not built to separate business from personal transfers, and reconstructing "how much did I actually pay this person this year" from a Venmo feed in December is painful — especially if you also use the same app to split rent or pay friends back.'}
          </p>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'A dedicated business payment tool keeps a running, exportable record of exactly what you paid each helper, and lets them choose how they get paid — ACH, check, or wire — without you needing a separate process for each preference.'}
          </p>

          <div style={{background:'rgba(232,184,75,0.08)', border:'2px solid rgba(232,184,75,0.4)', borderRadius:10, padding:'18px 22px', margin:'24px 0'}} className="cta-block">
            <p style={{margin:'0 0 14px', fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.6}}>
              {'If you are paying more than one or two helpers regularly, a dedicated tool beats manual Venmo/Zelle tracking — it keeps a clean record for 1099-NEC time and lets each person choose ACH, check, or wire.'}
            </p>
            <a
              href="https://www.awin1.com/cread.php?awinmid=24005&awinaffid=2898033&ued=https%3A%2F%2Fonlinecheckwriter.com%2Fdirect-deposit%2F"
              rel="nofollow sponsored"
              target="_blank"
              className="cta-btn"
              style={{
                display:'inline-block', background:'#e8b84b', color:'#07111F',
                fontWeight:800, fontSize:15, padding:'13px 26px', borderRadius:6,
                textDecoration:'none', letterSpacing:'0.2px',
              }}
            >
              💳 See How Contractor Direct Deposit Works →
            </a>
            <p style={{margin:'10px 0 0', fontSize:11, color:'rgba(255,255,255,0.45)'}}>
              {'Affiliate link — we may earn a commission if you sign up, at no extra cost to you.'}
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="withholding">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:16}}>
            Do You Withhold Taxes From a Subcontractor?
          </h2>
          <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.85)', marginBottom:16}}>
            {'No. This is the same relationship you have with DoorDash, Uber, or whichever platform pays you — they do not withhold taxes from your payments, and you do not withhold from your subcontractor. Independent contractors are responsible for their own self-employment tax and quarterly estimated payments, exactly as described throughout this site for your own gig income.'}
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 style={{fontSize:'clamp(18px,4vw,20px)', fontWeight:700, color:'#C8D8EC', marginBottom:24}}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q:'Do I need to send a 1099 to someone I pay to help with my gig work?',
              a:'Yes, if you pay them $2,000 or more in a calendar year for services (the 2026 threshold, up from $600) and they are not your employee. Collect a Form W-9 from them before the first payment.'
            },
            {
              q:'What is the 2026 threshold for issuing a 1099-NEC?',
              a:'$2,000 per non-employee per year, up from the long-standing $600 figure. The form is due to the contractor and the IRS by January 31, 2027.'
            },
            {
              q:'Can I just Venmo or Zelle my helper instead of tracking payments formally?',
              a:'You can, but personal payment apps mix business and personal transactions and make it hard to total exact payments at year-end. Many gig business owners switch to a dedicated tool once they cross a few hundred dollars a month in helper payments.'
            },
            {
              q:'What information do I need from a subcontractor before paying them?',
              a:'A completed Form W-9 — name, address, and Taxpayer ID or Social Security number. Collect it before the first payment, not after.'
            },
            {
              q:'Do I withhold taxes when I pay a subcontractor?',
              a:'No. They are responsible for their own self-employment tax and quarterly payments, the same way you are responsible for yours.'
            },
          ].map((item, i) => (
            <div key={i} style={{marginBottom:24, paddingBottom:20, borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none'}}>
              <h3 style={{fontSize:15, fontWeight:700, color:'#C8D8EC', marginBottom:8}}>{item.q}</h3>
              <p style={{fontSize:14, lineHeight:1.8, color:'rgba(255,255,255,0.8)', margin:0}}>{item.a}</p>
            </div>
          ))}
        </section>

        {/* RELATED ARTICLES */}
        <section style={{marginTop:32, paddingTop:24, borderTop:'1px solid rgba(255,255,255,0.08)'}}>
          <h2 style={{fontSize:16, fontWeight:700, color:'#C8D8EC', marginBottom:16}}>Related Articles</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:12}}>
            {[
              {title:'Quarterly Taxes for Gig Workers 2026', href:'/blog/quarterly-taxes-gig-workers'},
              {title:'Self-Employment Tax Deductions 2026', href:'/blog/self-employment-tax-deductions-2026'},
              {title:'Gig Worker Tax Deadlines 2026', href:'/blog/gig-worker-tax-deadlines-2026'},
            ].map((a, i) => (
              <a key={i} href={a.href} style={{
                display:'block', padding:'12px 16px',
                background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.15)',
                borderRadius:8, color:'#e8b84b', textDecoration:'none', fontSize:13, fontWeight:600, lineHeight:1.5
              }}>
                {a.title} {'>'}
              </a>
            ))}
          </div>
        </section>

        <AuthorBox />

      </article>
      <style>{`
        @media(max-width:600px){
          .cta-block{ padding:16px 16px !important; }
          .cta-btn{
            display:block !important;
            width:100% !important;
            text-align:center !important;
            padding:16px 12px !important;
            font-size:16px !important;
            min-height:48px;
          }
        }
      `}</style>
    </>
  )
}
