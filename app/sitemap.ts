import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.gigwisetax.com';

const platforms = [
  'doordash','uber','lyft','instacart','amazon-flex',
  'grubhub','etsy','airbnb','onlyfans','turo','walmart-spark',
];

const blogPosts = [
  'doordash-taxes-2025-guide','doordash-taxes-2026',
  'uber-tax-guide-2026','instacart-shopper-taxes-2026',
  'etsy-seller-tax-deductions-2025','etsy-seller-taxes-2026',
  'home-office-deduction-gig-workers','s-corp-guide-gig-workers',
  'gig-worker-tax-deadlines-2026','1099-deadlines-2025',
  'turo-host-taxes-2026','walmart-spark-driver-taxes-2026',
  'w9-mistakes-gig-workers',
];

const states = [
  'alabama','alaska','arizona','arkansas','california','colorado',
  'connecticut','delaware','florida','georgia','hawaii','idaho',
  'illinois','indiana','iowa','kansas','kentucky','louisiana',
  'maine','maryland','massachusetts','michigan','minnesota',
  'mississippi','missouri','montana','nebraska','nevada',
  'new-hampshire','new-jersey','new-mexico','new-york',
  'north-carolina','north-dakota','ohio','oklahoma','oregon',
  'pennsylvania','rhode-island','south-carolina','south-dakota',
  'tennessee','texas','utah','vermont','virginia','washington',
  'west-virginia','wisconsin','wyoming','washington-dc',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core = [
    { url: BASE_URL,                                      lastModified: now, changeFrequency: 'weekly'  as const, priority: 1.0 },
    { url: `${BASE_URL}/calculators`,                    lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/deadlines`,                      lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/deductions`,                     lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/blog`,                           lastModified: now, changeFrequency: 'weekly'  as const, priority: 0.8 },
    { url: `${BASE_URL}/tax-penalty-finder`,             lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/s-corp-calculator`,              lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/quarterly-reminder`,             lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/gig-worker-taxes-2026`,          lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/multi-app-gig-taxes-2026`,       lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/safe-harbor-quarterly-taxes`,    lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/self-employment-tax-calculator-2026`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/how-we-calculate-gig-taxes`,     lastModified: now, changeFrequency: 'yearly'  as const, priority: 0.5 },
    { url: `${BASE_URL}/privacy`,                        lastModified: now, changeFrequency: 'yearly'  as const, priority: 0.3 },
  ];

  const platformPages = platforms.flatMap(p => [
    { url: `${BASE_URL}/${p}`,                          lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    ...states.map(s => ({
      url: `${BASE_URL}/${p}/${s}`,
      lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6,
    })),
  ]);

  const blogPages = blogPosts.map(slug => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7,
  }));


  const stateCalcs = states.map(s => ({
    url: `${BASE_URL}/1099-tax-calculator/${s}`,
    lastModified: now, changeFrequency: 'monthly' as const, priority: 0.65,
  }));

  return [...core, ...platformPages, ...blogPages, ...stateCalcs];
}
