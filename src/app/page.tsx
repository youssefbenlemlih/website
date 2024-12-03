import { Highlight } from "@/components/Highlight";
import { Icon } from "@/components/Icon";
import { Image } from "@/components/Image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SubmitCodeReviewCTA } from "@/components/SubmitCodeReviewCTA";
import { createMetadata } from "@/lib/createMetadata";
import { getLatestYoutubeVideoSlug } from "@/lib/mdx";
import profile from "../../public/images/profile.jpg";
import { A } from "@/components/A";
import { H1 } from "@/components/H1";
import { H2 } from "@/components/H2";
import { LatestInTheBlog } from "@/components/LatestInTheBlog";
import { P } from "@/components/P";

export const metadata = createMetadata({
  path: "/",
  title: "Youssef's Blog",
  image: "/images/banners/index.png",
  description: "Hi, I'm Youssef. I talk about React, TypeScript and NextJS.",
});
const Index = () => {
  const latestYoutubeVideoSlug = getLatestYoutubeVideoSlug();
  return (
    <>
      <div className="my-20 flex flex-col gap-20">
        <RevealOnScroll>
          <div className="mb-16 grid items-center sm:grid-cols-[1fr_min-content]">
            <Image
              className="row-start-1 m-4 max-w-[200px] sm:col-start-2"
              src={profile}
              alt={"Youssef's profile picture."}
              priority
            />
            <div>
              <H1 className="pb-4 pt-6 text-3xl font-semibold">
                I{"'"}m Youssef —
                <Highlight c={"primary"}>a Fullstack IT Consultant.</Highlight>
              </H1>
              <P>
                I love crafting elegant software to bring intuitive User
                Interfaces to life.
                <br />
                <br />
                My tools of choice are{" "}
                <A href={"https://react.dev/"}>
                  <Icon name={"IconBrandReact"} className={"mx-0 h-4"} />
                  React
                </A>{" "}
                and{" "}
                <A href={"https://spring.io/projects/spring-boot"}>
                  <Icon className={"mx-0 h-4"} name={"IconLeaf"} />
                  Spring Boot
                </A>
                {". "}
                <br />
                <br />I like to share what I learn in the{" "}
                <A href={"./posts"}>Blog</A> and on{" "}
                <A
                  href={
                    "https://www.youtube.com/channel/UCo-mJy_in2AasU9t-TOVKqw"
                  }
                >
                  YouTube
                </A>{" "}
                .
              </P>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          {latestYoutubeVideoSlug && (
            <>
              <H2>Latest Video</H2>
              <iframe
                className={"aspect-video min-w-full rounded-md "}
                src={`https://www.youtube.com/embed/${latestYoutubeVideoSlug}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </>
          )}
        </RevealOnScroll>
        <RevealOnScroll>
          <SubmitCodeReviewCTA />
        </RevealOnScroll>
        <RevealOnScroll>
          <LatestInTheBlog />
        </RevealOnScroll>
      </div>
    </>
  );
};

export default Index;
