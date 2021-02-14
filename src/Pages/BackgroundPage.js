import React from 'react';
import Banner from '../Components/Banner';
import Icons from '../Components/Icons';
import Education from '../Components/Education';
import WorkExp from '../Components/WorkExp';
import { setTitle } from '../Helpers';

export default function BackgroundPage() {
  const subtitle = '"The roots of education are bitter, but the fruit is sweet." - Aristotle'
  setTitle('Background');

  return (
    <div>
      <Banner title='Background' subtitle={subtitle}/>
      <Icons icons={PageSectionIcons} imgsPath='assets/iconFinderImages/' lines={true}/>
      <Education id='education' title='BAYLOR UNIVERSITY' titleColor='#fecb00'
                 backgroundColor='#003015' paragraph={require('../assets/paragraphs/baylorParagraph.txt')}
                 img={require('../assets/judgeBaylor.jpg')} alt={'Judge Baylor Picture'}/>
      <Education title='LONE STAR COLLEGE' titleColor='#b30838' backgroundColor='#003768'
                 paragraph={require('../assets/paragraphs/lonestarParagraph.txt')}
                 img={require('../assets/lscGraduation.jpg')}
                 alt={'LSC Graduation Picture'} reverse='true'/>
      <Icons id='work' icons={ProgrammingLangIcons} imgsPath='assets/progLangs/' lines={false}/>
      <WorkExp/>
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