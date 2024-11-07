import { DownloadResourcesButton } from "@/app/frontend-kit/DownloadResourcesButton";
import { Container, Text, Title } from "@mantine/core";

export function GetItNow() {
  return (
    <Container w={"100%"} id="cta" className="scroll-mt-16">
      <Title order={2}>Get It Now</Title>
      <Text mt="md">
        The <b>Frontend Kit</b> is 100% Free!
      </Text>
      <Text mt="md">
        I would love it if you joined my Newsletter as well. Not only will you
        get notified when there is a new version, I also regularly send cool
        frontend-related knowledge (React, TypeScript and NextJS) that I learned
        in videos, books or blog articles.
      </Text>

      <br />
      <Text>
        If you want to lern more about Frontend Development, you don{"'"}t want
        to miss out on it. And of course, you can unsubscribe anytime.
      </Text>
      <DownloadResourcesButton />
    </Container>
  );
}
