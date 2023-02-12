import { useState } from "react";
import { useAppDispatch } from "../../toolkit/toolkit";
import { editDescription } from "../../toolkit/toolkitreducer";

function TodoHeaderDesc({
  desc,
  index,
}: {
  desc: string;
  index: number;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [value, setValue] = useState<string>(desc);

  function enableEditing() {
    setReadOnly(false);
  }

  function changeDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  function finishEditingRedux(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      setReadOnly(true);
      dispatch(
        editDescription({
          todoId: index,
          valueDesc: value,
        })
      );
    }
  }

  return (
    <div className="TodoHeader-Description">
      <textarea
        className="TodoHeader-Text"
        readOnly={readOnly}
        value={value}
        spellCheck="false"
        onDoubleClick={enableEditing}
        onChange={(e) => changeDescription(e)}
        onKeyDown={(e) => finishEditingRedux(e)}
        maxLength={600}
      ></textarea>
    </div>
  );
}

export default TodoHeaderDesc;
