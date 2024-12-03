import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import React from "react";
import { Svg } from "@/app/images/banners/[slug]/svg";
import { notFound } from "next/navigation";
import { site } from "../../../../../site";

export type ImageDefinition = {
  slug: string;
  title: string;
  subtitle: string;
};
const images: ImageDefinition[] = [
  { slug: "services.png", title: "Services", subtitle: "" },
  { slug: "404.png", title: "Page Not Found", subtitle: "404" },
  { slug: "about.png", title: "Youssef Benlemlih", subtitle: "Get to know" },
  {
    slug: "code-reviews.png",
    title: "Code Reviews",
    subtitle: "Submit a Code Review Request",
  },
  {
    slug: "code-review-submitted.png",
    title: "Code Review Submitted",
    subtitle: "Successfully submitted",
  },
  {
    slug: "newsletter-joined.png",
    title: "Email Confirmed",
    subtitle: "Successfully Confirmed Your Email",
  },
  {
    slug: "newsletter-joined.png",
    title: "You're In",
    subtitle: "Successfully Joined Newsletter",
  },
  {
    slug: "newsletter.png",
    title: "Newsletter",
    subtitle: "Joined The Newsletter",
  },
  {
    slug: "posts.png",
    title: "Blog",
    subtitle: "A Blog about React",
  },
  {
    slug: "resources.png",
    title: "Resources",
    subtitle: "Must-Have Frontend Resources",
  },
  {
    slug: "index.png",
    title: "Youssef's Website",
    subtitle: "I talk about React & Co.",
  },
];

export const size = { width: 1280, height: 720 };
export async function GET(
  _request: NextRequest,
  p: { params: { slug: string } },
) {
  const params = images.find((image) => image.slug === p.params.slug);
  if (!params) return notFound();
  return new ImageResponse(
    (
      <div
        tw={
          "flex flex-col justify-between items-stretch w-full h-full bg-[#242424] p-18 "
        }
      >
        <div tw={"flex flex-col"}>
          <p tw={"text-[32px] p-0 m-0 text-white"}>{params?.subtitle}</p>
          <p tw={"text-[100px] p-0 m-0 text-white "}>{params?.title}</p>
        </div>
        <div tw={"flex items-center"}>
          <img
            width={100}
            height={100}
            tw={"rounded-full w-[100px] h-[100px] mr-[20px]"}
            src={site.url + "/images/profile.jpg"}
            alt={"Youssef's profile picture."}
          />
          <div tw={"flex flex-col"}>
            <p tw={"text-[40px] p-0 m-0 text-white"}>Youssef Benlemlih</p>
            <p tw={"text-[28px] p-0 m-0 text-white"}>Fullstack IT Consultant</p>
          </div>
          <Svg />
        </div>
      </div>
    ),
    size,
  );
}

export async function generateStaticParams() {
  return images.map(({ slug }) => ({
    slug,
  }));
}
