---
title: Update All NPM Packages
description: A compact guide to easily update all your npm dependencies.
slug: update-all-npm-packages
date: '2023-05-02'
modifiedDate: "2024-04-23"
image: /images/posts/004-update-all-npm-packages/cover.png
tags: [ "npm" ]
youtubeKey: "ar3bfKg1XhA"
---

<Callouts.Tip>
This article originally appeared on [youssefbee.com](https://youssefbee.com). Go check it out for an a up-do-date version.
</Callouts.Tip>

Every JavaScript project uses NPM packages.

Trying to update each package manually would be tedious and time-consuming

Here's how to update them easily using `npm-check-updates`.

## 1. Cleanup your repository

Navigate to you repository in a console and make sure that your working tree is clean
by running:

```bash
git status
```

Let’s start by creating a new branch, that way don’t mess up our main branch:

```bash
git checkout -b feature/update-all-dependencies
```

## 2. Update Overview

Let’s **get an overview of your packages**:

```bash
npx check-updates
```

The first time running the command, you will be asked if you want to install it,
so just hit `y` for yes.

The command will print the available updates using three colors:

- **Red:** Major updates
- **Green:** Minor update
- **Turquoise:** Patch update

![NPM Updates Overview](images/posts/004-update-all-npm-packages/npm-updates-overview.jpg)

The update type is relevant, because `npm` uses semantic versioning:

Meaning, each package version is made out of three parts: major, minor and patch.

**Patch and minor version upgrades are generally not breaking**. So you can use the new package version without changing
your code.

On the other hand, **major update will most like be breaking**. This mean you will most likely have to change your code.

At this point you should look up what changed exactly in a major version.

You can check out the `npm` page of the package or searching if there is an upgrade guide.

## 3. Upgrade The Packages

Now let’s apply these changes:

```bash
npx npm-check-updates -u
```

After making sure that everything works, you can commit the changes: 

```bash
git commit -Am "update all dependencies"
```

For more details, checkout  [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).