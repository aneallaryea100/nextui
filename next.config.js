/** @type {import('next').NextConfig} */
//const nextConfig = {}

const webpack = require("webpack");

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontendNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

module.exports = withPWA({
  images: {
    domains: ['source.unsplash.com'], // Add the domain(s) you want to allow here
  },

  })
