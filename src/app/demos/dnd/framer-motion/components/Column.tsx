import { ReactNode } from "react";

type ColumnProps = { children: ReactNode };

export const Column = ({ children }: ColumnProps) => {
  return <div className={"gap-2 flex flex-col"}>{children}</div>;
};
