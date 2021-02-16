import React, { useEffect } from 'react';
import Banner from '../Components/Banner';
import { setTitle } from '../Helpers';
import travolta from '../assets/travolta.gif';
import { JWQuote } from '../Components/Footer';

export default function NotFound(props) {
  const subtitle = '“I have a very bad feeling about this.” - Luke Skywalker'
  setTitle('404 Error');
  
  useEffect(() => {
    props.changeFooter('');
    return () => {props.changeFooter(JWQuote)};
  }, [])

  return (
    <div style={{textAlign: 'center'}}>
      <Banner title='Page Not Found :/' subtitle={subtitle}/>
      <img src={travolta} alt='Travolta'/>
    </div>
  )
}