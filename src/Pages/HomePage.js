import React from 'react'
import Banner from '../Components/Banner'
import Introduction from '../Components/Introduction'
import Icons from '../Components/Icons'
import { setTitle } from '../Helpers'
import { IconObjects } from '../Components/Constants'

export const title = 'Home'

export default function HomePage () {
  const subtitle = '"An explorer\'s reward is a view of tomorrow\'s possibilities."'
  setTitle(title)

  return (
    <>
      <Banner title='Hi, I&apos;m Andrew Case.' subtitle={subtitle} typing={true}/>
      <Introduction/>
      <Icons icons={AboutIcons} lines={false} imgsPath='assets/iconFinderImages/' imgWidth={64} imgHeight={64}/>
    </>
  )
}

const AboutIcons = [
  IconObjects('College Degreed', 'degreed.png', '/about#baylor'),
  IconObjects('Programming Oreinted', 'code.png', '/about#prog'),
  IconObjects('Honor Society Scholar', 'honor.png', '/about#baylor'),
  IconObjects('Fitness Enthusiast', 'heartbeat.png', null), /* href: '/fitness' */
  IconObjects('Management Experience', 'mgmt.png', '/about#work'),
  IconObjects('Active Community Volunteer', 'volunteer.png', '/about#volunteer', true)
]
