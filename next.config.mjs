/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.vercel-dns.com',
      },
      {
        protocol: 'https',
        hostname: 'zhipack.com',
      },
    ],
  },
};

export default nextConfig;
