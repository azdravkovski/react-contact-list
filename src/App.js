import React from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import config from "./config.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{config.title}</h1>
      </header>
      <main className="App-main">
        <ContactList />
      </main>
    </div>
  );
}

export default App;
