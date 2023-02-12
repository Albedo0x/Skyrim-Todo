import React from "react";

type DeleteProps = {
  removeTodo: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const TodoItemDelete: React.FC<DeleteProps> = ({
  removeTodo,
}: DeleteProps) => {
  return (
    <div className="TodoItem-delete" onClick={removeTodo}>
      <img src={require("../../images/remove_white.png")} alt="" />
    </div>
  );
};
