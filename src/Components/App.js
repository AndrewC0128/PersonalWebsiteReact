import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

export default function App() {
  const subtitle = '"An explorer\'s reward is a view of tomorrow\'s possibilities."'

  return (
    <div className="App">
		  <Header/>
      <Banner title="Hi, I'm Andrew Case" subtitle={subtitle}/>
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
      <Footer/>
    </div>
  );
}