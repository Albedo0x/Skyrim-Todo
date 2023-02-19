import React, { useState } from "react";
import { addProps } from "../../interface/types";

export const TodoInputHandler: React.FC<addProps> = ({
  addTask,
  maxLength,
}: addProps): JSX.Element => {
  const [value, setValue] = useState<string>("");

  function inputHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === 13 && e.currentTarget.value !== "") {
      addTask(e);
      setValue("");
    }
  }

  return (
    <input
      type="text"
      placeholder="Новая задача"
      maxLength={maxLength}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onKeyUp={(e) => inputHandler(e)}
    />
  );
};
