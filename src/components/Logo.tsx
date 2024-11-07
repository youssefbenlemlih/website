import { Flex, Text } from "@mantine/core";
import Anchor from "next/link";
import { Image } from "@/components";
import profile from "../../public/images/profile.jpg";
export const Logo = () => (
  <Anchor href="/" className={"group"}>
    <Flex align={"center"} gap="xs">
      <Image
        className="inline rounded-full border-2 border-primary-5 transition duration-300 ease-out group-hover:rotate-3 group-hover:scale-110"
        src={profile}
        alt={"Youssef's profile picture."}
        priority
        width={28}
      />
      <Text
        inline
        fw={600}
        className={"text-primary-5 transition-all group-hover:text-primary-8 "}
      >
        Youssef
      </Text>
    </Flex>
  </Anchor>
);
