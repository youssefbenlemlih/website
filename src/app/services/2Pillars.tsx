import { H2 } from "@/components/H2";
import {
  Anchor,
  Box,
  Button,
  Card,
  Center,
  Flex,
  rem,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconAppWindow,
  IconAppWindowFilled,
  IconDeviceMobile,
  IconExternalLink,
  IconGlobe,
  IconServer2,
  IconSettingsAutomation,
  IconStack2,
  IconWorld,
} from "@tabler/icons-react";
const services = [
  {
    service: "Frontend Development",
    icon: <IconWorld />,
    description:
      "Crafting responsive, fast, and engaging websites that enhance user experience and drive growth.",
  },
  {
    service: "Mobile  Apps Development",
    description:
      "Building mobile solutions to bring your ideas to life across iOS and Android platforms.",
    icon: <IconDeviceMobile />,
  },
  {
    service: "Full Stack Development",
    icon: <IconStack2 />,
    description:
      "Covering both frontend and backend, I develop solutions that ensure seamless interaction, security, and high performance",
  },
  {
    service: "Programmatic Video Generation",
    icon: <IconSettingsAutomation />,
    description:
      "Automate and scale your video content creation, delivering personalized, data-driven videos that captivate your audience. ",
  },
];
export const Pillars = () => {
  return (
    <Flex direction={"column"} justify={"center"} m="xl" mih="80vh" py="120">
      <Text fw={500} ta="center" size={rem(36)} style={{ textWrap: "balance" }}>
        What I do
      </Text>
      <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 ">
        {services.map(({ service, icon, description }) => (
          <Card p="lg" radius={"md"} shadow="sm" withBorder key={service}>
            <Flex gap="md">
              <ThemeIcon size={"xl"}>{icon}</ThemeIcon>
              <Box>
                <Text fw={600}>{service}</Text>
                <Text fw={400}>{description}</Text>
                {false && (
                  <Anchor>
                    Read More{" "}
                    <IconExternalLink className="-ml-1 mb-[1px] inline h-4 align-text-bottom" />
                  </Anchor>
                )}
              </Box>
            </Flex>
          </Card>
        ))}
      </div>
    </Flex>
  );
};
