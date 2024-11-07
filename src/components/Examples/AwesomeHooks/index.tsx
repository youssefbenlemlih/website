import ExampleTemplate from "@/components/Examples/ExampleTemplate";
import * as Components from "./Components";

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
export const WithLocalStorageCode = `export function WithLocalStorage() {
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
}`;
export const AwesomeHooks = {
  WithoutLocalStorage: () => (
    <ExampleTemplate
      code={code}
      component={<Components.WithoutLocalStorage />}
    />
  ),
  WithLocalStorage: () => (
    <ExampleTemplate
      code={WithLocalStorageCode}
      component={<Components.WithLocalStorage />}
    />
  ),
  Debouce: () => (
    <ExampleTemplate code={code} component={<Components.Debouce />} />
  ),
  EventListener: () => (
    <ExampleTemplate code={code} component={<Components.EventListener />} />
  ),
  WindowSize: () => (
    <ExampleTemplate code={code} component={<Components.WindowSize />} />
  ),
  Hover: () => <ExampleTemplate code={code} component={<Components.Hover />} />,
  IntersectionObserver: () => (
    <ExampleTemplate
      code={code}
      component={<Components.IntersectionObserver />}
    />
  ),
};
