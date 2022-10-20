/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "static.nike.com",
      "images.pexels.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
