import Link from 'next/link'
import { PARTNERS, awinClick, awinDeep } from '@/lib/partners'

/**
 * Реклама Community Tax (Awin). Нічого не рендерить, поки PARTNERS.communityTax.enabled === false.
 * - BehindOnTaxes: відкритий блок: заголовок, текст із вбудованим посиланням, розкриття (FTC) ПЕРЕД кнопкою, помітна кнопка.
 * - SponsoredInline: одне вбудоване посилання в тексті сторінки + позначка (sponsored).
 * Тексти посилань = схвалені креативи Awin (не змінювати). Анімація лише при prefers-reduced-motion: no-preference.
 */
const CSS = [
  '.gtx-cta{display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;width:100%;box-sizing:border-box;text-align:center;background:#e8b84b;color:#07111F;font-weight:800;font-size:18px;line-height:1.3;padding:18px 20px;min-height:58px;border-radius:10px;text-decoration:none;border:2px solid #e8b84b;transition:transform .15s ease,background .15s ease}',
  '.gtx-cta:hover{background:#f3c95f;border-color:#f3c95f;transform:translateY(-1px)}',
  '.gtx-cta::after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;pointer-events:none;opacity:0;background:linear-gradient(100deg,transparent,rgba(255,255,255,0.5),transparent);transform:skewX(-20deg)}',
  '@keyframes gtxshine{0%,55%{left:-60%}100%{left:140%}}',
  '.gtx-cta:focus-visible,.gtx-inline:focus-visible{outline:3px solid #ffffff;outline-offset:3px}',
  '.gtx-inline{color:#e8b84b;font-weight:700;text-decoration:underline;text-underline-offset:3px}',
  '.gtx-arrow{display:inline-block;margin-left:6px}',
  '@keyframes gtxpulse{0%,100%{box-shadow:0 0 0 0 rgba(232,184,75,0.55)}60%{box-shadow:0 0 0 10px rgba(232,184,75,0)}}',
  '@keyframes gtxnudge{0%,100%{transform:translateX(0)}50%{transform:translateX(4px)}}',
  '@media (prefers-reduced-motion: no-preference){.gtx-cta{animation:gtxpulse 2.6s ease-in-out infinite}.gtx-cta::after{opacity:1;animation:gtxshine 4.5s ease-in-out infinite}.gtx-arrow{animation:gtxnudge 1.6s ease-in-out infinite}}',
].join('')

function SponsoredStyles() {
  return <style>{CSS}</style>
}

const note = { fontSize: 13, color: 'rgba(255,255,255,0.7)' } as const

export function SponsoredInline({ page, kind }: { page: string; kind: 'resolution' | 'consultation' }) {
  const p = PARTNERS.communityTax
  if (!p.enabled) return null
  const href = kind === 'resolution' ? awinDeep(p, page) : awinClick(p, p.creatives.consultation, page)
  const text = kind === 'resolution' ? p.creatives.resolution.text : p.creatives.consultation.text
  return (
    <>
      <SponsoredStyles />
      <a className="gtx-inline" href={href} target="_blank" rel="sponsored nofollow noopener noreferrer">{text}</a>{' '}
      <span style={note}>(sponsored)</span>
    </>
  )
}

export default function BehindOnTaxes({ page, guideLink = true }: { page: string; guideLink?: boolean }) {
  const p = PARTNERS.communityTax
  if (!p.enabled) return null
  const a = { color: '#e8b84b', textDecoration: 'underline' } as const
  return (
    <aside
      aria-label="Sponsored: help with IRS tax debt"
      style={{ margin: '24px 0 0', padding: '16px 18px', borderRadius: 10, border: '1px solid rgba(232,184,75,0.45)', background: 'rgba(232,184,75,0.07)' }}
    >
      <SponsoredStyles />
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>Sponsored</div>
      <div style={{ fontSize: 17, fontWeight: 800, color: '#e8b84b' }}>Already behind on IRS payments?</div>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', margin: '8px 0 8px' }}>
        If you already owe the IRS, you can contact the IRS directly about payment plans and other relief:{' '}
        <a style={a} href="https://www.irs.gov/payments/payment-plans-installment-agreements" target="_blank" rel="noopener noreferrer">IRS payment plans</a>.
        Some taxpayers prefer professional help. Community Tax, a private company that is not part of the IRS, offers a free consultation to explain your options, and paid services may follow.{' '}
        <SponsoredInline page={page} kind="resolution" />
      </p>
      <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', margin: '0 0 12px' }}>
        <strong>Advertising disclosure:</strong> GigWiseTax may earn a commission if you become a Community Tax customer through the links on this page. This is not an endorsement or tax advice, and GigWiseTax does not provide tax-resolution services.
      </p>
      <a className="gtx-cta" href={awinClick(p, p.creatives.consultation, page)} target="_blank" rel="sponsored nofollow noopener noreferrer">
        {p.creatives.consultation.text}<span className="gtx-arrow" aria-hidden="true">→</span>
      </a>
      <div style={{ ...note, textAlign: 'center', marginTop: 6 }}>(sponsored link)</div>
      {guideLink && (
        <p style={{ fontSize: 14, lineHeight: 1.7, margin: '12px 0 0' }}>
          <Link style={a} href="/gig-worker-owes-irs">Read our guide: what to do if you owe the IRS</Link>
        </p>
      )}
    </aside>
  )
}
