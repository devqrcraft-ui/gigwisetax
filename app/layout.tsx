import type { Metadata, Viewport } from 'next';
import './globals.css';
import './mobile.css';
import { Analytics } from '@vercel/analytics/next';

export const viewport: Viewport = {
  themeColor: '#0a0f1e',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "GigWiseTax — Free Gig Worker Tax Calculator 2026",
  description: "Free 1099 self-employment tax calculator for DoorDash, Uber, OnlyFans and all gig workers.",
  metadataBase: new URL('https://www.gigwisetax.com' ),
  openGraph: {
    title: "GigWiseTax — Free Gig Worker Tax Calculator 2026",
    description: "Free 1099 self-employment tax calculator.",
    url: "https://www.gigwisetax.com",
    siteName: "GigWiseTax",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GigWiseTax — Free Gig Worker Tax Calculator 2026",
    description: "Free 1099 self-employment tax calculator.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode } ) {
  return (
    <html lang="en">
      <head>
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
        <footer style={{padding:"10px 12px 12px",background:"#07111F",borderTop:"1px solid rgba(232,184,75,0.2)",textAlign:"center" as const}}>
          <div style={{maxWidth:1200,margin:"0 auto"}}>
            <nav aria-label="Footer" className="gw-foot-nav">
              <a href="/calculators">Calculators</a>
              <a href="/blog">Blog</a>
              <a href="/deadlines">Deadlines</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </nav>
            <div className="gw-foot-sites">
              <span>Our sites:</span>
              <a href="https://www.privatepaycheck.com">PrivatePaycheck</a>
              <a href="https://www.ukgigtax.com">UKGigTax</a>
              <a href="https://www.compressto20kb.com">CompressTo20KB</a>
            </div>
            <div style={{borderTop:"1px solid rgba(255,255,255,0.08)",marginTop:6,paddingTop:8,fontSize:12,color:"rgba(255,255,255,0.7)",lineHeight:1.5}}>© 2026 GigWiseTax.com · Not affiliated with the IRS or any government agency</div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
   );
}
