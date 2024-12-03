import { Button, Flex, Text } from "@mantine/core";
import { IconCircleArrowDownFilled } from "@tabler/icons-react";

export const ScrollToCTAButton = () => (
  <Flex direction={"column"} gap="xs" w="min-content" align="center" mt={30}>
    <Text size={"xs"} px={"lg"} pt={"xxs"} c={"dimmed"}>
      Downloaded 250+ times{" "}
    </Text>
    <Button
      component={"a"}
      href={"#cta"}
      leftSection={<IconCircleArrowDownFilled className="size-4" />}
    >
      Download for Free
    </Button>
  </Flex>
);
