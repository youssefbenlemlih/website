import React from "react";

type DownloadProps = {
  text: string;
  id: string;
};

export function Download({ id, text }: DownloadProps) {
  return (
    <>
      <a
        href={`https://youssefbee.lemonsqueezy.com/checkout/buy/${id}?embed=1&media=0&logo=0&dark=1&button_color=%23689d6a`}
        className="lemonsqueezy-button inline-block rounded-md bg-aqua-500 px-4 py-2 text-white hover:text-white hover:opacity-90"
      >
        {text}
      </a>
      <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
    </>
  );
}
