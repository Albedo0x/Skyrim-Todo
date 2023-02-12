import { day, h, m, y, myear, wday } from "../../utilities/skyrimcalendar";

function TodoInfo(): JSX.Element {
  return (
    <div className="TodoInfo">
      <div className="TodoInfo-img">
        <img src={require("../../images/logo_v3.png")} alt="" />
      </div>
      <h1>
        {wday}, &nbsp; {h}:{m},&nbsp; {day}&nbsp; {myear},&nbsp; {y}
      </h1>
    </div>
  );
}

export default TodoInfo;
