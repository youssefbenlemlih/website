---
title: "The Complete Guide To React Query"
description: "A complete guide to React query, a server state management library, that solves many problems related to fetching data."
date: "2024-10-23"
image: "/images/posts/003-react-query-complete-guide/cover.png"
slug: react-query-complete-guide
tags: ["react", "react-query"]
youtubeKey: CwcJUknXYoo
---

Managing server data in web applications can be a complex and daunting task

Luckily, React query, a **server state management library**, solves
many problems related to querying data. Plus, it can
drastically simplify your code.

## Data Fetching Challenges

Fetching data from a backend server in React can be tricky.

Emerging challenges include:

- **Boilerplate code** due to handling `loading` and `error` states
- **Sharing fetched data** throughout the application leading to global state.
- **Caching** and **managing stale data**
- **Race conditions** when making simultaneous `POST` requests
- **Dependencies between queries**

... and [much more](https://tanstack.com/query/latest/docs/react/overview#motivation)!

## Intro To React Query

[React Query](https://tanstack.com/query/v4/) provides a minimalistic Api, made out of two major exports: `useQuery`
and `useMutation`

To use [React Query](https://tanstack.com/query/v4/), you need to install it:

```bash
npm install @tanstack/react-query
```

And wrap your application with `QueryClientProvider`

```typescript tsx
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvidder client={queryClient}>
      <Example />
    </QueryClientProvidder>
  );
}
```

You can now use `useQuery` and `useMutation` throughout the app.

### The useQuery Hook

The `useQuery` hook is used for fetching data. Here is a simple example:

```typescript tsx
function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/tannerlinsley/[React Query](https://tanstack.com/query/v4/)")
        .then((res) => res.json())
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name} < /h1>
      <p> {data.description} < /p>
      <strong>👀 {data.subscribers_count}
      </strong>{" "}
      <strong>✨ {data.stargazers_count}
      </strong>{" "}
      <strong>🍴 {data.forks_count}
      </strong>
    < /div>
  );
}
```

`useQuery` accepts a cache-key (`queryKey`), a query function and optionally further parameters.

You can check the state of the query with the provided fields and easily implement
loading and error states.

The beauty of `useQuery` comes from how easily you can create your own custom hooks.

Here is an example of a hook for fetching infos about a GitHub repository

### Custom Query Hook Example

Easily create a `useGithubRepo`-hook for fetching
data about GitHub repositories using GitHub API.

```typescript tsx
const useGithubRepo = (username: string, project: string) =>
  useQuery({
    queryKey: ["useGithubRepo", { username }, { project }],
    queryFn: () =>
      fetch(`https://api.github.com/repos/${username}/${project}`).then((res) =>
        res.json(),
      ),
    enabled: !!username && !!project,
  });
```

**What's happening here?**

- `queryKey` is composed of a unique id: (`'useGithubRepo'`) and all the parameters of the query function. Since
  [React Query](https://tanstack.com/query/v4/) takes care of caching, if we use the hook in multiple components, we
  will only fetch once. Also, the query
  function is only called when needed (when called in mounted components)!
- `enabled` is true when both `username` & `project` are defined. This means we will not fetch unless we have correct
  parameters!

The hook can be used in components like this:

```typescript tsx
function Example({ username, project }) {
  const { isLoading, error, data } = useGithubRepo(username, project);
  // rest
}
```

### The useMutation Hook

`useMutation`is the evil twin of `useQuery` (just joking...).

It is a hook that for changing data in the backend. For example checking an
item in a todo list or adding an item to the
basket.

In RESTful `API`s, we are talking about `PUT`, `POST` & `DELETE` requests.

Similar to `useQuery`, `useMutation` is a hook with all useful fields and parameters.

Checkout the following `AddComment` example:

### Mutation Hook Example

```typescript tsx
function AddComment({ id }) {
  const { mutate, isLoading, error } = useMutation({
    mutationFn: (newComment) =>
      axios.post(`/posts/${id}/comments`, newComment),
  })

  return (
    <form
      onSubmit={function(event) {
        event.preventDefault()
        mutate(new FormData(event.currentTarget).get('comment'))
      }}
    >
      <textarea name="comment" />
      {isLoading && <p>Submitting</p>}
      {error && <p>Error!</p>}
      <button
        disabled={isLoading}
        type="submit"
      >
        Comment
      </button>
    </form>
  )
}
```

When the user submits the form, the button will be disabled.
Additional text is shown when the request is pending and if there is an error.

## Advanced Features

Using React Query allows you to create complex user
interactions with minimal code.

Let's see how to handle 3 common use cases:
**Optimistic Updates**, **Polling** and **Global Error Handling**.

### Optimistic Updates

Optimistic Updates can drastically improve the User Experience.

In an optimistic update, the UI behaves as though a change was
successfully completed before receiving confirmation from
the server that it actually was.

This leads to significantly
shorter waiting times and a smoother UI.

Here's an example of updating a Todo in the frontend before the request
is accepted by the backend server.

```typescript tsx
const queryClient = useQueryClient();

useMutation({
  mutationFn: updateTodo,
  // When mutate is called:
  onMutate: async (newTodo) => {
    // Cancel any outgoing refetches
    // (so they don't overwrite our optimistic update)
    await queryClient.cancelQueries({ queryKey: ["todos"] });

    // Snapshot the previous value
    const previousTodos = queryClient.getQueryData(["todos"]);

    // Optimistically update to the new value
    queryClient.setQueryData(["todos"], (old) => [...old, newTodo]);

    // Return a context object with the snapshotted value
    return { previousTodos };
  },
  // If the mutation fails,
  // use the context returned from onMutate to roll back
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(["todos"], context.previousTodos);
  },
  // Always refetch after error or success:
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  },
});
```

### Polling

Polling is to repeatadly fetch a resource to show it's state.

For example to show the live score of a game.

To achieve **polling**, you can simply set the option `refetchInterval`
to your desired polling interval (in milliseconds).

```typescript tsx
const useGithubRepo = (username: string, project: string) =>
  useQuery({
    queryKey: ["useGithubRepo", { username }, { project }],
    queryFn: () =>
      fetch(`https://api.github.com/repos/${username}/${project}`).then((res) =>
        res.json(),
      ),
    enabled: !!username && !!project,
    // refetch every 5 seconds...
    refetchInterval: 5000,
  });
```

### Global Error Handling

You can set up default error handlich for the entire app
when initializing the `QueryClient` in your app.

For example, you may choose to notify Sentry when there is
fetching error or show a toast when a user request is rejected.

```typescript tsx
const client = new QueryClient({
  defaultOptions: {
    queries: {
      onError: () => {
        // notify sentry?
      },
    },
    mutations: {
      onError: () => {
        // show error toast?
      },
    },
  },
});
```

## Resources

- [Optimistic Updates | TanStack Query Docs](https://tanstack.com/query/v4/docs/react/guides/optimistic-updates#updating-a-list-of-todos-when-adding-a-new-todo)
- [useQuery | TanStack Query Docs](https://tanstack.com/query/latest/docs/react/reference/useQuery)
- [useMutation | TanStack Query Docs](https://tanstack.com/query/latest/docs/react/reference/useMutation)
- [Mastering Mutations in React Query | TanStack Query Docs](https://tkdodo.eu/blog/mastering-mutations-in-react-query)

Happy coding!
