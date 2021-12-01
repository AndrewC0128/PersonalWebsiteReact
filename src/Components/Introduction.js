import React, { useState, useEffect } from 'react'
import profilePicture from '../assets/profilePicture.jpg'
import mobileProfilePicture from '../assets/mobileProfilePicture.avif'
import { Typography } from '@material-ui/core'
import { getParagraph, mobileViewWidth, useStyles } from '../Helpers'
import { useViewport } from './Viewport'

export default function Introduction () {
  const { paragraphTitle, hrLine, paragraph, img, rowContainer } = useStyles()
  const { width } = useViewport()

  // Set paragraph text from file
  const [paragraphText, setText] = useState('')
  useEffect(() => {
    getParagraph('./assets/paragraphs/aboutMeParagraph.txt').then(result => (
      setText(result)
    ))
  }, [])

  return (
    <div className={rowContainer}>
      <div className={paragraph}>
        {width < mobileViewWidth ? <img src={mobileProfilePicture} alt='Me' className={img}/> : null}
        <Typography variant='h2' className={paragraphTitle}>Intro</Typography>
        <hr className={hrLine}/>
        {paragraphText}
        {/* <p style={{ textAlign: 'center' }}>
          Post-Graduation Employment:
          <a target='_blank' rel='noopener noreferrer' href='https://www.paycom.com/'>
            <img src='https://www.paycom.com/images/paycom-logo-black-clear.png?ver=1.2'
            alt='paycom-logo-black-clear'
            style={{ maxWidth: '200px' }}/>
          </a>
        </p> */}
        <p>Please contact me via email by clicking the envelope icon in the upper
          right or connecting with me on social media.</p>
      </div>
      {width < mobileViewWidth ? null : <img src={profilePicture} alt='Me' className={img} style={{ maxWidth: '400px' }}/>}
    </div>
  )
}
