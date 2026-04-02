import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.gigwisetax.com/quarterly-reminder' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
