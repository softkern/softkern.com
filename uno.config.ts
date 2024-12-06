import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: {
    btn: 'px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300',
    heading: 'font-bold tracking-tight',
    card: 'p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300',
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
        sans: 'Inter:400,600,800',
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
