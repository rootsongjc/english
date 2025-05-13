import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'

/*
 * https://astro.build/config
 */
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://jimmysong.io/english/',
  base: '/english', // Base URL for the site
  output: 'static', // Static site generation
  trailingSlash: 'ignore', // Ignore trailing slashes for the root page
  compressHTML: true, // Compress HTML output
  images: {
    serviceWorker: true, // Enable service worker for images
    lazyLoad: true // Lazy load images
  },
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
