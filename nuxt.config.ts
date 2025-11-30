// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,

  // 🟢 هذا السطر هو مفتاح الحل
  router: {
    options: {
      hashMode: true
    }
  },
  devtools: { enabled: true },
  app: {
    head: {
      // 💡 يتم استخدام هذا القالب لجميع الصفحات
      titleTemplate: 'Khatwat - خطوات',

    }
  },
  css: [
    '~/assets/css/main.css',
    'aos/dist/aos.css' // لا تنس استدعاء AOS
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    ['@nuxt/fonts', {
      families: [
        { name: 'Tajawal', provider: 'google' }
      ]
    }]
  ],
  i18n: {
    strategy: 'no_prefix',
    langDir: 'locales',

    locales: [
      { code: 'en', name: 'English', iso: 'en-US', dir: 'ltr', file: 'en.json' },
      { code: 'ar', name: 'العربية', iso: 'ar-AR', dir: 'rtl', file: 'ar.json' }
    ],
    defaultLocale: 'en',
  }
})