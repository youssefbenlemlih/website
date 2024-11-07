"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const RevealOnScroll = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const onWindScroll = () => {
    const element = ref.current;
    if (element) {
      const { top } = element.getBoundingClientRect();
      const isVisible = top < window.innerHeight;
      setIsVisible(isVisible);
    }
  };
  useEffect(() => {
    onWindScroll();
    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, [onWindScroll]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
};
