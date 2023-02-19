import React from "react";
import { deleteProps } from "../../interface/types";

export const TodoRemoveComponent: React.FC<deleteProps> = ({
  removeTodo,
}: deleteProps) => {
  return (
    <div className="TodoItem-delete" onClick={removeTodo}>
      <img src={require("../../images/remove_white.png")} alt="" />
    </div>
  );
};
