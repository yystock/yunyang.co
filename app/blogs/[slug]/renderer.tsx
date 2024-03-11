"use client";
import dynamic from "next/dynamic";
import { FC } from "react";
import CustomImageRenderer from "@/components/renderers/CustomImageRenderer";

const Output = dynamic(async () => (await import("editorjs-react-renderer")).default, { ssr: false });
interface EditorOutputProps {
  content: any;
}
const EditorOutput: FC<EditorOutputProps> = ({ content }) => {
  return <Output data={content} renderers={{ image: CustomImageRenderer }} />;
};

export default EditorOutput;
