import React, {useState, useEffect} from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  background: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    textAlign: 'center'
  },
  picture: {
    borderRadius: '8px',
    maxWidth: '300px',
  }
}))

export default function Education(props) {
  const {background, title, paragraph, picture} = useStyles();
  
  // Set paragraph text from file
  const [paragraphText, setText] = useState('');
  useEffect(() => {
    fetch(props.paragraph)
    .then(text => text.text()
    .then(t => setText(t.split('\n').map(str => <p>{str}</p>))))
  }, [])

  return (
    <div className={background} id={props.id}
         style={{backgroundColor: props.backgroundColor, flexDirection: props.reverse ? 'row-reverse' : null}}>
      <div className={paragraph}>
          <Typography variant='h2' className={title} style={{color: props.titleColor}}>{props.title}</Typography>
          <p>{paragraphText}</p>
      </div>
      <img src={props.img} className={picture} alt={props.alt}/>
    </div>
  )
}