import {
  Card,
  Container,
  Flex,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconBookmark,
  IconTerminal,
  IconThumbUp,
  IconUser,
} from "@tabler/icons-react";

const iconClassName = "h-4 w-4";
const data = [
  {
    icon: <IconBookmark className={iconClassName} />,
    title: "Must Reads",
    description: "Blog posts that will 10x your coding game.",
  },
  {
    icon: <IconUser className={iconClassName} />,
    title: "Who To Follow",
    description: "Creators who share quality frontend content.",
  },
  {
    icon: <IconTerminal className={iconClassName} />,
    title: "Ultimate Setup",
    description: "For a seamless developer experience",
  },
  {
    icon: <IconThumbUp className={iconClassName} />,
    title: "Quality > Quantity",
    description: "Spend less time searching, more building. ",
  },
];

export function WhatsIncluded() {
  return (
    <Container w={"100%"}>
      <Title order={2}>Not Just a Collection</Title>

      <Text mt="md">
        The Frontend Kit includes <b>useful resources</b> to help you grow as a
        developer.
      </Text>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={"md"} mt={30}>
        {data.map((item) => (
          <Card withBorder key={item.title}>
            <Flex gap={"xs"} align={"center"} mb={"sm"}>
              <ThemeIcon variant="light" size={"md"}>
                {item.icon}
              </ThemeIcon>
              <Text fw={600} c={"primary"} fz="lg">
                {item.title}
              </Text>
            </Flex>
            <div>
              <Text c="dimmed" mt={"sm"}>
                {item.description}
              </Text>
            </div>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
