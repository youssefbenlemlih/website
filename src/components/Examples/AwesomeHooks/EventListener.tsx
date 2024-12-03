"use client";
import { Box } from "@mantine/core";
import { useIntersectionObserver } from "usehooks-ts";
import { ClickNotifications } from "@/components/Examples/AwesomeHooks/ClickNotifications";

export function EventListener() {
  const { isIntersecting, ref } = useIntersectionObserver({ threshold: 0.5 });

  return <Box ref={ref}>{isIntersecting && <ClickNotifications />}</Box>;
}
