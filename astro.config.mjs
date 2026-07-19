import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://the-a-ok-cgl.pages.dev',
  compressHTML: true,
  build: {
    // Our whole site's CSS is ~4.6KB — inlining it removes a
    // render-blocking request AND lets the browser discover @font-face
    // rules immediately instead of waiting on a separate CSS fetch.
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bn'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
