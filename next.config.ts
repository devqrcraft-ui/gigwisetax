import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.gigwisetax.com' }],
        destination: 'https://gigwisetax.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
