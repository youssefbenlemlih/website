import { A } from "@/components/A";
import { Icon } from "@/components/Icon";
import { TagKeys } from "@/types";
import { Flex } from "@mantine/core";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { P } from "./P";
import { Tag } from "./Tag";

export function Footer() {
  return (
    <div className="mx-auto w-full max-w-4xl  p-8 ">
      <div className={"grid grid-cols-[3fr_2fr_2fr] py-5 "}>
        <div className={"flex flex-col justify-between "}>
          <Logo />
          <div className={"flex gap-3"}>
            <A href="https://www.linkedin.com/in/youssef-bee/">
              <Icon name={"IconBrandLinkedin"} />
            </A>
            <A href="https://www.youtube.com/channel/UCo-mJy_in2AasU9t-TOVKqw">
              <Icon name={"IconBrandYoutube"} />
            </A>
            <A href="https://twitter.com/YBenlemlih">
              <Icon name={"IconBrandTwitter"} />
            </A>
            <A href="/newsletter">
              <Icon name={"IconMail"} />
            </A>
          </div>
        </div>
        <div className={"flex flex-col justify-between "}>
          <div className={"flex flex-col items-start"}>
            <P className="p-0 pb-2 text-sm font-bold opacity-70">Navigate</P>
            <Navigation className={"gap- flex flex-col"} />
          </div>
        </div>
        <div className={"flex flex-col justify-between "}>
          <div className={"flex flex-col items-start"}>
            <P className="p-0 pb-2 text-sm font-bold opacity-70">
              Posts by tags
            </P>
            <Flex direction={"column"} gap={"xs"} align={"start"}>
              {TagKeys.map((tag, index) => (
                <Tag tag={tag} key={index} />
              ))}
            </Flex>
          </div>
        </div>
      </div>
      <P className="text-center font-light opacity-75">
        ©2024 Youssef. All Rights Reserved.
      </P>
    </div>
  );
}
