import "./SocialMediaCard.css";

export const SocialMediaCardStatic = () => {
  return (
    <div className="card">
      <img
        src="/images/demos/social-media-feed/profile.png"
        alt=""
        className="profilePicture"
      />
      <p className="userName">User</p>
      <p className="text">React is the best framework ;D</p>
      <img
        src="/images/demos/social-media-feed/message.svg"
        alt="message"
        className="icon-message"
      />
      <p className="messageCount">1</p>
      <img
        src="/images/demos/social-media-feed/repost.svg"
        alt="repost"
        className="icon-repost"
      />
      <p className="repostCount">2</p>
      <img
        src="/images/demos/social-media-feed/like.svg"
        alt="like"
        className="icon-like"
      />
      <p className="likeCount">3</p>
    </div>
  );
};
