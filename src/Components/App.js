import React from 'react';
import '../styles/App.css';
import Header from './Header';

export default function App() {
  return (
    <div className="App">
		  <Header displaytext="First Component Data"/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
    </div>
  );
}