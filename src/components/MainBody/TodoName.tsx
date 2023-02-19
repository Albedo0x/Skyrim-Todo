import { useAppDispatch } from "../../toolkit/toolkit";
import { useNavigate } from "react-router-dom";
import { editHeader } from "../../toolkit/toolkitreducer";
import { TodoListInputHandler } from "./TodoListInputHandler";
import { inputHandler } from "../../interface/types";

export const TodoName = ({
  header,
  index,
}: {
  header: string;
  index: number;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function finishNameEditingRedux(e: inputHandler) {
    e.preventDefault();
    dispatch(
      editHeader({
        todoId: index,
        valueName: e.currentTarget.value,
      })
    );
    navigate(`/${e.currentTarget.value}`);
  }

  return (
    <div className="TodoHeader-Head">
      <div className="TodoHeader-Img">
        <img src={require("../../images/dragon_left.png")} alt="" />
      </div>
      <TodoListInputHandler
        text={header}
        type="name"
        inputEditionFunction={finishNameEditingRedux}
      />
      <div className="TodoHeader-Img">
        <img src={require("../../images/dragon_right.png")} alt="" />
      </div>
    </div>
  );
};
