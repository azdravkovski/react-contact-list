import React, { Component } from "react";
import Tabs from "./Tabs";
import Contacts from "./Contacts";
import ContactCard from "./ContactCard";
import "./ContactList.css";
import config from "../config.json";

export default class ContactList extends Component {
  state = {
    activeTab: config.tabs[0],
    count: [],
    fullNames: [],
    personDetails: [],
    isShown: false
  };

  componentDidMount = () => {
    this.fetchContactCountByLetter();
  };

  fetchContactCountByLetter = () => {
    fetch(`${config.userUrl}/?results=${config.numberCards}`)
      .then(data => data.json())
      .then(persons => {
        const { results } = persons;
        let lastNames = results.map(person => {
          return person.name.last;
        });

        let fullNames = results
          .map(person => {
            return { firstName: person.name.first, lastName: person.name.last };
          })
          .filter(
            person => person.firstName.toLowerCase().charCodeAt(0) - 97 < 26
          );

        let personDetails = results.map(person => {
          return {
            name: `${person.name.last} ${person.name.first}`,
            email: person.email,
            phone: person.phone,
            street: `${person.location.street.number} ${person.location.street.name}`,
            city: person.location.city,
            state: person.location.state,
            postcode: person.location.postcode,
            image: person.picture.thumbnail,
            username: person.login.username
          };
        });

        this.setState(
          {
            count: this.handleLetterCount(lastNames),
            fullNames: fullNames,
            personDetails: personDetails
          },
          () => console.log(this.state.personDetails)
        );
      })
      .catch(error => console.log(error));
  };

  handleLetterCount = arr => {
    let countedLetters = new Array(26).fill(0);
    arr
      .map(item => item.toLowerCase().charCodeAt(0) - 97)
      .filter(item => item < 26)
      .map(num => countedLetters[num]++);
    return countedLetters;
  };

  toggleActiveTab = tab => {
    this.setState(
      {
        activeTab: tab
      }
      // () => console.log(this.state.activeTab)
    );
  };

  showContactCard = () => {
    this.setState({ isShown: true });
  };

  hideContactCard = () => {
    this.setState({ isShown: false });
  };

  render() {
    const { activeTab, count, fullNames, personDetails, isShown } = this.state;

    return (
      <div className="contact-app-container">
        <Tabs
          activeTab={activeTab}
          count={count}
          toggleActiveTab={this.toggleActiveTab}
        />
        <Contacts namesList={fullNames} activeTab={activeTab} showContactCard={this.showContactCard} />
        <ContactCard isShown={isShown} hide={this.hideContactCard} />
      </div>
    );
  }
}
