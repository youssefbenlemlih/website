---
title: "Senior Devs Use These Hooks"
description: "The most useful custom Hooks in React that should definetly give a try."
date: "2024-11-22"
image: "/images/posts/023-awesome-react-hooks/cover.png"
slug: awesome-react-hooks
tags: ["react", "basics"]
youtubeKey: RCMQPqP8K8c
---

<Callouts.Tip>
This article originally appeared on [youssefbee.com](https://youssefbee.com). Go check it out for an a up-do-date version.
</Callouts.Tip>

Hooks have hanged the way we build React applications.

They got rid of a lot of code complexity by encouraging **composition over inheritance**

But where the magic really shines is with **custom hooks**.

So today I want to share <u><b>must-know hooks</b></u> that
I personally can't go without.

By the way, you can find all these hooks in [usehook-ts](https://usehooks-ts.com) or other react hook libraries _(like [useHooks](https://usehooks.com), [aHooks](https://ahooks.js.org/hooks/use-local-storage-state#remark) or [react-hookz](https://react-hookz.github.io/web/?path=/docs/side-effect-uselocalstoragevalue--example))_.

## #1 useLocalStorage

If you ever wanted to **persist a state between page reloads**, then this one is for you:

`useLocalStorage` is just like `useState`, with the difference being that the value is **automatically saved and restored** in the [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

You use it like `useState`, you just have to provide a **key** along the initial value:

```tsx
const [value, setValue] = useLocalStorage<string>("key", initialValue);
```

Checkout this example, where the state of the counter is preserved, even if you **reload the page**:

<Examples.AwesomeHooks.WithLocalStorage />

<Callouts.Tip>
If you want to persist the value only during the user sessions, then you can use [useSessionStorage](https://usehooks-ts.com/react-hook/use-session-storage).
<br/>
`useSessionStorage` is similar to `useLocalStorage`, but it uses the `sessionStorage`
API instead of
`localStorage`.
</Callouts.Tip>

## #2 useDebounceValue

A hook to **debounced a value**, which is super useful for optimizing expensive operations like search or API
calls.

```tsx
const [state, setState] = useState("");
// when state is stable for 500 ms, then debouncedState is updated
const debouncedState = useDebounceValue(value, 500);
```

<Callouts.Tip title="What's a debounced value?">
A debouced value is **a value that does not change too much**.

Imagine you're typing the word `React`. The state will change like this:

` `→ `R`→ `Re`→ `Rea`→ `Reac`→ `React`

But a debounced value will change like so:

` `→ `React`

</Callouts.Tip>

This is super useful because it **gets rid of jumping UI** when the user is typing and **reduces the API calls** you're making for the _intermediate states_.

Try it out yourself:

<Examples.AwesomeHooks.Debouce />

## #3 useEventListener

`useEventListener` is a neat hook that lets you easily add n event listener to any component:

```tsx
useEventListener("click", handler);
```

If you ever wanted to add an event listener to the document, the you know how boiler platy it can be.

But with `useEventListener` you can easily do that:

<Examples.AwesomeHooks.EventListener />

The cool thing is that the also clears up the event listener depending on the component lifecycle, so you don't have to worry about 'dangling' callbacks.

## #4 useMediaQuery

`useMediaQuery` is a hook that makes it easy to handle media queries inside your components:

```tsx
const matches = useMediaQuery("(min-width: 768px)");
```

Try opening this website on another device to see the difference ;) :
<Examples.AwesomeHooks.MediaQuery />

## #5 useWindowSize

`useWindowSize` is pretty stright forward: It tracks the window's width and height.

```tsx
const { width, height } = useWindowSize();
```

The nice this is that it provides the values ' in real time'.

Try resizing your window to see the size change.

<Examples.AwesomeHooks.WindowSize />

## #6 useHover

`useHover` is a hook I wish I discovered earlier...

It detects whether an element is hovered or not:

```tsx
const ref = useRef(null);
const isHovered = useHover(ref); // true or false
```

<Examples.AwesomeHooks.Hover />

<Callouts.Warning>
When applying different styles depending on the hover state, then prefer using the `:hover` CSS selector since it works without javascript.
</Callouts.Warning>

## #7 useIntersectionObserver

`useIntersectionObserver` is a hook used to observe when an element enters or leaves the viewport:

```tsx
const { isIntersecting, ref } = useIntersectionObserver({ threshold: 0.5 });
```

[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) is often used for lazy loading images, infinite scrolling, animations on scroll, and tracking element visibility in view for analytics or other dynamic changes.

<Examples.AwesomeHooks.IntersectionObserver />

## #8 useCopyToClipboard

`useCopyToClipboard` is a hook that allows you to copy text or data to the clipboard.

```tsx
const [copiedText, copyFn] = useCopyToClipboard();
```

It is often used for quick copying of information like URLs, codes, or messages with feedback on copy success.

<Examples.AwesomeHooks.Clipboard />

## #9 useInterval

```tsx
useInterval(function, duration);
```

The `useInterval` hook is used to repeatedly execute a function at specified intervals, similar to setInterval in vnilla JavaScript, but in React-friendly way.

<Examples.AwesomeHooks.Interval />

`useInterval` is useful for tasks like **auto-saving**, **updating clocks or timers** and **polling APIs** (although, you should really use [react query](/posts/react-query-complete-guide) for this).
