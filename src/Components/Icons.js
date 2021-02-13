import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  icons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '3% 15% 3% 15%',
  }
}))

export default function Icons(props) {
  const {icons} = useStyles();

  return (
    <div className={icons}>
      {props.icons.map(({label, img, href, lastOne}) => (
        <div key={label} style={{flex: 1, textAlign: 'center', borderRight: !lastOne ? '1px solid black' : null}}>
          <Button {...{
            key: href,
            to: href,
            component: Link,
            style: {maxWidth: 64}
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