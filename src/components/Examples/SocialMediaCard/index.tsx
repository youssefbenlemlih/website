import ExampleTemplate from "@/components/Examples/ExampleTemplate";
import { SocialMediaCard as Component } from "./SocialMediaCard";
import { defaultProps } from "./defaultProps";

const code = `function SocialMediaCard() {
  return (
    <div>
      <img src="/images/demos/social-media-feed/profile.png" />
      <p>User</p>
      <p>React is the best framework ;D</p>
      <img src="/images/demos/social-media-feed/message.svg" />
      <p>1</p>
      <img src="/images/demos/social-media-feed/repost.svg" />
      <p>2</p>
      <img src="/images/demos/social-media-feed/like.svg" />
      <p>3</p>
    </div>
  );
}`;

export const SocialMediaCard = () => (
  <ExampleTemplate code={code} component={<Component {...defaultProps} />} />
);
