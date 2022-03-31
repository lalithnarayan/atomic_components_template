const forms = require("@tailwindcss/forms");

module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      fontSize: {
        h1: ["64px", "96px"],
        h2: ["40px", "60px"],
        "2xl": ["24px", "36px"],
        '6xl': ['4rem', '6rem'],
      },
      colors: {
        "primary-color": "#4e41f2",
        "primary-color-light": "#c0c3ff",
        "primary-color-dark": "#27079B",
        "primary-color-lighter": "#cccfff",
        "heading-color": "#0a0c0b",
        "color-regular": "#2c303a",

        // TODO CHANGE THESE NAMES

        // Background Grey
        "page-bg": "#F5F5FA",
        "table-h-bg": "#F9FAFB",
        "light-grey": "#f2f3f7",
        "gray-light": "#ebedf2",
        "type-color-light": "#6B7280",

        "secondary-purple": "#AB7EFF",
        "danger-color": "#E02424",
        "success-color": "#057A55",
        "focus-color": "#EEEFFF",
        "purple-3": "#EEEFFF",
        "alert-shade": "#FDE8E8",
        "yellow-shade": "#FBF2E5",
        "success-shade": "#EDFCF0",
        "error-type": "#F05252",
        "warning-type": "#f9aa38",
        "success-type": "#07AB77",

        // SECONDARY COLORS
        "secondary-color-1": "#f9aa38",
        "secondary-color-2": "#1dd6bb",
        "secondary-color-3": "#ab7eff",
        "secondary-color-4": "#f2eee7",

        "primary-color": "#4E41F2",
        "primary-color-1": "#27079B",
        "primary-color-2": "#c0c3ff",
        "primary-color-3": "#cccfff",
        "secondary-color": "#0ba4f9",

        "secondary-color-1": "#f9aa38",
        "secondary-color-2": "#1dd6bb",
        "secondary-color-3": "#ab7eff",
        "secondary-color-4": "#f2eee7",

        "pale-grey": "#F9FAFB",
        "gray-1": "#0a0c0b",
        "gray-2": "#2c303a",
        "gray-3": "#51566b",
        "gray-4": "#7f8393",
        "gray-5": "#a3a6b2",
        "gray-6": "#c2c5ce",
        "gray-7": "#d7dae2",
        "gray-8": "#ebedf2",

        // Text colors
        "heading-color": "#0A0B0C",
        "regular-color": "#2c303a",
        "light-color": "#6b7280",

        // Border colors
        "input-border-color": "#C2C5CE",
        "border-color": "#a3a6b2",

        // Danger colors

        "error-text-color": "#F05252",
        "error-border-color": "#F05252",
      },
      boxShadow: {
        "primary-color": "0px 4px 4px rgba(123, 97, 255, 0.2)",
      },
    },
  },
  variants: {},
  plugins: [forms],
};
