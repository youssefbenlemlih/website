"use client";
// core styles are required for all packages
import "@mantine/core/styles.css";

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...
import { ReactNode } from "react";
import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { DemoNavigationPath } from "@/components/NavigationPath";

type LayoutProps = { children: ReactNode };

export default LayoutBase;

function LayoutBase({ children }: LayoutProps) {
  return (
    <div>
      <DemoNavigationPath />
      {children}
    </div>
  );
}
