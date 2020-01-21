import React from "react";
import "./ContactCard.css";

 const ContactCard = (props) => {
  
    return (
      <div className="contact-card">
        <button className="close"></button>
        <img></img>
        <p className="name">SURNAME, name</p>
        <p className="email">e-mail</p>
        <p className="phone"></p>
        <p className="street"></p>
        <p className="city"></p>
        <p className="state"></p>
        <p className="postcode"></p>
      </div>
    );
}

export default ContactCard;
