import React, { useState, useEffect } from 'react'
import { Typography } from '@material-ui/core'
import { getParagraph, mobileViewWidth, useStyles } from '../Helpers'
import { useViewport } from './Viewport'

export default function Education (props) {
  const { rowContainer, paragraphTitle, paragraph, img } = useStyles()
  const { width } = useViewport()

  // Set paragraph text from file
  const [paragraphText, setText] = useState('')
  useEffect(() => {
    getParagraph(props.paragraph).then(text => setText(text))
  }, [])

  return (
    <div className={rowContainer} id={props.id}
         style={{
           backgroundColor: props.backgroundColor,
           flexDirection: width < mobileViewWidth ? 'column' : (props.reverse ? 'row-reverse' : null),
           color: 'white'
         }}>
        {width < mobileViewWidth ? <img src={props.img} alt={props.alt} className={img}/> : null}
        <div className={paragraph} style={{ textAlign: 'center' }}>
            <Typography variant='h2' className={paragraphTitle} style={{ color: props.titleColor, textAlign: 'center' }}>
              {props.title}
            </Typography>
            {paragraphText}
        </div>
      {width < mobileViewWidth ? null : <img src={props.img} alt={props.alt} className={img}/>}
    </div>
  )
}
