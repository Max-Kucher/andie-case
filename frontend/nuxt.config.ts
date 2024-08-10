// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  site: {
    url: 'https://andy-case.com.ua',
    name: 'Справа Andy',
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#7c613a' },
        { name: 'theme-color', content: '#000000' }
      ]
    },
  },
  experimental: {
    viewTransition: true,
  },
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      backendUrl: process.env.NUXT_ENV_SITE_BACKEND_URL,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'nuxt-swiper',
    "@nuxtjs/seo"
  ],
  image: {
    format: ['avif', 'webp'],
    providers: {
      strapi: {},
    },
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
  swiper: {
    modules: ['navigation', 'pagination', 'parallax'],
  },
})
