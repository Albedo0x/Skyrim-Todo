import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const TodoSideBar = (): JSX.Element => {
  return (
    <div className="TodoSideBar">
      <div className="TodoSideBar-Container">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};
