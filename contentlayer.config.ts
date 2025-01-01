import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer2/source-files";
import GithubSlugger from "github-slugger";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const Heading = defineNestedType(() => ({
  name: "Heading",
  fields: {
    textRaw: { type: "string", required: true },
    text: { type: "string", required: true },
    heading: { type: "string", required: true },
    link: { type: "string", required: true },
    type: { type: "string", required: true },
  },
}));
export const Newsletter = defineDocumentType(() => ({
  name: "Newsletter",
  filePathPattern: `newsletter/*.md`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    slug: { type: "string", required: true },
  },
}));
export const Thought = defineDocumentType(() => ({
  name: "Thought",
  filePathPattern: `thought/*.md`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    slug: { type: "string", required: true },
  },
}));
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.md`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    modifiedDate: { type: "date", required: false },
    image: { type: "string", required: true },
    slug: { type: "string", required: true },
    draft: { type: "boolean", required: false },
    youtubeKey: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: true },
  },
  computedFields: {
    extra: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/\/?/, ""),
    },
    headings: {
      type: "list",
      of: Heading,
      resolve: (doc) => {
        const slugger = new GithubSlugger();
        return (
          doc.body.raw
            .replace(/`{3}.*\s([^`]*\s)`{3}/gm, "") // rm code block comments
            .match(/#+ (.*)/g)
            ?.map((heading) => {
              const headingText = heading.replace(/#+ /g, "").trim();
              const number =
                heading.replaceAll(" #", "").match(/#/g)?.length || 1;
              const type = `h${number}`;
              const regex = /<Icon name="([a-zA-Z]*)"\/>(\s*)/;
              const icon = headingText.match(regex)?.[1];
              const filteredText = headingText.replace(regex, "").trim();
              return {
                text: filteredText,
                icon,
                link: "#" + slugger.slug(filteredText),
                type,
              };
            }) || []
        );
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Thought, Newsletter],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});
