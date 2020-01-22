import React from "react";
import "./ContactCard.css";

const ContactCard = props => {
  const toggleVisibilityClass = props.isShown ? "shown" : "not-shown";
  const { contactDetails, activeContact } = props;
  const renderContactDetails = () => {
    if (activeContact) {
      return contactDetails.map((contact, i) => {
        if (contact.name.toLowerCase() === activeContact.toLowerCase()) {
          return (
            <section className="user-container">
              <img
                src={contact.image}
                alt="User Profile"
                className="user-image"
              ></img>
              <section className="user-details">
                <p className="name">{contact.name}</p>
                <p className="email">email {contact.email}</p>
                <p className="phone">phone {contact.phone}</p>
                <p className="street">street {contact.street}</p>
                <p className="city">city {contact.city}</p>
                <p className="state">state {contact.state}</p>
                <p className="postcode">postcode {contact.postcode}</p>
              </section>
              <div className="username">USERNAME {contact.username}</div>
            </section>
          );
        }
      });
    }
  };
  return (
    <div className={"contact-card " + toggleVisibilityClass}>
      <button className="close" onClick={() => props.hide()}>
        &#10006;
      </button>
      {renderContactDetails()}
    </div>
  );
};

export default ContactCard;
