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
        <header style={{position:"sticky",top:0,zIndex:50,background:"#07111F",borderBottom:"1px solid rgba(232,184,75,0.2)",padding:"10px 20px"}}>
          <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>
            <a href="/" style={{display:"flex",alignItems:"center",gap:8,textDecoration:"none"}}>
              <span style={{fontSize:16,fontWeight:900,color:"#fff"}}>GigWiseTax<span style={{color:"#e8b84b"}}>.com</span></span>
            </a>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <a href="/calculators" style={{color:"rgba(255,255,255,0.7)",fontSize:13,fontWeight:600,textDecoration:"none",display:"none"}} className="header-calc-link">Calculators</a>
              <a href="/" style={{display:"inline-flex",alignItems:"center",gap:6,background:"#e8b84b",color:"#07111F",fontWeight:800,fontSize:13,padding:"8px 16px",borderRadius:6,textDecoration:"none"}}> Home</a>
            </div>
          </div>
        </header>
        {children}
        <footer style={{padding:"18px 20px",background:"#07111F",borderTop:"1px solid rgba(232,184,75,0.2)"}}>
          <div style={{maxWidth:1200,margin:"0 auto"}}>
            <div style={{display:"flex",flexWrap:"wrap" as const,alignItems:"center",gap:14,marginBottom:10,fontSize:13}}>
              <a href="/calculators" style={{color:"rgba(255,255,255,0.7)",fontWeight:600,textDecoration:"none"}}>Calculators</a>
              <a href="/blog" style={{color:"rgba(255,255,255,0.7)",fontWeight:600,textDecoration:"none"}}>Blog</a>
              <a href="/deadlines" style={{color:"rgba(255,255,255,0.7)",fontWeight:600,textDecoration:"none"}}>Deadlines</a>
              <a href="/about" style={{color:"rgba(255,255,255,0.7)",fontWeight:600,textDecoration:"none"}}>About</a>
              <a href="/contact" style={{color:"rgba(255,255,255,0.7)",fontWeight:600,textDecoration:"none"}}>Contact</a>
              <a href="/privacy" style={{color:"rgba(255,255,255,0.7)",fontWeight:600,textDecoration:"none"}}>Privacy</a>
              <a href="/terms" style={{color:"rgba(255,255,255,0.7)",fontWeight:600,textDecoration:"none"}}>Terms</a>
              <span style={{marginLeft:"auto",fontSize:11,fontWeight:800,color:"#e8b84b"}}>★ PROFESSIONAL TAX NETWORK</span>
              <a href="https://www.privatepaycheck.com" style={{color:"#fff",textDecoration:"none",fontWeight:600}}>PrivatePaycheck ➔</a>
              <a href="https://www.ukgigtax.com" style={{color:"#fff",textDecoration:"none",fontWeight:600}}>UKGigTax ➔</a>
              <a href="https://www.compressto20kb.com" style={{color:"#fff",textDecoration:"none",fontWeight:600}}>CompressTo20KB ➔</a>
            </div>
            <div style={{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:10,fontSize:11,color:"rgba(255,255,255,0.35)"}}>© 2026 GigWiseTax.com · Not affiliated with the IRS or any government agency</div>
          </div>
        </footer>
      </body>
    </html>
   );
}
