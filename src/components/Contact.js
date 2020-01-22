import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <li
      onClick={() => props.showContactCard()}
      className="contact"
    >
      {props.firstName}, {props.lastName}
    </li>
  );
};

export default Contact;
