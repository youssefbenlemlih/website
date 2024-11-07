"use client";
import * as React from "react";
import { Grid } from "./components/Grid";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { ColumnTitle } from "./components/ColumnTitle";
import { TodoState, useTodos } from "../useTodos";
import { DragDropContext, OnDragEndResponder } from "@hello-pangea/dnd";

export default function HelloPangeaDnd() {
  const { todos, moveTodo } = useTodos();
  const onDragEnd: OnDragEndResponder = (result, ) => {
    if (!result.destination) return;
    moveTodo(
      result.draggableId,
      result.destination.droppableId as TodoState,
      result.destination.index,
    );
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid>
        <Column id={"todo"}>
          <ColumnTitle todoState="todo" />
          {todos
            .filter((todo) => todo.state === "todo")
            .map((todo, index) => (
              <Card key={index} todo={todo} index={index} />
            ))}
        </Column>
        <Column id={"doing"}>
          <ColumnTitle todoState="doing" />
          {todos
            .filter((todo) => todo.state === "doing")
            .map((todo, index) => (
              <Card key={index} todo={todo} index={index} />
            ))}
        </Column>
        <Column id={"done"}>
          <ColumnTitle todoState="done" />
          {todos
            .filter((todo) => todo.state === "done")
            .map((todo, index) => (
              <Card key={index} todo={todo} index={index} />
            ))}
        </Column>
      </Grid>
    </DragDropContext>
  );
}
