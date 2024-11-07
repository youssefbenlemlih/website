import { RevealOnScroll } from "@/components/RevealOnScroll";
import { getLatestPosts } from "@/lib/mdx";
import { A } from "./A";
import { H2 } from "./H2";
import { PostCard } from "./PostCard";

export function LatestInTheBlog() {
  const posts = getLatestPosts();
  return (
    <RevealOnScroll className={"py-4"}>
      <H2>Latest in the blog</H2>
      <div className={"grid grid-cols-1 flex-col gap-3 sm:grid-cols-3"}>
        {posts.map((post, index) => (
          <PostCard key={index} post={post} className="w-full" delay={index} />
        ))}
      </div>
      <div className={"flex w-full flex-col items-center pt-2"}>
        <A href={"/posts"}>See all blog posts{" →"}</A>
      </div>
    </RevealOnScroll>
  );
}
