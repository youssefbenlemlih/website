import { Anchor } from "@mantine/core";

export default function Home() {
  return (
    <div className={`[&>*]:mb-2 `}>
      <ul>
        <li>
          <Anchor href={"demos/todolist"}>Todo App</Anchor>
        </li>
        <li>
          <Anchor href={"demos/enums"}>Enums</Anchor>
        </li>
        <li>
          <Anchor href={"demos/dnd"}>Drag And Drop</Anchor>
        </li>
        <li>
          <Anchor href={"demos/social-media-feed"}>Social Media Feed</Anchor>
        </li>
        <li>
          <Anchor href={"demos/video-demos"}>Video Demos</Anchor>
        </li>
      </ul>
    </div>
  );
}
