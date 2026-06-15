import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Airbnb Tax Calculator 2026 — $50K Net = $7,065 SE Tax + Deductions',
  description: 'Airbnb hosts on $50K net owe $7,065 SE tax + federal in 2026. Depreciation + 14-day rule saves $3,000+. Free calculator, all 51 states.',
  keywords: 'airbnb tax calculator 2026, airbnb host taxes, airbnb self employment tax, airbnb income tax calculator',
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: { canonical: 'https://www.gigwisetax.com/airbnb' },
  openGraph: {
    title: 'Airbnb Tax Calculator 2026 — $50K Net = $7,065 SE Tax',
    url: 'https://www.gigwisetax.com/airbnb',
    siteName: 'GigWiseTax',
    type: 'website',
    images: [{ url: 'https://www.gigwisetax.com/og-image.png', width: 1200, height: 630, alt: 'Airbnb Tax Calculator 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@gigwisetax', creator: '@gigwisetax', title: 'Airbnb Tax Calculator 2026 — $50K Net = $7,065 SE Tax', description: 'Free Airbnb tax calculator. All 51 states.' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
