import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — GigWiseTax.com',
  description: 'Terms of Service for GigWiseTax.com. Free tax estimation tool for U.S. gig workers. Not tax advice.',
}

export default function TermsPage() {
  const section = { marginBottom: 32 }
  const h2 = { fontSize: 18, fontWeight: 800, color: 'rgba(255,255,255,0.9)', marginBottom: 12, marginTop: 0 }
  const p  = { fontSize: 14, color: '#374151', lineHeight: 1.8, marginBottom: 12 }
  const li = { fontSize: 14, color: '#374151', lineHeight: 1.8, marginBottom: 8 }

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh' }}>

      <div style={{ background: 'linear-gradient(135deg,#1e2d5a,#0d1b3e)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 28px' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginBottom: 10 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>Home</Link> › Terms of Service
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1.2, margin: 0 }}> Terms of Service</h1>
          <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 13, marginTop: 10, marginBottom: 0 }}>Last updated: January 1, 2026 &nbsp;·&nbsp; Effective: January 1, 2026</p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 64px' }}>

        <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 8, padding: '16px 20px', marginBottom: 32 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#92400e', marginBottom: 6 }}> Important Disclaimer</div>
          <div style={{ fontSize: 14, color: '#92400e', lineHeight: 1.7 }}>
            GigWiseTax.com provides <strong>estimates only</strong>. This is NOT tax advice. Results are for informational purposes only. Always consult a licensed CPA or tax professional before filing. Individual tax situations vary significantly.
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #d8dce6', borderRadius: 8, padding: 32, boxShadow: '0 1px 6px rgba(0,0,0,.05)' }}>

          <div style={section}>
            <h2 style={h2}>1. Acceptance of Terms</h2>
            <p style={p}>By accessing or using GigWiseTax.com ("the Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>2. Description of Service</h2>
            <p style={p}>GigWiseTax.com provides free, browser-based tax estimation tools for U.S. independent contractors and gig economy workers. The Site is provided for informational and educational purposes only.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>3. Not Tax Advice — Important Limitation</h2>
            <p style={p}>The calculations and information provided on GigWiseTax.com are:</p>
            <ul style={{ paddingLeft: 24 }}>
              <li style={li}><strong>Estimates only</strong> — not precise tax calculations</li>
              <li style={li}><strong>Not tax advice</strong> — we are not a licensed tax professional or CPA</li>
              <li style={li}><strong>Not legal advice</strong> — we are not attorneys</li>
              <li style={li}><strong>Not a substitute</strong> for professional tax preparation services</li>
              <li style={li}><strong>Based on publicly available IRS data</strong> — actual tax liability depends on many individual factors not captured by our calculators</li>
            </ul>
            <p style={p}>We strongly recommend consulting a licensed CPA, Enrolled Agent, or tax attorney for your specific tax situation, especially if you have complex income sources, significant deductions, or business entities.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>4. Accuracy of Information</h2>
            <p style={p}>We make reasonable efforts to keep tax rates and IRS rules current. However, tax law changes frequently. GigWiseTax.com does not guarantee that all information is current, accurate, or complete. The IRS website (irs.gov) is the authoritative source for all U.S. federal tax rules.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>5. No Warranty</h2>
            <p style={p}>THE SITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>6. Limitation of Liability</h2>
            <p style={p}>TO THE MAXIMUM EXTENT PERMITTED BY LAW, GIGWISETAX.COM SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO TAX PENALTIES, INTEREST, OR UNDERPAYMENT ARISING FROM RELIANCE ON OUR CALCULATORS.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>7. Third-Party Links & Sponsors</h2>
            <p style={p}>GigWiseTax.com displays sponsored links to third-party services (TurboTax, QuickBooks, H&R Block, etc.). We may earn affiliate commissions from these links. We are not responsible for the accuracy, policies, or services of any third-party website.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>8. Intellectual Property</h2>
            <p style={p}>All content on GigWiseTax.com — including calculator logic, text, and design — is the intellectual property of GigWiseTax.com. You may not copy, reproduce, or redistribute our content without written permission.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>9. Governing Law</h2>
            <p style={p}>These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law provisions.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>10. Changes to Terms</h2>
            <p style={p}>We reserve the right to modify these Terms at any time. The "Last updated" date reflects the most recent revision. Continued use of the Site constitutes acceptance of the modified Terms.</p>
          </div>

          <div style={section}>
            <h2 style={h2}>11. Contact</h2>
            <p style={p}>For questions about these Terms, use our <Link href="/contact" style={{ color: '#B22234' }}>Contact page</Link>.</p>
          </div>

        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
          {[['Privacy Policy','/privacy'],['Contact','/contact'],['About','/about'],['← Home','/']].map(([l,h]) => (
            <Link key={l} href={h} style={{ fontSize: 13, color: '#6c757d', textDecoration: 'underline' }}>{l}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
