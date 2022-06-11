/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.phenompeople.com", "picsum.photos"]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
