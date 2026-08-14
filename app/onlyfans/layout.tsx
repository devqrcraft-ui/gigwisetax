import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OnlyFans Tax Calculator 2026 — Creator 1099 Tax Estimator | GigWiseTax',
  description: 'Calculate your OnlyFans self-employment taxes. SE tax 15.3% + federal + state for all 50 states + DC. Includes creator deductions for equipment, home office, subscriptions. Free 2026.',
  alternates: { canonical: 'https://www.gigwisetax.com/onlyfans' },
  openGraph: {
    title: 'OnlyFans Tax Calculator 2026 — Free, All 50 States + DC | GigWiseTax',
    description: 'Calculate your OnlyFans self-employment taxes. SE tax 15.3% + federal + state for all 50 states + DC. Includes creator deductions for equipment, home office, subscriptions. Free 2026.',
    siteName: 'GigWiseTax',
    type: 'website',
  },
}


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
