declare module "@editorjs/embed";
declare module "@editorjs/table";
declare module "@editorjs/code";
declare module "@editorjs/link";
declare module "@editorjs/header";
declare module "@editorjs/inline-code";
declare module "@editorjs/simple-image";
declare module "@editorjs/checklist";

export interface Block {
  id?: string;
  type: string;
  data: Record<string, any>;
}
export interface DataProp {
  time: number;
  version: string;
  blocks: Block[];
}
