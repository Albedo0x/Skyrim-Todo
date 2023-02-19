import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TodoRemoveComponent } from "../Library/TodoRemoveComponent";
import { removeTodo } from "../../toolkit/toolkitreducer";
import { useAppDispatch, useAppSelector } from "../../toolkit/toolkit";

export const TodoComponent = ({ text, id }: { text: string; id: string }) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const store = useAppSelector((state) => state.tasks);

  let prevTodo: string;
  const cur = store.findIndex((item) => item.todoName === text);
  if (cur > 0) {
    prevTodo = store[cur - 1].todoName;
  } else {
    prevTodo = store[0].todoName;
  }

  function removeTodoRedux(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    dispatch(removeTodo({ taskId: id }));
    navigate(`/${prevTodo}`);
  }

  return (
    <li
      className="TodoComponent"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <NavLink className="TodoComponent-Link" to={`/${text}`}>
        {({ isActive }) => {
          return isActive && isShown ? (
            <>
              <TodoRemoveComponent removeTodo={removeTodoRedux} />
              <div className="TodoComponent-Name">{text}</div>
            </>
          ) : (
            <>
              <div></div>
              <div className="TodoComponent-Name">{text}</div>
            </>
          );
        }}
      </NavLink>
    </li>
  );
};
