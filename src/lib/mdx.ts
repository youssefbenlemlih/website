import _ from "lodash";
import { allPosts, Post, allNewsletters } from "contentlayer2/generated";
import dayjs from "dayjs";

const SHOW_DRAFTS_IN_DEV = false;
type WithDate = { date: string };
const byCreatedDate = (post1: WithDate, post2: WithDate) => {
  return dayjs(post1.date).isAfter(dayjs(post2.date)) ? -1 : 1;
};
export function getAllNewslettersSortedByCreatedDate() {
  return allNewsletters.sort(byCreatedDate);
}

export function getAllPostsSortedByCreatedDate(): Post[] {
  return allPosts
    .filter((post) =>
      process.env.NODE_ENV === "production"
        ? !post.draft
        : SHOW_DRAFTS_IN_DEV || !post.draft,
    )
    .sort(byCreatedDate);
}

export const getLatestPosts = () =>
  getAllPostsSortedByCreatedDate()
    .filter((post) => !post.youtubeKey)
    .sort(byCreatedDate)
    .filter((_, index) => index < 3)
    .map(({ slug, image, title, draft, description }) => ({
      slug,
      image,
      title,
      draft: draft ?? false,
      description,
    }));

export const getLatestYoutubeVideoSlug = () =>
  getAllPostsSortedByCreatedDate().find(
    ({ youtubeKey }) => !_.isNil(youtubeKey),
  )?.youtubeKey;

export function getTagLastModifiedDate(tag: string) {
  const lastPostWithTag = getAllPostsSortedByCreatedDate().find((post) =>
    post.tags.includes(tag),
  );
  return dayjs(lastPostWithTag?.modifiedDate ?? lastPostWithTag?.date).format(
    "YYYY-MM-DD",
  );
}
