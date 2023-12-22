/** @type {import('next').NextConfig} */
//const nextConfig = {}

const webpack = require("webpack");

module.exports = {
  images: {
    domains: ['source.unsplash.com'], // Add the domain(s) you want to allow here
  },
    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: 'https',
    //       hostname: 'assets.example.com',
    //       port: '',
    //       pathname: '/account123/**',
    //     },
    //   ],
    // },
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
