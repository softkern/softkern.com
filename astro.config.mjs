// @ts-check
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import mdx from '@astrojs/mdx'

import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    expressiveCode({
      useDarkModeMediaQuery: true,
      themeCssSelector: (theme) => {
        return `.${theme.type}`
      },
      themes: ['tokyo-night', 'snazzy-light'],
    }),
    mdx(),
  ],
})
