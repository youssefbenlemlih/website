---
title: "UI Test"
description: "A Description"
date: '2024-01-10'
image: "/images/posts/000-template/cover.png"
slug: ui-test
tags: [ 'react', 'typescript' ]
draft: true
---


> Note that this make your app automatically self-host the Google Font.
>
> This means that NextJS will add the font to your website so **no requests
> are sent to Google** by the users' browser.

<Callouts.Info>
This is a tip
</Callouts.Info>
<Callouts.Tip>
This is a tip
</Callouts.Tip>
<Callouts.Warning>
This is a tip
</Callouts.Warning>

Hooks are essential tools for React developers.

They allow you to easily add interactivity and transform a static website into an engaging and user-friendly experience.

But what exactly are hooks, and how can you use them effectively?

In this post, you’ll learn everything you need to know about hooks, with examples and best practices.

## What Are Hooks?

Hooks are built-in functions in React that give you access to various features.

They are recognizable by their prefix, `use` and include `useState`, `useEffect`, and `useContext`... and many more.

The true magic, however, lies in combining these hooks to create custom hooks tailored to your unique usecase.

But before we dive into custom hooks, let's start by asking why.

## Why hooks?

React Hooks address several challenges encountered in React development.

For context, React originally only supported Class Components. Function Components came [in React
16.8 ](https://www.encora.com/insights/class-components-vs-functional-components-in-react),
with the intention to **simplify the creation of stateless components**.

It takes less (boilerplate) code to achieve the same thing with Function Components:

```typescript tsx
import React, { Component } from "react";

// with class component:
class HelloClassComponent extends Component {
  render() {
    return (
      <p>Hello World!</p>);
  }
}

// with function component:
// less code, more readable
const HelloFunctionComponent = () => <p>Hello World!</p>;
```

The key motivations for using hooks were to address the problems emerging from using class components and empowering the
usage function components

<H3>Problem #1: Reusable Stateful Logic</H3>

React originally lacked a method to easily attach reusable behavior to class components.

This lead to complex patterns
like [render props](https://dev.to/jcutrell/react-anti-pattern-renderthing-50nd)
and [higher-order components](https://alvaropaconeto.medium.com/hoc-the-power-of-higher-order-components-in-react-946077eb09d0).

Hooks allow extracting logic **from components to functions.**

This means easier code sharing and testing.

<H3>Problem #2: Complex Component Management</H3>

Big, complex components became hard to understand due to a mix of unrelated logic in lifecycle methods.

With hooks complex logic can be broken down to smaller, reusable & combinable functions.

<H3>Problem #3: OOP vs Functional Programming</H3>

Classes in React introduce barriers to learning and can lead to confusion, especially regarding the use of
`this` in JavaScript ([Not as simple as you might think](https://www.w3schools.com/js/js_this.asp)).

Hooks eliminate the need for classes, providing a more straightforward approach to React development.

Beginners also don’t need to learn Object-Oriented Programming to get started with react.

## React Hooks

The must-know React Hooks are `useState`, `useEffect`, `useContext`, `useMemo`and `useCallback`.

### useState

`useState` is arguably the most used hook in React.

It allows you to define a variable in a component, that can be used when rendering the ui.

Take this simple toggle as an example:
We can use a state variable to achieve this effect with `useState`:

<Examples.Toggle />
<br />

**Explanation:** We use the `useState` hook to define a variable named `toggled` that is used to render the correct
icon.

`useState` takes the initial value as an argument (in this case `true`)
and returns a variable and an update function to set the value.

Each time the icon is clicked, `toggle`'s value is flipped (true→false→true).

The state is used to conditionaly render the correct icon `"ToggleLeft"` or `"ToggleRight"`.

<Callouts.Warning>

<br/>
```typescript tsx
state = false // ❌ don't
setState(false) // ✅ do
```
<br/>

Do not set state manually, always call setState.

`setState` not only updates the value. ot notifies React that component needs to be re-rendered.
</Callouts.Warning>

Here's the basic syntax:

<Callouts.Tip title={"Syntax Cheatsheet"}>
<br/>

  ```typescript tsx
  const [state, setState] = useState(initialValue);
  ```

<br/>

* `useState`: This is the hook provided by React to introduce state in functional components.
* `state`: The first element returned by useState is the current state value. You can think of it as the getter for
  the current state.
* `setState`: The second element returned by useState is the function that allows you to update the state. It's
  similar to the this.setState method in class components.
* `initialValue`: This is the initial value you provide for the state. It could be a primitive value like a number or
  a string, or even an object or an array.

</Callouts.Tip>

### useEffect

The useEffect hook in React is used for side effects in functional components.

Here's the basic syntax:

```typescript tsx
useEffect(() => {
  // Side effect code goes here
  // This code will run after the component renders
  return () => {
    // Cleanup code goes here
    // This code will run before the component unmounts or before the next useEffect execution
  };
}, [dependencies]);
```

Let's break down the components of this syntax:

* `useEffect`: This is the hook provided by React to perform side effects in functional components.
* `() => { /* Side effect code */ }`: This is the function that contains the code for the side effect. It will run after
  the component renders. The function can return a cleanup function (optional), which will be executed before the
  component unmounts or before the next useEffect execution.
* `[dependencies]`: This is an optional array of dependencies.
  If provided, the effect will only re-run if any of the dependencies have changed between renders.
  If no dependencies are provided (`[]`), the effect will only run once.

<Callouts.Warning>
UseEffect is one versatile hook.

It is commonly referred to as [useFootGun](https://twitter.com/cpojer/status/1609357205903638528), because of how easily
you can create
infinite loops, rave conditions and other bugs...

But when [used right](https://www.youtube.com/watch?v=QQYeipc_cik), it is one powerful tool to have in your belt.

</Callouts.Warning>

This can be used to cover many use cases.

<H3>Example 1: loading data from a server</H3>

Checkout this simple example where you can see a GitHub users details:

<Examples.GithubProfile/>
<br/>

It can be used Like follows in your app:

```typescript tsx
import React, { useState } from "react";
import GithubProfile from "./GithubProfile";

const App = () => {
  const [userName, setUserName] = useState("youssefbenlemlih");

  return (
    <div>
      <h1>GitHub Profile Viewer</h1>
      <input
        type={"text"}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <GithubProfile username={userName} />
    </div>
  );
};

export default App;
```

Now each time the user name changes, the effect function will be called and the new information will be shown.

```typescript tsx
import React, { useState, useEffect } from 'react';

const ShowWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    // Add event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div>
      <p>Window Width: {width}</p>
    </div>
  );
};

export default ShowWindowWidth;
```

Explain

Attention: in dev mode in react strict mode, react will run your effect and cleanup twice, to make it obvious when you
don’t provide a correct cleanup function (link external blog of tweet)

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