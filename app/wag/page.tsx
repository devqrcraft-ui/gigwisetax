import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'

export async function generateStaticParams() { return [{ platform: 'wag' }] }

export async function generateMetadata(): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'wag')
  if (!p) return {}
  return {
    title: `Wag Tax Calculator 2026 — $20K Income = $3,185 Tax Owed`,
    description: `Wag dog walkers: $20K net = $2,826 SE tax + federal. Mileage, supplies, and sub-walker pay deductible. Free 2026 calculator, all 50 states + DC, no signup.`,
    keywords: `wag tax calculator, wag dog walker taxes 2026, wag 1099, wag stripe 1099, wag self employment tax`,
    alternates: { canonical: `https://www.gigwisetax.com/wag` },
    openGraph: {
      title: `Wag Tax Calculator 2026 — Free, All 50 States + DC`,
      description: `Estimate your Wag self-employment taxes instantly. Includes SE tax, federal, state, and quarterly payments.`,
      url: `https://www.gigwisetax.com/wag`,
    },
  }
}

export default function PlatformPage() {
  const platform = PLATFORMS.find(p => p.slug === 'wag')
  if (!platform) return notFound()
  const deductions = DEDUCTIONS['wag' as keyof typeof DEDUCTIONS] || DEDUCTIONS.doordash

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `Wag Tax Calculator 2026`,
    applicationCategory: 'FinanceApplication',
    description: `Free Wag self-employment tax calculator for 2026. All 50 States + DC.`,
    url: `https://www.gigwisetax.com/wag`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much tax do I pay on Wag income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `As a Wag independent contractor, you pay 15.3% self-employment tax on net earnings, plus federal income tax (10-37% depending on total income), plus any state income tax. Most Wag walkers should set aside 25-30% of net income for taxes.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does Wag send a 1099?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Wag payments are processed through Stripe Express, not Wag directly. Stripe sends your 1099 form if you earn $600 or more in a calendar year. You must report all income even if you do not receive a 1099.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can Wag walkers deduct tips under the 2026 tax law?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. The IRS classifies pet care (Treasury Tipped Occupation Code 506) as a tipped occupation, and the 2026 One Big Beautiful Budget Act allows a deduction of up to $25,000 in qualified tips. Track any tips received through the Wag app separately from your base earnings.`,
        },
      },
      {
        '@type': 'Question',
        name: `When are quarterly taxes due for Wag workers in 2026?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Quarterly estimated tax due dates for 2026: April 15, June 16, September 15, and January 15, 2027. Pay if you expect to owe $1,000 or more for the year.`,
        },
      },
    ],
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"HowTo","name":"How to File Taxes as a Wag Worker in 2026","description":"Step-by-step guide to filing self-employment taxes for Wag dog walkers in 2026.","step":[{"@type":"HowToStep","position":1,"name":"Track your income","text":"Wag payments go through Stripe Express. Download your annual 1099 from your Stripe Express dashboard, not the Wag app."},{"@type":"HowToStep","position":2,"name":"Track deductible expenses","text":"Record business miles driven to client homes, pet supplies, and any sub-walker payments throughout the year."},{"@type":"HowToStep","position":3,"name":"Calculate self-employment tax","text":"Self-employment tax is 15.3% on net profit. You can deduct half of SE tax from gross income."},{"@type":"HowToStep","position":4,"name":"Pay quarterly estimated taxes","text":"Pay estimated taxes by April 15, June 16, September 15, and January 15 to avoid IRS penalties."},{"@type":"HowToStep","position":5,"name":"File Schedule C with your return","text":"Report all Wag income and deductions on Schedule C. Attach to Form 1040 by April 15, 2027."}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com","logo":"https://www.gigwisetax.com/og-image.png","description":"Free gig worker tax calculators and guides for US independent contractors."}' }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Wag Dog Walker Tax Calculator 2026","item":"https://www.gigwisetax.com/wag"}]}' }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"WebPage","name":"Wag Dog Walker Tax Calculator 2026","url":"https://www.gigwisetax.com/wag","dateModified":"2026-07-25","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"publisher":{"@type":"Organization","name":"GigWiseTax","url":"https://www.gigwisetax.com"}}' }}/>
      <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026}/>

          <div style={{background:'rgba(232,184,75,0.08)',border:'1px solid rgba(232,184,75,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:28}}>
            <div style={{fontWeight:800,color:'#e8b84b',marginBottom:10,fontSize:13}}>✅ KEY TAKEAWAYS</div>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
          <li dangerouslySetInnerHTML={{__html: 'On <strong>$20,000 net income</strong>, Wag walkers owe approximately <strong>$3,185 total tax</strong> in 2026'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Quarterly estimated payment: <strong>$796</strong> due April 15, June 16, Sep 15, Jan 15'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Wag pays through <strong>Stripe Express</strong>, not directly — your 1099 comes from Stripe, threshold $600'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Tips through the app may qualify for the new 2026 <strong>tips deduction</strong> (up to $25,000) — pet care is an IRS-recognized tipped occupation'}}/>
          <li dangerouslySetInnerHTML={{__html: 'Set aside <strong>25%</strong> of every Wag payment — you are a 1099 contractor, no taxes withheld'}}/>
            </ul>
          </div>
          <div style={{ background:'rgba(232,184,75,0.06)', border:'1px solid rgba(232,184,75,0.2)', borderRadius:8, padding:'20px 24px', margin:'16px 0' }}>
            <div style={{ fontSize:13, fontWeight:700, color:'#e8b84b', marginBottom:10, textTransform:'uppercase' as const, letterSpacing:'0.5px' }}>2026 Tax Summary — Wag</div>
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.85)', lineHeight:1.8, margin:0 }}>
              Wag walkers pay 15.3% self-employment tax on net earnings, plus federal income tax. On $20,000 net income: approximately $2,826 SE tax + $359 federal income tax = <strong style={{ color:'#fff' }}>$3,185 total tax</strong>. Quarterly estimated payment: <strong style={{ color:'#e8b84b' }}>$796</strong>. Set aside 25% of every payment. Mileage to client homes, supplies, and sub-walker pay are deductible for Wag walkers. Note: the IRS standard mileage rate increased mid-year in 2026 — 72.5¢/mile through June 30, 76¢/mile from July 1 onward.
            </p>
          </div>
    </div>
  )
}
