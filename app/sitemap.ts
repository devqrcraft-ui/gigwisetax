import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.gigwisetax.com';

const platforms = [
  'doordash','uber','lyft','instacart','amazon-flex',
  'grubhub','etsy','airbnb','onlyfans','turo','walmart-spark',
  'fiverr','rover','taskrabbit','upwork',
];

const blogPosts = [
  'doordash-taxes-2026','tips-deduction-gig-workers-2026',
  'uber-tax-guide-2026','amazon-flex-tax-guide-2026',
  'instacart-shopper-taxes-2026','instacart-tax-deductions-2026','instacart-tax-guide-2026',
  'etsy-seller-taxes-2026',
  'home-office-deduction-gig-workers','s-corp-guide-gig-workers',
  'gig-worker-tax-deadlines-2026',
  'turo-host-taxes-2026',
  'walmart-spark-driver-taxes-2026','walmart-spark-tax-guide-2026','walmart-spark-taxes-2026',
  'w9-mistakes-gig-workers','w2-vs-1099-guide-2026',
  'airbnb-host-taxes-2026','airbnb-tax-deductions-2026',
  'amazon-flex-taxes-2026',
  'grubhub-driver-taxes-2026','grubhub-vs-doordash-taxes-2026','doordash-vs-uber-eats-taxes-2026',
  'best-apps-for-gig-workers-2026',
  'lyft-driver-taxes-2026',
  'mileage-rate-2026',
  'onlyfans-tax-guide-2026',
  'quarterly-taxes-gig-workers',
  'self-employment-tax-deductions-2026',
  'uber-eats-tax-guide-2026',
  'fiverr-taxes-2026',
  'etsy-taxes-2026',
  'best-tax-software-for-gig-workers-2026',
  'self-employment-tax-rate-2026',
  '1099-vs-w2-taxes-2026',
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
    { url: `${BASE_URL}/quarterly-tax-calculator-2026`,    lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/quarterly-reminder`,             lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/gig-worker-taxes-2026`,          lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/multi-platform-gig-tax-calculator-2026`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/employee-vs-contractor-quiz-2026`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${BASE_URL}/multi-app-gig-taxes-2026`,       lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/safe-harbor-quarterly-taxes`,    lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE_URL}/self-employment-tax-calculator-2026`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/1099-tax-calculator-2026`,          lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/about`,                              lastModified: now, changeFrequency: 'yearly'  as const, priority: 0.4 },
    { url: `${BASE_URL}/contact`,                            lastModified: now, changeFrequency: 'yearly'  as const, priority: 0.4 },
    { url: `${BASE_URL}/terms`,                              lastModified: now, changeFrequency: 'yearly'  as const, priority: 0.3 },
    { url: `${BASE_URL}/airbnb-tax-calculator-2026`,         lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/amazon-flex-tax-calculator-2026`,    lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/doordash-tax-calculator-2026`,       lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/etsy-tax-calculator-2026`,           lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/instacart-tax-calculator-2026`,      lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/lyft-tax-calculator-2026`,           lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/onlyfans-tax-calculator-2026`,       lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/uber-tax-calculator-2026`,           lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE_URL}/shipt`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
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
