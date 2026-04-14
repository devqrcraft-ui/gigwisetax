import { notFound } from 'next/navigation'
import { PLATFORMS, STATES, DEADLINES_2026, DEDUCTIONS } from '@/lib/data'
import GigCalculator from './GigCalculator'
import type { Metadata } from 'next'
export async function generateStaticParams() { return [{ platform: 'taskrabbit' }] }
export async function generateMetadata(): Promise<Metadata> {
  const p = PLATFORMS.find(x => x.slug === 'taskrabbit')
  if (!p) return {}
  return {
    title: `TaskRabbit Tax Calculator 2026 — 1099 Self-Employment Tax | GigWiseTax`,
    description: `Free TaskRabbit tax calculator 2026. SE tax 15.3% + federal + state. Deductions: tools, equipment, mileage 70¢/mile. All 51 states. No signup.`,
    keywords: `taskrabbit tax calculator, taskrabbit 1099 taxes 2026, taskrabbit self employment tax`,
    alternates: { canonical: `https://www.gigwisetax.com/taskrabbit` },
    openGraph: {
      title: `TaskRabbit Tax Calculator 2026 — Free, All 51 States`,
      description: `Estimate your TaskRabbit self-employment taxes instantly. Includes SE tax, federal, state, and quarterly payments.`,
      url: `https://www.gigwisetax.com/taskrabbit`,
    },
  }
}
export default function PlatformPage() {
  const platform = PLATFORMS.find(p => p.slug === 'taskrabbit')
  if (!platform) return notFound()
  const deductions = DEDUCTIONS['taskrabbit' as keyof typeof DEDUCTIONS] || []
  const isPlatformDriver = true
  const isRental = false
  const isCreator = false
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `TaskRabbit Tax Calculator 2026`,
    applicationCategory: 'FinanceApplication',
    description: `Free TaskRabbit self-employment tax calculator for 2026. All 51 states.`,
    url: `https://www.gigwisetax.com/taskrabbit`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How much tax do I pay on TaskRabbit income?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `As a TaskRabbit independent contractor, you pay 15.3% self-employment tax on net earnings, plus federal income tax (10-37% depending on total income), plus any state income tax. Most TaskRabbit workers should set aside 25-30% of net income for taxes.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does TaskRabbit send a 1099?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. TaskRabbit sends a 1099-NEC if you earn $600 or more in a calendar year. You must report all income even if you do not receive a 1099.`,
        },
      },
      {
        '@type': 'Question',
        name: `When are quarterly taxes due for TaskRabbit workers in 2026?`,
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
      <GigCalculator
        platform={platform}
        states={STATES}
        deadlines={DEADLINES_2026}
        deductions={deductions}
        isPlatformDriver={isPlatformDriver}
        isRental={isRental}
        isCreator={isCreator}
      />
    </div>
  )
}
