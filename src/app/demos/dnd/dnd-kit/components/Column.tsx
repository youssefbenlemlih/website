"use client";
import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

type ColumnProps = { children: ReactNode; id: string };

export const Column = ({ children, id }: ColumnProps) => {
  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <div ref={setNodeRef} className={"flex flex-col"}>
      {children}
    </div>
  );
};
