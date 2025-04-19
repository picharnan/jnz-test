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
  return (
    <ReactQuill
      className="h-[320px]"
      theme="snow"
      value={value}
      onChange={setValue}
      modules={{
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          ["link", "image", "video", "formula"],

          [{ header: 1 }, { header: 2 }],
          [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
          [{ script: "sub" }, { script: "super" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],

          [{ size: ["small", false, "large", "huge"] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],

          ["clean"],
        ],
      }}
    />
  );
}
