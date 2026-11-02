import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Uber Tax Calculator 2026 | Free Driver 1099 Estimate',
  description: 'Estimate 2026 Uber taxes on 1099 income. Includes self-employment, federal tax, mileage and a simplified state estimate. Free; no signup.',
  keywords: 'uber tax calculator 2026, uber driver self employment tax, uber 1099 taxes, uber quarterly taxes',
  authors: [{ name: 'the GigWiseTax Team' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: { canonical: 'https://www.gigwisetax.com/uber' },
  openGraph: {
    title: 'Uber Tax Calculator 2026 | Free Driver 1099 Estimate',
    description: 'Estimate 2026 Uber taxes on 1099 income. Includes self-employment, federal tax, mileage and a simplified state estimate. Free; no signup.',
    url: 'https://www.gigwisetax.com/uber',
    siteName: 'GigWiseTax',
    type: 'website',
    images: [{ url: 'https://www.gigwisetax.com/og-image.png', width: 1200, height: 630, alt: 'Uber Driver Tax Calculator 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@gigwisetax', creator: '@gigwisetax', title: 'Uber Tax Calculator 2026 | Free Driver 1099 Estimate', description: 'Estimate 2026 Uber driver self-employment and federal taxes. Add mileage and state for a planning estimate. Free; no signup.' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
