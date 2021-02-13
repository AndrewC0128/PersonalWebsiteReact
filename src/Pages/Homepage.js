import React from 'react';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import Icons from '../Components/Icons';

const AboutIcons = [
  {
    label: 'College Degreed',
    img: 'degreed.png',
    href: '/background#education'
  },
  {
    label: 'Programming Background',
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
    href: 'volunteer',
    lastOne: true
  },
]

export default function Homepage() {
  const subtitle = '"An explorer\'s reward is a view of tomorrow\'s possibilities."'

  return (
    <>
      <Banner title="Hi, I'm Andrew Case" subtitle={subtitle}/>
      <AboutMe/>
      <Icons icons={AboutIcons} imgsPath='assets/iconFinderImages/'/>
    </>
  )
}