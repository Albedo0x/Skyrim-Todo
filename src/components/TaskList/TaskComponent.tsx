import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TodoItemDelete } from "../library/TodoItemDelete";
import { removeTodo } from "../../toolkit/toolkitreducer";
import { useAppDispatch, useAppSelector } from "../../toolkit/toolkit";

function TaskComponent({
  text,
  id,
  status,
}: {
  text: string;
  id: string;
  status: boolean;
}) {
  let cls: string;

  if (status) {
    cls = "TaskComponent TaskComponent-checked";
  } else {
    cls = "TaskComponent";
  }

  const [isShown, setIsShown] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const storeState = useAppSelector((state) => state.tasks);

  let prevTodo: string;
  const cur = storeState.findIndex((item) => item.todoName === text);
  if (cur > 0) {
    prevTodo = storeState[cur - 1].todoName;
  } else {
    prevTodo = storeState[0].todoName;
  }

  function removeTodoRedux(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    dispatch(removeTodo({ taskId: id }));
    navigate(`/${prevTodo}`);
  }

  return (
    <li
      className={cls}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <NavLink className="TaskComponent-Link" to={`/${text}`}>
        {({ isActive }) => {
          return isActive && isShown ? (
            <>
              <TodoItemDelete removeTodo={removeTodoRedux} />
              <div className="TaskComponent-Name">{text}</div>
            </>
          ) : (
            <>
              <div></div>
              <div className="TaskComponent-Name">{text}</div>
            </>
          );
        }}
      </NavLink>
    </li>
  );
}

export default TaskComponent;
