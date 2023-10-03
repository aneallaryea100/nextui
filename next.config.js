/** @type {import('next').NextConfig} */
//const nextConfig = {}

const webpack = require("webpack");

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
    // async redirects() {
    //   return [
    //     {
    //       source: '/centerofart/:relatedWorkTitle',
    //       destination: '/centerofart/[centerofartname]',
    //       permanent: true,
    //     },
    //   ];
    // },
  }
