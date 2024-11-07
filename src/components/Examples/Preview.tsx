"use client";
import { ReactNode, useState } from "react";
import { ResetButton } from "./ResetButton";

export const Preview = ({ children }: { children: ReactNode }) => {
  const [resetCounter, setResetCounter] = useState(0);
  const [successfullyCopied, setSuccessfullyCopied] = useState(false);
  const onResetClick = () => {
    setSuccessfullyCopied(true);
    setResetCounter(resetCounter + 1);
    setTimeout(() => setSuccessfullyCopied(false), 2000);
  };
  return (
    <>
      <ResetButton success={successfullyCopied} onClick={onResetClick} />
      <div key={resetCounter} className={"p-4"}>
        {children}
      </div>
    </>
  );
};
