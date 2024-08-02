// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/i18n'],
  runtimeConfig: {
    public: {
      siteBackendUrl: process.env.NUXT_ENV_SITE_BACKEND_URL,
    },
  },
  image: {
    dir: 'assets/images',
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'ua',
    locales: [
      {
        code: 'ua',
        iso: 'uk-UA',
        file: 'ua.ts',
        name: 'Українська',
      },
    ],
    lazy: true,
    langDir: 'lang',
  },
  css: [
      '~/assets/css/fonts.css',
  ],
})
