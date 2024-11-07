import React from "react";
import { createMetadata } from "@/lib/createMetadata";
import { Quote } from "@/app/frontend-kit/Quote";
import { Faq } from "@/app/frontend-kit/Faq";
import { WhatsIncluded } from "@/app/frontend-kit/WhatsIncluded";
import { HeroBullets } from "@/app/frontend-kit/HeroBullets";
import { GetItNow } from "@/app/frontend-kit/GetItNow";
import { LatestInTheBlog } from "@/components";
import { WhatOthersSay } from "@/app/frontend-kit/WhatOthersSay";

export const metadata = createMetadata({
  path: "/frontend-kit",
  title: "Resources",
  image: "/images/banners/resources.png",
  description:
    "A collection of my bookmarks, favorite YouTubers and tools I regularly use.",
});

const Page = () => (
  <div className={"grid gap-y-16 py-16"}>
    <HeroBullets />
    <Quote />
    <WhatsIncluded />
    <WhatOthersSay />
    <Faq />
    <GetItNow />
    <LatestInTheBlog />
  </div>
);
export default Page;
