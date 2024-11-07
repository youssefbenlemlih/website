import React from "react";
import { InlineCode } from "@/components/InlineCode";
import CodeBlock from "./CodeBlock";

type CodeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export function Code({ ...props }: CodeProps) {
  const language = props.className?.replace("language-", "");
  return language ? (
    <CodeBlock
      language={language}
      code={props.children as string}
      {...props}
    />
  ) : (
    <InlineCode {...props} />
  );
}
