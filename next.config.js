/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pancanal.com',
        port: '3000'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '3000'
      },
    ],
  },
}


module.exports = nextConfig
