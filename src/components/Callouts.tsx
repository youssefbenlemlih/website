import { Alert } from "@mantine/core";
import { IconAlertCircle, IconBulb, IconInfoCircle } from "@tabler/icons-react";
import React from "react";

type CalloutProps = { children?: React.ReactNode; title?: string };
export const Callouts = {
  Info: ({ children, title = "Info" }: CalloutProps) => (
    <Alert icon={<IconInfoCircle />} title={title} color="primary">
      {children}
    </Alert>
  ),

  Tip: ({ children, title = "Tip" }: CalloutProps) => (
    <Alert icon={<IconBulb />} title={title} color="green">
      {children}
    </Alert>
  ),

  Warning: ({ children, title = "Warning" }: CalloutProps) => (
    <Alert icon={<IconAlertCircle />} title={title} color="yellow">
      {children}
    </Alert>
  ),
};
