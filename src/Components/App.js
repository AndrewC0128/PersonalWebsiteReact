import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Homepage from '../Pages/Homepage';

export default function App() {
  return (
    <div className="App">
		  <Header/>
      <Homepage/>
      <Footer/>
    </div>
  );
}