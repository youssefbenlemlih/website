"use client";
import { useRef } from "react";
import { useHover } from "usehooks-ts";
import { Card, Text } from "@mantine/core";

export function Hover() {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <Card
      radius="md"
      p="md"
      ref={hoverRef}
      bg={isHover ? "primary" : "primary.1"}
    >
      <Text
        mx="auto"
        c={!isHover ? "primary" : "primary.1"}
        size="xl"
        fw="600"
      >{`I am ${isHover ? `hovered` : `unhovered`}`}</Text>
    </Card>
  );
}