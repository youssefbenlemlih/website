export type Heading = {
  type: string;
  text: string;
  link: string;
  icon?: string;
};

export const TagMap = {
  react: "React",
  basics: "Basics",
  javascript: "JavaScript",
  typescript: "TypeScript",
  "react-query": "React Query",
  nextjs: "NextJS",
  npm: "NPM",
  git: "Git",
  productivity: "Productivity",
  "code-reviews": "Code Reviews",
};
export const TagDescriptions = {
  react:
    "Ever wondered how to build smooth, interactive UIs? React is your gateway! Discover techniques to make your front-end development dynamic and user-friendly.",
  basics:
    "Starting out in coding? Let's make it easy! Dive into foundational concepts that lay the groundwork for your journey in web development.",
  javascript:
    "JavaScript runs the web – from cool effects to full applications. Uncover the secrets of this powerful language and start crafting web magic.",
  typescript:
    "Want fewer bugs and better code? TypeScript’s got you covered! Learn how this JavaScript superset can streamline development with type safety.",
  "react-query":
    "Tired of complex data-fetching? React Query can simplify it for you! Discover how to handle server-state efficiently and keep your UI in sync.",
  nextjs:
    "Looking to make your React apps faster and SEO-friendly? NextJS can help! Explore its powerful features for building high-performance web apps.",
  npm: "Package management made simple! Learn how to keep your JavaScript projects organized and up-to-date with NPM, the essential tool for developers.",
  git: "Ready to collaborate like a pro? Discover how Git helps you track changes, work with teams, and keep your project history organized and accessible.",
  productivity:
    "Coding can be intense! Learn practical strategies to boost productivity, avoid burnout, and make coding more enjoyable. Let's make the most out of each coding session.",
  "code-reviews":
    "New to programming? Don’t worry! Checkout the common mistakes and" +
    " best practicing by taking a reviewing real-world code.",
};
export type TagType = keyof typeof TagMap;
export const TagKeys = Object.keys(TagMap) as TagType[];
