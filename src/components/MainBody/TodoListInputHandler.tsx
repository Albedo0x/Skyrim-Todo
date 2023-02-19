import { useState } from "react";
import { inputHandler } from "../../interface/types";

export const TodoListInputHandler = ({
  type,
  text,
  inputEditionFunction,
}: {
  type: "text" | "name";
  text: string;
  inputEditionFunction: (e: inputHandler) => void;
}): JSX.Element => {
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>(text);

  function finishEdit(e: inputHandler) {
    if (e.key === "Enter") {
      setReadOnly(true);
      inputEditionFunction(e);
    }
  }

  switch (type) {
    case "text":
      return (
        <textarea
          className="TodoHeader-Text"
          value={inputValue}
          readOnly={readOnly}
          onDoubleClick={() => setReadOnly(false)}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => finishEdit(e)}
          spellCheck="false"
          maxLength={600}
        ></textarea>
      );
    case "name":
      return (
        <input
          className="TodoHeader-Name"
          readOnly={readOnly}
          value={inputValue}
          spellCheck="false"
          type="text"
          onDoubleClick={() => setReadOnly(false)}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => finishEdit(e)}
          maxLength={20}
        />
      );
  }
};
