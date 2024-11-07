import React from "react";
import { CodeBlock } from "@/components";
import { Card, CardSection } from "@mantine/core";
import { Preview } from "@/components/Examples/Preview";

type ExampleTemplateProps = {
  code: string;
  component: React.ReactNode;
};

function ExampleTemplate({ component, code }: ExampleTemplateProps) {
  return (
    <Card withBorder className={"grid gap-2"}>
      <CardSection className="relative bg-[radial-gradient(var(--mantine-color-default-border)_1px,transparent_1px)] p-2 [background-size:16px_16px]">
        <Preview>{component}</Preview>
      </CardSection>
      <CardSection pt={0}>
        <CodeBlock language={"typescript"} code={code} minimal />
      </CardSection>
    </Card>
  );
}

export default ExampleTemplate;
