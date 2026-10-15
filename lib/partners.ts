/**
 * ЄДИНЕ ДЖЕРЕЛО ПАРТНЕРСЬКИХ ПОСИЛАНЬ gigwisetax.
 * enabled: false = блок нічого не рендерить. Вмикати лише після рішення щодо тарифу Vercel
 * (Hobby = лише некомерційне використання) і коли готові до роботи з рекламодавцем.
 *
 * Тексти та посилання скопійовані з Awin → My Creative → Community Tax (схвалені матеріали, угода п. 7.3 / 8.1).
 * Не змінювати anchor-тексти: вони мають збігатися зі схваленими.
 * Комісія $500 за транзакцію і сторінка /tax-resolution/ підтверджені листом M. Olaru від 15.10.2026.
 */
export interface AwinCreative {
  linkId: string
  /** Точний схвалений текст посилання. */
  text: string
}

export interface AwinPartner {
  enabled: boolean
  mid: string
  affId: string
  gid: string
  /** Сторінка, яку рекомендує рекламодавець (лист від 15.10.2026). */
  landing: string
  creatives: { resolution: AwinCreative; consultation: AwinCreative }
}

export const PARTNERS: { communityTax: AwinPartner } = {
  communityTax: {
    enabled: false,
    mid: '130537',
    affId: '2898033',
    gid: '615820',
    landing: 'https://www.communitytax.com/tax-resolution/',
    creatives: {
      resolution: { linkId: '4928694', text: 'Learn more about tax resolution services here!' },
      consultation: { linkId: '4928693', text: 'Schedule a FREE Tax Consultation Now!' },
    },
  },
}

/** Awin text-link (awclick) з міткою сторінки clickref. Дані калькулятора в посилання НЕ передаються. */
export function awinClick(p: AwinPartner, c: AwinCreative, clickref: string): string {
  const ref = clickref.replace(/[^a-z0-9-]/gi, '').slice(0, 40)
  return (
    'https://www.awin1.com/awclick.php?gid=' + encodeURIComponent(p.gid) +
    '&mid=' + encodeURIComponent(p.mid) +
    '&awinaffid=' + encodeURIComponent(p.affId) +
    '&linkid=' + encodeURIComponent(c.linkId) +
    '&clickref=' + encodeURIComponent(ref)
  )
}

/** Глибоке Awin-посилання (cread) на рекомендовану сторінку рекламодавця з міткою clickref. */
export function awinDeep(p: AwinPartner, clickref: string): string {
  const ref = clickref.replace(/[^a-z0-9-]/gi, '').slice(0, 40)
  return (
    'https://www.awin1.com/cread.php?awinmid=' + encodeURIComponent(p.mid) +
    '&awinaffid=' + encodeURIComponent(p.affId) +
    '&clickref=' + encodeURIComponent(ref) +
    '&ued=' + encodeURIComponent(p.landing)
  )
}
