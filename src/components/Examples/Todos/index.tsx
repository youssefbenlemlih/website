import ExampleTemplate from "@/components/Examples/ExampleTemplate";
import { Component } from "./Component";

const code = `import { useState } from "react";

export type TodoItem = {
  text: string;
  checked: boolean;
  id: string;
};

type TodoProps = {
  todo: TodoItem;
  onCheckedChange: () => void;
};
export const Todo = ({
  todo: { checked, text, id },
  onCheckedChange,
}: TodoProps) => {
  return (
    <div className={"flex"}>
      <input
        type="checkbox"
        id={id}
        name="scales"
        checked={checked}
        onChange={onCheckedChange}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export function TodoList() {
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
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onCheckedChange={() => onCheckedChange(todo.id)}
        />
      ))}
      <input
        type={"text"}
        placeholder={"Add Todo..."}
        value={newTodoText}
        onKeyDown={(e) => e.key === "Enter" && addNewTodo()}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <p>
        Enter a task and hit <kbd>↵</kbd>
      </p>
    </div>
  );
}
`;

export const Todos = () => (
  <ExampleTemplate code={code} component={<Component />} />
);
