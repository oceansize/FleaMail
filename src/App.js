import React, { Component } from 'react';
import './App.css';
import Entry from './Entry';
import allFleaMails from "./all_fleamails.json";


function App() {
  const firstEntry = allFleaMails.data[0].entries[0];
  const secondEntry = allFleaMails.data[1].entries[0];

  return (
    <div className="App">
      <h1>FleaMails</h1>
      <Entry entry={firstEntry} />
      <Entry entry={secondEntry} />
    </div>
  );
}

export default App;

