---
title: "Add Fonts To Your NextJS And Tailwind App"
description: "Easily use custom fonts with Tailwind in your NextJS app."
date: '2023-04-14'
modifiedDate: '2023-04-16'
image: "/images/posts/002-custom-font-nextjs-tailwind/cover.png"
slug: custom-font-nextjs-tailwind
tags: [ 'nextjs', 'react' ]
---

<Callouts.Tip>
This article originally appeared on [youssefbee.com](https://youssefbee.com). Go check it out for an a up-do-date version.
</Callouts.Tip>

One of the fastest ways to embellish a website is to **use a custom font**.

In this post, you'll learn how to add a custom font to your [NextJS](https://nextjs.org/) app using Tailwind.

## Load The Font

The first step is to add the font to your app. The font is either going
to be hosted by your website or by some other provider like [Google Fonts](https://fonts.google.com/).

### Google Fonts

If you're using a Google Font, then you can use the [NextJS](https://nextjs.org/) package `next/font/google`.

```typescript tsx
// pages/_app.js
import { Space_Grotesk } from 'next/font/google'

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space'
})

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={space.variable}>
      <Component {...pageProps} />
    </div>
  )
}
```

`next/font/google` should contain all the fonts from [Google Fonts](https://fonts.google.com/).

You can use _ for fonts with spaces in the name.
For example, For 'Titillium Web', you should import `Titillium_Web`.

<Callouts.Warning>
Note that this make your app automatically self-host the Google Font.

This means that NextJS will add the font to your website so **no requests
are sent to Google** by the users' browser.
</Callouts.Warning>

### Local Fonts

Similarly, if you're storing fonts in your repository, then you can load them using the package `next/font/local`.

```typescript tsx
// pages/_app.js
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({
  // the path is relative to this file
  src: './my-font.woff2',
  variable: '--font-space'
})

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${myFont.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
```

### Remote Fonts

To load fonts that are hosted by another website, you can define them in a global CSS file.

```css
/* in styles.css */
:root {
    --font-space: font-space
}

@font-face {
    font-family: var(--font-space);
    src: url("https://fonts-url...");
}
```

Don't forget to import the global styles to the app:

```typescript tsx
// pages/_app.js
import '../styles.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

## Expose The Font To Tailwind

To be able to use the custom font in [Tailwind CSS](https://tailwindcss.com/), you should
add it to your [Tailwind CSS](https://tailwindcss.com/) configuration.
This generates a new utility class (`font-space`) th at you can use.

```typescript tsx
// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  extend: {
    fontFamily: {
      // falls back to Tailwind's sans...
      space: ['var(--font-space)', ...fontFamily.sans],
    },
    ...
  }
```

## Apply The Font

You can now use the font in your app with the class `font-space`.

```typescript tsx
export const MyComponent = () =>
  <div className="font-space ..." />
```

If you want to apply the font to all the elements, you can add it to `_app.js`

``` typescript
// pages/_app.js

// font import...

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${space.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
```

BTW, `space` is the name of my font... you can replace it with your font's name ;).

## Resources

* [Basic Features: Font Optimization I Next.js](https://nextjs.org/docs/basic-features/font-optimization)
* [Font Family - Tailwind CSS](https://tailwindcss.com/docs/font-family)

Happy coding!
