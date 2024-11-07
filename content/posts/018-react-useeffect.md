---
title: "React Basics: useEffect"
description: "Learn how to use useState Hook in React."
date: '2024-02-14'
modifiedDate: '2024-02-16' 
image: "/images/posts/010-react-usestate/cover.png"
slug: react-useeffect
tags: [ 'react', "basics", 'typescript' ]
draft: true
---

The useEffect hook in React is used for side effects in functional components.

Here's the basic syntax:

```typescript tsx
useEffect(() => {
  // Side effect code goes here
}, [dependencies]);
// This code will run each time the dependencies change
```
Let's break down the components of this syntax:

* `useEffect`: This is the hook provided by React to perform side effects in functional components.
* `() => { /* Side effect code */ }`: This is the function that contains the code for the side effect. It will run after the component renders. The function can return a cleanup function (optional), which will be executed before the component unmounts or before the next useEffect execution.
* `[dependencies]`: This is an optional array of dependencies.
  If provided, the effect will only re-run if any of the dependencies have changed between renders.
  If no dependencies are provided (`[]`), the effect will only run once.

<Callouts.Warning>
UseEffect is one versatile hook.

It is commonly referred to as [useFootGun](https://twitter.com/cpojer/status/1609357205903638528), because of how easily you can create
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
import React ,{ useState }from "react";
import GithubProfile from "./GithubProfile";

const App = () => {
  const [userName,setUserName]=useState("youssefbenlemlih");

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

