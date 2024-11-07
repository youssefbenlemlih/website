import { codeToHast } from "shiki/bundle/web";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";

export const bg = {
  dark: "#1e1e1e",
  light: "white",
};
export async function highlight(code: string, language: string, dark: boolean) {
  const out = await codeToHast(code, {
    lang: language,
    theme: dark ? "dark-plus" : "light-plus",
  });

  return toJsxRuntime(out, {
    Fragment,
    jsx: jsx as any,
    jsxs: jsxs as any,
  });
}
