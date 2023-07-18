import React, { useContext } from "react";
import LiveContext from "./LiveContext";
import Editor, { CodeEditorProps as EditorProps } from "../Editor";

export default function LiveEditor(props: Partial<EditorProps>) {
  const { code, language, theme, disabled, onChange } = useContext(LiveContext);

  return <Editor initialValue={code} onChange={onChange} {...props} />;
}
