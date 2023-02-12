import TodoHeader from "./TodoHeader";
import { TodoBody } from "./TodoBody";
import { TodoState } from "../../interface/interfaces";

function TodoList({ todo, index }: { todo: TodoState; index: number }) {
  return (
    <div className="TodoList">
      <TodoHeader
        desc={todo.todoDescription}
        header={todo.todoName}
        key={todo.todoId}
        index={index}
      />
      <TodoBody todo={todo} />
    </div>
  );
}

export default TodoList;
