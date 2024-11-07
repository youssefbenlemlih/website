import React from "react";
import { getAllPostsSortedByCreatedDate } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { PostComponent } from "@/app/posts/[slug]/postComponent";
import { createMetadata } from "@/lib/createMetadata";
import { TagMap, TagType } from "@/types";

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = getAllPostsSortedByCreatedDate().find(
    (post) => post.slug === params?.slug,
  );

  if (!post) return notFound();
  return <PostComponent post={post} />;
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
