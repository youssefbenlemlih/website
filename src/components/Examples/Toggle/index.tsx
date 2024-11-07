import ExampleTemplate from "@/components/Examples/ExampleTemplate";
import { Component } from "./Component";

const code = `import { useState } from "react";
import { Switch, Text } from "@mantine/core";

function Toggle() {
  const [toggled, setToggled] = useState(false);

  return (
    <Text as="label" size="2">
      <Switch checked={toggled} onClick={() => setToggled(!toggled)} /> 
      {toggled ? "On": "Off"}
    </Text>
  );
}`;

export const Toggle = () => (
  <ExampleTemplate code={code} component={<Component />} />
);
