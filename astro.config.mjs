import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://la3emedim.fr',
  base: '/',
  redirects: {
    '/product/ert': '/product/lumi/',
    '/en/blog/led-sign': '/en/blog/enseigne-lumineuse/',
    '/en/blog/servicehelper': '/en/blog/potcedric/',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-FR',
          en: 'en-GB',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
})