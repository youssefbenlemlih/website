"use client";
import React, { useState } from "react";
import { Button } from "@mantine/core";

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
      <Button onClick={onButtonClick}>Add 3 </Button>
    </div>
  );
}
