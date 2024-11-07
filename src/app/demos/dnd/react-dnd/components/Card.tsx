"use client";
import { Card as MantineCard } from "@mantine/core";
import { useDrag, useDrop } from "react-dnd";
import { Todo } from "../../useTodos";
import { LegacyRef } from "react";

type CardBaseProps = {
  todo: Todo;
};
type CardProps = {
  todo: Todo;
  onDragEnd: (options: { draggedTodo: Todo; draggedIntoTodo: Todo }) => void;
};

export const Card = ({ todo, onDragEnd }: CardProps) => {
  const [{  isOver, ...draggedTodo }, drop ] = useDrop(() => ({

    // The type (or types) to accept - strings or symbols
    accept: "todo",
    // Props to collect
    collect: (monitor) => ({
      //i: monitor.,
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      ...monitor.getItem<Todo>(),
    }),
    drop: (draggedTodo: Todo) => {
      onDragEnd({ draggedTodo, draggedIntoTodo: todo });
    },
  }));

  return (
    <div className={"gap-2 flex flex-col"} ref={drop as unknown as LegacyRef<HTMLDivElement>}>
      {isOver && draggedTodo && (
        <div className="opacity-0">
          <TodoCard todo={draggedTodo} />
        </div>
      )}
      <CardDrag todo={todo} />
    </div>
  );
};

const CardDrag = ({ todo }: CardBaseProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todo",
    item: todo,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  if (isDragging) return <></>;
  return (
    <div ref={drag as unknown as LegacyRef<HTMLDivElement>
    }>
      <TodoCard todo={todo} />
    </div>
  );
};
const TodoCard = ({ todo }: CardBaseProps) => {
  return (
    <MantineCard shadow={"md"} withBorder>
      {todo.text}
    </MantineCard>
  );
};
