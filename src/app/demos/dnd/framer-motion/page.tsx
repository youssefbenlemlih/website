"use client";
import * as React from "react";
import { Grid } from "./components/Grid";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { ColumnTitle } from "./components/ColumnTitle";
import { Todo, useTodos } from "../useTodos";
import { Reorder } from "framer-motion";

export default function FramerMotionDnd() {
  const { todos, setTodos } = useTodos();
  const column1Todos = todos.filter((todo) => todo.state === "todo");
  const column2Todos = todos.filter((todo) => todo.state === "doing");
  const column3Todos = todos.filter((todo) => todo.state === "done");

  const updateTodos = (changedTodos: Todo[]) => {
    setTodos([
      ...todos.filter((todo) => todo.state !== changedTodos[0].state),
      ...changedTodos,
    ]);
  };
  return (
    <Grid>
      <Column>
        <ColumnTitle todoState="todo" />
        <Reorder.Group as={"div"} values={column1Todos} onReorder={updateTodos}>
          {column1Todos.map((todo, ) => (
            <Card key={todo.id} todo={todo} />
          ))}
        </Reorder.Group>
      </Column>
      <Column>
        <ColumnTitle todoState="doing" />
        <Reorder.Group
          as={"div"}
          axis={"y"}
          values={column2Todos}
          onReorder={updateTodos}
        >
          {column2Todos.map((todo, ) => (
            <Card key={todo.id} todo={todo} />
          ))}
        </Reorder.Group>
      </Column>
      <Column>
        <ColumnTitle todoState="doing" />
        <Reorder.Group
          as={"div"}
          axis={"y"}
          values={column3Todos}
          onReorder={updateTodos}
        >
          {column3Todos.map((todo, ) => (
            <Card key={todo.id} todo={todo} />
          ))}
        </Reorder.Group>
      </Column>
    </Grid>
  );
}
