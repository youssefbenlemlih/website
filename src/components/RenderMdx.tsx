import { A } from "./A";
import { P } from "./P";
import { H1 } from "./H1";
import { H2 } from "./H2";
import { H3 } from "./H3";
import { Strong } from "./Strong";
import { Code } from "./Code";
import { MDXComponents } from "mdx/types";
import { Download } from "./Download";
import { Post } from "contentlayer2/generated";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { Icon } from "@/components/Icon";
import { Examples } from "@/components/Examples";
import { Callouts } from "@/components/Callouts";
import { H4 } from "@/components/H4";
import { SubmitCodeReviewCTA } from "@/components/SubmitCodeReviewCTA";
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Button,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import { ReactNode } from "react";

type RenderMdxProps = {
  body: Post["body"];
};

type HrefAnchorWrapperProps = {
  id?: string;
  children: ReactNode;
};

const HrefAnchorWrapper: React.FC<HrefAnchorWrapperProps> = ({
  id,
  children,
}) => {
  return <a href={`#${id}`}>{children}</a>;
};

const components: MDXComponents = {
  a: A,
  p: P,
  h1: (p) => (
    <HrefAnchorWrapper {...p}>
      <H1 {...p} />
    </HrefAnchorWrapper>
  ),
  h2: (p) => (
    <HrefAnchorWrapper {...p}>
      <H2 {...p} />
    </HrefAnchorWrapper>
  ),
  h3: (p) => (
    <HrefAnchorWrapper {...p}>
      <H2 {...p} />
    </HrefAnchorWrapper>
  ),
  h4: H4,
  H1,
  H2,
  H3,
  H4,
  SubmitCodeReviewCTA,
  strong: Strong,
  Examples,
  Callouts,
  code: Code,
  Icon,
  Download,
  table: Table,
  thead: TableThead,
  tbody: TableTbody,
  tr: TableTr,
  th: TableTh,
  td: TableTd,
  Div: (p) => <div {...p} />,
  Accordion: (p) => (
    <Accordion variant="separated" chevronPosition="left">
      <AccordionItem key={p.title} value={p.title}>
        <AccordionControl >{p.title}</AccordionControl>
        <AccordionPanel>{p.children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
  LinkButton: (props) => <Button component="a" target="_blank" {...props} />,
  img: (props) => (
    <img
      className={"h-auto w-full rounded-md max-w-xl"}
      {...props}
      src={props.src?.replace(/^images/, "/images")}
    />
  ),
};

export function RenderMdx({ body }: RenderMdxProps) {
  const MDXContent = useMDXComponent(body.code);
  return <MDXContent components={components} />;
}
