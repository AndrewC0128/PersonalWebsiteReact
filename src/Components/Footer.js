import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

export const JWQuote = '"It\'s all good." - JW'

const useStyles = makeStyles(() => ({
  footerCredits: {
    paddingBottom: '1.85em',
    textAlign: 'center'
  },
  footerLine: {
    width: '188px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))

export default function Footer (props) {
  const { footerCredits, footerLine } = useStyles()

  return (
    <footer>
      <p>&nbsp;</p>
      <hr className={footerLine}/>
      <Typography variant='caption'>
        <div className={footerCredits}>
          {props.quote}<br/>Copyright &copy; 2022 Andrew Case
        </div>
      </Typography>
    </footer>
  )
}
