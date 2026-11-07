import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.gigwisetax.com/privacy' },
  title: 'Privacy Policy — GigWiseTax.com',
  description: 'Learn how calculator inputs are processed in your browser and how hosting, analytics, and third-party services may process technical data.',
  openGraph: {
    title: 'Privacy Policy — GigWiseTax.com',
    description: 'Learn how calculator inputs are processed in your browser and how hosting, analytics, and third-party services may process technical data.',
    url: 'https://www.gigwisetax.com/privacy',
    siteName: 'GigWiseTax',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — GigWiseTax.com',
    description: 'Learn how calculator inputs are processed in your browser and how hosting, analytics, and third-party services may process technical data.',
    images: ['/og-image.png'],
  },
}

export default function PrivacyPage() {
  const section = { marginBottom: 32 }
  const h2 = { fontSize: 18, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12, marginTop: 0 }
  const p  = { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 12 }
  const li = { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 8 }

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#07111F)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 10 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link> › Privacy Policy
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: 0 }}> Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, marginTop: 10, marginBottom: 0 }}>Last updated: November 7, 2026 &nbsp;·&nbsp; Effective: January 1, 2026</p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px' }}>

        <div style={{ background: 'rgba(5,150,105,0.12)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 8, padding: '16px 20px', marginBottom: 32 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#4ade80', marginBottom: 6 }}> The Short Version</div>
          <div style={{ fontSize: 14, color: '#4ade80', lineHeight: 1.7 }}>
            Calculator values are processed in your browser and are not submitted by the calculator to our application. Separately, our hosting provider may create technical access logs, and Vercel Analytics is enabled to measure site usage (see Sections 5 and 6). We do not receive your income or tax figures through the calculator.
          </div>
        </div>

        <div style={{ background: '#07111F', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: 32, boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>

          <div style={section}>
            <h2 style={h2}>1. Who We Are</h2>
            <p style={p}>GigWiseTax.com is an independent, free tax estimation tool for U.S. gig economy workers. We are not affiliated with the IRS or any U.S. government agency. Some links on this site are sponsored links to independent tax companies (see Section 5); GigWiseTax is not part of those companies and may earn a commission.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>2. Information Processed Locally</h2>
            <p style={p}>The calculator uses earnings, mileage, filing status, and state information you enter, but processes those values in your browser and does not submit them to GigWiseTax's application servers. We do not ask for:</p>
            <ul style={{ paddingLeft: 24 }}>
              {[
                'Your name, email address, or contact information',
                'Your Social Security Number or any government ID',
                'Payment or credit card information',
              ].map(item => <li key={item} style={li}>{item}</li>)}
            </ul>
          </div>

          <div style={section}>
            <h2 style={h2}>3. How Our Calculators Work</h2>
            <p style={p}>The tax calculations are performed in your browser using JavaScript. The calculator code does not submit the values in its fields to our application servers. Hosting logs and analytics may process technical information about page requests or usage, as described below. Values remain in page state until the page is reloaded or closed. Changing the state on the DoorDash calculator opens a state-specific page and clears the current inputs; the page asks for confirmation first if you have entered values.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>4. Cookies</h2>
            <p style={p}>GigWiseTax does not use advertising cookies or tracking pixels in the calculator. Vercel Analytics and third-party services may use technical mechanisms to provide their services; see Sections 5 and 6 and the providers' privacy policies. Partners you reach through sponsored links, and the Awin network that serves the banner on one guide page, may set their own cookies.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>5. Third-Party Services</h2>
            <p style={p}>We display clearly labelled sponsored links and, on a few guide and tool pages, one sponsored banner per page from third-party companies. Current partners: Community Tax and Online Check Writer through the Awin network, and Liberty Tax through Commission Junction (shown during filing season). When you click a sponsored link you leave GigWiseTax: the partner and its network may set their own cookies and measure the click, and we may earn a commission. The banner images on those pages are loaded from the Awin network, so Awin can see your IP address and browser details when such a page loads. GigWiseTax does not intentionally send calculator inputs or income values to these companies. Their handling of data is described in their own privacy policies.</p>
            <p style={p}>We use <strong>Vercel</strong> to host our website. Vercel may process standard request information, such as IP address, browser details, and requested pages, for hosting, security, and performance. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#B22234' }}>Vercel's Privacy Policy</a>.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>6. Analytics</h2>
            <p style={p}>Vercel Analytics is enabled to measure site usage. Vercel may process page-view, device, referral, and related technical telemetry under its own privacy terms. We do not send calculator field values to Analytics or receive tax amounts from these measurements. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#B22234' }}>Vercel's Privacy Policy</a>.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>7. Children's Privacy</h2>
            <p style={p}>GigWiseTax.com is not directed at children under 13. We do not knowingly collect information from children. Our tools are designed for adults who work in the U.S. gig economy.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>8. HTTPS & Security</h2>
            <p style={p}>GigWiseTax pages are served over HTTPS (TLS encryption). The calculator does not submit its financial input values to our application servers; if you follow an external link, that provider's privacy practices apply.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>9. Changes to This Policy</h2>
            <p style={p}>We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of GigWiseTax.com after changes constitutes acceptance of the revised policy.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>10. Contact Us</h2>
            <p style={p}>If you have questions about this privacy policy, please use our <Link href="/contact" style={{ color: '#B22234' }}>Contact page</Link>.</p>
          </div>

        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
          {[['Terms of Service','/terms'],['Contact','/contact'],['About','/about'],['← Home','/']].map(([l,h]) => (
            <Link key={l} href={h} style={{ fontSize: 13, color: '#8fa8c8', textDecoration: 'underline' }}>{l}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
