import { Metadata } from "next";
import dayjs from "dayjs";
import { site } from "../../site";

const formatUrl = (image: string | string[]): string | string[] => {
  if (typeof image === "string")
    return `${site.url}/${image.replace(/^\//, "")}`;
  else return image.map((i) => formatUrl(i)) as string[];
};

interface MetaProps {
  title: string;
  description: string;
  path: string | undefined;
  date?: string;
  modifiedDate?: string;
  image: string | string[];
  tags?: string[];
  type?:
    | "article"
    | "website"
    | "book"
    | "profile"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other"
    | undefined;
}

const originalPublicationDate = dayjs("2023-12-07").toDate().toISOString();
export function createMetadata(meta: MetaProps): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(site.url),
    alternates: { canonical: site.url + meta.path },
    openGraph: {
      url: site.url + meta.path,
      title: meta.title,
      description: meta.description,
      type: meta.type ?? "website",
      siteName: "Youssef's Blog ",
      images: meta.image && formatUrl(meta.image),
      publishedTime: dayjs(meta.date ?? originalPublicationDate).format(
        "YYYY-MM-DD",
      ),
      modifiedTime: dayjs(
        meta.modifiedDate ?? meta.date ?? originalPublicationDate,
      ).format("YYYY-MM-DD"),
      tags: meta.tags,
    },
    twitter: {
      card: "summary_large_image",
      site: "@YBenlemlih",
      title: meta.title,
      description: meta.description,
      images: meta.image && formatUrl(meta.image),
    },
  };
}
