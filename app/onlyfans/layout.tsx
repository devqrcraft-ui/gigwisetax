import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OnlyFans Tax Calculator 2026 — Creator 1099 Tax Estimator | GigWiseTax',
  description: 'Calculate your OnlyFans self-employment taxes. SE tax 15.3% + federal + state for all 51 states. Includes creator deductions for equipment, home office, subscriptions. Free 2026.',
  alternates: { canonical: 'https://www.gigwisetax.com/onlyfans' },
  openGraph: {
    title: 'OnlyFans Tax Calculator 2026 — Free, All 51 States | GigWiseTax',
    description: 'Calculate your OnlyFans self-employment taxes. SE tax 15.3% + federal + state for all 51 states. Includes creator deductions for equipment, home office, subscriptions. Free 2026.',
    url: 'https://www.gigwisetax.com/onlyfans',
    siteName: 'GigWiseTax',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
