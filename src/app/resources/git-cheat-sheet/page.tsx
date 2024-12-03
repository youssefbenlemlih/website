import { Image } from "@/components/Image";
import {
  Button,
  Card,
  Center,
  Container,
  Flex,
  Text,
  Title,
} from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { DownloadGitCheatSheetButtons } from "./DownloadGitCheatSheetButtons";

const Page = () => {
  return (
    <>
      <Flex direction={"column"} justify={"center"}>
        <Text
          fw={"bold"}
          ta="center"
          size={"2xl"}
          style={{ textWrap: "balance" }}
        >
          Master Git with this comprehensive Cheat Sheet{" "}
        </Text>
        <Text ta="center" size="lg" mt="md" style={{ textWrap: "balance" }}>
          Download this free Git Cheat Sheet PDF and have all essential Git
          commands at your fingertips.
          <br />
          Perfect for beginners and seasoned developers alike.
        </Text>
        <Center mt="xl">
          <Button component="a" href="#cta" leftSection={<IconDownload />}>
            Download PDF
          </Button>
        </Center>
      </Flex>
      <Center my="xl">
        <Card withBorder radius={"lg"} className="max-w-xl">
          <Text fw={"600"} size={"lg"} style={{ textWrap: "balance" }}>
            File Preview
          </Text>
          <Text size="sm" c="dimmed" mb="md">
            A sneak peek of our comprehensive Git Cheat Sheet
          </Text>
          <Image
            src={"/images/resources/git-cheat-sheet-preview.png"}
            alt={"Git Cheat Sheet Preview"}
          />
        </Card>
      </Center>
      <Container w={"100%"} id="cta" className="scroll-mt-16">
        <Title order={2}>Get It Now</Title>
        <Text mt="md">
          The <b>Git Cheat Sheet</b> is 100% Free!
        </Text>
        <Text mt="md">
          I would love it if you joined my Newsletter as well. Not only will you
          get notified when there is a new version, I also regularly send cool
          frontend-related knowledge (React, TypeScript and NextJS) that I
          learned in videos, books or blog articles.
        </Text>

        <br />
        <Text>
          If you want to lern more about Frontend Development, you don{"'"}t
          want to miss out on it. And of course, you can unsubscribe anytime.
        </Text>
        <DownloadGitCheatSheetButtons />
      </Container>
    </>
  );
};
export default Page;
