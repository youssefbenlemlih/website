import React, { useEffect, useState } from "react";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

type LiveCodeProps = { code: any };

export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => setHydrated(true), 0);
    }
  }, []);

  return hydrated;
}

export function LiveCode({ code }: LiveCodeProps) {
  const [, setMxdSource] = useState<string>();
  const hydrated = useHydrated();
  useEffect(() => {
    const doIt = async () => {
      const { compiledSource } = await serialize(code, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeSlug],
        },
      });
      setMxdSource(compiledSource);
    };

    hydrated && doIt();
  }, [code, hydrated]);
  return (
    <div>
      {/*<CodeBlock language={'typescript'} code={code} />*/}
      {/*{mdxSource && <CodeBlock language={'typescript'} code={mdxSource} />}*/}
      {/*{mdxSource && <RenderMdx compiledSource={mdxSource} />}*/}
      {code}
      {code.toString()}
    </div>
  );
}
