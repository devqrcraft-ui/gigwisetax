'use client'

import { useEffect, useState } from 'react'

// CJ: LibertyTax (CID 3835168), сайт GigWiseTax (PID 101700769), посилання 15485942.
// НЕ змінювати PID на 101700777: це інший сайт (1099Deductions).
const PARTNER_URL = 'https://www.tkqlhce.com/click-101700769-15485942'
// Текст надано CJ (умови LibertyTax, п. 1.2: лише наданий матеріал).
const PARTNER_LINK_TEXT = 'Start Your Online Tax Filing at LibertyTax.com'

// Онлайн-сервіс працює приблизно з 1 січня до 15 жовтня (умови програми).
function inSeason(d: Date): boolean {
  const month = d.getMonth() // 0 = січень
  const day = d.getDate()
  return month < 9 || (month === 9 && day <= 15)
}

type Props = {
  /** Мітка сторінки для звітів CJ, наприклад "uber". Лише латиниця, цифри, дефіс. */
  sid: string
}

export default function PartnerCTA({ sid }: Props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(inSeason(new Date()))
  }, [])

  if (!show) return null

  const safeSid = sid.replace(/[^a-z0-9-]/gi, '').slice(0, 40)
  const href = PARTNER_URL + (safeSid ? '?sid=' + encodeURIComponent(safeSid) : '')

  return (
    <aside
      aria-label="Sponsored link"
      style={{
        marginTop: 20,
        padding: '14px 18px',
        borderRadius: 8,
        border: '1px solid rgba(232,184,75,0.35)',
        background: 'rgba(232,184,75,0.06)',
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1,
          color: '#e8b84b',
          marginBottom: 6,
        }}
      >
        SPONSORED
      </div>
      <p style={{ margin: '0 0 10px', fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
        Need to file your tax return? One option:
      </p>
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 48, maxWidth: 420, background: '#e8b84b', color: '#07111F', fontWeight: 800, fontSize: 15, lineHeight: 1.3, padding: '12px 18px', borderRadius: 8, textDecoration: 'none',
        }}
      >
        {PARTNER_LINK_TEXT}
      </a>
      <p style={{ margin: '12px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.72)', lineHeight: 1.55 }}>
        Sponsored link. We may earn a commission if you use it, at no extra cost to you.
        GigWiseTax is an independent site and is not operated by Liberty Tax.{' '}
        <a href="/about" style={{ color: 'rgba(255,255,255,0.7)' }}>How we stay free</a>
      </p>
    </aside>
  )
}
