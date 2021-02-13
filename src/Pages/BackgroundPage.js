import React from 'react';
import Banner from '../Components/Banner';
import Icons from '../Components/Icons';
import Education from '../Components/Education';

const SectionIcons = [
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

export default function BackgroundPage() {
  const subtitle = '"The roots of education are bitter, but the fruit is sweet." - Aristotle'

  return (
    <div>
      <Banner title='Background' subtitle={subtitle}/>
      <Icons icons={SectionIcons} imgsPath='assets/iconFinderImages/'/>
      <Education id='education' title='BAYLOR UNIVERSITY'
                 titleColor='#fecb00' backgroundColor='#003015'
                 paragraph={require('../assets/baylorParagraph.txt')}
                 img={require('../assets/judgeBaylor.jpg')}
                 alt={'Judge Baylor Picture'}/>
      <Education title='LONE STAR COLLEGE' titleColor='#b30838' backgroundColor='#003768'
                 paragraph={require('../assets/lonestarParagraph.txt')}
                 img={require('../assets/lscGraduation.jpg')}
                 alt={'LSC Graduation Picture'} reverse='true'/>
    </div>
  )
}