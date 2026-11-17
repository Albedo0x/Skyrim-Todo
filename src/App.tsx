import { useEffect, useState } from "react";
import { TodoSideBar } from "./components/SideBar/TodoSideBar";
import { TodoInfo } from "./components/Header/TodoInfo";
import { TodoBodyList } from "./components/MainBody/TodoBodyList";
import { useAppSelector } from "./toolkit/toolkit";

type JournalTab = "quests" | "stats" | "system";

function App(): JSX.Element {
  const store = useAppSelector((state) => state.tasks);
  const [activeTab, setActiveTab] = useState<JournalTab>("quests");

  useEffect(() => {
    try {
      localStorage.setItem("test", JSON.stringify(store));
    } catch (error) {
      console.error("Could not save the quest journal to local storage.", error);
    }
  }, [store]);

  const totalTasks = store.reduce((total, quest) => total + quest.todos.length, 0);
  const completedTasks = store.reduce(
    (total, quest) => total + quest.todos.filter((task) => task.status).length,
    0
  );
  const completedQuests = store.filter((quest) => quest.todoStatus).length;

  return (
    <div className="App">
      <TodoInfo activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "quests" ? (
        <>
          <TodoSideBar />
          <TodoBodyList store={store} />
        </>
      ) : activeTab === "stats" ? (
        <main className="JournalPanel JournalPanel-stats">
          <div className="JournalPanel-heading">
            <span className="JournalFlourish" aria-hidden="true">᚛ ───── ◈ ───── ᚜</span>
            <h2>GENERAL STATS</h2>
            <span className="JournalFlourish" aria-hidden="true">᚛ ───── ◈ ───── ᚜</span>
          </div>
          <div className="StatsGrid">
            <section className="StatCard"><span className="StatValue">{store.length}</span><span className="StatLabel">QUESTS</span></section>
            <section className="StatCard"><span className="StatValue">{completedQuests}</span><span className="StatLabel">COMPLETED QUESTS</span></section>
            <section className="StatCard"><span className="StatValue">{totalTasks}</span><span className="StatLabel">OBJECTIVES</span></section>
            <section className="StatCard"><span className="StatValue">{completedTasks}</span><span className="StatLabel">COMPLETED OBJECTIVES</span></section>
          </div>
          <p className="StatsFootnote">Your deeds across Skyrim, recorded in this journal.</p>
        </main>
      ) : (
        <main className="JournalPanel JournalPanel-system">
          <div className="JournalPanel-heading">
            <span className="JournalFlourish" aria-hidden="true">᚛ ───── ◈ ───── ᚜</span>
            <h2>SYSTEM</h2>
            <span className="JournalFlourish" aria-hidden="true">᚛ ───── ◈ ───── ᚜</span>
          </div>
          <div className="SystemContent">
            <p className="SystemTitle">SKYRIM QUEST JOURNAL</p>
            <p>A personal journal for tracking quests and daily objectives.</p>
            <p className="SystemVersion">VERSION 1.0 · LOCAL SAVE</p>
            <p>Your journal is saved automatically in this browser.</p>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
