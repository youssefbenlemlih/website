import React from "react";
import { twMerge } from "tailwind-merge";
import { P } from "./P";
import { Anchor } from "@mantine/core";
import Link from "next/link";
export function A({
  className,
  href,
  ...props
}: {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const isOuterLink = href?.startsWith("http");
  return href ? (
    <Anchor
      component={Link}
      href={href}
      {...props}
      {...(isOuterLink
        ? {
            target: "_blank",
          }
        : {})}
      className={twMerge(`
                ${className ?? ""}
               `)}
    />
  ) : (
    <P>{props.children}</P>
  );
}
