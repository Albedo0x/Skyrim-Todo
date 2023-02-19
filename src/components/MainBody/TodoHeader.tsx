import { TodoName } from "./TodoName";
import { TodoText } from "./TodoText";

export const TodoHeader = ({
  header,
  desc,
  index,
}: {
  header: string;
  desc: string;
  index: number;
}): JSX.Element => {
  return (
    <div className="TodoHeader">
      <TodoName header={header} index={index} />
      <TodoText desc={desc} index={index} />
    </div>
  );
};
