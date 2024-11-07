"use client";
import * as React from "react";
import { Card } from "./components/Card";
import { Todo, useTodos } from "../useTodos";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Grid } from "./components/Grid";
import { Column } from "./components/Column";
import { ColumnTitle } from "./components/ColumnTitle";

export default function ReactDnd() {
  const { todos, moveTodo } = useTodos();

  const onDragEnd = ({
    draggedIntoTodo,
    draggedTodo,
  }: {
    draggedTodo: Todo;
    draggedIntoTodo: Todo;
  }) => {
    const newState = draggedIntoTodo.state;
    const indexWithinColumn = todos
      .filter((todo) => todo.state === newState && todo.id !== draggedTodo.id)
      .findIndex((todo) => todo.id === draggedIntoTodo.id);
    moveTodo(draggedTodo.id, newState, indexWithinColumn);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Grid>
        <Column>
          <ColumnTitle todoState="todo" />
          {todos
            .filter((todo) => todo.state === "todo")
            .map((todo) => (
              <Card key={todo.id} todo={todo} onDragEnd={onDragEnd} />
            ))}
        </Column>
        <Column>
          <ColumnTitle todoState="doing" />
          {todos
            .filter((todo) => todo.state === "doing")
            .map((todo) => (
              <Card key={todo.id} todo={todo} onDragEnd={onDragEnd} />
            ))}
        </Column>
        <Column>
          <ColumnTitle todoState="done" />
          {todos
            .filter((todo) => todo.state === "done")
            .map((todo) => (
              <Card key={todo.id} todo={todo} onDragEnd={onDragEnd} />
            ))}
        </Column>
      </Grid>
    </DndProvider>
  );
}
