import { Button, Flex, Text } from "@mantine/core";
import { IconCircleArrowRightFilled } from "@tabler/icons-react";

const id = "e447eb7c-e24b-49b9-b61a-70ec659e73ec";
export const DownloadResourcesButton = () => (
  <>
    <Flex direction={"column"} gap="xs" w="max-content" align="center" mt={30}>
      <Text size={"xs"} px={"lg"} pt={"xxs"} c={"dimmed"}>
        Downloaded 250+ times{" "}
      </Text>
      <Button
        component={"a"}
        href={`https://youssefbee.lemonsqueezy.com/checkout/buy/${id}?embed=1&media=0&logo=0&dark=1&button_color=%23689d6a`}
        rightSection={<IconCircleArrowRightFilled className="size-4" />}
      >
        Join Newsletter & Download for Free
      </Button>
    </Flex>
    <Button
      component="a"
      target="_blank"
      href="https://youssefbenlemlih.notion.site/The-Frontend-Kit-81c0379323c947fa99d39cf3065758d4"
      variant="transparent"
      size="sm"
      mt="md"
      p={0}
    >
      No Thanks, Just Give Me Access the Frontend Kit
    </Button>
  </>
);
