const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/homepage",
  output: "standalone",
  swcMinify: false,
  images: {
    domains: ["cdn.jsdelivr.net"],
    unoptimized: true,
  },
  i18n,
};

module.exports = nextConfig;
