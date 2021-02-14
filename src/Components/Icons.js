import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  icons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '3% 15% 3% 15%',
  }
}))

export default function Icons(props) {
  const {icons} = useStyles();
  const history = useHistory();

  return (
    <div className={icons}>
      {props.icons.map(({label, img, href, lastOne}) => (
        <div key={label} style={{flex: 1, textAlign: 'center', borderRight: (!lastOne && props.lines) ? '1px solid black' : null}}>
          <Button {...{
            key: href ? href : `id${label}`,
            to: href ? href : history.location.pathname,
            component: Link,
            style: {maxWidth: 64},
            disabled: href ? false : true
          }}>
            <img key={img} src={require(`../${props.imgsPath}${img}`)} alt={label} style={{maxWidth: 64}}/>
          </Button>
          <br/>
          {label}
        </div>
      ))}
    </div>
  )
}