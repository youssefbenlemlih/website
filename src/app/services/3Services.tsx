import { Anchor, Box, Card, Flex, rem, Text, ThemeIcon } from "@mantine/core";
import {
  IconBrandReact,
  IconFlaskFilled,
  IconGhost2Filled,
  IconGraphFilled,
  IconZoomCheckFilled,
} from "@tabler/icons-react";

export const Services = () => {
  return (
    <Flex direction={"column"} justify={"center"} m="xl" mih="80vh" py="120">
      <Text fw={500} ta="center" size={rem(36)} style={{ textWrap: "balance" }}>
        How I Can Help You
      </Text>
      <div className="grid gap-28 pt-14">
        <Card radius={"lg"} p="lg" className="grid grid-cols-[4fr_3fr] gap-16">
          <Box className="self-center">
            <Text size="xl" fw={500}>
              Web Development with React
            </Text>
            <Text c="dimmed">
              Leveraging React’s ecosystem to build smooth, dynamic, and modern
              applications.
            </Text>
            {false && <Anchor>Read more</Anchor>}
          </Box>
          <Box className="aspect-square w-full">
            <ThemeIcon radius={"lg"} variant="light" className="h-full w-full">
              <IconBrandReact className="size-16" />
            </ThemeIcon>
          </Box>
        </Card>
        <Card radius={"lg"} p="lg" className="grid grid-cols-[3fr_4fr] gap-16">
          <Box className="aspect-square w-full">
            <ThemeIcon radius={"lg"} variant="light" className="h-full w-full">
              <IconGhost2Filled className="size-16" />
            </ThemeIcon>
          </Box>
          <Box className="self-center">
            <Text size="xl" fw={500}>
              Legacy Migration
            </Text>
            <Text c="dimmed">
              Upgrading your existing legacy systems, including transitions from
              old frameworks to React or updating older versions of React to the
              latest
            </Text>
          </Box>
        </Card>
        <Card radius={"lg"} p="lg" className="grid grid-cols-[4fr_3fr] gap-16">
          <Box className="self-center">
            <Text size="xl" fw={500}>
              Project Review
            </Text>
            <Text c="dimmed">
              Conducting a full audit of your project{"'"}s architecture, code
              quality, libraries, design patterns, SEO, and more to ensure it
              {"'"}s optimized and future-ready.
            </Text>
          </Box>
          <Box className="aspect-square w-full">
            <ThemeIcon radius={"lg"} variant="light" className="h-full w-full">
              <IconZoomCheckFilled className="size-16" />
            </ThemeIcon>
          </Box>
        </Card>
        <Card radius={"lg"} p="lg" className="grid grid-cols-[3fr_4fr] gap-16">
          <Box className="aspect-square w-full">
            <ThemeIcon radius={"lg"} variant="light" className="h-full w-full">
              <IconFlaskFilled className="size-16" />
            </ThemeIcon>
          </Box>
          <Box className="self-center">
            <Text size="xl" fw={500}>
              Testing
            </Text>
            <Text c="dimmed">
              Implementing comprehensive testing to minimize errors and enhance
              the quality of your product.
            </Text>
          </Box>
        </Card>
        <Card radius={"lg"} p="lg" className="grid grid-cols-[4fr_3fr] gap-16">
          <Box className="self-center">
            <Text size="xl" fw={500}>
              Workshops
            </Text>
            <Text c="dimmed">
              Leveraging React’s ecosystem to build smooth, dynamic, and modern
              applications.
            </Text>
          </Box>
          <Box className="aspect-square w-full">
            <ThemeIcon radius={"lg"} variant="light" className="h-full w-full">
              <IconGraphFilled className="size-16" />
            </ThemeIcon>
          </Box>
        </Card>
      </div>
    </Flex>
  );
};
