---
title: "Awesome React Tips (You Need To Know)"
description: ""
date: "2024-10-17"
modifiedDate: "2024-11-05"
image: "/images/posts/021-react-quick-tips/cover.png"
slug: react-quick-tips
tags: ["react", "basics"]
---

## Tip #1: Simplify `useState` Types

```typescript tsx
// instead of this
const [userId, setuserId] = useState<string | undefined>(undefined);
// do this
const [userId, setuserId] = useState<string>();
```

**Explanation**: Whe you don't provide an initial state to `useState`, it is `undefined` by default.

## Tip #2: Avoid Premature Components

React components are cool.

But creating components too early will make it harder to work with:

- you have to jump back and forth between and the component and it's parent
- you have to define the Props too early, often leading to an unsuitable API

Instead, consider writing inline components.

Once you see that there is repetition (or needing an item-level state) then extracting the code to a component is easy.

Before:

```tsx
const TaskList = ({ tasks, toggleTask }) => (
  <div>
    <h1>Task List</h1>
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => toggleTask(task.id)}
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {task.title}
        </li>
      ))}
    </ul>
  </div>
);
```

After

```tsx
const TaskList = ({ tasks, toggleTask }) => (
  <div>
    <h1>Task List</h1>
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => toggleTask(task.id)}
        />
      ))}
    </ul>
  </div>
);
```

## Tip #3: Fix React Context Boilerplate

React has some rough edges... one of them is React Context.

Creating a react context is too _BOILERPLATY_.

Checkout how much code you need just to share one value globaly:

```tsx
// Without createReactContext
import React, { createContext, useContext, useState, ReactNode } from "react";

// Step 1: Define the shape of the context
interface TitleContextType {
  title: string;
}

// Step 2: Create the context with an initial undefined value
const TitleContext = createContext<TitleContextType | undefined>(undefined);

// Step 3: Define a provider component props
interface TitleProviderProps {
  children: ReactNode;
}

// Step 4: Create a provider component props
export const TitleProvider: React.FC<TitleProviderProps> = ({ children }) => {
  const [title] = useState("Default Title");

  return (
    <TitleContext.Provider value={{ title }}>{children}</TitleContext.Provider>
  );
};
```

But with this one function you can simplify it to look like this:

```tsx
// 🔥 definition (just provide the business logic)
const TitleContext = createReactContext(() => {
  const [title, setTitle] = useState("");
  return { title, setTitle };
});

// ✅ Built-in Provider
<TitleContext.Provider>...</TitleContext.Provider>;

// ✅ Usage in Components
TitleContext.use();
```

The `createReactContext` function. (Copy and paste is in you code repository.)

```tsx
function createReactContext<T>(
  init: () => T,
  defaultValue: T | undefined = undefined,
) {
  const Context = createContext<T | undefined>(defaultValue);

  function Provider({ children }: { children?: ReactNode }) {
    const value = init();
    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useEasyContext() {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error(
        "Context must be used within a Provider! Wrap wour app in <Context.Provider/>",
      );
    }
    return context;
  }
  return { use: useEasyContext, Provider };
}
```
