---
title: "Awesome Custom Hooks"
description: "Here are some of the most useful hooks in `usehooks-ts`"
date: "2024-11-05"
image: "/images/posts/023-awesome-react-hooks/cover.png"
slug: awesome-react-hooks
tags: ["react", "basics"]
---

<Callouts.Warning>
This post is a draft that is still in writing...
</Callouts.Warning>

Hooks have forever impacted the landscape of react. They’ve hanged the way we build and think in React.

Got rid of a lot of complexity and combersome patterns like HOC by encouraging composition over inheritance

But where the magic raally shines is with custom hooks.

So today I want to share a must-know hooks library useHooks ts has awesome hooks that
I personally can't go without.

The hooks come from the library usehook-ts, but I also provide the implementation for each hook that you can copy and paste to your code.

## My Top 10

In `usehooks-ts`, a popular library that provides a variety of ready-to-use React hooks, there are several hooks that
are commonly used and can be considered "must-know" for developers looking to enhance their React development.

Here are some of the most useful hooks in `usehooks-ts`:

## #1 `useLocalStorage`

Probably the one I use the most: `useLocalStorage`.
`useLocalStorage` is just like useState, with the difference beign that the value is automatically saved and restored in the local storage.

Which mean that if the user reloads the page, the state will still be there.

The difference in the API is that you have to provide a **key** used to identify the state:

```tsx
const [value, setValue] = useLocalStorage<string>("key", initialValue);
```

Checkout this example, where the state of the counter is preserved, even if you reload the page:

<Examples.AwesomeHooks.WithLocalStorage />

<Callouts.Tip>
If you want to persist the value only during the user sessions, then you can use [useSessionStorage](https://usehooks-ts.com/react-hook/use-session-storage).
<br/>
`useSessionStorage` is similar to `useLocalStorage`, but it uses the `sessionStorage`
API instead of
`localStorage`.
</Callouts.Tip>

<Accordion title="Get the code">
You can get the code directly from https://usehooks-ts.com/react-hook/use-local-storage#hook
</Accordion>

## #2 `useDebounceValue`

A hook to debounce a value, which is useful for optimizing expensive operations like search or API
calls.

```tsx
const search = useDebounceValue(value, 500);
```

<Examples.AwesomeHooks.Debouce />

## #3 `useEventListener`

A hook to easily add and remove event listeners in React components.

```tsx
useEventListener("click", handler);
```

## #4 `useMediaQuery`

A hook to handle media queries for responsive design.

```tsx
const matches = useMediaQuery("(min-width: 768px)");
```

<Examples.AwesomeHooks.EventListener />

## #5 `useWindowSize`

A hook that tracks the window's width and height.

```tsx
const { width, height } = useWindowSize();
```

<Examples.AwesomeHooks.WindowSize />

## #6 `useHover`

Detects whether an element is hovered.

```tsx
const ref = useRef(null);
const isHovered = useHover(ref);
```

<Examples.AwesomeHooks.Hover />

<Callouts.Warning>
Prefer using the `:hover` CSS selector cause it works without javascript.
</Callouts.Warning>

## #7 `useIntersectionObserver`

A hook to observe when an element enters or leaves the viewport.
<Examples.AwesomeHooks.IntersectionObserver />

```tsx
const ref = useRef(null);
const entry = useIntersectionObserver(ref, { threshold: 0.5 });
```

These hooks cover a wide range of common needs in React development, from managing local or session storage, handling
side effects, and optimizing performance to improving UX with features like debouncing, dark mode, and clipboard
support.

useInterval, useClipboard
