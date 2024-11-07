import { Card, Container, Text, Title } from "@mantine/core";

const quotes = [
  {
    user: "@mustafabektas7207",
    quote: (
      <span>
        Oh my god, the front end kit could be{" "}
        <b>the most useful source I clicked this year.</b> [...]
        <br /> ... ahh.. thank you so much man, i mean it.
      </span>
    ),
  },
  {
    user: "@themesongasker",
    quote: <span>Thanks Youssef, your video and kit really helped me 🎉</span>,
  },
] as const;

export function WhatOthersSay() {
  return (
    <Container w={"100%"}>
      <Title order={2}>What Others Say</Title>
      <div className={"grid grid-cols-1 items-start gap-2 pt-4 sm:grid-cols-2"}>
        {quotes.map(({ user, quote }, index) => (
          <Card key={index} padding="lg" radius="md" withBorder>
            <Text fw={500} mb={"xs"}>
              {quote}
            </Text>
            <Text c="dimmed" size="sm">
              {user}
            </Text>
          </Card>
        ))}
      </div>
    </Container>
  );
}
