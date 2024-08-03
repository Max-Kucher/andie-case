// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/i18n',
    "nuxt-graphql-request"
  ],
  image: {
    dir: 'public/images',
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
  graphql: {
    clients: {
      default: {
        endpoint: `${process.env.NUXT_ENV_SITE_BACKEND_URL}/graphql`,
      },
    },
  },
})
