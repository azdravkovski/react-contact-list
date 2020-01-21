import React, { Component } from "react";
import "./Contacts.css";
import Contact from "./Contact";

export default class Contacts extends Component {
  state = {
    activeContactTab: 'a',
    renderedContacts: []
  }
  
  renderContactEntries = () => {};

  render() {
    return (
      <div className="contacts">
        <ul>
          
        </ul>
      </div>
    );
  }
}
