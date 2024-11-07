"use client";
import { ActionIcon } from "@mantine/core";
import { IconCheck, IconCopy as TablerCopyIcon } from "@tabler/icons-react";
import { useState } from "react";

type CodeIconProps = {
  code: string;
};
export const CopyIcon = ({ code }: CodeIconProps) => {
  const [successfullyCopied, setSuccessfullyCopied] = useState(false);
  // remove trailing new line
  const onCopyClick = () => {
    navigator.clipboard.writeText(code).then(() => {
      setSuccessfullyCopied(true);
      setTimeout(() => setSuccessfullyCopied(false), 2000);
    });
  };
  return (
    <ActionIcon
      onClick={onCopyClick}
      size="sm"
      variant={"light"}
      style={{
        bottom: 10,
        right: 10,
        zIndex: 999,
      }}
      className={"absolute"}
      color={successfullyCopied ? "green" : undefined}
    >
      {successfullyCopied ? (
        <IconCheck width={12} />
      ) : (
        <TablerCopyIcon width={12} />
      )}
    </ActionIcon>
  );
};
