import { createMetadata } from "@/lib/createMetadata";
import { Intro } from "./1Intro";
import { Pillars } from "./2Pillars";
import { Services } from "./3Services";
import { Process } from "./4Process";
import { H2 } from "@/components/H2";
import { H3 } from "@/components/H3";
import { LastCTA } from "./99LastCTA";

export const metadata = createMetadata({
  path: "/services",
  title: "Services",
  image: "/images/banners/services.png",
  description:
    "I love crafting elegant software to bring intuitive User Interfaces" +
    " to life. " +
    "My tools of choice are React " +
    "and Spring Boot. I like to share what " +
    "I learn in the Blog and on YouTube.",
});
const Portfolio = () => <p> Portfolio/Case Studies </p>;
const Testimonials = () => <p> Firms I have worked With </p>;
const CoreValues = () => (
  <div>
    Software is an enablement, not a liability
    <H2>Core Values</H2>
    My commitment to delivering quality software rests on three foundational
    pillars:
    <H3>Code/Business Alignment</H3>
    Ensuring that every line of code is driven by your business goals.
    <H3>Flexibility</H3>
    Adapting my development approach to meet your changing needs as they arise.
    <H3>Extendability</H3>
    Building solutions with a forward-thinking approach to grow alongside your
    business.
  </div>
);
const Tools = () => <p> Tools </p>;
const AboutMe = () => <p> About Me </p>;
const FAQs = () => <p> FAQs </p>;
const Resources = () => <p> Blog/Resources (Optional) </p>;
const Page = () => (
  <>
    <Intro />
    <Pillars />
    <Services />
    <Process />
    {false && (
      <>
        <CoreValues />
        <Portfolio />
        <Testimonials />
        <Tools />
        <AboutMe />
        <FAQs />
        <Resources />
      </>
    )}
    <LastCTA />
  </>
);
export default Page;
