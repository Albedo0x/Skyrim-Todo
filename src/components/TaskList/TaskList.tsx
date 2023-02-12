import { useAppSelector } from "../../toolkit/toolkit";
import TaskInput from "./TaskInput";
import TaskComponent from "./TaskComponent";

function TaskList(): JSX.Element {
  const store = useAppSelector((state) => state.tasks);

  return (
    <div className="TaskList">
      <div className="TaskList-Container">
        <TaskInput />
        <ul className="TaskList-List">
          {store &&
            store.map((todo) => (
              <TaskComponent
                key={todo.todoId}
                id={todo.todoId}
                text={todo.todoName}
                status={todo.todoStatus}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
