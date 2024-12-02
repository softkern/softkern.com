// @ts-check
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { SITE } from './site.config'

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
})
