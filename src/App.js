import React from "react";
import "./App.css";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact List</h1>
      </header>
      <main className="App-main">
        <ContactList />
      </main>
    </div>
  );
}

export default App;
