import { defineConfig, presetIcons, presetTypography, presetWebFonts, presetWind3, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'bg-base': 'bg-[#f9f9f9] dark:bg-[#141416]',
      'color-base': 'text-[#333941] dark:text-[#d5d7dc]',
      'border-base': 'border-[#8884]',
      divider: 'h-1px w-full bg-#F0F0F0 dark:bg-#101010',
      'bg-selected': 'bg-[#ededed] dark:bg-#1d1d1e',
    },
  ],

  presets: [
    presetWind3(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
      collections: {
        ri: () => import('@iconify-json/ri/icons.json').then((i) => i.default),
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        mono: 'DM Mono',
        condensed: 'Roboto Condensed',
        wisper: 'Bad Script',
      },
    }),
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
    'i-ri-moon-fill',
    'i-ri-sum-fill',
  ],
})
