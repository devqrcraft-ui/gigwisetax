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
  'instacart-shopper-taxes-2026','w2-vs-1099-guide-2026',
  'amazon-flex-taxes-2026','mileage-rate-2026','grubhub-vs-doordash-taxes-2026',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.gigwisetax.com'
  const now  = new Date('2026-03-01')

  const urls: MetadataRoute.Sitemap = [
    { url: base,                  lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/calculators`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/deadlines`,   lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/blog`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/about`,       lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/privacy`,     lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/terms`,       lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
  ]

  for (const p of PLATFORM_SLUGS) {
    urls.push({ url: `${base}/${p}`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 })
    for (const s of STATE_SLUGS) {
      urls.push({ url: `${base}/${p}/${s}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 })
    }
  }

  for (const b of BLOG_SLUGS) {
    urls.push({ url: `${base}/blog/${b}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 })
  }

  return urls
  // Total: 7 core + 11 platforms + 561 state pages + 11 blog = 590 URLs
}
