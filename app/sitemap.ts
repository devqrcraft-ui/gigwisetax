import { MetadataRoute } from 'next'
const PLATFORM_SLUGS = [
  'doordash','uber','etsy','onlyfans','instacart','airbnb','amazon-flex','lyft',
  'grubhub','walmart-spark','turo',
]
const STATE_SLUGS = [
  'alabama','alaska','arizona','arkansas','california','colorado','connecticut','delaware',
  'florida','georgia','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky',
  'louisiana','maine','maryland','massachusetts','michigan','minnesota','mississippi',
  'missouri','montana','nebraska','nevada','new-hampshire','new-jersey','new-mexico',
  'new-york','north-carolina','north-dakota','ohio','oklahoma','oregon','pennsylvania',
  'rhode-island','south-carolina','south-dakota','tennessee','texas','utah','vermont',
  'virginia','washington','west-virginia','wisconsin','wyoming','washington-dc',
]
const BLOG_SLUGS = [
  'doordash-taxes-2026','uber-tax-guide-2026','onlyfans-tax-guide-2026',
  'etsy-seller-taxes-2026','quarterly-taxes-gig-workers','airbnb-host-taxes-2026',
  'instacart-shopper-taxes-2026','w2-vs-1099-guide-2026','amazon-flex-taxes-2026',
  'mileage-rate-2026','grubhub-vs-doordash-taxes-2026','grubhub-driver-taxes-2026',
  'lyft-driver-taxes-2026','turo-host-taxes-2026','walmart-spark-taxes-2026',
  'instacart-tax-guide-2026','self-employment-tax-deductions-2026',
  'etsy-seller-tax-deductions-2025','doordash-taxes-2025-guide','w9-mistakes-gig-workers',
  's-corp-guide-gig-workers','1099-deadlines-2025','home-office-deduction-gig-workers',
  'gig-worker-tax-deadlines-2026',
]
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.gigwisetax.com'
  const d = (s: string) => new Date(s)
  const urls: MetadataRoute.Sitemap = [
    { url: base,                         lastModified: d('2026-03-26'), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/calculators`,        lastModified: d('2026-03-26'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/deadlines`,          lastModified: d('2026-03-26'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/blog`,               lastModified: d('2026-03-25'), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/deductions`,         lastModified: d('2026-03-24'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tax-penalty-finder`, lastModified: d('2026-03-20'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/s-corp-calculator`,  lastModified: d('2026-03-15'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/quarterly-reminder`, lastModified: d('2026-03-15'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`,              lastModified: d('2026-03-10'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`,            lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy`,            lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/terms`,              lastModified: d('2026-03-01'), changeFrequency: 'monthly', priority: 0.4 },
  ]

  // Platform pages — топ пріоритет, свіжі дати
  const platformDates: Record<string,string> = {
    'doordash':     '2026-03-26',
    'uber':         '2026-03-26',
    'onlyfans':     '2026-03-25',
    'etsy':         '2026-03-25',
    'instacart':    '2026-03-24',
    'airbnb':       '2026-03-24',
    'lyft':         '2026-03-23',
    'amazon-flex':  '2026-03-22',
    'grubhub':      '2026-03-20',
    'walmart-spark':'2026-03-20',
    'turo':         '2026-03-18',
  }
  for (const p of PLATFORM_SLUGS) {
    urls.push({ url: `${base}/${p}`, lastModified: d(platformDates[p] || '2026-03-20'), changeFrequency: 'monthly', priority: 0.9 })
    // State pages — розподілені дати
    STATE_SLUGS.forEach((s, i) => {
      const day = String(Math.min(28, 1 + (i % 25))).padStart(2, '0')
      const month = i < 25 ? '03' : '02'
      const year = '2026'
      urls.push({ url: `${base}/${p}/${s}`, lastModified: d(`${year}-${month}-${day}`), changeFrequency: 'monthly', priority: 0.7 })
    })
  }

  // Blog — розподілені дати
  const blogDates: Record<string,string> = {
    'doordash-taxes-2026':              '2026-03-24',
    'uber-tax-guide-2026':              '2026-03-23',
    'onlyfans-tax-guide-2026':          '2026-03-22',
    'etsy-seller-taxes-2026':           '2026-03-21',
    'quarterly-taxes-gig-workers':      '2026-03-20',
    'airbnb-host-taxes-2026':           '2026-03-19',
    'instacart-shopper-taxes-2026':     '2026-03-18',
    'w2-vs-1099-guide-2026':            '2026-03-17',
    'amazon-flex-taxes-2026':           '2026-03-16',
    'mileage-rate-2026':                '2026-03-15',
    'grubhub-vs-doordash-taxes-2026':   '2026-03-14',
    'grubhub-driver-taxes-2026':        '2026-03-13',
    'lyft-driver-taxes-2026':           '2026-03-12',
    'turo-host-taxes-2026':             '2026-03-11',
    'walmart-spark-taxes-2026':         '2026-03-10',
    'instacart-tax-guide-2026':         '2026-03-09',
    'self-employment-tax-deductions-2026': '2026-03-08',
    'etsy-seller-tax-deductions-2025':  '2026-03-07',
    'doordash-taxes-2025-guide':        '2026-03-06',
    'w9-mistakes-gig-workers':          '2026-03-05',
    's-corp-guide-gig-workers':         '2026-03-04',
    '1099-deadlines-2025':              '2026-03-03',
    'home-office-deduction-gig-workers':'2026-03-02',
    'gig-worker-tax-deadlines-2026':    '2026-03-01',
  }
  for (const b of BLOG_SLUGS) {
    urls.push({ url: `${base}/blog/${b}`, lastModified: d(blogDates[b] || '2026-03-10'), changeFrequency: 'monthly', priority: 0.8 })
  }
  return urls
}
