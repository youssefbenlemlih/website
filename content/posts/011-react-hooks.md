---
title: "React hooks"
description: "Learn how to use the map function in React to render dynamic content."
date: "2024-01-10"
image: "/images/posts/008-react-map/cover.png"
slug: react-hooks
tags: ["react", "typescript"]
draft: true
---

Hooks are essential tools for React developers.

They **allow you to easily add interactivity** and transform a static website into an engaging and user-friendly experience.

But what exactly are hooks, and how can you use them effectively?

In this post, you’ll learn everything you need to know about hooks, with **examples and best practices**.

## What Are Hooks?

Hooks are **built-in functions in React** that give you access to various features.

They are recognizable by their prefix, `use` and include `useState`, `useEffect`, `useContext`... and many more.

But before exploring the existing Hooks, why do we need them in the first place?

## Why hooks?

React Hooks **address several challenges** encountered in React development.

The story goes like this:

React originally only supported Class Components.

Function Components came [in React 16.8 ](https://www.encora.com/insights/class-components-vs-functional-components-in-react),
with the intention to **simplify the creation of stateless components**.

With Function Components, it takes less (boilerplate) code to achieve the same thing.

```typescript tsx
import React, { Component } from "react";

// 😒 with class component:
class HelloClassComponent extends Component {
  render() {
    return (
      <p>Hello World!</p>);
  }
}

// 💪 with function component:
// ✅ less code, more readable
const HelloFunctionComponent = () => <p>Hello World!</p>;
```

So Hooks were introduced for two main reasons:

1. empowering the function components
2. address the problems emerging from using class components

<H3>Problem #1: Reusable Stateful Logic</H3>

React originally **lacked a method** to easily **reuse code with** class components.

This lead to complex [anti-patterns](https://en.wikipedia.org/wiki/Anti-pattern)
like [the render props](https://dev.to/jcutrell/react-anti-pattern-renderthing-50nd)
and [higher-order components](https://alvaropaconeto.medium.com/hoc-the-power-of-higher-order-components-in-react-946077eb09d0).

<Icon name="IconMoveRight"/> Hooks allow extracting logic **from components to functions.**

<Icon name="IconMoveRight"/> This means easier code sharing and testing.

<H3>Problem #2: Complex Component Management</H3>

Big, complex components became hard to understand due to a mix of unrelated logic in lifecycle methods.

<Icon name="IconMoveRight"/> With hooks complex logic can be broken down to smaller, reusable & combinable functions.

<H3>Problem #3: OOP vs Functional Programming</H3>

Classes in React introduce barriers to learning and can lead to confusion, especially regarding the use of
`this` in JavaScript ([Not as simple as you might think](https://www.w3schools.com/js/js_this.asp)).

<Icon name="IconMoveRight"/> Hooks eliminate the need for classes, providing a more straightforward approach to React development.

<Icon name="IconMoveRight"/> Beginners also don’t need to learn Object-Oriented Programming to get started with react.

## React Hooks

The must-know React Hooks are `useState`, `useEffect`, `useContext`, `useMemo`and `useCallback`.

### useState

`useState` is arguably the most used hook in React.

It allows you to define a variable in a component, that can be used when rendering the ui.

Take this simple toggle as an example:
We can use a state variable to achieve this effect with `useState`:

<Examples.Toggle />
<br />

**Explanation:** We use the `useState` hook to define a variable named `toggled` that is used to render the correct icon.

`useState` takes the initial value as an argument (in this case `true`)
and returns a variable and an update function to set the value.

Each time the icon is clicked, `toggle`'s value is flipped (true→false→true).

The state is used to conditionaly render the correct icon `"ToggleLeft"` or `"ToggleRight"`.

<Callouts.Info>
Checkout the full useState Guide.
</Callouts.Info>

### useEffect

The useEffect hook in React is used for side effects in functional components.

Here's the basic syntax:

```typescript tsx
useEffect(() => {
  // Side effect code goes here
}, [dependencies]);
// This code will run each time the dependencies change
```

Let's break down the components of this syntax:

- `useEffect`: This is the hook provided by React to perform side effects in functional components.
- `() => { /* Side effect code */ }`: This is the function that contains the code for the side effect. It will run after the component renders. The function can return a cleanup function (optional), which will be executed before the component unmounts or before the next useEffect execution.
- `[dependencies]`: This is an optional array of dependencies.
  If provided, the effect will only re-run if any of the dependencies have changed between renders.
  If no dependencies are provided (`[]`), the effect will only run once.

This can be used to cover many use cases.

<H3>Example 1: loading data from a server</H3>

Checkout this simple example where you can see a GitHub users details:

<Examples.GithubProfile/>
<br/>

### useContext

UseContext is a hook that allows you to access a react context inside a function component.

In a nutshell, you can think of a context as a state available to all children.

The problem that react context fixes is prop drilling

Prop drilling: having to pass a prop multiple layers down because it’s needed a specific component.

Take for example an apps theme.

React context is commonly used for sharing the application theme, since the low

### useMemo

### useCallback

### Rare hooks

While React does come with other hooks, there are mostly meant for advance usages, like for developping libraries.

These include:

useDebugValue, useId, useSyncExternalStrore, useDeferredValue, useTransition, use, useId

It may be worth getting to know the other hooks, but for educational purpose only.

## What Next?

outro and link to blog post about creating custom hooks.

Hook in react. UseWFT. Thinking in hooks
