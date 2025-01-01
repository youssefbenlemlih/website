import { Box, Card, Flex, rem, Text, ThemeIcon } from "@mantine/core";
import {
  IconBrandReact,
  IconFlaskFilled,
  IconGraphFilled,
  IconZoomCheckFilled,
} from "@tabler/icons-react";

const services = [
  {
    title: "Web Development with React",
    description:
      "Leveraging React's ecosystem to build smooth, dynamic, and modern applications.",
    icon: IconBrandReact,
  },
  {
    title: "Legacy Migration",
    description:
      "Upgrading your existing legacy systems, including transitions from old frameworks to React or updating older versions of React to the latest",
    icon: IconZoomCheckFilled,
  },
  {
    title: "Project Review",
    description:
      "Conducting a full audit of your project's architecture, code quality, libraries, design patterns, SEO, and more to ensure it's optimized and future-ready.",
    icon: IconGraphFilled,
  },
  {
    title: "Testing",
    description:
      "Implementing comprehensive testing to minimize errors and enhance the quality of your product.",
    icon: IconFlaskFilled,
  },
  {
    title: "Workshops",
    description:
      "Leveraging React's ecosystem to build smooth, dynamic, and modern applications.",
    icon: IconBrandReact,
  },
];

export const Services = () => {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      my="xl"
      py={rem(60)}
      mih="60vh"
    >
      <Text fw={500} ta="center" size={rem(36)} style={{ textWrap: "balance" }}>
        How I Can Help You
      </Text>
      {services.map((service) => (
        <Card
          shadow="sm"
          withBorder
          radius={"lg"}
          p="md"
          m="md"
          className="gap-4 flex sm:flex-row"
          key={service.title}
        >
          <ThemeIcon
            radius={"md"}
            p="xs"
            variant="light"
            //w={rem(18)}
            size={"xl"}
            //h={rem(18)}
            //className="h-24 w-24 aspect-square"
          >
            <service.icon
              width={rem(12)}
              size={rem(12)}
              height={rem(12)}
              style={{ width: "70%", height: "70%" }}
              //className="aspect-square bg-red-400"
            />
          </ThemeIcon>
          <Box className="self-center">
            <Text size="xl" fw={500}>
              {service.title}
            </Text>
            <Text c="dimmed">{service.description}</Text>
          </Box>
        </Card>
      ))}
    </Flex>
  );
};
