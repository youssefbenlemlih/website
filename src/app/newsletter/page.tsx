import { H1 } from "@/components/H1";
import { H2 } from "@/components/H2";
import { NewsLetterForm } from "@/components/NewsLetterForm";
import { createMetadata } from "@/lib/createMetadata";
import { getAllNewslettersSortedByCreatedDate } from "@/lib/mdx";
import { Card, Stack, Text } from "@mantine/core";
import dayjs from "dayjs";

export const metadata = createMetadata({
  path: "/newsletter",
  title: "Newsletter",
  image: "/images/newsletter.png",
  description: "Join the newsletter!",
});

const Page = () => {
  return (
    <>
      <H1>Free Weekly Frontend Newsletter</H1>
      <br />
      <Text>
        This is a weekly (ish) newsletter where I share{" "}
        <b>cool frontend-related knowledge</b> that I learned in videos, books
        or blog articles.
      </Text>
      <br />
      <Text>
        It includes tips regarding <b>React, TypeScript and NextJS</b>, directly
        in your inbox.
      </Text>
      <br />
      <Text>
        It’s 100% free, always will be, and you can unsubscribe anytime.
      </Text>
      <br />
      <Text>Join over 200 happy readers 👇</Text>
      <NewsLetterForm />
      <H2 mt="xl">Read Previous Issues of The Newsletter </H2>
      <Stack>
        {getAllNewslettersSortedByCreatedDate().map((newsletter, i) => (
          <Card
            className="transitions-all duration-300 hover:opacity-50"
            withBorder
            key={i}
            component="a"
            href={"/newsletter/" + newsletter.slug}
            target="_blank"
          >
            <Text fw={500} size="lg">
              {newsletter.title}
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
              {dayjs(newsletter.date).format("MMM D, YYYY")}
            </Text>
          </Card>
        ))}
      </Stack>
    </>
  );
};

export default Page;
