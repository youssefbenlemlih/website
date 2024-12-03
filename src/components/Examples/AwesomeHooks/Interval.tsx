"use client";
import { Card, Text } from "@mantine/core";
import dayjs from "dayjs";
import { useState } from "react";
import { useInterval } from "usehooks-ts";

export function Interval() {
  const [time, setTime] = useState(new Date());
  useInterval(() => setTime(new Date()), 1000);
  return (
    <Card
      withBorder
      radius="md"
      p="md"
      c="primary"
      bg={{ light: "blue.1", dark: "blue-8" }}
    >
      <Text mx="auto">Current Time</Text>
      <Text mx="auto" size="2xl" fw="600">
        {dayjs(time).format("HH:mm:ss")}
      </Text>
    </Card>
  );
}
