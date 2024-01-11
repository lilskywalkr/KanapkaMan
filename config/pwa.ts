import process from 'node:process'
import type { ModuleOptions } from '@vite-pwa/nuxt'

const scope = '/'

export const pwa: ModuleOptions = {
  registerType: 'autoUpdate',
  scope,
  base: scope,
  manifest: {
    id: scope,
    scope,
    // name: appName,
    // short_name: appName,
    // description: appDescription,
    theme_color: '#ffffff',
    icons: [
      // {
      //   src: 'logo-192.png',
      //   sizes: '192x192',
      //   type: 'image/png',
      // },
    ],
  },
  registerWebManifestInRouteRules: true,
  writePlugin: true,
  devOptions: {
    enabled: process.env.VITE_PLUGIN_PWA === 'true',
    navigateFallback: scope,
  },
}
