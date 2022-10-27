/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // providing the locales supported by your application
   locales: ["fr", "en"],
   //  default locale used when the non-locale paths are visited
   defaultLocale: "fr",
  },
}
const nextTranslate = require('next-translate')

module.exports = nextTranslate()
