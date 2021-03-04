import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { useViewport } from './Viewport'
import { mobileViewWidth } from '../Helpers'

export default function Icons (props) {
  const { rowContainer, icon } = useStyles()
  const history = useHistory()
  const { width } = useViewport()

  return (
    <div className={rowContainer} style={{ flexWrap: width < mobileViewWidth ? 'wrap' : null }}>
      {props.icons.map(({ label, img, href, lastOne }) => (
        <div key={label} className={icon}
             style={{ borderRight: (!lastOne && props.lines !== false) ? '1px solid black' : null, flexBasis: width < mobileViewWidth ? '33%' : null }}>
          <Button {...{
            key: href || `id${label}`,
            to: href || history.location.pathname,
            component: Link,
            style: { maxWidth: props.imgWidth, maxHeight: props.imgHeight },
            disabled: !href
          }}>
            <img key={img} src={require(`../${props.imgsPath}${img}`).default} alt={label} style={{ maxWidth: props.imgWidth }}/>
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
