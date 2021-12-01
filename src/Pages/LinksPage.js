import React from 'react'
import { makeStyles, Button } from '@material-ui/core'
import backgroundImage from '../assets/blueridge.avif'
import { setTitle } from '../Helpers'

export const title = 'Links'

export default function LinksPage () {
  const { background, overlay, button } = useStyles()
  setTitle(title)

  function getButton (text, link) {
    return (
      <>
        <Button className={button} variant='outlined' href={link}>{text}</Button>
        <br/>
      </>
    )
  }

  return (
    <div className={background}>
      <div className={overlay}>
        {getButton('Titan Referral', 'https://titan.clothing/')}
        {getButton('Instagram', 'https://www.instagram.com/all_lower_case/')}
        {getButton('My Website', 'https://andrewcase.dev/')}
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
    height: '100vh',
    margin: 0
  },
  overlay: {
    backgroundColor: 'rgba(28,28,28, 0.83)',
    width: '100%',
    height: 'inherit',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    // textAlign: 'center',
  },
  button: {
    color: 'white',
    borderColor: 'white',
    borderRadius: '5px'
  }
}))
