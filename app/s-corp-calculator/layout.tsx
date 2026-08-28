import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'S-Corp vs Sole Proprietor Calculator 2026 — Save $3,000+/yr',
  description: 'See if S-Corp election saves you money on self-employment tax in 2026. Free calculator compares S-Corp vs sole proprietor tax burden for gig workers.',
  alternates: { canonical: 'https://www.gigwisetax.com/s-corp-calculator' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
