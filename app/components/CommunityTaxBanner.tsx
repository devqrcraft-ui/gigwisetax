import { PARTNERS } from '@/lib/partners'

/**
 * Один баннер Community Tax (схвалений креатив Awin, 336x280) лише на сторінці-гіді для людей із боргом.
 * Не рендериться, поки PARTNERS.communityTax.enabled === false. Фіксовані width/height (без CLS), lazy-завантаження.
 * Увага: зображення вантажиться з awin1.com при перегляді, тому на сторінці має бути згадка в Privacy.
 */
const BANNER = { id: '4903999', width: 336, height: 280 }

export default function CommunityTaxBanner({ page }: { page: string }) {
  const p = PARTNERS.communityTax
  if (!p.enabled) return null
  const ref = page.replace(/[^a-z0-9-]/gi, '').slice(0, 40)
  const q = 's=' + BANNER.id + '&v=' + encodeURIComponent(p.mid) + '&q=' + encodeURIComponent(p.gid) + '&r=' + encodeURIComponent(p.affId)
  const href = 'https://www.awin1.com/cread.php?' + q + '&clickref=' + encodeURIComponent(ref)
  const src = 'https://www.awin1.com/cshow.php?' + q
  return (
    <aside aria-label="Sponsored banner" style={{ margin: '16px 0 0', textAlign: 'center' }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>Sponsored</div>
      <a href={href} target="_blank" rel="sponsored nofollow noopener noreferrer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          width={BANNER.width}
          height={BANNER.height}
          alt="Community Tax: tax resolution services (sponsored banner)"
          loading="lazy"
          decoding="async"
          style={{ maxWidth: '100%', height: 'auto', border: 0, borderRadius: 6 }}
        />
      </a>
    </aside>
  )
}
