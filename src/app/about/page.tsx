import { Highlight } from "@/components/Highlight";
import { Icon, IconName } from "@/components/Icon";
import { createMetadata } from "@/lib/createMetadata";
import { ActionIcon, ActionIconGroup, Badge, Card, Text } from "@mantine/core";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import { Fragment, ReactNode } from "react";
import profile from "../../../public/images/profile.jpg";
import { A } from "@/components/A";
import { H1 } from "@/components/H1";
import { P } from "@/components/P";
import { H2 } from "@/components/H2";
import { H3 } from "@/components/H3";
import { Image } from "@/components/Image";
import { NewsLetter } from "@/components/NewsLetter";

type Technology = {
  icon: IconName;
  name: string;
};
const technologies = {
  git: { icon: "IconGitMerge", name: "git" },
  spring: { icon: "IconLeaf", name: "Spring" },
  cSharp: { icon: "IconHash", name: "C Sharp" },
  apis: { icon: "IconPlugConnected", name: "REST" },
  java: { icon: "IconCoffee", name: "Java" },
  postgres: { icon: "IconDatabase", name: "PostgreSQL" },
  liquibase: { icon: "IconDatabaseCog", name: "Liquibase" },
  jackRabbit: { icon: "IconCarrot", name: "Jackrabbit" },
  react: { icon: "IconAtom", name: "React" },
  openapi: { icon: "IconTarget", name: "OpenAPI" },
  reactQuery: { icon: "IconHexagon", name: "React Query" },
  winForms: { icon: "IconAppWindow", name: "Windows Forms" },
  embeddedProgramming: { icon: "IconCpu", name: "Embedded Programming" },
  xslt: {
    icon: "IconTransform",
    name: "XSLT",
  },
  mulesoft: { icon: "IconChartDots", name: "MuleSoft" },
  nextjs: { icon: "IconTriangle", name: "Nextjs" },
} as const;

type Work = {
  time: string;
  title: string;
  company: { name: string; url: string };
  description: string | ReactNode;
  technologies: Technology[];
};
const works: Work[] = [
  {
    time: "2024 - Now",
    title: "Fullstack IT Consultant",
    company: { name: "codecentric AG", url: "https://www.codecentric.de/" },
    description:
      "Development of Atlas, an internal tool for managing CVs, which serves as a central database for consultants at Codecentric AG. Further development of the user interface, development of a slack bot and implementation of database migrations.",
    technologies: [
      technologies.react,
      technologies.nextjs,
      technologies.git,
      technologies.postgres,
      technologies.mulesoft,
    ],
  },
  {
    time: "2021 - 2023",
    title: "Fullstack Engineer",
    company: { name: "Circus Group", url: "https://www.circus-group.com/" },
    description:
      "Extend the Aitme Ecosystem by" +
      " implementing features across services and technologies (from UI to DB)." +
      " Create webapps and a UI libraries using React." +
      " Work closely with a UX Designer and technical engineers to build simple UIs to control complex cooking robots." +
      " Setup pipelines for automatic API clients generation and continuous deployment.",
    technologies: [
      technologies.react,
      technologies.spring,
      technologies.openapi,
      technologies.reactQuery,
      technologies.git,
      technologies.apis,
      technologies.liquibase,
      technologies.postgres,
    ],
  },
  {
    time: "2021",
    title: "Java Developer (Working Student)",
    company: { name: "subshell GmbH", url: "https://subshell.com/" },
    description:
      "Expand Sophora CMS, a Content Management System used by leading media houses in germany, including ZDF, Tagesschau, NDR and Das Erste. \n" +
      "Build new Endpoints to support external app development and create  model mapping between different CMS domains to synchronize content." +
      "\n",
    technologies: [
      technologies.spring,
      technologies.git,
      technologies.apis,
      technologies.xslt,
      technologies.jackRabbit,
    ],
  },
  {
    time: "2019 -2021",
    title: "C# Developer (Working Student)",
    company: { name: "Werner Wirth GmbH", url: "https://wernerwirth.com/en/" },
    description:
      "Draft and develop new features of the operating software of AlphaCDS, a machine that coats electronic boards." +
      " Reduce legacy overhead by developing a test suite using VSTest. Develop a plugin to support a physical scale that uses a serial port interface.",
    technologies: [
      technologies.cSharp,
      technologies.winForms,
      technologies.embeddedProgramming,
      technologies.git,
    ],
  },
  {
    time: "2019 - 2022",
    title: "Bachelors of Applied Computer Science",
    company: {
      name: "Hamburg University of applied sciences",
      url: "https://www.haw-hamburg.de/",
    },
    description:
      "A practice-oriented 3 year degree course with focus on " +
      "the analysis and design of IT systems." +
      " Courses include mathematics, programming, databases, theoretical principles of computer science, and machine-oriented programming," +
      " distributed systems, IT system architectures, IT security and smart systems." +
      " Overall grade: Good.",
    technologies: [],
  },
];
type WebApp = {
  name: string;
  description: string;
  live: string;
  code: string;
  icon: IconName;
};

const webApps: WebApp[] = [
  {
    icon: "IconPaint",
    name: "Screen Color",
    description:
      "Turn your screen into a light source with a configurable color.",
    live: "https://youssefbenlemlih.github.io/screen-color",
    code: "https://github.com/youssefbenlemlih/screen-color",
  },
  {
    icon: "IconMusic",
    name: "Music Scale Generator",
    description:
      " Generate a random music scale. I use this to train my scales when practicing saxophone.",
    live: "https://youssefbenlemlih.github.io/random-music-scale-generator",
    code: "https://github.com/youssefbenlemlih/random-music-scale-generator",
  },
  {
    icon: "IconFeather",
    name: "Flappy Bird",
    description:
      "See how far can you can get in this infinite game! Based on flappy bird.",
    live: "https://youssefbenlemlih.github.io/flappy-ball",
    code: "https://github.com/youssefbenlemlih/flappy-ball",
  },
  {
    icon: "IconAdjustmentsHorizontal",
    name: "RGBA Camera",
    description:
      "Feeling blue? You can adjust the colors of your camera in this mini webapp.",
    live: "https://youssefbenlemlih.github.io/p5-camera-rgba-example/",
    code: "https://github.com/youssefbenlemlih/p5-camera-rgba-example",
  },
  {
    icon: "IconGridDots",
    name: "Camera Bubbles",
    description: "Create bubble art using your camera in this mini webapp.",
    live: "https://youssefbenlemlih.github.io/p5-camera-cells",
    code: "https://github.com/youssefbenlemlih/p5-camera-cells",
  },
];

export const metadata = createMetadata({
  path: "/about",
  title: "About",
  image: "/images/banners/about.png",
  description:
    "I love crafting elegant software to bring intuitive User Interfaces" +
    " to life. " +
    "My tools of choice are React " +
    "and Spring Boot. I like to share what " +
    "I learn in the Blog and on YouTube.",
});
const About = () => {
  return (
    <>
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
            I love crafting elegant software to bring intuitive User Interfaces
            to life.
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
              href={"https://www.youtube.com/channel/UCo-mJy_in2AasU9t-TOVKqw"}
            >
              YouTube
            </A>{" "}
            .
          </P>
        </div>
      </div>
      <H2>
        <Icon name={"IconBriefcase"} />
        Experience
      </H2>
      <div
        className={
          "grid gap-2 sm:grid-cols-[max-content,minmax(0,1fr)] sm:gap-4"
        }
      >
        {works.map(
          ({ title, company, time, description, technologies }, index) => (
            <Fragment key={index}>
              <P className={"p-0 text-sm font-semibold uppercase opacity-75"}>
                {time}
              </P>
              <div className={"mb-4"}>
                <P className={"p-0 text-lg"}>
                  <span className={"font-bold"}>{title}</span> ·{" "}
                  <A href={company.url}>{company.name}</A>
                </P>
                <div className={"mb-8 mt-2 flex flex-wrap gap-2"}>
                  {technologies.map(({ name, icon }, index) => (
                    <Badge
                      key={index}
                      variant="light"
                      pl={2}
                      leftSection={
                        <Icon className={"m-0 h-3 p-0 "} name={icon} />
                      }
                    >
                      {name}
                    </Badge>
                  ))}
                  <P>{description}</P>
                </div>
              </div>
            </Fragment>
          ),
        )}
      </div>
      <H2>
        <Icon name={"IconPresentation"} />
        Personal Projects
      </H2>
      <P>Side projects are an awesome tool to learn programming.</P>
      <P>
        Personally, side projects helped figure out what I really enjoy and
        mindfully design a career path.
      </P>
      <H3>
        <Icon name={"IconDevices"} />
        Saxophone Tutor App
      </H3>
      <Image
        className={"aspect-auto max-w-[250px]"}
        src={"/images/saxophone-tutor-mockup.png"}
        alt={"App screenshot"}
      />
      <P>
        <A href={"https://www.saxophonetutor.com/"}>
          {" "}
          <b>Saxophone Tutor</b>
        </A>{" "}
        is app that teaches saxophone using using interactive lessons and
        quizzes.
      </P>
      <P> The app content is managed through a creator webapp. </P>
      <P>
        More on{" "}
        <A href={"https://www.saxophonetutor.com/"}>saxophonetutor.com</A>.
      </P>
      <br />
      <H3>
        <Icon name={"IconMicroscope"} />
        Case Study: React State Management
      </H3>
      <P>
        I have been fascinated by React since I first tried it, but was always
        intrigued by the myriad of state management libraries available.
      </P>
      <P>
        In the context of my Computer Science Bachelor Thesis, I have compared
        common ones using a quantitative software evaluation framework.
      </P>
      <P>
        {" "}
        The full paper can be downloaded{" "}
        <A
          href={
            "https://github.com/youssefbenlemlih/bachelor-thesis/blob/main/state-management-in-component-bases-user-interfaces.pdf"
          }
        >
          here
        </A>
        .
      </P>
      <H3>
        <Icon name={"IconCompass"} />
        Beginner Projects
      </H3>
      <P>
        A few side projects that helped me learn programming. Thanks{" "}
        <A href={"https://www.youtube.com/@TheCodingTrain"}>The Coding Train</A>{" "}
        for the inspiration.
      </P>
      <br />
      <div className={" grid grid-cols-1  gap-4 sm:grid-cols-2 md:grid-cols-3"}>
        {webApps.map(({ name, icon, live, code, description }) => (
          <Card withBorder p="sm" pos="relative" key={name} className={"p-2"}>
            <Text className={"font-bold"} c="primary">
              <Icon className={"ml-0 h-4 "} name={icon} />
              {name}
            </Text>
            <Text size={"xs"}>{description}</Text>
            <br />
            <ActionIconGroup pos={"absolute"} right={12} bottom={12}>
              <ActionIcon
                variant="light"
                target="blank"
                component="a"
                href={code}
              >
                <IconBrandGithub className="w-4" />
              </ActionIcon>
              <ActionIcon variant="light" component="a" href={live}>
                <IconWorld className="w-4" />
              </ActionIcon>
            </ActionIconGroup>
          </Card>
        ))}
      </div>
      <br />
      <br />
      <NewsLetter />
    </>
  );
};

export default About;
