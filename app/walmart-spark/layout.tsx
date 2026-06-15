import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Walmart Spark Tax Calculator 2026 — $30K Net = $4,239 SE Tax',
  description: 'Walmart Spark drivers on $30K net owe $4,239 SE tax + federal in 2026. Mileage 72.5¢/mile saves $2,175+. Free calculator, all 51 states, no signup.',
  keywords: 'walmart spark tax calculator 2026, spark driver self employment tax, walmart spark 1099 taxes, spark driver quarterly taxes',
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: { canonical: 'https://www.gigwisetax.com/walmart-spark' },
  openGraph: {
    title: 'Walmart Spark Tax Calculator 2026 — $30K Net = $4,239 SE Tax',
    description: 'Walmart Spark drivers on $30K net owe $4,239 SE tax + federal in 2026. Mileage 72.5¢/mile saves $2,175+. Free calculator, all 51 states.',
    url: 'https://www.gigwisetax.com/walmart-spark',
    siteName: 'GigWiseTax',
    type: 'website',
    images: [{ url: 'https://www.gigwisetax.com/og-image.png', width: 1200, height: 630, alt: 'Walmart Spark Tax Calculator 2026' }],
  },
  twitter: { card: 'summary_large_image', site: '@gigwisetax', creator: '@gigwisetax', title: 'Walmart Spark Tax Calculator 2026 — $30K Net = $4,239 SE Tax', description: 'Free Walmart Spark tax calculator. $30K net = $4,239 SE tax. All 51 states.' },
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
