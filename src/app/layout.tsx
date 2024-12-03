import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { DesktopNavigation, MobileNavigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { defaultTheme } from "@/styles/defaultTheme";
import "@/styles/globals.css";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  Container,
  Flex,
  Group,
  MantineProvider,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import React from "react";
import { site } from "../../site";

// If loading a variable font, you don't need to specify the font weight
const Font = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
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
        <MantineProvider theme={defaultTheme}>
          <Notifications />
          <AppShell
            padding="md"
            pos="relative"
            header={{ height: "auto", offset: true }}
          >
            <AppShellHeader>
              <Container>
                <div
                  className={`flex place-content-between items-center gap-4 px-4 py-3 `}
                >
                  <Logo />
                  <Group visibleFrom="sm">
                    <DesktopNavigation />
                  </Group>
                  <Flex gap="sm">
                    <ThemeToggle />
                    <Group hiddenFrom="sm">
                      <MobileNavigation />
                    </Group>
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
                src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAnalyticsTag}`}
              />
              <script id="google-analytics">
                {`
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${site.googleAnalyticsTag}');
                `}
              </script>
            </>
          )}
        </MantineProvider>
      </body>
    </html>
  );
}
