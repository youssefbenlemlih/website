"use client";
import { Card as MantineCard } from "@mantine/core";
import { Todo } from "../../useTodos";
import { useSortable } from "@dnd-kit/sortable";

type CardProps = { todo: Todo };

export const Card = ({ todo }: CardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: todo.id,
    });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition,
        zIndex: 99,
      }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <MantineCard shadow={"md"} withBorder mt="xs">
        {todo.text}
      </MantineCard>
    </div>
  );
};
