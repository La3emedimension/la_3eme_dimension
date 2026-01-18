import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://la3emedim.fr',
  base: '/',
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