import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'
export async function generateStaticParams() { return [{ platform: 'shipt' }] }
export async function generateMetadata(): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'shipt')
  if (!p) return {}
  return {
    title: `Shipt Shopper Tax Calculator 2026 — 1099 SE Tax & Mileage | GigWiseTax`,
    description: `Free Shipt shopper tax calculator 2026. SE tax 15.3%, mileage 70¢/mile. Insulated bags, phone deductions. All 51 states. No signup.`,
    keywords: `shipt shopper tax calculator, shipt 1099 taxes 2026, shipt self employment tax`,
    alternates: { canonical: `https://www.gigwisetax.com/shipt` },
    openGraph: {
      title: `Shipt Tax Calculator 2026 — Free, All 51 States`,
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
    description: `Free Shipt self-employment tax calculator for 2026. All 51 states.`,
    url: `https://www.gigwisetax.com/shipt`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much tax do I pay on Shipt income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `As a Shipt independent contractor, you pay 15.3% self-employment tax on net earnings, plus federal income tax (10-37% depending on total income), plus any state income tax. Most Shipt workers should set aside 25-30% of net income for taxes.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does Shipt send a 1099?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Shipt sends a 1099-NEC if you earn $600 or more in a calendar year. You must report all income even if you do not receive a 1099.`,
        },
      },
      {
        '@type': 'Question',
        name: `When are quarterly taxes due for Shipt workers in 2026?`,
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
