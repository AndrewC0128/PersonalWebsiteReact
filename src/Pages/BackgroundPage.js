import React from 'react';
import Banner from '../Components/Banner';
import Icons from '../Components/Icons';
import Education from '../Components/Education';
import { setTitle, getParagraph } from '../Helpers';

export default function BackgroundPage() {
  const subtitle = '"The roots of education are bitter, but the fruit is sweet." - Aristotle'
  setTitle('Background');

  return (
    <div>
      <Banner title='Background' subtitle={subtitle}/>
      <Icons icons={PageSectionIcons} imgsPath='assets/iconFinderImages/' imgWidth={64} lines={true}/>
      <Icons id='work' icons={ProgrammingLangIcons} imgsPath='assets/progLangs/' imgWidth={64} lines={false}/>
      <Education id='education' title='BAYLOR UNIVERSITY' titleColor='#fecb00'
                 backgroundColor='#003015' paragraph={require('../assets/paragraphs/baylorParagraph.txt')}
                 img={require('../assets/judgeBaylor.jpg')} alt={'Judge Baylor Picture'}/>
      <Education title='LONE STAR COLLEGE' titleColor='#b30838' backgroundColor='#003768'
                 paragraph={require('../assets/paragraphs/lonestarParagraph.txt')}
                 img={require('../assets/lscGraduation.jpg')}
                 alt={'LSC Graduation Picture'} reverse='true'/>
      <Icons icons={Employers} imgsPath='assets/employers/' imgWidth={250} imgHeight={200} lines={false}/>
    </div>
  )
}

const PageSectionIcons = [
  {
    label: 'Education',
    img: 'education.png',
    href: '#education'
  },
  {
    label: 'Work Experience',
    img: 'work.png',
    href: '#work'
  },
  {
    label: 'Affiliations',
    img: 'affiliations.png',
    href: '#affiliations',
    lastOne: true
  },
]

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
    label: 'React',
    img: 'react.png',
    lastOne: true
  },
]

const paragraphPath = 'assets/paragraphs/';

const Employers = [
  {
    id: 'ExxonMobil',
    date: 'Summer 2020 Remote Internship',
    label: 'Full Stack Developer Intern',
    img: 'xom.png',
    href: 'https://corporate.exxonmobil.com/',
    paragraph: getParagraph(`./${paragraphPath}xomParagraph.txt`),
  },
  {
    id: 'H-E-B',
    date: 'Summer 2019 Internship',
    label: 'Software Engineer Intern',
    img: 'heb.png',
    href: 'https://www.heb.com/',
    paragraph: getParagraph(`./${paragraphPath}hebParagraph.txt`),
  },
  {
    id: 'PDQ Restaurants',
    date: 'Oct 2015 - May 2017',
    label: 'Shift Manager',
    img: 'pdq.png',
    href: 'https://www.eatpdq.com/',
    paragraph: getParagraph(`./${paragraphPath}pdqParagraph.txt`),
  },
  {
    id: 'Dunkin Donuts',
    date: 'Mar 2015 - Jun 2016',
    label: 'Shift Leader',
    img: 'dunkin.png',
    href: 'https://www.dunkindonuts.com/en',
    paragraph: getParagraph(`./${paragraphPath}dunkinParagraph.txt`),
  },
]