import React from "react";

export const WithMaxWidth = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-8 md:px-12 ">
    {children}
  </div>
);
