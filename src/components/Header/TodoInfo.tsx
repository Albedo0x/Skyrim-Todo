import React from "react";
import { day, h, m, y, myear, wday } from "../../utilities/skyrimcalendar";

type JournalTab = "quests" | "stats" | "system";

export const TodoInfo = React.memo(function TodoInfo({
  activeTab,
  onTabChange,
}: {
  activeTab: JournalTab;
  onTabChange: (tab: JournalTab) => void;
}): JSX.Element {
  const tabs: { id: JournalTab; label: string }[] = [
    { id: "quests", label: "QUESTS" },
    { id: "stats", label: "GENERAL STATS" },
    { id: "system", label: "SYSTEM" },
  ];

  return (
    <header className="TodoInfo">
      <div className="TodoInfo-crest" aria-hidden="true">ᛟ</div>
      <nav className="JournalNav" aria-label="Journal sections">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`JournalNav-button ${activeTab === tab.id ? "is-active" : ""}`}
            aria-current={activeTab === tab.id ? "page" : undefined}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="JournalNav-arrow" aria-hidden="true">‹</span>
            {tab.label}
            <span className="JournalNav-arrow" aria-hidden="true">›</span>
          </button>
        ))}
      </nav>
      <div className="TodoInfo-date">
        <span>{wday}</span>
        <span>{h}:{m} · {day} {myear}, {y}</span>
      </div>
      <div className="TodoInfo-crest TodoInfo-crest-right" aria-hidden="true">ᛟ</div>
    </header>
  );
});
