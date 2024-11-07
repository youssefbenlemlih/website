"use client";
import { Box, Anchor } from "@mantine/core";
import { usePathname } from "next/navigation";

export function EditOnGithub() {
  const pathname = usePathname();

  // const routerSlug = router.query.slug;
  // let filePath = `${DATA_FOLDER_PATH}/${router.pathname.replace('/', '')}`;
  // if (Array.isArray(routerSlug)) {
  //   filePath = filePath.replace('[...slug]', routerSlug.join('/'));
  // } else {
  //   filePath = filePath.replace('[slug]', routerSlug||"");
  // }
  // const editUrl = `${filePath}.mdx`;

  return (
    <Box>
      {/*<Separator size="2" my="8" />*/}
      <Anchor
        // href={editUrl}
        title="Edit this page on GitHub."
        rel="noopener noreferrer"
        target="_blank"
        color="gray"
        size="2"
      >
        Edit this page on GitHub.({pathname})
      </Anchor>
    </Box>
  );
}
