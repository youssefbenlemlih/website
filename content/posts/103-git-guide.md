---
title: "Git guide"
description: ""
date: "2023-04-18"
image: "/images/posts/000-template/cover.png"
slug: git-guide
tags: ["git"]
draft: true
---

One the most influential decisions that I made in my career as a Software Engineer is to learn git early on.

Not only did it increase my impact inside the team, it elevated my developer experience and changed the way I approach
coding.

So in this video,

## Why bother

Git is a version control system… and can be confusing fir beginners.

But There are countless reasons to learn git:

- **Backup**: Always have a backup of your code in the cloud
- **Risk-free:** Allows you to code risk-free: You can always revert the changes you made and come to a working state.
- **Multiplayer** Allows multiple developers to work on different features in papallel:
- **SMTH:**Continuous deployment. E.g. automatically publish an app after each code change

## Fundamental Concepts

### repository

 A [Git repository](https://bitbucket.org/product/code-repository) is a virtual storage of your project. It allows you to
 save versions of your code, which you can access when
 needed. - [source](https://www.atlassian.com/git/tutorials/setting-up-a-repository)

Each code project of yours will have itself own repository.

### commit

A commit of a **set of saved code changes**. Each time that you make changes to your code and want to make them
permanent, you **commit** them.
A commit will contain the author name and email, a date, a set of changes (lines added, removed or changed) and a unique
hash something looking like this`djowr9iiuj`

### branch

A branch is an 'environment' that allows to work separatly. Each repository has one `main`branch when created. The is
the source of truth.

You can work on some feature( i.e. changing the code) indepedent from the main branch. So it's unaffected.

Each developper will work on it's own branch independently, in parallel.

Once you are done and want to publish you changes, you need to merge it.

### merge request

## git flow

1 main branch + develop branch + feature and bugfix branches
Main (also called master)

## advanced patterns

### ci cd

### bug finding with git bisect

### a clean history

## Resources

- https://www.atlassian.com/git/tutorials
-
