import { H1 } from "./H1";
import { PostCard } from "./PostCard";
import { P } from "./P";
import { Post } from "contentlayer2/generated";
import { TagDescriptions, TagType } from "@/types";
import { Text } from "@mantine/core";

type PostsProps = {
  posts: Post[];
  tag?: string;
};

export const Posts = ({ posts, tag }: PostsProps): JSX.Element => {
  return (
    <>
      <H1>Posts {tag && "in #" + tag}</H1>
      {tag && TagDescriptions[tag as TagType] && (
        <Text pb="sm">{TagDescriptions[tag as TagType]}</Text>
      )}
      {posts.length > 0 ? (
        <div
          className={
            "grid min-h-screen min-w-full  " +
            "gap-6 " +
            "3 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3"
          }
        >
          {posts.map((post, index) => (
            <div key={index}>
              <PostCard post={post} delay={index} />
            </div>
          ))}
        </div>
      ) : (
        <P className={"w-[100%]"}>No Posts Found</P>
      )}
    </>
  );
};
