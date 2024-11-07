import { Card } from "@mantine/core";
import { SocialMediaCard } from "./SocialMediaCard";
import { defaultProps } from "./defaultProps";

export const Preview = () => {
  return (
    <Card
      withBorder
      className=" bg-[radial-gradient(var(--mantine-color-default-border)_1px,transparent_1px)] p-2 [background-size:16px_16px]"
    >
      <SocialMediaCard {...defaultProps} />
    </Card>
  );
};
