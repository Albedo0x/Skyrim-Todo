import { useState } from "react";
import { useAppDispatch } from "../../toolkit/toolkit";
import { useNavigate } from "react-router-dom";
import { editHeader } from "../../toolkit/toolkitreducer";

function TodoHeaderName({
  header,
  index,
}: {
  header: string;
  index: number;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [headerValue, setHeaderValue] = useState<string>(header);
  const navigate = useNavigate();

  function changeName(e: React.ChangeEvent<HTMLInputElement>) {
    setHeaderValue(e.target.value);
  }

  function enableEditing() {
    setReadOnly(false);
  }

  function finishNameEditingRedux(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      setReadOnly(true);
      dispatch(
        editHeader({
          todoId: index,
          valueName: headerValue,
        })
      );
      navigate(`/${headerValue}`);
    }
  }

  return (
    <div className="TodoHeader-Head">
      <div className="TodoHeader-Img">
        <img src={require("../../images/dragon_left.png")} alt="" />
      </div>
      <input
        className="TodoHeader-Name"
        type="text"
        value={headerValue}
        readOnly={readOnly}
        onDoubleClick={enableEditing}
        onChange={(e) => changeName(e)}
        onKeyDown={(e) => finishNameEditingRedux(e)}
        spellCheck="false"
        maxLength={20}
      />
      <div className="TodoHeader-Img">
        <img src={require("../../images/dragon_right.png")} alt="" />
      </div>
    </div>
  );
}

export default TodoHeaderName;
