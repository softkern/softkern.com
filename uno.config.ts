import { defineConfig, presetIcons, presetWind3, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetWind3(),
  ],
  transformers: [transformerDirectives()],
})
