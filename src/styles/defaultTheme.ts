import { createTheme, rem } from "@mantine/core";

export const defaultTheme = createTheme({
  primaryColor: "indigo",
  scale: 1.2,
  fontSizes: {
    "2xl": rem(36),
    "3xl": rem(48),
    "4xl": rem(56),
  },
  spacing: {
    "2xl": "calc(2.25rem * var(--mantine-scale))",
    "3xl": "calc(3rem * var(--mantine-scale))",
    "4xl": "calc(3.25rem * var(--mantine-scale))",
  },

  colors: {
    // this makes it possible to pass 'primary' as a color to Mantine Components
    primary: [
      "var(--mantine-primary-color-0)",
      "var(--mantine-primary-color-1)",
      "var(--mantine-primary-color-2)",
      "var(--mantine-primary-color-3)",
      "var(--mantine-primary-color-4)",
      "var(--mantine-primary-color-5)",
      "var(--mantine-primary-color-6)",
      "var(--mantine-primary-color-7)",
      "var(--mantine-primary-color-8)",
      "var(--mantine-primary-color-9)",
    ],
  },
  components: {
    Text: { defaultProps: { lh: "normal" } },
    Table: {
      defaultProps: {
        bg: "background",
        withTableBorder: true,
        withRowBorders: true,
      },
    },
    TBody: {},
    THead: {},
    TableTd: {
      defaultProps: {
        mx: "sm",
      },
    },
  },
});
