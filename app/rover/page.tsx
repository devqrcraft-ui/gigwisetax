import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'
export async function generateStaticParams() { return [{ platform: 'rover' }] }
export async function generateMetadata(): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'rover')
  if (!p) return {}
  return {
    title: `Rover Tax Calculator 2026 — Dog Walker 1099 SE Tax | GigWiseTax`,
    description: `Free Rover dog walker tax calculator 2026. SE tax 15.3%, mileage 70¢/mile. Deductions: treats, leash, poop bags, rain gear, phone. Quarterly dates. No signup.`,
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
      <GigCalculator platform={platform} states={STATES} deadlines={DEADLINES_2026}/>
    </div>
  )
}
