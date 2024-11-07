import { cn } from "@/lib/utils";
import * as TablerIcon from "@tabler/icons-react";
import { ComponentType } from "react";

export type IconName = keyof typeof TablerIcon;
export const Icon = ({
  name,
  color,
  size,
  className,
}: TablerIcon.TablerIconsProps & { name: IconName }) => {
  const MappedIcon = TablerIcon[
    name
  ] as ComponentType<TablerIcon.TablerIconsProps>;

  if (!MappedIcon) throw new Error(`Icon '${name}' not found in Tabler Icons`);
  return (
    <MappedIcon
      className={cn("mx-1 mb-1 inline-block", className)}
      color={color}
      size={size}
    />
  );
};
