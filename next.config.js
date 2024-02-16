/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  //  assetPrefix: "images",
  output: 'export',
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
