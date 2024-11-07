import { useState } from "react";

export type TodoState = "todo" | "doing" | "done";
export type Todo = {
  id: string;
  text: string;
  state: TodoState;
};
const initialTodos: Todo[] = [
  { id: "1", text: "Organize the closet.", state: "todo" },
  { id: "2", text: "Read a new book.", state: "todo" },
  {
    id: "3",
    text: "Call a friend or family member to catch up.",
    state: "todo",
  },
  { id: "4", text: "Try a new recipe.", state: "todo" },
  { id: "5", text: "Go for a 30-minute walk.", state: "doing" },
  { id: "6", text: "Clean out the email inbox.", state: "doing" },
  { id: "7", text: "Plant a small garden or indoor plant.", state: "doing" },
  { id: "8", text: "Watch a documentary.", state: "doing" },
  { id: "9", text: "Write a journal entry about the day.", state: "done" },
  { id: "10", text: "Visit a local museum or gallery.", state: "done" },
  { id: "11", text: "Learn a few phrases in a new language.", state: "done" },
  {
    id: "12",
    text: "Donate old clothes or items to a charity.",
    state: "done",
  },
];
function getNthIndex<T>(
  array: T[],
  criteria: (element: T) => boolean,
  n: number,
): number {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (criteria(array[i])) {
      count++;
      if (count === n) {
        return i;
      }
    }
  }
  return -1; // Return -1 if the nth element is not found
}
export const useTodos = () => {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    moveTodo(todoId: string, newState: TodoState, relativeIndex: number) {
      const oldTodoIndex = todos.findIndex((todo) => todo.id === todoId);
      if (oldTodoIndex === -1) {
        return;
      }
      const updatedTodos = [...todos];
      const [todo] = updatedTodos.splice(oldTodoIndex, 1);
      todo.state = newState;
      const newIndex = getNthIndex(
        updatedTodos,
        (todo) => todo.state === newState,
        relativeIndex,
      );
      updatedTodos.splice(newIndex + 1, 0, todo);
      setTodos(updatedTodos);
    },
    setTodos,
    setTodoState(todoId: string, newState: TodoState) {
      setTodos(
        todos.map((todo) =>
          todo.id === todoId ? { ...todo, state: newState } : todo,
        ),
      );
    },
  };
};
