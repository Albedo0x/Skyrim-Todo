import React, { useState, useId } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../toolkit/toolkit";
import { addTodo } from "../../toolkit/toolkitreducer";

function TaskInput(): JSX.Element {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();
  const idOfTodo = useId();

  function addTodoRedux(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === 13 && e.currentTarget.value !== "") {
      dispatch(addTodo({ idOfTodo: idOfTodo, value: e.currentTarget.value }));
      setValue("");
      navigate(`/${value}`);
    }
  }

  return (
    <div className="TaskList-Input">
      <input
        type="text"
        placeholder="Новая задача"
        maxLength={14}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyUp={addTodoRedux}
      />
    </div>
  );
}

export default TaskInput;
