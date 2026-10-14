/**
 * ЄДИНЕ ДЖЕРЕЛО ПАРТНЕРСЬКИХ ПОСИЛАНЬ gigwisetax.
 * enabled: false = блок нічого не рендерить. Вмикати ЛИШЕ коли:
 *   1) Community Tax письмово схвалив текст блоку (Awin-угода п. 7.3 і 8.1: лише авторизовані матеріали);
 *   2) підтверджена ставка комісії у Commission Groups;
 *   3) тариф Vercel дозволяє комерційне використання (Hobby лише для некомерційного).
 */
export interface AwinPartner {
  enabled: boolean
  awinMid: string
  awinAffId: string
  /** Необов'язкова цільова сторінка рекламодавця (параметр ued). */
  destination?: string
}

export const PARTNERS: { communityTax: AwinPartner } = {
  communityTax: {
    enabled: false,
    awinMid: '130537',
    awinAffId: '2898033',
  },
}

/** Awin-посилання з міткою сторінки (clickref) для звітів по сторінках. Дані калькулятора сюди НЕ передаються. */
export function awinLink(p: AwinPartner, clickref: string): string {
  const ref = clickref.replace(/[^a-z0-9-]/gi, '').slice(0, 40)
  let url = 'https://www.awin1.com/cread.php?awinmid=' + encodeURIComponent(p.awinMid) + '&awinaffid=' + encodeURIComponent(p.awinAffId)
  if (ref) url += '&clickref=' + encodeURIComponent(ref)
  if (p.destination) url += '&ued=' + encodeURIComponent(p.destination)
  return url
}
