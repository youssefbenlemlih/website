import { H1 } from "@/components/H1";
import { createMetadata } from "@/lib/createMetadata";
import { getAllThoughtsSortedByCreatedDate } from "@/lib/mdx";
import { Card, Stack, Text } from "@mantine/core";
import dayjs from "dayjs";

export const metadata = createMetadata({
  path: "/thoughts",
  title: "Thoughts",
  image: "/images/thoughts.png",
  description: "A Place to share my thoughts!",
});

const Page = () => {
  return (
    <>
      <H1>Thoughts</H1>
      <br />
      <Text>Just a place to gather my thoughts.</Text>
      <br />
      <Stack>
        {getAllThoughtsSortedByCreatedDate().map((entry, i) => (
          <Card
            className="transitions-all duration-300 hover:opacity-50"
            withBorder
            key={i}
            component="a"
            href={"/thoughts/" + entry.slug}
          >
            <Text fw={500} size="lg">
              {entry.title}
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
              {dayjs(entry.date).format("MMM D, YYYY")}
            </Text>
          </Card>
        ))}
      </Stack>
    </>
  );
};

export default Page;
