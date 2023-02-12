import TodoItem from "./TodoItem";
import { ITodoItem, TodoState } from "../../interface/interfaces";

function TodoItemList({ todo }: { todo: TodoState }): JSX.Element {
  const orderedTodos: ITodoItem[] = todo.todos
    .slice()
    .sort((a, b) => Number(a.status) - Number(b.status));

  return (
    <div className="TodoItemList">
      {orderedTodos.map((task, i) => (
        <TodoItem key={i} task={task} otherId={todo.todoId} />
      ))}
    </div>
  );
}

export default TodoItemList;
