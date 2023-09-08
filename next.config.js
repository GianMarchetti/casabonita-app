/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'i.ibb.co',
        'i.postimg.cc',
        'firebasestorage.googleapis.com',
        'i.imgur.com'
      ]
    },
    experimental: {
        appDir: true,
      },
      env: {
        API_URL:'http://localhost:3000',
        DB_URI: "mongodb://localhost:27017/casabonita"
      }
}

module.exports = nextConfig
