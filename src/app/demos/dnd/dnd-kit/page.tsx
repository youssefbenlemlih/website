"use client";
import { Grid } from "./components/Grid";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { ColumnTitle } from "./components/ColumnTitle";
import { useTodos } from "../useTodos";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function Dnd1() {
  const { todos, moveTodo,  } = useTodos();
  const column1Todos = todos.filter((todo) => todo.state === "todo");
  const column2Todos = todos.filter((todo) => todo.state === "doing");
  const column3Todos = todos.filter((todo) => todo.state === "done");
  function onDrag(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;
    const overTodo = todos.find((todo) => todo.id === over?.id);
    if (!overTodo) return;
    const newState = overTodo.state;
    const indexWithinColumn = todos
      .filter((todo) => todo.state === newState)
      .findIndex((todo) => todo.id === overTodo.id);
    moveTodo(active.id + "", newState, indexWithinColumn);
  }
  return (
    <DndContext onDragEnd={onDrag} onDragOver={onDrag}>
      <Grid>
        <SortableContext
          id="todo"
          items={column1Todos}
          strategy={verticalListSortingStrategy}
        >
          <Column id={"todo"}>
            <ColumnTitle todoState="todo" />
            {column1Todos.map((todo) => (
              <Card key={todo.id} todo={todo} />
            ))}
          </Column>
        </SortableContext>
        <SortableContext
          id="doing"
          items={column2Todos}
          strategy={verticalListSortingStrategy}
        >
          <Column id={"doing"}>
            <ColumnTitle todoState="doing" />
            {column2Todos.map((todo) => (
              <Card key={todo.id} todo={todo} />
            ))}
          </Column>
        </SortableContext>
        <SortableContext
          id="done"
          items={column3Todos}
          strategy={verticalListSortingStrategy}
        >
          <Column id={"done"}>
            <ColumnTitle todoState="done" />
            {column3Todos.map((todo) => (
              <Card key={todo.id} todo={todo} />
            ))}
          </Column>
        </SortableContext>
      </Grid>
    </DndContext>
  );
}
