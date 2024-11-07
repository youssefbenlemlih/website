import { Box, Flex, rem, Stack, Text, ThemeIcon } from "@mantine/core";
import {
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
} from "@tabler/icons-react";

const steps = [
  {
    title: "Discovery & Planning",
    body: "I start by understanding your goals and gathering detailed requirements. Together, we identify the key functionalities and create a roadmap tailored to your needs.",
  },
  {
    title: "Design & Prototyping",
    body: "I then create interactive prototypes to visualize the structure and design. This ensures we’re aligned on the look and feel before diving into development.",
  },
  {
    title: "Development",
    body: "Using the best practices in modern web development, I build your product with clean, modular code. Regular check-ins keep you updated on progress and allow for timely adjustments.  ",
  },
  {
    title: "Testing & QA ",
    body: "I conduct thorough testing to ensure everything functions as expected, from front-end responsiveness to backend security. Quality is a top priority.  ",
  },
  {
    title: "Launch & Support",
    body: "After deployment, I remain available for ongoing support, ensuring a smooth handover and addressing any post-launch needs or enhancements.",
  },
];
const icons = [
  <IconNumber1 key="1" className="w-16" />,
  <IconNumber2 key="2" className="w-16" />,
  <IconNumber3 key="3" className="w-16" />,
  <IconNumber4 key="4" className="w-16" />,
  <IconNumber5 key="5" className="w-16" />,
];
export const Process = () => {
  return (
    <Flex direction={"column"} justify={"center"} m="xl" mih="80vh" py="120">
      <Text fw={500} ta="center" size={rem(36)} style={{ textWrap: "balance" }}>
        How I Work
      </Text>
      <Stack gap="xl" pt="xl">
        {steps.map((step, index) => (
          <Flex key={index} align={"start"}>
            <ThemeIcon radius={"md"} mr="lg" variant="light" size={rem(64)}>
              {icons[index]}
            </ThemeIcon>
            <Box>
              <Text mb="sm" size={rem(28)}>
                {step.title}
              </Text>
              <Text>{step.body}</Text>
            </Box>
          </Flex>
        ))}
      </Stack>
    </Flex>
  );
};
