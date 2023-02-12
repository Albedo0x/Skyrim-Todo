import React, { useState } from "react";
import { useAppDispatch } from "../../toolkit/toolkit";
import { addItem } from "../../toolkit/toolkitreducer";

function TodoInput({ id }: { id: string }) {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();

  function addItemRedux(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.keyCode === 13 && e.currentTarget.value !== "") {
      dispatch(
        addItem({
          taskId: id,
          value: value,
        })
      );
      setValue("");
    }
  }

  return (
    <div className="TodoInput">
      <input
        type="text"
        placeholder="Введи что собираешься делать"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={addItemRedux}
      />
    </div>
  );
}

export default TodoInput;
