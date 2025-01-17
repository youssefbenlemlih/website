import { Button, Center, Flex, rem, Text } from "@mantine/core";
import { site } from "../../../site";

export const Intro = () => (
  <>
    <Flex direction={"column"} justify={"center"} h="60vh" my="xl" py={rem(60)}>
      <Text fw={600} ta="center" size={"2xl"} style={{ textWrap: "balance" }}>
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
          href={`mailto:${site.email}`}
        >
          Send Email
        </Button>
        <Button
          component="a"
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ36j5PA8LZNcv3v29e5fxMhvbxeSEQs5VLGa1TDVZ2felgA50VKAEv2QaHIYp3C6FhheGjCtS8W?gv=true"
        >
          Quick Call
        </Button>
      </Center>
    </Flex>
  </>
);
