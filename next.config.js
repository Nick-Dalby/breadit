/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // add urls to whitelist domains
  },
}

module.exports = nextConfig
