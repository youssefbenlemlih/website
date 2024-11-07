import { Button, Center, Flex, rem, Text } from "@mantine/core";
import { Highlight } from "@/components/Highlight";

export const Intro = () => (
  <>
    <Flex direction={"column"} justify={"center"} m="xl" h="80vh">
      <Text fw={500} ta="center" size={rem(60)} style={{ textWrap: "balance" }}>
        Custom Software, That Fits your Needs
      </Text>
      <Text ta="center" size="xl" mt="md" style={{ textWrap: "balance" }}>
        I build <span className="font-medium">modern applications</span> that
        drive business growth with delightful user experiences
      </Text>
      <Center mt="xl">
        <Button
          variant="transparent"
          component="a"
          href="mailto:youssef.benlemlih@codecentric.de"
        >
          Send An Email
        </Button>
        <Button
          component="a"
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ36j5PA8LZNcv3v29e5fxMhvbxeSEQs5VLGa1TDVZ2felgA50VKAEv2QaHIYp3C6FhheGjCtS8W?gv=true"
        >
          Quick Video Call
        </Button>
      </Center>
    </Flex>
  </>
);
