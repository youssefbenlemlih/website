---
title: "React Query Is Here To Stay"
date: 2024-10-29
slug: react-query-is-here-to-stay
---

<Callouts.Tip>
This article originally appeared on [youssefbee.com](https://youssefbee.com). Go check it out for an a up-do-date version.
</Callouts.Tip>

Hey, it's Youssef again,

So I read a statistic last week that really blew my mind:

**One in every 6 React** projects uses react-query.

🤯 Crazy, right?

The reason is actually quite simple…

Data fetching in React can be really buggy.

Don’t believe me? Then check this out:

## 🐛 Find the Bugs

Can you guess, how many problems this code has?

```typescript tsx
function Category({ category }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`${endpoint}/${category}`)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((e) => setError(e));
  }, [category]);

  // Return JSX based on data and error state
}
```

If you said 5, then you’re right!

If not, it’s fine… so here they are:

- **Race condition**: useEffect runs every time that category changes. Since network requests can take longer times, you can overwrite data with the previous useEffect call.
- **No Loading state**: There is no spinner or loading indicator when the data is still loading. Not a cool UX!
- **Empty State Ambiguity**: There is a fundamental modeling problem: Since data is initialized with an empty array, there is no way of telling if it was loaded yet or if the server responded with an empty list.
- **Data & Error mismatch**: the data and error are two different states that actually are connected. If the server responds with an error and a new category is given, you will end up with data AND error values.
- **Will fire twice**: StrictMode is React’s way of helping find useEffects that lack a cleanup function. The way it does it is by calling your Effects twice in development, which can lead to weird effects...

## ⚛️ The Solution: React Query

React Query tackles all of these problems and waaay more…!

So I made a full course video that covers everything you need to know about react-query.

It starts with the basic building blocks (queries and mutations) and combines them to create advanced patterns like pagination and optimistic updates.

Check it out on YouTube now 👇

<LinkButton href="https://youtu.be/CwcJUknXYoo">
Watch on YouTube
</LinkButton>

See you in the next one,

Youssef Benlemlih

IT Consultant & YouTuber
