"use client";
import { useLayoutEffect, useState } from "react";
import { bg, highlight } from "./shared";
import {
  Button,
  Card,
  useComputedColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { CopyIcon } from "@/components/CopyIcon";
import { cn } from "@/lib/utils";
import { IconFoldDown, IconFoldUp } from "@tabler/icons-react";
const LONG_LINES = 20000;
const LINES_SHOWN = 12;
export type CodeBlockProps = {
  language: string;
  code: string;
  minimal?: boolean;
};

export function CodeBlockClient({
  initial,
  code: codeProp,
  language,
  minimal,
}: {
  initial?: JSX.Element;
} & CodeBlockProps) {
  const theme = useMantineTheme();
  const code = codeProp.replace(/\n$/, "");
  const lineNumbers = (code.match(/\n/g) || []).length;
  const isLong = code.split("\n").length > LONG_LINES;
  const [expanded, setExpanded] = useState(!isLong);
  const trimmedCode = expanded
    ? code
    : code
        .split(/\n/)
        .filter((e, index) => index < LINES_SHOWN)
        .join("\n");
  const [nodes, setNodes] = useState(initial);
  const scheme = useComputedColorScheme();
  const dark = scheme === "dark";
  useLayoutEffect(() => {
    void highlight(trimmedCode, language, dark).then(setNodes);
  }, [trimmedCode, language, dark]);

  const background = dark ? bg.dark : bg.light;
  return (
    <Card
      p={0}
      withBorder={!minimal}
      radius={"sm"}
      style={{ position: "relative", overflowX: "auto" }}
    >
      <CopyIcon code={code} />
      {nodes ?? <p>Loading...</p>}
      {isLong && (
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 top-0 grid h-full w-full items-end justify-center",
            expanded && "pointer-events-none",
            !expanded && `bg-gradient-to-t from-[${background}] to-transparent`,
          )}
        >
          <div className={"pointer-events-auto mb-[10px] justify-self-end"}>
            <Button
              variant={"light"}
              size="compact-sm"
              leftSection={
                !expanded ? (
                  <IconFoldDown className="h-4" />
                ) : (
                  <IconFoldUp className="h-4" />
                )
              }
              onClick={() => setExpanded(!expanded)}
            >
              {!expanded ? "Expand" : "Fold"}
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
