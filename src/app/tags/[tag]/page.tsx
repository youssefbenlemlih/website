import { Posts } from "@/components/Posts";
import { TagKeys, TagMap, TagType } from "@/types";
import {
  getAllPostsSortedByCreatedDate,
  getTagLastModifiedDate,
} from "@/lib/mdx";
import { createMetadata } from "@/lib/createMetadata";

const PostsInTag = ({ params }: { params: { tag: string } }) => {
  return (
    <Posts
      posts={getAllPostsSortedByCreatedDate().filter((post) =>
        post.tags.includes(params.tag),
      )}
      tag={params.tag}
    />
  );
};
export default PostsInTag;

export async function generateStaticParams() {
  return TagKeys.map((tag) => ({
    tag,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}) {
  const posts = getAllPostsSortedByCreatedDate().filter((post) =>
    post.tags.includes(params.tag),
  );
  return createMetadata({
    path: "/tags/" + params.tag,
    title: "Posts in #" + params.tag,
    description: "Blog posts about " + params.tag,
    tags: (posts.flatMap(({ tags }) => tags) as TagType[]).map(
      (tag) => TagMap[tag],
    ),
    image: posts.map((post) => post.image),
    modifiedDate: getTagLastModifiedDate(params.tag),
  });
}
