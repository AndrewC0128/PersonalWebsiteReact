import React from 'react'
import { makeStyles } from '@material-ui/core'

export function getParagraph (filePath) {
  return fetch(require(`${filePath}`).default)
    .then(text => text.text()
      .then(t => t.split('\n').map(str => <p key={str}>{str}</p>)))
}

export function setTitle (page) {
  document.title = `${page} - Andrew Case`
}

export const mobileViewWidth = 620

export const HeaderBarSize = 64

export const useStyles = makeStyles(() => ({
  rowContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '3% 15% 3% 15%',
    alignItems: 'center'
  },
  paragraphTitle: {
    fontSize: '2em',
    fontWeight: 'bold'
  },
  hrLine: {
    borderTop: '2px solid black',
    maxWidth: '10%',
    textAlign: 'left',
    marginLeft: '0'
  },
  paragraph: {
    maxWidth: '400px',
    font: '1.05em/1.8em \'Open Sans\',Arial,Helvetica,sans-serif'
  },
  img: {
    borderRadius: '8px',
    maxWidth: '300px',
    textAlign: 'center'
  },
  icon: {
    flex: 1,
    textAlign: 'center'
  }
}))
