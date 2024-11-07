import { Pill, Box, Flex } from "@mantine/core";
import { TodoState } from "../../useTodos";
import { capitalize } from "lodash";

type ColumnTitleProps = { todoState: TodoState };

export const ColumnTitle = ({ todoState }: ColumnTitleProps) => {
  const color =
    todoState === "todo" ? "grey" : todoState === "doing" ? "blue" : "green";
  return (
    <Flex align={"center"}>
      <Pill c={color}>
        <Flex align={"center"} gap={4}>
          <Box className={"w-2 h-2 rounded-full"} bg={color} />
          {capitalize(todoState)}
        </Flex>
      </Pill>
    </Flex>
  );
};
