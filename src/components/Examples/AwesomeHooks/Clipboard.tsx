"use client";
import { Button } from "@mantine/core";
import { useCopyToClipboard } from "usehooks-ts";

export const Clipboard = () => {
  const [copied, copy] = useCopyToClipboard();

  const handleCopy = () => {
    copy("This is the text to copy!");
  };

  return (
    <div>
      <Button onClick={handleCopy}>{copied ? "Copied!" : "Copy Text"}</Button>
      {copied && <p style={{ color: "green" }}>Text copied to clipboard!</p>}
    </div>
  );
};
