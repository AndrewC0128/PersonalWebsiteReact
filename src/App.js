import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutMePage from './Pages/AboutMePage';
import FitnessPage from './Pages/FitnessPage';
import NotFound from './Pages/NotFoundPage';
import { JWQuote } from './Components/Footer';

export default function App() {
  const [footerQuote, setFooterQuote] = useState(JWQuote);

  function changeFooter(quote) {
    setFooterQuote(quote);
  }

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={AboutMePage}/>
        <Route exact path='/fitness' component={FitnessPage}/>
        <Route render={() => <NotFound changeFooter={changeFooter}/>}/>
      </Switch>
      <Footer quote={footerQuote}/>
	  </BrowserRouter>
  );
}