import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'

/*
 * https://astro.build/config
 */
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://jimmysong.io/english/',
  trailingSlash: 'never', // Ensure subpages do not have trailing slashes
  build: {
    format: 'directory', // Generate /my-post/index.html for better compatibility
    inlineStylesheets: 'always'
  },
  prefetch: {
    prefetchAll: true
  },
  server: {
    host: true
  } /* access from https://192.168.x.x/ */,
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    }),
    tailwind()
  ],
  markdown: {
    // Syntax highlighting is handled by render()
    syntaxHighlight: false
  }
})
