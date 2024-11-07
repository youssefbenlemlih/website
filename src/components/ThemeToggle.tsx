"use client";
import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { IconContrast, IconMoon, IconSun } from "@tabler/icons-react";

export const ThemeToggle = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const toggleColorScheme = () => {
    const nextColorScheme =
      colorScheme === "light"
        ? "dark"
        : colorScheme === "dark"
          ? "auto"
          : "light";
    setColorScheme(nextColorScheme);
  };
  return (
    <Tooltip label={capitalize(colorScheme) + " theme"}>
      <ActionIcon
        variant="light"
        className="justify-self-end"
        onClick={toggleColorScheme}
      >
        {colorScheme === "light" && <IconSun size={16} />}
        {colorScheme === "dark" && <IconMoon size={16} />}
        {colorScheme === "auto" && <IconContrast size={16} />}
      </ActionIcon>
    </Tooltip>
  );
};
function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
