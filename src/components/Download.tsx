import { Button } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";

type DownloadProps = {
  text: string;
  id: string;
};

export function Download({ id, text }: DownloadProps) {
  return (
    <>
      <Button
        leftSection={<IconDownload />}
        component="a"
        href={`https://youssefbee.lemonsqueezy.com/checkout/buy/${id}?embed=1&media=0&logo=0&dark=1&button_color=%23689d6a`}
      >
        {text}
      </Button>
      <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
    </>
  );
}
