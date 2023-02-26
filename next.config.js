/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["", 'images.unsplash.com', 'cdn-icons-png.flaticon.com', 'images.prismic.io']
  }
}

module.exports = nextConfig
