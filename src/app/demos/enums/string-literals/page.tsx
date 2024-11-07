"use client";
import React, { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Anchor,
  Text,
  Title,
} from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";

type Post = {
  id: string;
  href: string;
  title: string;
  description: string;
  tags: Tag[];
};

type Tag = "git" | "react" | "nextjs" | "nodejs";

const posts: Post[] = [
  {
    id: "nextjs-fonts",
    href: "https://www.youssefbee.com/posts/custom-font-nextjs-tailwind",
    title: "Add Fonts To Your NextJS And Tailwind App",
    description: "Easily use custom fonts with Tailwind in your NextJS app.",
    tags: ["react", "nextjs"],
  },
  {
    id: "update-npm-packages",
    href: "https://www.youssefbee.com/posts/update-all-npm-packages",
    title: "Update All NPM Packages",
    description: "A compact guide to easily update all your npm dependencies.",
    tags: ["react", "nodejs"],
  },
  {
    id: "git-cheat-sheet",
    href: "https://www.youssefbee.com/posts/git-cheat-sheet",
    title: "Git Cheat Sheet (Free PDF)",
    description: "A collection of must know git commands.",
    tags: ["git"],
  },
  {
    id: "git-merge-vs-rebase",
    href: "https://www.youssefbee.com/posts/git-merge-vs-rebase",
    title: "Git Merge vs Rebase: Which SHOULD you use?",
    description:
      "GIT Merge vs. Rebase is one of GIT's most debated topics... Luckily, there are a few rules to help you choose the right approach.",
    tags: ["git"],
  },
  {
    id: "react-array-map",
    href: "https://www.youssefbee.com/posts/react-map",
    title: "Understanding Array.map in React",
    description:
      "Learn how to use the map function in React to render dynamic content.",
    tags: ["react"],
  },
];

const tags: Tag[] = ["git", "react", "nextjs", "nodejs"];

/**
 * # Solved Problems
 * - manually map from number to string (for display)
 * - manually map from string to number (for parsing )
 * - serializability: working with numbers doesn't make sense (meaningless)
 * - tight coupling: cannot define own props, has to be the same instance
 * # Problems:
 * - get the list of enum values
 */

function Page() {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  function onTagClick(tag: Tag) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags?.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  const filteredPosts = posts.filter(
    (post) =>
      selectedTags.length === 0 ||
      selectedTags.every((t) => post.tags.includes(t)),
  );
  return (
    <Box>
      <Box mb={"sm"}>
        <Title>Blog Posts</Title>
        <Text color={"gray"} size={"xs"}>
          Filter the blog posts by tags
        </Text>
        <Flex py={"1"} gap={"xs"}>
          {tags.map((tag) => {
            const selected = selectedTags.includes(tag);
            return (
              <TabButton
                onClick={() => onTagClick(tag)}
                selected={selected}
                key={tag}
              >
                {tag}
              </TabButton>
            );
          })}
        </Flex>
      </Box>
      <PostCards posts={filteredPosts} />
      {filteredPosts.length === 0 && (
        <Text color={"gray"} size={"xs"}>
          No posts found.
        </Text>
      )}
    </Box>
  );
}

type TabButtonProps = {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
};
const TabButton = ({ children, selected, onClick }: TabButtonProps) => (
  <Button onClick={onClick} variant={selected ? "solid" : "surface"}>
    {children}
  </Button>
);

type PostCardsProps = { posts: Post[] };
const PostCards = ({ posts }: PostCardsProps) => (
  <Grid className={"max-w-max"}>
    <AnimatePresence initial={false}>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </AnimatePresence>
  </Grid>
);

type PostCardProps = { post: Post };
const PostCard = ({ post }: PostCardProps) => (
  <Card
    component={motion.div}
    mb={"sm"}
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
  >
    <Anchor href={post.href} target={"_blank"}>
      <Title size="3">{post.title}</Title>
      <Text size="2" color={"gray"}>
        {post.description}
      </Text>
      <Flex py={"1"} gap={"xs"}>
        {post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </Flex>
    </Anchor>
  </Card>
);
export default Page;
