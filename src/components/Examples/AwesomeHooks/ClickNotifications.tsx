import { useEventListener } from "usehooks-ts";
import { notifications } from "@mantine/notifications";
import { Text } from "@mantine/core";

export const ClickNotifications = () => {
  useEventListener(
    "click",
    () =>
      notifications.show({
        message: "You clicked!"
      }),
    { current: document.body }
  );
  return <Text>Click anywhere and see what happens ✨.</Text>;
};