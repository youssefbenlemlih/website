"use client";
import { useIntersectionObserver } from "usehooks-ts";

export const IntersectionObserver = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 10s ease-out",
      }}
    >
      <h2>This section fades in when in view</h2>
    </div>
  );
};
