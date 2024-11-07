import React from "react";
import { twMerge } from "tailwind-merge";
import { Title } from "@mantine/core";

type H1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function H1({ className, ...props }: H1Props) {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Title
      order={1}
      mb={"sm"}
      mt={"sm"}
      className={twMerge(`
                ${className ?? ""}
               `)}
      {...props}
    />
  );
}
