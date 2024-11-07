import React from "react";
import { cn } from "@/lib/utils";
import { Text } from "@mantine/core";

type PProps = {
  className?: string;
  children?: React.ReactNode;
};

export function P({ className, children }: PProps) {
  return <Text className={cn(className)}>{children}</Text>;
}
