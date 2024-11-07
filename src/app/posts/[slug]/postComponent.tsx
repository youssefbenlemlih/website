import {
  A,
  Image,
  LatestInTheBlog,
  NewsLetter,
  P,
  SideBar,
  TableOfContent,
  Tag,
  WithMaxWidth,
} from "@/components";
import { Callouts } from "@/components/Callouts";
import { RenderMdx } from "@/components/RenderMdx";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TagType } from "@/types";
import { Flex } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import { Post } from "contentlayer2/generated";
import dayjs from "dayjs";

export const PostComponent = ({ post }: { post: Post }) => {
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
      <RenderPost post={post} />
      <SideBar headings={post.headings} />
      <div className="col-span-full">
        <LatestInTheBlog />
      </div>
      <RevealOnScroll className="col-span-full flex flex-col items-center  p-4 sm:p-10 md:p-20">
        <WithMaxWidth>
          <div className={"mx-auto"}>
            <NewsLetter />
          </div>
        </WithMaxWidth>
      </RevealOnScroll>
    </div>
  );
};
const RenderPost = ({
  post: { modifiedDate, image, title, tags, date, body, headings, youtubeKey },
}: {
  post: Post;
}) => (
  <article className={"[&>*]:mb-4"}>
    <P className="p-0 text-sm font-light italic ">
      {dayjs(date).format("MMMM DD, YYYY")}
      {modifiedDate
        ? ` - Edited on ${dayjs(modifiedDate).format("MMMM DD, YYYY")}`
        : ""}{" "}
    </P>
    <Flex gap={"xs"} align={"start"} py={"sm"}>
      {tags?.map((tag, index) => <Tag key={index} tag={tag as TagType} />)}
    </Flex>
    {youtubeKey && (
      <RevealOnScroll className={"col-span-full"}>
        <Callouts.Info>
          <P>
            This post is also available as a{" "}
            <A href={`https://www.youtube.com/watch?v=${youtubeKey}`}>
              YouTube Video
              <IconExternalLink className={"inline h-4 w-4"} />
            </A>
          </P>
        </Callouts.Info>
      </RevealOnScroll>
    )}
    <div className={"block md:hidden"}>
      <TableOfContent headings={headings} />
    </div>
    <RenderMdx body={body} />
  </article>
);
