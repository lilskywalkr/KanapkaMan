/* eslint-disable node/prefer-global/process */
// import { en, pl, ru, ua } from 'vuetify/locale'
import { pwa } from './config/pwa'

export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@vite-pwa/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/image',
    'nuxt-icon',
  ],

  typescript: {
    strict: true,
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
      APP_VERSION: process.env.npm_package_version,
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId,
    },
  },

  experimental: {
    externalVue: true,
    appManifest: true,
    payloadExtraction: true,
    writeEarlyHints: true,
    viewTransition: true,
  },

  routeRules: {
    '/': { prerender: true },
  },

  nitro: {
    static: true,
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  imports: {
    autoImport: true,
  },

  appConfig: {
    buildDate: new Date().toISOString(),
  },

  i18n: {
    strategy: 'no_prefix', // 'prefix_and_default',
    defaultLocale: 'pl',
    vueI18n: './i18n.config.ts',
  },

  pwa,

  devtools: {
    enabled: true,
  },

})
