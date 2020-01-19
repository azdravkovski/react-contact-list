import React from "react";
import "./Tab.css";

const Tab = props => {
  return (
    <div
      className={
        "tab " +
        ((props.isActive && "tab-active ") || (!props.count && "zero-count "))
      }
      onClick={() => props.onClick(props.letter)}
    >
      <div className="letter">{props.letter}</div>
      <div className="count">{props.count}</div>
    </div>
  );
};

export default Tab;
