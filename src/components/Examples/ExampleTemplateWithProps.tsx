"use client";
import React from "react";
import {
  Card,
  CardSection,
  Grid,
  GridCol,
  useMantineTheme,
} from "@mantine/core";
import { Preview } from "@/components/Examples/Preview";
import { CodeBlockClient } from "../CodeBlock/CodeBlockClient";

type ExampleTemplateProps = {
  code: string;
  component: React.ReactNode;
  propsEditor?: React.ReactNode;
};

function ExampleTemplateWithProps({
  component,
  code,
  propsEditor,
}: ExampleTemplateProps) {

  return (
    <Card withBorder className={"grid gap-2"}>
      <CardSection
        p={0}
        className=" bg-[radial-gradient(var(--mantine-color-default-border)_1px,transparent_1px)] p-2 [background-size:16px_16px]"
      >
        <Grid grow>
          <GridCol span={8} pos={"relative"}>
            <Preview>{component}</Preview>
          </GridCol>
          {propsEditor && (
            <GridCol
              span={4}
              p="sm"
              pr="md"
              className="grid gap-2"
              bg={"var(--mantine-color-body)"}
            >
              {propsEditor}
            </GridCol>
          )}
        </Grid>
      </CardSection>
      <CardSection pt={0}>
        <CodeBlockClient language={"tsx"} code={code} minimal />
      </CardSection>
    </Card>
  );
}

export default ExampleTemplateWithProps;
