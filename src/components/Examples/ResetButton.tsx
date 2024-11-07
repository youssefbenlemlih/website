"use client";
import { ActionIcon } from "@mantine/core";
import { IconCheck, IconRotate } from "@tabler/icons-react";

type ResetButtonProps = {
  success: boolean;
  onClick: () => void;
};
export const ResetButton = ({ success, onClick }: ResetButtonProps) => {
  return (
    <ActionIcon
      onClick={onClick}
      size={"sm"}
      variant="light"
      className={"absolute right-3 top-3"}
      color={success ? "green" : undefined}
    >
      {success ? <IconCheck width={14} /> : <IconRotate width={14} />}
    </ActionIcon>
  );
};
