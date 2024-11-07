import React from "react";
import { ButtonLink, H1, LatestInTheBlog, P } from "../../../components";
import { createMetadata } from "@/lib/createMetadata";

export const metadata = createMetadata({
  path: "/code-review-submitted",
  title: "Request Received",
  image: "/images/code-review-submitted.png",
  description: "Successfully requested a code review.",
});
function EmailConfirmed() {
  return (
    <>
      <H1>Request Received</H1>
      <P>Successfully submitted code review request!</P>
      <ButtonLink text={"Go back to the blog"} href={"/posts"} />
      <LatestInTheBlog />
    </>
  );
}

export default EmailConfirmed;
