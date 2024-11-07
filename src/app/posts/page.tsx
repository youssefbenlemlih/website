import { Posts } from "@/components/Posts";
import { getAllPostsSortedByCreatedDate } from "@/lib/mdx";
import { createMetadata } from "@/lib/createMetadata";

const AllPosts = () => <Posts posts={getAllPostsSortedByCreatedDate()} />;
export default AllPosts;

export const metadata = createMetadata({
  path: "/posts",
  title: "Posts",
  image: "/images/banners/posts.png",
  description: "Blog posts about React, Git and Fullstack Development.",
});
