import { Faq } from "@/app/resources/frontend-kit/Faq";
import { GetItNow } from "@/app/resources/frontend-kit/GetItNow";
import { HeroBullets } from "@/app/resources/frontend-kit/HeroBullets";
import { Quote } from "@/app/resources/frontend-kit/Quote";
import { WhatOthersSay } from "@/app/resources/frontend-kit/WhatOthersSay";
import { WhatsIncluded } from "@/app/resources/frontend-kit/WhatsIncluded";
import { LatestInTheBlog } from "@/components/LatestInTheBlog";
import { createMetadata } from "@/lib/createMetadata";

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
