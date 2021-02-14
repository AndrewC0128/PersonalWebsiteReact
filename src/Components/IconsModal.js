import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import ParagraphModal from './ParagraphModal';
import { useStyles } from './Icons';

export default function IconsModal(props) {
  const {rowContainer, icon} = useStyles();
  const [openModal, setOpenModal] = useState({});

  return (
    <div className={rowContainer} style={{padding: '0% 5% 0% 5%', /*borderBottom: '2pt solid black'*/}}>
      {props.icons.map(({id, date, label, img, paragraph}) => (
        <div key={id} className={icon}>
          <Button key={label} style={{maxWidth: props.imgWidth, maxHeight: props.imgHeight, backgroundColor: 'transparent'}}
            onClick={() => setOpenModal({employer: id, img: require(`../${props.imgsPath}${img}`), title: label, date: date, paragraph: paragraph})}
          >
            <img key={img} src={require(`../${props.imgsPath}${img}`)} alt={label} style={{maxWidth: props.imgWidth}}/>
          </Button>
          <br/>
          {props.showLabel === false ? null : label }
        </div>
      ))}
      <ParagraphModal open={openModal}/>
    </div>
  )
}