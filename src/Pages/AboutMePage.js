import React from 'react'
import Banner from '../Components/Banner'
import Icons from '../Components/Icons'
import Education from '../Components/Education'
import { setTitle, getParagraph } from '../Helpers'
import IconsModal from '../Components/IconsModal'
import { Typography } from '@material-ui/core'

export const title = 'About Me'

export default function AboutMePage () {
  const subtitle = '"The roots of education are bitter, but the fruit is sweet." - Aristotle'
  setTitle(title)

  const BUProps = {
    id: 'baylor',
    title: 'BAYLOR UNIVERSITY',
    titleColor: '#fecb00',
    backgroundColor: '#003015',
    paragraph: require('../assets/paragraphs/baylorParagraph.txt').default,
    img: require('../assets/judgeBaylor.jpg').default,
    alt: 'Judge Baylor Picture'
  }

  const LSCProps = {
    id: 'lsc',
    title: 'LONE STAR COLLEGE',
    titleColor: '#b30838',
    backgroundColor: '#003768',
    paragraph: require('../assets/paragraphs/lonestarParagraph.txt').default,
    img: require('../assets/lscGraduation.jpg').default,
    alt: 'LSC Graduation Picture',
    reverse: 'true'
  }

  function getSectionHeader (title, id) {
    return (
      <div id={id} style={{ textAlign: 'center' }}>
        <Typography variant='h6'>{title}</Typography>
      </div>
    )
  }

  return (
    <>
      <Banner title={title} subtitle={subtitle}/>
      <Icons icons={PageSectionIcons} imgsPath='assets/iconFinderImages/' imgWidth={64}/>
      <Education {...BUProps}/>
      <Education {...LSCProps}/>
      <br/>
      {getSectionHeader('PREVIOUS EMPLOYERS', 'work')}
      <IconsModal icons={Employers} imgsPath='assets/employers/' imgWidth={250} imgHeight={200} showLabel={false}/>
      {getSectionHeader('PROGRAMMING EXPERIENCE', 'prog')}
      <Icons icons={ProgrammingLangIcons} imgsPath='assets/progLangs/' imgWidth={115} lines={false} showLabel={false}/>
      {getSectionHeader('AFFILIATIONS & VOLUNTEER WORK', 'volunteer')}
      <br/>
      <br/>
      <IconsModal icons={Affiliations} imgsPath='assets/employers/' imgWidth={150} imgHeight={150} showLabel={false}/>
      <br/>
    </>
  )
}

const PageSectionIcons = [
  {
    label: 'Education',
    img: 'education.png',
    href: '#baylor'
  },
  {
    label: 'Work Experience',
    img: 'work.png',
    href: '#work'
  },
  {
    label: 'Affiliations',
    img: 'affiliations.png',
    href: '#volunteer',
    lastOne: true
  }
]

// Use iOS Image Layout on Imag2icon
const ProgrammingLangIcons = [
  {
    label: 'C++',
    img: 'c++.png'
  },
  {
    label: 'C',
    img: 'c.png'
  },
  {
    label: 'Shell Scripting',
    img: 'bash.png'
  },
  {
    label: 'Java',
    img: 'java.png'
  },
  {
    label: 'Kotlin',
    img: 'kotlin.png'
  },
  {
    label: 'Python',
    img: 'python.png'
  },
  {
    label: 'MySQL',
    img: 'mysql.png'
  },
  {
    label: 'Angular',
    img: 'angular.png'
  },
  {
    label: 'C#',
    img: 'csharp.png'
  },
  {
    label: 'Spark+Hadoop',
    img: 'spark+hadoop.png'
  },
  {
    label: 'React',
    img: 'react.png',
    lastOne: true
  }
]

const paragraphPath = 'assets/paragraphs/'
// Use iMessage Image Layout on Imag2icon
const Employers = [
  {
    id: 'ExxonMobil',
    date: 'Summer 2020 Remote Internship',
    label: 'Full Stack Developer Intern',
    img: 'xom.png',
    paragraph: getParagraph(`./${paragraphPath}xomParagraph.txt`)
  },
  {
    id: 'H-E-B',
    date: 'Summer 2019 Internship',
    label: 'Software Engineer Intern',
    img: 'heb.png',
    paragraph: getParagraph(`./${paragraphPath}hebParagraph.txt`)
  },
  {
    id: 'PDQ Restaurants',
    date: 'Oct 2015 - May 2017',
    label: 'Shift Manager',
    img: 'pdq.png',
    paragraph: getParagraph(`./${paragraphPath}pdqParagraph.txt`)
  },
  {
    id: 'Dunkin Donuts',
    date: 'Mar 2015 - Jun 2016',
    label: 'Shift Leader',
    img: 'dunkin.png',
    paragraph: getParagraph(`./${paragraphPath}dunkinParagraph.txt`)
  }
]

// Use Square Image Layout on Imag2icon
const Affiliations = [
  {
    id: 'Baylor University Student Government',
    date: 'Jul 2020 - May 2021',
    label: 'Web Developer',
    img: 'stugov.png',
    paragraph: getParagraph(`./${paragraphPath}stugovParagraph.txt`)
  },
  {
    id: 'Computing for Compassion',
    date: 'Sept 2018 - May 2020',
    label: 'Member',
    img: 'c4c.png',
    paragraph: getParagraph(`./${paragraphPath}c4cParagraph.txt`)
  },
  {
    id: 'Upsilon Pi Epsilon (Baylor University Chapter)',
    date: 'Oct 2018 – Present',
    label: 'Member',
    img: 'upe.png',
    paragraph: getParagraph(`./${paragraphPath}upeParagraph.txt`)
  },
  {
    id: 'Baylor’s Virtual Reality Club',
    date: 'Feb 2018 – May 2018',
    label: 'Founding Member',
    img: 'baylorvr.png',
    paragraph: getParagraph(`./${paragraphPath}baylorvrParagraph.txt`)
  },
  {
    id: 'Phi Theta Kappa (Alpha Rho Mu Chapter)',
    date: 'Mar 2016 – Present',
    label: 'Member',
    img: 'ptk.png',
    paragraph: getParagraph(`./${paragraphPath}ptkParagraph.txt`)
  },
  {
    id: 'YMCA of Greater Houston',
    date: 'Aug 2017 – Present',
    label: 'Adult Volunteer',
    img: 'ymca.png',
    paragraph: getParagraph(`./${paragraphPath}ymcaParagraph.txt`)
  }
]
