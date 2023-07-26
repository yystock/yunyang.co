import { RenderFn } from "editorjs-blocks-react-renderer";
import HTMLReactParser from "html-react-parser";

export const Checklist: RenderFn<{
  items: string[];
}> = ({ data, className = "" }) => {
  return (
    <>
      {data?.items.map((item, i) => (
        <p key={i} className={className}>
          <label>
            <input type="checkbox" /> {HTMLReactParser(item)}
          </label>
        </p>
      ))}
    </>
  );
};
