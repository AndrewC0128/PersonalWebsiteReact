import React from 'react';
import backgroundImage from '../assets/blueridge.jpg'
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  background: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${backgroundImage})`,
    width: window.innerWidth,
    height: '450px'
  },
  overlay: {
    backgroundColor: 'rgba(28,28,28, 0.83)',
    width: window.innerWidth,
    height: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    color: '#ffffff'
  },
}));

export default function Banner(props) {
  const {background, overlay} = useStyles();

  return (
    <div className={background}>
      <div className={overlay}>
        <Typography variant="h1">{props.title}</Typography>
        <Typography variant="subtitle1" style={{marginTop: '80px'}}>{props.subtitle}</Typography>
      </div>
    </div>
  )
}