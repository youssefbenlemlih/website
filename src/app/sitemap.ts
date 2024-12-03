import dayjs from "dayjs";
import { MetadataRoute } from "next";
import {
  getAllNewslettersSortedByCreatedDate,
  getAllPostsSortedByCreatedDate,
  getTagLastModifiedDate,
} from "@/lib/mdx";
import { TagKeys } from "@/types";
import { site } from "../../site";


const posts = getAllPostsSortedByCreatedDate();

const staticPaths = [
  "/",
  "/about",
  "/code-reviews",
  "/frontend-kit",
  // ❌ "/images",
  // ❌ "/landings",
  "/newsletter",
  "/posts",
  "/resources",
  "/services",
  "/tags",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({
      url: site.url + path,
      lastModified: dayjs(new Date()).format("YYYY-MM-DD"),
      changeFrequency: "weekly" as const,
    })),
    ...posts.map((post) => ({
      url: site.url + "/posts/" + post.slug,
      changeFrequency: "weekly" as const,
      lastModified: post.modifiedDate
        ? dayjs(post.modifiedDate).format("YYYY-MM-DD")
        : dayjs(post.date).format("YYYY-MM-DD"),
    })),
    ...getAllNewslettersSortedByCreatedDate().map((newsletter) => ({
      url: site.url + "/newsletter/" + newsletter.slug,
      changeFrequency: "weekly" as const,
      lastModified: dayjs(newsletter.date).format("YYYY-MM-DD"),
    })),
    ...TagKeys.map((tag) => ({
      url: site.url + "/tags/" + tag,
      changeFrequency: "weekly" as const,
      lastModified: getTagLastModifiedDate(tag),
    })),
  ];
}
