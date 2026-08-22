import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#0a0f1e',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "GigWiseTax ★ 1099 Tax Calculator 2026 ✓ Professional",
  description: "Free 1099 self-employment tax calculator for DoorDash, Uber, OnlyFans and all gig workers.",
  metadataBase: new URL('https://www.gigwisetax.com' ),
  openGraph: {
    title: "GigWiseTax ★ 1099 Tax Calculator 2026 ✓ Professional",
    description: "Free 1099 self-employment tax calculator.",
    url: "https://www.gigwisetax.com",
    siteName: "GigWiseTax",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GigWiseTax ★ 1099 Tax Calculator 2026 ✓ Professional",
    description: "Free 1099 self-employment tax calculator.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode } ) {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GigWiseTax Calculator",
    "operatingSystem": "Any",
    "applicationCategory": "FinanceApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "128" }
  };
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gigwisetax.com" }]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema ) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </head>
      <body className="antialiased">
        {children}
        <footer style={{padding:20,background:"rgba(232,184,75,0.05)",borderTop:"1px solid rgba(255,255,255,0.1)"}}>
          <div style={{maxWidth:1200,margin:"0 auto"}}>
            <div style={{fontSize:12,fontWeight:800,color:"#e8b84b",marginBottom:10}}>★ PROFESSIONAL TAX NETWORK</div>
            <a href="https://www.privatepaycheck.com" style={{color:"#fff",marginRight:20,textDecoration: "none"}}>PrivatePaycheck ➔</a>
            <a href="https://www.ukgigtax.com" style={{color:"#fff",marginRight:20,textDecoration: "none"}}>UKGigTax ➔</a>
            <a href="https://www.compressto20kb.com" style={{color:"#fff",textDecoration: "none"}}>CompressTo20KB ➔</a>
          </div>
        </footer>
      </body>
    </html>
   );
}
