"use client";
import { useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Text,
  TextInput,
} from "@mantine/core";
import {
  useDebounceValue,
  useHover,
  useLocalStorage,
  useWindowSize,
} from "usehooks-ts";

export function WithoutLocalStorage() {
  return <Text></Text>;
}

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

export function Debouce() {
  const [input, setInput] = useState("");
  const [debouncedInput] = useDebounceValue(input, 500);
  return (
    <Box>
      <Text>Input: {input}</Text>
      <Text>Debounced Input: {debouncedInput}</Text>
      <TextInput
        label="Type something!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </Box>
  );
}

export function EventListener() {
  return <Text></Text>;
}

export function MediaQuery() {
  return <Text></Text>;
}

export function WindowSize() {
  const { width, height } = useWindowSize();

  return (
    <Card
      withBorder
      radius="md"
      p="md"
      bg={{ light: "blue.1", dark: "blue-8" }}
    >
      <Center>
        <Text mx="auto">This window is</Text>
      </Center>
      <Center>
        <Text size="2xl" fw="600">
          {width}x{height}
        </Text>
      </Center>
    </Card>
  );
}
export function Hover() {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <Card radius="md" p="md" ref={hoverRef} bg={isHover ? "blue.3" : "blue.1"}>
      <Center>
        <Text
          size="2xl"
          fw="600"
        >{`I am ${isHover ? `hovered` : `unhovered`}`}</Text>
      </Center>
    </Card>
  );
}
export function IntersectionObserver() {
  return <Text></Text>;
}
