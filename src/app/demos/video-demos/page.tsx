"use client";
import { Title, Anchor } from "@mantine/core";

export default function VideoDemos() {
  return (
    <div className={`[&>*]:mb-2 `}>
      <Title order={2} mb={"sm"}>
        Video Demos
      </Title>
      <ul>
        <li>
          <Anchor href={"/demos/video-demos/image-with-caption"}>Video with Caption</Anchor>
        </li>
      </ul>
    </div>
  );
}
