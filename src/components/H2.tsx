import React from "react";
import { twMerge } from "tailwind-merge";
import { Title, TitleProps } from "@mantine/core";

type H1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> &
  TitleProps;

export function H2({ className, ...props }: H1Props) {
  return (
    <Title
      order={2}
      mb={"sm"}
      mt={"sm"}
      className={twMerge(` scroll-mt-16 `, className)}
      {...props}
    />
  );
}
