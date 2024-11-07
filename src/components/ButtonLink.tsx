import Anchor from "next/link";

type ButtonLinkProps = { text: string; href: string };

export function ButtonLink({ text, href }: ButtonLinkProps) {
  return (
    <Anchor
      href={href}
      className="inline-block rounded-md bg-aqua-500 px-4 py-2 text-white hover:text-white hover:opacity-90 "
    >
      {text} {" →"}
    </Anchor>
  );
}
