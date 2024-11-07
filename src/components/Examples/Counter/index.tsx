import ExampleTemplate from "@/components/Examples/ExampleTemplate";
import { Component } from "./Component";

const code = `import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  function increase(){
    setCounter((count) => count + 1);
  }

  // this is what we want the user to see
  return (
    <div>
      <p>Count:{counter}</p>
      <button onClick={increase}>Click me!</button>
    </div>
  );
}`;

export const Counter = () => (
  <ExampleTemplate code={code} component={<Component />} />
);
