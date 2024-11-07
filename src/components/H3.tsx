import React from "react";
import { twMerge } from "tailwind-merge";
import { Title } from "@mantine/core";

type H1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function H3({ className, ...props }: H1Props) {
  return (
    <Title
      order={3}
      className={twMerge("scroll-mt-12 pb-2 pt-4", className)}
      {...props}
    />
  );
}
