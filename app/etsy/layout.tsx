import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Etsy Tax Calculator 2026 — Seller Self-Employment Tax | GigWiseTax',
  description: 'Calculate your Etsy seller self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Includes Schedule C deductions for materials, shipping, fees. Free, 2026.',
  alternates: { canonical: 'https://www.gigwisetax.com/etsy' },
  openGraph: {
    title: 'Etsy Tax Calculator 2026 — Free, All 51 States | GigWiseTax',
    description: 'Calculate your Etsy seller self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Includes Schedule C deductions for materials, shipping, fees. Free, 2026.',
    url: 'https://www.gigwisetax.com/etsy',
    siteName: 'GigWiseTax',
    type: 'website',
  },
}

const gigSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Etsy Seller Tax Calculator 2026',
  description: 'Calculate Etsy seller taxes, Schedule C deductions, and quarterly estimated payments for 2026.',
  url: 'https://www.gigwisetax.com/etsy',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function Layout({ children }: { children: React.ReactNode }) { children: React.ReactNode }) {
  return <>{children}</>
}
