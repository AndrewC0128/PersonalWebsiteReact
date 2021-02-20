import React, {useState, useEffect} from 'react';
import profilePicture from '../assets/profilePicture.jpg';
import mobileProfilePicture from '../assets/mobileProfilePicture.png';
import { makeStyles, Typography } from '@material-ui/core';
import { getParagraph, mobileViewWidth } from '../Helpers';
import { useViewport } from './Viewport';

export default function Introduction() {
  const {background, title, paragraph} = useStyles();
  const { width } = useViewport();

  // Set paragraph text from file
  const [paragraphText, setText] = useState('');
  useEffect(() => {
    getParagraph('./assets/paragraphs/aboutMeParagraph.txt').then(result => (
      setText(result)
    ))
  }, [])

  return (
    <div className={background}>
      <div className={paragraph}>
        {width < mobileViewWidth ? <div style={{textAlign: 'center'}}><img src={mobileProfilePicture} alt='Me'/></div> : null}
        <Typography variant='h2' className={title}>Introduction</Typography>
        {paragraphText}
        <p style={{textAlign: 'center'}}>
          Post-Graduation Employment:
          <a target='_blank' rel='noopener noreferrer' href='https://www.paycom.com/'>
            <img src='https://www.paycom.com/images/paycom-logo-black-clear.png?ver=1.2' alt='paycom-logo-black-clear' style={{maxWidth: '200px'}}/>
          </a>
        </p>
        <p>
          Please contact me via email by clicking the envelope icon in the upper right.
        </p>
      </div>
      {width < mobileViewWidth ? null : <img src={profilePicture} alt='Me' style={{ borderRadius: '8px', maxWidth: '400px'}}/>}
    </div>
  )
}

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
}))