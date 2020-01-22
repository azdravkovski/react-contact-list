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
                <p className="email">email <span className="bolded">{contact.email}</span></p>
                <p className="phone">phone <span className="bolded">{contact.phone}</span></p>
                <p className="street">street <span className="bolded">{contact.street}</span></p>
                <p className="city">city <span className="bolded">{contact.city}</span></p>
                <p className="state">state <span className="bolded">{contact.state}</span></p>
                <p className="postcode">postcode <span className="bolded">{contact.postcode}</span></p>
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
