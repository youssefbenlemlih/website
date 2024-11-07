import ExampleTemplate from "@/components/Examples/ExampleTemplate";
import { Component } from "./Component";

const code = `import { useState } from "react";

export function Component() {
  const [name, setName] = useState("Youssef");

  return (
    <div>
      <label>Enter your name</label>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <p>
        You entered:{" " + name}
      </p>
    </div>
  );
}
`;

export const NameInput = () => (
  <ExampleTemplate code={code} component={<Component />} />
);
