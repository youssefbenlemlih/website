import { Card } from "@mantine/core";
import { SocialMediaCard } from "./SocialMediaCard";
import { defaultProps } from "./defaultProps";

export const SocialMediaCardPreview = () => {
  return (
    <Card
      withBorder
      className="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    >
      <SocialMediaCard {...defaultProps} />
    </Card>
  );
};
