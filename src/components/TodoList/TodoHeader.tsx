import TodoHeaderDesc from "./TodoHeaderDesc";
import TodoHeaderName from "./TodoHeaderName";

function TodoHeader({
  header,
  desc,
  index,
}: {
  header: string;
  desc: string;
  index: number;
}): JSX.Element {
  return (
    <div className="TodoHeader">
      <TodoHeaderName header={header} index={index} />
      <TodoHeaderDesc desc={desc} index={index} />
    </div>
  );
}

export default TodoHeader;
