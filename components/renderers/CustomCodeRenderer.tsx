import { RenderFn } from "editorjs-blocks-react-renderer";
import HTMLReactParser from "html-react-parser";

export interface CodeBlockData {
  code: string;
  lang?: string;
}

export const Code: RenderFn<CodeBlockData> = ({ data, className = "" }) => {
  const props: {
    [s: string]: string;
  } = {};

  if (className) {
    props.className = className;
  }

  if (data?.lang) props.lang = data.lang;
  return (
    <>
      <pre className="bg-gray-800 rounded-md p-4 max-h-screen overflow-scroll w-full my-2">
        {data?.code && (
          <code {...props} className="text-gray-100 text-sm">
            {data.code}
          </code>
        )}
      </pre>
    </>
  );
};
