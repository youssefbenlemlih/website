import Anchor from "next/link";
import { Image } from "./Image";
import { Post } from "contentlayer2/generated";
import { Card, CardSection, Group, Text } from "@mantine/core";

export type PostOverview = Pick<
  Post,
  "slug" | "image" | "title" | "draft" | "description"
>;
type PostCardProps = { post: PostOverview; className?: string; delay?: number };

export function PostCard({ post }: PostCardProps) {
  return (
    <Anchor href={`/posts/${post.slug}`}>
      <Card
        className="hover:opacity-85"
        withBorder
        padding="lg"
        component="article"
      >
        {post.image && (
          <CardSection>
            <Image
              className="aspect-video cursor-pointer rounded-none object-cover"
              src={post.image}
              alt={post.title}
            />
          </CardSection>
        )}
        <Group justify="space-between" mt="md">
          <Text fw={700}>
            {post.draft && "✍️"}
            {post.title}
          </Text>
          <Text size="sm" c="dimmed">
            {post.description}
          </Text>
        </Group>
      </Card>
    </Anchor>
  );
}
