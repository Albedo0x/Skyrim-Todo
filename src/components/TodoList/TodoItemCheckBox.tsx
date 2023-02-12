import { ITodoItem } from "../../interface/interfaces";
import { useAppDispatch } from "../../toolkit/toolkit";
import { checkItem } from "../../toolkit/toolkitreducer";

function TodoItemCheckBox({
  otherId,
  task,
}: {
  otherId: string;
  task: ITodoItem;
}) {
  const dispatch = useAppDispatch();

  function checkItemRedux(): void {
    dispatch(
      checkItem({
        todoId: otherId,
        taskId: task.id,
      })
    );
  }

  return (
    <div className="TodoItem-checkbox">
      <input
        type="checkbox"
        className="TodoItem-checkbox_checkbox"
        checked={task.status}
        onChange={() => checkItemRedux()}
        id={task.id.toString()}
      />
      <label className="TodoItem-checkbox_text" htmlFor={task.id.toString()}>
        {task.text}
      </label>
    </div>
  );
}

export default TodoItemCheckBox;
