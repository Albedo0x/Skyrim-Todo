import { TodoInput } from "./TodoInput";
import { TodoItemList } from "./TodoItemList";
import { TodoState } from "../../interface/interfaces";

export const TodoContent = ({ todo }: { todo: TodoState }): JSX.Element => {
  const total = todo.todos.length;
  const completed = todo.todos.filter((item) => item.status).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  return (
    <div className="TodoContent">
      <div className={`QuestProgress${percent === 100 && total > 0 ? " QuestProgress-complete" : ""}`}>
        <div className="QuestProgress-meta">
          <span>QUEST OBJECTIVES</span>
          <span>{completed} / {total} · {percent}%</span>
        </div>
        <div className="QuestProgress-track" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
          <div className="QuestProgress-fill" style={{ width: `${percent}%` }} />
        </div>
      </div>
      <TodoInput id={todo.todoId} />
      {todo.todos.length > 0 ? (
        <TodoItemList todo={todo} />
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
};
