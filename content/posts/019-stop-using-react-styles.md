---
title: "Stop Using 'style' in React 🤦"
description: "React's style prop comes with a lot of problems. Checkout these 4 alternatives ways to style your app in React."
date: '2024-05-27'
modifiedDate: '2024-07-03'
image: "/images/posts/019-stop-using-react-styles/cover.png"
slug: stop-using-react-styles
tags: [ 'react', "basics", ]
youtubeKey: E0rzFKAafdk
---

<Callouts.Tip>
This article originally appeared on [youssefbee.com](https://youssefbee.com). Go check it out for an a up-do-date version.
</Callouts.Tip>

One of the first things you learn in react, is how to style your components with inline styles.

But while inline styles may be easy to use, they come with a lot of problems

In theory inline styles promise to be similar to CSS, but in practice it lacks a lot of the basic features like
selectors, media queries and custom properties.

This makes it impossible to have something as simple as hover styles or responsive design without JavaScript.

Not only that, you can easily clutter up your components, there is no built-in mechanism for reusing styles and there
have been a lot of [discussion about performance
issues](https://www.reddit.com/r/reactjs/comments/rercdd/why_do_the_react_docs_say_inline_styles_are/).

So in this post, I want to talk about 4 better approaches for styling in React.

By the end of the post, not only will you have a good overview over the styling possibilities in React, but you will
also find approaches that will make your website more beautiful and your code cleaner.

##  CSS

The first approach that I must mention, would be to use plain old CSS.

CSS has been there for a long time, and therefore it is common knowledge.

The main advantages are that no additional learning is needed, and you have access to all the browser features.

But, it has one big problem: it’s prone to errors.

It can be hard to keep your styles in sync with your components.

You have to manually check that the nesting and class names defined inside your CSS files match the JSX, every time you
make a change.

This brings us to the second approach, that is using CSS modules.

## CSS modules

With CSS modules, you define your styles inside a `.module.css` file next to your component.

Then you can import the classes by name and apply them to your component.

Not only do you have all the advantages of plain old CSS, there is also compile time checking.

Meaning: if you try to import a non-existing class, you will get an error.

CSS modules also help you avoid having one huge CSS file for the whole application. Hence its name: CSS modules.

But what if you want to conditionally apply styles or have a consistent design system throughout the application?

This is where styled-components really shines.

## Styled Components

styled-components is a library lets you write actual CSS in your JavaScript. This means you can use all the features of
CSS, including media queries, pseudo-selectors, nesting, etc.

The usage is super simple, you can use the provided styled object to define your components and write real CSS. You can
also define custom props and use them in the styling.

The biggest plus of this library, is that it’s highly customizable. You can define your own theme, with pixel perfect
sizes, breakpoints, and colors, and use it throughout your components.

This makes it the perfect choice if you have a design system from a UI designer that you want to implement.

And with the strong Ecosystem around it, the possibilities are endless!

But what if you don’t want to build everything from scratch?

What if you want a beautiful UI to start with, that is still customizable?

Then, you should look no further than Tailwindcss.

## TailwindCSS

Tailwind has gained a lot of traction in the last years. Personally, it’s one of the first packages I install in my new
project. Some may even consider it a de facto standard.

While most people either love it or hate it, there is a reason it got so popular.

So what is Tailwind?

Tailwind is simply a collection of predefined classes that you can use in your components.

This allows you to style your components without ever leaving your markup.

The cool thing about it, is that it also comes with a beautiful standardized selection of colors, text sizes,
breakpoints and animations.

You never have to start from scratch, and your website looks modern from the beginning.

Of course, you can also add your own custom styles in the configuration file.

Now we have to address the elephant in the room: there is a learning curve!

When you just start working with Tailwind, you will be constantly checking the documentation.

But luckily the website is really easy to navigate, and it’s perfectly documented and there is VSCode extension to
search the documentation without leaving your editor.

Once get the hang of it, the developer experience is just superior!

So give it a try in your next project, if you haven’t already!

BTW, if you struggle to choose colors, fonts and icons, then I have put together a resource collection containing all of
that and more.

You can find it at [here](/frontend-kit).