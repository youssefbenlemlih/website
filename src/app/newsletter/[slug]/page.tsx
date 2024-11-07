import {
  getAllNewslettersSortedByCreatedDate,
  getAllPostsSortedByCreatedDate,
} from "@/lib/mdx";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/createMetadata";
import { TagMap, TagType } from "@/types";
import dayjs from "dayjs";
import { RenderMdx } from "@/components/RenderMdx";
import { H1, NewsLetter } from "@/components";
import { Text } from "@mantine/core";

const PostPage = ({ params }: { params: { slug: string } }) => {
  const newsletter = getAllNewslettersSortedByCreatedDate().find(
    (post) => post.slug === params?.slug,
  );

  if (!newsletter) return notFound();
  return (
    <>
      <article className={"[&>*]:mb-4"}>
        <H1>{newsletter.title}</H1>
        <Text c="dimmed" className="p-0 text-sm font-light italic ">
          Sent {dayjs(newsletter.date).format("MMMM DD, YYYY")}
        </Text>
        <RenderMdx body={newsletter.body} />
      </article>
      <br />
      <NewsLetter />
      <br />
    </>
  );
};

export default PostPage;

export async function generateStaticParams() {
  return getAllNewslettersSortedByCreatedDate().map(({ slug }) => ({
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
