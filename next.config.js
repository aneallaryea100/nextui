/** @type {import('next').NextConfig} */
//const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/account123/**',
        },
      ],
    },
  }
