import { Button } from "@mantine/core";

type ButtonLinkProps = { text: string; href: string };

export function ButtonLink({ text, href }: ButtonLinkProps) {
  return (
    <Button component="a" href={href}>
      {text} {" →"}
    </Button>
  );
}
