"use client";
import { useWindowSize } from "usehooks-ts";
import { Card, Text } from "@mantine/core";

export function WindowSize() {
  const { width, height } = useWindowSize();

  return (
    <Card
      withBorder
      radius="md"
      p="md"
      c="primary"
      bg={{ light: "blue.1", dark: "blue-8" }}
    >
      <Text mx="auto">This window is</Text>
      <Text mx="auto" size="2xl" fw="600">
        {width}x{height}
      </Text>
    </Card>
  );
}