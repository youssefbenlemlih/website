---
title: "Enums in TypeScript: You're Doing it Wrong"
description: "Enums in TypeScript can be really tricky. Here's how to do it right."
date: "2024-02-14"
image: "/images/posts/012-typescript-enums/cover.png"
slug: typescript-enums
youtubeKey: Pqyq3MkXcd0
tags: ["typescript"]
---

<Callouts.Tip>
This article originally appeared on [youssefbee.com](https://youssefbee.com). Go check it out for an a up-do-date version.
</Callouts.Tip>

Enums in TypeScript can be really tricky. Learn the best approach to dealing with enums with the benefits of
serializability, safe mapping, duck typing and value listing.

## Approach #1: Numeric Enums

```typescript tsx
enum Tag {
  git,
  react,
  nextjs,
  nodejs,
}

const tags = Object.values(Tag);
```

## Approach #2: String Enums

```typescript tsx
enum Tag {
  git = "git",
  react = "react",
  nextjs = "nextjs",
  nodejs = "nodejs",
}

const tags = Object.keys(Tag).filter((item) => {
  return isNaN(Number(item));
});
```

## Approach #3: String Literals

```typescript tsx
type Tag = "git" | "react" | "nextjs" | "nodejs";
const tags: Tag[] = ["git", "react", "nextjs", "nodejs"];
```

## Approach #4: Advanced String Literals

```typescript tsx
const tags = ["git", "react", "nextjs", "nodejs"] as const;
type Tag = (typeof tags)[number];
```

## Comparison

|                | Enums                                             | String Enums                                            | String Literals                                         | Advanced String Literals                                |
| :------------- | :------------------------------------------------ | :------------------------------------------------------ | :------------------------------------------------------ | :------------------------------------------------------ |
| Enums List     | <Icon name="IconBan" className="text-primary-9"/> | <Icon name="IconCircleCheck" className="text-green-9"/> | <Icon name="IconBan" className="text-primary-9"/>       | <Icon name="IconCircleCheck" className="text-green-9"/> |
| Safe Mapping   | <Icon name="IconBan" className="text-primary-9"/> | <Icon name="IconBan" className="text-primary-9"/>       | <Icon name="IconCircleCheck" className="text-green-9"/> | <Icon name="IconCircleCheck" className="text-green-9"/> |
| Duck Typing    | <Icon name="IconBan" className="text-primary-9"/> | <Icon name="IconBan" className="text-primary-9"/>       | <Icon name="IconCircleCheck" className="text-green-9"/> | <Icon name="IconCircleCheck" className="text-green-9"/> |
| Seriaizability | <Icon name="IconBan" className="text-primary-9"/> | <Icon name="IconCircleCheck" className="text-green-9"/> | <Icon name="IconCircleCheck" className="text-green-9"/> | <Icon name="IconCircleCheck" className="text-green-9"/> |
