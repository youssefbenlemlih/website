import React from "react";
import { ButtonLink, H1, P } from "../components";
import { createMetadata } from "@/lib/createMetadata";

export const metadata = createMetadata({
  path: undefined,
  title: "Not Found",
  image: "/images/banners/404.png",
  description:
    "The requested page could not be found. It may have been removed or renamed.",
});

export const NotFound404 = () => {
  return (
    <>
      <H1>Oops</H1>
      <P>
        The page you requested cannot be found. It may have been renamed or
        removed.
      </P>
      <br />
      <ButtonLink text={"Go back to the blog"} href={"/posts"} />
    </>
  );
};

export default NotFound404;
