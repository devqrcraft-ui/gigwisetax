import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'GigWiseTax — Free Gig Worker Tax Calculator USA', template: '%s | GigWiseTax' },
  description: 'Free gig worker tax calculator for DoorDash, Uber, Etsy, OnlyFans, Instacart, and more. Calculate SE tax, quarterly payments, and take-home pay by state. No signup, 100% private.',
  keywords: 'gig worker tax calculator, doordash tax calculator, uber driver tax calculator, self employment tax calculator, 1099 tax calculator, quarterly tax calculator',
  metadataBase: new URL('https://www.gigwisetax.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'GigWiseTax — Free Gig Worker Tax Calculator',
    description: 'Calculate your exact taxes as a gig worker. DoorDash, Uber, Etsy, OnlyFans, Instacart & more. By state. Free. Private.',
    url: 'https://www.gigwisetax.com',
    siteName: 'GigWiseTax',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'GigWiseTax — Free Gig Worker Tax Calculator' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "'DM Sans', system-ui, sans-serif", background: '#0a0e1a', color: '#e2e8f0' }}>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
        <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', position: 'sticky', top: 0, background: 'rgba(10,14,26,0.95)', backdropFilter: 'blur(12px)', zIndex: 100 }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>💼</div>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 18, color: 'white' }}>GigWiseTax</span>
          </Link>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { href: '/doordash', label: '🍕 DoorDash' },
              { href: '/uber', label: '🚗 Uber' },
              { href: '/etsy', label: '🛍️ Etsy' },
              { href: '/onlyfans', label: '💰 OnlyFans' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 500, padding: '6px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.2s' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
        {children}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '48px 24px', textAlign: 'center', marginTop: 80 }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px 32px', marginBottom: 32 }}>
              {['doordash','uber','etsy','onlyfans','instacart','amazon-flex','airbnb','lyft'].map(p => (
                <Link key={p} href={`/${p}`} style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.4)', fontSize: 13, textTransform: 'capitalize' }}>{p.replace('-',' ')} Tax Calculator</Link>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 24 }}>
              <Link href="/blog" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 13 }}>Blog</Link>
              <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: 13 }}>Privacy</Link>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12, lineHeight: 1.6 }}>
              GigWiseTax is for informational purposes only. Consult a tax professional for advice. All calculations happen in your browser — your data never leaves your device.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: 11, marginTop: 8 }}>© 2026 GigWiseTax.com</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
