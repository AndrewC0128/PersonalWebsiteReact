import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutMePage from './Pages/AboutMePage';
import FitnessPage from './Pages/FitnessPage';
import NotFound from './Pages/NotFoundPage';
import { JWQuote } from './Components/Footer';
import HomePage from './Pages/HomePage';
import LinksPage from './Pages/LinksPage';

export default function App() {
  // Allows the footer quote to be changed dynamically
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
        <Route exact path='/links' component={LinksPage}/>
        <Route render={() => <NotFound changeFooter={changeFooter}/>}/>
      </Switch>
      <Footer quote={footerQuote}/>
	  </BrowserRouter>
  );
}