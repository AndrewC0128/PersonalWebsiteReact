import React from 'react'
import Banner from '../Components/Banner'
import { setTitle } from '../Helpers'

export const title = 'Fitness'

export default function FitnessPage () {
  const subtitle = '"Success isn\'t always about greatness. It\'s about consistency. Consistent hard work leads to success. Greatness will come." - Dwayne Johnson'
  setTitle(title)

  return (
    <>
      <Banner title={`${title} & Nutrition`} subtitle={subtitle}/>
    </>
  )
}
