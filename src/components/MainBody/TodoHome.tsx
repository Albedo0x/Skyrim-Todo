export const TodoHome = (): JSX.Element => {
  return (
    <div className="TodoHome">
      <div className="TodoHome-content">
        <div className="TodoHome-ornament" aria-hidden="true">◇ ─────── ◈ ─────── ◇</div>
        <h1>NO ACTIVE QUEST</h1>
        <p>Your journal is waiting for a new adventure.</p>
        <p className="TodoHome-hint">
          Create a quest in the left panel to begin your journey.
          <br />
          Select a quest to add and track its objectives.
        </p>
      </div>
    </div>
  );
};
