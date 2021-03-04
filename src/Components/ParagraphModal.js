import React, { useState, useEffect } from 'react'
import { Button, Modal, makeStyles } from '@material-ui/core'
import { useViewport } from './Viewport'
import { mobileViewWidth } from '../Helpers'

export default function ParagraphModal (props) {
  const { modalStyling } = useStyles()
  const { width } = useViewport()

  const [open, setOpen] = useState(false)
  const [paragraph, setParagraph] = useState([])
  const handleClose = () => {
    setParagraph([])
    setOpen(false)
  }
  useEffect(() => {
    // Validate that all info is in props.open
    if (props.open && props.open.paragraph && Object.keys(props.open).length === 5) {
      props.open.paragraph.then(result => (
        setParagraph(paragraph => [...paragraph, result])
      ))
      setOpen(true)
    }
  }, [props.open])

  const modalBody = (
    <div className={modalStyling}>
      <div style={{ display: 'flex', flexDirection: width < mobileViewWidth ? 'column' : 'row', justifyContent: 'space-between' }}>
        <div>
          <h1>{props.open.employer}</h1>
          <h2>{props.open.title}</h2>
          <h3>{props.open.date}</h3>
        </div>
        {width < mobileViewWidth ? null : <img src={props.open.img} alt={props.open.title} style={{ maxHeight: 150 }}/>}
      </div>
      {paragraph && paragraph.map((result) => {
        return result
      })}
      <div style={{ textAlign: 'right' }}>
        <Button onClick={handleClose}>
          Close
        </Button>
      </div>
    </div>
  )

  return (
    <div>
      <Modal open={open} onClose={handleClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: width }}>
        {modalBody}
      </Modal>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  modalStyling: {
    position: 'absolute',
    maxWidth: '850px',
    backgroundColor: 'white',
    border: '2px solid #000',
    padding: theme.spacing(2, 4, 3)
  }
}))
