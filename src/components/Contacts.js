import React from "react";
import "./Contacts.css";
import Contact from "./Contact";

const Contacts = props => {
  const renderNames = () => {
    return props.namesList.map((name, i) => {
      if (name.lastName[0].toLowerCase() === props.activeTab) {
        return (
          <Contact
            firstName={name.firstName}
            lastName={name.lastName.toUpperCase()}
            key={i}
            showContactCard={() => props.showContactCard()}
          />
        );
      }
    });
  };

  return (
    <div className="contacts">
      <ul>{renderNames()}</ul>
    </div>
  );
};

export default Contacts;
