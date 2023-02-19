import React from "react";
import { useAppDispatch } from "../../toolkit/toolkit";
import { addItem } from "../../toolkit/toolkitreducer";
import { TodoInputHandler } from "../Library/TodoInputHandler";

export const TodoInput = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();

  function addItemRedux(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.keyCode === 13 && e.currentTarget.value !== "") {
      dispatch(
        addItem({
          taskId: id,
          value: e.currentTarget.value,
        })
      );
    }
  }

  return (
    <div className="TodoInput">
      <TodoInputHandler addTask={(e) => addItemRedux(e)} maxLength={600} />
    </div>
  );
};
