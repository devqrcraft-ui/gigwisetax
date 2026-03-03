// app/lib/seo.ts
// SEO helpers for consistent meta tags across all pages

export const SITE_NAME = 'GigWiseTax';
export const SITE_URL = 'https://www.gigwisetax.com';
export const SITE_DESC = 'Free self-employment tax calculator for gig workers. All 51 states. No signup required.';

export function calcTitle(platform: string, state?: string) {
  if (state) {
    return `${platform} Tax Calculator — ${state} 2026 | ${SITE_NAME}`;
  }
  return `${platform} Tax Calculator 2026 — Free, No Signup | ${SITE_NAME}`;
}

export function calcDescription(platform: string, state?: string, rate?: number) {
  const taxInfo = rate === 0
    ? 'no state income tax'
    : rate ? `${(rate * 100).toFixed(2).replace(/\.?0+$/, '')}% state income tax`
    : 'all 51 states';

  if (state) {
    return `Free ${platform} tax calculator for ${state} (${taxInfo}). Calculate self-employment tax (15.3%), federal income tax, and quarterly payments for 2026. No signup required.`;
  }
  return `Free ${platform} tax calculator for 2026. Calculate self-employment tax (15.3%), state income tax for all 51 states, and quarterly estimated payments. No registration required.`;
}
