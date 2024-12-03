import { ReactNode } from "react";
import { TagKeys, Heading } from "../types";
import { Tag } from "./Tag";
import { Image } from "./Image";
import profile from "../../public/images/profile.jpg";
import Anchor from "next/link";
import { P } from "./P";
import { NewsLetter } from "./NewsLetter";
import { TableOfContent } from "./TableOfContent";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Flex } from "@mantine/core";

const Section = ({ children }: { children?: ReactNode }) => (
  <div className={"h-full"}>
    <div className={"sticky top-24 mb-6"}>
      <RevealOnScroll>{children}</RevealOnScroll>
    </div>
  </div>
);

const EnjoyTheBlogSection = () => (
  <Section>
    <Anchor href={"/about"}>
      <div className={"flex gap-3 "}>
        <Image
          className={"max-h-[50px] max-w-[50px]"}
          src={profile}
          alt={"Youssef's profile picture."}
        />
        <div>
          <P className="p-0 text-sm">Enjoy the blog!</P>
          <P className="p-0 text-sm text-primary-500">— Youssef</P>
        </div>
      </div>
    </Anchor>
  </Section>
);
export function SideBar({ headings }: { headings: Heading[] }) {
  return (
    <div className="hidden flex-col justify-between px-4 md:flex">
      <Section>
        <TableOfContent headings={headings} />
      </Section>

      <Section>
        <div className={"flex flex-col items-start "}>
          <P className="text-sm">Browse by tags</P>
          <Flex direction={"column"} gap={"xs"} align={"start"}>
            {TagKeys.map((tag, index) => (
              <Tag tag={tag} key={index} />
            ))}
          </Flex>
        </div>
      </Section>
      <Section>
        <NewsLetter minimal />
      </Section>
      <Section></Section>
    </div>
  );
}
