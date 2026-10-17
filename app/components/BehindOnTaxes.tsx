import Link from 'next/link'
import { PARTNERS, awinClick, awinDeep } from '@/lib/partners'

/**
 * Компактний ВІДКРИТИЙ блок «Already behind on IRS payments?» (Community Tax через Awin).
 * Нічого не рендерить, поки PARTNERS.communityTax.enabled === false.
 * Тексти посилань = схвалені креативи Awin. Розкриття (FTC) стоїть ПЕРЕД посиланнями, rel="sponsored". Без логотипів.
 * guideLink=false вимикає посилання на гід (на самій сторінці гіда).
 */
export default function BehindOnTaxes({ page, guideLink = true }: { page: string; guideLink?: boolean }) {
  const p = PARTNERS.communityTax
  if (!p.enabled) return null
  const a = { color: '#e8b84b', textDecoration: 'underline' } as const
  const label = { fontSize: 13, color: 'rgba(255,255,255,0.7)' } as const
  return (
    <aside
      aria-label="Sponsored: help with IRS tax debt"
      style={{ margin: '24px 0 0', padding: '14px 18px', borderRadius: 8, border: '1px solid rgba(232,184,75,0.35)', background: 'rgba(232,184,75,0.06)' }}
    >
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>Sponsored</div>
      <div>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#e8b84b' }}>Already behind on IRS payments?</div>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', margin: '8px 0 8px' }}>
          If you already owe the IRS, you can contact the IRS directly about payment plans and other relief:{' '}
          <a style={a} href="https://www.irs.gov/payments/payment-plans-installment-agreements" target="_blank" rel="noopener noreferrer">IRS payment plans</a>.
          Some taxpayers prefer professional help. Community Tax, a private company that is not part of the IRS, offers a free consultation to explain your options, and paid services may follow.
        </p>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', margin: '0 0 8px' }}>
          <strong>Advertising disclosure:</strong> GigWiseTax may earn a commission if you become a Community Tax customer through the links below. This is not an endorsement or tax advice, and GigWiseTax does not provide tax-resolution services.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.9, margin: '0 0 8px' }}>
          <a style={a} href={awinDeep(p, page)} target="_blank" rel="sponsored nofollow noopener noreferrer">{p.creatives.resolution.text}</a>{' '}
          <span style={label}>(sponsored)</span>
          <br />
          <a style={a} href={awinClick(p, p.creatives.consultation, page)} target="_blank" rel="sponsored nofollow noopener noreferrer">{p.creatives.consultation.text}</a>{' '}
          <span style={label}>(sponsored)</span>
        </p>
        {guideLink && (
          <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0 }}>
            <Link style={a} href="/gig-worker-owes-irs">Read our guide: what to do if you owe the IRS</Link>
          </p>
        )}
      </div>
    </aside>
  )
}
