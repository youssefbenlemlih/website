"use client";
import { Accordion, Anchor, Container, Title } from "@mantine/core";
import { site } from "../../../../site";

export function Faq() {
  return (
    <Container w={"100%"}>
      <Title order={2} ta="center" mb={"xl"}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="contained" w={"100%"}>
        <Accordion.Item value="newsletter">
          <Accordion.Control>Who is this for?</Accordion.Control>
          <Accordion.Panel c={"dimmed"}>
            The Frontend Kit is perfect for Beginner and Intermediate Frontend
            Developers.
            <br />
            <br /> If you are a seasoned developer, you may find a tool or two
            you didn{"'"}t already come across.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="credit-card">
          <Accordion.Control>Why is this free?</Accordion.Control>
          <Accordion.Panel c={"dimmed"}>
            I am a strong believer in Knowledge-Sharing (and hate gatekeepers).
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="payment">
          <Accordion.Control>
            I found better alternatives. What to do?
          </Accordion.Control>
          <Accordion.Panel c={"dimmed"}>
            Feel free to send me an{" "}
            <Anchor href={`mailto:${site.email}`} target="_blank">
              email
            </Anchor>
            . I will give the proposed tool a try, and update the Frontend Kit
            accordingly.{" "}
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="pdf">
          <Accordion.Control>Is this a PDF?</Accordion.Control>
          <Accordion.Panel c={"dimmed"}>
            Yes and No: You receive access to a notion document that you can
            duplicate and edit.
            <br />
            <br />
            You can also export the document as a PDF file.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
