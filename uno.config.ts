import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: {
    btn: 'p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
    'bg-base': 'bg-gray-50 dark:bg-gray-900',
    'color-base': 'text-gray-800 dark:text-gray-200',
    'color-hover': 'text-[#0ea5e9]',
  },
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then((i) => i.default),
      },
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        pixel: 'Press Start 2P',
      },
    }),
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
    }),
  ],
  safelist: ['i-carbon-logo-github', 'i-carbon-logo-x'],
})
