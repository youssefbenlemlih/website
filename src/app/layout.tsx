import React from "react";
import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Footer, Logo, Navigation } from "@/components";
import {
  MantineProvider,
  createTheme,
  AppShell,
  AppShellMain,
  AppShellHeader,
  AppShellFooter,
  ColorSchemeScript,
  Container,
  Group,
  Flex,
  rem,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavigationDrawer } from "@/components/NavigationDrawer";

// If loading a variable font, you don't need to specify the font weight
const Font = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});
const theme = createTheme({
  primaryColor: "indigo",
  scale: 1.2,
  fontSizes: {
    "2xl": rem(36),
    "3xl": rem(48),
    "4xl": rem(56),
  },
  colors: {
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
    Table: {
      defaultProps: {
        bg: "background",
        withTableBorder: true,
        withRowBorders: true,
        //class: "rounded-md",
        //striped: true,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${Font.variable}`}>
        <MantineProvider theme={theme}>
          <AppShell
            padding="md"
            pos="relative"
            header={{ height: "auto", offset: true }}
          >
            <AppShellHeader>
              <Container>
                <div
                  className={`flex place-content-between items-center gap-4  px-4 py-3 `}
                >
                  <Logo />
                  <Group visibleFrom="sm">
                    <Navigation className={"flex items-center gap-3"} />
                  </Group>
                  <Flex gap="sm">
                    <ThemeToggle />
                    <NavigationDrawer />
                  </Flex>
                </div>
              </Container>
            </AppShellHeader>
            <AppShellMain>
              <Container mt={80}>{children}</Container>
            </AppShellMain>
            <AppShellFooter pos={"relative"}>
              <Footer />
            </AppShellFooter>
          </AppShell>

          <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
          {process.env.NODE_ENV === "production" && <Analytics />}
          {process.env.NODE_ENV === "production" && (
            <>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-V49NL25FJ9"
              />
              <script id="google-analytics">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-V49NL25FJ9');
         `}
              </script>
            </>
          )}
        </MantineProvider>
      </body>
    </html>
  );
}
