import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — GigWiseTax.com',
  description: 'Privacy policy for GigWiseTax.com. We store no personal data. No registration required. Learn how we handle your information.',
}

export default function PrivacyPage() {
  const section = { marginBottom: 32 }
  const h2 = { fontSize: 18, fontWeight: 800, color: '#1a1a2e', marginBottom: 12, marginTop: 0 }
  const p  = { fontSize: 14, color: '#374151', lineHeight: 1.8, marginBottom: 12 }
  const li = { fontSize: 14, color: '#374151', lineHeight: 1.8, marginBottom: 8 }

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 10 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link> › Privacy Policy
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: 0 }}>🔒 Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, marginTop: 10, marginBottom: 0 }}>Last updated: January 1, 2026 &nbsp;·&nbsp; Effective: January 1, 2026</p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px' }}>

        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', marginBottom: 32 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#166534', marginBottom: 6 }}>✅ The Short Version</div>
          <div style={{ fontSize: 14, color: '#166534', lineHeight: 1.7 }}>
            GigWiseTax.com does <strong>not</strong> collect, store, or transmit any personal data. All calculations run entirely in your browser. We have no user accounts. We cannot see your income or tax figures — ever.
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 8, padding: 32, boxShadow: '0 1px 6px rgba(0,0,0,.05)' }}>

          <div style={section}>
            <h2 style={h2}>1. Who We Are</h2>
            <p style={p}>GigWiseTax.com is an independent, free tax estimation tool for U.S. gig economy workers. We are not affiliated with the IRS, any U.S. government agency, TurboTax, QuickBooks, or any tax preparation company.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>2. Information We Do NOT Collect</h2>
            <p style={p}>We do not collect any of the following:</p>
            <ul style={{ paddingLeft: 24 }}>
              {[
                'Your name, email address, or contact information',
                'Your income, tax figures, or financial data entered into our calculators',
                'Your Social Security Number or any government ID',
                'Your precise location (only the state you select in the calculator dropdown)',
                'Payment or credit card information',
              ].map(item => <li key={item} style={li}>{item}</li>)}
            </ul>
          </div>

          <div style={section}>
            <h2 style={h2}>3. How Our Calculators Work</h2>
            <p style={p}>All tax calculations on GigWiseTax.com are performed entirely client-side — meaning they happen in your web browser using JavaScript. The numbers you enter into our calculator fields are never sent to our servers. When you close your browser tab, all data is gone permanently.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>4. Cookies</h2>
            <p style={p}>We use only <strong>functional cookies</strong> that are strictly necessary for the website to operate. We do not use advertising cookies, tracking pixels, or any third-party profiling. The cookies we may use include:</p>
            <ul style={{ paddingLeft: 24 }}>
              <li style={li}><strong>Session cookies</strong> — temporary and deleted when you close your browser</li>
              <li style={li}><strong>Preference cookies</strong> — may store your selected state or filing status locally in your browser (not transmitted to us)</li>
            </ul>
          </div>

          <div style={section}>
            <h2 style={h2}>5. Third-Party Services</h2>
            <p style={p}>We display sponsored advertisements from third-party companies (TurboTax, QuickBooks, H&R Block). When you click these links, you leave GigWiseTax.com and are subject to those companies' privacy policies. We may receive affiliate compensation for clicks or purchases.</p>
            <p style={p}>We use <strong>Vercel</strong> to host our website. Vercel may collect standard server access logs (IP address, browser type, pages visited) for security and performance. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#B22234' }}>Vercel's Privacy Policy</a>.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>6. Analytics</h2>
            <p style={p}>We may use privacy-respecting analytics (such as aggregate page view counts) to understand which calculators are most useful. Any analytics we use do not track individual users and do not include personally identifiable information.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>7. Children's Privacy</h2>
            <p style={p}>GigWiseTax.com is not directed at children under 13. We do not knowingly collect information from children. Our tools are designed for adults who work in the U.S. gig economy.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>8. HTTPS & Security</h2>
            <p style={p}>All pages on GigWiseTax.com are served over HTTPS (TLS encryption). Since we do not transmit your financial data, there is no sensitive data at risk of interception.</p>
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
            <Link key={l} href={h} style={{ fontSize: 13, color: '#6c757d', textDecoration: 'underline' }}>{l}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
