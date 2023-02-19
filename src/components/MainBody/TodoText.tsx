import { useAppDispatch } from "../../toolkit/toolkit";
import { editDescription } from "../../toolkit/toolkitreducer";
import { TodoListInputHandler } from "./TodoListInputHandler";
import { inputHandler } from "../../interface/types";

export const TodoText = ({
  desc,
  index,
}: {
  desc: string;
  index: number;
}): JSX.Element => {
  const dispatch = useAppDispatch();

  function finishEditingRedux(e: inputHandler) {
    e.preventDefault();
    dispatch(
      editDescription({
        todoId: index,
        valueDesc: e.currentTarget.value,
      })
    );
  }

  return (
    <div className="TodoHeader-Description">
      <TodoListInputHandler
        text={desc}
        type="text"
        inputEditionFunction={finishEditingRedux}
      />
    </div>
  );
};
