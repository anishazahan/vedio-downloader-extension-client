/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ["i.ytimg.com"],
  },
};

module.exports = nextConfig;
