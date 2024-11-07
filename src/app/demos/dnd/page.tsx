"use client";
import { Title, Anchor } from "@mantine/core";

export default function Dnd1() {
  return (
    <div className={`[&>*]:mb-2 `}>
      <Title order={2} mb={"sm"}>
        Enum Types
      </Title>
      <ul>
        <li>
          <Anchor href={"/demos/dnd/react-dnd"}>React DnD</Anchor>
        </li>
        <li>
          <Anchor href={"/demos/dnd/framer-motion"}>Framer Motion</Anchor>
        </li>
        <li>
          <Anchor href={"/demos/dnd/framer-motion-numbers"}>
            Framer Motion (number only)
          </Anchor>
        </li>
        <li>
          <Anchor href={"/demos/dnd/hello-pangea"}>@hello-pangea/dnd</Anchor>
        </li>
        <li>
          <Anchor href={"/demos/dnd/dnd-kit"}>Dnd Kit</Anchor>
        </li>
      </ul>
    </div>
  );
}
