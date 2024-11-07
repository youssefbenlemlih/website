import { TagType } from "../types";
import { Anchor, Badge } from "@mantine/core";

export function Tag({ tag }: { tag: TagType }) {
  return (
    <Anchor href={`/tags/${tag}`}>
      <Badge  variant={"light"}>{tag}</Badge>
    </Anchor>
  );
}
