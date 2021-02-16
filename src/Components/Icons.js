import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

export default function Icons(props) {
  const {rowContainer, icon} = useStyles();
  const history = useHistory();

  return (
    <div className={rowContainer}>
      {props.icons.map(({label, img, href, lastOne}) => (
        <div key={label} className={icon} style={{borderRight: (!lastOne && props.lines !== false) ? '1px solid black' : null}}>
          <Button {...{
            key: href ? href : `id${label}`,
            to: href ? href : history.location.pathname,
            component: Link,
            style: {maxWidth: props.imgWidth, maxHeight: props.imgHeight},
            disabled: href ? false : true
          }}>
            <img key={img} src={require(`../${props.imgsPath}${img}`)} alt={label} style={{maxWidth: props.imgWidth}}/>
          </Button>
          <br/>
          {props.showLabel === false ? null : label }
        </div>
      ))}
    </div>
  )
}

export const useStyles = makeStyles(() => ({
  rowContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '3% 15% 3% 15%',
    alignItems: 'center'
  },
  icon: {
    flex: 1,
    textAlign: 'center'
  }
}))