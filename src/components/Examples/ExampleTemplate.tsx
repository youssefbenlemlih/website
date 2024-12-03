import { CodeBlock } from "@/components/CodeBlock";
import { Preview } from "@/components/Examples/Preview";
import { Card, CardSection } from "@mantine/core";
import { promises as fs } from "fs";
import React from "react";

type ExampleTemplateProps = {
  component: React.ReactNode;
  code?: string;
  file?: string;
};

async function ExampleTemplate({
  component,
  code,
  file,
}: ExampleTemplateProps) {
  const codeContent = code ?? (await fs.readFile(process.cwd() + file, "utf8"));

  return (
    <Card withBorder className={"grid gap-2"}>
      <CardSection className="relative bg-[radial-gradient(var(--mantine-color-default-border)_1px,transparent_1px)] p-2 [background-size:16px_16px]">
        <Preview>{component}</Preview>
      </CardSection>
      <CardSection pt={0} className="overflow-x-auto">
        <CodeBlock language={"tsx"} code={codeContent} minimal />
      </CardSection>
    </Card>
  );
}

export default ExampleTemplate;
