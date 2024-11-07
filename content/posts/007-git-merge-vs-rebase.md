---
title: "Git Merge vs Rebase: Which SHOULD you use?"
description: "GIT Merge vs. Rebase is one of GIT's most debated topics... Luckily, there are a few rules to help you choose the right approach."
date: "2023-09-01"
image: "/images/posts/007-git-merge-vs-rebase/cover.jpg"
slug: git-merge-vs-rebase
tags: ["git"]
youtubeKey: "x7oSRtTtoc8"
---

GIT Merge vs. Rebase is one of programmers' most debated topics.
Whether you're a seasoned developer or just getting started,
understanding these two fundamental Git workflows is crucial.

While both **rebasing** and **merging** achieve the same goal of introducing changes of
one branch in another one, there are major differences to keep in mind.
And choosing the wrong approach may make life as developer harder.

So in this video I’ll show you what rebasing and merging are,
what are the consequences of using each and when to consider one option over the other one.

## 🔍 What You'll Learn:

Clear definitions and use cases for both Merge and Rebase, insights into when to choose Merge,
when to opt for Rebase, and why it matters for your project's success.
BONUS: A list of rules of thumb to help you decide between the two.

## 🤔 The problem

Imagine you are working on a git repository with other developers.
You want to implement a feature. So what you do is create a branch
based on the main branch.

Now check the branch out locally and start working… creating commit,
after commit, after commit.

You are now satisfied with what you build, and you’re ready to merge it back
to the main branch.

But wait, there is a problem. See, while you were writing your code, another
developer merged his own branch to main. Which means that now, your branch is
outdated.

## 🤝 The solution(s)

So now you have two possibilities: You either merge main into your feature
branch or you rebase your branch on main.

### 👼 Merge

By merging the main branch to your feature branch, you basically create a commit
containing all the changes from main. This has two advantages:

- First, you can rely on the git history to see where you originally started working
- and at which point you updated you branch.
- Also, if there are any conflicts between the branches, then you can easily fix them. A conflict is when both branches have made changes to the same files, so git does not know which to take.

But merging also comes with one major drawback.

- It complicates the git history. Instead of having 2 or three lanes, you end up
  with possibly a lot of them, especially if you’re working in a big team or work in multiple branches in parallel. This makes it to follow through the commits in the history and can make reverting changes complicated.

But there is another way.

### 👺 Rebase

If you look at the git graph, you may have guessed how rebasing would fix the problem.
Instead of creating a new commit, you can simply put the existing commits on the new tip of the main branch.

Now this is awesome, because you are basically rewriting the history. It’s as if
you stared from the latest main branch.

The main advantage of this approach is that you end up with a clean GIT history,
that can look something like this…

But rebasing also has two problems:

- First, is that you have to overwrite the remote branch when pushing it to the remote.
  This makes working with other developers on a common branch difficult since you can easily overwrite their changes.
- Another drawback of rebasing is having to deal with conflicts. So, if there are conflicts between your branch and the one you’re rebasing on, you will have to fix these conflicts in multiple commits. This can be a daunting task, since the changes you make in one commit can lead to other conflicts in the next commits.

So should you **merge** or **rebase**?

## 🥸 Which should you use?

Well it depends. While some developers have personal preferences, I came up with a
few rules of thumb that will make your life as a developer easier:

- If you are the only one working on a feature branch, then go ahead, and rebase.
- On the other hand, If you want to combine multiple features into a special release
  branch, then merging is great option. This will it makes it explicit, what features
  are included in your target branch and you can easily add new features or revert existing ones.
- Now, in case you’re having conflicts between the branches, then you should also consider
  merging. Because fixing conflicts during a rebase is something I would not wish for my worst enemy.
- I think the drawback of having “dirtier” history is worth it in this case. But if you are a big
  fan of rebasing because you want to have a straightforward history, then having small atomic commits
  definitely helps when dealing with conflicts. But again, most of the time it’s not really worth it.
- And finally, you should never rebase your principal branches like your main and develop branches.
  And the reason is that these branches should always be reliable since serve as the base for other branches.

Happy Coding!
