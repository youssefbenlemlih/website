"use client";
import { Box, Button, Drawer, NavLink } from "@mantine/core";
import { usePathname } from "next/navigation";

const NavigationPath = ({
  href,
  text,
  alert,
}: {
  href: string;
  text: string;
  alert?: boolean;
}) => {
  const pathname = usePathname();

  return (
    <Button
      component="a"
      variant={pathname === href ? "light" : "subtle"}
      size="compact-md"
      href={href}
      pos="relative"
    >
      {alert && (
        <Box
          w={4}
          h={4}
          bg={pathname === href ? undefined : "orange.5"}
          pos="absolute"
          right={4}
          top={4}
          className="rounded-full"
        />
      )}
      {text}
    </Button>
  );
};
export const navigationPaths = [
  { href: "/posts", text: "Blog" },
  { href: "/services", text: "Services" },
  { href: "/newsletter", text: "Newsletter" },
  { href: "/frontend-kit", text: "Frontend Kit" },
  { href: "/about", text: "About" },
];
export const Navigation = ({ className }: { className?: string }) => {
  return (
    <nav className={className}>
      {navigationPaths.map(({ href, text }, index) => (
        <NavigationPath href={href} text={text} key={index} />
      ))}
    </nav>
  );
};
