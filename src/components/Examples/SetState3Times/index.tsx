import ExampleTemplate from "@/components/Examples/ExampleTemplate";
import { Component } from "./Component";

const code = `import { useState } from "react";

export function Component() {
  const [count, setCount] = useState(0);

  function onButtonClick() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <p>Current count:{count}</p>
      <button onClick={onButtonClick}>Add 3 </button>
    </div>
  );
}

`;

export const SetState3Times = () => (
  <ExampleTemplate code={code} component={<Component />} />
);
