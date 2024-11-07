import React from "react";
import { H1, P } from "../../components";
import { createMetadata } from "@/lib/createMetadata";

export const metadata = createMetadata({
  path: "/code-reviews",
  title: "Code Review",
  image: "/images/banners/code-reviews.png",
  description:
    " One of the best ways to improve your code quality is to have a second person review it!" +
    " Get your code reviewed for free.",
});

function CodeReviews() {
  return (
    <>
      <H1>Request a Code Review</H1>
      <P>
        One of the best ways to improve your code quality is to have a second
        person review it!
      </P>
      <P>You can submit your code for review in the form below.</P>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe18mT34JSz3WiWQGlp_skpiuilAHgummNBOct0P5EN7NvWow/viewform?embedded=true"
        width="100%"
        className={"min-h-[1000px]"}
      >
        Loading…
      </iframe>
    </>
  );
}

export default CodeReviews;
