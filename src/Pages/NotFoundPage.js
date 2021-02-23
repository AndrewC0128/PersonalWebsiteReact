import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Banner from '../Components/Banner';
import { setTitle } from '../Helpers';
import travolta from '../assets/travolta.gif';
import { JWQuote } from '../Components/Footer';
import { mobileViewWidth } from '../Helpers';

export default function NotFound(props) {
  const {img} = useStyles();
  const subtitle = '“I have a very bad feeling about this.” - Luke Skywalker'
  setTitle('404 Error');
  
  useEffect(() => {
    props.changeFooter('');
    return () => {props.changeFooter(JWQuote)};
  }, [])

  return (
    <div style={{textAlign: 'center'}}>
      <Banner title='Page Not Found' subtitle={subtitle}/>
      <img src={travolta} alt='Travolta' className={img}/>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  img: {
    // maxWidth is 300px when the screen is mobile
    [`@media (max-width: ${mobileViewWidth}px)`]: {
      maxWidth: '300px'
    }
  }
}));