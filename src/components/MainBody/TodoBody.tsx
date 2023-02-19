import { TodoHeader } from "./TodoHeader";
import { TodoContent } from "./TodoContent";
import { TodoState } from "../../interface/interfaces";

export const TodoBody = ({
  todo,
  index,
}: {
  todo: TodoState;
  index: number;
}) => {
  return (
    <div className="TodoBody">
      <TodoHeader
        desc={todo.todoDescription}
        header={todo.todoName}
        key={todo.todoId}
        index={index}
      />
      <TodoContent todo={todo} />
    </div>
  );
};
