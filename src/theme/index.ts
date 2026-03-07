import { createSystem, defaultConfig } from "@chakra-ui/react"

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6f2f1" },
          100: { value: "#b3dcd9" },
          200: { value: "#80c7c1" },
          300: { value: "#4db2a9" },
          400: { value: "#3a9d97" },
          500: { value: "#1f4f4f" },
          600: { value: "#1a4444" },
          700: { value: "#153939" },
          800: { value: "#102e2e" },
          900: { value: "#0b2323" },
        },
        neutral: {
          50: { value: "#fafbfb" },
          100: { value: "#f5f6f7" },
          200: { value: "#eff0f2" },
          300: { value: "#e0e1e5" },
          400: { value: "#c5c6cb" },
          500: { value: "#8b8b8b" },
          600: { value: "#6b6b6b" },
          700: { value: "#505050" },
          800: { value: "#383838" },
          900: { value: "#1c1c1c" },
        },
      },
    },
    semanticTokens: {
      colors: {
        "bg.default": {
          _light: { value: "{colors.neutral.50}" },
          _dark: { value: "{colors.neutral.900}" },
        },
        "bg.muted": {
          _light: { value: "{colors.neutral.100}" },
          _dark: { value: "{colors.neutral.800}" },
        },
        "fg.default": {
          _light: { value: "{colors.neutral.900}" },
          _dark: { value: "{colors.neutral.50}" },
        },
        "fg.muted": {
          _light: { value: "{colors.neutral.600}" },
          _dark: { value: "{colors.neutral.400}" },
        },
        "border.default": {
          _light: { value: "{colors.neutral.200}" },
          _dark: { value: "{colors.neutral.700}" },
        },
        "brand.default": { value: "{colors.brand.500}" },
        "brand.hover": { value: "{colors.brand.600}" },
      },
    },
  },
})

