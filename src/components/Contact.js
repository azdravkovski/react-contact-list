import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <li
      onClick={() => console.log("Contact Card appeared!")}
      className="contact"
    >
      {props.firstName}, {props.lastName}
    </li>
  );
};

export default Contact;
