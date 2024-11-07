import dayjs from "dayjs";
import { MetadataRoute } from "next";
import {
  getAllPostsSortedByCreatedDate,
  getTagLastModifiedDate,
} from "@/lib/mdx";
import { TagKeys } from "@/types";

const basePath = "https://www.youssefbee.com";

const posts = getAllPostsSortedByCreatedDate();

const staticPaths = [
  "/",
  "/frontend-kit",
  "/about",
  "/posts",
  "/code-reviews",
  "/newsletter",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({
      url: basePath + path,
      lastModified: dayjs(new Date()).format("YYYY-MM-DD"),
      changeFrequency: "weekly" as const,
    })),
    ...posts.map((post) => ({
      url: basePath + "/posts/" + post.slug,
      changeFrequency: "weekly" as const,
      lastModified: post.modifiedDate
        ? dayjs(post.modifiedDate).format("YYYY-MM-DD")
        : dayjs(post.date).format("YYYY-MM-DD"),
    })),
    ...TagKeys.map((tag) => ({
      url: basePath + "/tags/" + tag,
      changeFrequency: "weekly" as const,
      lastModified: getTagLastModifiedDate(tag),
    })),
  ];
}
