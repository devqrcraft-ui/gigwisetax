import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'
export async function generateStaticParams() { return [{ platform: 'fiverr' }] }
export async function generateMetadata(): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'fiverr')
  if (!p) return {}
  return {
    title: `Fiverr Tax Calculator 2026 — $60K Income = ~$14,278 Tax Owed`,
    description: `Fiverr freelancers: $60K net = ~$8,478 SE tax + federal. Equipment and software deductions save $2,000+. Free 2026 calculator, all 51 states, no signup.`,
    keywords: `fiverr tax calculator, fiverr seller taxes 2026, fiverr 1099 self employment tax`,
    alternates: { canonical: `https://www.gigwisetax.com/fiverr` },
    openGraph: {
      title: `Fiverr Tax Calculator 2026 — Free, All 51 States`,
      description: `Estimate your Fiverr self-employment taxes instantly. Includes SE tax, federal, state, and quarterly payments.`,
      url: `https://www.gigwisetax.com/fiverr`,
    },
  }
}
export default function PlatformPage() {
  const platform = PLATFORMS.find(p => p.slug === 'fiverr')
  if (!platform) return notFound()
  const deductions = DEDUCTIONS['fiverr' as keyof typeof DEDUCTIONS] || []
  const isPlatformDriver = false
  const isRental = false
  const isCreator = true
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `Fiverr Tax Calculator 2026`,
    applicationCategory: 'FinanceApplication',
    description: `Free Fiverr self-employment tax calculator for 2026. All 51 states.`,
    url: `https://www.gigwisetax.com/fiverr`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much tax do I pay on Fiverr income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `As a Fiverr independent contractor, you pay 15.3% self-employment tax on net earnings, plus federal income tax (10-37% depending on total income), plus any state income tax. Most Fiverr workers should set aside 25-30% of net income for taxes.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does Fiverr send a 1099?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Fiverr sends a 1099-NEC if you earn $600 or more in a calendar year. You must report all income even if you do not receive a 1099.`,
        },
      },
      {
        '@type': 'Question',
        name: `When are quarterly taxes due for Fiverr workers in 2026?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Quarterly estimated tax due dates for 2026: April 15, June 16, September 15, and January 15, 2027. Pay if you expect to owe $1,000 or more for the year.`,
        },
      },
    ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"HowTo","name":"How to File Taxes as a Fiverr Worker in 2026","description":"Step-by-step guide to filing self-employment taxes for Fiverr workers in 2026.","step":[{"@type":"HowToStep","position":1,"name":"Track your income","text":"Keep records of all Fiverr earnings. Download your annual tax summary or 1099-NEC from the Fiverr app."},{"@type":"HowToStep","position":2,"name":"Track deductible expenses","text":"Record business miles at 72.5 cents/mile, phone bill percentage, equipment, and other business expenses throughout the year."},{"@type":"HowToStep","position":3,"name":"Calculate self-employment tax","text":"Self-employment tax is 15.3% on net profit. You can deduct half of SE tax from gross income."},{"@type":"HowToStep","position":4,"name":"Pay quarterly estimated taxes","text":"Pay estimated taxes by April 15, June 16, September 15, and January 15 to avoid IRS penalties."},{"@type":"HowToStep","position":5,"name":"File Schedule C with your return","text":"Report all Fiverr income and deductions on Schedule C. Attach to Form 1040 by April 15, 2027."}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com","logo":"https://www.gigwisetax.com/og-image.png","description":"Free gig worker tax calculators and guides for US independent contractors."}' }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Fiverr Freelancer Tax Calculator 2026","item":"https://www.gigwisetax.com/fiverr"}]}' }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebPage","name":"Fiverr Freelancer Tax Calculator 2026","url":"https://www.gigwisetax.com/fiverr","dateModified":"2026-06-11","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"}}' }}/>
      <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026}/>


          {/* KEY TAKEAWAYS */}
          <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
            <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
          <li dangerouslySetInnerHTML={{__html: 'On <strong>$50,000 net income</strong>, Fiverr freelancers owe approximately <strong>$11,565 total tax</strong> in 2026'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Quarterly estimated payment: <strong>$2,891</strong> due April 15, June 16, Sep 15, Jan 15'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Fiverr\'s <strong>5–20% service fee</strong> is a deductible business expense on Schedule C'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Home office, software subscriptions, and equipment are <strong>key Fiverr deductions</strong>'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Set aside <strong>25–30%</strong> of every Fiverr payment — Fiverr does not withhold any taxes'}}/>
            </ul>
          </div>
          {/* ANSWER-FIRST GEO BLOCK */}
          <div style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', margin:'16px 0' }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>2026 Tax Summary — Fiverr</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              Fiverr workers pay 15.3% self-employment tax on net earnings, plus federal income tax. On $50,000 net income: approximately $7,065 SE tax + $4,500 federal income tax = <strong style={{ color:'#fff' }}>$11,565 total tax</strong>. Quarterly estimated payment: <strong style={{ color:'#e8b84b' }}>$2,891</strong>. Set aside 25% of every payment. Home office and software subscriptions are key Fiverr deductions.
            </p>
          </div>
    </div>
  )
}
