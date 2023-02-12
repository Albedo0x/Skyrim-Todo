import { useState } from "react";
import TodoItemCheckBox from "./TodoItemCheckBox";
import { TodoItemDelete } from "../library/TodoItemDelete";
import { useAppDispatch } from "../../toolkit/toolkit";
import { deleteItem } from "../../toolkit/toolkitreducer";
import { ITodoItem } from "../../interface/interfaces";

function TodoItem({ otherId, task }: { otherId: string; task: ITodoItem }) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const cls: [string] = ["TodoItem"];

  if (task.status) {
    cls.push("-checked");
  }

  function deleteItemRedux(): void {
    dispatch(
      deleteItem({
        todoId: otherId,
        taskId: task.id,
      })
    );
  }

  return (
    <div
      className={cls.join("")}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {isActive ? (
        <>
          <TodoItemCheckBox task={task} otherId={otherId} />
          <TodoItemDelete removeTodo={deleteItemRedux} />
        </>
      ) : (
        <>
          <TodoItemCheckBox task={task} otherId={otherId} />
          <div></div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
