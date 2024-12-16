import db from '@astrojs/db'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import playformCompress from '@playform/compress'
import expressiveCode from 'astro-expressive-code'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { SITE } from './site.config'

import cloudflare from '@astrojs/cloudflare'

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
    partytown(),
    db(),
  ],
  adapter: cloudflare(),
  vite: {
    ssr: {
      external: ['node:stream'],
    },
  },
})
