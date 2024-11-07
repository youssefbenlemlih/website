"use client";

import { Grid, GridCol } from "@mantine/core";

export type Props = {
  userName: string;
  userImageUrl: string;
  text: string;
  likesCount: number;
  resharesCount: number;
  commentsCount: number;
};

export const SocialMediaCardWithProps = ({
  userName,
  userImageUrl,
  text,
  likesCount,
  resharesCount,
  commentsCount,
}: Props) => {
  return (
        <div className="card">
          <img
            src="/images/demos/social-media-feed/profile.png"
            alt=""
            className="profilePicture"
          />
          <p className="userName">{userName}</p>
          <p className="text">{text}</p>
          <img
            src="/images/demos/social-media-feed/message.svg"
            alt="message"
            className="icon-message"
          />
          <p className="messageCount">{commentsCount}</p>
          <img
            src="/images/demos/social-media-feed/repost.svg"
            alt="repost"
            className="icon-repost"
          />
          <p className="repostCount">{resharesCount}</p>
          <img
            src="/images/demos/social-media-feed/like.svg"
            alt="like"
            className="icon-like"
          />
          <p className="likeCount">{likesCount}</p>
        </div>
  );
};
