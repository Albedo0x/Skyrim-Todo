import { useAppSelector } from "../../toolkit/toolkit";
import { TodoComponent } from "./TodoComponent";

export const TodoList = (): JSX.Element => {
  const store = useAppSelector((state) => state.tasks);

  return (
    <ul className="TodoList">
      {store &&
        store.map((todo) => (
          <TodoComponent
            key={todo.todoName}
            id={todo.todoId}
            text={todo.todoName}
          />
        ))}
    </ul>
  );
};
