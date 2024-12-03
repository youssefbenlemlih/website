import { Button, Flex } from "@mantine/core";
import { IconCircleArrowRightFilled } from "@tabler/icons-react";
import { site } from "../../../../site";

const id = "86d2cece-8ef9-4245-ad37-654f7517b4a0";
export const DownloadGitCheatSheetButtons = () => (
  <>
    <Flex direction={"column"} gap="xs" w="max-content" align="center" mt={30}>
      <Button
        component={"a"}
        href={`https://youssefbee.lemonsqueezy.com/checkout/buy/${id}?embed=1&media=0&logo=0&dark=1&button_color=%234B6EF5`}
        rightSection={<IconCircleArrowRightFilled className="size-4" />}
      >
        Join Newsletter & Download for Free
      </Button>
    </Flex>
    <Button
      component="a"
      target="_blank"
      href={site.url + "/files/a50386ad-b0fb-4c8f-b9b7-ae679d5addfc.pdf"}
      variant="transparent"
      size="sm"
      mt="md"
      p={0}
    >
      No Thanks, Just Give Me Access the PDF
    </Button>
  </>
);
