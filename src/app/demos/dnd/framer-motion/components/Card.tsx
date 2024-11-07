"use client";
import * as React from "react";
import { Card as MantineCard } from "@mantine/core";
import { Reorder } from "framer-motion";
import { Todo } from "../../useTodos";

type CardProps = { todo: Todo };

export const Card = ({ todo }: CardProps) => {
  return (
    <Reorder.Item value={todo} as={"div"} className={"col-start-2"}>
      <MantineCard shadow={"md"} withBorder mt={"xs"}>
        {todo.text}
      </MantineCard>
    </Reorder.Item>
  );
};
