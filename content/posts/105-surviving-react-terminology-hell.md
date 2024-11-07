---
title: "Surviving React’s Terminology Hell"
description: ""
date: "2024-09-10"
image: "/images/posts/001-react-areas-of-focus/cover.png"
slug: surviving-react-termiology-hell
tags: ["react"]
draft: true
---

React is officially the most loved frontend library. It's one of the most used frontend libraries and has a great ecosystem and community supporting it.

Although it’s easy to write a hello world, as soon as you want to create a real project you find yourself facing a lot of technical jargon, like rendering, effects, state, memoization etc..

So today I want to explain to you all the terms that React devs use.

I’m gonna start with simple terms like jsx, Components, State and build upon it to explain more complex things like rerendering, memoization, [reconciliation](#reconciliation).
Understand the magic behind react.

## Components

The core concept in React is components.

A component is simply a **reusable part of the UI**.

It can be as small as a button or represent bigger parts, like a whole page.

In fact, everything in React is a component: A typical app will have a `Root` component (often called App) which includes `TopBar`, `Content` and `Footer` components.

<Callouts.Warning>
Todo: Example image
</Callouts.Warning>

Inside the TopBar you will have a logo component, some link componenets and so on…
<Callouts.Warning>
Todo: Example image of top bar
</Callouts.Warning>

So how do you define a component?
You can use basic elements like h1, p, … but the real power of react is in writing your own components.

You can create a component by defining a function. Staying with our simple example:

```jsx
function HelloWorldTitle() {
  return <h1>Hello, world!</h1>;
}
```

Now that you have defined your component, you need to render it in the browser, so that the user can actually see it.

For that, you call the method ReactDom.render, wich takes the target html element where you want your app to be rendered and your component as arguments and displays it.

Now the elephant in the room, is this weird syntax, that looks like a frankenstein of JavaScript and html. But don’t worry, it’s actully simple.

## jsx

_JSX_ is just a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

https://legacy.reactjs.org/docs/introducing-jsx.html#jsx-represents-objects

So when you write this jsx code,:

```tsx
<h1>Hello, world!</h1>
```

it get compiled to this code:

```tsx
const element = React.createElement("h1", {}, "Hello, world!");
```
// when to exaplain that an object is created for each component
I don’t know about you, but I find the jsx code way easier to read and work with.

It combines the intuitiveness of HTML with the power of JavaScript.

Great! now that you build a hello world components, let’s build something a bit more complex


Lets imagine for a moment that you're building a social media website with React.

Then you will have a social media card that looks something like this:

<Examples.SocialMediaCard/>

Looking good, right?

Obviously, you want to change the content of this component to show a whole feed.

In this case you want to change the username, the message, the comment count...

For that you can use props.

## Props

Props, short for properties, are parameters used to configure components.


<Examples.SocialMediaCardWithProps/>

## State

Save icon

Good to know: Hooks (verweis auf blog hooks)

## Rerender

your component is recalled. this children are recursively recalled (if the props changed)


## Virtual DOM

the changed component tree is represented in a virtual DOM (i.e. a JS object representing)

## reconciliation

## Keys

## Memoization







## Nope? 
- Arrow functions
- Context
- Routing
- State management
- Error boundaries
- Server components
