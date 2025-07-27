import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {},
    }),
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ["--at-apply", "--uno-apply", "--uno"],
    }),
  ],
});
