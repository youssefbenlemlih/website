"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Checkbox, Flex, Kbd, Text, TextInput } from "@mantine/core";

type TodoItem = {
  text: string;
  checked: boolean;
  id: string;
};

type TodoProps = {
  todo: TodoItem;
  onCheckedChange: () => void;
};
const Todo = ({
  todo: { checked, text },
  onCheckedChange,
}: TodoProps) => {
  return (
    <Flex className={"group "} align={"center"} gap={"xs"} justify={"between"}>
      <Checkbox onChange={onCheckedChange} checked={checked} label={text} />
    </Flex>
  );
};

export function Component() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodoText, setNewTodoText] = useState("");

  function onCheckedChange(id: string) {
    setTodos(
      todos.map((todo) =>
        id === todo.id
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo,
      ),
    );
  }

  function addNewTodo() {
    const newTodo = {
      text: newTodoText,
      checked: false,
      id: crypto.randomUUID(),
    };
    setTodos([...todos, newTodo]);
    setNewTodoText("");
  }

  return (
    <div className={"[&>*]:mb-2"}>
      <div className={"[&>*]:mb-2"}>
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <Todo
                todo={todo}
                onCheckedChange={() => onCheckedChange(todo.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <TextInput
        type={"text"}
        placeholder={"Add Todo..."}
        value={newTodoText}
        onKeyDown={(e) => e.key === "Enter" && addNewTodo()}
        onChange={(e) => setNewTodoText(e.target.value)}
        description={
          <>
            <Text size={"sm"}>
              Enter a task and hit{" "}
              <Kbd size={"sm"} className={"align-middle"}>
                ↵
              </Kbd>
            </Text>
          </>
        }
      />
    </div>
  );
}
