"use client";
import { cn } from "@/lib/utils";
import {
  ActionIcon,
  Button,
  ButtonProps,
  Drawer,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const NavigationPath = ({
  href,
  text,
  ...props
}: { href: string; text: string } & ButtonProps) => {
  const pathname = usePathname();

  return (
    <Button
      component="a"
      variant={pathname === href ? "light" : "subtle"}
      size="compact-md"
      href={href}
      pos="relative"
      {...props}
    >
      {text}
    </Button>
  );
};

export const navigationPaths = [
  { href: "/posts", text: "Blog" },
  { href: "/services", text: "Services" },
  {
    href: "/resources",
    text: "Free Resources",
    links: [
      { href: "/newsletter", text: "Newsletter" },
      { href: "/resources/frontend-kit", text: "Frontend Kit" },
      { href: "/resources/git-cheat-sheet", text: "Git Cheat Sheet" },
      { href: "/resources/website", text: "Website Code" },
    ],
  },
  { href: "/about", text: "About" },
];
export const FooterNavigation = () => {
  return (
    <nav className={cn("flex items-center")}>
      {navigationPaths.map(({ href, text }, index) => (
        <NavigationPath href={href} text={text} key={index} size="compact-xs" />
      ))}
    </nav>
  );
};
export const DesktopNavigation = ({ className }: { className?: string }) => {
  return (
    <nav className={cn("flex items-center gap-3", className)}>
      {navigationPaths.map(({ href, text }, index) => (
        <NavigationPath href={href} text={text} key={index} />
      ))}
    </nav>
  );
};

export const MobileNavigation = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ActionIcon variant="light" onClick={open}>
        <IconMenu2 size={16} />
      </ActionIcon>
      <Drawer
        title="Navigation"
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        h="50px"
        position="top"
      >
        {navigationPaths.map(({ href, text, links }, index) => (
          <Fragment key={index}>
            <NavLink href={href} label={text} />
            {links?.map(({ href, text }, index) => (
              <NavLink ml="md" href={href} label={text} key={index} />
            )) ?? null}
          </Fragment>
        ))}
      </Drawer>
    </>
  );
};
