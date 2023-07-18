import Editor from "@monaco-editor/react";

export interface CodeEditorProps {
  initialValue: string;
  onChange: (value: string | undefined) => void;
}
const CodeEditor = ({ initialValue, onChange }: CodeEditorProps) => {
  return (
    <div>
      <div>HOLA</div>
      <Editor
        defaultLanguage="javascript"
        defaultValue={initialValue}
        onChange={onChange}
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
