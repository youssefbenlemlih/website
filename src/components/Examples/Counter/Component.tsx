"use client";
import { useState } from "react";
import { Button, Flex, Text } from "@mantine/core";

export function Component() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((count) => count + 1);
  };

  return (
    <Text>
      Count:{counter}
      <Flex pt={"xs"}>
        <Button onClick={increase}>Click me!</Button>
      </Flex>
    </Text>
  );
}
