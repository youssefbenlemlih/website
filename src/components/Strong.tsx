import React from "react";
import { twMerge } from "tailwind-merge";

type StrongProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export function Strong({ className, ...props }: StrongProps) {
  return (
    <strong
      {...props}
      className={twMerge(`
            font-semibold
             
                ${className ?? ""}
               `)}
    />
  );
}
