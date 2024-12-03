import { A } from "@/components/A";
import { Callouts } from "@/components/Callouts";
import { P } from "@/components/P";
import { RenderMdx } from "@/components/RenderMdx";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { TableOfContent } from "@/components/TableOfContent";
import { Tag } from "@/components/Tag";
import { TagType } from "@/types";
import { Flex } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import { Post } from "contentlayer2/generated";
import dayjs from "dayjs";

export const PostContent = ({
  post: { modifiedDate, headings, tags, date, body, youtubeKey },
}: {
  post: Post;
}) => (
  <article>
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
      <RevealOnScroll className={"col-span-full my-6"}>
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
    <div className={"[&>*]:mb-8"}>
      <RenderMdx body={body} />
    </div>
  </article>
);
