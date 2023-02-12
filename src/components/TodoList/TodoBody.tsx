import TodoInput from "./TodoInput";
import TodoItemList from "./TodoItemList";
import { TodoState } from "../../interface/interfaces";

export const TodoBody = ({ todo }: { todo: TodoState }): JSX.Element => {
  return (
    <div className="TodoBody">
      <TodoInput id={todo.todoId} />
      {todo.todos.length > 0 ? (
        <TodoItemList todo={todo} />
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
};
