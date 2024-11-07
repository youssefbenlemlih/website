---
title: "Mastering React: 5 Key Areas to Focus On"
description: "Learning React can be overwhelming. This post provides 5 areas of focus to help you master React!"
date: '2023-04-04'
image: "/images/posts/001-react-areas-of-focus/cover.png"
slug: master-react-areas-of-focus-2023
tags: ['react','typescript']
---

It's easy to get overwhelmed when learning **React**.

Thanks to the active community, there are so many libraries and frameworks, that make it even harder to **decide what to learn**.

In this post provides you with **5 areas of focus** to help you learn React <u>efficiently</u>.

## 1. How React Works

![How react works](images/posts/001-react-areas-of-focus/react-to-html.png)

The best investment of your time is to learn how React works.

Can you answer these questions?
* What problems does React solve?
* What is **React state**?
* How does React turn your code into reactive websites?

I see a lot of devs struggling with performance issues, unwanted or missing re-renders, and race conditions that **could be avoided by just taking the time to read the docs**.

The official React docs provide a good starting point:
* [React reconciliation](https://legacy.reactjs.org/docs/reconciliation.html), how react updates the DOM on state changes.
* [React docs](https://react.dev/learn), covers good practices and common pitfalls

## 2. TypeScript
![Typescript vs Javascript](images/posts/001-react-areas-of-focus/typescript-vs-javascript.png)

Any serious React app will use [TypeScript](https://www.typescriptlang.org/) nowadays.

TypeScript add type checking to your JavaScript code. By having static typing, you can **catch many bugs at build time** and drastically **improve your developer experience**. 

Therefore, it should be one of your priorities.

<Callouts.Warning>
Don’t fall in the trap of adding types everywhere, TypeScript can infer a lot from the context ;)
</Callouts.Warning>

## 3. State Management Libraries

![Redux architecture overview](images/posts/001-react-areas-of-focus/react-state-redux.png)

State management libraries and React go hand in hand.

They help manage the data of your app by providing hooks, components and utility functions.

For a while, there was a lot of hype around **client-state-management** like [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) and especially [Redux](https://redux.js.org/).

But after the hype cooled down, it became clear:  **client-state-management** can your code
complicated and are in many cases superfluous.

On the flip side, fetching data from a server is super common.

That is why it is worth it to get familiar with **server-state-management** libraries,
like [react-query](https://tanstack.com/query/latest/) and [SWR](https://swr.vercel.app/).

<Callouts.Tip>
Get familiar with the famous State Management Libraries, what are they used for, how do they work, which patterns do they use and how their api looks like.
</Callouts.Tip>

## 4. Styling

![Colors and sizes template](images/posts/001-react-areas-of-focus/colors-and-sizes-template.png)

Every frontend project needs styling.
There are a lot of way of styling your components in React:
* Prebuilt UI libraries: like [MUI](https://mui.com/) and [BlueprintJS](https://blueprintjs.com/)
* [Sass](https://sass-lang.com/) or [CSS](https://www.w3schools.com/css/)
* Using the [`styles`-prop](https://legacy.reactjs.org/docs/dom-elements.html#style)
* CSS in JS: like [styled-components](https://styled-components.com/)
* CSS frameworks: like [tailwindcss](https://tailwindcss.com/).


<Callouts.Tip>
Get familiar with the available options and how to integrate them in a project.
</Callouts.Tip>

## 5. React Based Frameworks

![NextJS](images/posts/001-react-areas-of-focus/nextjs.png)

Learn about the different
[React frameworks available](https://www.youtube.com/watch?v=2OTq15A5s0Y) (CRA, NextJS, Gatsby...)
and their [rendering patterns](https://www.youtube.com/watch?v=Dkx5ydvtpCA).

## Bonus: REST/GraphQL
As a frontend developer you will work with other backend devs.

You will consume APIs and also define the requirements for new endpoints.

Since REST is the most commonly used, having a good understanding of it can make you **✨stand out ✨**.

I hope this post helped you prioritize what to learn and put you on the right track to learn [React](https://react.dev/)!

Happy coding!