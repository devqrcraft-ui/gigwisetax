import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'
export async function generateStaticParams() { return [{ platform: 'shipt' }] }
export async function generateMetadata(): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'shipt')
  if (!p) return {}
  return {
    title: `Shipt Shopper Tax Calculator 2026 — $30K Income = $6,448 Tax Owed`,
    description: `Shipt shoppers: $30K net = $4,239 SE tax + federal. Mileage deduction 72.5¢/mile saves $2,175+. Free 2026 calculator, all 50 states + DC, no signup.`,
    keywords: `shipt shopper tax calculator, shipt 1099 taxes 2026, shipt self employment tax`,
    alternates: { canonical: `https://www.gigwisetax.com/shipt` },
    openGraph: {
      title: `Shipt Tax Calculator 2026 — Free, All 50 States + DC`,
      description: `Estimate your Shipt self-employment taxes instantly. Includes SE tax, federal, state, and quarterly payments.`,
      url: `https://www.gigwisetax.com/shipt`,
    },
  }
}
export default function PlatformPage() {
  const platform = PLATFORMS.find(p => p.slug === 'shipt')
  if (!platform) return notFound()
  const deductions = DEDUCTIONS['shipt' as keyof typeof DEDUCTIONS] || []
  const isPlatformDriver = true
  const isRental = false
  const isCreator = false
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `Shipt Tax Calculator 2026`,
    applicationCategory: 'FinanceApplication',
    description: `Free Shipt self-employment tax calculator for 2026. All 50 States + DC.`,
    url: `https://www.gigwisetax.com/shipt`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }
  const FAQ = [
    { q: `How much tax do I pay on Shipt income?`, a: `As a Shipt independent contractor, you pay 15.3% self-employment tax on net earnings, plus federal income tax (10-37% depending on total income), plus any state income tax. Most Shipt workers should set aside 25-30% of net income for taxes.` },
    { q: `Does Shipt send a 1099?`, a: `Yes. Shipt sends a 1099-NEC if you earn $600 or more in a calendar year. You must report all income even if you do not receive a 1099.` },
    { q: `How do I get my 1099 from Shipt?`, a: `Shipt issues your 1099-NEC by January 31 if you earned $600 or more. Check the Shipt Shopper app or your email for a download link or mailed copy. Contact Shipt support if you haven't received it by mid-February.` },
    { q: `When are quarterly taxes due for Shipt workers in 2026?`, a: `Quarterly estimated tax due dates for 2026: April 15, June 16, September 15, and January 15, 2027. Pay if you expect to owe $1,000 or more for the year.` },
  ]
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"HowTo","name":"How to File Taxes as a Shipt Worker in 2026","description":"Step-by-step guide to filing self-employment taxes for Shipt workers in 2026.","step":[{"@type":"HowToStep","position":1,"name":"Track your income","text":"Keep records of all Shipt earnings. Download your annual tax summary or 1099-NEC from the Shipt app."},{"@type":"HowToStep","position":2,"name":"Track deductible expenses","text":"Record business miles at 72.5 cents/mile, phone bill percentage, equipment, and other business expenses throughout the year."},{"@type":"HowToStep","position":3,"name":"Calculate self-employment tax","text":"Self-employment tax is 15.3% on net profit. You can deduct half of SE tax from gross income."},{"@type":"HowToStep","position":4,"name":"Pay quarterly estimated taxes","text":"Pay estimated taxes by April 15, June 16, September 15, and January 15 to avoid IRS penalties."},{"@type":"HowToStep","position":5,"name":"File Schedule C with your return","text":"Report all Shipt income and deductions on Schedule C. Attach to Form 1040 by April 15, 2027."}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com","logo":"https://www.gigwisetax.com/og-image.png","description":"Free gig worker tax calculators and guides for US independent contractors."}' }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Shipt Shopper Tax Calculator 2026","item":"https://www.gigwisetax.com/shipt"}]}' }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebPage","name":"Shipt Shopper Tax Calculator 2026","url":"https://www.gigwisetax.com/shipt","dateModified":"2026-06-11","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"}}' }}/>
      <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026}/>


          {/* KEY TAKEAWAYS */}
          <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
            <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
          <li dangerouslySetInnerHTML={{__html: 'On <strong>$30,000 net income</strong>, Shipt shoppers owe approximately <strong>$6,448 total tax</strong> in 2026'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Quarterly estimated payment: <strong>$1,612</strong> due April 15, June 16, Sep 15, Jan 15'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Mileage at <strong>72.5¢/mile</strong> is the largest deduction — Shipt shoppers drive 15,000–25,000 miles/year'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Insulated bags, phone accessories, and car maintenance are <strong>deductible</strong> Shipt expenses'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Set aside <strong>25–27%</strong> of gross Shipt earnings — Shipt does not withhold any taxes'}}/>
            </ul>
          </div>
          {/* ANSWER-FIRST GEO BLOCK */}
          <div style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', margin:'16px 0' }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>2026 Tax Summary — Shipt</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              Shipt workers pay 15.3% self-employment tax on net earnings, plus federal income tax. On $30,000 net income: approximately $4,239 SE tax + $2,200 federal income tax = <strong style={{ color:'#fff' }}>$6,448 total tax</strong>. Quarterly estimated payment: <strong style={{ color:'#e8b84b' }}>$1,612</strong>. Set aside 25% of every payment. Mileage deduction at 72.5¢/mile is the largest deduction for Shipt shoppers.
            </p>
          </div>
          {/* FAQ SECTION */}
          <section id="faq" style={{ margin: '24px 0' }}>
            <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 20px' }}>Frequently Asked Questions</h2>
            {FAQ.map((f, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: 20, marginBottom: 20 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#e8edf8', margin: '0 0 8px' }}>{f.q}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </section>
    </div>
  )
}
