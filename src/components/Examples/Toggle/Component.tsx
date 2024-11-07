"use client";
import { useState } from "react";
import { Flex, Switch, Text } from "@mantine/core";

export function Component() {
  const [toggled, setToggled] = useState(false);

  return (
    <Text>
      <Flex gap="sm">
        <Switch checked={toggled} onClick={() => setToggled(!toggled)} />
        {toggled ? "On" : "Off"}
      </Flex>
    </Text>
  );
}
