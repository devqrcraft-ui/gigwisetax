import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DoorDash Tax Calculator 2026 — Free Dasher Tax Estimator | GigWiseTax',
  description: 'Calculate your DoorDash self-employment taxes in seconds. SE tax (15.3%), federal & state income tax for all 51 states. Free, no signup, updated for 2026 IRS rules.',
  alternates: { canonical: 'https://www.gigwisetax.com/doordash' },
  openGraph: {
    title: 'DoorDash Tax Calculator 2026 — Free, All 51 States | GigWiseTax',
    description: 'Calculate your DoorDash self-employment taxes in seconds. SE tax (15.3%), federal & state income tax for all 51 states. Free, no signup, updated for 2026 IRS rules.',
    url: 'https://www.gigwisetax.com/doordash',
    siteName: 'GigWiseTax',
    type: 'website',
  },
}

const gigSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'DoorDash Tax Calculator 2026',
  description: 'Calculate DoorDash driver taxes, self-employment tax, and quarterly payments for 2026.',
  url: 'https://www.gigwisetax.com/doordash',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
