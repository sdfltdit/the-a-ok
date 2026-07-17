import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sdfltdit.github.io',
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bn'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
