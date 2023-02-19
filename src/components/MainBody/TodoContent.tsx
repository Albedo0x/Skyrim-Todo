import { TodoInput } from "./TodoInput";
import { TodoItemList } from "./TodoItemList";
import { TodoState } from "../../interface/interfaces";

export const TodoContent = ({ todo }: { todo: TodoState }): JSX.Element => {
  return (
    <div className="TodoContent">
      <TodoInput id={todo.todoId} />
      {todo.todos.length > 0 ? (
        <TodoItemList todo={todo} />
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
};
