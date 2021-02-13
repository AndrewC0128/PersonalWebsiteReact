import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';

const AboutIcons = [
  {
    label: 'College Degreed',
    img: 'degreed.png',
    href: 'degree'
  },
  {
    label: 'Coding Experience',
    img: 'exp.png',
    href: 'exp'
  },
  {
    label: 'Honor Society Scholar',
    img: 'honor.png',
    href: 'honor'
  },
  {
    label: 'Dean\'s List',
    img: 'list.png',
    href: 'list'
  },
  {
    label: 'Management Experience',
    img: 'mgmt.png',
    href: 'mgmt'
  },
  {
    label: 'Active Community Volunteer',
    img: 'volunteer.png',
    href: 'volunteer'
  },
]

const useStyles = makeStyles(() => ({
  icons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    // padding: '3%',
    padding: '3% 15% 3% 15%',
  }
}))

export default function Homepage() {
  const {icons} = useStyles();
  const subtitle = '"An explorer\'s reward is a view of tomorrow\'s possibilities."'

  const getAboutIcons = () => {
    return (
      <div className={icons}>
        {AboutIcons.map(({label, img, href}) => (
          <div style={{flex: 1, textAlign: 'center', borderRight: href !== 'volunteer' ? '1px solid black' : null}}>
            <Button {...{
              key: label,
              to: href,
              style: {maxWidth: 64}
            }}>
              <img key={img} src={require(`../assets/iconFinderImages/${img}`)} alt={label} style={{maxWidth: 64}}/>
            </Button>
            <br/>
            {label}
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <Banner title="Hi, I'm Andrew Case" subtitle={subtitle}/>
      <AboutMe/>
      {getAboutIcons()}
    </>
  )
}