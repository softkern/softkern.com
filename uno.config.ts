import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons({
      collections: {
        ri: () => import('@iconify-json/ri/icons.json').then((i) => i.default),
      },
    }),
    presetTypography(),
    presetWebFonts({}),
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
    }),
  ],

  safelist: [
    'i-ri-home-4-line',
    'i-ri-home-4-fill',
    'i-ri-article-line',
    'i-ri-article-fill',
    'i-ri-function-line',
    'i-ri-function-fill',
    'i-ri-user-3-line',
    'i-ri-user-3-fill',
  ],
})
