import { Routes, Route } from "react-router-dom";
import { TodoBody } from "./TodoBody";
import { TodoHome } from "./TodoHome";
import { AppState } from "../../interface/interfaces";

export const TodoBodyList = ({ store }: { store: AppState }): JSX.Element => {
  return (
    <Routes>
      <Route key="StartPage" path="/" element={<TodoHome />} />
      {store &&
        store.map((todo, index) => (
          <Route
            key={todo.todoId}
            path={`/${todo.todoName}`}
            element={<TodoBody todo={todo} index={index} />}
          />
        ))}
    </Routes>
  );
};
