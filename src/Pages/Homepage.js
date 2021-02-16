import React from 'react';
import Banner from '../Components/Banner';
import Introduction from '../Components/Introduction';
import Icons from '../Components/Icons';
import { setTitle } from '../Helpers';

export const title = 'Home'

export default function Homepage() {
  const subtitle = '"An explorer\'s reward is a view of tomorrow\'s possibilities."'
  setTitle(title);

  return (
    <>
      <Banner title='Hi, I&apos;m Andrew Case' subtitle={subtitle}/>
      <Introduction/>
      <Icons icons={AboutIcons} imgsPath='assets/iconFinderImages/' imgWidth={64}/>
    </>
  )
}

const AboutIcons = [
  {
    label: 'College Degreed',
    img: 'degreed.png',
    href: '/background#education'
  },
  {
    label: 'Programming Oreinted',
    img: 'code.png',
    href: '/background#work'
  },
  {
    label: 'Honor Society Scholar',
    img: 'honor.png',
    href: '/background#education'
  },
  {
    label: 'Fitness Enthusiast',
    img: 'heartbeat.png',
    href: '/fitness'
  },
  {
    label: 'Management Experience',
    img: 'mgmt.png',
    href: '/background#work'
  },
  {
    label: 'Active Community Volunteer',
    img: 'volunteer.png',
    href: '/background#work',
    lastOne: true
  },
]