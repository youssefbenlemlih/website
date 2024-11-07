import React from "react";
import NImage from "next/image";
import { cn } from "@/lib/utils";

type ImageProps = Parameters<typeof NImage>[0];
export const Image = ({ src, className, ...props }: ImageProps) => {
  return (
    <NImage
      {...{
        title: props.alt,
        src,
        ...(typeof src === "string"
          ? {
              className: cn("rounded-md w-full h-auto", className),
              width: "0",
              height: "0",
              sizes: "100vw",
            }
          : {
              className: cn("rounded-md", className),
              placeolder: "blur",
            }),
        ...props,
      }}
    />
  );
};
