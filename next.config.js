/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    domains: [
      "basket-12.wb.ru",
      "img.freepik.com",
      "logo.com",
      "cheber-bucket.s3.eu-central-1.amazonaws.com",
      "ak-soft.s3.eu-central-1.amazonaws.com",
      "user-images.githubusercontent.com",
      "localhost:3000",
      "dummyimage.com",
      "images.freeimg.net",
      "unibook-backend-bucket.s3.eu-central-1.amazonaws.com",
      "unibook-bucket.s3.eu-central-1.amazonaws.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
