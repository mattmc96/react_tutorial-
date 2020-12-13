import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  okay?: boolean;
  num: number;
  func: (bob: string) => void;
  obj: {
    f1: string;
  };
  handleChange: () => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({}) => {
  const [count, setCount] = useState<TextNode>({ text: "hello" });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLInputElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
