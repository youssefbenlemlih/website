"use client";
import { ActionIcon, Drawer, NavLink, Box, Group } from "@mantine/core";
import { navigationPaths } from "./Navigation";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";

export const NavigationDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Group hiddenFrom="sm">
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
        {navigationPaths.map(({ href, text }, index) => (
          <NavLink href={href} label={text} key={index} />
        ))}
      </Drawer>
    </Group>
  );
};
