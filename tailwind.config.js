const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // a: {
            //   color: theme('colors.blue.500'),
            //   '&:hover': { color: theme('colors.blue.700') },
            //   code: { color: theme('colors.blue.400') },
            // },
            code: { color: theme("colors.red.400") },
            "code::before": {
              content: "none", // don’t generate the pseudo-element
            },
            "code::after": {
              content: "none",
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
          },
        },
      }),
      colors: {
        background: "#fffbf5",
        "primary-1": "var(--mantine-color-primary-1)",
        "primary-2": "var(--mantine-color-primary-2)",
        "primary-3": "var(--mantine-color-primary-3)",
        "primary-4": "var(--mantine-color-primary-4)",
        "primary-5": "var(--mantine-color-primary-5)",
        "primary-6": "var(--mantine-color-primary-6)",
        "primary-7": "var(--mantine-color-primary-7)",
        "primary-8": "var(--mantine-color-primary-8)",
        "primary-9": "var(--mantine-color-primary-9)",
        "primary-10": "var(--mantine-color-primary-10)",

        "green-1": "var(--mantine-color-green-1)",
        "green-2": "var(--mantine-color-green-2)",
        "green-3": "var(--mantine-color-green-3)",
        "green-4": "var(--mantine-color-green-4)",
        "green-5": "var(--mantine-color-green-5)",
        "green-6": "var(--mantine-color-green-6)",
        "green-7": "var(--mantine-color-green-7)",
        "green-8": "var(--mantine-color-green-8)",
        "green-9": "var(--mantine-color-green-9)",
        "green-10": "var(--mantine-color-green-10)",

        "blue-1": "var(--mantine-color-blue-1)",
        "blue-2": "var(--mantine-color-blue-2)",
        "blue-3": "var(--mantine-color-blue-3)",
        "blue-4": "var(--mantine-color-blue-4)",
        "blue-5": "var(--mantine-color-blue-5)",
        "blue-6": "var(--mantine-color-blue-6)",
        "blue-7": "var(--mantine-color-blue-7)",
        "blue-8": "var(--mantine-color-blue-8)",
        "blue-9": "var(--mantine-color-blue-9)",
        "blue-10": "var(--mantine-color-blue-10)",
        
        "aqua-500": "var(--mantine-color-green-10)",
        "black-850": "#282828",
        "black-900": "#1D2021",
        "grey-one": "#EBEBEB",
        "primary-500": "#D65D0E",
        "yellow-500": "#D79921",
        "yellow-600": "#B57614",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
