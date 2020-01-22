import React from "react";
import "./Tabs.css";
import Tab from "./Tab";
import config from "../config.json";

const Tabs = (props) => {
  
  const renderTabs = () => {
    return config.tabs.map((letter, i) => (
      <Tab
        letter={letter}
        key={i}
        toggleActiveTab={() => props.toggleActiveTab(letter)}
        count={props.count[i]}
        isActive={props.activeTab === letter}
      />
    ));
  }

  return <div className="tabs-list">{renderTabs()}</div>;
}

export default Tabs;