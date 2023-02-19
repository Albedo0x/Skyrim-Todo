import React from "react";
import { NavLink } from "react-router-dom";
import { day, h, m, y, myear, wday } from "../../utilities/skyrimcalendar";

export const TodoInfo = React.memo(function TodoInfo(): JSX.Element {
  return (
    <div className="TodoInfo">
      <NavLink className="TodoInfo-img" to="/">
        <img src={require("../../images/logo_v3.png")} alt="" />
      </NavLink>
      <h1>
        {wday}, &nbsp; {h}:{m},&nbsp; {day}&nbsp; {myear},&nbsp; {y}
      </h1>
    </div>
  );
});
