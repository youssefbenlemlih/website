import { Box, Button, Flex, rem, Text } from "@mantine/core";

export const LastCTA = () => {
  return (
    <>
      <Flex direction={"column"} justify={"center"} my="xl" py={rem(60)}>
        <Text fw={500} size={rem(36)} style={{ textWrap: "balance" }}>
          Bring Your Software Ideas To Life.
        </Text>
        <Text size="xl" mt="md" style={{ textWrap: "balance" }}>
          Book a free consultation call today, and let{"'"}s discuss how I can
          help meet your unique needs.{" "}
        </Text>
        <Box>
          <Button
            mt="sm"
            component="a"
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ36j5PA8LZNcv3v29e5fxMhvbxeSEQs5VLGa1TDVZ2felgA50VKAEv2QaHIYp3C6FhheGjCtS8W?gv=true"
          >
            Quick Video Call
          </Button>
        </Box>
      </Flex>
    </>
  );
};
