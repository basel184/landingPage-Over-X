
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AC-Marketer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'اوفر تايم اكاديمي منصه تعمل بنظام الكورسات الالكترونيه' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'اوفر تايم اكاديمي,OverTime academy, Over Time, اوڤر تايم, الكورسات الالكترونية' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo_acdemy.svg' },
      { rel: 'stylesheet', href: 'https://www.atfawry.com/atfawry/plugin/assets/payments/css/fawrypay-payments.css' }

    ]
  },
  script: [
    {
      src: "https://www.atfawry.com/atfawry/plugin/assets/payments/js/fawrypay-payments.js",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js",
    },

  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  '~/assets/css/main.scss',
  '@fortawesome/fontawesome-free/css/all.css'
],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/ltr-rtl.js', defer: true },
    { src: '~plugins/bootstrap.bundle.min.js', mode: 'client', defer: true },
    { src: '~plugins/vform.js', defer: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: require("./lang/en.json"), dir: 'ltr' },
      { code: 'ar', iso: 'ar-EG', file: require("./lang/ar.json"), dir: 'rtl' },
    ],
    defaultLocale: "ar",
    vueI18n: {
      fallbackLocale: "ar",
      messages: {
        en: require("./lang/en.json"),
        ar: require("./lang/ar.json")
      }
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL || 'https://admin.overtime.marketing/api/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      // أضف إعدادًا للتعامل مع ملفات الوسائط هنا
    }
  }
}
