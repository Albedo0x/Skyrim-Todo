import { useAppSelector } from "../../toolkit/toolkit";
import { TodoComponent } from "./TodoComponent";

export const TodoList = (): JSX.Element => {
  const store = useAppSelector((state) => state.tasks);
  const activeQuests = store.filter((quest) => !quest.todoStatus);
  const completedQuests = store.filter((quest) => quest.todoStatus);

  return (
    <div className="QuestGroups">
      <section className="QuestGroup">
        <h2 className="QuestGroup-title">ACTIVE QUESTS</h2>
        <ul className="TodoList">
          {activeQuests.map((todo) => (
            <TodoComponent key={todo.todoId} id={todo.todoId} text={todo.todoName} />
          ))}
          {activeQuests.length === 0 && (
            <li className="QuestGroup-empty">No active quests</li>
          )}
        </ul>
      </section>
      <section className="QuestGroup QuestGroup-completed">
        <h2 className="QuestGroup-title">COMPLETED</h2>
        <ul className="TodoList">
          {completedQuests.map((todo) => (
            <TodoComponent key={todo.todoId} id={todo.todoId} text={todo.todoName} completed />
          ))}
          {completedQuests.length === 0 && (
            <li className="QuestGroup-empty">No completed quests</li>
          )}
        </ul>
      </section>
    </div>
  );
};
