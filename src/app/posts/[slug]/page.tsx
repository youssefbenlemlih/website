import { Callouts } from "@/components/Callouts";
import { Image } from "@/components/Image";
import { LatestInTheBlog } from "@/components/LatestInTheBlog";
import { NewsLetter } from "@/components/NewsLetter";
import { P } from "@/components/P";
import { PostContent } from "@/components/PostContent";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SideBar } from "@/components/SideBar";
import { createMetadata } from "@/lib/createMetadata";
import { getAllPostsSortedByCreatedDate } from "@/lib/mdx";
import { TagMap, TagType } from "@/types";
import { notFound } from "next/navigation";

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = getAllPostsSortedByCreatedDate().find(
    (post) => post.slug === params?.slug,
  );

  if (!post) return notFound();
  return (
    <div
      className={
        "mx-auto grid max-w-6xl grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-[minmax(0,4fr),minmax(200px,1fr)] "
      }
    >
      <div className={"col-span-full"}>
        <RevealOnScroll>
          <Image
            alt={post.title}
            src={post.image}
            className={"w-full "}
            style={{ objectFit: "cover" }}
          />
        </RevealOnScroll>
        {post.draft && (
          <RevealOnScroll className={"col-span-full"}>
            <Callouts.Info>
              <P>This post is still a draft</P>
            </Callouts.Info>
          </RevealOnScroll>
        )}
      </div>
      <PostContent post={post} />
      <SideBar headings={post.headings} />
      <div className="col-span-full">
        <LatestInTheBlog />
      </div>
      <RevealOnScroll className="col-span-full flex flex-col items-center  p-4 sm:p-10 md:p-20">
        <div className={"mx-auto"}>
          <NewsLetter />
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default PostPage;

export async function generateStaticParams() {
  return getAllPostsSortedByCreatedDate().map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getAllPostsSortedByCreatedDate().find(
    (post) => post.slug === params?.slug,
  );
  if (!post) return {};
  return createMetadata({
    path: "/posts/" + params.slug,
    title: post.title,
    description: post.description,
    tags: post.tags.map((tag) => TagMap[tag as TagType]),
    image: post.image,
    date: post.date,
    modifiedDate: post.modifiedDate,
    type: "article",
  });
}
