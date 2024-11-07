import { Container, rem, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { ScrollToCTAButton } from "./ScrollToCTAButton";

const data = [
  {
    title: "Dev Setup",
    body: "configure your terminal, IDE and more.",
  },
  {
    title: "Libraries",
    body: "the most useful libraries to bring your projects to the next level",
  },
  {
    title: "Tools",
    body: "developper-friendly tools for Deployment, Hosting, SEO, Payment...",
  },
  {
    title: "Design Assets",
    body: "including icons, fonts & UI Inspiration .",
  },
  {
    title: "No BS",
    body: "carefully curated tools that I personally use on a daily basis",
  },
];

export function HeroBullets() {
  return (
    <Container w={"100%"}>
      <Title>The Frontend Kit</Title>
      <Text mt="md">
        Everything you need to be Productive Frontend Developer
      </Text>
      <Stack mt={30} gap={"sm"}>
        {data.map(({ title, body }) => (
          <Text key={title}>
            <ThemeIcon size={20} radius="xl" mr={"xs"} component={"span"}>
              <IconCheck style={{ width: rem(12), height: rem(12) }} />
            </ThemeIcon>
            <b>{title}</b> – {body}
          </Text>
        ))}
      </Stack>
      <ScrollToCTAButton />
    </Container>
  );
}
