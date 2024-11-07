"use client";
import {
  parseThemeColor,
  useMantineTheme,
  useComputedColorScheme,
} from "@mantine/core";
import { ReactNode } from "react";
import { RoughNotation } from "react-rough-notation";

type HighlightProps = {
  children: ReactNode;
  c: string;
};

export const Highlight = ({ children }: HighlightProps) => {
  const colorScheme = useComputedColorScheme();
  const theme = useMantineTheme();

  const highlightColor = parseThemeColor({
    color: "primary." + (colorScheme === "light" ? 3 : 6),
    theme,
  });
  return (
    <RoughNotation
      animationDelay={600}
      multiline
      type="highlight"
      color={highlightColor.value}
      show
    >
      {children}
    </RoughNotation>
  );
};
