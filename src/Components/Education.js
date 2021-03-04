import React, { useState, useEffect } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { mobileViewWidth } from '../Helpers'
import { useViewport } from './Viewport'

export default function Education (props) {
  const { background, title, paragraph, img } = useStyles()
  const { width } = useViewport()

  // Set paragraph text from file
  const [paragraphText, setText] = useState('')
  useEffect(() => {
    fetch(props.paragraph)
      .then(text => text.text()
        .then(t => setText(t.split('\n').map(str => <p key={str}>{str}</p>))))
  })

  return (
    <div className={background} id={props.id}
         style={{ backgroundColor: props.backgroundColor, flexDirection: width < mobileViewWidth ? 'column' : (props.reverse ? 'row-reverse' : null) }}>
      {width < mobileViewWidth ? <div style={{ textAlign: 'center' }}><img src={props.img} alt={props.alt} className={img}/></div> : null}
      <div className={paragraph}>
          <Typography variant='h2' className={title} style={{ color: props.titleColor }}>{props.title}</Typography>
          {paragraphText}
      </div>
      {width < mobileViewWidth ? null : <img src={props.img} alt={props.alt} className={img}/>}
    </div>
  )
}

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
  img: {
    borderRadius: '8px',
    maxWidth: '300px'
  }
}))
