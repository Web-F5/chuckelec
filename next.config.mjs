/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',          // ← empty for root deployment
  assetPrefix: '',       // ← empty for root deployment
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
