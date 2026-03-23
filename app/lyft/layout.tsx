import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lyft Tax Calculator 2026 — Driver Self-Employment Tax | GigWiseTax',
  description: 'Calculate Lyft driver self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Mileage deduction, quarterly payment schedule. Free Lyft tax calculator 2026.',
  alternates: { canonical: 'https://www.gigwisetax.com/lyft' },
  openGraph: {
    title: 'Lyft Tax Calculator 2026 — Free, All 51 States | GigWiseTax',
    description: 'Calculate Lyft driver self-employment taxes. SE tax 15.3%, federal & state for all 51 states. Mileage deduction, quarterly payment schedule. Free Lyft tax calculator 2026.',
    url: 'https://www.gigwisetax.com/lyft',
    siteName: 'GigWiseTax',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
