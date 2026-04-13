import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/doordash-tax-calculator-2026', destination: '/doordash', permanent: true },
      { source: '/uber-tax-calculator-2026', destination: '/uber', permanent: true },
      { source: '/airbnb-tax-calculator-2026', destination: '/airbnb', permanent: true },
      { source: '/etsy-tax-calculator-2026', destination: '/etsy', permanent: true },
      { source: '/instacart-tax-calculator-2026', destination: '/instacart', permanent: true },
      { source: '/lyft-tax-calculator-2026', destination: '/lyft', permanent: true },
      { source: '/onlyfans-tax-calculator-2026', destination: '/onlyfans', permanent: true },
      { source: '/amazon-flex-tax-calculator-2026', destination: '/amazon-flex', permanent: true },
      { source: '/1099-tax-calculator-2026', destination: '/1099-tax-calculator', permanent: true },
      { source: '/upwork', destination: '/calculators', permanent: true },
      { source: '/fiverr', destination: '/calculators', permanent: true },
      { source: '/onlyfans/district-of-columbia', destination: '/calculators/onlyfans/washington-dc', permanent: true },
      { source: '/instacart/district-of-columbia', destination: '/instacart/washington-dc', permanent: true },
      { source: '/doordash/district-of-columbia', destination: '/doordash/washington-dc', permanent: true },
      { source: '/uber/district-of-columbia', destination: '/uber/washington-dc', permanent: true },
      { source: '/lyft/district-of-columbia', destination: '/lyft/washington-dc', permanent: true },
      { source: '/amazon-flex/district-of-columbia', destination: '/amazon-flex/washington-dc', permanent: true },
      { source: '/grubhub/district-of-columbia', destination: '/grubhub/washington-dc', permanent: true },
      { source: '/airbnb/district-of-columbia', destination: '/airbnb/washington-dc', permanent: true },
      { source: '/turo/district-of-columbia', destination: '/turo/washington-dc', permanent: true },
      { source: '/walmart-spark/district-of-columbia', destination: '/walmart-spark/washington-dc', permanent: true },
      { source: '/etsy/district-of-columbia', destination: '/etsy/washington-dc', permanent: true },

    ];
  },
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, s-maxage=31536000, stale-while-revalidate=86400" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
      ],
    },
    {
      source: "/_next/static/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
  ],
};

export default nextConfig;
