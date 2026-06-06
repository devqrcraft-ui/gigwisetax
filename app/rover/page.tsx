export const runtime = "edge";
import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'
export async function generateStaticParams() { return [{ platform: 'rover' }] }
export async function generateMetadata(): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'rover')
  if (!p) return {}
  return {
    title: `Rover Tax Calculator 2026 — $25K Income = ~$5,340 Tax Owed`,
    description: `Rover dog walkers: $25K net = ~$3,540 SE tax + federal. Mileage at 72.5¢/mile and supplies deductible. Free 2026 calculator, all 51 states, no signup.`,
    keywords: `rover tax calculator, rover dog walker taxes 2026, rover 1099, rover self employment tax`,
    alternates: { canonical: `https://www.gigwisetax.com/rover` },
    openGraph: {
      title: `Rover Tax Calculator 2026 — Free, All 51 States`,
      description: `Estimate your Rover self-employment taxes instantly. Includes SE tax, federal, state, and quarterly payments.`,
      url: `https://www.gigwisetax.com/rover`,
    },
  }
}
export default function PlatformPage() {
  const platform = PLATFORMS.find(p => p.slug === 'rover')
  if (!platform) return notFound()
  const deductions = DEDUCTIONS['rover' as keyof typeof DEDUCTIONS] || []
  const isPlatformDriver = true
  const isRental = false
  const isCreator = false
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `Rover Tax Calculator 2026`,
    applicationCategory: 'FinanceApplication',
    description: `Free Rover self-employment tax calculator for 2026. All 51 states.`,
    url: `https://www.gigwisetax.com/rover`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much tax do I pay on Rover income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `As a Rover independent contractor, you pay 15.3% self-employment tax on net earnings, plus federal income tax (10-37% depending on total income), plus any state income tax. Most Rover workers should set aside 25-30% of net income for taxes.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does Rover send a 1099?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Rover sends a 1099-NEC if you earn $600 or more in a calendar year. You must report all income even if you do not receive a 1099.`,
        },
      },
      {
        '@type': 'Question',
        name: `When are quarterly taxes due for Rover workers in 2026?`,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"HowTo","name":"How to File Taxes as a Rover Worker in 2026","description":"Step-by-step guide to filing self-employment taxes for Rover workers in 2026.","step":[{"@type":"HowToStep","position":1,"name":"Track your income","text":"Keep records of all Rover earnings. Download your annual tax summary or 1099-NEC from the Rover app."},{"@type":"HowToStep","position":2,"name":"Track deductible expenses","text":"Record business miles at 72.5 cents/mile, phone bill percentage, equipment, and other business expenses throughout the year."},{"@type":"HowToStep","position":3,"name":"Calculate self-employment tax","text":"Self-employment tax is 15.3% on net profit. You can deduct half of SE tax from gross income."},{"@type":"HowToStep","position":4,"name":"Pay quarterly estimated taxes","text":"Pay estimated taxes by April 15, June 16, September 15, and January 15 to avoid IRS penalties."},{"@type":"HowToStep","position":5,"name":"File Schedule C with your return","text":"Report all Rover income and deductions on Schedule C. Attach to Form 1040 by April 15, 2027."}]}' }} />
      <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026}/>


          {/* KEY TAKEAWAYS */}
          <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
            <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
          <li dangerouslySetInnerHTML={{__html: 'On <strong>$25,000 net income</strong>, Rover sitters owe approximately <strong>$5,340 total tax</strong> in 2026'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Quarterly estimated payment: <strong>$1,335</strong> due April 15, June 16, Sep 15, Jan 15'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Pet supplies, vet visits for business animals, and home office are <strong>deductible</strong> Rover expenses'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Rover charges a <strong>20–25% service fee</strong> — deductible as a business cost on Schedule C'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Set aside <strong>25%</strong> of every Rover payment — you are a 1099 contractor, no taxes withheld'}}/>
            </ul>
          </div>
          {/* ANSWER-FIRST GEO BLOCK */}
          <div style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', margin:'16px 0' }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>2026 Tax Summary — Rover</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              Rover workers pay 15.3% self-employment tax on net earnings, plus federal income tax. On $25,000 net income: approximately $3,540 SE tax + $1,800 federal income tax = <strong style={{ color:'#fff' }}>$5,340 total tax</strong>. Quarterly estimated payment: <strong style={{ color:'#e8b84b' }}>$1,335</strong>. Set aside 25% of every payment. Phone, supplies, and home office deductions apply to Rover sitters.
            </p>
          </div>
    </div>
  )
}
