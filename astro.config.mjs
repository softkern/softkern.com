// @ts-check
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { SITE } from './site.config'

import mdx from '@astrojs/mdx'

import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    expressiveCode({
      useThemedScrollbars: true,
      themeCssSelector: (theme) => `.${theme.type}`,
      themes: ['catppuccin-mocha', 'catppuccin-latte'],
      styleOverrides: {
        borderRadius: '0.5em',
      },
    }),
    mdx(),
  ],
})
