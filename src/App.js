import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import BackgroundPage from './Pages/BackgroundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/background' component={BackgroundPage}/>
        {/* <Route component={NotFound}/> */}
      </Switch>
      <Footer/>
	  </BrowserRouter>
  );
}