import { Callouts } from "@/components/Callouts";
import { Anchor, Button, Text } from "@mantine/core";
import { IconSend } from "@tabler/icons-react";

export const SubmitCodeReviewCTA = () => (
  <Callouts.Tip title={"Get your Code Reviewed"}>
    <Text>
      One of the best ways to improve your code quality is to have a second
      person review it!
      <br />
      <br />
      Code review submissions are currently open
    </Text>
    <br />
    <Anchor href={"/code-reviews"}>
      <Button color="green" leftSection={<IconSend width={14} />}>
        Request Review
      </Button>
    </Anchor>
  </Callouts.Tip>
);
