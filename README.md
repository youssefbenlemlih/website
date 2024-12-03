# Youssefbee Website

Personal website and blog available at [youssefbee.com](https://www.youssefbee.com/)

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js](https://nextjs.org/) - React framework for production
- **Content**: [MDX](https://mdxjs.com/) - Markdown for the component era
- **Content Management**: [Contentlayer](https://contentlayer.dev/) - Content SDK for type-safe content
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Mantine](https://mantine.dev/) - React components library

### Development Tools
- **Package Manager**: [npm](https://www.npmjs.com/)
- **Linting**: [ESLint](https://eslint.org/) - Find and fix problems in JavaScript code
- **Code Formatting**: [Prettier](https://prettier.io/) - Code formatter
- **Git Hooks**: [Husky](https://typicode.github.io/husky/) - Git hooks made easy
- **Commit Linting**: [Commitlint](https://commitlint.js.org/) - Lint commit messages

### Additional Features
- 🎨 Dark mode support
- 📱 Fully responsive design
- 🔍 SEO optimized
- 📊 Analytics integration
- ⚡ Fast page loads with static generation
- 🔒 TypeScript for type safety

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/youssefbenlemlih/website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Your site will be available at [http://localhost:3000](http://localhost:3000)

## 📝 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## Deployment

Proudly deployed on [Vercel](https://vercel.com/)


# Next.js GitHub Markdown Blog

A modern, feature-rich blogging platform that uses GitHub as a CMS. Transform your Markdown files into a beautiful, responsive blog with minimal setup. Perfect for developers who want to keep their content in GitHub and integrate a blog into their Next.js applications.

## ✨ Features

### Content Management
- 📝 Write posts in Markdown with full GitHub Flavored Markdown support
- 🎨 Frontmatter for rich metadata and customization
- 📑 Automatic category and tag organization
- 📊 Reading time estimation

### Design & UI
- 🎯 Responsive, mobile-first design
- 🖼️ Optimized image loading with blur placeholders
- 🌙 Smooth animations and transitions
- 📱 Progressive Web App (PWA) ready
- 🎨 Customizable design system via Tailwind CSS

### Performance & SEO
- ⚡ Static Site Generation (SSG) for optimal performance
- 🔍 SEO optimized with meta tags and structured data
- 📱 Mobile performance optimized
- 🖼️ Automatic image optimization
- 🗺️ Automatic sitemap generation

### Social & Sharing
- 🔗 Social media sharing buttons
- 👥 Author profiles and bios
- 📊 Reading progress indicator
- ⬆️ Scroll to top button
- 💬 Related posts suggestions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/bun
- A GitHub account
- A GitHub repository for your blog posts

### Basic Setup

1. Clone this repository:
```bash
git clone https://github.com/yourusername/nextjs-github-markdown-blog.git
cd nextjs-github-markdown-blog
```

2. Install dependencies:
```bash
npm install   # or yarn install or bun install
```

3. Create a GitHub repository for your blog posts and create a personal access token:
   - Go to GitHub Settings -> Developer Settings -> Personal Access Tokens
   - Generate a new token with `repo` scope
   - Copy the token for the next step

4. Create a `.env.local` file:
```env
# Required
GITHUB_REPO=username/blog-posts-repo
GITHUB_TOKEN=your_github_token_here

# Optional but recommended
NEXT_PUBLIC_SITE_URL=https://your-blog-domain.com
NEXT_PUBLIC_SITE_NAME=Your Blog Name
NEXT_PUBLIC_SITE_DESCRIPTION=Your blog description
NEXT_PUBLIC_TWITTER_HANDLE=@yourusername
```

5. Run the development server:
```bash
npm run dev   # or yarn dev or bun dev
```

### Integrating with Existing Next.js App

1. Copy the required directories to your project:
```
src/
├── components/    # Blog components
├── lib/          # Blog utilities
└── app/
    └── blog/     # Blog pages
```

2. Add required dependencies to your `package.json`:
```json
{
  "dependencies": {
    "gray-matter": "^4.0.3",
    "reading-time": "^1.5.0",
    "rehype": "^13.0.2",
    "rehype-highlight": "^7.0.1",
    "rehype-prism-plus": "2.0.0",
    "rehype-raw": "^7.0.0",
    "rehype-sanitize": "6.0.0",
    "rehype-stringify": "10.0.1",
    "remark": "15.0.1",
    "remark-gfm": "4.0.0",
    "remark-html": "^16.0.1",
    "remark-parse": "11.0.0",
    "remark-rehype": "11.1.1"
  }
}
```

3. Add the blog routes to your `next.config.mjs`:
```javascript
const nextConfig = {
  // ... your existing config
  images: {
    domains: [
      'raw.githubusercontent.com',
      'github.com',
      '**.githubusercontent.com'
    ],
  }
};
```

4. Add the required environment variables mentioned above.

## 📝 Blog Post Format

Create your blog posts as Markdown files in your GitHub repository. Here's a complete example showing all supported features:

```markdown
---
title: "Introducing Our New Next.js Blogging System with Tailwind CSS"
date: "2024-09-28"
excerpt: "A look at our sleek and efficient new blogging system built with Next.js and Tailwind CSS, designed for fast, responsive, and visually appealing content delivery."
category: "Web Development"
tags: ["Next.js", "Tailwind CSS", "Blogging", "GitHub"]
coverImage: "https://raw.githubusercontent.com/Dicklesworthstone/yto_blog_posts/refs/heads/main/blog_01_banner.webp"
author: "Jeffrey Emanuel"
authorImage: "https://pbs.twimg.com/profile_images/1225476100547063809/53jSWs7z_400x400.jpg"
authorBio: "Software Engineer and Founder of YouTube Transcript Optimizer"
---

# Introducing Our New Next.js Blogging System with Tailwind CSS

## A Sleek and Efficient Way to Share Your Thoughts

![Blog System Banner](https://raw.githubusercontent.com/Dicklesworthstone/yto_blog_posts/refs/heads/main/blog_01_banner.webp)

Hello, fellow developers and tech enthusiasts! Today, I'm excited to introduce our brand new blogging system built with Next.js and styled with Tailwind CSS. This powerful combination allows for a fast, responsive, and visually appealing blog that's easy to maintain and expand.

### Key Features

1. **GitHub-Powered Content**: All our blog posts are stored as Markdown files in a public GitHub repository. This means version control and collaboration are built right in!

2. **Automatic Updates**: The system periodically checks for new Markdown files in the repo, ensuring that new posts are automatically added to the blog without manual intervention.

3. **Responsive Design**: Thanks to Tailwind CSS, our blog looks great on devices of all sizes. From mobile phones to wide-screen desktops, the reading experience is always optimal.

4. **Fast Loading**: Next.js's static site generation capabilities mean that our blog pages load incredibly quickly, providing a smooth user experience.

5. **Rich Markdown Support**: We support GitHub Flavored Markdown, allowing for a wide range of formatting options. Let's test some of them:

   - *Italic* and **bold** text
   - [Links to external sites](https://nextjs.org)
   - Lists (like this one!)
   - And even code blocks:

     ```javascript
     const getBlogPosts = async () => {
       const response = await fetch('https://api.github.com/repos/user/blog-posts/contents');
       const files = await response.json();
       return files.filter(file => file.name.endsWith('.md'));
     };
     ```

6. **SEO Optimized**: Each blog post comes with customizable metadata, ensuring that our content is easily discoverable by search engines.

### How It Works

Our blogging system leverages the power of Next.js's API routes and static site generation. Here's a simplified overview of the process:

1. Markdown files are added to our GitHub repository.
2. Our Next.js app periodically fetches the list of files from the GitHub API.
3. When a new file is detected, the app fetches its content and processes the Markdown.
4. The processed content is then rendered using our custom React components, styled with Tailwind CSS.
5. Next.js generates static pages for each blog post, ensuring fast load times.

### What's Next?

We're constantly working on improving our blogging system. Some features we're considering for future updates include:

- Comment system integration
- Social media sharing buttons
- Dark mode toggle
- RSS feed generation

## Conclusion

This new blogging system represents a significant step forward in our content management capabilities. It combines the simplicity of Markdown with the power of modern web technologies to create a blogging experience that's enjoyable for both writers and readers.

We're excited to use this system for sharing more updates, tutorials, and thoughts with you all. Stay tuned for more posts coming soon!

---

*This post was written in Markdown and automatically rendered by our Next.js blogging system. Pretty cool, huh?*
```

### Frontmatter Fields Explained

The frontmatter section at the top of each Markdown file (between the `---` markers) defines the post's metadata:

#### Required Fields
- `title`: The main title of your blog post
- `date`: Publication date in "YYYY-MM-DD" format
- `excerpt`: A brief description used in previews and SEO
- `category`: Main category for the post

#### Optional Fields
- `tags`: Array of related topics for categorization
- `coverImage`: URL to the post's hero image
- `author`: Name of the post's author
- `authorImage`: URL to the author's profile picture
- `authorBio`: Brief author biography

### Supported Markdown Features

The blog system supports all standard Markdown features plus GitHub Flavored Markdown (GFM) extensions:

- Headers (H1-H6)
- Bold and italic text
- Ordered and unordered lists
- Code blocks with syntax highlighting
- Tables
- Blockquotes
- Images
- Links
- Task lists
- Strikethrough text
- Emoji shortcodes
- Automatic URL linking
- Footnotes

### Images and Assets

Images can be referenced in two ways:
1. Direct URLs to images hosted anywhere
2. Relative paths to images stored in your blog posts repository

For optimal performance, we recommend:
- Using WebP format for images
- Hosting images in your GitHub repository alongside posts
- Keeping image files under 1MB when possible
- Using descriptive alt text for accessibility

### File Naming Convention

We recommend naming your blog post files using kebab-case with a date prefix:
```
2024-09-28-introducing-nextjs-blog-system.md
```

This helps with:
- Chronological ordering
- URL slugs
- File organization
- Post identification

## 🎨 Customization

### Design System

Modify `tailwind.config.ts` to customize your design:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your color palette
      },
    },
    typography: {
      // Your typography scale
    },
    // ... other customizations
  }
}
```

### Components

All components are in `src/components/`. Key components you might want to customize:

- `BlogPost.tsx`: Individual post layout
- `BlogList.tsx`: Post list/grid layout
- `RelatedPosts.tsx`: Related posts section
- `SocialShare.tsx`: Social sharing buttons

### Advanced Configuration

Create a `blog.config.ts` file for additional settings:

```typescript
export default {
  postsPerPage: 10,
  featuredPostsCount: 3,
  defaultAuthor: {
    name: 'Your Name',
    image: '/images/default-avatar.jpg',
    bio: 'Your bio'
  },
  social: {
    twitter: 'yourusername',
    github: 'yourusername',
    linkedin: 'yourusername'
  }
};
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables
4. Deploy!

### Other Platforms
The blog supports any platform that can host Next.js applications:

- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted

## 📈 Analytics Integration

The blog is prepared for various analytics solutions:

```typescript
// Add to src/app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <GoogleAnalytics gaId="G-YOUR-ID" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT - feel free to use this project however you'd like.

## 🙏 Acknowledgments

This project is built with and inspired by:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- And many other open-source projects