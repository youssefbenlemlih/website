import React from "react";
import { createMetadata } from "@/lib/createMetadata";
import { ButtonLink } from "@/components/ButtonLink";
import { H1 } from "@/components/H1";
import { LatestInTheBlog } from "@/components/LatestInTheBlog";
import { P } from "@/components/P";

export const metadata = createMetadata({
  path: "/newsletter-joined",
  title: "Newsletter Joined",
  image: "/images/banners/newsletter-joined.png",
  description: "You have successfully joined the newsletter.",
});
function EmailConfirmed() {
  return (
    <>
      <H1>You{"'"}re in!</H1>
      <br />
      <P>Successfully joined the newsletter!</P>
      <br />
      <br />
      <ButtonLink text={"Go back to the blog"} href={"/posts"} />
      <LatestInTheBlog />
    </>
  );
}

export default EmailConfirmed;
