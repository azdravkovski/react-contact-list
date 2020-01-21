import React, { Component } from "react";
import "./Tabs.css";
import Tab from "./Tab";
import config from "../config.json";

export default class Tabs extends Component {
  state = {
    activeTab: config.tabs[0],
    count: [],
    fullNames: [] //needs default state to be "a"
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
          .filter(person => person.firstName.toLowerCase().charCodeAt(0) - 97 < 26);

        // console.log(lastNames);
        // console.log(fullNames);

        this.setState(
          {
            count: this.handleLetterCount(lastNames),
            fullNames: fullNames
          },
          () => console.table(this.state.fullNames)
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

  renderTabs() {
    return config.tabs.map((letter, i) => (
      <Tab
        letter={letter}
        key={i}
        onClick={() => this.toggleActiveTab(letter)}
        count={this.state.count[i]}
        isActive={this.state.activeTab === letter}
      />
    ));
  }

  render() {
    return <div className="tabs-list">{this.renderTabs()}</div>;
  }
}
