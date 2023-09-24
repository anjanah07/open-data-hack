/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["tableland"],
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
