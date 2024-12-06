import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import expressiveCode from 'astro-expressive-code'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { SITE } from './site.config'

import playformCompress from '@playform/compress'

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
    playformCompress(),
    mdx(),
    sitemap(),
  ],
})
