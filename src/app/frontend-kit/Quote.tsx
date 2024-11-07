import { Blockquote, Text } from "@mantine/core";
import { Image } from "@/components";
import profile from "../../../public/images/profile.jpg";

const MyText = () => (
  <Text component={"span"}>
    <Text size={"lg"} fw={600} c={"primary.7"} component={"span"}>
      A Word From Me...
    </Text>
    <br />
    <br />
    My name is Youssef and I have been tinkering with Frontend Development for{" "}
    <u>the last 5 years</u>.
    <br />
    <br />
    Frontend brings me joy, but I often found myself <b>struggling</b> with some
    stuff like:
    <br />
    <br />
    <ul>
      <li>Layouting, finding good fonts, choosing icons...</li>
      <li>
        Tedious tasks, like Regular Expressions, tweaking CSS shadows or
        creating color swatches from scratch...
      </li>
      <li>Keeping up with the latest JavaScript / React news...</li>
    </ul>
    <br />
    So I decided to put all the accumulated knowledge of the last years into one
    place.
    <br />
    <br />
    <Text fw={600} component={"span"}>
      This is what I wish I had, when I was just getting started.
    </Text>
    <br />
    <br />
    Best of luck and enjoy the journey!
  </Text>
);
export const Quote = () => {
  return (
    <div>
      <Blockquote
        cite="– Youssef Benlemlih"
        m={"sm"}
        mt="xl"
        iconSize={42}
        radius={"md"}
        icon={
          <Image
            src={profile}
            alt={"Youssef's profile picture."}
            className={"inline h-8 w-8 rounded-full   "}
          />
        }
      >
        <MyText />
      </Blockquote>
    </div>
  );
};
