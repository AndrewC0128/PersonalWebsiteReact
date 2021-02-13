import React, {useState, useEffect} from 'react';
import profilePicture from '../assets/profilePicture.jpg'
import aboutMeParagraph from '../assets/aboutMeParagraph.txt';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  background: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#808080',
    padding: '3% 15% 3% 15%',
    color: 'white'
  },
  title: {
    fontSize: '2em', 
    fontWeight: 'bold', 
    textAlign: 'center'
  },
  paragraph: {
    maxWidth: '400px',
    font: '1.05em/1.8em \'Open Sans\',Arial,Helvetica,sans-serif',
    textAlign: 'left'
  },
  picture: {
    borderRadius: '8px',
    maxWidth: '400px',
  }
}))

export default function AboutMe() {
  const {background, title, paragraph, picture} = useStyles();

  // Set paragraph text from file
  const [paragraphText, setText] = useState('');
  useEffect(() => {
    fetch(aboutMeParagraph)
    .then(text => text.text()
    .then(t => setText(t.split('\n').map(str => <p key={str}>{str}</p>))))
  }, [])

  return (
    <div className={background}>
      <div className={paragraph}>
          <Typography variant='h2' className={title}>About Me</Typography>
          {paragraphText}
          <p style={{textAlign: 'center'}}>
            Post-Graduation Employment:
            <a target='_blank' rel='noopener noreferrer' href='https://www.paycom.com/'>
              <img src='https://www.paycom.com/images/paycom-logo-black-clear.png?ver=1.2' style={{maxWidth: '200px'}} alt='paycom-logo-black-clear'/>
            </a>
          </p>
          <p>
            Please contact me via email by clicking the envelope icon in the upper right side of the screen.
          </p>
      </div>
      <img src={profilePicture} className={picture} alt='Me'/>
    </div>
  )
} 