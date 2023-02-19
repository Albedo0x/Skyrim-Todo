import { useEffect } from "react";
import { TodoSideBar } from "./components/SideBar/TodoSideBar";
import { TodoInfo } from "./components/Header/TodoInfo";
import { TodoBodyList } from "./components/MainBody/TodoBodyList";
import { useAppSelector } from "./toolkit/toolkit";

function App(): JSX.Element {
  const store = useAppSelector((state) => state.tasks);

  useEffect(() => {
    localStorage.setItem("test", JSON.stringify(store));
  }, [store]);

  return (
    <div className="App">
      <TodoInfo />
      <TodoSideBar />
      <TodoBodyList store={store} />
    </div>
  );
}

export default App;
