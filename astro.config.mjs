// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

import mdx from '@astrojs/mdx'

import expressiveCode from 'astro-expressive-code'
import { SITE } from './site.config'

import sitemap from '@astrojs/sitemap'

import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon(), expressiveCode(), mdx(), sitemap(), partytown()],
})
