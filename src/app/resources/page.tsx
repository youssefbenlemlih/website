import { Button, Card, Flex, Text } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

const resources = [
  {
    title: "Newsletter",
    description: "A newsletter where I share cool frontend-related knowledge",
    link: "/newsletter",
  },
  {
    title: "Frontend Kit",
    description: "Everything you need to be Productive Frontend Developer",
    link: "/resources/frontend-kit",
  },
  {
    title: "Git Cheat Sheet",
    description: "Master Git with this comprehensive Cheat Sheet",
    link: "/resources/git-cheat-sheet",
  },
  {
    title: "Website Code",
    description: "The Code of this website",
    link: "https://github.com/youssefbenlemlih/website",
  },
] as const;

const Page = () => (
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
    {resources.map(({ title, description, link }, index) => (
      <Card key={index} withBorder radius="lg">
        <Text size="md" fw="bold">
          {title}
        </Text>
        <Text size="sm" c="dimmed" mt="xs" mb="md">
          {description}
        </Text>
        <Flex justify={"end"}>
          <Button
            component="a"
            href={link}
            variant="light"
            rightSection={<IconArrowUpRight />}
            target="_blank"
          >
            View Resource
          </Button>
        </Flex>
      </Card>
    ))}
  </div>
);
export default Page;
