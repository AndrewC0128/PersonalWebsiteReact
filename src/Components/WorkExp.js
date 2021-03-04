// This file is not currently being used in the project
import React, { useState, useEffect } from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import { getParagraph } from '../Helpers'

export default function WorkExp () {
  const { employerSection } = useStyles()
  const [paragraphs, setParagraphs] = useState([])

  useEffect(() => {
    Employers.map(({ paragraph }) => (
      paragraph.then(result => (
        setParagraphs(paragraphs => [...paragraphs, result])
      ))
    ))
  }, [])

  return (
    <div>
      {Employers.map(({ company, title, date, img, url, id, lastOne }) => (
        <div key={company} className={employerSection} style={{ borderBottom: !lastOne ? '1px solid black' : '' }}>
          <Button {...{
            key: url,
            href: url,
            target: '_blank',
            rel: 'noopener noreferrer',
            style: { flex: 1, maxWidth: '250px', maxHeight: '200px' }
          }}>
            <img key={img} src={require(`../${imgsPath}${img}`).default} alt={company}/>
          </Button>
          <div style={{ flex: 1, textAlign: 'left', margin: '0% 10% 0% 3%' }}>
            <Typography variant='h5'>{title}</Typography>
            <Typography variant='h6'>{date}</Typography>
            {paragraphs && paragraphs.map((result, index) => {
              return id === index ? result : null
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

const useStyles = makeStyles(() => ({
  employerSection: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center'
  }
}))

const imgsPath = 'assets/employers/'
const paragraphPath = 'assets/paragraphs/'

const Employers = [
  {
    company: 'ExxonMobil',
    date: 'Summer 2020 Remote Internship',
    title: 'Full Stack Developer Intern',
    img: 'xom.png',
    url: 'https://corporate.exxonmobil.com/',
    paragraph: getParagraph(`./${paragraphPath}xomParagraph.txt`),
    id: 0
  },
  {
    company: 'H-E-B',
    date: 'Summer 2019 Internship',
    title: 'Software Engineer Intern',
    img: 'heb.png',
    url: 'https://www.heb.com/',
    paragraph: getParagraph(`./${paragraphPath}hebParagraph.txt`),
    id: 1
  },
  {
    company: 'PDQ Restaurants',
    date: 'Oct 2015 - May 2017',
    title: 'Shift Manager',
    img: 'pdq.png',
    url: 'https://www.eatpdq.com/',
    paragraph: getParagraph(`./${paragraphPath}pdqParagraph.txt`),
    id: 2,
    lastOne: true
  }
]
