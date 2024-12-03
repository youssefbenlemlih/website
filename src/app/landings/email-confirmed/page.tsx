import React from "react";
import { createMetadata } from "@/lib/createMetadata";
import { ButtonLink } from "@/components/ButtonLink";
import { H1 } from "@/components/H1";
import { LatestInTheBlog } from "@/components/LatestInTheBlog";
import { P } from "@/components/P";

export const metadata = createMetadata({
  path: "/email-confirmed",
  title: "Email Confirmed",
  image: "/images/banners/email-confirmed.png",
  description: "You have successfully confirmed your email!",
});

function NewLetterJoined() {
  return (
    <>
      <H1>Email Confirmed</H1>
      <P>Successfully confirmed your email!</P>
      <ButtonLink text={"Go back to the blog"} href={"/posts"} />
      <LatestInTheBlog />
    </>
  );
}

export default NewLetterJoined;
