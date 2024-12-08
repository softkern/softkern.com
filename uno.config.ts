import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: {
    btn: 'px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300',
    heading: 'font-bold tracking-tight',
    card: 'p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300',
    'switch-animation': 'transition duration-300',
    'bg-base': 'bg-white dark:bg-gray-900 switch-animation',
    'color-base': 'text-gray-800 dark:text-gray-200 switch-animation',
    'color-mark': 'text-primary-500 dark:text-primary-500',
  },
  theme: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
    },
  },
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then((i) => i.default),
        logos: () => import('@iconify-json/logos/icons.json').then((i) => i.default),
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
