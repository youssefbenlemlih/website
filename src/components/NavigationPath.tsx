"use client";

import { usePathname } from "next/navigation";
import { Anchor } from "@mantine/core";
import { Fragment } from "react";

export function DemoNavigationPath() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((s) => !!s);
  return (
    <div className={"flex gap-1"}>
      {segments.map((segment, index) => (
        <Fragment key={index}>
          /
          <Anchor
            href={"/" + segments.filter((_, i) => i <= index).join("/")}
          >
            {segment}
          </Anchor>
        </Fragment>
      ))}
    </div>
  );
}
