import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazon Flex Tax Calculator 2026 — Driver SE Tax Estimator | GigWiseTax',
  description: 'Calculate Amazon Flex driver self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Mileage deduction, quarterly taxes. Free Amazon Flex tax calculator 2026.',
  alternates: { canonical: 'https://www.gigwisetax.com/amazon-flex' },
  openGraph: {
    title: 'Amazon Flex Tax Calculator 2026 — Free, All 51 States | GigWiseTax',
    description: 'Calculate Amazon Flex driver self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Mileage deduction, quarterly taxes. Free Amazon Flex tax calculator 2026.',
    url: 'https://www.gigwisetax.com/amazon-flex',
    siteName: 'GigWiseTax',
    type: 'website',
  },
}

const gigSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Amazon Flex Tax Calculator 2026',
  description: 'Calculate Amazon Flex driver taxes, mileage deductions, and self-employment tax for 2026.',
  url: 'https://www.gigwisetax.com/amazon-flex',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
