---
title: "React Basics: useState"
description: "Learn how to use useState Hook in React."
date: "2024-02-14"
modifiedDate: "2024-05-27"
image: "/images/posts/010-react-usestate/cover.jpg"
slug: react-usestate
tags: ["react", "basics", "typescript"]
youtubeKey: -N19J_H-XrM
---

`useState` is arguably the most used React Hook.

It allows you to add interactivity to your components & make your website more engaging.

In this post, you’ll learn everything you need to know about the `useState` hook, with interactive examples and best
practices.

## <Icon name="IconTarget"/>Goal

`useState` allows you to **define a variable inside your component**.

The state can then be used to **render the UI**.

## <Icon name="IconFocus"/>Usage

Using `useState` is pretty straightforward.

To use it in your application follow these **three steps**:

<H3>1. Import</H3>

To get started, **import** `useState` :

```typescript tsx
import { useState } from "react";
```

<H3>2. Definition</H3>

Then **define** a state inside your component:

```typescript tsx
function MyComponent() {
  const [name, setName] = useState("");
  // ...
}
```

Here we define a state called `name` with an initial value of `""` (empty string).

Here's the basic syntax:

<Callouts.Tip title={"Syntax Cheatsheet"}>

<br/>
```typescript tsx
const [state, setState] = useState(initialState);
```
<br/>

| Term           | Explanation                                                                                                                                                                                                                                                                                                |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `initialState` | This is the**initial value** you provide for the state. It could be a primitive value like a <ul><li>a **number**: `1`, `0`</li><li> a **string**: `""`, `"name"`</li><li> a **boolean** `true`, `false`</li><li>an **object**: `{name: "Youssef", age: 20"}`</li><li> an **array**: `["1","2"]`</li></ul> |
| `state`        | The first element returned by useState is the **current state value**.<br/> You can call your variable however you like, it doesn't have to be `state`.                                                                                                                                                    |
| `setState`     | The second element returned by useState is a **function** that allows you to **update the state**. <br/>It's a good practice to stick to the **`setState` naming convention**.<br/>                                                                                                                        |

</Callouts.Tip>

In a nutshell, `useState` takes the **initial value** as an argument and returns **a variable**
and **an update function** to set the value.

<H3>3. Binding</H3>

The last step is actually using the state. In other words, **bind your state to the UI**.

```typescript tsx
return (
  <input
    type={"text"}
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
)
```

Putting it all together:

<Examples.NameInput/>

## <Icon name="IconSparkles"/>Examples

The use cases for useState are infinite.

Let's start with an easy example.

### <Icon name="IconToggleLeft"/>On/Off Switch

<Examples.Toggle />

After defining the state `toggled` with an initial value of `true`, we show the user a switch.

Each time the switch is clicked, `toggle`'s value is flipped (`true`→`false`→`true`).

The state is used to conditionally render the correct text `"On"` or `"Off"`.

Moving to a more complex example, a Todo App!

### <Icon name="IconLayoutList"/>Todo App

<Examples.Todos/>

Although a bit more complex, we only use 2 states:

- `todos`: An array of todo items. Each Todo has an id, a name, and a checked field.
- `newTodoText`: Here we store the user input until submitted.

## <Icon name="IconBug"/>Pitfalls

While `useState` seems simple on the surface, there are a lot of pitfalls you should be aware of.

<H3>Setting The State Manually</H3>

```typescript tsx
state = false; // ❌ don't
setState(false); // ✅ do
```

Do not set state manually, always call setState.

The reason, is that `setState` doesn't only updates the value.

It also notifies React that component needs to be re-rendered.

<H3> Working With Arrays and Objects</H3>

Same applies for Arrays, don't mutate the array directly:

```typescript tsx
// ❌ don't
state.add(newElement);
// ✅ do
setState([...state, newElement]);
```

`[...state, newElement]` create a new Array with all the old state elements, plus the new Element.

This was React knows that there is a new value to show it to the user.

The same logic applies to objects:

```typescript tsx
// ❌ don't
state.name = newName;
// ✅ do
setState({ ...state, name: newName });
```

`{...state, name: newName}` create a new Object with all the fields from the old state, and overwrites the name.

<H3> Calling `setState` Subsequently</H3>

Mini Quiz: Can you guess what sill be shown when you click on the button?

<Examples.SetState3Times/>

Weird, right?

That's because when you call `setState`, React doesn't change the state value directly.

Instead, it re-renders your component with the new state.

A quick fix would be to call `setState` with a function that transforms the old value:

```typescript tsx
function onButtonClick() {
  setCount((oldCount) => oldCount + 1);
  setCount((oldCount) => oldCount + 1);
  setCount((oldCount) => oldCount + 1);
}
```

## <Icon name="IconHeartHandshake"/>Tips

<H3>Using `undefined`</H3>

When initializing a state with `undefined`, you can just leave out the initial value.

```typescript tsx
const [state, setState] = useState(undefined);
const [state, setState] = useState(); // same, but shorter
```

<H3>Single Source Of Truth</H3>

When working with different states, avoid duplicating data.

```typescript tsx
// ❌ don't
const [items, setItems] = useState([]);
const [selectedItem, setSelectedItem] = useState();
// ✅ do
const [items, setItems] = useState([]);
const [selectedItemId, setSelectedItemId] = useState();
const selectedItem = items.find((item) => item.id === selectedItemId);
```

The first approach was duplicating the selected element, you can easily deal with stale data when the items are updated.

The solution is to have the **bare minimum state** by **avoiding duplication**.

<H3>Typescript Usage</H3>

TypeScript is a great way to keep your code type-safe.

`useState` works seamlessly: You can pass a type parameter to the function:

```typescript tsx
const [name, setName] = useState<string>("");
```

If you try to call `setState` with anything but a string, your editor will scream at you!

But when providing an initial value, TypeScript can **infer the type** from it.

```typescript tsx
const [name, setName] = useState("");
```

So most of the time you can leave the explicit types out, while still having all the goodies from TypeScript!

<H3>`useState` Alternatives</H3>
`useState` is a powerful hook, but don't over use it!

[useReducer](https://react.dev/reference/react/useReducer) and [useLocalstorage](https://usehooks.com/uselocalstorage) can also
be great alternatives.
