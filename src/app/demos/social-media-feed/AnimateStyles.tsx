"use client";
import { ReactNode, useState } from "react";
import "./AnimateStyles.css";
import { Button } from "@mantine/core";
import { Flipper, Flipped } from "react-flip-toolkit";

type AnimateStylesProps = {
  children: ReactNode;
};

export const AnimateStyles = ({ children }: AnimateStylesProps) => {
  const [unstyled, setUnstyled] = useState(true);
  return (
    <>
      <Flipper flipKey={unstyled + ""}>
        <Flipped flipId={"flip"} stagger="stagger">
          <div className="container" data-unstyled={unstyled}>
            {children}
          </div>
        </Flipped>
      </Flipper>

      <Button onClick={() => setUnstyled(!unstyled)}>
        {unstyled ? "Enable" : "Disable"}
      </Button>
    </>
  );
};
