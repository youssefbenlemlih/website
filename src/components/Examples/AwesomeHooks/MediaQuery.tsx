"use client";
import { Card, Text } from "@mantine/core";
import { useMediaQuery } from "usehooks-ts";

export function MediaQuery() {
  const matches = useMediaQuery("(max-width: 768px)");
   return (
     <Card
       withBorder
       radius="md"
       p="md"
       c="primary"
       bg={{ light: "blue.1", dark: "blue-8" }}
     >
       <Text mx="auto">You{"'"}re on</Text>
       <Text mx="auto" size="2xl" fw="600">
         {matches ? "Mobile" : "Desktop"}
       </Text>
     </Card>
   );
}
