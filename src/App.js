import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import allFleaMails from "./all_fleamails.json";


function App() {
  const firstEntry = allFleaMails.data[0].entries[0];
  const secondEntry = allFleaMails.data[1].entries[0];

  return (
    <div className="App">
      <DiaryEntry title="whatever" entry={firstEntry} />
      <DiaryEntry title="also whatever" entry={secondEntry} />
    </div>
  );
}


function DiaryEntry(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        <li>Author: {props.entry.author}</li>
        <li>Date: {props.entry.date}</li>
        <li>Recipient: {props.entry.recipient}</li>
        <li>Subject: {props.entry.subject}</li>
        <li>Body: {props.entry.body}</li>
      </ul>
    </div>
  );
}

export default App;

