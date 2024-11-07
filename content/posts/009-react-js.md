---
title: "What is React?"
description: "A collection of must know git commands."
date: '2023-12-03'
image: "/images/posts/009-react-js/cover.png"
slug: react-js
tags: [ 'react' ]
draft: true
---
If you're learning web development, then you will keep stumbling about the term 'React'.

React or Reactjs became a cornerstone in the frontend world, so knowing what React is used for is crucial.

In this blog post, you'll learn what is React, why it is used and how to use it to build modern web experiences.

## What is React?

React, also known as React.js or ReactJS, is a **JavaScript library used to create web applications**.

It is used to
build **user-friendly** and **scalable** single-page applications.

React was first
released in 2013 and has since gained immense popularity for its simplicity and efficiency.

The library is open-source and maintained by Meta.

## Why React?

React offers a lot of advantages, compared to traditional web development.

### 1. Component-Based Architecture

React follows a component-based architecture, allowing developers to break down the user
interface into reusable components.

Typical components in React include `Button`, `SideBar`, `SearchBar`...etc.

Each component can use other components, just like Legos!

This makes it possible to create complex User Interfaces with **simple code**.

### 2. Declarative Syntax

React uses a declarative syntax, making the code simple and easy to maintain.

**This means:** You describe how the
UI should look based on the application's state, and React takes care of
updating the UI to match that state.

Take a simple counter application as an example:

<Examples.Counter/>

Now with here's how to do the same using HTML and JavaScript only

(Spoiler, it's way longer)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Counter with Vanilla JS</title>
  <meta charset="UTF-8" />
</head>

<body>
<div>
  <!-- 
    This is the skeleton of the UI
    Number is empty because we don't know the initial value yet
   -->
  <span id="number"></span>
  <button id="increase">+</button>
</div>
<script src="src/index.js"></script>
</body>
</html>
```

<br/>

```typescript tsx
// manually grab the button and the text 
// & hope that they do exist
const increase = document.querySelector("#increase"),
  number = document.querySelector("#number");

let count = 0;

// show the user the value of the current count
const updateNumber = () => {
  number.innerText = `Count:${count}`;
};

const handleAdd = () => {
  count = count + 1;
  printNumber();
};

updateNumber() // show the initial value to the user
// bind the button with the adding function
add.addEventListener("click", handleAdd);
```

While the HTML and JavaScript code works as well, it is **error-prone**:

- you may forget to call `updateNumber` when updating the value of the counter
- you may change the ids of the HTML elements and forget to update the JavaScript code

...which is what makes it unscalable.

Plus, wost Web Apps are more complex than a counter, though.

You have **fetch data from a server**,
**show a loading state**, then
**create new UI elements to show the data to the user**...etc.

The HTML/JavaScript code will get unmanageable **really fast**.

### 3. Efficient Updates

One of React's key features is its ability to **efficiently update the UI**.

Behind the scenes, React would use multiple optimization mechanisms, like **Updates Batching** and **Updates
Distillation**.

#### Update Batching

In simple terms, "Update Batching" means grouping update operations together.

So instead of running two update commands that override each other like so:

```typescript tsx
number.innerText = "Count:1";
// overwite previous command
number.innerText = "Count:2";
```

React would just run the last one:

```typescript tsx
number.innerText = "Count:2"
```

#### Updates Distillation

When UI changes are needed, React will carefully check exactly what needs to be changed and only does that.

For example, if your components returns `<span>Count:2</span>` and the HTML
shows `<span>Count:1</span>`,

React would just run

```typescript tsx
number.innerText = "Count:2"
```

It would not destroy the old element and create a new one:

```typescript tsx
oldNumber.remove();
// create a new span element
const newNumber = document.createElement("span");
newNumber.innerText = "Count:2";

// add the newly created element and its content into the DOM
const parentElement = document.getElementById("parent");
parentElement.appendChild(newNumber);
```

<Callouts.Info>
Internally, React uses a [Virtual DOM](https://blog.logrocket.com/virtual-dom-react/), i.e. a virtual representation of the real DOM to check for differences between the
wanted state (Virtual DOM) and the real state (Browser DOM).

This is done through a comparison algorithm called [diffing](https://legacy.reactjs.org/docs/reconciliation.html).
</Callouts.Info>

This can lead significant performance increase, contributing to a more
responsive user interface and better performance.

### 4. Unidirectional Data Flow

React enforces a unidirectional data flow.

Meaning, data can be passed from parent to child components in a Top-Down manner.

This makes it easier to understand how data changes over time.

Moreover, having a single source of truth helps avoid bugs related to outdated information.

### 5. Strong Community and Ecosystem

React has a large and active community of developers.

And the internet is exploding resources and tutorials!

Most importantly, there are a lot of third-party libraries available (via [npm](npm.org)).

This makes creating Web Apps downright **effortless**.

The ecosystem around React is robust, and offers different libraries for:

* **Managing state**: like [Redux Toolkit](https://redux-toolkit.js.org/), [jotai](https://jotai.org/), [React Query](https://tkdodo.eu/blog/practical-react-query) ... and [much more](https://www.trio.dev/react/resources/7-top-react-state-management-libraries).
* **UI Libraries**: like shadcn/ui(https://ui.shadcn.com/), [Radix Themes](https://www.radix-ui.com/), [Chakra UI](https://chakra-ui.com/), [MUI](https://mui.com/) ... and [much more](https://www.wearedevelopers.com/magazine/best-free-react-ui-libraries).
* **Navigation**: like [TanStack Router](https://tanstack.com/router/latest), [React Router](https://reactrouter.com/en/main/components/navigate)

### 6. SEO-Friendly

React applications can be made more SEO-friendly with the help of server-side rendering (SSR) or static site
generation (SSG).

This ensures that search engines can crawl and index the content, improving the visibility of the application on search
engine results.

<Callouts.Tip>
If you're building a content website to be shown on search engines, e.g. a blog, then definitely checkout
[Theo's video on NextJS](https://create.t3.gg/en/usage/next-js).
</Callouts.Tip>

### 7. Tooling and Developer Experience

![React Dev Tools In Use](/images/posts/009-react-js/react-dev-tools.png)

React comes with excellent developer tools, such as
the [React DevTools](https://react.dev/learn/react-developer-tools) extension.

The browser extension allows you to:

* inspect and debug React component hierarchies,
* view the state value, and
* inspect the application performance thanks to its
  built-in [profiler](https://legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html).

It's super handy and makes debugging React Apps a breeze.

### 8. React Native

Probably the most relevant argument for learning React, is React Native.

React Native is a JavaScript library built on top of React that allows you to **build Cross-Platform Apps**.

Once you learn React, you can easily pick up React Native!

Plus, if you have plans to create an application, you can easily share code between React
and React Native projects.

## Who uses React?

React is widely used nowadays.

In fact, you most likely used hundreds of websites powered by React without even knowing
it!

<H3>Facebook</H3>

![Facebook homepage](/images/posts/009-react-js/facebook-homepage.png)

React was developed and is actively maintained by Meta. Many of Meta's web applications, including the main
Facebook site, [use React](https://www.reddit.com/r/reactjs/comments/4edsvi/does_facebook_use_react_on_facebookcom/)
extensively.

<H3>Instagram</H3>

![Instagram homepage](/images/posts/009-react-js/instagram-homepage.png)

The social media platform by
Meta, [uses React for its web application](https://www.quora.com/How-does-Instagram-use-ReactJS). React's
component-based
architecture is shown to be well-suited for Instagram's dynamic and interactive user interface.

<H3>WhatsApp</H3>

![WhatsApp Web homepage](/images/posts/009-react-js/whatsapp-web-homepage.png)

The web interface of the popular messaging
application [uses React](https://www.quora.com/What-web-framework-is-the-new-WhatsApp-web-interface-built-on).

<H3>Netflix</H3>

![Netflix homepage](/images/posts/009-react-js/netflix-homepage.png)

The streaming
giant, [employs React](https://rootstack.com/en/blog/why-netflix-chose-react-build-its-user-interface#:~:text=chance%20of%20errors.-,Benefits%20Netflix%20Gained%20Using%20React%20to%20Create%20User%20Interfaces,its%20great%20popularity%20among%20developers.)
in its user interface to deliver a seamless and responsive user experience.

<H3>Airbnb</H3>

![Airbnb homepage](/images/posts/009-react-js/airbnb-homepage.png)

The leading a platform for lodging and travel
experiences, [uses React](http://devnacho.com/2016/03/20/how-airbnb-uses-react/) for its web application. The
website's user-friendliness and consistent UI elements can easily be achieved with React.

<H3>Uber</H3>

![Uber homepage](/images/posts/009-react-js/uber-homepage.png)

The ride-sharing and transportation
company, [uses React](https://www.uber.com/en-DE/blog/introducing-base-web/#:~:text=Introducing%20Base%20Web%2C%20Uber's%20New%20Design%20System%20for%20Building%20Websites%20in%20React,-16%20April%202019)
in its web applications to manage complex UI
components, like interactive maps.

Other companies [use React](https://www.cmarix.com/blog/most-popular-websites-built-with-react/), including PayPal,
Reddit, Pinterest, BBC and Atlassian.

## How to use React?

To get started, you can either install React on your computer or use an online sandbox.

### Sandboxed React

The fastest way to try React, is to use a sandbox.

I recommend [CodeSandbox](https://codesandbox.io/p/sandbox/runtime-dawn-kzcvjr)
and [StackBlitz](https://stackblitz.com/edit/react-p6zw8e?file=src%2FApp.js).

Once you decided to create a 'real' project, you can install React locally.

### Local Installation

Setting up a React project is super easy, here is how to do it:


First make sure you have [installed npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

To create a React project called 'app', open a terminal window and run the command:

```bash
npx create-react-app app
```

This will create folder `app` containing your project folders. You can change to the directory by running:

```bash
cd app
```

Install the project dependencies with this command:

```bash
npm install
```

Then, run you project with the command:

```bash
npm run start
```

This should open a new browser window with a live preview of your website:

If it doesn't happen automatically, you can open the link `localhost:3000` in your browser.

Open the folder using a code editor like VSCode.

Make changes to `App.js` and see the website update automatically on your browser .

## What next?

The best way to learn React is the [official documentation](https://react.dev/).

It's full of easy-to-follow guides, interactive examples and quiz's!

Make sure to join the [#newsletter] 

