---
title: "Git Cheat Sheet (Free PDF)"
description: "A collection of must know git commands."
date: "2023-05-03"
image: "/images/posts/005-git-cheat-sheet/cover.png"
slug: git-cheat-sheet
tags: ["git"]
---

<Callouts.Tip>
This article originally appeared on [youssefbee.com](https://youssefbee.com). Go check it out for an a up-do-date version.
</Callouts.Tip>

Git is the free and open source distributed version control system that's responsible for everything GitHub
related that happens locally on your computer. This cheat sheet features the most important and commonly
used Git commands for easy reference.

You can get the PDF version of this cheat sheet for free here:

<Download 
  id="86d2cece-8ef9-4245-ad37-654f7517b4a0" 
  text="Download PDF"
/>

## Account Setup

Commands for **configuring user information** used across all local repositories.

<br/>

Set a name that is identifiable for credit when review version history

```bash
git config --global user.name "[firstname lastname]"
```

<br/>

Set an email address that will be associated with each history marker

```bash
git config --global user.email "[valid-email]"
```

<br/>

## Repository Setup

Commands for **initializing and cloning** repositories

<br/>

Add a git repository to an existing local folder

```bash
cd path-to-folder
git init
```

<br/>

Retrieve an entire repository from a hosted location via URL

```bash
git clone [url]
```

<br/>

## Changes

Commands for **working with local changes**

<br/>

Show modified files in working directory, staged for your next commit

```bash
git status
```

<br/>

Select (stage) a file as for your next commit

```bash
git add [file]
```

<br/>

Unstage a file from your next commit (while keeping the changes)

```bash
git reset [file]
```

<br/>

Show the difference between staged and unstaged files

```bash
git diff
```

<br/>

Show the difference between what is staged and what is not

```bash
git diff --staged
```

<br/>

Commit your staged changes

```bash
git commit -m "[descriptive message]"
```

<br/>

## Branches

Commands for **creating, changing and managing** branches.
Isolating work in branches, changing context, and integrating changes

List your branches. a \* will appear next to the currently active branch

```bash
git branch
```

<br/>

Create a new branch

```bash
git branch [branch-name]
```

<br/>

Create and switch to a new branch

```bash
git checkout -b [branch-name]
```

<br/>

Switch to another branch

```bash
git checkout [branch-name]
```

<br/>

Merge the specified branch’s history into the current one

```bash
git merge [branch]
```

<br/>

Show all commits in the current branch’s history

```bash
git log
```

<br/>

## Remote repositories

Commands for **retrieving updates from another repository and updating local repos**.

Add a remote

```bash
git remote add [alias] [url]
```

<br/>

Fetch all the branches from that Git remote

```bash
git fetch [alias]
```

<br/>

Update the current branch from its remote counterpart

```bash
git pull [alias]/[branch]
```

<br/>

Transmit local branch commits to the remote branch

```bash
git push [alias] [branch]
```

## Stashing

Commands for **temporarily saving and applying** code changes.

<br/>

Save modified and staged changes

```bash
git stash
```

<br/>

List the saved stash entries

```bash
git stash list
```

<br/>

Apply the latest stash entry.

```bash
git stash pop
```

<br/>

Discard the latest stash entry

```bash
git stash drop
```

<br/>

## Rewrite History

Commands **for changing the history**.

<br/>

Rewriting branches, updating commits and clearing history

```bash
git rebase [branch]
```

<br/>

Apply any commits of current branch ahead of specified one

```bash
git reset --hard [commit]
```

<br/>

Clear staging area, rewrite working tree from specified commit

## History

Commands **for viewing the history**.

<br/>

Show the commit history for the currently active branch

```bash
git log
```

<br/>

Show the commits on branchA that are not on branchB

```bash
git log branchB..branchA
```

<br/>

Show the commits that changed file, even across renames

```bash
git log --follow [file]
```

<br/>

Show the diff of what is in branchA that is not in branchB

```bash
git diff branchB...branchA
```

<br/>

Show any object (branch, hash...) in Git in a human-readable format

```bash
git show [SHA]
```

<br/>

## Ignore patterns

Commands and patterns for **ignoring files**.

<br/>

Prevent unintentionally staging or commiting files **globally**

```bash
git config --global core.excludesfile [file]
```

<br/>

Prevent unintentionally staging or commiting files **in a project** by adding it to `.gitignore`

```bash
echo [file] >> .gitignore
```

<br/>

Pattern examples

```bash
# ignore all files inside the folder node_modules
node_modules/
# ignore all files ending with txt
*.txt
# ignore all folders starting with pattern
pattern*/
```

## PDF version

You can get the PDF version of this cheat sheet for free here:

<Download 
  id="86d2cece-8ef9-4245-ad37-654f7517b4a0"
  text="Download PDF"
/>

## Resources

- [Git for All Platforms](http://git-scm.com)
- [GitHub's collection of .gitignore templates](https://github.com/github/gitignore)
