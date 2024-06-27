import React from 'react'
import HimnoLayout from './../../Template/HimnoLayout'

const Description = ({route}: {route: any}) => {
  const {letter, title, index} = route.params
  return <HimnoLayout params={{letter, title, index}} description />
}

export default Description
