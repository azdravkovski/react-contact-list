import React, { Component } from "react";
import Tabs from "./Tabs";
import Contacts from "./Contacts";
import "./ContactList.css";
import config from "../config.json";

export default class ContactList extends Component {
  state = {
    activeTab: config.tabs[0],
    count: [],
    fullNames: [], //needs default state to be "a"
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

        this.setState({
          count: this.handleLetterCount(lastNames),
          fullNames: fullNames
        });
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

  render() {
    const { activeTab, count, fullNames } = this.state;

    return (
      <div className="contact-app-container">
        <Tabs
          activeTab={activeTab}
          count={count}
          toggleActiveTab={this.toggleActiveTab}
        />
        <Contacts namesList={fullNames} activeTab={activeTab} />
      </div>
    );
  }
}
