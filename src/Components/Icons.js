import React from 'react'
import { Button } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { useViewport } from './Viewport'
import { mobileViewWidth, useStyles } from '../Helpers'

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
            style: { width: props.imgWidth, height: props.imgHeight },
            disabled: !href
          }}>
            <img key={img} src={require(`../${props.imgsPath}${img}`).default} alt={label}
              width={props.imgWidth} height={props.imgHeight} style={{ maxWidth: props.imgWidth }}/>
          </Button>
          <br/>
          {props.showLabel === false ? null : label }
        </div>
      ))}
    </div>
  )
}
