import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://la3emedim.fr',
  base: '/',
  integrations: [sitemap()],
})