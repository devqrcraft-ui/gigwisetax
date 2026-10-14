import { PARTNERS, awinLink } from '@/lib/partners'

/**
 * Згорнутий блок «Already behind on IRS payments?» (Community Tax через Awin).
 * Нічого не рендерить, поки PARTNERS.communityTax.enabled === false.
 * Розкриття поруч із посиланням (FTC; Awin-угода п. 2.6), rel="sponsored". Без логотипів (угода п. 8.1).
 */
export default function BehindOnTaxes({ page }: { page: string }) {
  const p = PARTNERS.communityTax
  if (!p.enabled) return null
  const href = awinLink(p, page)
  const a = { color: '#e8b84b', textDecoration: 'underline' } as const
  return (
    <aside
      aria-label="Sponsored: help with IRS tax debt"
      style={{ margin: '24px 0 0', padding: '14px 18px', borderRadius: 8, border: '1px solid rgba(232,184,75,0.35)', background: 'rgba(232,184,75,0.06)' }}
    >
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>Sponsored</div>
      <details>
        <summary style={{ cursor: 'pointer', fontSize: 15, fontWeight: 700, color: '#e8b84b' }}>Already behind on IRS payments?</summary>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', margin: '10px 0 8px' }}>
          If you already owe the IRS, you can contact the IRS directly about payment plans and other relief:{' '}
          <a style={a} href="https://www.irs.gov/payments/payment-plans-installment-agreements" target="_blank" rel="noopener noreferrer">IRS payment plans</a>.
          Some taxpayers prefer to hire a tax resolution company, which charges its own fees and may not suit every situation.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.7, margin: '0 0 8px' }}>
          <a style={a} href={href} target="_blank" rel="sponsored nofollow noopener noreferrer">Talk to a tax resolution company (sponsored)</a>
        </p>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
          Sponsored link: we may earn a commission if you sign up through it. GigWiseTax does not provide tax-resolution services, and this is not an endorsement or tax advice.
        </p>
      </details>
    </aside>
  )
}
