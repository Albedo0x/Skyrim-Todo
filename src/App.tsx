import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList/TaskList";
import TodoInfo from "./components/TodoInfo/TodoInfo";
import TodoHome from "./components/TodoList/TodoHome";
import TodoList from "./components/TodoList/TodoList";
import { useAppSelector } from "./toolkit/toolkit";

function App(): JSX.Element {
  const store = useAppSelector((state) => state.tasks);

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(store));
  }, [store]);

  return (
    <div className="App">
      <TodoInfo />
      <TaskList />
      <Routes>
        <Route key={Math.random() / 2} path="/" element={<TodoHome />} />
        {store &&
          store.map((todo, index) => (
            <Route
              key={todo.todoId}
              path={`/${todo.todoName}`}
              element={<TodoList todo={todo} index={index} />}
            />
          ))}
      </Routes>
    </div>
  );
}

export default App;
