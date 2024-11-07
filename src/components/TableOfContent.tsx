import { Heading } from "@/types";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/Icon";
import { Card, CardSection, NavLink, Text } from "@mantine/core";
import { IconList } from "@tabler/icons-react";
type TableOfContentProps = { headings: Heading[] };

export function TableOfContent({ headings }: TableOfContentProps) {
  if (headings.length === 0) return <></>;
  return (
    <Card withBorder shadow="sm" radius="md" p={"xs"}>
      <CardSection withBorder mb="xs">
        <Text size="sm" p="sm" mb={3}>
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
            type === "h3" && "ml-6",
            type === "h4" && "ml-12",
            type === "h5" && "ml-18",
          )}
          leftSection={
            icon ? (
              <Icon
                className={"mx-0 mr-1 h-4"}
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
