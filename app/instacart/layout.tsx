import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Instacart Tax Calculator 2026 — Shopper Self-Employment Tax | GigWiseTax',
  description: 'Calculate Instacart shopper self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Mileage deduction, quarterly payment schedule. Free, 2026 IRS rules.',
  alternates: { canonical: 'https://www.gigwisetax.com/instacart' },
  openGraph: {
    title: 'Instacart Tax Calculator 2026 — Free, All 51 States | GigWiseTax',
    description: 'Calculate Instacart shopper self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Mileage deduction, quarterly payment schedule. Free, 2026 IRS rules.',
    url: 'https://www.gigwisetax.com/instacart',
    siteName: 'GigWiseTax',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
