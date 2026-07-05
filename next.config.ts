import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── -2026 URL aliases ──
      { source: '/doordash-tax-calculator-2026', destination: '/doordash', permanent: true },
      { source: '/uber-tax-calculator-2026', destination: '/uber', permanent: true },
      { source: '/airbnb-tax-calculator-2026', destination: '/airbnb', permanent: true },
      { source: '/etsy-tax-calculator-2026', destination: '/etsy', permanent: true },
      { source: '/instacart-tax-calculator-2026', destination: '/instacart', permanent: true },
      { source: '/lyft-tax-calculator-2026', destination: '/lyft', permanent: true },
      { source: '/onlyfans-tax-calculator-2026', destination: '/onlyfans', permanent: true },
      { source: '/amazon-flex-tax-calculator-2026', destination: '/amazon-flex', permanent: true },
      // ── blog redirects ──
      { source: '/blog/best-image-compressor-for-mac', destination: '/', permanent: true },
      { source: '/blog/doordash-taxes-2025-guide', destination: '/blog/doordash-taxes-2026', permanent: true },
      { source: '/blog/etsy-seller-tax-deductions-2025', destination: '/blog/etsy-seller-taxes-2026', permanent: true },
      { source: '/blog/1099-deadlines-2025', destination: '/blog/gig-worker-tax-deadlines-2026', permanent: true },
      // ── /district-of-columbia → /washington-dc (all platforms) ──
      { source: '/onlyfans/district-of-columbia', destination: '/onlyfans/washington-dc', permanent: true },
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
      { source: '/shipt/district-of-columbia', destination: '/shipt/washington-dc', permanent: true },
      { source: '/1099-tax-calculator/district-of-columbia', destination: '/1099-tax-calculator/washington-dc', permanent: true },
      { source: '/fiverr/district-of-columbia', destination: '/fiverr/washington-dc', permanent: true },
      { source: '/rover/district-of-columbia', destination: '/rover/washington-dc', permanent: true },
      { source: '/taskrabbit/district-of-columbia', destination: '/taskrabbit/washington-dc', permanent: true },
      // ── compress pages → home ──
      { source: '/compress-to-20kb', destination: '/', permanent: true },
      { source: '/compress-to-50kb', destination: '/', permanent: true },
      { source: '/compress-for-wordpress', destination: '/', permanent: true },
      { source: '/visa-photo-compressor', destination: '/', permanent: true },
      // ── other ──
      { source: '/year', destination: '/', permanent: true },
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
        { key: "X-Robots-Tag", value: "noindex, nofollow" },
      ],
    },
    {
      source: "/favicon.ico",
      headers: [
        { key: "X-Robots-Tag", value: "noindex" },
      ],
    },
    {
      source: "/ai-chat-widget-final.js",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
  ],
};

export default nextConfig;
