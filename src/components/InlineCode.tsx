import React from "react";
import { Code as MantineCode } from "@mantine/core";
type InlineCodeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;
export function InlineCode(props: InlineCodeProps) {
  return <MantineCode {...props} style={{ fontSize: "0.9em" }} />;
}
