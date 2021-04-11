import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import ParagraphModal from './ParagraphModal'
import { useViewport } from './Viewport'
import { mobileViewWidth, useStyles } from '../Helpers'

export default function IconsModal (props) {
  const { rowContainer, icon } = useStyles()
  const [openModal, setOpenModal] = useState({})
  const { width } = useViewport()

  return (
    <div className={rowContainer} style={{ padding: '0% 5% 0% 5%', flexWrap: width < mobileViewWidth ? 'wrap' : null /* borderBottom: '2pt solid black' */ }}>
      {props.icons.map(({ id, date, label, img, paragraph }) => (
        <div key={id} className={icon}>
          <Button key={label} style={{ maxWidth: props.imgWidth, maxHeight: props.imgHeight, backgroundColor: 'transparent' }}
            onClick={() => setOpenModal({ employer: id, img: require(`../${props.imgsPath}${img}`).default, title: label, date: date, paragraph: paragraph })}
          >
            <img key={img} src={require(`../${props.imgsPath}${img}`).default} alt={label} style={{ maxWidth: props.imgWidth }}/>
          </Button>
          <br/>
          {props.showLabel === false ? null : label }
        </div>
      ))}
      <ParagraphModal open={openModal} imgSize={[props.imgHeight, props.imgWidth]}/>
    </div>
  )
}
