---
title: "4 Reasons to Switch to NextJS App Router"
description: "The NextJS App Router has been a game-changer for me. Here are 4 reasons to make the switch from the Pages Router."
date: "2024-03-26"
image: "/images/posts/015-nextjs-app-router/cover.png"
slug: nextjs-app-router
youtubeKey: AOluvfKrCw0
tags: ["nextjs", "react", "basics"]
draft: true
---

Are you considering upgrading to Next.js App Router for your React applications? In this video, I walk you through
four compelling reasons why making the switch could be a game-changer for your development workflow.

## <Icon name="IconScanSearch"/>Better SEO

It's now easier than ever to build an SEO friendly website.

With the App Router you can:

- Export metadata from each page & Nextjs will seamlessly integrate in the generated HTML
- Easily generate a preview image to be shown on when sharing your page on social media. (If interested, let me know, I’ll make a video)
- Generate your own sitemap.xml in JavaScript, which was hacky to do with the Pages Router.

This helps to boost your website's visibility on search engines and social media platforms.

## <Icon name="IconArrowBigUpDash"/>Improved Performance

![NextJS Streaming Diagram](/images/posts/015-nextjs-app-router/nextjs-streaming.png)

The NextJS App Router utilizes the latest React server components to significantly
enhance website loading speed and interactivity.

Checkout [Theo's Server Components explanation video](https://youtu.be/VIwWgV3Lc6s?si=68rdUR2KMX3Hto0h), if you want to dive deep into the topic.

## <Icon name="IconFolderTree"/>Clearer Project Structure

Say goodbye to cluttered project folders! The App Router allows for explicit page
definition, enabling better organization and easier maintenance of your components. (No components forder anymore :D )

In the pages’ router, anything inside the `pages` directory has been served as a page.
This meant that your components had to be separated from the pages, even when only using in one place. → Hard
overview over the components → unused components - With the app router, you explicitly define a page by naming the file page.tsx/jsx if JS. - Now, you can have your components right next to where they’re used - Not only that, you can also have different layouts for each page or a url section, and you can also embed these
layouts. Another feature is parallel route, where you can have slots in the ui and embed pages in them and they
load in parallel. They are useful for highly dynamic sections of an app, such as dashboards or feeds on a social
media website.

## <Icon name="IconCode"/>Cleaner Code

No more `getStaticProps` or `getServerSideProps` . You can now just use async/await to get your data!

- SEO friendly:
- Performance:

- Clean Project Structure

- Substantially Cleaner code
  - `getServerSideProps`, `getStaticProps`, `getInitialProps` no more. just use async await inside your components.
  - No more prop drilling: where you have to pass props from the pages to the lowest components.
  - And if you still wanna statically build your website, you can just add `export:static` in your configuration
