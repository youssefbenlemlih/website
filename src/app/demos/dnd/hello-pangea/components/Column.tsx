import { ReactNode } from "react";
import { Droppable } from "@hello-pangea/dnd";

type ColumnProps = { children: ReactNode; id: string };

export const Column = ({ children, id }: ColumnProps) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={"flex flex-col"}
        >
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
