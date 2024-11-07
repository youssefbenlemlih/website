import { CodeBlockClient } from "./CodeBlockClient";
import { highlight } from "./shared";

export type CodeBlockProps = {
  language: string;
  code: string;
  minimal?: boolean;
};

export const CodeBlock = async (props: CodeBlockProps) => {
  return (
    <CodeBlockClient
      initial={await highlight(props.code ?? "", props.language, true)}
      {...props}
    />
  );
};
export default CodeBlock;
