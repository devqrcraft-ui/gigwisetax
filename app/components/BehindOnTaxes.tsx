import { PARTNERS, awinClick, awinDeep } from '@/lib/partners'

/**
 * Компактний ВІДКРИТИЙ блок «Already behind on IRS payments?» (Community Tax через Awin). Не ховається в <details>: схований блок майже не отримує кліків.
 * Нічого не рендерить, поки PARTNERS.communityTax.enabled === false.
 * Тексти посилань = схвалені креативи Awin; розкриття (sponsored) поруч, rel="sponsored". Без логотипів і банерів.
 */
export default function BehindOnTaxes({ page }: { page: string }) {
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
          Some taxpayers prefer to hire a tax resolution company. Community Tax offers a free consultation to explain your options, and paid services may follow.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.9, margin: '0 0 8px' }}>
          <a style={a} href={awinDeep(p, page)} target="_blank" rel="sponsored nofollow noopener noreferrer">{p.creatives.resolution.text}</a>{' '}
          <span style={label}>(sponsored)</span>
          <br />
          <a style={a} href={awinClick(p, p.creatives.consultation, page)} target="_blank" rel="sponsored nofollow noopener noreferrer">{p.creatives.consultation.text}</a>{' '}
          <span style={label}>(sponsored)</span>
        </p>
        <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
          Sponsored links: we may earn a commission if you sign up through them. GigWiseTax does not provide tax-resolution services, and this is not an endorsement or tax advice.
        </p>
      </div>
    </aside>
  )
}
