import { ActionIcon, ActionIconGroup, Box, Text } from "@mantine/core";
import {
  IconBrandLinkedinFilled,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
  IconMailFilled,
} from "@tabler/icons-react";
import { site } from "../../site";
import { Logo } from "./Logo";
import { FooterNavigation } from "./Navigation";

export function Footer() {
  return (
    <>
      <Box className="grid m-12 gap-6 justify-items-center  md:grid-cols-[1fr_auto_1fr]">
        <Logo />
        <FooterNavigation />
        <ActionIconGroup>
          <ActionIcon
            component="a"
            href={site.youtube}
            size={"lg"}
            variant="outline"
            radius={"md"}
          >
            <IconBrandYoutubeFilled />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={site.linkedIn}
            size={"lg"}
            variant="outline"
            radius={"md"}
          >
            <IconBrandLinkedinFilled />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={site.twitter}
            size={"lg"}
            variant="outline"
            radius={"md"}
          >
            <IconBrandTwitterFilled />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={`mailto:${site.email}`}
            size={"lg"}
            variant="outline"
            radius={"md"}
          >
            <IconMailFilled />
          </ActionIcon>
        </ActionIconGroup>
      </Box>
      <Text mt="xl" size="sm" c="dimmed" ta="center">
        ©2024 Youssef. All Rights Reserved.
      </Text>
    </>
  );
}
