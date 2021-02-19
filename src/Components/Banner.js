import React, { useEffect } from 'react';
import backgroundImage from '../assets/blueridge.jpg'
import { makeStyles, Typography } from '@material-ui/core';
import { init } from 'ityped'

const titles = [
  'Baylor Graduate',
  'Software Developer'
]

export default function Banner(props) {
  const {background, overlay} = useStyles();

  useEffect(() => {
    if (props.typing) {
      const typingElement = document.querySelector('#typingElement');
      init(typingElement, { showCursor: true, strings: titles})
    }
  }, [])

  return (
    <div className={background}>
      <div className={overlay}>
        {props.typing ? 
          <>
            <Typography variant="h4">{props.title}</Typography>
            <Typography variant="h2">{'I\'m a '}
              <div id='typingElement' style={{display:'inline'}}/>
            </Typography>
          </> : <Typography variant="h2">{props.title}</Typography>}
        <Typography variant="subtitle1" style={{marginTop: '80px'}}>{props.subtitle}</Typography>
      </div>
    </div>
  )
}

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