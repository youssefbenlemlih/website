import { Anchor, Title } from "@mantine/core";

export default function Enums() {
  return (
    <div className={`[&>*]:mb-2 `}>
      <Title order={1} mb={"sm"}>
        Enum Types
      </Title>
      <ul>
        <li>
          <Anchor href={"/demos/enums/numeric-enums"}>Numeric Enums</Anchor>
        </li>
        <li>
          <Anchor href={"./enums/string-enums"}>String Enums</Anchor>
        </li>
        <li>
          <Anchor href={"./enums/string-literals"}>String Literals</Anchor>
        </li>
        <li>
          <Anchor href={"./enums/advanced-string-literals"}>
            Advanced String Literals
          </Anchor>
        </li>
      </ul>
    </div>
  );
}
