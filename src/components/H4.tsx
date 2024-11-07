import React from "react";
import { twMerge } from "tailwind-merge";
import { Title } from "@mantine/core";

type H4Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function H4({ className, ...props }: H4Props) {
  return (
    <Title
      order={4}
      className={twMerge("scroll-mt-12 pb-1 pt-4", className)}
      {...props}
    />
  );
}
