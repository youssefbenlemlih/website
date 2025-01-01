import {
  getAllNewslettersSortedByCreatedDate,
  getAllPostsSortedByCreatedDate,
  getAllThoughtsSortedByCreatedDate,
} from "@/lib/mdx";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/createMetadata";
import { TagMap, TagType } from "@/types";
import dayjs from "dayjs";
import { RenderMdx } from "@/components/RenderMdx";
import { H1 } from "@/components/H1";
import { NewsLetter } from "@/components/NewsLetter";
import { Text } from "@mantine/core";

const PostPage = ({ params }: { params: { slug: string } }) => {
  const entry = getAllThoughtsSortedByCreatedDate().find(
    (post) => post.slug === params?.slug,
  );

  if (!entry) return notFound();
  return (
    <>
      <article className={"[&>*]:mb-4"}>
        <H1>{entry.title}</H1>
        <Text c="dimmed" className="p-0 text-sm font-light italic ">
          Created {dayjs(entry.date).format("MMMM DD, YYYY")}
        </Text>
        <RenderMdx body={entry.body} />
      </article>
      <br />
      <NewsLetter />
      <br />
    </>
  );
};

export default PostPage;

export async function generateStaticParams() {
  return getAllThoughtsSortedByCreatedDate().map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getAllThoughtsSortedByCreatedDate().find(
    (post) => post.slug === params?.slug,
  );
  if (!post) return {};
  return createMetadata({
    path: "/thoughts/" + params.slug,
    title: post.title,
    description: "",
    date: post.date,
    type: "article",
    image: ""
  });
}
