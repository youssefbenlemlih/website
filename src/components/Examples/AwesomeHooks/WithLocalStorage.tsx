"use client";
import { useLocalStorage } from "usehooks-ts";
import { Button, Flex, Text } from "@mantine/core";

export function WithLocalStorage() {
  const [count, setCount] = useLocalStorage("examples/count", 0);
  return (
    <>
      <Text>Your Count is {count}</Text>
      <Flex gap={"sm"} pt="sm">
        <Button size="sm" onClick={() => setCount((c) => c - 1)}>
          -
        </Button>
        <Button size="sm" onClick={() => setCount((c) => c + 1)}>
          +
        </Button>
      </Flex>
    </>
  );
}