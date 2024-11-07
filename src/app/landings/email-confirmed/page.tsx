import React from "react";
import { ButtonLink, H1, LatestInTheBlog, P } from "../../../components";
import { createMetadata } from "@/lib/createMetadata";

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
