/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cms.tbgs.nl', 'tbgs.nl'], // WordPress image domains
    formats: ['image/webp', 'image/avif'],
  },
  async rewrites() {
    return [
      // API rewrites for backward compatibility
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
  async redirects() {
    return [
      // Legacy redirects to new structure
      {
        source: '/eindhoven',
        destination: '/nl/eindhoven',
        permanent: true,
      },
      {
        source: '/nuenen', 
        destination: '/nl/nuenen',
        permanent: true,
      },
      {
        source: '/veldhoven',
        destination: '/nl/veldhoven', 
        permanent: true,
      },
      {
        source: '/best',
        destination: '/nl/best',
        permanent: true,
      },
      {
        source: '/lommel',
        destination: '/be/locaties/lommel',
        permanent: true,
      },
    ];
  },
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL || 'https://cms.tbgs.nl/graphql',
    REVALIDATE_SECRET: process.env.REVALIDATE_SECRET,
  },
};

module.exports = nextConfig;