/** @type {import('next').NextConfig} */
const { hostname } = new URL("https://panel.oxinmart.com");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [`${hostname}`],
  },
};

module.exports = nextConfig;
