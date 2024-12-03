import { Icon } from "@/components/Icon";
import { cn } from "@/lib/utils";
import { Heading } from "@/types";
import { Card, CardSection, NavLink, Text } from "@mantine/core";
import { IconList } from "@tabler/icons-react";
type TableOfContentProps = { headings: Heading[] };

export function TableOfContent({ headings }: TableOfContentProps) {
  if (headings.length === 0) return <></>;
  return (
    <Card withBorder shadow="sm" radius="md" py={"xs"} px={0}>
      <CardSection withBorder mb="xs">
        <Text size="sm" m={"sm"} pl="sm" mb={"xs"}>
          <IconList className="my-auto inline w-4" /> Table of contents
        </Text>
      </CardSection>
      {headings?.map(({ text, link, type, icon }) => (
        <NavLink
          href={link}
          label={text}
          key={link}
          py={"0.2rem"}
          className={cn(
            "group  ",
            type === "h2" && "ml-0",
            type === "h3" && "ml-2",
            type === "h4" && "ml-4",
            type === "h5" && "ml-6",
          )}
          leftSection={
            icon ? (
              <Icon
                className={"mx-0 h-4"}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                name={icon}
              />
            ) : undefined
          }
        />
      ))}
    </Card>
  );
}
