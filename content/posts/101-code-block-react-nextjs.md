---
title: "Build a code block"
description: ""
date: "2023-04-17"
modifiedDate: "2023-09-08"
image: "/images/posts/101-code-block-react-nextjs/cover.png"
slug: code-block-react-nextjs
tags: ["react", "nextjs"]
draft: true
---

```typescript tsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);
```

## <Icon name="IconDownload"/>Installing dependencies

[React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)

```zsh
npm i react-syntax-highlighter
# if you use typescript
npm i -D @types/react-syntax-highlighter
```

## <Icon name="IconToyBrick"/>Create a CodeBlock component

Let's create a `CodeBlock` component that takes two props: `code` and the language

```typescript tsx
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export type CodeBlockProps = { language: string; code: string };

export function CodeBlock({ language, code }: CodeBlockProps) {
  return <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>;
}
```

We can the use it like this:

```typescript tsx
const code = "const root = ReactDOM...."
const exampleUsage = <CodeBlock
  language={"typescript"}
  code={code}
/>;
```

Which renders the code like this

![code preview](images/posts/004-code-block-react-nextjs/code-preview-1.png)

The syntax is highlighted, but the colors are too similar. Let's choose another theme.

### <Icon name="IconPalette"/>Choosing a Theme

[React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
comes we many built in themes. Let's import and use my favorite: gruvboxDark:

```typescript tsx
import { gruvboxDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export type CodeBlockProps = { language: string; code: string };

export function CodeBlock({ language, code }: CodeBlockProps) {
  return (
    <SyntaxHighlighter style={gruvboxDark} language={language}>
      {code}
    </SyntaxHighlighter>
  );
}
```

Looking better already!
![code preview](images/posts/004-code-block-react-nextjs/code-preview-2.png)

https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/
https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/

### <Icon name="IconRollerCoaster"/>Adding Responsiveness

### <Icon name="IconClipboard"/>Adding A CopyButton

## <Icon name="IconCable"/>MDX integrations

## <Icon name="IconAlbum"/>Resources

- [Optimistic Updates | TanStack Query Docs](https://tanstack.com/query/v4/docs/react/guides/optimistic-updates#updating-a-list-of-todos-when-adding-a-new-todo)
- [useQuery | TanStack Query Docs](https://tanstack.com/query/latest/docs/react/reference/useQuery)
- [useMutation | TanStack Query Docs](https://tanstack.com/query/latest/docs/react/reference/useMutation)
- [Mastering Mutations in React Query | TanStack Query Docs](https://tkdodo.eu/blog/mastering-mutations-in-react-query)

Happy coding!
