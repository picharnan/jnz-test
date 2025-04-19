import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

interface RichTextEditorProps {
  onChange: (content: string) => void;
}

export function RichTextEditor(props: RichTextEditorProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (props.onChange) {
      props.onChange(value);
    }
  }, [value]);
  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
