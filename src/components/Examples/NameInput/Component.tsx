"use client";
import { useState } from "react";
import { Grid, Text } from "@mantine/core";

export function Component() {
  const [name, setName] = useState("Youssef");

  return (
    <Grid>
      <label>Enter your name</label>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <Text c={"gray"}>You entered:{" " + name}</Text>
    </Grid>
  );
}
