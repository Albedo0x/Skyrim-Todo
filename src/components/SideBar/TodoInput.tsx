import React, { useId } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../toolkit/toolkit";
import { addTodo } from "../../toolkit/toolkitreducer";
import { TodoInputHandler } from "../Library/TodoInputHandler";

export const TodoInput = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const todoId = useId();

  function addTodoRedux(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.keyCode === 13 && e.currentTarget.value !== "") {
      dispatch(addTodo({ id: todoId, value: e.currentTarget.value }));
      navigate(`/${e.currentTarget.value}`);
    }
  }

  return (
    <div className="TodoInput">
      <TodoInputHandler addTask={(e) => addTodoRedux(e)} maxLength={14} />
    </div>
  );
};
