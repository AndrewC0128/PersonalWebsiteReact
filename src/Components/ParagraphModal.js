import React, { useState, useEffect } from 'react';
import { Button, Modal, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modalStyling: {
    position: 'absolute',
    width: '800px',
    backgroundColor: 'white',
    border: '2px solid #000',
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ParagraphModal(props) {
  const {modalStyling} = useStyles();

  const [open, setOpen] = useState(false);
  const [paragraph, setParagraph] = useState([]);
  const handleClose = () => {
    setParagraph([]);
    setOpen(false);
  };
  useEffect(() => {
    if (props.open && props.open.paragraph && Object.keys(props.open).length === 5) {
      props.open.paragraph.then(result => (
        setParagraph(paragraph => [...paragraph, result])
      ))
      setOpen(true);
    }
  }, [props.open])

  const body = (
    <div className={modalStyling}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div>
          <h1>{props.open.employer}</h1>
          <h2>{props.open.title}</h2>
          <h3>{props.open.date}</h3>
        </div>
        <img src={props.open.img} alt={props.open.title} style={{maxHeight: 150}}/>
      </div>
      {paragraph && paragraph.map((result) => {
        return result
      })}
      <div style={{textAlign: 'right'}}>
        <Button onClick={handleClose}>
          Close
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Modal open={open} onClose={handleClose} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        {body}
      </Modal>
    </div>
  )
}