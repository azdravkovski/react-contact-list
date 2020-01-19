import React, { Component } from "react";
import Tabs from "./Tabs";
import Contacts from "./Contacts";
import "./ContactList.css";

export default class ContactList extends Component {
  render() {
    return (
      <div className="contact-app-container">
        <Tabs />
        <Contacts />
      </div>
    );
  }
}
