/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
      locales: ['pt-BR', 'en-US'],
      defaultLocale: 'pt-BR',
      localeDetection: false,
    },
    transpilePackages: ['next-themes'],
  }
  

  module.exports = nextConfig
  
  