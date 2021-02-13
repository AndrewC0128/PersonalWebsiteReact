import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footerCredits: {
    paddingBottom: '1.85em',
    textAlign: 'center'
  },
  footerLine: {
    width: '188px',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}));

export default function Header() {
  const {footerCredits, footerLine} = useStyles();
  
  return (
    <div>
      <footer>
        <p>&nbsp;</p>
        <hr className={footerLine}/>
        <Typography className={footerCredits}>
          "It's all good." - JW<br/>&copy; 2020 Andrew Case
        </Typography>
      </footer>
    </div>
  );
}