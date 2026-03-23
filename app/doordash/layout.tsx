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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
