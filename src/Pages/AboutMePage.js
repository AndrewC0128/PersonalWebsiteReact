import React from 'react'
import Banner from '../Components/Banner'
import Icons from '../Components/Icons'
import Education from '../Components/Education'
import { setTitle, getParagraph } from '../Helpers'
import IconsModal from '../Components/IconsModal'
import { Typography } from '@material-ui/core'
import { IconObjects } from '../Components/Objects'

export const title = 'About Me'

const EmployerObjects = (id, date, label, img, paragraph = null) => {
  return { id: id, date: date, label: label, img: img, paragraph: paragraph }
}

const SchoolProps = (id, title, titleColor, backgroundColor, paragraph, img, altText, reverse = false) => {
  return { id: id, title: title, titleColor: titleColor, backgroundColor: backgroundColor, paragraph: paragraph, img: img, alt: altText, reverse: reverse }
}

export default function AboutMePage () {
  const subtitle = '"The roots of education are bitter, but the fruit is sweet." - Aristotle'
  setTitle(title)

  const BUProps = SchoolProps('baylor', 'BAYLOR UNIVERSITY', '#fecb00', '#003015',
    './assets/paragraphs/baylorParagraph.txt', require('../assets/judgeBaylor.jpg').default, 'Judge Baylor Picture'
  )

  const LSCProps = SchoolProps('lsc', 'LONE STAR COLLEGE', '#b30838', '#003768',
    './assets/paragraphs/lonestarParagraph.txt', require('../assets/lscGraduation.jpg').default, 'LSC Graduation Picture', true
  )

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
      {getSectionHeader('EMPLOYERS', 'work')}
      <IconsModal icons={Employers} imgsPath='assets/employers/' imgWidth={250} imgHeight={200} showLabel={false}/>
      {getSectionHeader('PROGRAMMING EXPERIENCE', 'prog')}
      <Icons icons={ProgrammingLangIcons} imgsPath='assets/progLangs/' imgWidth={100} lines={false} showLabel={false}/>
      {getSectionHeader('AFFILIATIONS & VOLUNTEER WORK', 'volunteer')}
      <br/>
      <br/>
      <IconsModal icons={Affiliations} imgsPath='assets/employers/' imgWidth={150} imgHeight={150} showLabel={false}/>
      <br/>
    </>
  )
}

const PageSectionIcons = [
  IconObjects('Education', 'education.png', '#baylor'),
  IconObjects('Work Experience', 'work.png', '#work'),
  IconObjects('Affiliations', 'affiliations.png', '#volunteer', true)
]

// Use iOS Image Layout on Imag2icon
const ProgrammingLangIcons = [
  IconObjects('C++', 'c++.png'),
  IconObjects('C', 'c.png'),
  IconObjects('Shell Scripting', 'bash.png'),
  IconObjects('Java', 'java.png'),
  IconObjects('Kotlin', 'kotlin.png'),
  IconObjects('Python', 'python.png'),
  IconObjects('MySQL', 'mysql.png'),
  IconObjects('Angular', 'angular.png'),
  IconObjects('C#', 'csharp.png'),
  IconObjects('Spark+Hadoop', 'spark+hadoop.png'),
  IconObjects('React', 'react.png', null, true)
]

// Use iMessage Image Layout on Imag2icon
const Employers = [
  EmployerObjects('Paycom', 'Current', 'Software Developer I', 'paycom.png'),
  EmployerObjects('ExxonMobil', 'Summer 2020 Remote Internship', 'Full Stack Developer Intern', 'xom.png', getParagraph('./assets/paragraphs/xomParagraph.txt')),
  EmployerObjects('H-E-B', 'Summer 2019 Internship', 'Software Engineer Intern', 'heb.png', getParagraph('./assets/paragraphs/hebParagraph.txt'))
  // EmployerObjects('PDQ Restaurants', 'Oct 2015 - May 2017', 'Shift Manager', 'pdq.png', getParagraph(`./assets/paragraphs/pdqParagraph.txt`))
  // EmployerObjects('Dunkin Donuts', 'Mar 2015 - Jun 2016', 'Shift Leader', 'dunkin.png', getParagraph(`./assets/paragraphs/dunkinParagraph.txt`))
]

// Use Square Image Layout on Imag2icon
const Affiliations = [
  EmployerObjects('Baylor University Student Government', 'Jul 2020 - Jul 2021', 'Web Developer', 'stugov.png', getParagraph('./assets/paragraphs/stugovParagraph.txt')),
  EmployerObjects('Computing for Compassion', 'Sept 2018 - May 2020', 'Member', 'c4c.png', getParagraph('./assets/paragraphs/c4cParagraph.txt')),
  EmployerObjects('Upsilon Pi Epsilon (Baylor University Chapter)', 'Oct 2018 – May 2021', 'Member', 'upe.png', getParagraph('./assets/paragraphs/upeParagraph.txt')),
  EmployerObjects('Baylor’s Virtual Reality Club', 'Feb 2018 – May 2018', 'Founding Member', 'baylorvr.png', getParagraph('./assets/paragraphs/baylorvrParagraph.txt')),
  EmployerObjects('Phi Theta Kappa (Alpha Rho Mu Chapter)', 'Mar 2016 – May 2017', 'Member', 'ptk.png', getParagraph('./assets/paragraphs/ptkParagraph.txt')),
  EmployerObjects('YMCA of Greater Houston', 'Aug 2017 – Aug 2018', 'Adult Volunteer', 'ymca.png', getParagraph('./assets/paragraphs/ymcaParagraph.txt'))
]
