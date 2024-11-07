import { Card as MantineCard } from "@mantine/core";
import { Todo } from "../../useTodos";
import { Draggable } from "@hello-pangea/dnd";

type CardProps = { todo: Todo; index: number };

export const Card = ({ todo, index }: CardProps) => {
  return (
    <Draggable draggableId={todo.id} index={index} key={todo.id}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <MantineCard shadow={"md"} mt="xs" withBorder>
       {todo.text}
          </MantineCard>
        </div>
      )}
    </Draggable>
  );
};
