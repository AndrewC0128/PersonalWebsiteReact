import React, { useEffect } from 'react'
import backgroundImage from '../assets/blueridge.jpg'
import { makeStyles, Typography } from '@material-ui/core'
import { init as Typist } from 'ityped'

const titles = [
  'Baylor Student',
  'Software Developer',
  'Lone Star College Alumnus'
]

export default function Banner (props) {
  const { background, overlay } = useStyles()

  useEffect(() => {
    if (props.typing) {
      const typingElement = document.querySelector('#typingElement')
      Typist(typingElement, { showCursor: true, strings: titles }) // cursorChar: '\u2588'
    }
  }, [])

  return (
    <div className={background}>
      <div className={overlay}>
        {props.typing
          ? <>
              <Typography variant="h4">{props.title}</Typography>
              <Typography variant="h2">{'I\'m a '}
                <div id='typingElement' style={{ display: 'inline' }}/>
              </Typography>
            </>
          : <Typography variant="h2">{props.title}</Typography>}
        <Typography variant="subtitle1" style={{ marginTop: '80px' }}>{props.subtitle}</Typography>
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
    width: '100%',
    height: '450px'
  },
  overlay: {
    backgroundColor: 'rgba(28,28,28, 0.83)',
    width: '100%',
    height: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    color: '#ffffff'
  }
}))
