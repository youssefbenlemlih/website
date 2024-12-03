"use client";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { Box, Text, TextInput } from "@mantine/core";

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