/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/invite',
        destination: 'https://discord.com/api/oauth2/authorize?client_id=907747074118926347&permissions=271641686&scope=applications.commands%20bot',
        permanent: true
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/vYEutrG7gY',
        permanent: true
      }
    ]

  }
}

module.exports = nextConfig
