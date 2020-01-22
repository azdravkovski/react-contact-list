import React from "react";
import "./ContactCard.css";

const ContactCard = props => {
  const toggleVisibilityClass = props.isShown ? "shown" : "not-shown";

  return (
    <div className={"contact-card " + toggleVisibilityClass}>
      <button className="close" onClick={() => props.hide()}>
        &#10006;
      </button>
      <section className="user-container">
        <img src={props.image} alt="User Profile" className="user-image"></img>
        <section className="user-details">
          <p className="name">name {props.name}</p>
          <p className="email">email {props.email}</p>
          <p className="phone">phone {props.phone}</p>
          <p className="street">street {props.street}</p>
          <p className="city">city {props.city}</p>
          <p className="state">state {props.state}</p>
          <p className="postcode">postcode {props.postcode}</p>
        </section>
        <div className="username">USERNAME {props.username}</div>
      </section>
    </div>
  );
};

export default ContactCard;
